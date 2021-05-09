library(magrittr)
library(purrr)


# Helper functions --------------------------------------------------------
remove_first_line <- function(fpath) {
    lines <- readLines(fpath)
    if (lines[1] == "") {
        writeLines(lines[-1], fpath)
    }
    fpath
}

remove_html_preserve <- function(fpath) {
    fpath %>%
        readLines() %>%
        gsub(pattern = "<!--html_preserve-->", replacement = "", fixed = T) %>%
        gsub(pattern = "<!--/html_preserve-->", replacement = "", fixed = T) %>%
        writeLines(con = fpath)
}

highlight_codeblock <- function(fpath, block_num, line_num) {
    if (length(fpath) == 0) return(NULL)
    if (length(block_num) != length(line_num)) {
        stop("The `block_num` argument must match the `line_num` argument.")
    }
    lines <- readLines(fpath)
    res <- lines
    for (i in seq_along(block_num)) {
        ind <- which(lines == "``` sketch")[block_num[i]]
        res[ind] <- glue::glue('```sketch {{{paste(line_num[[i]], collapse = ",")}}} ')
    }
    writeLines(res, fpath)
    lines
}

clean_md <- compose(remove_html_preserve, remove_first_line)


# Compute and save hash of all the files in the current directory
update_hash <- function(file = "file_hash.csv") {
    file_hash <- tools::md5sum(list_files(recursive = T))
    write.csv(data.frame(file_hash), file = file)
}

# Filter a list of files by previous hash stored in a file
filter_by_hash <- function(fs, file = "file_hash.csv") {
    df0 <- read.csv(file) %>%
        set_colnames(c("file_path", "file_hash"))

    new_hash <- tools::md5sum(fs)
    df1 <- data.frame(file_path = names(new_hash),
                      file_hash = as.character(new_hash))

    replace_na <- function(x, replacement) {
        x[is.na(x)] <- replacement
        x
    }
    join_df <- df1 %>%
        dplyr::left_join(df0, by = "file_path") %>%
        replace_na(replacement = "") %>%
        dplyr::filter(file_hash.x != file_hash.y)
    join_df$file_path
}


# Point-free declaration
echo <- . %T>% message()
pipe <- compose %>% partial(.dir = "forward")
list_files <- list.files %>% partial(full.names = T)
quiet_render <- rmarkdown::render %>% partial(quiet = T) %>% quietly()
guard <- function(f) {
    function(x) {
        if (length(x) == 0) return(NULL)
        f(x)
    }
}


# Main --------------------------------------------------------------------
# Create file hash
if (!file.exists("file_hash.csv")) {
    filter_by_hash <- identity
}


# Processing directory
message("Rendering Rmd files to md files...")
pipe_render <- pipe(echo, guard(quiet_render))
list_files("./published/tutorial", "*[.]Rmd") %>%
    filter_by_hash() %>%
    walk(pipe_render)
list_files("./published/docs", "*[.]Rmd") %>%
    filter_by_hash() %>%
    walk(pipe_render)


message("Cleaning md files")
pipe_clean_md <- pipe(echo, guard(clean_md))
list_files("./published/tutorial", "*[.]md") %>%
    filter_by_hash() %>%
    walk(pipe_clean_md)
list_files("./published/docs", "*[.]md") %>%
    filter_by_hash() %>%
    walk(pipe_clean_md)


# Processing file - Code highlighting
message("Adding line highlight to md files...")
"./published/tutorial/creative_coding.md" %>%
    filter_by_hash() %T>%
    message() %>%
    highlight_codeblock(2:3, list(17:24, c(13, 27, 31, 34:37)))
"./published/docs/getting-started.md" %>%
    filter_by_hash() %T>%
    message() %>%
    highlight_codeblock(2:3, list(c(3:10, 18:21), c(6, 9:28, 43)))

message("All processing completed.")



# Copying / Deployment
# message("Copying docs to website...")
list_files("./published/docs", "*[.]md") %>%
    filter_by_hash() %>%
    walk(~.x %T>% message() %>% file.copy(to = "../docs/", overwrite = T))

message("Copying tutorial to website...")
list_files("./published/tutorial", "*[.]md") %>%
    filter_by_hash() %>%
    walk(~.x %T>% message() %>% file.copy(to = "../tutorial/", overwrite = T))

message("Copying assets to website...")
list_files("./published/css") %>%
    filter_by_hash() %>%
    walk(~.x %T>% message() %>% file.copy(to = "../static/css/", overwrite = T))
list_files("./published/img") %>%
    filter_by_hash() %>%
    walk(~.x %T>% message() %>% file.copy(to = "../static/img/", overwrite = T))
"./published/html/index.html" %>%
    filter_by_hash() %T>%
    message() %>%
    file.copy(to = "../static/html/logo.html", overwrite = T)


# Cleaning up
message("Cleaning up HTML files")
list_files("./published/docs", "*[.]html") %>%
    filter_by_hash() %>%
    walk(pipe(echo, file.remove))
list_files("./published/tutorial", "*[.]html") %>%
    filter_by_hash() %>%
    walk(pipe(echo, file.remove))

# Update the hash of all files
update_hash("file_hash.csv")

library(magrittr)
library(purrr)

# Helper functions
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


# Point-free declaration
echo <- . %T>% message()
pipe <- compose %>% partial(.dir = "forward")
list_files <- list.files %>% partial(full.names = T)
quiet_render <- rmarkdown::render %>% partial(quiet = T) %>% quietly()


# Processing directory
message("Rendering Rmd files to md files...")
pipe_render <- pipe(echo, quiet_render)
list_files("./published/tutorial", "*[.]Rmd") %>% walk(pipe_render)
list_files("./published/docs", "*[.]Rmd") %>% walk(pipe_render)


message("Cleaning md files")
pipe_clean_md <- pipe(echo, clean_md)
list_files("./published/tutorial", "*[.]md") %>% walk(pipe_clean_md)
list_files("./published/docs", "*[.]md") %>% walk(pipe_clean_md)



# Processing file - Code highlighting
message("Adding line highlight to md files...")
"./published/tutorial/creative_coding.md" %T>%
    message() %>%
    highlight_codeblock(2:3, list(17:24, c(13, 27, 31, 34:37)))
"./published/docs/getting-started.md" %T>%
    message() %>%
    highlight_codeblock(2:3, list(c(3:10, 18:21), c(6, 9:28, 43)))

message("All processing completed.")



# Copying / Deployment
# message("Copying docs to website...")
list_files("./published/docs", "*[.]md") %>%
    walk(~.x %T>% message() %>% file.copy(to = "../docs/", overwrite = T))

message("Copying tutorial to website...")
list_files("./published/tutorial", "*[.]md") %>%
    walk(~.x %T>% message() %>% file.copy(to = "../tutorial/", overwrite = T))

message("Copying assets to website...")
list_files("./published/css") %>%
    walk(~.x %T>% message() %>% file.copy(to = "../static/css/", overwrite = T))
list_files("./published/img") %>%
    walk(~.x %T>% message() %>% file.copy(to = "../static/img/", overwrite = T))
"./published/html/index.html" %T>%
    message() %>%
    file.copy(to = "../static/html/logo.html", overwrite = T)



# Cleaning up
message("Cleaning up HTML files")
list_files("./published/docs", "*[.]html") %>%
    walk(pipe(echo, file.remove))
list_files("./published/tutorial", "*[.]html") %>%
    walk(pipe(echo, file.remove))

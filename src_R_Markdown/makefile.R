library(magrittr)

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


# Processing directory
message("Rendering Rmd files to md files...")
list.files("./published/tutorial", "*[.]Rmd", full.names = T) %>%
    purrr::walk(~.x %T>% message() %>% rmarkdown::render(quiet = T))

message("Cleaning md files")
list.files("./published/tutorial", "*[.]md", full.names = T) %>%
    purrr::walk(~.x %T>% message() %>% remove_html_preserve())

# Processing file
message("Adding line highlight to md files...")
"./published/tutorial/creative_coding.md" %T>%
    message() %>%
    remove_first_line() %>%
    highlight_codeblock(2:3, list(17:24, c(13, 27, 31, 34:37)))

message("All processing completed.")


# Copying / Deployment
message("Copying tutorial to website...")
list.files("./published/tutorial", "*[.]md", full.names = T) %>%
    purrr::walk(~.x %T>% message() %>% file.copy(to = "../tutorial/", overwrite = T))

message("Copying assets to website...")
list.files("./published/css", full.names = T) %>%
    purrr::walk(~.x %T>% message() %>% file.copy(to = "../static/css/", overwrite = T))

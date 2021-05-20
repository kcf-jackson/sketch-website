# Run this at package directory
library(tools)

# Rd to HTML
Rd_to_html <- function(input_dir, output_dir) {
    # Set up input and output
    fs <- list.files(input_dir, ".Rd", recursive = T, full.names = T)
    if (!dir.exists(output_dir)) dir.create(output_dir)
    
    # Conversion
    message("Converting Rd to HTML")
    for (f in fs) {
        message("Reading: ", f)
        o <- file_path_sans_ext(basename(f))
        op <- paste0(output_dir, o, ".html")
        
        message("Writing: ", op)
        Rd2HTML(f, op)
    }
}

input_dir <- "."
output_dir <- "./temp_HTML/"
Rd_to_html(input_dir, output_dir)


# HTML to md
html_to_md <- function(input_dir, output_dir) {
    # Set up input and output
    if (!dir.exists(output_dir)) dir.create(output_dir)
    fs <- list.files(input_dir, ".html", recursive = T, full.names = T)
    
    # Conversion
    message("Converting Rd to HTML")
    for (f in fs) {
        message("Reading: ", f)
        o <- file_path_sans_ext(basename(f))
        op <- paste0(output_dir, o, ".md")
        message("Writing: ", op)
        system(glue::glue("pandoc -s -r html {f} -t gfm -o {op}"))
        cat('\n<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>\n',
            file = op, append = TRUE)
    }
}
input_dir <- "./temp_HTML/"
output_dir <- "./api/"
html_to_md(input_dir, output_dir)

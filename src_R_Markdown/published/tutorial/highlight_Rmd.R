#' Highlight lines in a rmarkdown code-chunk / code-block
#'
#' @param selector A query object; see \link{query} for more detail.
#' @param line_numbers A numeric vector; the line numbers to highlight.
#' @param style A character string; the highlighting style.
#' @param class A character string; the highlighting CSS class.
#' @param include_source TRUE / FALSE; whether the source JavaScript
#' should be included. One should use TRUE for the first time the
#' function is called and FALSE for the subsequent function calls.
#'
#' @return A `shiny.tag` object containing the HTML script tag.
#'
#' @examples highlight(query("pre code", 0), 1:3)
#'
#' @export
highlight <- function(selector = query("pre code"),
                      line_numbers,
                      style="font-weight: bold;",
                      class=NULL,
                      include_source = FALSE) {
    quoted <- purrr::partial(dQuote, q = '"')
    inline_style <- ifelse(is.null(style), "null", quoted(style))
    classname <- ifelse(is.null(class), "null", quoted(class))
    JS <- glue::glue(
        "highlight_Rmd(
            {quoted(selector$selector)},
            {selector$nth - 1},
            [{paste(line_numbers - 1, collapse = ', ')}],
            {inline_style},
            {classname}
        )")

    if (!include_source) {
        return(shiny::tags$script(JS))
    }
    shiny::tagList(
        shiny::tags$script(src = "../js/highlight_Rmd.js"),
        shiny::tags$script(JS)
    )
}

#' Constructing a query object
#'
#' @param selector A character string; the CSS query selector.
#' @param nth An integer; the nth match of the query. Default is 1st.
#'
#' @note The \link{highlight} engine uses the `document.querySelectorAll`
#' to select the DOM object, so one needs to indicate which object to
#' be used when there are more than one matches.
#'
#' @return A named list with element `selector` and `nth`.
#'
#' @export
query <- function(selector, nth = 1) {
    list(selector = selector, nth = nth)
}

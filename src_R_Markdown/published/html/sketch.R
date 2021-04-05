#! config(rules = basic_rules(), deparsers = default_2_deparsers(), asset_tags = default_tags(local = FALSE))
#! load_library("p5")

seq <- function(n) {
    Array(n)$fill(1)$map(lambda(element, index, index))
}

random <- function(max0, min0 = 0) {
    min0 + (max0 - min0) * Math::random()
}

ball <- R6Class("ball", list(
    id = NULL,
    x = NULL,
    y = NULL,
    r = NULL,
    growing = TRUE,
    color = Array(random(160), random(160), random(216)),

    grow = function() {
        if (self$growing) { self$r <- self$r + 1 }
        TRUE
    },

    edge = function() {
        (self$x + self$r > cw) || (self$x - self$r < 0) ||
           (self$y + self$r > ch) || (self$y - self$r < 0)
    },

    collide = function(balls) {
        for (b in balls) {
            if ((b$id != self$id) &&
                (dist(self$x, self$y, b$x, b$y) < self$r + b$r)) {
                return(TRUE)
            }
        }
        FALSE
    },

    draw = function() {
        # stroke(255)
        # noFill()
        stroke(self$color[0], self$color[1], self$color[2])
        fill(self$color[0], self$color[1], self$color[2])
        circle(self$x, self$y, 2 * self$r)
    },

    update = function(balls) {
        if (self$growing) {
            if (self$edge() || self$collide(balls) || self$r > 2) {
                self$growing <- FALSE
            }
        }
        self$grow()
        self$draw()
    },

    initialize = function(x, y, r, id) {
        self$id <- id
        self$x <- x
        self$y <- y
        self$r <- r
        NULL
    }
))

dist <- function(x1, y1, x2, y2) {
    Math::sqrt((x1 - x2)^2 + (y1 - y2)^2)
}

new_ball <- function() {
    spot = Math::floor(random(res$length))
    x = res[spot]$x
    y = res[spot]$y
    valid = TRUE
    for (b in circles) {
        if (dist(x, y, b.x, b.y) < b.r + cr) {
            valid <- FALSE
            break
        }
    }
    if (!valid) return(NULL)
    ball$new(x, y, cr, circles$length)
}

# Main
cw <- 510
ch <- 200
cr <- 1
circles <- seq(1)$map(function(id) {
        ball$new(random(cw), random(ch), cr, id)
    })

font_img <- NULL
res <- Array()

preload <- function() {
    font_img <<- loadImage(dataURI("countryside-two.png"))
    # font_img <<- loadImage(dataURI("vegan-style-personal-use.png"))
    # font_img <<- loadImage(dataURI("snell_roundhand_pages.png"))
    font_img
}

setup <- function() {
    createCanvas(cw, ch)
    font_img$loadPixels()
    count = 0
    for (x in seq(font_img$width)) {
        for (y in seq(font_img$height)) {
            index <- 4 * (x + y * font_img$width)
            color <- font_img$pixels[index]
            b <- brightness(color)
            count <- count + 1
            if (b < 1) {
                res$push(createVector(x, y))
            }
        }
    }
    console::log(font_img$width, font_img$height)
    console::log(font_img$pixels$length)
    console::log(res$length)
}

draw <- function() {
    # background(255)
    # background(font_img)
    circles$forEach(x %=>% x$update(circles))
    total <- 10
    count <- 0
    attempt <- 0
    while (count < total && attempt < 1000) {
        let (newBall = new_ball())
        if (newBall) {
            circles$push(newBall)
            count <- count + 1
        }
        attempt <- attempt + 1
    }
    # console::log(circles$length)
    if (circles$length > 1000) { noLoop() }
    NULL
}

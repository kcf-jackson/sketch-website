#! config(deparsers = default_2_deparsers())
#! load_library("p5")

# Setup
WIDTH <- 400
HEIGHT <- 400
DIAMETER <- 10
GRID_SIZE <- 40
MARGIN <- 80

x_grid <- seq(MARGIN, WIDTH - MARGIN, step = DIAMETER)
y_grid <- seq(MARGIN, HEIGHT - MARGIN, step = DIAMETER)

draw_grid <- function() {
    background(runif(3, 0, 180))
    for (x in x_grid) {
        for (y in y_grid) {
            d <- ifelse(runif(1) < runif(1, 0.3, 1), 0, DIAMETER)
            stroke(255)
            circle(x, y, d / 2)
        }
    }
    NULL
}

setup <- function() {
    createCanvas(WIDTH, HEIGHT)
    draw_grid()
}

mouseClicked <- function() {
    draw_grid()
}

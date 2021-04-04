#! config(deparsers = default_2_deparsers())
#! load_library("p5")

# Make a "person" object
person <- function(id) {
    list(id = id, x = runif(1, 0, 400), y = runif(1, 0, 300),
         vx = runif(1, -2, 2), vy = runif(1, -2, 2))  # Add velocity
}

move <- function(person) {
    new_x <- person$x + person$vx     # Update position
    new_y <- person$y + person$vy

    # If the new position is out of the screen, the person should turn back!
    # Otherwise, move to the new position
    if (new_x < 0 || new_x > 400) {
        person$vx <<- person$vx * -1  # Turn back!
    } else {
        person$x <<- new_x            # Move to the new position
    }

    # Do the same for y
    if (new_y < 0 || new_y > 300) {
        person$vy <<- person$vy * -1  # Turn back!
    } else {
        person$y <<- new_y            # Move to the new position
    }
    NULL
}

# Set up variables
radius <- 5
people <- map(1:50, person)

setup <- function() {
    createCanvas(400, 300)
}

draw <- function() {
    background(0, 0, 33)
    for (person in people) {
        fill(190, 128, 0)
        circle(person$x, person$y, 2*radius)
        move(person)                  # Call `move` here
    }
    NULL
}

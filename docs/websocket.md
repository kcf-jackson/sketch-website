---
title: WebSocket
---

Many of the new possibilities brought by the __sketch__ package rely on the use of WebSocket. WebSocket is used to create a new graphics device for real-time plotting in R; it is also used to create an R-scriptable environment so that one can control a user-defined browser session with R commands. 

To use WebSocket in your sketch application, you have to include `#! load_library("websocket")` in the header of the file, then follow the steps below.

### 1. Start a WebSocket server

Start the WebSocket server with:
```{r}
conn <- websocket$new()
conn$startServer()
```

### 2. Start your sketch application

Start your sketch application with the `source_r` call. For illustration purposes, we will use a sample app provided by the `new_app()` method:
```{r}
conn$new_app(debug = TRUE)
```
When the connection is established, a message will show at the R console.

#### Screenshot
![](/img/websocket_screenshot.png)



### 3a. Control the browser

Now you can control the browser session using the `conn$ws$send` function. The message to be sent to the browser must be a JSON string (to be processed by your application). In the sample app, by default it can accept a string of the form `{"type": "command", "message": "YOUR COMMAND"}`. For example, to ask the browser to print the "Hello World!" string, use 
```
conn$ws$send('{"type": "command", "message": "console.log(\'Hello World!\')"}')
```

Alternatively, it is more convenient to wrap the above into a function call.
```{r}
send_command <- function(x) {
    message <- list(type = "command", message = x)
    conn$ws$send(jsonlite::toJSON(message, auto_unbox = TRUE))
}
send_command('console.log("Hello World!")')
```

#### Screenshot

![](/img/websocket_hello_world.png)




### 3b. Control the browser using `sketch` mode

In the above, the command sent to the browser was written in JavaScript. Since __sketch__ is an R-to-JavaScript transpiler, it is possible to write R commands instead. This functionality is provided by `conn$sketch_mode()` which transpiles R commands into JavaScript ones and sends them out to the browser session.

#### Screenshot

![](/img/websocket_sketch_mode.png)



### 4. Stop the WebSocket server

When you finish with the session, use `conn$stopServer()` to close the connection.

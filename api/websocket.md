|           |                 |
|-----------|----------------:|
| websocket | R Documentation |

## Websocket for 'sketch' applications

### Description

This combines the \*-Server family of functions in 'httpuv' with the
transpilation functionality provided by 'sketch'.

### Public fields

<div class="r6-fields">

`app`  
A list of functions that define the application.

`server`  
A server handle to be used by 'stopServer'.

`log`  
A character vector that keep tracks of all the commands sent to the
browser session.

`ws`  
A WebSocket channel to handle the communication between the R session
and the browser session.

`in_handler`  
A function to handle instructions sent by the browser session.

`out_handler`  
A function to handle instruction sent to the browser session.

`env`  
An environment to store variables temporarily.

`port`  
An integer; the TCP port number.

`message`  
TRUE or FALSE; whether to display a prompt when a server is started and
when it is stopped.

`connected`  
TRUE or FALSE; whether a connection has been established. One should
ways start the WebSocket server before visiting the web page that
connects to the server.

`started`  
TRUE or FALSE; whether a server has been started. Use the `startServer`
method to start a server.

</div>

### Methods

#### Public methods

-   [`websocket$startServer()`](#method-startServer)

-   [`websocket$stopServer()`](#method-stopServer)

-   [`websocket$listServers()`](#method-listServers)

-   [`websocket$stopAllServers()`](#method-stopAllServers)

-   [`websocket$sketch_mode()`](#method-sketch_mode)

-   [`websocket$new_app()`](#method-new_app)

-   [`websocket$new()`](#method-new)

-   [`websocket$clone()`](#method-clone)

------------------------------------------------------------------------

<span id="method-startServer"></span>

#### Method `startServer()`

Start a WebSocket server

##### Usage

<div class="r">

    websocket$startServer()

</div>

------------------------------------------------------------------------

<span id="method-stopServer"></span>

#### Method `stopServer()`

Stop a WebSocket server

##### Usage

<div class="r">

    websocket$stopServer()

</div>

------------------------------------------------------------------------

<span id="method-listServers"></span>

#### Method `listServers()`

List all running WebSocket servers

##### Usage

<div class="r">

    websocket$listServers()

</div>

------------------------------------------------------------------------

<span id="method-stopAllServers"></span>

#### Method `stopAllServers()`

Stop all running WebSocket servers

##### Usage

<div class="r">

    websocket$stopAllServers()

</div>

------------------------------------------------------------------------

<span id="method-sketch_mode"></span>

#### Method `sketch_mode()`

Enter sketch mode, in which all commands go through the transpiler
before reaching the browser session.

##### Usage

<div class="r">

    websocket$sketch_mode()

</div>

------------------------------------------------------------------------

<span id="method-new_app"></span>

#### Method `new_app()`

Create a blank HTML page with interactive access. This function is
designed for newcomers.

##### Usage

<div class="r">

    websocket$new_app(
      preamble = list(library = c(), script = c(), data = c()),
      ...
    )

</div>

##### Arguments

<div class="arguments">

`preamble`  
(Optional) A named list; the preamble to include. Use the name 'lib' for
arguments to `load_library`, 'script' for arguments to `load_script` and
'data' for arguments to `load_data`. Note that the "dom" and "websocket"
modules are required and loaded by default.

`...`  
Extra parameters to pass to source\_r.

</div>

##### Returns

The (invisible) temporary file path to the app.

------------------------------------------------------------------------

<span id="method-new"></span>

#### Method `new()`

Initialise a WebSocket connection

##### Usage

<div class="r">

    websocket$new(in_handler, out_handler, message = TRUE, port = 9454)

</div>

##### Arguments

<div class="arguments">

`in_handler`  
A function to handle incoming message, default to be print which only
displays the message without any processing.

`out_handler`  
A function to handle outgoing message, default to be compile\_exprs
which transpiles R commands into JavaScript commands.

`message`  
TRUE or FALSE; whether to display a prompt when a server is started and
when it is stopped.

`port`  
An integer; the TCP port number.

</div>

##### Returns

A 'websocket' object.

##### Examples

<div class="r example copy">

    \dontrun{
    # Launch a WebSocket server
    ws <- websocket$new()
    ws$startServer()
    ws$listServers()    # Check that a server is running

    # Launch a 'sketch' application with WebSocket functionality
    file <- system.file("test_files/test_websocket.R", package = "sketch")
    source_r(file, debug = TRUE)   # Launch the default browser

    # Enter sketch mode to send commands to the application
    ws$sketch_mode()
    # Within sketch mode
    print("1234")
    x <- 10
    print(x + 1)
    q()

    # Back to normal mode, inspect the log and stop the server
    ws$log
    ws$stopServer()
    ws$listServers()    # Confirm no server is running
    }

</div>

------------------------------------------------------------------------

<span id="method-clone"></span>

#### Method `clone()`

The objects of this class are cloneable with this method.

##### Usage

<div class="r">

    websocket$clone(deep = FALSE)

</div>

##### Arguments

<div class="arguments">

`deep`  
Whether to make a deep clone.

</div>

### Examples


    ## ------------------------------------------------
    ## Method `websocket$new`
    ## ------------------------------------------------

    ## Not run: 
    # Launch a WebSocket server
    ws <- websocket$new()
    ws$startServer()
    ws$listServers()    # Check that a server is running

    # Launch a 'sketch' application with WebSocket functionality
    file <- system.file("test_files/test_websocket.R", package = "sketch")
    source_r(file, debug = TRUE)   # Launch the default browser

    # Enter sketch mode to send commands to the application
    ws$sketch_mode()
    # Within sketch mode
    print("1234")
    x <- 10
    print(x + 1)
    q()

    # Back to normal mode, inspect the log and stop the server
    ws$log
    ws$stopServer()
    ws$listServers()    # Confirm no server is running

    ## End(Not run)

<link rel="stylesheet" type="text/css" href="../css/md-styles.css"></link>

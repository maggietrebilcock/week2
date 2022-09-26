
const http = require("http");
const fs = require("fs").promises;


const requestListener = function(req, res) {

  console.log(req.url);

  if (req.url === "/") {
    
    fs.readFile( __dirname + '/home.html' ).then(
      contents => {
        
        res.setHeader("Content-Type", "text/html; charset=UTF-8");
        // return 200 OK http status code
        res.writeHead(200);
        // send back file contents + close response
        res.end(contents);
      }
    );
  } else {
    // if request url not root, return json file
    fs.readFile( __dirname + '/info.json' ).then(
      contents => {
        // set http response header entry
        res.setHeader("Content-Type", "application/json; charset=UTF-8");
        // return 200 OK http status code
        res.writeHead(200);
        res.end(contents);
      }
    );
  }
}

// create an http server instance
const server = http.createServer(requestListener);

// define the TCP port and IP address to tell our http server to listen to
const host = "0.0.0.0"; // repl.it is going to override this from localhost to your workspace webview hostname URL
const port = "8080"; // repl.it is going to override this to use port 443 (SSL https)

// call the listen() method to start listening to http requests
server.listen(
  port, 
  host, 
  () => {
    console.log('Server is running');
  }
);

//MY ORIGINAL CODE

// const http = require("http");

// const fs = require("fs").promises;

// const requestListener = function(req, res) {
//   console.log(req.url);
//   if (req.url === "/") {
//     fs.readFile( __dirname + '/page.html').then(
//       contents => {
//         res.setHeader("Content-Type", "text/html; charset=UTF-8");
//         res.writeHead(200);
//         res.end(contents);
//       }
//     );
//   } else {
//     fs.readFile( __dirname + '/data.json').then(
//       contents => {
//         res.setHeader("Content-Type", "application/json; charset=UTF-8");
//         res.writeHead(200);
//         res.end(contents);
//       }
//     )
//   }
// }

// const server = http.createServer(requestListener);

// const host = "0.0.0.0";

// const port ="8080";

// server.listen(
//   port, 
//   host,
//   () => {
//     console.log('Server is running');
//   }
// );
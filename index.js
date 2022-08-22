const express = require("express");
const path = require("path");
const helmet = require('helmet');

const app = express();
const port = 3000;

app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "img-src": ["'self'", "https: data: blob:"],
      },
    },
  })
);

app.get("/", (req, res) => res.sendFile("index.html", { root: __dirname }));
app.get("/sitemap.xml", (req, res) =>
  res.sendFile("sitemap.xml", { root: __dirname })
);

app.get("/robots.txt", (req, res) =>
  res.sendFile("robots.txt", { root: __dirname })
);

app.get("/cv", (req, res) =>
  res.sendFile("cv.pdf", { root: __dirname })
);

app.get("/cursor.js", (req, res) =>
  res.sendFile(path.join(__dirname + '/cursor.js'))
);


app.listen(port);

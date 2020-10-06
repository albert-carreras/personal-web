const express = require("express");
const path = require("path");
const helmet = require('helmet');

const app = express();
const port = 3000;

app.use(helmet());

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

app.get("/drip-ios", function(req, res) {
  const file = path.join(__dirname, "/upload/latest-ios.ipa");
  res.download(file, "latest-ios.ipa", e =>
    res.send(`Nothing to download yet: ${e}`)
  );
});

app.get("/drip-android", function(req, res) {
  const file = path.join(__dirname, "/upload/latest-android.apk");
  res.download(file, "latest-android.apk", () =>
    res.send(`Nothing to download yet: ${e}`)
  );
});

app.listen(port);

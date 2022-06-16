const http = require("http");
const port = process.env.PORT || 3000;

const app = require("express")();

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    '<html lang="en"><head></head><body><h1>Hello my name is Chidiebere Ernest</h1><h2>I\'m a full stack developer.</h2></body></html>'
  );
  res.end();
});

app.get("/home", (req, res) => {
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    '<html lang="en"><head></head><body><h2>I\'m a full stack web developer and a tech enthusiast, who loves building awesome, responsive and fascinating projects. I am more proficient in Mongodb, ExpressJs, ReactJs, Graphql and NodeJs. I have an eye for problem solving and also have the ability to adapt to new languages and tools.</h2></body></html>'
  );
  res.end();
});

app.get("/contact", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    '<html lang="en"><head></head><body><h2>Reach out to me on</h2><ol><li>Email: chidiebereernest8@gmail.com</li><li>Github: http://github.com/Ernest2026</li><li>Twitter: https://twitter.com/Ernesto_tech</li></ol></body></html>'
  );
  res.end();
});

http
  .createServer(app)
  .listen(port, () => console.log("Server running on port " + port));

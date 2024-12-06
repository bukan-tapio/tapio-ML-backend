import express from "express";
const app = express();
const port = parseInt(process.env.PORT) || 8080;

app.get("/", (req, res) => {
  res.send({
    message: "sudah ready",
  });
});

app.listen(port, () => {
  console.log(`use this port: ${port}`);
});

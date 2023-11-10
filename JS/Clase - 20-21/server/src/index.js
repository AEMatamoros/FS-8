const express = require("express");
let data = require("./db");
const app = express();
const cors = require("cors");

app.use(cors("*"));
app.use(express.json());
app.get("/paginated", (req, res) => {
  let limit = req.query.perPage;
  let offset = (req.query.page - 1) * req.query.perPage;
  // console.log(offset, parseInt(offset) + parseInt(limit))
  res.json({
    results: data.slice(offset, parseInt(offset) + parseInt(limit)),
    count: data.length,
  });
});

app.post("", (req, res) => {
  let obj = { id: data.length + 1, ...req.body };
  data.push(obj);
  res.json({
    msg: "ok",
    obj: obj,
  });
});

app.put("/:id", (req, res) => {
  let id = req.params.id;
  let index = data.findIndex((value) => value.id == id);
  if (index != -1) {
    data[index] = { id, ...req.body };
    res.json({
      msg: "ok",
    });
  } else {
    res.json({
      msg: "Not ok",
    });
  }
});

app.delete("/:id", (req, res) => {
  let id = req.params.id;
  let flteredData = data.filter((value) => value.id != id);
  data = flteredData;
  res.json({
    msg: "ok",
  });
});

app.get("", (req, res) => {
  res.json({
    results: data,
  });
});

app.listen(8000, () => {
  console.log(`App on http://localhost:8000/`);
});

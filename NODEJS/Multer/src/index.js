const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const { uploader } = require("./midlewares/uploaders");

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/files", express.static(path.join(__dirname, "files")));

app.post(
  "/single",
  uploader(
    path.join(__dirname, "files", "dyrfor_single_images"),
    "name_prefix_for_single"
  ).single("file"),
  (req, res) => {
    console.log(req.file);
    res.json("Single Response ok");
  }
);

app.post(
  "/array",
  uploader(
    path.join(__dirname, "files", "dyrfor_array_images"),
    "name_prefix_for_array"
  ).array("files"),
  (req, res) => {
    console.log(req.files);
    res.send("Array response ok");
  }
);

app.post(
  "/fields",
  uploader(
    path.join(__dirname, "files", "dyrfor_fieldupload_images"),
    "name_prefix_for_fieldupload"
  ).fields([{ name: "file1" }, { name: "file2" }]),
  (req, res) => {
    console.log(req.files);
    res.send("Fields Response ok");
  }
);

app.get("/", (req, res) => {
  res.send("Bienvenido al API Calendar");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`http://localhost:${process.env.PORT || 3000}`);
});

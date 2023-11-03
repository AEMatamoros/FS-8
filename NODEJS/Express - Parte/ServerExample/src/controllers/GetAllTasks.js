const fs = require("node:fs");
const path = require("node:path");

function getAllTasks(req, res) {
  fs.readFile(
    path.join(__dirname, "..", "db", "task.json"),
    "utf-8",
    (err, data) => {
      if (!!err) {
        res.status(400).json({
          status: "Failure",
          code: "400",
          message: "Error procesig your request",
        });
        return;
      }
      res.send(data);
    }
  );
}

module.exports = getAllTasks;

const fs = require("node:fs");
const path = require("node:path");
function updateTask(req, res) {
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
      // console.log(req.body);
      // console.log(data);
      // console.log(typeof data);
      // console.log(JSON.parse(data));
      let newTasks = JSON.parse(data).map((oldTask) => {
        if (oldTask.id === req.body.id) {
          return { ...oldTask, title: req.body.title };
        } else {
          return oldTask;
        }
      });
      // console.log(newTasks);
      fs.writeFile(
        path.join(__dirname, "..", "db", "task.json"),
        JSON.stringify(newTasks),
        (err) => {
          if (!!err) {
            res.status(400).json({
              status: "Failure",
              code: "400",
              message: "Error procesig your request",
            });
            return;
          }
          return res.status(200).json({
            status: "Success",
            code: "200",
            message: "Contenido Actualizado Correctamente",
          });
        }
      );
    }
  );
}

module.exports = updateTask;

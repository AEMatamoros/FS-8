const fs = require("node:fs");
const path = require("node:path");
const shortid = require("shortid");

function addNewTask(req, res) {
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
      let newTasks = [
        ...JSON.parse(data),
        {
          id: shortid.generate(),
          title: req.body.title,
        },
      ];
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
            message: "Contenido Agregado Correctamente",
          });
        }
      );
    }
  );
}

module.exports = addNewTask;

var db = require("../models");
module.exports = function (app) {

    app.get("/api/foods", function (req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }

        db.Food.findAll({
            where: query,
            include: [db.User]
        }).then(function (dbFood) {
            res.json(dbFood);
        });
    });

    app.post("/api/foods", function (req, res) {
        db.Food.create(req.body).then(function (dbFood) {
            res.json(dbFood);
        })
    })

    app.delete("/api/foods/:id", function (req, res) {
        db.Food.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbFood) {
            res.json(dbFood);
        });
    });


    app.put("/api/foods", function (req, res) {
        db.Food.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbFood) {
                res.json(dbFood);
            });
    });
}
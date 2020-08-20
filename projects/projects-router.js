const router = require("express").Router();
const Projects = require("../projects/projects-model");

router.get("/", (req, res) => {
  Projects.get()
    .then((dbRes) => res.status(200).json(dbRes).end())
    .catch((error) => res.status(500).json({ error: error.message }));
});

router.post("/", (req, res) => {
  Projects.add(req.body)
    .then((dbRes) => res.status(201).json({ added: dbRes }).end())
    .catch((error) => res.status(500).json({ error: error.message }).end());
});

router.delete("/:id", (req, res) => {
  Projects.remove(req.params.id).then((dbRes) => res.status(200).json(dbRes));
});

module.exports = router;

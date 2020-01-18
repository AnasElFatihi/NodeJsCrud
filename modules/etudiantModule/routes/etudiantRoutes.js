const router = require("express").Router();

const Etudiant = require("../model/etudiant");

//liste des etudiants
router.get("/etudiants", async (req, res) => {
  const etudiants = await Etudiant.find({});
  return res.json({
    status: 200,
    data: etudiants
  });
});
//avoir un etudiant
router.get("/etudiants/:id", async (req, res) => {
  try {
    const etudiant = await Etudiant.find({ _id: req.params.id });
    return res.json({
      status: 200,
      data: etudiant
    });
  } catch (Exception) {
    return res.json({
      status: 404,
      message: "etudinat non trouvé"
    });
  }
});
//creation d un etudiant
router.post("/etudiants", async (req, res) => {
  try {
    let etudiant = new Etudiant(req.body);
    const etudiantSauvegardé = await etudiant.save();
    return res.json({
      data: etudiantSauvegardé
    });
  } catch (Exception) {
    console.log(Exception);
  }
});

//update
router.put("/etudiants/:id", async (req, res) => {
  try {
    let etudiant = await Etudiant.findOne({ _id: req.params.id });
    etudiant.cne = req.body.cne;
    etudiant.name = req.body.name;
    etudiant.moyenne = req.body.moyenne;
    etudiant.resultat = req.body.resultat;
    const etudiantModifié = await etudiant.save();
    return res.json({
      status: 200,
      data: etudiantModifié
    });
  } catch (Exception) {
    // console.log(Exception);
    return res.json({
      status: 404,
      message: "etudinat non trouvé"
    });
  }
});

//update
router.delete("/etudiants/:id", async (req, res) => {
  try {
    let etudiant = await Etudiant.findOne({ _id: req.params.id });
    const etudiantModifié = await etudiant.delete();
    return res.json({
      status: 200,
      data: etudiantModifié
    });
  } catch (Exception) {
    // console.log(Exception);
    return res.json({
      status: 404,
      message: "etudinat non trouvé"
    });
  }
});

module.exports = router;

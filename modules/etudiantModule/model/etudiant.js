const mongoose = require("mongoose");

const etudiantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 6,
      max: 40
    },
    cne: {
      type: String,
      required: true,
      min: 6
    },
    moyenne: {
      type: Number,
      required: true
    },
    resultat: {
      type: String,
      required: true,
      max: 30
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model("Etudiant", etudiantSchema);

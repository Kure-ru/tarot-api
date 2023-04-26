const express = require("express");
const app = express();
const PORT = 8000;

const cards = {
  "01": {
    "number": "I",
    "name": "Le Bateleur",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Jean_Dodal_Tarot_trump_01.jpg",
    "meaning": "Créativité, Manifestation, Opportunité",
  },
  "02": {
    "number": "II",
    "name": "La Papesse",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Jean_Dodal_Tarot_trump_02.jpg",
    "meaning": "Connaissance, Intuition, Secrets",
  },
  "03": {
    "number": "III",
    "name": "L'impératrice",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Jean_Dodal_Tarot_trump_03.jpg",
   "meaning": "Fertilité, Abondance, Compassion",
  },
  "04": {
    "number": "IIII",
    "name": "L'empereur",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Jean_Dodal_Tarot_trump_04.jpg",
    "meaning": "Autorité, Structure, Puissance",
  },
  "05": {
    "number": "V",
    "name": "Le Pape",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Jean_Dodal_Tarot_trump_05.jpg",
    "meaning": "Spiritualité, Tradition, Éducation",
  },
  "06": {
    "number": "VI",
    "name": "L'Amoureux",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Jean_Dodal_Tarot_trump_06.jpg?uselang=fr",
    "meaning": "Choix, Passion, Dualité",
  },
  "07": {
    "number": "VII",
    "name": "Le Chariot",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Jean_Dodal_Tarot_trump_07.jpg",
    "meaning": "Victoire, Contrôle, Ambition",
  },
  "08": {
    "number": "VIII",
    "name": "La Justice",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Jean_Dodal_Tarot_trump_08.jpg",
    "meaning": "Équilibre, Vérité, Responsabilité",
  },
  "09": {
    "number": "VIIII",
    "name": "L'Hermite",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Jean_Dodal_Tarot_trump_09.jpg",
    "meaning": "Introspection, Solitude, Sagesse",
  },
  "10": {
    "number": "X",
    "name": "La Roue de Fortune",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/Jean_Dodal_Tarot_trump_10.jpg",
    "meaning": "Changement, Cycle, Opportunité",
  },
  "11": {
    "number": "XI",
    "name": "La Force",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Jean_Dodal_Tarot_trump_11.jpg",
    "meaning": "Courage, Persévérance, Maîtrise de soi",
  },
  "12": {
    "number": "XII",
    "name": "Le Pendu",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Jean_Dodal_Tarot_trump_12.jpg",
    "meaning": "Sacrifice, Patience, Acceptation",
  },
  "13": {
    "number": "XIII",
    "name": "La Mort",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Jean_Dodal_Tarot_trump_13.jpg",
    "meaning": "Transformation, Changement, Renouveau",
  },
  "14": {
    "number": "XIIII",
    "name": "Tempérance",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Jean_Dodal_Tarot_trump_14.jpg",
    "meaning": "Équilibre, Modération, Harmonie",
  },
  "15": {
    "number": "XV",
    "name": "Le Diable",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Jean_Dodal_Tarot_trump_15.jpg",
    "meaning": "Tentation, Attachement, Matérialisme",
  },
  "16": {
    "number": "XVI",
    "name": "La Maison-Dieu",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Jean_Dodal_Tarot_trump_16.jpg",
    "meaning": "Destruction, Libération, Révélation",
  },
  "17": {
    "number": "XVII",
    "name": "L'Étoile",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Jean_Dodal_Tarot_trump_17.jpg",
    "meaning": "Espoir, Inspiration, Spiritualité",
  },
  "18": {
    "number": "XVIII",
    "name": "La Lune",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Jean_Dodal_Tarot_trump_18.jpg",
    "meaning": "Illusion, Intuition, Rêve",
  },
  "19": {
    "number": "XVIIII",
    "name": "Le Soleil",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Jean_Dodal_Tarot_trump_19.jpg",
    "meaning": "Énergie, Réussite, Clarté",
  },
  "20": {
    "number": "XX",
    "name": "Le Jugement",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/4/40/Jean_Dodal_Tarot_trump_20.jpg",
    "meaning": "Révélation, Renouveau, Transformation",
  },
  "21": {
    "number": "XXI",
    "name": "Le Monde",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Jean_Dodal_Tarot_trump_21.jpg",
    "meaning": "Accomplissement, Totalité, Réussite",
  },
  "0": {
    "number": "XXII",
    "name": "Le Mat",
    "picture":
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jean_Dodal_Tarot_trump_Fool.jpg",
    "meaning": "Voyage, Liberté, Risque",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  res.json(cards);
});

app.get("/api/:id", (req, res) => {
  const cardId = req.params.id;
  if (cards[cardId]) {
    res.json(cards[cardId]);
  }
  else {
    res.json(error)
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

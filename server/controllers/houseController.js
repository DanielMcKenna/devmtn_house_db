let db = require("../db.json");
let globalID = 4;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(db);
  },

  createHouse: (req, res) => {
    const { address, price, imageURL } = req.body;

    if (!address || !price || !imageURL) {
      return res.status(400).send("Missing one of the required fields");
    }
    const newHouse = { id: globalID, address, price, imageURL };
    globalID++;
    db.push(newHouse);
  },

  deleteHouse: (req, res) => {
    let index = db.findIndex((house) => house.id === +req.params.id);
    db.splice(index, 1);
    res.status(200).send(db);
  },

  updateHouse: (req, res) => {
    const houseID = +req.params.id;
    const { type } = req.body;
    let index = db.findIndex((house) => +house.id === houseID);

    if (db[index].price === 0 && type === "minus") {
      res.status(400).send("cnanot go below 0 its free baby!");
    } else if (type === "plus") {
      db[index].price += 10000;
      res.status(200).send(db);
    } else if (type == "minus") {
      db[index].price -= 10000;
      res.status(200).send(db);
    } else {
      res.sendStatus(400);
    }
  },
};

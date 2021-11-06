const express = require("express");
const cors = require("cors");
const houseCtrl = require("./controllers/houseController");
const PORT = 4004;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/houses", houseCtrl.getHouses);
app.post("/api/houses", houseCtrl.createHouse);
app.delete("/api/houses/:id", houseCtrl.deleteHouse);
app.put("/api/houses/:id", houseCtrl.updateHouse);

app.listen(PORT, () => console.log(`Server is running in port: ${PORT}`));

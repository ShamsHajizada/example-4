const express = require("express");
const app = express();

const port = 8080;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DB_RL =
  "mongodb+srv://coloshop:azmp101@cluster0.nc9sdcl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const ShopSchema = new Schema(
  {
    title: { type: String, require: true },
    price: { type: Number, require: true },
    imageUrl: { type: String, require: true },
    description: { type: String, require: true },
  },
  { timestamps: true }
);

const ShopModel = mongoose.model("Shop", ShopSchema);

app.get("/api/shop", async (req, res) => {
  try {
    const shop = await ShopModel.find({});
    if (shop.length > 0) {
      res.status(200).send({ message: "success", data: shop });
    } else {
      res.status(204).send({
        message: "data is empty",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/api/shop/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const shop = await ShopModel.findById(id);

    if (shop) {
      res.status(200).send({
        message: "success",
        data: shop,
      });
    } else {
      res.status(404).send({ message: "data not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete("/api/shop/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedShop = await ShopModel.findByIdAndDelete(id);

    res.status(200).send({
      message: "deleted succesfully!",
      deletedShop: deletedShop,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/api/shop", async (req, res) => {
  try {
    const newShop = newShophModel({ ...req.body });
    await newShop.save();

    res.status(201).send({ message: "created succesfully!", data: newShop });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Connected!"));

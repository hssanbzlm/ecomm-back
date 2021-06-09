const item = require("./item.model");

module.exports.findAll = (itemCategory) => async (req, res) => {
  try {
    const items = await item.find({ category: itemCategory }).exec();
    res.status(200).send(items);
  } catch (e) {
    res.status(404).send({ error: "item not found" });
  }
};

module.exports.findById = (itemCategory) => async (req, res) => {
  item.find({ _id: req.params.id, category: itemCategory }, (err, doc) => {
    if (err) {
      res.status(404).send({ error: "item not found" });
    } else {
      if (doc.length) {
        res.status(200).send(doc);
      } else res.status(404).send({ error: "item not found" });
    }
  });
};

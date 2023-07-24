const { Document, Schema, model } = require("mongoose");

const ItemSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },
  
    name: {
      type: String,
      required: true,
    },
    packsize: {
      type: String,
      required: true,
    },
    unitprice: {
      type: Number,
      required: true,
    },
    qtyhand: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Item = model("Item", ItemSchema);

module.exports ={ Item,};
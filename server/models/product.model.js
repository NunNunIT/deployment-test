import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_slug: {
    type: String,
    required: true,
  },
}, {timestamps: true});

const Product = mongoose.model('Product', productSchema);
export default Product;

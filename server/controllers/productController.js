const productController = {};
const productModel = require("../models/productModel");

productController.getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Ürünler alınamadı.', error });
    }
};

productController.getProductsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const products = await productModel.find({ category: category });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Ürünler alınamadı.', error });
    }
}

productController.getProductsBySearch = async (req, res) => {
    try {
        const { searchQuery } = req.params;
        const products = await productModel.find({
            $or: [
                { name: { $regex: searchQuery, $options: "i" } },
                { description: { $regex: searchQuery, $options: "i" } },
                { category: { $regex: searchQuery, $options: "i" } }
            ]
        });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Ürünler alınamadı.', error })
    }
}

productController.getProductById = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Ürün bulunamadı.' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Ürün alınamadı.', error });
    }
};

productController.createProduct = async (req, res) => {
    try {
        const newProduct = new productModel(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: 'Ürün oluşturulamadı.', error });
    }
};

productController.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Ürün bulunamadı.' });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: 'Ürün güncellenemedi.', error });
    }
};

productController.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Ürün bulunamadı' });
        }
        res.json({ message: 'Ürün başarıyla silindi.' });
    } catch (error) {
        res.status(500).json({ message: 'Ürün silinemedi', error });
    }
};

module.exports = productController;
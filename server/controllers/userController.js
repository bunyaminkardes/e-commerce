const userController = {};
const userModel = require("../models/userModel");

userController.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Kullanıcılar alınamadı.', error });
    }
};

userController.getUserById = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Kullanıcı alınamadı.', error });
    }
};

userController.createUser = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: 'Kullanıcı oluşturulamadı.', error });
    }
};

userController.updateUser = async (req, res) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
        }
        res.json(updatedUser);
    } catch (error) {
        return res.status(400).json({ message: 'Kullanıcı güncellenemedi.', error })
    }
}

userController.deleteUser = async (req, res) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
        }
        res.json({ message: 'Kullanıcı başarıyla silindi.' });
    } catch (error) {
        res.status(500).json({ message: 'Kullanıcı silinemedi.', error });
    }
}

module.exports = userController;
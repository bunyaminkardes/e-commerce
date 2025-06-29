const authController = {};
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

authController.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: 'Bu email zaten kullanılıyor.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: 'Kayıt başarılı.' });
    } catch (error) {
        res.status(500).json({ message: 'Kayıt sırasında hata oluştu.', error });
    }
}

authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Geçersiz email veya şifre.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Geçersiz email veya şifre.' });
        }

        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "7d" }
        );

        res.json({
            message: "Giriş başarılı.",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({ message: "Giriş sırasında bir hata oluştu.", error });
    }
}

module.exports = authController;
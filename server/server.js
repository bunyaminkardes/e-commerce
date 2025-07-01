const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

const app = express();

//app.use(cors()); //tüm origin'lere izin ver

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(cookieParser());

app.use(express.json());
app.use('/api/product', productRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor.`));
const connectDB = require("../config/db");
const userModel = require("../models/userModel");
const productModel = require("../models/productModel");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const seedDatabase = async () => {

    try {
        connectDB();
        await userModel.deleteMany({});
        await productModel.deleteMany({});
        console.log("Mevcut veriler temizlendi.");

        const hashedPassword = await bcrypt.hash('123456', 10);
        const user = new userModel({
            username: 'admin',
            email: 'bunyaminkardes@outlook.com',
            password: hashedPassword,
            role: 'admin',
        });

        const products = [
            // Giyim
            {
                name: 'Beyaz Tişört',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 185,
                stock: 100,
                category: 'Giyim',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Kot Pantolon',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 299,
                stock: 80,
                category: 'Giyim',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Kazak',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 245,
                stock: 50,
                category: 'Giyim',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Hoodie',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 320,
                stock: 70,
                category: 'Giyim',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Ceket',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 499,
                stock: 30,
                category: 'Giyim',
                images: ['https://placehold.co/400'],
            },

            // Spor
            {
                name: 'Koşu Ayakkabısı',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 750,
                stock: 60,
                category: 'Spor',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Yoga Matı',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 180,
                stock: 90,
                category: 'Spor',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Dambıl Seti',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 420,
                stock: 40,
                category: 'Spor',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Futbol Topu',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 200,
                stock: 100,
                category: 'Spor',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Spor Çantası',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 280,
                stock: 60,
                category: 'Spor',
                images: ['https://placehold.co/400'],
            },

            // Elektronik
            {
                name: 'Bluetooth Kulaklık',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 850,
                stock: 75,
                category: 'Elektronik',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Akıllı Saat',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 1200,
                stock: 50,
                category: 'Elektronik',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Powerbank',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 320,
                stock: 100,
                category: 'Elektronik',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Kablosuz Mouse',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 150,
                stock: 70,
                category: 'Elektronik',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Mekanik Klavye',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 650,
                stock: 40,
                category: 'Elektronik',
                images: ['https://placehold.co/400'],
            },

            // Kozmetik
            {
                name: 'Nemlendirici Krem',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 200,
                stock: 80,
                category: 'Kozmetik',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Yüz Temizleme Jeli',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 170,
                stock: 90,
                category: 'Kozmetik',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Güneş Kremi',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 220,
                stock: 70,
                category: 'Kozmetik',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Parfüm',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 490,
                stock: 60,
                category: 'Kozmetik',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Şampuan',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 160,
                stock: 100,
                category: 'Kozmetik',
                images: ['https://placehold.co/400'],
            },

            // Kitap
            {
                name: '1984 - George Orwell',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 90,
                stock: 120,
                category: 'Kitap',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Hayvan Çiftliği',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 75,
                stock: 100,
                category: 'Kitap',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Sapiens',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 140,
                stock: 80,
                category: 'Kitap',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Suç ve Ceza',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 130,
                stock: 60,
                category: 'Kitap',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Bilinmeyen Bir Kadının Mektubu',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis. Quisque luctus sapien nulla, pretium tristique nulla ornare eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vitae feugiat arcu. Quisque sed interdum dolor.',
                price: 55,
                stock: 90,
                category: 'Kitap',
                images: ['https://placehold.co/400'],
            },
        ];

        await user.save();
        console.log("Kullanıcı eklendi.");
        await productModel.insertMany(products);
        console.log("Ürünler eklendi.");

        mongoose.connection.close();
        console.log("Seed işlemi başarıyla tamamlandı ve veritabanı bağlantısı sonlandırıldı.");
    } catch (error) {
        console.error("Seeding işlemi sırasında hata: ", error);
        mongoose.connection.close();
    }

}

seedDatabase();
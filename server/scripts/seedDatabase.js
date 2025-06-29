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
                description: 'Konforlu ve hafif beyaz tişört',
                price: 185,
                stock: 100,
                category: 'Giyim',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Kot Pantolon',
                description: 'Dayanıklı ve şık kot pantolon',
                price: 299,
                stock: 80,
                category: 'Giyim',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Kazak',
                description: 'Soğuk havalar için ideal kazak',
                price: 245,
                stock: 50,
                category: 'Giyim',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Hoodie',
                description: 'Rahat kesim kapüşonlu hoodie',
                price: 320,
                stock: 70,
                category: 'Giyim',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Ceket',
                description: 'Su geçirmez dış giyim ceketi',
                price: 499,
                stock: 30,
                category: 'Giyim',
                images: ['https://placehold.co/400'],
            },

            // Spor
            {
                name: 'Koşu Ayakkabısı',
                description: 'Yastıklamalı tabanıyla rahat koşu deneyimi',
                price: 750,
                stock: 60,
                category: 'Spor',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Yoga Matı',
                description: 'Kaymaz yüzeyli yoga matı',
                price: 180,
                stock: 90,
                category: 'Spor',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Dambıl Seti',
                description: 'Evde antrenman için dambıl seti',
                price: 420,
                stock: 40,
                category: 'Spor',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Futbol Topu',
                description: 'Profesyonel dikişli futbol topu',
                price: 200,
                stock: 100,
                category: 'Spor',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Spor Çantası',
                description: 'Bölmeli, su geçirmez spor çantası',
                price: 280,
                stock: 60,
                category: 'Spor',
                images: ['https://placehold.co/400'],
            },

            // Elektronik
            {
                name: 'Bluetooth Kulaklık',
                description: 'Kablosuz, gürültü engelleyici kulaklık',
                price: 850,
                stock: 75,
                category: 'Elektronik',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Akıllı Saat',
                description: 'Kalp atışı ve uyku takibi yapabilen saat',
                price: 1200,
                stock: 50,
                category: 'Elektronik',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Powerbank',
                description: '10.000 mAh taşınabilir şarj aleti',
                price: 320,
                stock: 100,
                category: 'Elektronik',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Kablosuz Mouse',
                description: 'Hassas tepkili ergonomik mouse',
                price: 150,
                stock: 70,
                category: 'Elektronik',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Mekanik Klavye',
                description: 'RGB aydınlatmalı, mavi switch klavye',
                price: 650,
                stock: 40,
                category: 'Elektronik',
                images: ['https://placehold.co/400'],
            },

            // Kozmetik
            {
                name: 'Nemlendirici Krem',
                description: 'Cilt bariyerini güçlendiren yüz kremi',
                price: 200,
                stock: 80,
                category: 'Kozmetik',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Yüz Temizleme Jeli',
                description: 'Hassas ciltler için uygun temizleyici',
                price: 170,
                stock: 90,
                category: 'Kozmetik',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Güneş Kremi',
                description: '50 SPF korumalı güneş kremi',
                price: 220,
                stock: 70,
                category: 'Kozmetik',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Parfüm',
                description: 'Kalıcı ve ferah erkek parfümü',
                price: 490,
                stock: 60,
                category: 'Kozmetik',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Şampuan',
                description: 'Dökülmeye karşı etkili bitkisel şampuan',
                price: 160,
                stock: 100,
                category: 'Kozmetik',
                images: ['https://placehold.co/400'],
            },

            // Kitap
            {
                name: '1984 - George Orwell',
                description: 'Distopya edebiyatının başyapıtı',
                price: 90,
                stock: 120,
                category: 'Kitap',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Hayvan Çiftliği',
                description: 'Politik taşlamanın sembol romanı',
                price: 75,
                stock: 100,
                category: 'Kitap',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Sapiens',
                description: 'İnsanlık tarihine derin bir bakış',
                price: 140,
                stock: 80,
                category: 'Kitap',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Suç ve Ceza',
                description: 'Klasik Rus edebiyatının zirvesi',
                price: 130,
                stock: 60,
                category: 'Kitap',
                images: ['https://placehold.co/400'],
            },
            {
                name: 'Bilinmeyen Bir Kadının Mektubu',
                description: 'Stefan Zweig’dan kısa ama etkileyici bir eser',
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
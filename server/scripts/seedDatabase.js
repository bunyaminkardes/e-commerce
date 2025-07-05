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
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 185,
                stock: 100,
                category: 'Giyim',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Kot Pantolon',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 299,
                stock: 80,
                category: 'Giyim',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Kazak',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 245,
                stock: 50,
                category: 'Giyim',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Hoodie',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 320,
                stock: 70,
                category: 'Giyim',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Ceket',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 499,
                stock: 30,
                category: 'Giyim',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },

            // Spor
            {
                name: 'Koşu Ayakkabısı',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 750,
                stock: 60,
                category: 'Spor',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Yoga Matı',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 180,
                stock: 90,
                category: 'Spor',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Dambıl Seti',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 420,
                stock: 40,
                category: 'Spor',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Futbol Topu',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 200,
                stock: 100,
                category: 'Spor',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Spor Çantası',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 280,
                stock: 60,
                category: 'Spor',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },

            // Elektronik
            {
                name: 'Bluetooth Kulaklık',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 850,
                stock: 75,
                category: 'Elektronik',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Akıllı Saat',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 1200,
                stock: 50,
                category: 'Elektronik',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Powerbank',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 320,
                stock: 100,
                category: 'Elektronik',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Kablosuz Mouse',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 150,
                stock: 70,
                category: 'Elektronik',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Mekanik Klavye',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 650,
                stock: 40,
                category: 'Elektronik',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },

            // Kozmetik
            {
                name: 'Nemlendirici Krem',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 200,
                stock: 80,
                category: 'Kozmetik',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Yüz Temizleme Jeli',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 170,
                stock: 90,
                category: 'Kozmetik',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Güneş Kremi',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 220,
                stock: 70,
                category: 'Kozmetik',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Parfüm',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 490,
                stock: 60,
                category: 'Kozmetik',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Şampuan',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 160,
                stock: 100,
                category: 'Kozmetik',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },

            // Kitap
            {
                name: '1984 - George Orwell',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 90,
                stock: 120,
                category: 'Kitap',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Hayvan Çiftliği',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 75,
                stock: 100,
                category: 'Kitap',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Sapiens',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 140,
                stock: 80,
                category: 'Kitap',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Suç ve Ceza',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 130,
                stock: 60,
                category: 'Kitap',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
            },
            {
                name: 'Bilinmeyen Bir Kadının Mektubu',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique sed est quis vestibulum. Ut pretium tortor ac est efficitur, a posuere purus ultricies. Nulla a luctus odio. Maecenas rhoncus iaculis enim. Sed vitae rutrum dolor, commodo varius elit. Etiam placerat turpis a metus pulvinar, in pharetra lorem posuere. Integer risus nisi, euismod eu ex et, varius vestibulum mauris. Fusce tristique venenatis neque vitae ultrices.

Vestibulum non condimentum dolor. Nullam iaculis dui at consectetur iaculis. Nullam luctus malesuada tincidunt. Proin at mattis magna, sit amet pulvinar nunc. Donec rutrum est sit amet felis euismod fringilla. Aliquam eu feugiat lorem. Phasellus ut libero id mi molestie consectetur et in enim. Nam eu rhoncus odio, sit amet sollicitudin metus. Phasellus non convallis ante.`,
                price: 55,
                stock: 90,
                category: 'Kitap',
                images: [`https://picsum.photos/seed/${Math.random().toString(36).substring(7)}/640/360`]
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
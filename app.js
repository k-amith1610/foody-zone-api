// require("dotenv").config();
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = process.env.port || 5000;
// const food_api = require("./routes/foods");
// const connectDB = require("./db/connect");
const path = require("path");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "./public/images")));

app.get("/", (req, res) => {
    const foodData = [
        {
            name: "BOILED EGG",
            price: 10,
            text: "Enjoy a perfectly boiled egg, a simple yet nutritious option to kickstart your day. Packed with protein, this delightful breakfast choice is not only delicious but also keeps you energized throughout the morning. Whether you prefer it soft-boiled with a runny yolk or hard-boiled with a firm center, this versatile dish is a classic favorite for all ages.",
            image: "/images/egg.png",
            type: "breakfast",
        },
        {
            name: "RAMEN",
            price: 25,
            text: "Indulge in a steaming bowl of flavorful ramen, a beloved Japanese comfort food that never fails to satisfy. With its rich broth, toothsome noodles, and an array of toppings to choose from, every spoonful is a journey of taste and texture. Whether you're a ramen connoisseur or a newcomer to this culinary delight, prepare to be transported to a world of culinary bliss.",
            image: "/images/ramen.png",
            type: "lunch",
        },
        {
            name: "GRILLED CHICKEN",
            price: 45,
            text: "Savor the succulent taste of perfectly grilled chicken, a culinary masterpiece that's sure to tantalize your taste buds. Marinated in a blend of herbs and spices, each bite is bursting with flavor and juiciness, leaving you craving for more. Whether enjoyed on its own or paired with your favorite sides, grilled chicken is a timeless classic that never disappoints.",
            image: "/images/chicken.png",
            type: "dinner",
        },
        {
            name: "CAKE",
            price: 18,
            text: "Treat yourself to a slice of heavenly cake, a decadent dessert that's sure to satisfy your sweet tooth. With its moist layers, luscious frosting, and irresistible flavors, every bite is a celebration of indulgence. Whether you're marking a special occasion or simply craving a sweet treat, cake is the ultimate indulgence that never fails to delight.",
            image: "/images/cake.png",
            type: "breakfast",
        },
        {
            name: "BURGER",
            price: 23,
            text: "Sink your teeth into a juicy burger, a classic American favorite that's sure to hit the spot. Made with a mouthwatering beef patty, fresh vegetables, and tangy sauce, each bite is a symphony of flavors and textures. Whether you prefer it classic or loaded with toppings, a burger is the ultimate comfort food that never goes out of style.",
            image: "/images/burger.png",
            type: "lunch",
        },
        {
            name: "PANCAKE",
            price: 25,
            text: "Indulge in a stack of fluffy pancakes, a beloved breakfast staple that's perfect for starting your day on a sweet note. Whether topped with maple syrup, fresh fruit, or whipped cream, each bite is a delight to the senses. Whether enjoyed solo or shared with loved ones, pancakes are a timeless classic that never fails to bring joy to the table.",
            image: "/images/pancake.png",
            type: "breakfast",
        },
        {
            name: "DOSA",
            price: 30,
            text: "Savor the crispy goodness of dosa, a beloved South Indian delicacy that's sure to delight your taste buds. Made from fermented rice and lentil batter, each dosa is thin, crispy, and bursting with flavor. Whether enjoyed plain, with chutney and sambar, or filled with savory fillings, dosa is a versatile dish that's perfect for any meal of the day.",
            image: "/images/dosa.jpg",
            type: "breakfast",
        },
        {
            name: "IDLI",
            price: 20,
            text: "Indulge in the soft and fluffy goodness of idli, a traditional South Indian staple that's loved by all. Made from fermented rice and lentil batter, each idli is light, airy, and packed with flavor. Whether enjoyed with sambar and chutney or paired with your favorite curry, idli is a wholesome and comforting dish that's perfect for breakfast, lunch, or dinner.",
            image: "/images/idli.jpg",
            type: "breakfast",
        },
        {
            name: "CROISSANT",
            price: 40,
            text: "Indulge in the buttery flakiness of a croissant, a classic French pastry that's beloved worldwide. With its delicate layers and golden crust, each bite is a symphony of texture and flavor. Whether enjoyed plain, with a dollop of jam, or filled with decadent fillings like chocolate or almond paste, a croissant is the epitome of indulgence that's perfect for breakfast, brunch, or anytime you crave a delicious treat.",
            image: "/images/croissant.jpg",
            type: "breakfast",
        },
        {
            name: "HOT CHOCOLATE",
            price: 30,
            text: "Savor the rich and velvety taste of hot chocolate, a comforting beverage that's perfect for cozying up on chilly days. Made from melted chocolate and warm milk, each sip is a decadent delight that warms both body and soul. Whether topped with whipped cream, marshmallows, or a sprinkle of cinnamon, hot chocolate is a timeless classic that brings joy with every sip.",
            image: "/images/hotchocolate.jpg",
            type: "breakfast",
        },
        {
            name: "POACHED EGG",
            price: 16,
            text: "Delight in the simplicity and elegance of a perfectly poached egg, a culinary masterpiece that's both nutritious and delicious. With its soft, runny yolk and tender egg white, each bite is a symphony of flavor and texture. Whether served atop toast, salad, or as part of a traditional eggs Benedict, poached eggs are a versatile and delightful addition to any meal.",
            image: "/images/poachedegg.jpg",
            type: "breakfast",
        },
        {
            name: "GREEK YOGURT",
            price: 23,
            text: "Indulge in the creamy richness of Greek yogurt, a nutritious and versatile dairy product that's beloved by health enthusiasts and foodies alike. With its thick texture and tangy flavor, Greek yogurt is a delicious addition to breakfast bowls, smoothies, or enjoyed on its own with a drizzle of honey and fresh fruit. Packed with protein and probiotics, Greek yogurt is not only satisfying but also supports gut health and overall well-being.",
            image: "/images/greekyogurt.jpg",
            type: "breakfast",
        },
        {
            name: "CHOLE BHATURE",
            price: 30,
            text: "Experience the hearty and flavorful delight of chole bhature, a popular North Indian dish that promises to satisfy your taste buds. Featuring spicy chickpea curry (chole) paired with deep-fried, fluffy bread (bhature), this dish is a true comfort food. Perfect for lunch or dinner, chole bhature is a feast of rich, aromatic spices and satisfying textures, making it a beloved choice for any occasion.",
            image: "/images/cholebhature.jpg",
            type: "breakfast",
        },
        {
            name: "ALOO PARATHA",
            price: 32,
            text: "Savor the delicious taste of aloo paratha, a traditional Indian flatbread stuffed with a spiced potato filling. This hearty dish is perfect for any meal, offering a satisfying combination of crispy exterior and flavorful, savory interior. Served with yogurt, pickles, or a dollop of butter, aloo paratha is a beloved comfort food that brings warmth and joy with every bite.",
            image: "/images/alooparatha.webp",
            type: "breakfast",
        },
        {
            name: "CEREALS",
            price: 23,
            text: "Kickstart your day with a bowl of nutritious cereals, a quick and convenient breakfast option that's loved by all ages. Packed with essential vitamins, minerals, and fiber, cereals offer a wholesome start to your morning. Whether you prefer them with milk, yogurt, or fresh fruit, cereals provide the energy and nutrients needed to fuel your day ahead.",
            image: "/images/cereals.jpg",
            type: "breakfast",
        },
        {
            name: "VEG FRIED RICE",
            price: 29,
            text: "Enjoy the vibrant flavors of vegetable fried rice, a delicious and wholesome dish that's perfect for any meal. Made with perfectly cooked rice, fresh vegetables, and a blend of aromatic spices, this dish is both satisfying and nutritious. Whether served as a main course or a side dish, vegetable fried rice is a versatile and tasty option that's sure to please everyone.",
            image: "/images/vegfriedrice.avif",
            type: "lunch",
        },
        {
            name: "VEG BIRYANI",
            price: 30,
            text: "Savor the vibrant and aromatic flavors of vegetable biryani, a delightful and wholesome dish that's perfect for any occasion. Made with fragrant basmati rice, an assortment of fresh vegetables, and a medley of spices, this biryani is a feast for both the eyes and the palate. Each bite is a harmonious blend of taste and texture, making vegetable biryani a nutritious and satisfying meal option.",
            image: "/images/vegbiryani.avif",
            type: "lunch",
        },
        {
            name: "CHICKEN FRIED RICE",
            price: 33,
            text: "Indulge in the delicious and savory flavors of chicken fried rice, a versatile dish that's perfect for any meal. Made with tender pieces of chicken, perfectly cooked rice, and a mix of fresh vegetables, all stir-fried with aromatic spices and sauces, this dish offers a satisfying combination of taste and texture. Whether enjoyed on its own or as part of a larger meal, chicken fried rice is a crowd-pleaser that's sure to delight.",
            image: "/images/chickenfriedrice.webp",
            type: "lunch",
        },
        {
            name: "CHICKEN BIRYANI",
            price: 40,
            text: "Delight in the rich and aromatic flavors of chicken biryani, a beloved Indian dish that combines tender chicken with fragrant basmati rice and a blend of spices. Each mouthful offers a symphony of taste and texture, with perfectly cooked rice and succulent pieces of chicken infused with herbs and spices. Served with raita or a fresh salad, chicken biryani is a feast for the senses, perfect for any special occasion or a satisfying meal.",
            image: "/images/chickenbiryani.webp",
            type: "lunch",
        },
        {
            name: "CHICKEN CURRY",
            price: 30,
            text: "Experience the rich and comforting flavors of chicken curry, a beloved dish that's perfect for any occasion. Tender pieces of chicken are simmered in a fragrant blend of spices and a creamy, savory sauce, creating a dish that's both flavorful and satisfying. Whether enjoyed with rice, naan, or roti, chicken curry is a delicious and hearty meal that brings warmth and joy with every bite.",
            image: "/images/chickencurry.avif",
            type: "lunch",
        },
        {
            name: "ROASTED CHICKEN",
            price: 28,
            text: "Savor the succulent flavors of roasted chicken, a classic dish that's both simple and delicious. Perfectly seasoned and roasted to golden perfection, each piece of chicken is juicy and tender with a crispy, flavorful skin. Whether served with your favorite sides or as part of a hearty meal, roasted chicken is a timeless favorite that brings comfort and satisfaction to the table.",
            image: "/images/roastedchicken.jpg",
            type: "dinner",
        },
        {
            name: "SALMON",
            price: 33,
            text: "Enjoy the rich and delicate flavors of salmon, a nutritious and versatile fish that's perfect for any meal. Whether grilled, baked, or pan-seared, salmon offers a tender and flaky texture with a delightful taste that pairs well with a variety of seasonings and sides. Packed with omega-3 fatty acids and essential nutrients, salmon is a delicious and healthy choice that's sure to please your palate.",
            image: "/images/salmon.avif",
            type: "dinner",
        },
        {
            name: "SALAD",
            price: 10,
            text: "Delight in the fresh and vibrant flavors of a salad, a versatile dish that's perfect for any meal. Packed with a variety of crisp vegetables, leafy greens, and nutritious toppings, each bite offers a refreshing and healthy experience. Whether enjoyed with a light vinaigrette or a rich dressing, salads are a delicious way to nourish your body and satisfy your taste buds.",
            image: "/images/salad.avif",
            type: "dinner",
        },
        {
            name: "TOFU CURRY",
            price: 21,
            text: "Indulge in the rich and flavorful taste of tofu curry, a delightful dish that's perfect for any meal. Soft and tender tofu cubes are simmered in a fragrant and creamy curry sauce, infused with a blend of aromatic spices. This vegan-friendly dish offers a satisfying and nutritious option, whether served with rice, naan, or your favorite grain. Enjoy the harmonious balance of textures and flavors in every bite of tofu curry.",
            image: "/images/tofucurry.jpg",
            type: "dinner",
        },
        {
            name: "PALAK PANEER",
            price: 23,
            text: "Savor the creamy and nutritious flavors of palak paneer, a classic Indian dish that's perfect for any meal. Tender cubes of paneer (Indian cottage cheese) are cooked in a rich and smooth spinach gravy, infused with a blend of aromatic spices. This delicious and wholesome dish pairs perfectly with rice, naan, or roti, offering a delightful balance of taste and nutrition in every bite.",
            image: "/images/palakpaneer.avif",
            type: "dinner",
        },
        {
            name: "VEG MANCHURIAN",
            price: 25,
            text: "Enjoy the bold and savory flavors of vegetable Manchurian, a popular Indo-Chinese dish that's perfect for any meal. Crispy vegetable balls made from finely chopped vegetables are tossed in a tangy and spicy sauce, creating a delicious blend of textures and tastes. Whether served as an appetizer or a main course with fried rice or noodles, veg Manchurian is a crowd-pleaser that's sure to delight your taste buds.",
            image: "/images/vegmanchurian.jpg",
            type: "dinner"
        },
        {
            name: "VEG SPAGHETTI",
            price: 28,
            text: "Delight in the fresh and vibrant flavors of vegetable spaghetti, a wholesome dish that's perfect for any meal. Al dente spaghetti is tossed with an array of colorful vegetables and a savory tomato-based sauce, creating a delicious and nutritious meal. Whether enjoyed on its own or paired with a side salad, vegetable spaghetti is a satisfying and healthy option that's sure to please everyone.",
            image: "/images/vegspaghetti.avif",
            type: "dinner",
        },
        {
            name: "ALFREDO PASTA",
            price: 29,
            text: "Indulge in the rich and creamy flavors of Alfredo pasta, a classic Italian dish that's perfect for any occasion. Tender pasta is coated in a luxurious Alfredo sauce made from butter, cream, and Parmesan cheese, creating a velvety and comforting meal. Whether enjoyed with a sprinkle of black pepper, fresh herbs, or accompanied by your favorite vegetables or protein, Alfredo pasta is a decadent delight that everyone will love.",
            image: "/images/alfredopasta.avif",
            type: "dinner",
        },
        {
            name: "PIZZA",
            price: 33,
            text: "Relish the irresistible flavors of pizza, a universally loved dish that's perfect for any occasion. With its crispy crust, tangy tomato sauce, gooey cheese, and a variety of toppings, each bite offers a delightful combination of textures and tastes. Whether you prefer classic Margherita, pepperoni, or a veggie-loaded creation, pizza is a versatile and satisfying meal that brings joy to everyone.",
            image: "/images/pizza.jpg",
            type: "lunch",
        },
        {
            name: 'CHICKEN WRAP',
            price: 36,
            text: "Savor the delicious and convenient flavors of a chicken wrap, a satisfying meal that's perfect for on-the-go. Tender grilled chicken, crisp lettuce, juicy tomatoes, and creamy dressing are wrapped in a soft tortilla, creating a portable and flavorful dish. Whether enjoyed for lunch, dinner, or as a snack, a chicken wrap offers a tasty and convenient option for any time of day.",
            image: "/images/chickenwrap.avif",
            type: "lunch",
        }
    ];
    res.json(foodData);
});


// app.use("/api/foods/", food_api);

const start = async () => {
    try {
        // await connectDB(process.env.MONGODB_URL);
        app.listen(port, () => {
            console.log(`running on http://localhost:${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();

module.exports = app;
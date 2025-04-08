const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "index.html");
})

app.get("/api/forum", (req,res) => {
const forum = [
    {
        "_id": 1,
        "title": "What’s the Most Fascinating Plant You’ve Encountered?",
        "author": "FernFury",
        "content": "Plants have always amazed me, and there’s something so special about discovering a unique one in the wild. From the odd-looking cactus in deserts to the rare orchids in tropical rainforests, plants play an important role in ecosystems and are essential to life on Earth. What’s the most fascinating plant you’ve ever encountered? What makes it stand out to you, and where did you find it?",
        "img_name": "images/plant1.jpg"
    },
    {
        "_id": 2,
        "title": "Small Ways to Help the Environment in Your Daily Life",
        "author": "FernFury",
        "content": "Climate change and environmental degradation can feel overwhelming at times, but every small action counts. From reducing plastic use to conserving water, there are many ways we can help the environment every day. What are some small changes you’ve made in your life to be more eco-friendly?",
        "img_name": "images/image.jpg"
    },
    {
        "_id": 3,
        "title": "What’s Your Favorite Memory in the Wilderness?",
        "author": "NatureLover99",
        "content": "There’s something magical about spending time in nature, whether it’s hiking through the mountains or simply sitting by a quiet lake. The connection to the earth is so powerful. I remember the time I spent a week in the wilderness, observing wildlife and enjoying the tranquility. What about you? Do you have a favorite memory of being in nature?",
        "img_name": "images/image.jpg"
    },
    {
        "_id": 4,
        "title": "Best National Parks to Visit in Different Seasons",
        "author": "TrailBlazer",
        "content": "Each season brings something new to national parks. Spring blossoms, summer hikes, autumn foliage, and winter landscapes all offer unique experiences. What are your favorite parks to visit in different seasons?",
        "img_name": "images/image.jpg"
    },
    {
        "_id": 5,
        "title": "The Most Breathtaking Sunset You’ve Ever Seen",
        "author": "SkyWatcher",
        "content": "There’s nothing quite like watching a beautiful sunset to end the day. Whether it’s over the ocean, a mountain range, or a vast desert, each one is unique. Where was the most breathtaking sunset you’ve ever seen?",
        "img_name": "images/image.jpg"
    },
    {
        "_id": 6,
        "title": "How to Start Your Own Garden",
        "author": "GreenThumb",
        "content": "Gardening is a great way to connect with nature, grow your own food, and create a peaceful outdoor space. Do you have any tips for beginners looking to start their own garden?",
        "img_name": "images/image.jpg"
    },
    {
        "_id": 7,
        "title": "The Joy of Birdwatching",
        "author": "FeatherFriend",
        "content": "Birdwatching is a relaxing and rewarding hobby that allows you to appreciate the beauty of nature. Have you ever spotted a rare or interesting bird? Share your experiences!",
        "img_name": "images/image.jpg"
    },
    {
        "_id": 8,
        "title": "The Impact of Forest Conservation",
        "author": "EcoWarrior",
        "content": "Forests are essential for biodiversity and climate regulation. Conservation efforts are crucial in protecting them from deforestation and degradation. What are some ways individuals and communities can contribute to forest conservation?",
        "img_name": "images/image.jpg"
    }
]

res.send(forum);
});

app.listen(3001, ()=>{
    console.log("I'm listening")
});
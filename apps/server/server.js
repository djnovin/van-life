//typescript npx create-mf-app

const express = require("express");
const app = express();
const cors = require("cors");
const PrismaClient = require("@prisma/client").PrismaClient;

const prisma = new PrismaClient();

// middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// route for api
/*
app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});
*/

/*
app.get - GET request - get data from server
app.post - POST request
app.put - PUT request
app.delete - DELETE request
*/

/*
static routes - routes that are not dynamic
dynamic routes - routes that are dynamic
*/

/*
app.get("/api/vans/:id", (req, res) => {
  // get id from url
  const id = req.params.id;
  // get data from database
  const data = [
    {
      id: 1,
      name: "Modest Explorer",
      price: 60,
      description:
        "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: "../public/assets/images/modest-explorer.png",
      type: "simple",
    },
    {
      id: 2,
      name: "Beach Bum",
      price: 80,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl: "../public/assets/images/modest-explorer.png",
      type: "rugged",
    },
    {
      id: 3,
      name: "Reliable Red",
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl: "../public/assets/images/modest-explorer.png",
      type: "luxury",
    },
    {
      id: 4,
      name: "Dreamfinder",
      price: 65,
      description:
        "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
      imageUrl: "../public/assets/images/modest-explorer.png",
      type: "simple",
    },
    {
      id: 5,
      name: "The Cruiser",
      price: 120,
      description:
        "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      imageUrl: "../public/assets/images/modest-explorer.png",
      type: "luxury",
    },
    {
      id: 6,
      name: "Green Wonder",
      price: 70,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl: "../public/assets/images/modest-explorer.png",
      type: "rugged",
    },
  ];
  // find van with matching id
  const van = data.find((van) => van.id === parseInt(id));
  // send van as response
  res.json(van);
});
*/

/*
app.get("/api/vans", (req, res) => {
  const data = [
    {
      id: 1,
      name: "Modest Explorer",
      price: 60,
      description:
        "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: "../public/assets/images/modest-explorer.png",
      type: "simple",
    },
    {
      id: 2,
      name: "Beach Bum",
      price: 80,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl: "../public/assets/images/modest-explorer.png",
      type: "rugged",
    },
    {
      id: 3,
      name: "Reliable Red",
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl: "../public/assets/images/modest-explorer.png",
      type: "luxury",
    },
    {
      id: 4,
      name: "Dreamfinder",
      price: 65,
      description:
        "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
      imageUrl: "../public/assets/images/modest-explorer.png",
      type: "simple",
    },
    {
      id: 5,
      name: "The Cruiser",
      price: 120,
      description:
        "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      imageUrl: "../public/assets/images/modest-explorer.png",
      type: "luxury",
    },
    {
      id: 6,
      name: "Green Wonder",
      price: 70,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl: "../public/assets/images/modest-explorer.png",
      type: "rugged",
    },
  ];
  res.send(data);
  });

*/

app.get("/api/vans", async(req, res) => {
  const data = await prisma.van.findMany();
  console.log(data);
  res.send(data);
});

app.get("/api/vans/:id", async(req, res) => {
  const { id } = req.params;
  const data = await prisma.van.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  console.log(data);
  res.send(data);
});

app.post("/api/newsletter", (req, res) => {
// save email to database with prisma
const { email } = req.body

prisma.newsletter
  .create({
    data: {
      email: email,
    },
  })
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log(err);
  });
});

app.get("/api/newsletter", (req, res) => {
  prisma.newsletter
    .findMany()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  }
);
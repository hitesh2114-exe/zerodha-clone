require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const port = 8080;
const { HoldingsModel } = require("./models/HoldingsModels.js");
const { PositionModel } = require("./models/PositionModels.js");
const { OrderModel } = require("./models/OrderModels.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { UserModel } = require("./models/UserModel.js");
const session = require("express-session");
// const cookieparser = {}
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET;

const uri = process.env.MONGO_URL;

app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));

//session details
app.use(
  session({
    secret: process.env.SECRETE,
    resave: false,
    saveUninitialized: true,
  })
);

//passport authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(UserModel.authenticate()));

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

mongoose.connect(uri).then(() => console.log("Connected!"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors({
  origin: [
    "https://zerodha-clone-4-xyz.onrender.com", // frontend
    "https://zerodha-clone-5-aris.onrender.com"  // dashboard
  ],
  credentials: true
}));
app.use(bodyParser.json());

//feeding the predefined data to the DB
// app.get('/addHoldings', async (req, res) => {    //for holdings
//   let tempData = [{
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   }];
//   tempData.forEach((items) => {
//     let newHoldings = new HoldingsModel({
//       name: items.name,
//       qty: items.qty,
//       avg: items.avg,
//       price: items.price,
//       net: items.net,
//       day: items.day,
//     });
//     newHoldings.save();
//   });
//   res.send("Done");
// });

// app.get('/addPositions', async (req, res) => {       //for positions
//   let tempData = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     }
//   ];
//   tempData.forEach((items) => {
//     let newPositions = new PositionModel({
//       product: items.product,
//       name: items.name,
//       qty: items.qty,
//       avg: items.avg,
//       price: items.price,
//       net: items.net,
//       day: items.day,
//       isLoss: items.isLoss
//     });
//     newPositions.save();
//   })
//   res.send("Done");
// });

//for connecting the database to the dashboard

// app.get("/demouser", async (req,res) => {
//   let fakeUser = new UserModel({
//     email : "rohan@gmail.com",
//     username : "rohan"
//   });
//   let registeredUser = await UserModel.register(fakeUser, "rohan");
//   res.send(registeredUser);
// });

app.post("/signup", async (req, res) => {
  let { username, email, password } = req.body;

  const existingUser = await UserModel.findOne({ email }); // or username
  if (existingUser) {
    return res.status(409).send({ message: "User already exists" });
  } else {
    try {
      let user = new UserModel({
        email: email,
        username: username,
      });

      let registeredUser = await UserModel.register(user, password);
      req.login(registeredUser, (err) => {
        if (err) {
          return res.status(500).send({ message: "Login after signup failed" });
        }
        res.send({
          message: "Signup and login successful",
          user: registeredUser,
        });
      });
    } catch (e) {
      console.error("Signup error:", e);
      res.status(500).send({ message: "Signup failed" });
    }
  }
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      // Login failed
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    req.logIn(user, (err) => {
      if (err) return next(err);
      // ✅ Create JWT token
      const token = jwt.sign(
        { id: user.id, username: user.username },
        SECRET_KEY,
        { expiresIn: "1h" }
      );
      // Login successful
      return res.status(200).json({ message: "Login successful" });
    });
  })(req, res, next);
});

app.get("/dashboard", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });

    // ✅ Token is valid
    res.status(200).json({ user: { id: decoded.id, username: decoded.username } });
  });
});

app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});
app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionModel.find({});
  res.json(allPositions);
});
app.get("/allOrders", async (req, res) => {
  const allOrders = await OrderModel.find({});
  res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order saved");
});

app.get("/auth/check", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
});

app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    req.session.destroy(() => {
      res.clearCookie("connect.sid"); // if you're using express-session
      res.redirect("/"); // Redirect to home page
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

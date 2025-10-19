require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const { HoldingsModel } = require("./models/HoldingsModels.js");
const { PositionModel } = require("./models/PositionModels.js");
const { OrderModel } = require("./models/OrderModels.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const { UserModel } = require("./models/UserModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

const uri = process.env.MONGO_URL;

app.use(express.urlencoded({ extended: true }));

mongoose.connect(uri).then(() => console.log("Connected!"));

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["https://zerodha-clone-4-mk1z.onrender.com", "https://zerodha-clone-5-aris.onrender.com"],
    credentials: true,
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

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

//signup route

app.post("/signup", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    //check is user already exist
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already taken" });
    }

    //hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create new user
    const newUser = new UserModel({
      username,
      password: hashedPassword,
      email,
      holdings: [],
    });

    //save the user
    await newUser.save();
    // Create JWT
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ message: "Signup successful" , token});
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

//login route
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    //check in database
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    //compare password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    //create token
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

//logout route
app.post("/logout", (req, res) => {
  res.status(200).json({ message: "Logout successful" });
});

//profile checking route
app.get("/profile", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Missing token" });
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ username: user.username });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
});

//buy stocks
function simulatePrice(basePrice) {
  const changePercent = (Math.random() * 2 - 1) * 0.05; // ±5%
  const newPrice = basePrice * (1 + changePercent);
  return parseFloat(newPrice.toFixed(2));
}

function calculateNet(avg, price, qty) {
  const netValue = (price - avg) * qty;
  return (netValue >= 0 ? "+" : "") + netValue.toFixed(2);
}

function simulateDayChange(price) {
  const changePercent = (Math.random() * 2 - 1) * 0.03; // ±3%
  const change = price * changePercent;
  const previousClose = price - change;
  const percentChange = ((price - previousClose) / previousClose) * 100;
  return (percentChange >= 0 ? "+" : "") + percentChange.toFixed(2) + "%";
}

app.post("/buy", async (req, res) => {
  const { name, qty, price } = req.body;
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Missing token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded.id);
    const simulatedPrice = simulatePrice(price);
    const existing = user.holdings.find((h) => h.name === name);

    if (existing) {
      const totalQty = existing.qty + qty;
      const totalCost = existing.avg * existing.qty + simulatedPrice * qty;
      existing.qty = totalQty;
      existing.avg = totalCost / totalQty;
      existing.price = simulatedPrice;
      existing.net = calculateNet(existing.avg, simulatedPrice, existing.qty);
      existing.day = simulateDayChange(simulatedPrice);
    } else {
      user.holdings.push({
        name,
        qty,
        avg: price,
        price: simulatedPrice,
        net: calculateNet(price, simulatedPrice, qty),
        day: simulateDayChange(simulatedPrice),
      });
    }
    await user.save();
    res.status(200).json({ message: "Stock purchased" });
  } catch (err) {
    res.status(500).json({ message: "Purchase failed" });
  }
});

//sell stocks
app.post("/sell", async (req, res) => {
  const { name, qty } = req.body;
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Missing token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded.id);

    const holding = user.holdings.find((h) => h.name === name);
    if (!holding || holding.qty < qty) {
      return res.status(400).json({ message: "Insufficient shares" });
    }

    holding.qty -= qty;
    if (holding.qty === 0) {
      user.holdings = user.holdings.filter((h) => h.name !== name);
    }

    await user.save();
    res.status(200).json({ message: "Stock sold" });
  } catch (err) {
    res.status(500).json({ message: "Sell failed" });
  }
});

app.get("/holdings", async (req, res) => {
  const authHeader = req.headers.authorization;

  // ✅ Check for missing token
  if (!authHeader) {
    return res.status(401).json({ message: "Missing token" });
  }

  const token = authHeader.split(" ")[1]; // Extract token from "Bearer <token>"

  try {
    // ✅ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Decoded token:", decoded);

    // ✅ Fetch user by ID
    const user = await UserModel.findById(decoded.id);
    console.log("✅ Fetched user:", user);

    // ✅ Handle missing user
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ holdings: user.holdings });
  } catch (err) {
    console.error("❌ Token verification failed:", err);
    res.status(403).json({ message: "Invalid or expired token" });
  }
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

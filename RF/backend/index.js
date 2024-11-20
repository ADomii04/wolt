const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL);
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require("./Module/User");
const Orders = require("./Module/Orders")
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.json());

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

app.use(cookieParser());

const bcryptSalt = bcrypt.genSaltSync(10);

app.post("/signup", async(req, res) =>{
    const {firstName, lastName, email, password} = req.body;
    try {
        const user = await User.create({
            firstName,
            lastName,
            email,
            password:bcrypt.hashSync(password, bcryptSalt),
        },{withCredentials: true})
        console.log("Sikeres regisztráció")
        res.json(user);
    } catch (error) {
        console.log(error + "Hiba a regisztrációban");
    }
})

app.post("/signin", async(req, res) => {
    const {email, password} = req.body;
    const foundUser = await User.findOne({email});
    if(foundUser){
        const passwordOk = bcrypt.compareSync(password, foundUser.password);
        if(passwordOk){
            jwt.sign({email:foundUser.email, id:foundUser._id,}, process.env.PASSWORD, {}, (err, token) => {
                if(err)throw err;
                res.cookie("token", token,).json(foundUser);
            });
            console.log("Sikeres bejelentkezés");
        }else{
            console.log("Rossz jelszó")
        }
    }else{
        console.log("Hibás email cím vagy jelszó")
    }
    
})

app.get("/profile", async(req, res) => {
    const {token} = req.cookies;
    if (!token) {
        return res.status(401).json({ message: "No token found" });
    }
    try {
        jwt.verify(token, process.env.PASSWORD, async (err, userData) => {
            if (err) {
                throw(err)
            }
            const user = await User.findById({_id: userData.id})
            console.log(user);
            res.json(user);
            
        });
    } catch (err) {
        console.error(err + "Baj a sütikezeléssel");
    }
})

app.post("/changeProfile", async(req, res) => {
    const {email, password, userId} = req.body;
    try {
        const changedUser = await User.findByIdAndUpdate(userId, {email: email , password: password})
        console.log(changedUser);
        res.json(changedUser);
    } catch (error) {
        console.log(error + "Hiba az adatok átírásában");
    }
})

app.post("/changeOtherInfo", async(req, res) => {
    const {address, phone, userId} = req.body;
    try {
        const changedUser = await User.findByIdAndUpdate(userId, {deliveryAdress: address, phoneNumber:phone})
        res.json(changedUser);
    } catch (error) {
        console.log(error)
    }
})

app.post("/Addorders", async(req, res) => {
    const{userId, name, price} = req.body;
    try {
        const Order = await Orders.create({
            userId,
            name,
            price
        })
        console.log("Sikeres Order rögzítés")
        res.json(Order)
    } catch (error) {
        console.log(error);
    }
})

app.get("/orders" , async(req, res) => {
    const {token} = req.cookies;
    if (!token) {
        return res.status(401).json({ message: "No token found" });
    }
    try {
        jwt.verify(token, process.env.PASSWORD, async (err, userData) => {
            if (err) {
                throw(err)
            }
            const order = await Orders.find({userId: userData.id})
            console.log(order);
            res.json(order);
            
        });
    } catch (err) {
        console.error(err + "Baj a sütikezeléssel");
    }
})


app.listen(4000, () => {
    console.log("Server is running on port 4000");
})
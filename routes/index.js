const express = require("express")
const { isLoggedIn, isNotLoggedIn, isUserAdmin } = require("../helpers/auth")
const { body } = require("express-validator")
const Router = express.Router()
const upload = require("../helpers/multer")
const sharp = require("sharp")

const dashboardController = require("../controllers/dashboard")
Router.get("/dashboard", isLoggedIn, dashboardController.get)
Router.get("/dashboard/remove", isLoggedIn, dashboardController.removeHandler)

const HomeController = require("../controllers/homePage")
Router.get("/", HomeController)

const loginController = require("../controllers/login")
Router.get("/login", isNotLoggedIn, loginController.get)
Router.post('/login', loginController.post, loginController.func);


const registerController = require("../controllers/register")
Router.get("/register", isNotLoggedIn, registerController.get)
Router.post("/register",
    body('email').isEmail().normalizeEmail().toLowerCase(),
    registerController.post
)

const LogoutController = require("../controllers/logout")
Router.get("/logout", isLoggedIn, LogoutController.get)

const servicesController = require("../controllers/services")
Router.get("/upload", isLoggedIn, servicesController.get)
Router.post("/upload", upload.single('file'), (req, res, next) => {
    if(req.file.fieldname == "image") sharp(req.file.path).resize(500, 500).jpeg({ mozjpeg : true }).toFile(req.file.path)
    next()
},servicesController.post)

const errController = require("../controllers/error")
const { compareSync } = require("bcrypt")
Router.get("/*", errController)


module.exports = Router
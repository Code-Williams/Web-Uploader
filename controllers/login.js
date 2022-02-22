const passport = require("passport")

const get = async (req, res) => {
    res.render("login", {
        flash : req.flash(), 
        user : req.user
    })
}

const post = passport.authenticate("local", {
    failureRedirect : "/login",
    failureFlash : true,
    session : true
})

const func = (req, res) => {
    var redirectTo = req.session.redirectTo || "/"
    delete req.session.redirectTo
    res.redirect(redirectTo)
}

module.exports = {
    get,
    post,
    func
};
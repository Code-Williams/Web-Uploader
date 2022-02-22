const { format } = require("date-fns")

const HomeController = async (req, res) => {
    res.render("index", {
        user : req.user,
        format
    });
}

module.exports = HomeController;
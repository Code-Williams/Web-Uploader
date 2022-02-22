
const ErrorController = async (req, res) => {
    res.render("errors/404", {
        user : req.user
    })
}

module.exports = ErrorController;
const Service = require("../models/Services")

const get = async (req, res) => {
    res.render("services", {
        user : req.user,
        flash : req.flash()
    })
}

const post = async (req, res) => {
    if(req.file){
        if(req.file.filename){
            console.log(req.body)

            await Service.create({
                file : req.file.filename,
                userId : req.user.id,
                fileName : req.body.name
            })
            req.flash("success", "فایل شما با موفقیت آپلود شد")
            res.redirect("/dashboard")
            return
        }
    }

    req.flash("error", "لطفا فایل مورد نظر را انتخاب کنید")
    res.redirect("/services")
}

module.exports = {
    get,
    post
}
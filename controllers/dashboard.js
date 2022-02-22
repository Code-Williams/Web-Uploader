const Service = require("../models/Services")
const config = require("../config.json")
const fs = require("fs")

const get = async (req, res) => {
    const all = await Service.findAll({
        where : {
            userId : req.user.id
        }
    })

    res.render("dashboard", {
        files : all,
        user : req.user,
        config,
        flash : req.flash()
    })
}

const removeHandler = async (req, res) => {
    const id = req.query.fileId
    const file = await Service.findOne({
        where : {
            userId : req.user.id,
            id : id
        }
    })

    if(file){
        req.flash("success", `Your file with id ${id} successfully deleted`)
        fs.unlinkSync(`./public/uploads/${file.file}`)
        await Service.destroy({
            where : {
                id
            }
        })
    }else{
        req.flash("error", "It's not your file or file not found")
    }

    res.redirect("/dashboard")
}

module.exports = {
    get,
    removeHandler
}
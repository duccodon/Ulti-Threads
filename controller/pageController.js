const controller = {};
const models = require("../models");
//const models = require('../models');
//const { Op } = require('sequelize')

// controller.init = async(req, res, next) => {
//     res.locals.categories = await models.Category.findAll({
//         include: [{model: models.Blog}],
//     });
//     res.locals.tags = await models.Tag.findAll();
//     next();
// }

// controller.showList = async(req, res) => {
//     let limit = 2; //blogs limit
//     let { category = 0, tag = 0, keyword = "", page = 1} = req.query;
//     category = isNaN(category) ? 0 : parseInt(category);
//     tag = isNaN(tag) ? 0: parseInt(tag);
//     page = isNaN(page) ? 1 : parseInt(page);
//     let offset = (page - 1) * limit;

//     let options = {
//         include: [{ model: models.Comment}],
//         where: {},
//     };

//     if (category) {
//         options.where.categoryId = category;
//     }

//     if (tag) {
//         options.include.push({model: models.Tag, where: {id: tag}})
//     }

//     //search
//     if (keyword.trim() != ""){
//         options.where[Op.or] = {
//             title: { [Op.iLike]: `%${keyword.trim()}%`},
//             summary: { [Op.iLike]: `%${keyword.trim()}%`},
//         }
//     }

//     //pagination
//     let totalRows = await models.Blog.count({
//         ...options, 
//         distinct: true,
//         col: "id",
//     });
//     res.locals.pagination = {
//         page,
//         limit,
//         totalRows,
//         queryParams: req.query,
//     };

//     let blogs = await models.Blog.findAll({...options, limit, offset});
//     res.locals.blogs = blogs;
//     res.render("index");
// }

// controller.showDetails = async(req, res) => {
//     let id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
//     res.locals.blog = await models.Blog.findOne({
//         where: {id},
//         include: [
//             {model: models.Comment},
//             {model: models.User},
//             {model: models.Category},
//             {model: models.Tag},
//         ]
//     })
//     res.render("details");
// }

controller.showHomepage = async (req, res) => {
    res.locals.threads = await models.Thread.findAll({
        include: [
            {model: models.User},
            {model: models.Media},
        ],
      });
    res.render("homepage", {headerName: "Home", page: 1});
};

controller.showSearch = (req, res) => {
    res.render("search", {headerName: "Search", page: 2});
}

controller.showActivity = (req, res) => {
    res.render("activity", {headerName: "Activity", page: 3});
}

controller.showProfile = (req, res) => {
    res.render("profile", {headerName: "Profile", page: 4});
}

controller.showPostDetails = (req, res) => {
    res.render("post_details", {headerName: "Post", page: 5});
}

controller.showLogin = (req, res) => {
    res.render("login", {layout: 'account', title: 'Login'});
}

controller.showCreate = (req, res) => {
    res.render("create", {layout: "account", title: 'Sign Up'});
}

module.exports = controller;
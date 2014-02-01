var models = require('../models')

exports.new = function(req, res){
    res.render('new-ingredient', { title : 'New Ingredient'});
};

exports.create = function(req, res){
    var ingredient = new models.Ingredient({
        name: req.body.ingredientName,
        price: req.body.ingredientPrice
    });
    ingredient.save(function(err){
        if (err) console.log(err);
        res.render('new-ingredient-saved', {title: 'New Ingredient Saved', ingredient: ingredient})
    });
};
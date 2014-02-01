module.exports = function(models) {
    var fn = {};
    
    fn.new = function(req, res){
        res.render('ingredient/new', { title : 'New Ingredient'});
    };

    fn.create = function(req, res){
        var ingredient = new models.Ingredient({
            name: req.body.ingredientName,
            price: req.body.ingredientPrice
        });
        ingredient.save(function(err){
            if (err) console.log(err);
            res.render('ingredient/create', {title: 'New Ingredient Saved', ingredient: ingredient})
        });
    };
    
    return fn;   
}


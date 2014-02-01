module.exports = function(models) {
    var fn = {};
    
    fn.new = function(req, res){
        models.Ingredient.find().exec(function(err, ingredients) {
            if (err) console.log(err);
            res.render('order/new', { title : 'New Burger', ingredients : ingredients});
        })
        
    };

    fn.create = function(req, res){
        console.log(req.body);
        var order = new models.Order({
            name: req.body.name,
            ingredients: req.body.ingredients,
            completed: false
        });
        order.save(function(err){
            if (err) {
                console.log(err);
                res.send(500, {status: 'error'});
            } else {
                res.send(200, {status: 'success'});
            }
        });
    };
    
    fn.showOrders = function(req, res){
        models.Order.find().populate('ingredients').exec(function(err, orders){
            if (err) {
                console.log(err);
            } else {
                res.render('orders', {title: 'All Orders', orders: orders})
            }
        });
    };
    
    fn.remove = function(req, res){
        models.Order.update({_id: req.body.order}, { completed: true }).exec(function(err){
            if (err) {
                res.send(500, {status: 'error'});
            } else {
                res.send(200, {status: 'success'});
            }
        });
    };
    
    return fn;   
}


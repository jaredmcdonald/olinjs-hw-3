var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'localhost/burgers');

// Ingredient
var ingredientSchema = mongoose.Schema({
    name: String,
    price: Number
});
exports.Ingredient = mongoose.model('Ingredient', ingredientSchema);


// Order
var orderSchema = mongoose.Schema({
    name: String,
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }],
    completed: Boolean
});
exports.Order = mongoose.model('Order', orderSchema);
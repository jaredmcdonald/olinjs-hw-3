var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'localhost/burgers');

// Ingredient
var ingredientSchema = mongoose.Schema({
    name: String,
    price: Number
});
exports.Ingredient = mongoose.model('Ingredient', ingredientSchema);
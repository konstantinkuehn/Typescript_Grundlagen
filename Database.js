/// <reference path="Cake.ts" />
/// <reference path="Ingredient.ts" />
var Database = /** @class */ (function () {
    function Database() {
        this.allCakes = new Array();
        this.allIngredients = new Array();
    }
    Database.prototype.AddIngredient = function (ingredient) {
        this.allIngredients.push(ingredient);
    };
    Database.prototype.EditIngredient = function (oldIngredient, newIngredient) {
        var index = this.allIngredients.indexOf(oldIngredient);
        this.allIngredients[index] = newIngredient;
    };
    Database.prototype.GetIngredientByName = function (ingredientName) {
        return this.allIngredients.filter(function (ingredient) { return ingredient.Name == ingredientName; })[0];
    };
    Database.prototype.HasIngredient = function (ingredientName) {
        return this.allIngredients.filter(function (ingredient) { return ingredient.Name == ingredientName; }).length > 0;
    };
    Database.prototype.RemoveIngredient = function (ingredient) {
        var index = this.allIngredients.indexOf(ingredient);
        this.allIngredients.splice(index, 1);
    };
    Database.prototype.AddCake = function (cake) {
        this.allCakes.push(cake);
    };
    Database.prototype.HasCake = function (cakeName) {
        return this.allCakes.filter(function (cake) { return cake.Name == cakeName; }).length > 0;
    };
    Database.prototype.RemoveCake = function (cake) {
        var index = this.allCakes.indexOf(cake);
        this.allCakes.splice(index, 1);
    };
    return Database;
}());

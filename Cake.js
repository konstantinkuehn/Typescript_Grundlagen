/// <reference path="Ingredient.ts" />
var Cake = /** @class */ (function () {
    function Cake(name, ingredients) {
        this.Ingredients = ingredients;
        this.Name = name;
    }
    //Was soll ein Kuchen können?
    Cake.prototype.ListIngredients = function () {
        var listedIngredients = "";
        this.Ingredients.forEach(function (ingredient) { return listedIngredients += ingredient.Name + ", "; });
        listedIngredients = listedIngredients.slice(0, -2);
        return listedIngredients;
    };
    return Cake;
}());
function CreateCake(name, ingredients) {
    return new Cake(name, ingredients);
}

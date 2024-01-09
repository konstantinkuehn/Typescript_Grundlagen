var Ingredient = /** @class */ (function () {
    function Ingredient(name) {
        this.Name = name;
    }
    return Ingredient;
}());
function CreateIngredient(name) {
    return new Ingredient(name);
}

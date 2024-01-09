/// <reference path="Ingredient.ts" />

class Cake{
    Ingredients:Ingredient[];
    Name:string;
    constructor(name:string,ingredients:Ingredient[]) {
        this.Ingredients= ingredients;
        this.Name = name;
    }

    //Was soll ein Kuchen können?

    ListIngredients():string {
        let listedIngredients:string="";
        this.Ingredients.forEach(ingredient => listedIngredients+=ingredient.Name+", ");
        listedIngredients= listedIngredients.slice(0,-2);
        return  listedIngredients;
    }
}
function  CreateCake(name:string,ingredients:Ingredient[]):Cake{
    return new Cake(name,ingredients);
}
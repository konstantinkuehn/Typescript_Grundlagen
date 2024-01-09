/// <reference path="Cake.ts" />
/// <reference path="Ingredient.ts" />

class Database{


       allCakes :Cake[] = new Array();
       allIngredients : Ingredient[] = new Array();

constructor() {
}

    AddIngredient(ingredient:Ingredient){
    this.allIngredients.push(ingredient);
    }

    EditIngredient(oldIngredient:Ingredient,newIngredient:Ingredient){
          let index = this.allIngredients.indexOf(oldIngredient);
          this.allIngredients[index] = newIngredient;
    }
    GetIngredientByName(ingredientName:string):Ingredient{
    return  this.allIngredients.filter(ingredient=> ingredient.Name == ingredientName)[0];
    }
    HasIngredient(ingredientName:string):boolean{
    return  this.allIngredients.filter(ingredient => ingredient.Name == ingredientName).length>0;
    }

    RemoveIngredient(ingredient:Ingredient){
        let index = this.allIngredients.indexOf(ingredient);
        this.allIngredients.splice(index,1);
    }


    AddCake(cake:Cake){
        this.allCakes.push(cake);
    }
    HasCake(cakeName:string):boolean{
        return  this.allCakes.filter(cake => cake.Name == cakeName).length>0;
    }
s
    RemoveCake(cake:Cake){
        let index = this.allCakes.indexOf(cake);
        this.allCakes.splice(index,1);
    }

}
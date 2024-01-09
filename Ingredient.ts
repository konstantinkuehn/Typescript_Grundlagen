
 class Ingredient {
    Name:string;

    constructor(name:string) {
        this.Name = name;
    }
}
 function CreateIngredient(name:string):Ingredient{
     return new Ingredient(name);
 }



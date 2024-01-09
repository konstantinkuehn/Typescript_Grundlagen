/// <reference path="Cake.ts" />
/// <reference path="Ingredient.ts" />
/// <reference path="Database.ts" />
/// <reference path="ClassIntro.ts" />
// let const?
var flour = CreateIngredient("Flour");
var sugar = CreateIngredient("Sugar");
var milk = CreateIngredient("Milk");
var bakingPowder = CreateIngredient("Baking powder");
var lemonFlavour = CreateIngredient("Lemon flavour");
var cinnamon = CreateIngredient("Cinnamon");
var chocolate = CreateIngredient("Chocolate");
var fanta = CreateIngredient("Fanta");
database.AddIngredient(flour);
database.AddIngredient(sugar);
database.AddIngredient(milk);
database.AddIngredient(bakingPowder);
database.AddIngredient(lemonFlavour);
database.AddIngredient(cinnamon);
database.AddIngredient(chocolate);
database.AddIngredient(fanta);
DisplayIngredientTable();
var baseCake = createAndDisplay("Basiskuchen", [flour, sugar, milk, bakingPowder]);
var lemonCake = createAndDisplay("Zitronenkuchen", [flour, sugar, milk, bakingPowder, lemonFlavour]);
var cinnamonCake = createAndDisplay("Zimtkuchen", [flour, sugar, milk, bakingPowder, cinnamon]);
var chocolateCake = createAndDisplay("Schokoladenkuchen", [flour, sugar, milk, bakingPowder, chocolate]);
var fantaCake = createAndDisplay("Fantakuchen", [flour, sugar, milk, bakingPowder, fanta]);
database.AddCake(baseCake);
database.AddCake(lemonCake);
database.AddCake(cinnamonCake);
database.AddCake(chocolateCake);
database.AddCake(fantaCake);
DisplayCakeTable();

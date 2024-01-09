/// <reference path="Cake.ts" />
/// <reference path="Ingredient.ts" />
/// <reference path="Database.ts" />
/// <reference path="ClassIntro.ts" />

// let const?
const flour = CreateIngredient("Flour");
const sugar = CreateIngredient("Sugar");
const milk = CreateIngredient("Milk");
const bakingPowder = CreateIngredient("Baking powder");
const lemonFlavour = CreateIngredient("Lemon flavour");
const cinnamon = CreateIngredient("Cinnamon");
const chocolate = CreateIngredient("Chocolate");
const fanta = CreateIngredient("Fanta");
database.AddIngredient(flour);
database.AddIngredient(sugar);
database.AddIngredient(milk);
database.AddIngredient(bakingPowder);
database.AddIngredient(lemonFlavour);
database.AddIngredient(cinnamon);
database.AddIngredient(chocolate);
database.AddIngredient(fanta);
DisplayIngredientTable();


const baseCake = createAndDisplay("Basiskuchen",[flour,sugar,milk,bakingPowder]);
const lemonCake = createAndDisplay("Zitronenkuchen",[flour,sugar,milk,bakingPowder,lemonFlavour]);
const cinnamonCake = createAndDisplay("Zimtkuchen",[flour,sugar,milk,bakingPowder,cinnamon]);
const chocolateCake = createAndDisplay("Schokoladenkuchen",[flour,sugar,milk,bakingPowder,chocolate]);
const fantaCake = createAndDisplay("Fantakuchen",[flour,sugar,milk,bakingPowder,fanta]);
database.AddCake(baseCake);
database.AddCake(lemonCake);
database.AddCake(cinnamonCake);
database.AddCake(chocolateCake);
database.AddCake(fantaCake);

DisplayCakeTable();

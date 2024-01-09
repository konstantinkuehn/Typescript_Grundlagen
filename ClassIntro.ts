/// <reference path="Cake.ts" />
/// <reference path="Ingredient.ts" />
/// <reference path="Database.ts" />


let database: Database = new Database();

let tableCakes = document.querySelector("#listCakes") as HTMLFormElement;
tableCakes.hidden=true;

let ingredientAddForm = document.querySelector("#newIngredientForm") as HTMLFormElement;
let ingredientEditForm = document.querySelector("#editExistingIngredient") as HTMLFormElement;
let ingredientEditInputField = document.querySelector("#editIngredientName") as HTMLInputElement;


let ingredientEditCancleButton = document.querySelector("#cancleEditIngredient") as HTMLButtonElement;
ingredientEditCancleButton.addEventListener("click",(event)=>
{
SetEditIngredientFormMode(false);
});

SetEditIngredientFormMode(false);


function SetEditIngredientFormMode(value:boolean){
 ingredientAddForm.hidden= value;
 ingredientEditForm.hidden=!value;
}




ingredientAddForm.addEventListener("submit",(event)=>{
 event.preventDefault();
 let ingredientName = document.querySelector("#createIngredientName") as HTMLInputElement;
 if(!database.HasIngredient(ingredientName.value)){
  database.AddIngredient(CreateIngredient(ingredientName.value));
  DisplayIngredientTable();
  ingredientName.value =""
 }else
 alert("Eine Zutat mit dem Namen  " + ingredientName.value + " existiert bereits!")
});


ingredientEditForm.addEventListener("submit",(event)=>{
 event.preventDefault();
 let ingredientName = document.querySelector("#editIngredientName") as HTMLInputElement;
 if(!database.HasIngredient(ingredientName.value)){
  database.EditIngredient(database.GetIngredientByName(ingredientName.dataset.oldName),CreateIngredient(ingredientName.value));
  DisplayIngredientTable();
  SetEditIngredientFormMode(false);
 }else
  alert("Eine Zutat mit dem Namen  " + ingredientName.value + " existiert bereits!")
});




function DisplayIngredientTable(){
 let tableBody = document.querySelector("#listIngredientsBody") as HTMLElement;
 tableBody.innerHTML="";
 for (const ingredient of database.allIngredients){
  let row = document.createElement("tr");
  let columnName = document.createElement("td");
  let columnActions= document.createElement("td");
  let columnActionEdit= document.createElement("button");
  let columnActionDelete= document.createElement("button");
  tableBody.append(row);
  row.append(columnName);
  row.append(columnActions);
  columnActions.append(columnActionEdit);
  columnActions.append(columnActionDelete);
  columnName.innerHTML = ingredient.Name;
  columnActionEdit.innerHTML="Bearbeiten";
  columnActionDelete.innerHTML="Löschen";
  columnActionDelete.addEventListener("click",(event)=>{
   database.RemoveIngredient(ingredient);
   DisplayIngredientTable();
  });

  columnActionEdit.addEventListener("click",(event)=>{
   SetEditIngredientFormMode(true);
   ingredientEditInputField.value = ingredient.Name;
   ingredientEditInputField.dataset.oldName = ingredient.Name;
  });
 }
}























function createAndDisplay(nameOfCake:string,Ingredients:Ingredient[]):Cake{
 let createdCake = CreateCake(nameOfCake,Ingredients);
 let ingredientsCreatedCake:string = createdCake.ListIngredients();
 console.log("Zutaten für einen "+ nameOfCake +   ":")
 console.log(ingredientsCreatedCake);
 console.log("================================================")
 return  createdCake;
}




function DisplayCakeTable(){
 let tableBody = document.querySelector("#listCakeBody") as HTMLElement;
 tableBody.innerHTML="";
for (const cake of database.allCakes){
 let row = document.createElement("tr");
 let columnName = document.createElement("td");
 let columnIngredients= document.createElement("td");
 let columnActions= document.createElement("td");
 let columnActionEdit= document.createElement("button");
 let columnActionDelete= document.createElement("button");
tableBody.append(row);
row.append(columnName);
row.append(columnIngredients);
row.append(columnActions);
columnActions.append(columnActionEdit);
columnActions.append(columnActionDelete);
columnName.innerHTML = cake.Name;
columnIngredients.innerHTML = cake.ListIngredients();
columnActionEdit.innerHTML="Bearbeiten";
columnActionDelete.innerHTML="Löschen";
columnActionDelete.addEventListener("click",(event)=>{
 database.RemoveCake(cake);
 DisplayIngredientTable();
});
}
}
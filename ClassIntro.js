/// <reference path="Cake.ts" />
/// <reference path="Ingredient.ts" />
/// <reference path="Database.ts" />
var database = new Database();
var tableCakes = document.querySelector("#listCakes");
tableCakes.hidden = true;
var ingredientAddForm = document.querySelector("#newIngredientForm");
var ingredientEditForm = document.querySelector("#editExistingIngredient");
var ingredientEditInputField = document.querySelector("#editIngredientName");
var ingredientEditCancleButton = document.querySelector("#cancleEditIngredient");
ingredientEditCancleButton.addEventListener("click", function (event) {
    SetEditIngredientFormMode(false);
});
SetEditIngredientFormMode(false);
function SetEditIngredientFormMode(value) {
    ingredientAddForm.hidden = value;
    ingredientEditForm.hidden = !value;
}
ingredientAddForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var ingredientName = document.querySelector("#createIngredientName");
    if (!database.HasIngredient(ingredientName.value)) {
        database.AddIngredient(CreateIngredient(ingredientName.value));
        DisplayIngredientTable();
        ingredientName.value = "";
    }
    else
        alert("Eine Zutat mit dem Namen  " + ingredientName.value + " existiert bereits!");
});
ingredientEditForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var ingredientName = document.querySelector("#editIngredientName");
    if (!database.HasIngredient(ingredientName.value)) {
        database.EditIngredient(database.GetIngredientByName(ingredientName.dataset.oldName), CreateIngredient(ingredientName.value));
        DisplayIngredientTable();
        SetEditIngredientFormMode(false);
    }
    else
        alert("Eine Zutat mit dem Namen  " + ingredientName.value + " existiert bereits!");
});
function DisplayIngredientTable() {
    var tableBody = document.querySelector("#listIngredientsBody");
    tableBody.innerHTML = "";
    var _loop_1 = function (ingredient) {
        var row = document.createElement("tr");
        var columnName = document.createElement("td");
        var columnActions = document.createElement("td");
        var columnActionEdit = document.createElement("button");
        var columnActionDelete = document.createElement("button");
        tableBody.append(row);
        row.append(columnName);
        row.append(columnActions);
        columnActions.append(columnActionEdit);
        columnActions.append(columnActionDelete);
        columnName.innerHTML = ingredient.Name;
        columnActionEdit.innerHTML = "Bearbeiten";
        columnActionDelete.innerHTML = "Löschen";
        columnActionDelete.addEventListener("click", function (event) {
            database.RemoveIngredient(ingredient);
            DisplayIngredientTable();
        });
        columnActionEdit.addEventListener("click", function (event) {
            SetEditIngredientFormMode(true);
            ingredientEditInputField.value = ingredient.Name;
            ingredientEditInputField.dataset.oldName = ingredient.Name;
        });
    };
    for (var _i = 0, _a = database.allIngredients; _i < _a.length; _i++) {
        var ingredient = _a[_i];
        _loop_1(ingredient);
    }
}
function createAndDisplay(nameOfCake, Ingredients) {
    var createdCake = CreateCake(nameOfCake, Ingredients);
    var ingredientsCreatedCake = createdCake.ListIngredients();
    console.log("Zutaten für einen " + nameOfCake + ":");
    console.log(ingredientsCreatedCake);
    console.log("================================================");
    return createdCake;
}
function DisplayCakeTable() {
    var tableBody = document.querySelector("#listCakeBody");
    tableBody.innerHTML = "";
    var _loop_2 = function (cake) {
        var row = document.createElement("tr");
        var columnName = document.createElement("td");
        var columnIngredients = document.createElement("td");
        var columnActions = document.createElement("td");
        var columnActionEdit = document.createElement("button");
        var columnActionDelete = document.createElement("button");
        tableBody.append(row);
        row.append(columnName);
        row.append(columnIngredients);
        row.append(columnActions);
        columnActions.append(columnActionEdit);
        columnActions.append(columnActionDelete);
        columnName.innerHTML = cake.Name;
        columnIngredients.innerHTML = cake.ListIngredients();
        columnActionEdit.innerHTML = "Bearbeiten";
        columnActionDelete.innerHTML = "Löschen";
        columnActionDelete.addEventListener("click", function (event) {
            database.RemoveCake(cake);
            DisplayIngredientTable();
        });
    };
    for (var _i = 0, _a = database.allCakes; _i < _a.length; _i++) {
        var cake = _a[_i];
        _loop_2(cake);
    }
}

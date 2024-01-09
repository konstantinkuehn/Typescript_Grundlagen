console.log();

//console => Konsole
//. log => eintragen/protkollieren

NameDerFunktion("belibig",5);
NameDerFunktion("Inhalt",1);
NameDerFunktion("als",2);
NameDerFunktion("Zeichenkette",10);


function NameDerFunktion(belibgierInhaltAlsZeichenkette:string,zahl:number){
    console.log(belibgierInhaltAlsZeichenkette+" | " + zahl);


}

let result :number = BerchneSumme(2,5);

console.log("Result: "+ result);

function  BerchneSumme(zahlA:number,zahlB:number):number{
 return zahlA +zahlB;
}

// Ist etwas das eine Aufgabe erfüllen muss/soll
// Dabei benötigt sie Informationen und gibt welche zurück


// Identifier => function
// NAME der funktion
// Eingaben in die Funktion => Was möchte die Funktion haben/ Was braucht die Funktion um Ihre Aufgabe erfüllen zu können?
// Soll die Funktion etwas zurückgeben? wenn ja, was denn ? Oder anders gefragt, was soll es für eine Art von DatenType sein?
// Funktionsrumpf  das verhalten oder die aktion einer Funktion

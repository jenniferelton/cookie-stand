var pdxAirport = {
  minimumHourlyCustomers: 23,
  maximunHourlyCustomers: 65,
  avergageCookiePerCust: 6.3,
  randomCustomers: function () 
  {
return Math.floor(Math.random() * (this.maximunHourlyCustomers-this.minimumHourlyCustomers)) + this.minimumHourlyCustomers; 
    }
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var zebra1 = {
    name: 'Zeus',
    species: 'zebra',
    food: 'grass',
    askForFood: function () {
        alert( 'Give me some ' + this.food ); // this.food 'grass'
    },
    addToDom: function () {
        var zebraList = document.getElementById( 'zebra' );
        var newZebra = document.createElement( 'li' );
        newZebra.innerHTML = this.name;
        zebraList.appendChild( newZebra );
    }
};


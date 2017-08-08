var pdxAirport = {
    minimumHourlyCustomers: 23,
    maximumHourlyCustomers: 65,
    averageCookiePerCust: 6.3,
    randomCustomers: function () {
        return Math.floor(Math.random() * (this.maximumHourlyCustomers - this.minimumHourlyCustomers) + this.minimumHourlyCustomers);

    },
    totalcph: function () {
        var cookieCount = [];
        cookieCount.push(Math.floor(this.randomCustomers() * this.averageCookiePerCust));
    },
    addToDom: function () {

        var hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',
            '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
        var cookiesPurchased = document.getElementById('buyCookie');
        for (var i = 0; i < 15; i++) {
            var location = document.createElement('li');
            cookiesPurchased.appendChild(location)
            location.innerHTML = hour[i] + this.totalcph();

      // return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive    


      }    
  }
}




// var stores = ['pdxAirport', 'pioneerSquare', 'powells', 'stJohns', 'waterfront'];
// console.log ('locations')


// Calculate and store the simulated amounts of cookies purchased for each hour at each location using 
// average cookies purchased and the random number of customers generated

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }

// var zebra1 = {
//     name: 'Zeus',
//     species: 'zebra',
//     food: 'grass',
//     askForFood: function () {
//         alert( 'Give me some ' + this.food ); // this.food 'grass'
//     },
//     addToDom: function () {
//         var zebraList = document.getElementById( 'zebra' );
//         var newZebra = document.createElement( 'li' );
//         newZebra.innerHTML = this.name;
//         zebraList.appendChild( newZebra );
//     }
// };


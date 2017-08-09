var pdxAirport = {
    name: 'Pdx Airport',
    minimumHourlyCustomers: 23,
    maximumHourlyCustomers: 65,
    averageCookiePerCust: 6.3,
    getTotal: 0,
    randomCustomers: function () {
        return Math.floor(Math.random() * (this.maximumHourlyCustomers-this.minimumHourlyCustomers) +
            this.minimumHourlyCustomers);
    },
    totalcph: function () {
        var cookieCount = [];
        for (var i =0; i < 15; i++){
           cookieCount.push(Math.floor(this.randomCustomers() * this.averageCookiePerCust));
        }  
        this.cookieCount=cookieCount
    },
    sum: function () {
        for (var i = 0; i < 15; i++) {
            console.log ('this.getTotal', this.getTotal);
            console.log (this.cookieCount)
            this.getTotal = this.cookieCount[i] + this.getTotal
        };

        return this.getTotal
    },
       
     addToDom: function () {

        var hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ',
            '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
        this.totalcph()
        for (var i = 0; i < 15; i++) {
            var airport1 = document.getElementById('pdx');
            var location = document.createElement('li');
            location.innerHTML = hour[i] + this.cookieCount[i];
           
            airport1.appendChild(location);
        }
        var airport1 = document.getElementById('pdx');
        var aLi = document.createElement('li');
        aLi.innerHTML = ('Total : ' + this.sum());
        airport1.appendChild(aLi);
     }   

    }
    pdxAirport.addToDom();



// var pioneerSquare = {
//     minimumHourlyCustomers: 23,
//     maximumHourlyCustomers: 65,
//     averageCookiePerCust: 6.3,
//     randomCustomers: function () {
//         return Math.floor(Math.random() * (this.maximumHourlyCustomers - this.minimumHourlyCustomers) +
//             this.minimumHourlyCustomers);

//     },
//     totalcph: function () {
//         var cookieCount = [];
//         console.log
//         cookieCount.push(Math.floor(this.randomCustomers() * this.averageCookiePerCust));
//         return cookieCount
//     },
//     addToDom: function () {
//         var hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ',
//             '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '
//         ]
//         var cookiesPurchased = document.getElementById('pioneer');
//         for (var i = 0; i < 15; i++) {
//             if (i < 15)
//                 var location = document.createElement('li');
//             location.innerHTML = hour[i] + this.totalcph();
//             cookiesPurchased.appendChild(location);
//         }
//     }
// }
// pioneerSquare.addToDom();

// var powells = {
//     minimumHourlyCustomers: 23,
//     maximumHourlyCustomers: 65,
//     averageCookiePerCust: 6.3,
//     randomCustomers: function () {
//         return Math.floor(Math.random() * (this.maximumHourlyCustomers - this.minimumHourlyCustomers) +
//             this.minimumHourlyCustomers);
//     },
//     totalcph: function () {
//         var cookieCount = [];
//         console.log
//         cookieCount.push(Math.floor(this.randomCustomers() * this.averageCookiePerCust));
//         return cookieCount
//     },
//     addToDom: function () {
//         var hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ',
//             '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '
//         ]
//         var cookiesPurchased = document.getElementById('powells');
//         for (var i = 0; i < 15; i++) {
//             if (i < 15)
//                 var location = document.createElement('li');
//             location.innerHTML = hour[i] + this.totalcph();
//             cookiesPurchased.appendChild(location);
//         }
//     }
// }
// powells.addToDom();


// var stJohns = {
//     minimumHourlyCustomers: 23,
//     maximumHourlyCustomers: 65,
//     averageCookiePerCust: 6.3,
//     randomCustomers: function () {
//         return Math.floor(Math.random() * (this.maximumHourlyCustomers - this.minimumHourlyCustomers) +
//             this.minimumHourlyCustomers);

//     },
//     totalcph: function () {
//         var cookieCount = [];
//         console.log
//         cookieCount.push(Math.floor(this.randomCustomers() * this.averageCookiePerCust));
//         return cookieCount
//     },
//     addToDom: function () {
//         var hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ',
//             '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '
//         ]
//         var cookiesPurchased = document.getElementById('stJohns');
//         for (var i = 0; i < 15; i++) {
//             if (i < 15)
//                 var location = document.createElement('li');
//             location.innerHTML = hour[i] + this.totalcph();
//             cookiesPurchased.appendChild(location);
//         }
//     }
// }
// stJohns.addToDom();


// var waterfront = {
//     minimumHourlyCustomers: 23,
//     maximumHourlyCustomers: 65,
//     averageCookiePerCust: 6.3,
//     randomCustomers: function () {
//         return Math.floor(Math.random() * (this.maximumHourlyCustomers - this.minimumHourlyCustomers) +
//             this.minimumHourlyCustomers);

//     },
//     totalcph: function () {
//         var cookieCount = [];
//         console.log
//         cookieCount.push(Math.floor(this.randomCustomers() * this.averageCookiePerCust));
//         return cookieCount
//     },
//     addToDom: function () {
//         var hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ',
//             '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '
//         ]
//         var cookiesPurchased = document.getElementById('waterfront');
//         for (var i = 0; i < 15; i++) {
//             if (i < 15)
//                 var location = document.createElement('li');
//             location.innerHTML = hour[i] + this.totalcph();
//             cookiesPurchased.appendChild(location);
//         }
//     }
// }
// waterfront.addToDom();





 





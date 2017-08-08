var pdxAirport = {
        minimumHourlyCustomers: 23,
        maximumHourlyCustomers: 65,
        averageCookiePerCust: 6.3,
        //cookieCount: [],
        randomCustomers: function () {
            return Math.floor(Math.random() * (this.maximumHourlyCustomers - this.minimumHourlyCustomers) + this.minimumHourlyCustomers);

        },
        totalcph: function () {
            var cookieCount = [];
            console.log 
            cookieCount.push(Math.floor(this.randomCustomers() * this.averageCookiePerCust));
            return cookieCount
        },
        addToDom: function () 
                {
                var hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ',
                    '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '
                ]
                var cookiesPurchased = document.getElementById('buyCookie');
                for (var i = 0; i < 15; i++) {
                      if(i < 15) 
                    var location = document.createElement('li');
                    location.innerHTML = hour[i] + this.totalcph();
                    cookiesPurchased.appendChild(location);
                }
                }

}
 pdxAirport.addToDom ();





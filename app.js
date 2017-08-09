var pdxAirport = {
    name: 'Pdx Airport',
    minimumHourlyCustomers: 23,
    maximumHourlyCustomers: 65,
    averageCookiePerCust: 6.3,
    getTotal: 0,
    randomCustomers: function () {
        return Math.floor(Math.random() * (this.maximumHourlyCustomers - this.minimumHourlyCustomers) +
            this.minimumHourlyCustomers);
    },
    totalcph: function () {
        var cookieCount = [];
        for (var i = 0; i < 15; i++) {
            cookieCount.push(Math.floor(this.randomCustomers() * this.averageCookiePerCust));
        }
        this.cookieCount = cookieCount
    },
    sum: function () {
        for (var i = 0; i < 15; i++) {
            console.log('this.getTotal', this.getTotal);
            console.log(this.cookieCount)
            this.getTotal = this.cookieCount[i] + this.getTotal
        };

        return this.getTotal
    },

    addToDom: function () {

        var hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ',
            '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '
        ];

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



var pioneerSquare = {
        name: 'Pioneer Square',
        minimumHourlyCustomers: 23,
        maximumHourlyCustomers: 65,
        averageCookiePerCust: 6.3,
        getTotal: 0,
        randomCustomers: function () {
            return Math.floor(Math.random() * (this.maximumHourlyCustomers - this.minimumHourlyCustomers) +
                this.minimumHourlyCustomers);
        },
        totalcph: function () {
            var cookieCount = [];
            for (var i = 0; i < 15; i++) {
                cookieCount.push(Math.floor(this.randomCustomers() * this.averageCookiePerCust));
            }
            this.cookieCount = cookieCount
        },
        sum: function () {
            for (var i = 0; i < 15; i++) {
                console.log('this.getTotal', this.getTotal);
                console.log(this.cookieCount)
                this.getTotal = this.cookieCount[i] + this.getTotal
            };
            return this.getTotal
        },

        addToDom: function () {

            var hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ',
                '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '
            ];
                this.totalcph()
                for (var i = 0; i < 15; i++) {
                    var pioneer1 = document.getElementById('pioneer');
                    var location = document.createElement('li');
                    location.innerHTML = hour[i] + this.cookieCount[i];

                    pioneer1.appendChild(location);
                }
                var pioneerSquare = document.getElementById('pioneer');
                var aLi = document.createElement('li');
                aLi.innerHTML = ('Total : ' + this.sum());
                pioneerSquare.appendChild(aLi);
            }

        }
        pioneerSquare.addToDom();


        var powells = {
            name: 'Powell\s',
            minimumHourlyCustomers: 23,
            maximumHourlyCustomers: 65,
            averageCookiePerCust: 6.3,
            getTotal: 0,
            randomCustomers: function () {
                return Math.floor(Math.random() * (this.maximumHourlyCustomers - this.minimumHourlyCustomers) +
                    this.minimumHourlyCustomers);
            },
            totalcph: function () {
                var cookieCount = [];
                for (var i = 0; i < 15; i++) {
                    cookieCount.push(Math.floor(this.randomCustomers() * this.averageCookiePerCust));
                }
                this.cookieCount = cookieCount
            },
            sum: function () {
                for (var i = 0; i < 15; i++) {
                    console.log('this.getTotal', this.getTotal);
                    console.log(this.cookieCount)
                    this.getTotal = this.cookieCount[i] + this.getTotal
                };
                return this.getTotal
            },

            addToDom: function () {

                var hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ',
                    '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '
                ];

                this.totalcph()
                for (var i = 0; i < 15; i++) {
                    var powells1 = document.getElementById('powells');
                    var location = document.createElement('li');
                    location.innerHTML = hour[i] + this.cookieCount[i];

                    powells1.appendChild(location);
                }
                var powells = document.getElementById('powells');
                var aLi = document.createElement('li');
                aLi.innerHTML = ('Total : ' + this.sum());
                powells.appendChild(aLi);
            }

        }
        powells.addToDom();



        var stJohns = {
            name: 'St John\s',
            minimumHourlyCustomers: 23,
            maximumHourlyCustomers: 65,
            averageCookiePerCust: 6.3,
            getTotal: 0,
            randomCustomers: function () {
                return Math.floor(Math.random() * (this.maximumHourlyCustomers - this.minimumHourlyCustomers) +
                    this.minimumHourlyCustomers);
            },
            totalcph: function () {
                var cookieCount = [];
                for (var i = 0; i < 15; i++) {
                    cookieCount.push(Math.floor(this.randomCustomers() * this.averageCookiePerCust));
                }
                this.cookieCount = cookieCount
            },
            sum: function () {
                for (var i = 0; i < 15; i++) {
                    console.log('this.getTotal', this.getTotal);
                    console.log(this.cookieCount)
                    this.getTotal = this.cookieCount[i] + this.getTotal
                }
            },

            addToDom: function () {
                console.log('add to dom function');
                var hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ',
                    '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '
                ];
                this.totalcph();
                this.sum();
                var stjohn1 = document.getElementById('stJohns');
                for (var i = 0; i < 15; i++) {
                    var location = document.createElement('li');
                    location.innerHTML = hour[i] + this.cookieCount[i];

                    stjohn1.appendChild(location);
                }
                var aLi = document.createElement('li');
                aLi.innerHTML = ('Total : ' + this.getTotal);
                stjohn1.appendChild(aLi);
            }

        }
        stJohns.addToDom();



        var waterfront = {
            name: 'Waterfront',
            minimumHourlyCustomers: 23,
            maximumHourlyCustomers: 65,
            averageCookiePerCust: 6.3,
            getTotal: 0,
            randomCustomers: function () {
                return Math.floor(Math.random() * (this.maximumHourlyCustomers - this.minimumHourlyCustomers) +
                    this.minimumHourlyCustomers);

            },
            totalcph: function () {
                var cookieCount = [];
                for (var i = 0; i < 15; i++) {
                    cookieCount.push(Math.floor(this.randomCustomers() * this.averageCookiePerCust));
                }
                this.cookieCount = cookieCount
            },
            sum: function () {
                for (var i = 0; i < 15; i++) {
                    console.log('this.getTotal', this.getTotal);
                    console.log(this.cookieCount)
                    this.getTotal = this.cookieCount[i] + this.getTotal
                }

            },
            addToDom: function () {

                var hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ',
                    '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '
                ];


                this.totalcph();
                this.sum();
                var waterfront1 = document.getElementById('waterfront');
                for (var i = 0; i < 15; i++) {
                    var location = document.createElement('li');
                    location.innerHTML = hour[i] + this.cookieCount[i];

                    waterfront1.appendChild(location);
                }
                var aLi = document.createElement('li');
                aLi.innerHTML = ('Total : ' + this.getTotal);
                waterfront1.appendChild(aLi);
            }

        }
        waterfront.addToDom();
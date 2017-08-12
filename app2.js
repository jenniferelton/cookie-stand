var salesByHour = [];
var stores = [];
var sumOfCookie = 0;






function Shop(location, minCust, maxCust, avgCookieSale, listID) {
    this.listID = listID
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.cookiesSoldHour = [];
    this.avgCookieSale = avgCookieSale;
    this.total = 0;
    this.getRandomNumber();
    this.transfer();
    this.pushArr();
}
Shop.prototype.getRandomNumber = function () {
    for (var i = 0; i < 15; i++) {
        var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
        var totalCookies = Math.floor(this.avgCookieSale * number);
        this.cookiesSoldHour.push(totalCookies);
    }
    Shop.prototype.pushArr = function () {
        stores.push(this)
    }
};
Shop.prototype.totalNumber = function () {
    for (var i = 0; i < 15; i++) {
        this.total += this.cookiesSoldHour[i];
    }
    return this.total
};
Shop.prototype.transfer = function () {
    var mainVariable = document.getElementById('tbody');
    console.log(mainVariable);
    var tr1 = document.createElement('tr');
    tr1.innerHTML = this.location;
    mainVariable.appendChild(tr1);
    for (var i = 0; i < 16; i++) {



        var td1 = document.createElement('td');
        td1.innerText = this.cookiesSoldHour[i];
        tr1.appendChild(td1);
        if (i === 15) {
            td1.innerText = this.totalNumber();
        }
    }
    mainVariable.appendChild(tr1);
}

function totalTotal() {
    for (var i = 0; i < 15; i++) {
        var count = 0;
        for (var j = 0; j < stores.length; j++) {
            count += stores[j].cookiesSoldHour[i];
        }
        salesByHour.push(count);
    }
    var row = document.getElementById('tbody');
    var newRow = document.createElement('tr');
    newRow.setAttribute('id', 'Total');
    newRow.innerText = 'Total';
    row.appendChild(newRow);

    console.log(salesByHour)
    for (var i = 0; i < 15; i++) {
        var data = document.getElementById('Total');
        var dataType = document.createElement('td');
        dataType.innerText = salesByHour[i];
        data.appendChild(dataType);
    }
}

var pdxAirport = new Shop('PDX Airport', 23, 65, 6.3, 'pdxcookie');
var pioneerSquare = new Shop('Pioneer Square', 3, 24, 1.2, 'pioneercookie');
var powells = new Shop('Powell\'s', 11, 38, 3.7, 'powellcookie');
var stJohns = new Shop('St John\'s', 20, 38, 2.3, 'stjohncookie');
var waterfront = new Shop('Waterfront', 2, 16, 4.6, 'watercookie');


totalTotal();


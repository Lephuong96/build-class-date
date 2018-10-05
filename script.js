var MyDate = function(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }
    this.setDay = function (day) {
        this.day = day;
    }
    this.setMonth = function (month) {
        this.mouth = month;
    }
    this.setYear = function (year) {
        this.year = year;
    }
    this.setDate = function (day,month,year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    this.toString = function () {
        alert(this.day + "/" + this.month + "/" + this.year)
    }
}
var date = new MyDate(2,2,2007);
var day = date.getDay();
var month = date.getMonth();
var year = date.getYear();
alert(day + "/" + month + "/" + year);
date.setDay(10);
var day1 = date.getDay();
var month1 = date.getMonth();
var year1 = date.getYear();
alert(day1 + "/" + month1 + "/" + year1);
date.setDate(1,1,2017);
date.toString();
;

var doc = {};

var thisDate = new Date('2019-01-01');

/**
 * addDays
 * @param {*} date
 * @param {*} amount
 * @return {*}
 */
function addDays(date, amount) {
  var tzOff = date.getTimezoneOffset() * 60 * 1000;
  var t = date.getTime();
  var d = new Date();
  var tzOff2;

  t += (1000 * 60 * 60 * 24) * amount;
  d.setTime(t);

  tzOff2 = d.getTimezoneOffset() * 60 * 1000;
  if (tzOff != tzOff2) {
    var diff = tzOff2 - tzOff;
    t += diff;
    d.setTime(t);
  }

  return d;
}

var increment = 1;
var newDate = addDays(thisDate, increment);
console.log(newDate);

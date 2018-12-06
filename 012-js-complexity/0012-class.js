// class : addyosmani

// A car 'class'
/**
 * Car
 * clas
 * @param {*} model
 */
function Car( model ) {
  this.model = model;
  this.color = 'silver';
  this.year = '2012';
  this.getInfo = function() {
    return this.model + ' ' + this.year;
  };
}

var myCar = new Car('ford');
myCar.year = '2010';
console.log( myCar.getInfo() );

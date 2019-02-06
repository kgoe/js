// singleton : scotch.io deval patel

var printer = (function() {
  var printerInstance;

  /**
   * create
   * @return {*}
   */
  function create () {

    /**
     * print
     */
    function print() {
      // underlying printer mechanics
    }

    /**
     * turnOn
     */
    function turnOn() {
      // warm up
      // check for paper
    }

    return {
      // public + private states and behaviors
      print: print,
      turnOn: turnOn,
    };
  }

  return {
    getInstance: function() {
      if (!printerInstance) {
        printerInstance = create();
      }
      return printerInstance;
    }
  };

  /**
   * singleton
   */
  function Singleton () {
    if (!printerInstance) {
      printerInstance = intialize();
    }
  };
})();

var officePrinter = printer.getInstance();
officePrinter.toString();

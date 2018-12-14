;
/**
 * exec-script.js
 * this script aims to execute scripts contained in this project folder
 * using node.js executable
 */

const {exec} = require('child_process');


/**
 * executor
 * @param {string} command
 */
function executor( command ) {

  /**
   * execCallback
   * @param {*} err
   * @param {*} stdout
   * @param {*} stderr
   * @return {*}
   */
  function execCallback(err, stdout, stderr) {
    if (err) {
      // node couldn't execute the command
      console.log(`error: ${err}`);
      return false;
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`===stdout===`);
      console.log(`${stdout}`);
      console.log(`===stderr===`);
      console.log(`${stderr}`);
    }
    return true;
  }

  exec(command, execCallback);
}

var command = 'php -v';
executor(command);

var command = 'node -v';
executor(command);

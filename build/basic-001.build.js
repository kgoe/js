const fs = require('fs');


let source =
`
const print = console.log;


function fn_start(){
    print('fn_start');
}


if ( typeof module !== 'undefined' && module.parent == null ) {
    fn_start();
} else if ( typeof module !== 'undefined' && module.parent !== null ) {
    module.exports = {
        fn_start: n_start
    };
}
`;


// console.log(source);
fs.writeFileSync('./../dist/test.js', source);
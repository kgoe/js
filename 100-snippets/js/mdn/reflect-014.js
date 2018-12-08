Reflect.getOwnPropertyDescriptor({x: 'hello'}, 'x');
// {value: "hello", writable: true, enumerable: true, configurable: true}

Reflect.getOwnPropertyDescriptor({x: 'hello'}, 'y');
// undefined

Reflect.getOwnPropertyDescriptor([], 'length');
// {value: 0, writable: true, enumerable: false, configurable: false}
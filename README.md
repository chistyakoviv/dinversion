# dinversion

Lightweight dependency inversion container for javascript.

## Installation

You can get the latest release using npm:

```
$ npm install dinversion --save
```

## Usage
Simply create a container with definitions. Use closures for lazy creating instances of services:

```js
import Container from 'dinversion';

// create a container with definitions
const container = new Container({
    service: function(container) {
        return new Service(container.get('anotherService'));
    },
    anotherService: function(container) {
        return new AnotherService();
    },
    config: {
        env: 'dev'
    }
});

// register a new service
contrainer.set('yetAnotherService', function(container) {
    return new YetAnotherService();
});

container.has('service'); // true
container.get('anotherService'); // AnotherService
container.get('config')['env']; // 'dev'
```

## License

License under the MIT License (MIT)

Copyright © 2019 [Chistyakov Ilya]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 

IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
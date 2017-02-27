# json-file-loader

Easy JSON file loader. Returns a promis on success.

_Written in ES6, use an appropriate node version_

---

## Usage

1. Install the module ```npm install json-file-loader --save```
2. Require the module ```const jsonloader = require('json-file-loader')```
3. Run the readFile function and use the promise:
```
jsonloader.readFile('test.json')
.then((data) => {
  // JSON successfully loaded
  console.log(data);
})
.catch((error) => {
  // Something went wrong...
  console.log(error);
});
```

---

## License

Copyright 2017 Hidde Stokvis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

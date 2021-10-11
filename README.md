# For-loop running on multiple threads

![image](https://raw.githubusercontent.com/accept-apply/for-for-for/assets/image.png)

**for-for-for** is `40 lines` of syntactic sugar wrapper, to quickly use Node's libuv threads, in a simple for-loop flavor.

## Usage
```
npm install for-for-for
```

Because reasons™, to use the `await` variant, you need to encapsulate your code in async function.

```javascript
var fff = require(for-for-for);

var main = async function(){

    await fff(0, 100, 5, function(i, next){
        // ... some async action here.
        next();
    });

    console.log('done');

    // ... continue here...
};

main();

```

or, you could use the `done()` callback:

```javascript
var fff = require(for-for-for);

fff(0, 100, 5, function(i, next){
    // ... some async action here.
}, function(){
    console.log('done');
});
```

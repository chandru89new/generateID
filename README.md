## What's this? 

A simple library you can use in your apps to generate strings of random characters. 

Comes in handy for things like generating primary keys, or simple auth tokens.

## Demo?

[Right here][0].

## Using it

Call it like so:

```
generateID(options)
.then(function(result){
    console.log(result) // result is the generated ID
})
.catch(function(error){
    console.error(error); // in case the ID was not generated for some shitty reason
});
```

If you're into the `async/await` fad, you can do it like so:

```
var options; // options is an object that has "type" and "length" [explained further down this readme]
// options.type = "alphanumeric";
// options.length = "32";
var someFunc = async function(opts){
    var result = await generateID(opts);
}
someFunc(options);
// console.log(result);
```

## Options?

By default, the generateID function will produce a string that's:
- alphanumeric
- 64 chars long

You can change both those things by passing an object like so:

```
var options = {
    type: 'loweralpha',
    length: 24
};
// now call generateID(options)
```

^ That will produce a string that has only lowercase alphabets (loweralpha) and 24 characters long.

### Options.type

Can be any of these:
- loweralpha
- alpha
- numeric
- loweralphanumeric
- alphanumeric

If you don't give a type or give something else other than these, the default [alphanumeric] will be used.

### Options.length

Should be between 4 and 64. (both included)

If not given or given something outside the range (or invalid stuff), the default [64] will be used.

## Licence

Seriously? For this thing?

[0]: http://druchan.com/gen_id/

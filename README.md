## What's this?

A random string generator. (Yes, there are lots of them, but this was built as a learning exercise).

## Demo

[Right here][0]

## How to use it?

Just like so:

```
var id = ID.generate();
```

Works right out of the box. 

## Where can I use it?

Most likely when you want to create unique IDs for something like users, or links etc.

## How can I make sure the ID is unique?

So you can pass a list of IDs as an array to the library. Like so:

```
ID.list = ['...','...','...'];
ID.generate();
```

Or

```
var arr = [...]; // this is some array that you build. Like an array of all existing userIDs in your table
ID.list = arr;
ID.generate();
```

ID will automatically check if the generated ID is already in the list of IDs you fed into ID.list. If yes, it will re-generate another ID till it creates an ID that's unique.

## Options

When you use `ID.generate()` just like that, you get a 64-character long alphanumeric (with upper- and lower-case letters).

You can configure the length and the type of a string you want.

#### Type:

```
ID.type = 'loweralpha';
```

| Type | Explanation | Example (length = 16) |
| ---- | ----------- | --------------------- |
| alphanumeric | lower and upper case alphabets + numbers (0-9) | GejPA8BmYh55GuYU |
| loweralphanumeric | lowercase alphabets + numbers | djnzzm1eh7p1n82e |
| alpha | lower and upper case alphabets only | KmIQCOvZzLVHiIZw |
| numeric | numbers only | 8759684248582452 |
| loweralpha | lower case alphabets only | civjbazwxbwbaqgw |

#### Length:

Default is 64. You can give a number between 4 and 64 (both included). Anything off this will result in fallback to the default (64).

```
ID.length = 24;
```

## Licence

No warranties whatsoever. Other than that, do whatever you want; no credits required.

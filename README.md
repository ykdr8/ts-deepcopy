# ts-deepcopy

https://travis-ci.org/ykdr2017/ts-deepcopy.svg?branch=master

## ABOUT ts-deepcoy

This is a deepcopy function for TypeScript. When an object is copied with this and its child(or grandchild, etc.) value is assigned another value, original's child value does not suffer any effects.
The function includes a generic type of TypeScript, therefore the copied object can expressly have a type same as the original's.

## INSTALL

```
$ npm install ts-deepcopy
```

## USAGE

```
import deepcopy from "ts-deepcopy";

interface I1 {
    a: string,
    b: {
        ba: string,
        bb: string
    }
}

let master:I1 = {
    a: "a",
    b: {
        ba: "ba",
        bb: "bb"
    }
};
let copied:I1 = deepcopy<I1>(master);

copied.b.ba = "baba";

console.log(master.b.ba);   // => "ba"
console.log(copied.b.ba);   // => "baba"
```

## DEVELOP

```
$ npm install
$ npm run build:main
```

## TEST

```
$ npm run test
```

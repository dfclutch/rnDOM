# rnDOM

A microlibrary for generating random data.

## Use
#### Install
`
    npm install rnDOM
`

#### Import
```javascript
    let rnDOM = require("rnDOM"); //old
    
    import rnDOM from "rnDOM"; //ES6
```

#### Generate values
```javascript
    // create a random value between 10 and 20
    let myRandomNumber = rnDOM.between(10, 20);
```

## Available Functions

The functions available are as follows, detailed descriptions are provided below.
- `between`
- `intBetween`
- `oneOf`
- `nOf`
- `color`
- `coinflip`
- `weightedCoinflip`

### Float Interval
Use:

```javascript
let min = 10;
let max = 20;
rnDOM.between(min, max);
```

Description: Generates a random float between min and max

Params:
- `min`: the lower-bound for the return value (inclusive)    
- `max`: the upper-bound for the return value (non-inclusive)

Returns: A Floating-point value in the range [min, max)

### Integer Interval
Use:

```javascript
let min = 10;
let max = 20;
rnDOM.intBetween(min, max);
```


Description: 
    Generates a random integer between min and max

Params:
- `min`: the lower-bound for the return value (inclusive)
- `max`: the upper-bound for the return value (non-inclusive)

Returns:
    An integer value in the range [min, max)
    
### oneOf
Use:

```javascript
let a = [1,2,3];
rnDOM.oneOf(a);
```

Description:
    Selects a random element of an array

Params:
- `a`: the array to select from

Aliases:
    Adds an alias to the returned element

Returns:
    A random element that is part of a

### nOf
Use:

```javascript
let a = [1,2,3];
let n = 2;
rnDOM.nOf(n, a);
```

Description:
    Generates a random n-length sub-array of the provided array

Params:
- `n`: length of the output sub-array, requires n <= a.length
- `a`: the array to choose elements from

Aliases:
    Adds an alias to each returned element in the output array

Returns:
    An array of length n where each element is in the input array a

### Color String
Use:

`rnDOM.color();`

Description:
    Generates a random web color

Params:
- `[scheme]`: optional parameter, must be "hex", "rgb", or "named"

Returns:
    A string representing a web color corresponding to the scheme
    (e.g. hex: "#ffffff" rgb: "rbg(255,255,255)" named: "AntiqueWhite").
    If no scheme is provided, the default is hex.

### Coin Flip
Use:

`rnDOM.coinflip();`

Description:
    Performs a fair coinflip

Returns:
    A boolean corresponding to success or failure

### Weighted Coin Flip
Use:

```javascript
let p = 0.75;
rnDOM.weightedCoinflip(p);
```

Description:
    Performs a weighted coinflip

Params:
- `p`: the probability the coinflip will be successful. Must be in the range [0,1]

Returns:
    A boolean corresponding to success or failure
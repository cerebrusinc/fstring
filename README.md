# fstring

This package brings some Python string formatting to Javascript! Currently you can:

- Abbreviate a string
- Make a string sentence case
- Make a string title case

As of now, it realises `.`, `;`, `!`, and `?` as **sentence** delimiters.

# Importing

```javascript
// ES6 Module
import * as fstring from "@techtronics/fstring";

// ES6 Destructing
import { abbreviate, toTitleCase, toSentenceCase } from "@techtronics/fstring";

// ES5 Module
const fstring = require("@techtronics/fstring");

// ES5 Destructing
const {
	abbreviate,
	toTitleCase,
	toSentenceCase,
} = require("@techtronics/fstring");
```

# Usage

```javascript
const sentence = "heLLo wOrLD, mY NAME is lEwis; i am a Developer.";
const name = "lEwiS mOsho junior";

console.log(toSentenceCase(sentence));
// Hello world, my name is lewis; I am a developer.

console.log(toTitleCase(name));
// Lewis Mosho Junior

console.log(abbreviate(name));
// LMJ
```

<p align="center">
    <img src="https://drive.google.com/uc?id=1DZEqZQlyfzhFxHS3LI82k_saQkOBerf8" alt="py-qol logo" width="250" height="250" />
</p>

# fstring

This package brings some Python string formatting to Javascript! Currently you can:

- Abbreviate a string
- Make a string sentence case
- Make a string title case

# Installation

    npm install @techtronics/fstring

or

    yarn add @techtronics/fstring

It goes hand in hand with our quality of life package [qol](https://github.com/lewisjr/qol)

# Importing

```javascript
// ES6 Module
import * as fstring from "@techtronics/fstring";

// ES6 Destructuring
import { abbreviate, toTitleCase, toSentenceCase } from "@techtronics/fstring";

// ES5 Module
const fstring = require("@techtronics/fstring");

// ES5 Destructuring
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

# Functions

## abbreviate

Make an **abbreviation** of a string; Usually used for names. It returns a capital case abbreviation of the string.

<details>
<summary><strong>Params</strong></summary>

| Parameter | Default Setting | Required? | Definition                                                  |
| --------- | --------------- | --------- | ----------------------------------------------------------- |
| txt       | `null`          | Yes       | The string you wish to abbreviate                           |
| delimiter | `" "`           | No        | The character or string that seperates words in the string  |
| reverse   | `false`         | No        | An option to enable you to request a reversed return string |

</details>

## toTitleCase

Make any string **title cased**. it returns a string in which every first letter of a word is upper cased with the rest being lower cased.

<details>
<summary><strong>Params</strong></summary>

| Parameter | Default Setting | Required? | Definition                                                 |
| --------- | --------------- | --------- | ---------------------------------------------------------- |
| txt       | `null`          | Yes       | The string you wish to change to title case                |
| delimiter | `" "`           | No        | The character or string that seperates words in the string |

</details>

## toSentenceCase

Make any string **sentence cased**; The current sentence delimiters are:

- `.`
- `;`
- `:`
- `!`
- `?`

It returns a string in which every first letter of the first word of a sentence is capitalised, with the reaminder of the senter being lower cased.

<details>
<summary><strong>Params</strong></summary>

| Parameter | Default Setting | Required? | Definition                                                 |
| --------- | --------------- | --------- | ---------------------------------------------------------- |
| txt       | `null`          | Yes       | The string you wish to change to sentence case             |
| delimiter | `" "`           | No        | The character or string that seperates words in the string |

</details>

# Changelog

## v0.1.x

<details open>
<summary><strong>v0.1.5</strong></summary>

- Moved from [@techtronics/fstring](https://www.npmjs.com/package/@techtronics/fstring)

</details>

<details>
<summary><strong>v0.1.4</strong></summary>

- Added colon support to `toSentenceCase`
- Full parity with our python quality of life [qolpy](https://github.com/lewisjr/qolpy) package

</details>

<details>
<summary><strong>v0.1.3</strong></summary>

- Fixed missing build and type annotations

</details>

<details>
<summary><strong>v0.1.2</strong></summary>

- Added the option to have the abbreviation reverse or not before return

</details>

<details>
<summary><strong>v0.1.1</strong></summary>

- Type hint updates
- README restructuring
- toSentenceCase now supports custom delimiters 😎

</details>

<details>
<summary><strong>v0.1.0</strong></summary>

- Initial release
- Sentence casing, title casing, and abrreviations added and typed

</details>

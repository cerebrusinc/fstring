/**
 * Make an abbreviation from a string.
 * @param txt is any string, it will be split with a space  ```" "``` if no delimiter is provided.
 * @param delimiter is the char/string that differentiates one word from another.
 * @returns a string of upper case initials
 */
export const abbreviate = (txt: string, delimiter?: string): string => {
	let delim = " ";

	if (delimiter) {
		delim = delimiter;
	}

	const txtArr = txt.split(delim);
	let initials: string = "";

	txtArr
		.reverse()
		.map(name => (initials += name.substring(0, 1).toUpperCase()));

	return initials;
};

/**
 * Make a string title case
 * @param txt the string to title
 * @param delimiter is the char/string that differentiates one word from another.
 * @returns a title cased string
 */
export const toTitleCase = (txt: string, delimiter?: string): string => {
	let delim = " ";

	if (delimiter) {
		delim = delimiter;
	}

	const text = txt.toLowerCase();
	const txtArr = text.split(delim);

	for (let i = 0; i < txtArr.length; i++) {
		txtArr[i] = txtArr[i].charAt(0).toUpperCase() + txtArr[i].slice(1);
	}

	return txtArr.join(" ");
};

/**
 * Make a string sentence case
 * @param txt the text to title
 * @returns a title cased string
 */
export const toSentenceCase = (txt: string): string => {
	const text = txt.toLowerCase();
	const txtArr = text.split(" ");

	const whitelist = [".", "!", "?", ";"];

	for (let i = 0; i < txtArr.length; i++) {
		const prevStr = i === 0 ? "" : txtArr[i - 1];
		const prevChar = prevStr.charAt(prevStr.length - 1);

		if (i === 0) {
			txtArr[i] = txtArr[i].charAt(0).toUpperCase() + txtArr[i].slice(1);
		} else if (whitelist.includes(prevChar)) {
			txtArr[i] = txtArr[i].charAt(0).toUpperCase() + txtArr[i].slice(1);
		} else if (txtArr[i] === "i") {
			txtArr[i] = "I";
		}
	}

	return txtArr.join(" ");
};

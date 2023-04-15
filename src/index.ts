/**
 * Make an abbreviation from a string.
 *
 * @param txt the string you wish to abbreviate
 * @param delimiter is the char/string that differentiates one word from another
 * @param reverse a boolean option to reverse the return string
 * @returns an uppercased abbreviation of the string
 */
export const abbreviate = (
	txt: string,
	delimiter?: string,
	reverse?: boolean
): string => {
	const delim = delimiter ? delimiter : " ";

	const txtArr = txt.split(delim);
	let initials: string = "";

	switch (reverse) {
		case true:
			txtArr
				.reverse()
				.map(name => (initials += name.substring(0, 1).toUpperCase()));
			break;
		default:
			txtArr.map(name => (initials += name.substring(0, 1).toUpperCase()));
	}

	return initials;
};

/**
 * Make a string title case.
 *
 * @param txt the string to title case
 * @param delimiter is the char/string that differentiates one word from another
 * @returns a title cased string
 */
export const toTitleCase = (txt: string, delimiter?: string): string => {
	const delim = delimiter ? delimiter : " ";

	const text = txt.toLowerCase();
	const txtArr = text.split(delim);

	for (let i = 0; i < txtArr.length; i++) {
		txtArr[i] = txtArr[i].charAt(0).toUpperCase() + txtArr[i].slice(1);
	}

	return txtArr.join(" ");
};

/**
 * Make a string sentence case.
 *
 * @param txt the text to title
 * @param delimiter  is the char/string that differentiates one word from another
 * @returns a sentence cased string
 */
export const toSentenceCase = (txt: string, delimiter?: string): string => {
	const delim = delimiter ? delimiter : " ";
	const text = txt.toLowerCase();
	const txtArr = text.split(delim);

	const whitelist = [".", "!", "?", ";", ":"];

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

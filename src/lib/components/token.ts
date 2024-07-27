export type CharacterWeight = {
	lowercase: number;
	numbers: number;
	special: number;
	uppercase: number;

};
export type CustomSpecialChars = string;
export type ListType = 'blacklist' | 'whitelist';
export type GeneratePWOptions = {
	customSpecialChars?: CustomSpecialChars;
	listType?: ListType;
	weight?: CharacterWeight;
};

// 26 uppercase characters
export const CHARACTERS_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// 26 lowercase characters
export const CHARACTERS_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';

// 10 Numbers
export const CHARACTERS_NUMBERS = '0123456789';

// 30 special characters
export const CHARACTERS_SPECIAL = '*+,-_.()/@!?#$%&"\':;[]^`{}~<=>';

const DEFAULT_WEIGHT: CharacterWeight = {
	lowercase: 2,
	numbers: 4,
	special: 1,
	uppercase: 2,
};

function generateCharacterString(customSpecialChars: CustomSpecialChars = '',
	customSpecialCharsType: ListType = 'whitelist',
	weight = DEFAULT_WEIGHT): string {
	let allowedSpecialChars = CHARACTERS_SPECIAL;

	// skip if customSpecialChars is empty
	if (customSpecialChars !== '') {
		/**
		 * Currently the implementation of the whitelist is by converting it to a blacklist and then
		 * overwriting the potentional given blacklist. This means you can't have a blacklist and a
		 * whitelist at the same time, what in my opinion doesn't make sense anyway.
		 */
		const allowedSpecialCharsArray = [...CHARACTERS_SPECIAL].filter((char) => {
			if (customSpecialCharsType === 'whitelist') { return customSpecialChars.includes(char); }

			return !customSpecialChars.includes(char);
		});

		allowedSpecialChars = allowedSpecialCharsArray.join('');
	}
	const uppercaseWeightedString = CHARACTERS_UPPERCASE.repeat(weight.uppercase);
	const lowercaseWeightedString = CHARACTERS_LOWERCASE.repeat(weight.lowercase);
	const numbersWeightedString = CHARACTERS_NUMBERS.repeat(weight.numbers);
	const allowedSpecialCharsLength =
		allowedSpecialChars.length === 0 ? 1 : allowedSpecialChars.length;
	const allowedSpecialCharsRepeat =
		weight.special * (CHARACTERS_SPECIAL.length / allowedSpecialCharsLength);
	const specialWeightedString = allowedSpecialChars.repeat(allowedSpecialCharsRepeat);
	const weightedCharsString =
		uppercaseWeightedString +
		lowercaseWeightedString +
		numbersWeightedString +
		specialWeightedString;

	return weightedCharsString;
}

// generates a crypto suitable number between 0-and 1
function cryptoRand(): number {
	const randomBuffer = new Uint32Array(1);

	crypto.getRandomValues(randomBuffer);
	const max32BitNumber = 0xff_ff_ff_ff;

	return randomBuffer[0] / (max32BitNumber + 1);
}

// generates a random number between max and min
function getRandomINT(max: number, min = 0): number {
	return Math.floor(cryptoRand() * (max - min + 1)) + min;
}

const DEFAULT_OPTIONS: GeneratePWOptions = {
	customSpecialChars: '',
	listType: 'whitelist',
	weight: DEFAULT_WEIGHT,
};

/**
 * generate a new password based on given options
 * @param length password length to be generated
 * @param options password generate options
 * @returns {string} the generated password string
 */
export function generatePassword(length: number, options = DEFAULT_OPTIONS) {
	const { customSpecialChars, listType, weight } = options;
	const characterString = generateCharacterString(customSpecialChars,
		listType,
		weight);
	const fixLengthEmptyArray = Array.from({ length });
	const passwordArray = fixLengthEmptyArray.map(() => {
		const randINT = getRandomINT(characterString.length - 1);

		return characterString.charAt(randINT);
	});

	const password = passwordArray.join('');

	return password;
}

/**
 * generate html from the password string to highlight with css
 * @param password the password string
 * @returns html representation of the syntaxed password
 */
export function syntaxHighlight(password: string): string {
	const passwordArray = [...password];
	const highlightedPasswordArray = passwordArray.map((char) => {
		if (CHARACTERS_NUMBERS.includes(char)) {
			return `<span class='number'>${char}</span>`;
		}

		if (CHARACTERS_SPECIAL.includes(char)) {
			return `<span class='special'>${char}</span>`;
		}

		if (CHARACTERS_UPPERCASE.includes(char)) {
			return `<span class='uppercase'>${char}</span>`;
		}

		if (CHARACTERS_LOWERCASE.includes(char)) {
			return `<span class='lowercase'>${char}</span>`;
		}

		return char;
	});

	return highlightedPasswordArray.join('');
}


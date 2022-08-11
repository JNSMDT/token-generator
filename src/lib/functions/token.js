/**
 * CONSTANTS
 */
const CHARACTERS_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 26
const CHARACTERS_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'; // 26
const CHARACTERS_NUMBERS = '0123456789'; // 10
const CHARACTERS_SPECIAL = '*+,-_.()/@!?#$%&"\':;[]^`{}~<=>'; // 30
const DEFAULT_WEIGHT = {
	uppercase: 2, // 52
	lowercase: 2, // 52
	numbers: 4, // 50
	special: 1 // 30
};

/** @typedef {import("types/internal").CustomSpecialChars} CustomSpecialChars */
/** @typedef {import("types/internal").CustomSpecialCharsType} CustomSpecialCharsType */
/** @typedef {import("types/internal").CharacterWeight} CharacterWeight */
/** @typedef {import("types/internal").GeneratePWOptions} GeneratePWOptions */

/**
 * FUNCTIONS
 */
/**
 *
 * @param {string} token the generated token as string
 */
export function saveToSessionStorage(token) {
	const timestamp = Date.now();
	const key = `token-${timestamp}`;

	sessionStorage.setItem(key, token);
	setTimeout(() => {
		sessionStorage.removeItem(key);
	}, 1000 * 60 * 60);
}

/**
 * @param {CustomSpecialChars} customSpecialChars A string that contains custom characters that should be either whitelisted or blacklisted
 * @param {CustomSpecialCharsType} customSpecialCharsType  A string that determines if the custom characters either should be a blacklist or whitelist. Defaults to whitelist.
 * @param {CharacterWeight} weight A object that determines how frequent a specific type of characters appear
 * @returns {string}
 */
function generateCharacterString(customSpecialChars = '', customSpecialCharsType = 'whitelist', weight = DEFAULT_WEIGHT) {
	let allowedSpecialChars = CHARACTERS_SPECIAL;

	// skip if customSpecialChars is empty
	if (customSpecialChars !== '') {
		/**
		 * Currently the implementation of the whitelist is by converting it to a blacklist and then
		 * overwriting the potentional given blacklist. This means you can't have a blacklist and a
		 * whitelist at the same time, what in my opinion doesn't make sense anyway.
		 */
		const allowedSpecialCharsArray = [...CHARACTERS_SPECIAL].filter((char) => {
			if (customSpecialCharsType === 'whitelist') return customSpecialChars.includes(char);
			return !customSpecialChars.includes(char);
		});

		allowedSpecialChars = allowedSpecialCharsArray.join('');
	}
	const uppercaseWeightedString = CHARACTERS_UPPERCASE.repeat(weight.uppercase);
	const lowercaseWeightedString = CHARACTERS_LOWERCASE.repeat(weight.lowercase);
	const numbersWeightedString = CHARACTERS_NUMBERS.repeat(weight.numbers);
	const allowedSpecialCharsLength = allowedSpecialChars.length === 0 ? 1 : allowedSpecialChars.length;
	const allowedSpecialCharsRepeat = weight.special * (CHARACTERS_SPECIAL.length / allowedSpecialCharsLength);
	const specialWeightedString = allowedSpecialChars.repeat(allowedSpecialCharsRepeat);
	const weightedCharsString = uppercaseWeightedString
		+ lowercaseWeightedString
		+ numbersWeightedString
		+ specialWeightedString;

	return weightedCharsString;
}

/**
 * generates a csprng number?
 * @returns {number}
 */
function cryptoRand() {
	const randomBuffer = new Uint32Array(1);

	crypto.getRandomValues(randomBuffer);
	const max32BitNumber = 0xFF_FF_FF_FF;

	return randomBuffer[0] / (max32BitNumber + 1);
}

/**
 * Returns a random number from 1 to max
 * @param {number} max end of random range (exclusive)
 * @param {number} min start of random range (inclusive)
 * @returns {number}
 */
function getRandomINT(max, min = 0) {
	return Math.floor(cryptoRand() * (max - min + 1)) + min;
}
/** @type {GeneratePWOptions} */
const DEFAULT_OPTIONS = {
	customSpecialChars: '',
	customSpecialCharsType: 'whitelist',
	weight: DEFAULT_WEIGHT
};

/**
 * generate a new password based on given options
 * @param {number} length password length to be generated
 * @param {GeneratePWOptions} options password generate options
 * @returns {string} the generated password string
 */
export function generatePassword(length, options = DEFAULT_OPTIONS) {
	const { customSpecialChars, customSpecialCharsType, weight } = options;
	const characterString = generateCharacterString(
		customSpecialChars,
		customSpecialCharsType,
		weight
	);
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
 * @param {string} password the password string
 * @returns {string} html representation of the syntaxed password
 */
export function syntaxHighlight(password) {
	const passwordArray = [...password];
	const highlightedPasswordArray = passwordArray.map((char) => {
		if (CHARACTERS_NUMBERS.includes(char)) { return `<span class='number'>${char}</span>`; }

		if (CHARACTERS_SPECIAL.includes(char)) { return `<span class='special'>${char}</span>`; }

		if (CHARACTERS_UPPERCASE.includes(char)) { return `<span class='uppercase'>${char}</span>`; }

		if (CHARACTERS_LOWERCASE.includes(char)) { return `<span class='lowercase'>${char}</span>`; }

		return char;
	});

	return highlightedPasswordArray.join('');
}

/**
 * generate a base64 token based on the generated password
 * @param {number} length the max length of the token
 * @returns {string} b64 token string
 */
export function generateToken(length) {
	const token = generatePassword(length, {
		customSpecialChars: CHARACTERS_SPECIAL,
		customSpecialCharsType: 'blacklist'
	});

	return token;
}

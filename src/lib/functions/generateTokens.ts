import { base64 } from 'rfc4648';
/**
 * CONSTANTS
 */
const CHARACTERS_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //26
const CHARACTERS_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'; //26
const CHARACTERS_NUMBERS = '0123456789'; // 10
const CHARACTERS_SPECIAL = '*+,-_.()/@!?#$%&"\':;[]^`{}~<=>'; // 30

const DEFAULT_WEIGHT = {
	uppercase: 2,
	lowercase: 2,
	numbers: 3,
	special: 1
};

/**
 * INTERFACES
 */

export type CharacterWeight = {
	uppercase: number;
	lowercase: number;
	numbers: number;
	special: number;
};

export type GeneratePWOpts = {
	blacklistedChars?: string;
	whitelistedChars?: string;
	weight?: CharacterWeight;
};

/**
 * FUNCTIONS
 */

export function saveToSessionStorage(token: string): void {
	const timestamp = new Date().getTime();
	const key = `token-${timestamp}`;
	sessionStorage.setItem(key, token);
	setTimeout(() => {
		sessionStorage.removeItem(key);
	}, 10000 * 60 * 60);
}

/**
 *
 * @param blacklistedChars A String that contains characters that are not allowed
 * @param whitelistedChars A String that contaings characters that are only allowed (currently only for special Characters)
 * @param weight A object that determines how frequent a specific type of characters appear
 * @returns
 */
function generateCharacterString(
	blacklistedChars = '',
	whitelistedChars = '',
	weight = DEFAULT_WEIGHT
): string {
	/**
	 * Currently the implementation of the whitelist is by converting it to a blacklist and then
	 * overwriting the potentional given blacklist. This means you can't have a blacklist and a
	 * whitelist at the same time, what in my opinion doesn't make sense anyway.
	 */

	console.log({
		blacklistedChars,
		whitelistedChars
	});
	const blacklistCharsArr = Array.from(CHARACTERS_SPECIAL).filter(char => {
		if (whitelistedChars !== '') return whitelistedChars.includes(char);
		return !blacklistedChars.includes(char);
	});
	const customSpecialChars = blacklistCharsArr.join('');

	const uppercaseWeightedString = CHARACTERS_UPPERCASE.repeat(weight.uppercase);
	const lowercaseWeightedString = CHARACTERS_LOWERCASE.repeat(weight.lowercase);
	const numbersWeightedString = CHARACTERS_NUMBERS.repeat(weight.numbers);

	const specialCharsRepeat =
		weight.special * (CHARACTERS_SPECIAL.length / customSpecialChars.length);

	const specialWeightedString = customSpecialChars.repeat(specialCharsRepeat);

	const weightedCharsString =
		uppercaseWeightedString +
		lowercaseWeightedString +
		numbersWeightedString +
		specialWeightedString;

	return weightedCharsString;
}

function cryptoRand(): number {
	const randomBuffer = new Uint32Array(1);
	crypto.getRandomValues(randomBuffer);
	return randomBuffer[0] / (0xffffffff + 1);
}

function getRandomINT(max: number): number {
	return Math.ceil(cryptoRand() * max);
}

export function generatePassword(length: number, options?: GeneratePWOpts): string {
	const { blacklistedChars, whitelistedChars, weight } = options;

	const characterString = generateCharacterString(blacklistedChars, whitelistedChars, weight);

	const fixLengthEmptyArray = new Array(length).fill(null);
	const passwordArray = fixLengthEmptyArray.map(() => {
		const randINT = getRandomINT(characterString.length);
		return characterString.charAt(randINT);
	});
	const password = passwordArray.join('');
	return password;
}

export function syntaxHighlight(password: string): string {
	const passwordArray = password.split('');
	const highlightedPasswordArray = passwordArray.map(char => {
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

export function convertToBase64(pw: string): string {
	const passwordUInt8Array = new TextEncoder().encode(pw);
	const b64String = base64.stringify(passwordUInt8Array, { pad: false });
	return b64String;
}

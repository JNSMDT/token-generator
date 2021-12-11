/**
 * CONSTANTS
 */
const CHARACTORS_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //26
const CHARACTORS_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'; //26
const CHARACTORS_NUMBERS = '0123456789'; // 10
const CHARACTORS_SPECIAL = '*+,-_.()/@!?#$%&"\':;[]^`{}~<=>'; // 30

const DEFAULT_WEIGHT = {
	uppercase: 2,
	lowercase: 2,
	numbers: 3,
	special: 1
};

const DEFAULT_GEN_OPTIONS = {
	blacklist: '',
	whitelist: '',
	weight: DEFAULT_WEIGHT
};

/**
 * INTERFACES
 */

export interface CharacterWeight {
	uppercase: number;
	lowercase: number;
	numbers: number;
	special: number;
}

export interface genPWOpts {
	blacklist?: string;
	whitelist?: string;
	weight?: CharacterWeight;
}

/**
 * FUNCTIONS
 */

/**
 *
 * @param blacklist A String that contains characters that are not allowed
 * @param whitelist A String that contaings characters that are only allowed (currently only for special Characters)
 * @param weight A object that determines how frequent a specific type of characters appear
 * @returns
 */
function generateCharacterString(blacklist = '', whitelist = '', weight?: CharacterWeight): string {
	if (!weight) {
		weight = DEFAULT_WEIGHT;
	}

	if (whitelist !== '') {
		const graylist = Array.from(CHARACTORS_SPECIAL).filter(char => !whitelist.includes(char));
		blacklist = graylist.join('');
	}

	const specialString = Array.from(CHARACTORS_SPECIAL).filter(char => !blacklist.includes(char));

	const uppercaseString = CHARACTORS_UPPERCASE.repeat(weight.uppercase);
	const lowercaseString = CHARACTORS_LOWERCASE.repeat(weight.lowercase);
	const numbersString = CHARACTORS_NUMBERS.repeat(weight.numbers);

	const specialStringRepeat = specialString.length < 10 ? 10 : weight.special;

	const verySpecialString = specialString.join('').repeat(specialStringRepeat);

	const characterString = uppercaseString + lowercaseString + numbersString + verySpecialString;

	return characterString;
}

function cryptoRand(): number {
	const randomBuffer = new Uint32Array(1);
	crypto.getRandomValues(randomBuffer);
	return randomBuffer[0] / (0xffffffff + 1);
}

function getRandomINT(max: number): number {
	return Math.ceil(cryptoRand() * max);
}

export function generatePassword(length: number, options?: genPWOpts): string {
	if (!options) {
		options = DEFAULT_GEN_OPTIONS;
	}
	const { blacklist, whitelist, weight } = options;

	const characterString = generateCharacterString(blacklist, whitelist, weight);
	const passwordArray = new Array(length).fill(null).map(() => {
		const randINT = getRandomINT(characterString.length);
		return characterString.charAt(randINT);
	});

	const password = passwordArray.join('');
	return password;
}

export function syntaxHighlight(password: string): string {
	const passwordArray = password.split('');
	const highlightedPasswordArray = passwordArray.map(char => {
		if (CHARACTORS_NUMBERS.includes(char)) {
			return `<span class='number'>${char}</span>`;
		}

		if (CHARACTORS_SPECIAL.includes(char)) {
			return `<span class='special'>${char}</span>`;
		}
		if (CHARACTORS_UPPERCASE.includes(char)) {
			return `<span class='uppercase'>${char}</span>`;
		}
		if (CHARACTORS_LOWERCASE.includes(char)) {
			return `<span class='lowercase'>${char}</span>`;
		}

		return char;
	});

	return highlightedPasswordArray.join('');
}

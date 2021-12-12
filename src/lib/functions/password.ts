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
	blackList: '',
	whiteList: '',
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
	blackList?: string;
	whiteList?: string;
	weight?: CharacterWeight;
}

/**
 * FUNCTIONS
 */

/**
 *
 * @param blackList A String that contains characters that are not allowed
 * @param whiteList A String that contaings characters that are only allowed (currently only for special Characters)
 * @param weight A object that determines how frequent a specific type of characters appear
 * @returns
 */
function generateCharacterString(blackList = '', whiteList = '', weight?: CharacterWeight): string {
	if (!weight) {
		weight = DEFAULT_WEIGHT;
	}
	console.log({
		blackList,
		whiteList
	});
	if (whiteList !== '') {
		const graylist = Array.from(CHARACTORS_SPECIAL).filter(char => !whiteList.includes(char));
		blackList = graylist.join('');
	}

	const specialString = Array.from(CHARACTORS_SPECIAL).filter(char => !blackList.includes(char));

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
	const { blackList, whiteList, weight } = options;

	const characterString = generateCharacterString(blackList, whiteList, weight);

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

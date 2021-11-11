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

interface CharacterWeight {
	uppercase: number;
	lowercase: number;
	numbers: number;
	special: number;
}

interface genPWOpts {
	blacklist: string;
	whitelist: string;
	weight: CharacterWeight;
}

/**
 * FUNCTIONS
 */
function generateCharacterString(forbidden = '', weight?: CharacterWeight): string {
	if (!weight) {
		weight = DEFAULT_WEIGHT;
	}
	const uppercaseString = CHARACTORS_UPPERCASE.repeat(weight.uppercase);
	const lowercaseString = CHARACTORS_LOWERCASE.repeat(weight.lowercase);
	const numbersString = CHARACTORS_NUMBERS.repeat(weight.numbers);
	const specialString = CHARACTORS_SPECIAL.repeat(weight.special);

	const characterString = uppercaseString + lowercaseString + numbersString + specialString;

	const purgedCharacters = Array.from(characterString).filter(c => !forbidden.includes(c));
	const purgedCharacterString = purgedCharacters.join('');
	return purgedCharacterString;
}

function cryptoRand(): number {
	const randomBuffer = new Uint32Array(1);
	crypto.getRandomValues(randomBuffer);
	return randomBuffer[0] / (0xffffffff + 1);
}

function getRandomINT(max): number {
	return Math.ceil(cryptoRand() * max);
}

export function generatePassword(length = 30, options: genPWOpts): string {
	if (!options) {
		options = DEFAULT_GEN_OPTIONS;
	}
	const { blacklist: forbiddenCharacters, weight } = options;

	const characterString = generateCharacterString(forbiddenCharacters, weight);
	const passwordArray = new Array(length).fill(null).map(() => {
		const randINT = getRandomINT(characterString.length);
		return characterString.charAt(randINT);
	});

	return passwordArray.join('');
}

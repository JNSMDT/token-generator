const CHARACTORS_LETTERS_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //26
const CHARACTORS_LETTERS_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'; //26
const CHARACTORS_NUMBERS = '0123456789'; // 10
const CHARACTORS_SPECIAL = '*+,-_.()/@!?#$%&"\':;[]^`{}~<=>'; // 30

interface genPWOpts {
	forbiddenCharacters: string;
	characterWeight: {
		uppercase: number;
		lowercase: number;
		numbers: number;
		special: number;
	};
}

export function generatePassword(length: number, options: genPWOpts) {}

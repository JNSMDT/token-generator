const CHARACTORS_LETTERS_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //26
const CHARACTORS_LETTERS_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'; //26
const CHARACTORS_NUMBERS = '0123456789'; // 10
const CHARACTORS_SPECIAL_1 = '*+,-_./:;@!?#$%&'; // 16
const CHARACTORS_SPECIAL_2 = '“‘()[]^`{}~<=>'; // 14

// create characterstring from letters, numbers and special characters
// letters are triple weight, number 4 times the normal and special character double weighted

const CHARACTERSSTRING = [
	CHARACTORS_LETTERS_UPPERCASE,
	CHARACTORS_LETTERS_UPPERCASE,
	CHARACTORS_LETTERS_UPPERCASE,
	CHARACTORS_LETTERS_LOWERCASE,
	CHARACTORS_LETTERS_LOWERCASE,
	CHARACTORS_LETTERS_LOWERCASE,
	CHARACTORS_NUMBERS,
	CHARACTORS_NUMBERS,
	CHARACTORS_NUMBERS,
	CHARACTORS_NUMBERS,
	CHARACTORS_SPECIAL_1,
	CHARACTORS_SPECIAL_1,
	CHARACTORS_SPECIAL_2,
	CHARACTORS_SPECIAL_2
].join('');

interface GeneratePasswordOptions {
	length: number;
}

function generatePassword(options: GeneratePasswordOptions): string {
	const { length } = options;
	// initialize uintArray
	const uIntArray = new Uint8Array(1);

	const pw = [];
	let counter = 0;
	while (counter < length) {
		// fill array with random bytes
		crypto.getRandomValues(uIntArray);

		if (uIntArray[0] > CHARACTERSSTRING.length) {
			continue;
		}

		pw.push(CHARACTERSSTRING.charAt(uIntArray[0]));
		counter += 1;
	}

	return pw.join('');
}

async function handleRequest(request: Request): Promise<Response> {
	// get querystring from request url
	const { searchParams } = new URL(request.url);
	// get pwlength from querystring (default is 30)
	const pwLength = searchParams.get('length') ?? 30;
	// check if provided pwLength is a number

	if (Number.isNaN(Number(pwLength))) {
		return new Response(`Length must be a number, you provided "${pwLength}"`);
	}

	// generate pw
	const pwGenOptions = {
		length: Number(pwLength)
	};
	const pw = generatePassword(pwGenOptions);
	return new Response(pw);
}

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
});

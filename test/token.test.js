// import { render, fireEvent, screen } from '@testing-library/svelte';
import { test, describe, expect } from 'vitest';
import { generatePassword } from '$lib/functions/token.js';

const ALL_SPECIAL_CHARS = '*+,-_.()/@!?#$%&"\':;[]^`{}~<=>'

describe.concurrent('Test password generator function', () => {
	test.each([1, 5, 10, 100, 200, 1000])('password length option with "%s"', (length) => {
		const password = generatePassword(length);

		expect(password.length).toBe(length);
	});

	test.each(['*+',',-_.','()/@!?','#$%&"\':;','[]^`{}~<=>'])('Test whitelisting option with "%s"', (whitelist) => {
		const blacklist = ALL_SPECIAL_CHARS.replace(whitelist,'');
		const password = generatePassword(100, {
			customSpecialChars: whitelist,
			customSpecialCharsType: 'whitelist'
		});
		const passwordArray = [...password];
		const blacklistArray = [...blacklist]
		const includesOtherChars = blacklistArray.every((char) => {
			// negate includes because the every function stops if the predicate returns false
			return !passwordArray.includes(char)
		})

		
		expect(includesOtherChars).toBe(true);
	});

	test.each(['*+',',-_.','()/@!?','#$%&"\':;','[]^`{}~<=>'])('Test blacklisting option with "%s"', (blacklist) => {
		const password = generatePassword(100, {
			customSpecialChars: blacklist,
			customSpecialCharsType: 'blacklist'
		});
		const passwordArray = [...password];
		const blacklistArray = [...blacklist]
		const includesOtherChars = blacklistArray.every((char) => {
			// negate includes because the every function stops if the predicate returns false
			return !passwordArray.includes(char)
		})

		
		expect(includesOtherChars).toBe(true);
	});
});

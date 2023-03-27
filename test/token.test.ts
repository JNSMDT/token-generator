// import { render, fireEvent, screen } from '@testing-library/svelte';
import { test, describe, expect } from 'vitest';
import { generatePassword, generateToken } from '$lib/functions/token.ts';

const ALL_SPECIAL_CHARS = '*+,-_.()/@!?#$%&"\':;[]^`{}~<=>';

describe.concurrent('Password generator function', () => {
	test.each([1, 5, 10, 100, 200, 1000])('generate a password with length "%s"', (length) => {
		const password = generatePassword(length);

		expect(password.length).toBe(length);
	});

	test.each(['*+', ',-_.', '()/@!?', '#$%&"\':;', '[]^`{}~<=>'])(
		'whitelist the characters "%s"',
		(whitelist) => {
			const blacklist = ALL_SPECIAL_CHARS.replace(whitelist, '');
			const password = generatePassword(100, {
				customSpecialChars: whitelist,
				customSpecialCharsType: 'whitelist'
			});
			const passwordArray = new Set(password);
			const blacklistArray = [...blacklist];
			// negate includes because the every function stops if the predicate returns false
			const includesOtherChars = blacklistArray.every((char) => !passwordArray.has(char));

			expect(includesOtherChars).toBe(true);
		}
	);

	test.each(['*+', ',-_.', '()/@!?', '#$%&"\':;', '[]^`{}~<=>'])(
		'blacklist the characters "%s"',
		(blacklist) => {
			const password = generatePassword(100, {
				customSpecialChars: blacklist,
				customSpecialCharsType: 'blacklist'
			});
			const passwordArray = new Set(password);
			const blacklistArray = [...blacklist];
			const includesOtherChars = blacklistArray.every((char) => !passwordArray.has(char));

			expect(includesOtherChars).toBe(true);
		}
	);
});

describe('Token generator function', () => {
	test.each([1, 10, 25, 100, 1000])('generate token with length "%s"', (length) => {
		const token = generateToken(length);

		expect(token.length).toBe(length);
	});
});

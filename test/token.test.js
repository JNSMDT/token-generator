// import { render, fireEvent, screen } from '@testing-library/svelte';
import { test, describe, expect } from 'vitest';
import { generatePassword } from '$lib/functions/token.js';

describe.concurrent('Test password generator', () => {
	test.each([1, 5, 10, 100, 200])('password length option', (length) => {
		const password = generatePassword(length);

		expect(password.length).toBe(length);
	});

	// test('whitelisting chars', () => {
	// 	const whitelist = '*+,-_.()/@!?#$%&';
	// 	const blacklist = '*+,-_.()/@!?#$%&"\':;[]^`{}~<=>'.replace(whitelist, '');
	// 	const password = generatePassword(100, {
	// 		customSpecialChars: whitelist,
	// 		customSpecialCharsType: 'whitelist'
	// 	});

	// 	expect(includesOtherChars).toBe(false);
	// });
});

import { describe, expect, it } from 'vitest';
import { cryptoRand, getRandomInt } from '$lib/token/token';

function testRandomIntArray(randomIntArray: number[], min: number, max: number) {
	expect(randomIntArray.every(n => n > min));
	expect(randomIntArray.every(n => n < max));
}

describe('Random', () => {
	it('generates a random number between 0 and 1 (cryptoRand)', () => {
		const randomArray = Array.from({ length: 100 }, () => cryptoRand());

		expect(randomArray.every(n => n > 0));
		expect(randomArray.every(n => n < 1));
	});

	it('generates a random number between 0 and 100', () => {
		const randomIntArray = Array.from({ length: 100 }, () => getRandomInt(100, 0));
		testRandomIntArray(randomIntArray, 0, 100);
	});

	it('generates a random number between 0 and 1000', () => {
		const randomIntArray = Array.from({ length: 100 }, () => getRandomInt(1000, 0));
		testRandomIntArray(randomIntArray, 0, 1000);
	});

	it('generates a random number between 100 and 1000', () => {
		const randomIntArray = Array.from({ length: 100 }, () => getRandomInt(1000, 100));
		testRandomIntArray(randomIntArray, 100, 1000);
	});

	it('generates a random number between 10000 and 1000000', () => {
		const randomIntArray = Array.from({ length: 100 }, () => getRandomInt(10000, 1000000));
		testRandomIntArray(randomIntArray, 10000, 1000000);
	});

	it('generates a random number between 1000000 and MAX_SAFE_INTEGER', () => {
		const randomIntArray = Array.from({ length: 100 }, () => getRandomInt(1000000, Number.MAX_SAFE_INTEGER));
		testRandomIntArray(randomIntArray, 1000000, Number.MAX_SAFE_INTEGER);
	});
});

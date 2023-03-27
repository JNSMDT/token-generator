import { randomFillSync } from 'node:crypto';

Object.defineProperty(global, 'crypto', {
	value: {
		/**
		 *
		 * @param {NodeJS.ArrayBufferView} buffer
		 * @returns
		 */
		getRandomValues: (buffer) => randomFillSync(buffer)
	}
});

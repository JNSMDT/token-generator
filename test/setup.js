/* eslint-disable unicorn/no-array-for-each */
/* eslint-disable no-restricted-syntax */

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

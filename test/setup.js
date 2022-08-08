/* eslint-disable unicorn/no-array-for-each */
/* eslint-disable no-restricted-syntax */
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

import { randomFillSync } from 'node:crypto';

expect.extend(matchers);

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

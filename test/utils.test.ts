import { describe, expect, it } from 'vitest';
import { determineFieldType } from '../src/utils';

describe('determineFieldType', () => {
	it('returns union for select choices', () => {
		const field = {
			meta: {
				interface: 'select-dropdown',
				options: {
					choices: [
						{ value: 'draft' },
						{ value: 'published' },
						{ value: 'draft' },
						{ value: null },
					],
				},
			},
		};

		expect(determineFieldType(field)).toBe("'draft' | 'published' | null");
	});

	it('returns array type for select-multiple choices', () => {
		const field = {
			meta: {
				interface: 'select-multiple',
				options: {
					choices: [
						{ value: 'draft' },
						{ value: 'published' },
						{ value: 'draft' },
						{ value: null },
					],
				},
			},
		};

		expect(determineFieldType(field)).toBe("Array<'draft' | 'published' | null>");
	});
});

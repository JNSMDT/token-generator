/**
 * INTERFACES
 */
export interface CharacterWeight {
	uppercase: number
	lowercase: number
	numbers: number
	special: number

}
/**
 *
 */
export type CustomSpecialChars = string;
export type CustomSpecialCharsType = 'blacklist' | 'whitelist';
export interface GeneratePWOptions {
	customSpecialChars?: CustomSpecialChars
	customSpecialCharsType?: CustomSpecialCharsType
	weight?: CharacterWeight
}

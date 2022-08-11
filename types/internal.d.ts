
declare const __VERSION__: string;

/**
 * INTERFACES
 */
 export type CharacterWeight = {
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
export type GeneratePWOptions = {
	customSpecialChars?: CustomSpecialChars
	customSpecialCharsType?: CustomSpecialCharsType
	weight?: CharacterWeight
}

export type ModalOptions = ['length','customSpecial'?]
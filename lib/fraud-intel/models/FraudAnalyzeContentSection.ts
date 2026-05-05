/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * Analysis results for a single content section (names, subject, or message).
 * @export
 * @interface FraudAnalyzeContentSection
 */
export interface FraudAnalyzeContentSection {
    /**
     * Gibberish probability score between 0 and 1.
     * @type {number}
     * @memberof FraudAnalyzeContentSection
     */
    gibberishScore?: number;
    /**
     * True when the text appears synthetically generated or incoherent.
     * @type {boolean}
     * @memberof FraudAnalyzeContentSection
     */
    isGibberish?: boolean;
    /**
     * Spam probability score between 0 and 1. Present for subject and message sections.
     * @type {number}
     * @memberof FraudAnalyzeContentSection
     */
    spamScore?: number;
    /**
     * True when the content matches known spam patterns. Present for subject and message sections.
     * @type {boolean}
     * @memberof FraudAnalyzeContentSection
     */
    isSpam?: boolean;
    /**
     * Detected language of the text content (BCP 47 tag). Present when language detection is possible.
     * @type {string}
     * @memberof FraudAnalyzeContentSection
     */
    language?: string;
}

/**
 * Check if a given object implements the FraudAnalyzeContentSection interface.
 */
export function instanceOfFraudAnalyzeContentSection(value: object): value is FraudAnalyzeContentSection {
    return true;
}

export function FraudAnalyzeContentSectionFromJSON(json: any): FraudAnalyzeContentSection {
    return FraudAnalyzeContentSectionFromJSONTyped(json, false);
}

export function FraudAnalyzeContentSectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): FraudAnalyzeContentSection {
    if (json == null) {
        return json;
    }
    return {
        
        'gibberishScore': json['gibberishScore'] == null ? undefined : json['gibberishScore'],
        'isGibberish': json['isGibberish'] == null ? undefined : json['isGibberish'],
        'spamScore': json['spamScore'] == null ? undefined : json['spamScore'],
        'isSpam': json['isSpam'] == null ? undefined : json['isSpam'],
        'language': json['language'] == null ? undefined : json['language'],
    };
}

export function FraudAnalyzeContentSectionToJSON(json: any): FraudAnalyzeContentSection {
    return FraudAnalyzeContentSectionToJSONTyped(json, false);
}

export function FraudAnalyzeContentSectionToJSONTyped(value?: FraudAnalyzeContentSection | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gibberishScore': value['gibberishScore'],
        'isGibberish': value['isGibberish'],
        'spamScore': value['spamScore'],
        'isSpam': value['isSpam'],
        'language': value['language'],
    };
}


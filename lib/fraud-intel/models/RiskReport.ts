/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * AI-driven risk report. Contains a normalized risk score, a human-readable risk level, and the factor codes that contributed to the score.
 * @export
 * @interface RiskReport
 */
export interface RiskReport {
    /**
     * Risk score normalized to a range of 200–1000.
     * @type {number}
     * @memberof RiskReport
     */
    score?: number;
    /**
     * Static representation of the risk level. Allowed values: lowest, low, medium, high, highest.
     * @type {string}
     * @memberof RiskReport
     */
    level?: string;
    /**
     * Factor codes that contributed to the score.
     * @type {Array<string>}
     * @memberof RiskReport
     */
    baseAnalysis?: Array<string>;
}

/**
 * Check if a given object implements the RiskReport interface.
 */
export function instanceOfRiskReport(value: object): value is RiskReport {
    return true;
}

export function RiskReportFromJSON(json: any): RiskReport {
    return RiskReportFromJSONTyped(json, false);
}

export function RiskReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): RiskReport {
    if (json == null) {
        return json;
    }
    return {
        
        'score': json['score'] == null ? undefined : json['score'],
        'level': json['level'] == null ? undefined : json['level'],
        'baseAnalysis': json['baseAnalysis'] == null ? undefined : json['baseAnalysis'],
    };
}

export function RiskReportToJSON(json: any): RiskReport {
    return RiskReportToJSONTyped(json, false);
}

export function RiskReportToJSONTyped(value?: RiskReport | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'score': value['score'],
        'level': value['level'],
        'baseAnalysis': value['baseAnalysis'],
    };
}


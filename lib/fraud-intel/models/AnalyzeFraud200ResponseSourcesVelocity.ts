/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
import type { RiskReport } from './RiskReport';
import {
    RiskReportFromJSON,
    RiskReportFromJSONTyped,
    RiskReportToJSON,
    RiskReportToJSONTyped,
} from './RiskReport';
import type { FraudVelocityWindow } from './FraudVelocityWindow';
import {
    FraudVelocityWindowFromJSON,
    FraudVelocityWindowFromJSONTyped,
    FraudVelocityWindowToJSON,
    FraudVelocityWindowToJSONTyped,
} from './FraudVelocityWindow';

/**
 * Submission rate per identifier type over sliding windows. Always evaluated when identifiers are provided.
 * @export
 * @interface AnalyzeFraud200ResponseSourcesVelocity
 */
export interface AnalyzeFraud200ResponseSourcesVelocity {
    /**
     * 
     * @type {FraudVelocityWindow}
     * @memberof AnalyzeFraud200ResponseSourcesVelocity
     */
    emailSubmissions: FraudVelocityWindow | null;
    /**
     * 
     * @type {FraudVelocityWindow}
     * @memberof AnalyzeFraud200ResponseSourcesVelocity
     */
    ipSubmissions: FraudVelocityWindow | null;
    /**
     * 
     * @type {FraudVelocityWindow}
     * @memberof AnalyzeFraud200ResponseSourcesVelocity
     */
    phoneSubmissions: FraudVelocityWindow | null;
    /**
     * True when any identifier's submission rate exceeds the configured anomaly threshold.
     * @type {boolean}
     * @memberof AnalyzeFraud200ResponseSourcesVelocity
     */
    anomaly: boolean;
    /**
     * Risk report for velocity signals. Score is elevated when `anomaly` is `true`.
     * @type {RiskReport}
     * @memberof AnalyzeFraud200ResponseSourcesVelocity
     */
    riskReport: RiskReport;
}

/**
 * Check if a given object implements the AnalyzeFraud200ResponseSourcesVelocity interface.
 */
export function instanceOfAnalyzeFraud200ResponseSourcesVelocity(value: object): value is AnalyzeFraud200ResponseSourcesVelocity {
    if (!('emailSubmissions' in value) || value['emailSubmissions'] === undefined) return false;
    if (!('ipSubmissions' in value) || value['ipSubmissions'] === undefined) return false;
    if (!('phoneSubmissions' in value) || value['phoneSubmissions'] === undefined) return false;
    if (!('anomaly' in value) || value['anomaly'] === undefined) return false;
    if (!('riskReport' in value) || value['riskReport'] === undefined) return false;
    return true;
}

export function AnalyzeFraud200ResponseSourcesVelocityFromJSON(json: any): AnalyzeFraud200ResponseSourcesVelocity {
    return AnalyzeFraud200ResponseSourcesVelocityFromJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseSourcesVelocityFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeFraud200ResponseSourcesVelocity {
    if (json == null) {
        return json;
    }
    return {
        
        'emailSubmissions': FraudVelocityWindowFromJSON(json['emailSubmissions']),
        'ipSubmissions': FraudVelocityWindowFromJSON(json['ipSubmissions']),
        'phoneSubmissions': FraudVelocityWindowFromJSON(json['phoneSubmissions']),
        'anomaly': json['anomaly'],
        'riskReport': RiskReportFromJSON(json['riskReport']),
    };
}

export function AnalyzeFraud200ResponseSourcesVelocityToJSON(json: any): AnalyzeFraud200ResponseSourcesVelocity {
    return AnalyzeFraud200ResponseSourcesVelocityToJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseSourcesVelocityToJSONTyped(value?: AnalyzeFraud200ResponseSourcesVelocity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'emailSubmissions': FraudVelocityWindowToJSON(value['emailSubmissions']),
        'ipSubmissions': FraudVelocityWindowToJSON(value['ipSubmissions']),
        'phoneSubmissions': FraudVelocityWindowToJSON(value['phoneSubmissions']),
        'anomaly': value['anomaly'],
        'riskReport': RiskReportToJSON(value['riskReport']),
    };
}


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
import type { AnalyzeFraud200ResponseSourcesGeoSignals } from './AnalyzeFraud200ResponseSourcesGeoSignals';
import {
    AnalyzeFraud200ResponseSourcesGeoSignalsFromJSON,
    AnalyzeFraud200ResponseSourcesGeoSignalsFromJSONTyped,
    AnalyzeFraud200ResponseSourcesGeoSignalsToJSON,
    AnalyzeFraud200ResponseSourcesGeoSignalsToJSONTyped,
} from './AnalyzeFraud200ResponseSourcesGeoSignals';

/**
 * Cross-source geographic consistency check. Present when at least two geographic signals are available (IP geolocation, email domain country, declared `country` field, phone country, or session…
 * @export
 * @interface AnalyzeFraud200ResponseSourcesGeo
 */
export interface AnalyzeFraud200ResponseSourcesGeo {
    /**
     * True when all available geographic signals resolve to the same country code.
     * @type {boolean}
     * @memberof AnalyzeFraud200ResponseSourcesGeo
     */
    consistent: boolean;
    /**
     * 
     * @type {AnalyzeFraud200ResponseSourcesGeoSignals}
     * @memberof AnalyzeFraud200ResponseSourcesGeo
     */
    signals: AnalyzeFraud200ResponseSourcesGeoSignals;
    /**
     * Risk report for geographic consistency. Score is elevated when signals are inconsistent.
     * @type {RiskReport}
     * @memberof AnalyzeFraud200ResponseSourcesGeo
     */
    riskReport: RiskReport;
}

/**
 * Check if a given object implements the AnalyzeFraud200ResponseSourcesGeo interface.
 */
export function instanceOfAnalyzeFraud200ResponseSourcesGeo(value: object): value is AnalyzeFraud200ResponseSourcesGeo {
    if (!('consistent' in value) || value['consistent'] === undefined) return false;
    if (!('signals' in value) || value['signals'] === undefined) return false;
    if (!('riskReport' in value) || value['riskReport'] === undefined) return false;
    return true;
}

export function AnalyzeFraud200ResponseSourcesGeoFromJSON(json: any): AnalyzeFraud200ResponseSourcesGeo {
    return AnalyzeFraud200ResponseSourcesGeoFromJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseSourcesGeoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeFraud200ResponseSourcesGeo {
    if (json == null) {
        return json;
    }
    return {
        
        'consistent': json['consistent'],
        'signals': AnalyzeFraud200ResponseSourcesGeoSignalsFromJSON(json['signals']),
        'riskReport': RiskReportFromJSON(json['riskReport']),
    };
}

export function AnalyzeFraud200ResponseSourcesGeoToJSON(json: any): AnalyzeFraud200ResponseSourcesGeo {
    return AnalyzeFraud200ResponseSourcesGeoToJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseSourcesGeoToJSONTyped(value?: AnalyzeFraud200ResponseSourcesGeo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'consistent': value['consistent'],
        'signals': AnalyzeFraud200ResponseSourcesGeoSignalsToJSON(value['signals']),
        'riskReport': RiskReportToJSON(value['riskReport']),
    };
}


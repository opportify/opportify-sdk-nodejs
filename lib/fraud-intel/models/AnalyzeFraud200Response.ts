/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
import type { AnalyzeFraud200ResponseSources } from './AnalyzeFraud200ResponseSources';
import {
    AnalyzeFraud200ResponseSourcesFromJSON,
    AnalyzeFraud200ResponseSourcesFromJSONTyped,
    AnalyzeFraud200ResponseSourcesToJSON,
    AnalyzeFraud200ResponseSourcesToJSONTyped,
} from './AnalyzeFraud200ResponseSources';

/**
 * 
 * @export
 * @interface AnalyzeFraud200Response
 */
export interface AnalyzeFraud200Response {
    /**
     * Composite fraud risk score normalized to 200–1000. Always present in the response.
     * @type {number}
     * @memberof AnalyzeFraud200Response
     */
    score: number;
    /**
     * Human-readable risk level derived from `score`. Always present in the response. Allowed values: lowest, low, medium, high, highest.
     * @type {string}
     * @memberof AnalyzeFraud200Response
     */
    level: string;
    /**
     * Top weighted risk factor codes contributing to the composite score. Always present in the response. Each code is prefixed with its source using the format `source:factor-code`. Possible source…
     * @type {Array<string>}
     * @memberof AnalyzeFraud200Response
     */
    factors: Array<string>;
    /**
     * 
     * @type {AnalyzeFraud200ResponseSources}
     * @memberof AnalyzeFraud200Response
     */
    sources: AnalyzeFraud200ResponseSources;
}

/**
 * Check if a given object implements the AnalyzeFraud200Response interface.
 */
export function instanceOfAnalyzeFraud200Response(value: object): value is AnalyzeFraud200Response {
    if (!('score' in value) || value['score'] === undefined) return false;
    if (!('level' in value) || value['level'] === undefined) return false;
    if (!('factors' in value) || value['factors'] === undefined) return false;
    if (!('sources' in value) || value['sources'] === undefined) return false;
    return true;
}

export function AnalyzeFraud200ResponseFromJSON(json: any): AnalyzeFraud200Response {
    return AnalyzeFraud200ResponseFromJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeFraud200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'score': json['score'],
        'level': json['level'],
        'factors': json['factors'],
        'sources': AnalyzeFraud200ResponseSourcesFromJSON(json['sources']),
    };
}

export function AnalyzeFraud200ResponseToJSON(json: any): AnalyzeFraud200Response {
    return AnalyzeFraud200ResponseToJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseToJSONTyped(value?: AnalyzeFraud200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'score': value['score'],
        'level': value['level'],
        'factors': value['factors'],
        'sources': AnalyzeFraud200ResponseSourcesToJSON(value['sources']),
    };
}


/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface FraudAnalyzeSessionDetectionsInner
 */
export interface FraudAnalyzeSessionDetectionsInner {
    /**
     * Detection key identifier.
     * @type {string}
     * @memberof FraudAnalyzeSessionDetectionsInner
     */
    name?: string;
    /**
     * Detection result. Typically true for presence-based detections.
     * @type {any}
     * @memberof FraudAnalyzeSessionDetectionsInner
     */
    value?: any | null;
}

/**
 * Check if a given object implements the FraudAnalyzeSessionDetectionsInner interface.
 */
export function instanceOfFraudAnalyzeSessionDetectionsInner(value: object): value is FraudAnalyzeSessionDetectionsInner {
    return true;
}

export function FraudAnalyzeSessionDetectionsInnerFromJSON(json: any): FraudAnalyzeSessionDetectionsInner {
    return FraudAnalyzeSessionDetectionsInnerFromJSONTyped(json, false);
}

export function FraudAnalyzeSessionDetectionsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): FraudAnalyzeSessionDetectionsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function FraudAnalyzeSessionDetectionsInnerToJSON(json: any): FraudAnalyzeSessionDetectionsInner {
    return FraudAnalyzeSessionDetectionsInnerToJSONTyped(json, false);
}

export function FraudAnalyzeSessionDetectionsInnerToJSONTyped(value?: FraudAnalyzeSessionDetectionsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'value': value['value'],
    };
}


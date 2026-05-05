/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AnalyzeFraud504Response
 */
export interface AnalyzeFraud504Response {
    /**
     * 
     * @type {string}
     * @memberof AnalyzeFraud504Response
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof AnalyzeFraud504Response
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the AnalyzeFraud504Response interface.
 */
export function instanceOfAnalyzeFraud504Response(value: object): value is AnalyzeFraud504Response {
    return true;
}

export function AnalyzeFraud504ResponseFromJSON(json: any): AnalyzeFraud504Response {
    return AnalyzeFraud504ResponseFromJSONTyped(json, false);
}

export function AnalyzeFraud504ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeFraud504Response {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function AnalyzeFraud504ResponseToJSON(json: any): AnalyzeFraud504Response {
    return AnalyzeFraud504ResponseToJSONTyped(json, false);
}

export function AnalyzeFraud504ResponseToJSONTyped(value?: AnalyzeFraud504Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


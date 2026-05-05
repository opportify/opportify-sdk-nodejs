/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AnalyzeFraud429Response
 */
export interface AnalyzeFraud429Response {
    /**
     * 
     * @type {string}
     * @memberof AnalyzeFraud429Response
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof AnalyzeFraud429Response
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the AnalyzeFraud429Response interface.
 */
export function instanceOfAnalyzeFraud429Response(value: object): value is AnalyzeFraud429Response {
    return true;
}

export function AnalyzeFraud429ResponseFromJSON(json: any): AnalyzeFraud429Response {
    return AnalyzeFraud429ResponseFromJSONTyped(json, false);
}

export function AnalyzeFraud429ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeFraud429Response {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function AnalyzeFraud429ResponseToJSON(json: any): AnalyzeFraud429Response {
    return AnalyzeFraud429ResponseToJSONTyped(json, false);
}

export function AnalyzeFraud429ResponseToJSONTyped(value?: AnalyzeFraud429Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


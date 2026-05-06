/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface JOBNOTREADY
 */
export interface JOBNOTREADY {
    /**
     * 
     * @type {string}
     * @memberof JOBNOTREADY
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof JOBNOTREADY
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the JOBNOTREADY interface.
 */
export function instanceOfJOBNOTREADY(value: object): value is JOBNOTREADY {
    return true;
}

export function JOBNOTREADYFromJSON(json: any): JOBNOTREADY {
    return JOBNOTREADYFromJSONTyped(json, false);
}

export function JOBNOTREADYFromJSONTyped(json: any, ignoreDiscriminator: boolean): JOBNOTREADY {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function JOBNOTREADYToJSON(json: any): JOBNOTREADY {
    return JOBNOTREADYToJSONTyped(json, false);
}

export function JOBNOTREADYToJSONTyped(value?: JOBNOTREADY | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


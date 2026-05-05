/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface JOBNOTFOUND
 */
export interface JOBNOTFOUND {
    /**
     * 
     * @type {string}
     * @memberof JOBNOTFOUND
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof JOBNOTFOUND
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the JOBNOTFOUND interface.
 */
export function instanceOfJOBNOTFOUND(value: object): value is JOBNOTFOUND {
    return true;
}

export function JOBNOTFOUNDFromJSON(json: any): JOBNOTFOUND {
    return JOBNOTFOUNDFromJSONTyped(json, false);
}

export function JOBNOTFOUNDFromJSONTyped(json: any, ignoreDiscriminator: boolean): JOBNOTFOUND {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function JOBNOTFOUNDToJSON(json: any): JOBNOTFOUND {
    return JOBNOTFOUNDToJSONTyped(json, false);
}

export function JOBNOTFOUNDToJSONTyped(value?: JOBNOTFOUND | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


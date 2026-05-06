/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface INVALIDDATA1
 */
export interface INVALIDDATA1 {
    /**
     * 
     * @type {string}
     * @memberof INVALIDDATA1
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof INVALIDDATA1
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the INVALIDDATA1 interface.
 */
export function instanceOfINVALIDDATA1(value: object): value is INVALIDDATA1 {
    return true;
}

export function INVALIDDATA1FromJSON(json: any): INVALIDDATA1 {
    return INVALIDDATA1FromJSONTyped(json, false);
}

export function INVALIDDATA1FromJSONTyped(json: any, ignoreDiscriminator: boolean): INVALIDDATA1 {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function INVALIDDATA1ToJSON(json: any): INVALIDDATA1 {
    return INVALIDDATA1ToJSONTyped(json, false);
}

export function INVALIDDATA1ToJSONTyped(value?: INVALIDDATA1 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


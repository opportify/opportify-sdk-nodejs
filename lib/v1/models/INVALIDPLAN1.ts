/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface INVALIDPLAN1
 */
export interface INVALIDPLAN1 {
    /**
     * 
     * @type {string}
     * @memberof INVALIDPLAN1
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof INVALIDPLAN1
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the INVALIDPLAN1 interface.
 */
export function instanceOfINVALIDPLAN1(value: object): value is INVALIDPLAN1 {
    return true;
}

export function INVALIDPLAN1FromJSON(json: any): INVALIDPLAN1 {
    return INVALIDPLAN1FromJSONTyped(json, false);
}

export function INVALIDPLAN1FromJSONTyped(json: any, ignoreDiscriminator: boolean): INVALIDPLAN1 {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function INVALIDPLAN1ToJSON(json: any): INVALIDPLAN1 {
    return INVALIDPLAN1ToJSONTyped(json, false);
}

export function INVALIDPLAN1ToJSONTyped(value?: INVALIDPLAN1 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


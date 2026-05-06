/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface INVALIDDATA
 */
export interface INVALIDDATA {
    /**
     * 
     * @type {string}
     * @memberof INVALIDDATA
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof INVALIDDATA
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the INVALIDDATA interface.
 */
export function instanceOfINVALIDDATA(value: object): value is INVALIDDATA {
    return true;
}

export function INVALIDDATAFromJSON(json: any): INVALIDDATA {
    return INVALIDDATAFromJSONTyped(json, false);
}

export function INVALIDDATAFromJSONTyped(json: any, ignoreDiscriminator: boolean): INVALIDDATA {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function INVALIDDATAToJSON(json: any): INVALIDDATA {
    return INVALIDDATAToJSONTyped(json, false);
}

export function INVALIDDATAToJSONTyped(value?: INVALIDDATA | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


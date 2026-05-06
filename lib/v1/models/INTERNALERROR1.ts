/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface INTERNALERROR1
 */
export interface INTERNALERROR1 {
    /**
     * 
     * @type {string}
     * @memberof INTERNALERROR1
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof INTERNALERROR1
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the INTERNALERROR1 interface.
 */
export function instanceOfINTERNALERROR1(value: object): value is INTERNALERROR1 {
    return true;
}

export function INTERNALERROR1FromJSON(json: any): INTERNALERROR1 {
    return INTERNALERROR1FromJSONTyped(json, false);
}

export function INTERNALERROR1FromJSONTyped(json: any, ignoreDiscriminator: boolean): INTERNALERROR1 {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function INTERNALERROR1ToJSON(json: any): INTERNALERROR1 {
    return INTERNALERROR1ToJSONTyped(json, false);
}

export function INTERNALERROR1ToJSONTyped(value?: INTERNALERROR1 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


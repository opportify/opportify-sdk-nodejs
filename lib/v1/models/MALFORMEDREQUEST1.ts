/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MALFORMEDREQUEST1
 */
export interface MALFORMEDREQUEST1 {
    /**
     * 
     * @type {string}
     * @memberof MALFORMEDREQUEST1
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof MALFORMEDREQUEST1
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the MALFORMEDREQUEST1 interface.
 */
export function instanceOfMALFORMEDREQUEST1(value: object): value is MALFORMEDREQUEST1 {
    return true;
}

export function MALFORMEDREQUEST1FromJSON(json: any): MALFORMEDREQUEST1 {
    return MALFORMEDREQUEST1FromJSONTyped(json, false);
}

export function MALFORMEDREQUEST1FromJSONTyped(json: any, ignoreDiscriminator: boolean): MALFORMEDREQUEST1 {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function MALFORMEDREQUEST1ToJSON(json: any): MALFORMEDREQUEST1 {
    return MALFORMEDREQUEST1ToJSONTyped(json, false);
}

export function MALFORMEDREQUEST1ToJSONTyped(value?: MALFORMEDREQUEST1 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


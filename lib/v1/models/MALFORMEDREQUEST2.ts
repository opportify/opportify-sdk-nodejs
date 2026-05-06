/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MALFORMEDREQUEST2
 */
export interface MALFORMEDREQUEST2 {
    /**
     * 
     * @type {string}
     * @memberof MALFORMEDREQUEST2
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof MALFORMEDREQUEST2
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the MALFORMEDREQUEST2 interface.
 */
export function instanceOfMALFORMEDREQUEST2(value: object): value is MALFORMEDREQUEST2 {
    return true;
}

export function MALFORMEDREQUEST2FromJSON(json: any): MALFORMEDREQUEST2 {
    return MALFORMEDREQUEST2FromJSONTyped(json, false);
}

export function MALFORMEDREQUEST2FromJSONTyped(json: any, ignoreDiscriminator: boolean): MALFORMEDREQUEST2 {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function MALFORMEDREQUEST2ToJSON(json: any): MALFORMEDREQUEST2 {
    return MALFORMEDREQUEST2ToJSONTyped(json, false);
}

export function MALFORMEDREQUEST2ToJSONTyped(value?: MALFORMEDREQUEST2 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


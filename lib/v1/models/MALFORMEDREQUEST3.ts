/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MALFORMEDREQUEST3
 */
export interface MALFORMEDREQUEST3 {
    /**
     * 
     * @type {string}
     * @memberof MALFORMEDREQUEST3
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof MALFORMEDREQUEST3
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the MALFORMEDREQUEST3 interface.
 */
export function instanceOfMALFORMEDREQUEST3(value: object): value is MALFORMEDREQUEST3 {
    return true;
}

export function MALFORMEDREQUEST3FromJSON(json: any): MALFORMEDREQUEST3 {
    return MALFORMEDREQUEST3FromJSONTyped(json, false);
}

export function MALFORMEDREQUEST3FromJSONTyped(json: any, ignoreDiscriminator: boolean): MALFORMEDREQUEST3 {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function MALFORMEDREQUEST3ToJSON(json: any): MALFORMEDREQUEST3 {
    return MALFORMEDREQUEST3ToJSONTyped(json, false);
}

export function MALFORMEDREQUEST3ToJSONTyped(value?: MALFORMEDREQUEST3 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


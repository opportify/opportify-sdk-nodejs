/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MALFORMEDREQUEST
 */
export interface MALFORMEDREQUEST {
    /**
     * 
     * @type {string}
     * @memberof MALFORMEDREQUEST
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof MALFORMEDREQUEST
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the MALFORMEDREQUEST interface.
 */
export function instanceOfMALFORMEDREQUEST(value: object): value is MALFORMEDREQUEST {
    return true;
}

export function MALFORMEDREQUESTFromJSON(json: any): MALFORMEDREQUEST {
    return MALFORMEDREQUESTFromJSONTyped(json, false);
}

export function MALFORMEDREQUESTFromJSONTyped(json: any, ignoreDiscriminator: boolean): MALFORMEDREQUEST {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function MALFORMEDREQUESTToJSON(json: any): MALFORMEDREQUEST {
    return MALFORMEDREQUESTToJSONTyped(json, false);
}

export function MALFORMEDREQUESTToJSONTyped(value?: MALFORMEDREQUEST | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


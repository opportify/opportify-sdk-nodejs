/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface QUOTAEXCEEDED
 */
export interface QUOTAEXCEEDED {
    /**
     * 
     * @type {string}
     * @memberof QUOTAEXCEEDED
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof QUOTAEXCEEDED
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the QUOTAEXCEEDED interface.
 */
export function instanceOfQUOTAEXCEEDED(value: object): value is QUOTAEXCEEDED {
    return true;
}

export function QUOTAEXCEEDEDFromJSON(json: any): QUOTAEXCEEDED {
    return QUOTAEXCEEDEDFromJSONTyped(json, false);
}

export function QUOTAEXCEEDEDFromJSONTyped(json: any, ignoreDiscriminator: boolean): QUOTAEXCEEDED {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function QUOTAEXCEEDEDToJSON(json: any): QUOTAEXCEEDED {
    return QUOTAEXCEEDEDToJSONTyped(json, false);
}

export function QUOTAEXCEEDEDToJSONTyped(value?: QUOTAEXCEEDED | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


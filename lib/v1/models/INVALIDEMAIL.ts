/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface INVALIDEMAIL
 */
export interface INVALIDEMAIL {
    /**
     * 
     * @type {string}
     * @memberof INVALIDEMAIL
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof INVALIDEMAIL
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the INVALIDEMAIL interface.
 */
export function instanceOfINVALIDEMAIL(value: object): value is INVALIDEMAIL {
    return true;
}

export function INVALIDEMAILFromJSON(json: any): INVALIDEMAIL {
    return INVALIDEMAILFromJSONTyped(json, false);
}

export function INVALIDEMAILFromJSONTyped(json: any, ignoreDiscriminator: boolean): INVALIDEMAIL {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function INVALIDEMAILToJSON(json: any): INVALIDEMAIL {
    return INVALIDEMAILToJSONTyped(json, false);
}

export function INVALIDEMAILToJSONTyped(value?: INVALIDEMAIL | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


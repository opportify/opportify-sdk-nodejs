/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TOOMANYREQUESTS
 */
export interface TOOMANYREQUESTS {
    /**
     * 
     * @type {string}
     * @memberof TOOMANYREQUESTS
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof TOOMANYREQUESTS
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the TOOMANYREQUESTS interface.
 */
export function instanceOfTOOMANYREQUESTS(value: object): value is TOOMANYREQUESTS {
    return true;
}

export function TOOMANYREQUESTSFromJSON(json: any): TOOMANYREQUESTS {
    return TOOMANYREQUESTSFromJSONTyped(json, false);
}

export function TOOMANYREQUESTSFromJSONTyped(json: any, ignoreDiscriminator: boolean): TOOMANYREQUESTS {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function TOOMANYREQUESTSToJSON(json: any): TOOMANYREQUESTS {
    return TOOMANYREQUESTSToJSONTyped(json, false);
}

export function TOOMANYREQUESTSToJSONTyped(value?: TOOMANYREQUESTS | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


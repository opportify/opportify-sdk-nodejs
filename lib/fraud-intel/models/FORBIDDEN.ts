/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface FORBIDDEN
 */
export interface FORBIDDEN {
    /**
     * 
     * @type {string}
     * @memberof FORBIDDEN
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof FORBIDDEN
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the FORBIDDEN interface.
 */
export function instanceOfFORBIDDEN(value: object): value is FORBIDDEN {
    return true;
}

export function FORBIDDENFromJSON(json: any): FORBIDDEN {
    return FORBIDDENFromJSONTyped(json, false);
}

export function FORBIDDENFromJSONTyped(json: any, ignoreDiscriminator: boolean): FORBIDDEN {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function FORBIDDENToJSON(json: any): FORBIDDEN {
    return FORBIDDENToJSONTyped(json, false);
}

export function FORBIDDENToJSONTyped(value?: FORBIDDEN | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


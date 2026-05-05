/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface INVALIDTOKEN
 */
export interface INVALIDTOKEN {
    /**
     * 
     * @type {string}
     * @memberof INVALIDTOKEN
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof INVALIDTOKEN
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the INVALIDTOKEN interface.
 */
export function instanceOfINVALIDTOKEN(value: object): value is INVALIDTOKEN {
    return true;
}

export function INVALIDTOKENFromJSON(json: any): INVALIDTOKEN {
    return INVALIDTOKENFromJSONTyped(json, false);
}

export function INVALIDTOKENFromJSONTyped(json: any, ignoreDiscriminator: boolean): INVALIDTOKEN {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function INVALIDTOKENToJSON(json: any): INVALIDTOKEN {
    return INVALIDTOKENToJSONTyped(json, false);
}

export function INVALIDTOKENToJSONTyped(value?: INVALIDTOKEN | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


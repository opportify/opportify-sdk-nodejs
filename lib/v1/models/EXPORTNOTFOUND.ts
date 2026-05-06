/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface EXPORTNOTFOUND
 */
export interface EXPORTNOTFOUND {
    /**
     * 
     * @type {string}
     * @memberof EXPORTNOTFOUND
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof EXPORTNOTFOUND
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the EXPORTNOTFOUND interface.
 */
export function instanceOfEXPORTNOTFOUND(value: object): value is EXPORTNOTFOUND {
    return true;
}

export function EXPORTNOTFOUNDFromJSON(json: any): EXPORTNOTFOUND {
    return EXPORTNOTFOUNDFromJSONTyped(json, false);
}

export function EXPORTNOTFOUNDFromJSONTyped(json: any, ignoreDiscriminator: boolean): EXPORTNOTFOUND {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function EXPORTNOTFOUNDToJSON(json: any): EXPORTNOTFOUND {
    return EXPORTNOTFOUNDToJSONTyped(json, false);
}

export function EXPORTNOTFOUNDToJSONTyped(value?: EXPORTNOTFOUND | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


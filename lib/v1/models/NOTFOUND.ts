/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NOTFOUND
 */
export interface NOTFOUND {
    /**
     * 
     * @type {string}
     * @memberof NOTFOUND
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof NOTFOUND
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the NOTFOUND interface.
 */
export function instanceOfNOTFOUND(value: object): value is NOTFOUND {
    return true;
}

export function NOTFOUNDFromJSON(json: any): NOTFOUND {
    return NOTFOUNDFromJSONTyped(json, false);
}

export function NOTFOUNDFromJSONTyped(json: any, ignoreDiscriminator: boolean): NOTFOUND {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function NOTFOUNDToJSON(json: any): NOTFOUND {
    return NOTFOUNDToJSONTyped(json, false);
}

export function NOTFOUNDToJSONTyped(value?: NOTFOUND | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


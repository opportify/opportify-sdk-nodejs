/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface INVALIDPLAN
 */
export interface INVALIDPLAN {
    /**
     * 
     * @type {string}
     * @memberof INVALIDPLAN
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof INVALIDPLAN
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the INVALIDPLAN interface.
 */
export function instanceOfINVALIDPLAN(value: object): value is INVALIDPLAN {
    return true;
}

export function INVALIDPLANFromJSON(json: any): INVALIDPLAN {
    return INVALIDPLANFromJSONTyped(json, false);
}

export function INVALIDPLANFromJSONTyped(json: any, ignoreDiscriminator: boolean): INVALIDPLAN {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function INVALIDPLANToJSON(json: any): INVALIDPLAN {
    return INVALIDPLANToJSONTyped(json, false);
}

export function INVALIDPLANToJSONTyped(value?: INVALIDPLAN | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


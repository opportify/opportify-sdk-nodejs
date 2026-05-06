/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface INTERNALERROR
 */
export interface INTERNALERROR {
    /**
     * 
     * @type {string}
     * @memberof INTERNALERROR
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof INTERNALERROR
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the INTERNALERROR interface.
 */
export function instanceOfINTERNALERROR(value: object): value is INTERNALERROR {
    return true;
}

export function INTERNALERRORFromJSON(json: any): INTERNALERROR {
    return INTERNALERRORFromJSONTyped(json, false);
}

export function INTERNALERRORFromJSONTyped(json: any, ignoreDiscriminator: boolean): INTERNALERROR {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function INTERNALERRORToJSON(json: any): INTERNALERROR {
    return INTERNALERRORToJSONTyped(json, false);
}

export function INTERNALERRORToJSONTyped(value?: INTERNALERROR | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


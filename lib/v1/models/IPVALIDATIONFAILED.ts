/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface IPVALIDATIONFAILED
 */
export interface IPVALIDATIONFAILED {
    /**
     * 
     * @type {string}
     * @memberof IPVALIDATIONFAILED
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof IPVALIDATIONFAILED
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the IPVALIDATIONFAILED interface.
 */
export function instanceOfIPVALIDATIONFAILED(value: object): value is IPVALIDATIONFAILED {
    return true;
}

export function IPVALIDATIONFAILEDFromJSON(json: any): IPVALIDATIONFAILED {
    return IPVALIDATIONFAILEDFromJSONTyped(json, false);
}

export function IPVALIDATIONFAILEDFromJSONTyped(json: any, ignoreDiscriminator: boolean): IPVALIDATIONFAILED {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function IPVALIDATIONFAILEDToJSON(json: any): IPVALIDATIONFAILED {
    return IPVALIDATIONFAILEDToJSONTyped(json, false);
}

export function IPVALIDATIONFAILEDToJSONTyped(value?: IPVALIDATIONFAILED | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


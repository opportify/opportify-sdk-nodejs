/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MANIFESTNOTAVAILABLE
 */
export interface MANIFESTNOTAVAILABLE {
    /**
     * 
     * @type {string}
     * @memberof MANIFESTNOTAVAILABLE
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof MANIFESTNOTAVAILABLE
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the MANIFESTNOTAVAILABLE interface.
 */
export function instanceOfMANIFESTNOTAVAILABLE(value: object): value is MANIFESTNOTAVAILABLE {
    return true;
}

export function MANIFESTNOTAVAILABLEFromJSON(json: any): MANIFESTNOTAVAILABLE {
    return MANIFESTNOTAVAILABLEFromJSONTyped(json, false);
}

export function MANIFESTNOTAVAILABLEFromJSONTyped(json: any, ignoreDiscriminator: boolean): MANIFESTNOTAVAILABLE {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function MANIFESTNOTAVAILABLEToJSON(json: any): MANIFESTNOTAVAILABLE {
    return MANIFESTNOTAVAILABLEToJSONTyped(json, false);
}

export function MANIFESTNOTAVAILABLEToJSONTyped(value?: MANIFESTNOTAVAILABLE | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateEmailBatchExport400ResponseOneOf1
 */
export interface CreateEmailBatchExport400ResponseOneOf1 {
    /**
     * 
     * @type {string}
     * @memberof CreateEmailBatchExport400ResponseOneOf1
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEmailBatchExport400ResponseOneOf1
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the CreateEmailBatchExport400ResponseOneOf1 interface.
 */
export function instanceOfCreateEmailBatchExport400ResponseOneOf1(value: object): value is CreateEmailBatchExport400ResponseOneOf1 {
    return true;
}

export function CreateEmailBatchExport400ResponseOneOf1FromJSON(json: any): CreateEmailBatchExport400ResponseOneOf1 {
    return CreateEmailBatchExport400ResponseOneOf1FromJSONTyped(json, false);
}

export function CreateEmailBatchExport400ResponseOneOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEmailBatchExport400ResponseOneOf1 {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function CreateEmailBatchExport400ResponseOneOf1ToJSON(json: any): CreateEmailBatchExport400ResponseOneOf1 {
    return CreateEmailBatchExport400ResponseOneOf1ToJSONTyped(json, false);
}

export function CreateEmailBatchExport400ResponseOneOf1ToJSONTyped(value?: CreateEmailBatchExport400ResponseOneOf1 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


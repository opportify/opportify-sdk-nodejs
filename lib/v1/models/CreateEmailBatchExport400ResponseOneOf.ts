/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateEmailBatchExport400ResponseOneOf
 */
export interface CreateEmailBatchExport400ResponseOneOf {
    /**
     * 
     * @type {string}
     * @memberof CreateEmailBatchExport400ResponseOneOf
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEmailBatchExport400ResponseOneOf
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the CreateEmailBatchExport400ResponseOneOf interface.
 */
export function instanceOfCreateEmailBatchExport400ResponseOneOf(value: object): value is CreateEmailBatchExport400ResponseOneOf {
    return true;
}

export function CreateEmailBatchExport400ResponseOneOfFromJSON(json: any): CreateEmailBatchExport400ResponseOneOf {
    return CreateEmailBatchExport400ResponseOneOfFromJSONTyped(json, false);
}

export function CreateEmailBatchExport400ResponseOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEmailBatchExport400ResponseOneOf {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function CreateEmailBatchExport400ResponseOneOfToJSON(json: any): CreateEmailBatchExport400ResponseOneOf {
    return CreateEmailBatchExport400ResponseOneOfToJSONTyped(json, false);
}

export function CreateEmailBatchExport400ResponseOneOfToJSONTyped(value?: CreateEmailBatchExport400ResponseOneOf | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


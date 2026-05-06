/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateEmailBatchExport403Response
 */
export interface CreateEmailBatchExport403Response {
    /**
     * 
     * @type {string}
     * @memberof CreateEmailBatchExport403Response
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEmailBatchExport403Response
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the CreateEmailBatchExport403Response interface.
 */
export function instanceOfCreateEmailBatchExport403Response(value: object): value is CreateEmailBatchExport403Response {
    return true;
}

export function CreateEmailBatchExport403ResponseFromJSON(json: any): CreateEmailBatchExport403Response {
    return CreateEmailBatchExport403ResponseFromJSONTyped(json, false);
}

export function CreateEmailBatchExport403ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEmailBatchExport403Response {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function CreateEmailBatchExport403ResponseToJSON(json: any): CreateEmailBatchExport403Response {
    return CreateEmailBatchExport403ResponseToJSONTyped(json, false);
}

export function CreateEmailBatchExport403ResponseToJSONTyped(value?: CreateEmailBatchExport403Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


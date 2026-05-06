/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateEmailBatchExport404Response
 */
export interface CreateEmailBatchExport404Response {
    /**
     * 
     * @type {string}
     * @memberof CreateEmailBatchExport404Response
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEmailBatchExport404Response
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the CreateEmailBatchExport404Response interface.
 */
export function instanceOfCreateEmailBatchExport404Response(value: object): value is CreateEmailBatchExport404Response {
    return true;
}

export function CreateEmailBatchExport404ResponseFromJSON(json: any): CreateEmailBatchExport404Response {
    return CreateEmailBatchExport404ResponseFromJSONTyped(json, false);
}

export function CreateEmailBatchExport404ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEmailBatchExport404Response {
    if (json == null) {
        return json;
    }
    return {
        
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function CreateEmailBatchExport404ResponseToJSON(json: any): CreateEmailBatchExport404Response {
    return CreateEmailBatchExport404ResponseToJSONTyped(json, false);
}

export function CreateEmailBatchExport404ResponseToJSONTyped(value?: CreateEmailBatchExport404Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorMessage': value['errorMessage'],
        'errorCode': value['errorCode'],
    };
}


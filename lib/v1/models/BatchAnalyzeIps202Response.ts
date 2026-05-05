/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BatchAnalyzeIps202Response
 */
export interface BatchAnalyzeIps202Response {
    /**
     * Unique identifier for the batch job.
     * @type {string}
     * @memberof BatchAnalyzeIps202Response
     */
    jobId?: string;
    /**
     * Name of the batch job, if provided.
     * @type {string}
     * @memberof BatchAnalyzeIps202Response
     */
    name?: string;
    /**
     * Current status of the batch job. Allowed values: `QUEUED`, `PROCESSING`, `COMPLETED`, `ERROR`. Example: `QUEUED`.
     * @type {string}
     * @memberof BatchAnalyzeIps202Response
     */
    status?: string;
    /**
     * Description of the status, particularly useful when status is ERROR.
     * @type {string}
     * @memberof BatchAnalyzeIps202Response
     */
    statusDescription?: string;
}

/**
 * Check if a given object implements the BatchAnalyzeIps202Response interface.
 */
export function instanceOfBatchAnalyzeIps202Response(value: object): value is BatchAnalyzeIps202Response {
    return true;
}

export function BatchAnalyzeIps202ResponseFromJSON(json: any): BatchAnalyzeIps202Response {
    return BatchAnalyzeIps202ResponseFromJSONTyped(json, false);
}

export function BatchAnalyzeIps202ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAnalyzeIps202Response {
    if (json == null) {
        return json;
    }
    return {
        
        'jobId': json['jobId'] == null ? undefined : json['jobId'],
        'name': json['name'] == null ? undefined : json['name'],
        'status': json['status'] == null ? undefined : json['status'],
        'statusDescription': json['statusDescription'] == null ? undefined : json['statusDescription'],
    };
}

export function BatchAnalyzeIps202ResponseToJSON(json: any): BatchAnalyzeIps202Response {
    return BatchAnalyzeIps202ResponseToJSONTyped(json, false);
}

export function BatchAnalyzeIps202ResponseToJSONTyped(value?: BatchAnalyzeIps202Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'jobId': value['jobId'],
        'name': value['name'],
        'status': value['status'],
        'statusDescription': value['statusDescription'],
    };
}


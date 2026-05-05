/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BatchAnalyzeEmails202Response
 */
export interface BatchAnalyzeEmails202Response {
    /**
     * Unique identifier for the batch job.
     * @type {string}
     * @memberof BatchAnalyzeEmails202Response
     */
    jobId?: string;
    /**
     * Name of the batch job, if provided.
     * @type {string}
     * @memberof BatchAnalyzeEmails202Response
     */
    name?: string;
    /**
     * Current status of the batch job. Allowed values: `QUEUED`, `PROCESSING`, `COMPLETED`, `ERROR`. Example: `QUEUED`.
     * @type {string}
     * @memberof BatchAnalyzeEmails202Response
     */
    status?: string;
    /**
     * Description of the status, particularly useful when status is ERROR.
     * @type {string}
     * @memberof BatchAnalyzeEmails202Response
     */
    statusDescription?: string;
}

/**
 * Check if a given object implements the BatchAnalyzeEmails202Response interface.
 */
export function instanceOfBatchAnalyzeEmails202Response(value: object): value is BatchAnalyzeEmails202Response {
    return true;
}

export function BatchAnalyzeEmails202ResponseFromJSON(json: any): BatchAnalyzeEmails202Response {
    return BatchAnalyzeEmails202ResponseFromJSONTyped(json, false);
}

export function BatchAnalyzeEmails202ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAnalyzeEmails202Response {
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

export function BatchAnalyzeEmails202ResponseToJSON(json: any): BatchAnalyzeEmails202Response {
    return BatchAnalyzeEmails202ResponseToJSONTyped(json, false);
}

export function BatchAnalyzeEmails202ResponseToJSONTyped(value?: BatchAnalyzeEmails202Response | null, ignoreDiscriminator: boolean = false): any {
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


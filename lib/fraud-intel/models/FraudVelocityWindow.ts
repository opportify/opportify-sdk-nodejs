/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * Submission counts for a single identifier type over four sliding time windows.
 * @export
 * @interface FraudVelocityWindow
 */
export interface FraudVelocityWindow {
    /**
     * Number of submissions seen for this identifier in the last 60 seconds.
     * @type {number}
     * @memberof FraudVelocityWindow
     */
    last60s?: number;
    /**
     * Number of submissions seen for this identifier in the last 5 minutes.
     * @type {number}
     * @memberof FraudVelocityWindow
     */
    last300s?: number;
    /**
     * Number of submissions seen for this identifier in the last hour.
     * @type {number}
     * @memberof FraudVelocityWindow
     */
    last3600s?: number;
    /**
     * Number of submissions seen for this identifier in the last 24 hours.
     * @type {number}
     * @memberof FraudVelocityWindow
     */
    last86400s?: number;
}

/**
 * Check if a given object implements the FraudVelocityWindow interface.
 */
export function instanceOfFraudVelocityWindow(value: object): value is FraudVelocityWindow {
    return true;
}

export function FraudVelocityWindowFromJSON(json: any): FraudVelocityWindow {
    return FraudVelocityWindowFromJSONTyped(json, false);
}

export function FraudVelocityWindowFromJSONTyped(json: any, ignoreDiscriminator: boolean): FraudVelocityWindow {
    if (json == null) {
        return json;
    }
    return {
        
        'last60s': json['last60s'] == null ? undefined : json['last60s'],
        'last300s': json['last300s'] == null ? undefined : json['last300s'],
        'last3600s': json['last3600s'] == null ? undefined : json['last3600s'],
        'last86400s': json['last86400s'] == null ? undefined : json['last86400s'],
    };
}

export function FraudVelocityWindowToJSON(json: any): FraudVelocityWindow {
    return FraudVelocityWindowToJSONTyped(json, false);
}

export function FraudVelocityWindowToJSONTyped(value?: FraudVelocityWindow | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'last60s': value['last60s'],
        'last300s': value['last300s'],
        'last3600s': value['last3600s'],
        'last86400s': value['last86400s'],
    };
}


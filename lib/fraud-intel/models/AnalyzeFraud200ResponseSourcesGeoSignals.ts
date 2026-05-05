/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * ISO 3166-1 alpha-2 country codes from each geographic signal. `null` when the signal is unavailable.
 * @export
 * @interface AnalyzeFraud200ResponseSourcesGeoSignals
 */
export interface AnalyzeFraud200ResponseSourcesGeoSignals {
    /**
     * Country from IP geolocation.
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesGeoSignals
     */
    ipCountry?: string | null;
    /**
     * Country from phone number registration data.
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesGeoSignals
     */
    phoneCountry?: string | null;
    /**
     * Country inferred from email domain registration.
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesGeoSignals
     */
    emailDomainCountry?: string | null;
    /**
     * Country from the session source IP (behavioral data).
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesGeoSignals
     */
    sessionCountry?: string | null;
    /**
     * Country from the `country` request field (ISO 3166-1 alpha-2).
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesGeoSignals
     */
    declaredCountry?: string | null;
}

/**
 * Check if a given object implements the AnalyzeFraud200ResponseSourcesGeoSignals interface.
 */
export function instanceOfAnalyzeFraud200ResponseSourcesGeoSignals(value: object): value is AnalyzeFraud200ResponseSourcesGeoSignals {
    return true;
}

export function AnalyzeFraud200ResponseSourcesGeoSignalsFromJSON(json: any): AnalyzeFraud200ResponseSourcesGeoSignals {
    return AnalyzeFraud200ResponseSourcesGeoSignalsFromJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseSourcesGeoSignalsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeFraud200ResponseSourcesGeoSignals {
    if (json == null) {
        return json;
    }
    return {
        
        'ipCountry': json['ipCountry'] == null ? undefined : json['ipCountry'],
        'phoneCountry': json['phoneCountry'] == null ? undefined : json['phoneCountry'],
        'emailDomainCountry': json['emailDomainCountry'] == null ? undefined : json['emailDomainCountry'],
        'sessionCountry': json['sessionCountry'] == null ? undefined : json['sessionCountry'],
        'declaredCountry': json['declaredCountry'] == null ? undefined : json['declaredCountry'],
    };
}

export function AnalyzeFraud200ResponseSourcesGeoSignalsToJSON(json: any): AnalyzeFraud200ResponseSourcesGeoSignals {
    return AnalyzeFraud200ResponseSourcesGeoSignalsToJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseSourcesGeoSignalsToJSONTyped(value?: AnalyzeFraud200ResponseSourcesGeoSignals | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ipCountry': value['ipCountry'],
        'phoneCountry': value['phoneCountry'],
        'emailDomainCountry': value['emailDomainCountry'],
        'sessionCountry': value['sessionCountry'],
        'declaredCountry': value['declaredCountry'],
    };
}


/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * Geolocation details are derived by analyzing the provided IP address using data aggregated from a wide range of sources, both official and unofficial (such as user-generated data, open-source, or…
 * @export
 * @interface Geo
 */
export interface Geo {
    /**
     * Name of the continent. Normalized as "Title Case".
     * @type {string}
     * @memberof Geo
     */
    continent?: string;
    /**
     * ISO 3166-1 alpha-2 country code.
     * @type {string}
     * @memberof Geo
     */
    countryCode?: string;
    /**
     * Full name of the country. Normalized as "Title Case".
     * @type {string}
     * @memberof Geo
     */
    countryName?: string;
    /**
     * ISO 3166-1 English short version. Normalized as "Title Case".
     * @type {string}
     * @memberof Geo
     */
    countryShortName?: string;
    /**
     * Name of the city. Normalized as "Title Case".
     * @type {string}
     * @memberof Geo
     */
    city?: string;
    /**
     * ISO 4217 currency code.
     * @type {string}
     * @memberof Geo
     */
    currencyCode?: string;
    /**
     * Top-level domain (TLD) for the country. 63 characters limit. IANA / ICANN defined.
     * @type {string}
     * @memberof Geo
     */
    domainExtension?: string;
    /**
     * List of languages spoken in the country separated by commas. (BCP 47 (Best Current Practice 47))
     * @type {string}
     * @memberof Geo
     */
    languages?: string;
    /**
     * Latitude coordinate.
     * @type {number}
     * @memberof Geo
     */
    latitude?: number;
    /**
     * Longitude coordinate.
     * @type {number}
     * @memberof Geo
     */
    longitude?: number;
    /**
     * Postal code. Normalized to all capital letters when applicable.
     * @type {string}
     * @memberof Geo
     */
    postalCode?: string;
    /**
     * International dialing code.
     * @type {string}
     * @memberof Geo
     */
    phoneIntCode?: string;
    /**
     * Name of the region, province, or state. Normalized as "Title Case".
     * @type {string}
     * @memberof Geo
     */
    region?: string;
    /**
     * Timezone in IANA format.
     * @type {string}
     * @memberof Geo
     */
    timezone?: string;
}

/**
 * Check if a given object implements the Geo interface.
 */
export function instanceOfGeo(value: object): value is Geo {
    return true;
}

export function GeoFromJSON(json: any): Geo {
    return GeoFromJSONTyped(json, false);
}

export function GeoFromJSONTyped(json: any, ignoreDiscriminator: boolean): Geo {
    if (json == null) {
        return json;
    }
    return {
        
        'continent': json['continent'] == null ? undefined : json['continent'],
        'countryCode': json['countryCode'] == null ? undefined : json['countryCode'],
        'countryName': json['countryName'] == null ? undefined : json['countryName'],
        'countryShortName': json['countryShortName'] == null ? undefined : json['countryShortName'],
        'city': json['city'] == null ? undefined : json['city'],
        'currencyCode': json['currencyCode'] == null ? undefined : json['currencyCode'],
        'domainExtension': json['domainExtension'] == null ? undefined : json['domainExtension'],
        'languages': json['languages'] == null ? undefined : json['languages'],
        'latitude': json['latitude'] == null ? undefined : json['latitude'],
        'longitude': json['longitude'] == null ? undefined : json['longitude'],
        'postalCode': json['postalCode'] == null ? undefined : json['postalCode'],
        'phoneIntCode': json['phoneIntCode'] == null ? undefined : json['phoneIntCode'],
        'region': json['region'] == null ? undefined : json['region'],
        'timezone': json['timezone'] == null ? undefined : json['timezone'],
    };
}

export function GeoToJSON(json: any): Geo {
    return GeoToJSONTyped(json, false);
}

export function GeoToJSONTyped(value?: Geo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'continent': value['continent'],
        'countryCode': value['countryCode'],
        'countryName': value['countryName'],
        'countryShortName': value['countryShortName'],
        'city': value['city'],
        'currencyCode': value['currencyCode'],
        'domainExtension': value['domainExtension'],
        'languages': value['languages'],
        'latitude': value['latitude'],
        'longitude': value['longitude'],
        'postalCode': value['postalCode'],
        'phoneIntCode': value['phoneIntCode'],
        'region': value['region'],
        'timezone': value['timezone'],
    };
}


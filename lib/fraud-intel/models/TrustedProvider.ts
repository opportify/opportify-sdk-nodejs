/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * Details of trusted providers for an IP address.
 * @export
 * @interface TrustedProvider
 */
export interface TrustedProvider {
    /**
     * Indicates if the IP belongs to a trusted provider.
     * @type {boolean}
     * @memberof TrustedProvider
     */
    isKnownProvider: boolean;
    /**
     * Name of the trusted provider.
     * @type {string}
     * @memberof TrustedProvider
     */
    provider?: string;
    /**
     * Type of the trusted provider.
     * @type {string}
     * @memberof TrustedProvider
     */
    providerType?: string;
    /**
     * Provider a short description.
     * @type {string}
     * @memberof TrustedProvider
     */
    description?: string;
}

/**
 * Check if a given object implements the TrustedProvider interface.
 */
export function instanceOfTrustedProvider(value: object): value is TrustedProvider {
    if (!('isKnownProvider' in value) || value['isKnownProvider'] === undefined) return false;
    return true;
}

export function TrustedProviderFromJSON(json: any): TrustedProvider {
    return TrustedProviderFromJSONTyped(json, false);
}

export function TrustedProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrustedProvider {
    if (json == null) {
        return json;
    }
    return {
        
        'isKnownProvider': json['isKnownProvider'],
        'provider': json['provider'] == null ? undefined : json['provider'],
        'providerType': json['providerType'] == null ? undefined : json['providerType'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function TrustedProviderToJSON(json: any): TrustedProvider {
    return TrustedProviderToJSONTyped(json, false);
}

export function TrustedProviderToJSONTyped(value?: TrustedProvider | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'isKnownProvider': value['isKnownProvider'],
        'provider': value['provider'],
        'providerType': value['providerType'],
        'description': value['description'],
    };
}


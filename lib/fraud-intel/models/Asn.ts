/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * Autonomous System Number details.
 * @export
 * @interface Asn
 */
export interface Asn {
    /**
     * ASN identifier.
     * @type {string}
     * @memberof Asn
     */
    asnId?: string;
    /**
     * ASN name.
     * @type {string}
     * @memberof Asn
     */
    asName?: string;
    /**
     * ASN description. It might return different values based on the data source. Some provide ownership, address, others provide a more abstract description. Our system tries to sanitize removing visual…
     * @type {Array<string>}
     * @memberof Asn
     */
    descr?: Array<string>;
    /**
     * Previously sanitized and validated contact email addresses always in lower case.
     * @type {Array<string>}
     * @memberof Asn
     */
    email?: Array<string>;
}

/**
 * Check if a given object implements the Asn interface.
 */
export function instanceOfAsn(value: object): value is Asn {
    return true;
}

export function AsnFromJSON(json: any): Asn {
    return AsnFromJSONTyped(json, false);
}

export function AsnFromJSONTyped(json: any, ignoreDiscriminator: boolean): Asn {
    if (json == null) {
        return json;
    }
    return {
        
        'asnId': json['asnId'] == null ? undefined : json['asnId'],
        'asName': json['asName'] == null ? undefined : json['asName'],
        'descr': json['descr'] == null ? undefined : json['descr'],
        'email': json['email'] == null ? undefined : json['email'],
    };
}

export function AsnToJSON(json: any): Asn {
    return AsnToJSONTyped(json, false);
}

export function AsnToJSONTyped(value?: Asn | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'asnId': value['asnId'],
        'asName': value['asName'],
        'descr': value['descr'],
        'email': value['email'],
    };
}


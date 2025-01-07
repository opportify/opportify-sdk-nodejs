/* tslint:disable */
/* eslint-disable */
/**
 * Opportify Insights API
 * ## Overview  The **Opportify Insights API** provides access to a powerful and up-to-date platform. With advanced data warehousing and AI-driven capabilities, this API is designed to empower your business to make informed, data-driven decisions and effectively assess potential risks.  ### Base URL Use the following base URL for all API requests:  ```plaintext https://api.opportify.ai/insights/v1/<service>/<endpoint> ```  ### Features - [**Email Insights:**](/docs/api/api-reference/email-insights)   - Validate email syntax.   - Identify email types (free, disposable, corporate or unknown).   - Real time verifications:     - Reachable: Confirms if the email domain has valid MX DNS records using DNS lookup.     - Deliverable: Simulates an SMTP handshake to check if the email address exists and is deliverable.     - Catch-All: Detects if the domain accepts all emails (catch-all configuration).   - Intelligent Error Correction: Automatically corrects well-known misspelled email addresses.   - Risk Report: Provides an AI-driven normalized score (200-1000) to evaluate email risk, using predefined thresholds.      [Access Documentation >>](/docs/api/api-reference/email-insights)  - [**IP Insights:**](/docs/api/api-reference/ip-insights)   - Connection types: Detects connection types such as `wired`, `mobile`, `enterprise`, `satellite`, `VPN`, `cloud-provider`, `open-proxy`, or `Tor`.   - Geo location: Delivers detailed insights such as country, city, timezone, language preferences, and additional location-based information to enhance regional understanding.   - WHOIS: Provides main details including RIR, ASN, organization, and abuse/admin/technical contacts.   - Trusted Provider Recognition: Identifies if the IP is part of a known trusted provider (e.g., ZTNA - Zero Trust Network Access).   - Blocklist Reports: Retrieves up-to-date blocklist statuses, active reports, and the latest detections.   - Risk Report: Delivers an AI-driven normalized score (200-1000) to evaluate IP risk, supported by predefined thresholds.    [Access Documentation >>](/docs/api/api-reference/ip-insights)  ### Authentication & Security - **API Key:** Access to the API requires an API key, which must be included in the request headers. Businesses can generate unlimited API keys directly from their account, offering flexibility and ease of use.  - **ACL Rules:** Enhance security with Access Control Lists (ACL), allowing you to restrict API access from specific IP addresses or ranges. This feature provides an additional layer of protection by ensuring only authorized IPs can interact with the API. - **No Query Parameters:** As a precautionary measure, our API avoids the use of query parameters for all operations, including authentication and handling Personally Identifiable Information (PII). This approach minimizes security risks by preventing sensitive data from being exposed in access logs, browser history, cached URLs, debugging tools, or inadvertently shared URLs. All sensitive information is securely transmitted through headers or the request body. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Organization } from './Organization';
import {
    OrganizationFromJSON,
    OrganizationFromJSONTyped,
    OrganizationToJSON,
    OrganizationToJSONTyped,
} from './Organization';
import type { AbuseContact } from './AbuseContact';
import {
    AbuseContactFromJSON,
    AbuseContactFromJSONTyped,
    AbuseContactToJSON,
    AbuseContactToJSONTyped,
} from './AbuseContact';
import type { AdminContact } from './AdminContact';
import {
    AdminContactFromJSON,
    AdminContactFromJSONTyped,
    AdminContactToJSON,
    AdminContactToJSONTyped,
} from './AdminContact';
import type { Asn } from './Asn';
import {
    AsnFromJSON,
    AsnFromJSONTyped,
    AsnToJSON,
    AsnToJSONTyped,
} from './Asn';
import type { TechContact } from './TechContact';
import {
    TechContactFromJSON,
    TechContactFromJSONTyped,
    TechContactToJSON,
    TechContactToJSONTyped,
} from './TechContact';

/**
 * ### WHOIS Details
 * This object provides sanitized and normalized WHOIS information for an IP address, including details about the Regional Internet Registry (RIR), Autonomous System Number (ASN), organization, and contact information.
 * 
 * ---
 * 
 * > **IMPORTANT:** 
 * > While the WHOIS data we provide are publicly available and can be accessed through any Regional Internet Registry (RIR) by anyone, we prioritize data privacy. As such, details for address, phone number, and email are **not included in the free plan**. To access this information, you need to subscribe to a paid plan and comply with additional data privacy agreements.
 * 
 * ---
 * 
 * #### Key Features:
 * - **RIR Details**: Identify the Regional Internet Registry managing the IP address.
 * - **ASN Information**: Obtain the Autonomous System Number details, including the ASN identifier, name, and description.
 * - **Organization Data**: Retrieve organization details, such as the ID, name, type, description, address, country, and contact information.
 * - **Contact Information**: Access contact details for abuse, admin, and tech issues, including the contact ID, type, name, address, phone, fax, and email.
 * 
 * ---
 * 
 * ### Response Elements
 * 
 * @export
 * @interface Whois
 */
export interface Whois {
    /**
     * Regional Internet Registry managing the IP.
     * @type {string}
     * @memberof Whois
     */
    rir?: string;
    /**
     * 
     * @type {Asn}
     * @memberof Whois
     */
    asn?: Asn;
    /**
     * 
     * @type {Organization}
     * @memberof Whois
     */
    organization?: Organization;
    /**
     * 
     * @type {AbuseContact}
     * @memberof Whois
     */
    abuseContact?: AbuseContact;
    /**
     * 
     * @type {AdminContact}
     * @memberof Whois
     */
    adminContact?: AdminContact;
    /**
     * 
     * @type {TechContact}
     * @memberof Whois
     */
    techContact?: TechContact;
}

/**
 * Check if a given object implements the Whois interface.
 */
export function instanceOfWhois(value: object): value is Whois {
    return true;
}

export function WhoisFromJSON(json: any): Whois {
    return WhoisFromJSONTyped(json, false);
}

export function WhoisFromJSONTyped(json: any, ignoreDiscriminator: boolean): Whois {
    if (json == null) {
        return json;
    }
    return {
        
        'rir': json['rir'] == null ? undefined : json['rir'],
        'asn': json['asn'] == null ? undefined : AsnFromJSON(json['asn']),
        'organization': json['organization'] == null ? undefined : OrganizationFromJSON(json['organization']),
        'abuseContact': json['abuseContact'] == null ? undefined : AbuseContactFromJSON(json['abuseContact']),
        'adminContact': json['adminContact'] == null ? undefined : AdminContactFromJSON(json['adminContact']),
        'techContact': json['techContact'] == null ? undefined : TechContactFromJSON(json['techContact']),
    };
}

export function WhoisToJSON(json: any): Whois {
    return WhoisToJSONTyped(json, false);
}

export function WhoisToJSONTyped(value?: Whois | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'rir': value['rir'],
        'asn': AsnToJSON(value['asn']),
        'organization': OrganizationToJSON(value['organization']),
        'abuseContact': AbuseContactToJSON(value['abuseContact']),
        'adminContact': AdminContactToJSON(value['adminContact']),
        'techContact': TechContactToJSON(value['techContact']),
    };
}


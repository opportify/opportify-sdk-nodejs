/* tslint:disable */
/* eslint-disable */
/**
 * Opportify Insights API
 * ## Overview  The **Opportify Insights API** provides access to a powerful and up-to-date platform. With advanced data warehousing and AI-driven capabilities, this API is designed to empower your business to make informed, data-driven decisions and effectively assess potential risks.  ### Base URL Use the following base URL for all API requests:  ```plaintext https://api.opportify.ai/insights/v1/<service>/<endpoint> ```  ### Features - [**Email Insights:**](/docs/api/api-reference/email-insights)   - Validate email syntax.   - Identify email types (free, disposable, private or unknown).   - Real time verifications:     - Reachable: Confirms if the email domain has valid MX DNS records using DNS lookup.     - Deliverable: Simulates an SMTP handshake to check if the email address exists and is deliverable.     - Catch-All: Detects if the domain accepts all emails (catch-all configuration).   - Intelligent Error Correction: Automatically corrects well-known misspelled email addresses.   - Risk Report: Provides an AI-driven normalized score (200-1000) to evaluate email risk, using predefined thresholds.      [Access Documentation >>](/docs/api/api-reference/email-insights)  - [**IP Insights:**](/docs/api/api-reference/ip-insights)   - Connection types: Detects connection types such as `wired`, `mobile`, `enterprise`, `satellite`, `VPN`, `cloud-provider`, `open-proxy`, or `Tor`.   - Geo location: Delivers detailed insights such as country, city, timezone, language preferences, and additional location-based information to enhance regional understanding.   - WHOIS: Provides main details including RIR, ASN, organization, and abuse/admin/technical contacts.   - Trusted Provider Recognition: Identifies if the IP is part of a known trusted provider (e.g., ZTNA - Zero Trust Network Access).   - Blocklist Reports: Retrieves up-to-date blocklist statuses, active reports, and the latest detections.   - Risk Report: Delivers an AI-driven normalized score (200-1000) to evaluate IP risk, supported by predefined thresholds.    [Access Documentation >>](/docs/api/api-reference/ip-insights)  ### Authentication & Security - **API Key:** Access to the API requires an API key, which must be included in the request headers. Businesses can generate unlimited API keys directly from their account, offering flexibility and ease of use.  - **ACL Rules:** Enhance security with Access Control Lists (ACL), allowing you to restrict API access from specific IP addresses or ranges. This feature provides an additional layer of protection by ensuring only authorized IPs can interact with the API. - **No Query Parameters:** As a precautionary measure, our API avoids the use of query parameters for all operations, including authentication and handling Personally Identifiable Information (PII). This approach minimizes security risks by preventing sensitive data from being exposed in access logs, browser history, cached URLs, debugging tools, or inadvertently shared URLs. All sensitive information is securely transmitted through headers or the request body. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Organization details for an IP address.
 * @export
 * @interface Organization
 */
export interface Organization {
    /**
     * Organization ID.
     * @type {string}
     * @memberof Organization
     */
    orgId?: string;
    /**
     * Organization name.
     * @type {string}
     * @memberof Organization
     */
    orgName?: string;
    /**
     * Organization type.
     * @type {string}
     * @memberof Organization
     */
    orgType?: string;
    /**
     * Organization description. It might return different values based on the data source. Some provide ownership, address, others provide a more abstract description. Our system tries to sanitize removing visual blocks special characters (+++, ---, ...).
     * @type {Array<string>}
     * @memberof Organization
     */
    descr?: Array<string>;
    /**
     * Organization address details. No standard address format is guaranteed.
     * @type {Array<string>}
     * @memberof Organization
     */
    address?: Array<string>;
    /**
     * Country code of the organization with 2 digits. (ISO 3166-1 alpha-2)
     * @type {string}
     * @memberof Organization
     */
    country?: string;
    /**
     * Contact phone numbers.
     * @type {Array<string>}
     * @memberof Organization
     */
    phone?: Array<string>;
    /**
     * Contact fax numbers.
     * @type {Array<string>}
     * @memberof Organization
     */
    fax?: Array<string>;
    /**
     * Previously sanitized and validated contact email addresses always in lower case.
     * @type {Array<string>}
     * @memberof Organization
     */
    email?: Array<string>;
}

/**
 * Check if a given object implements the Organization interface.
 */
export function instanceOfOrganization(value: object): value is Organization {
    return true;
}

export function OrganizationFromJSON(json: any): Organization {
    return OrganizationFromJSONTyped(json, false);
}

export function OrganizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Organization {
    if (json == null) {
        return json;
    }
    return {
        
        'orgId': json['orgId'] == null ? undefined : json['orgId'],
        'orgName': json['orgName'] == null ? undefined : json['orgName'],
        'orgType': json['orgType'] == null ? undefined : json['orgType'],
        'descr': json['descr'] == null ? undefined : json['descr'],
        'address': json['address'] == null ? undefined : json['address'],
        'country': json['country'] == null ? undefined : json['country'],
        'phone': json['phone'] == null ? undefined : json['phone'],
        'fax': json['fax'] == null ? undefined : json['fax'],
        'email': json['email'] == null ? undefined : json['email'],
    };
}

export function OrganizationToJSON(json: any): Organization {
    return OrganizationToJSONTyped(json, false);
}

export function OrganizationToJSONTyped(value?: Organization | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'orgId': value['orgId'],
        'orgName': value['orgName'],
        'orgType': value['orgType'],
        'descr': value['descr'],
        'address': value['address'],
        'country': value['country'],
        'phone': value['phone'],
        'fax': value['fax'],
        'email': value['email'],
    };
}


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
 * ### Block Listed Details
 * 
 * The `BlockListed` object provides detailed information about whether an IP address is listed in known blocklists and related data. 
 * 
 * ---
 * 
 * #### Key Highlights:
 * - **Continuous Monitoring**: We constantly monitor and update blocklist sources to ensure the information is accurate and reflects the latest active reports.
 * - **Expanding Coverage**: Our system incorporates a wide range of trusted sources, with continuous efforts to onboard additional blocklist data providers.
 * 
 * ---
 * 
 * ### Response Elements
 * 
 * @export
 * @interface BlockListed
 */
export interface BlockListed {
    /**
     * Indicates if the IP is blocklisted in some of the known blocklist sources.
     * @type {boolean}
     * @memberof BlockListed
     */
    isBlockListed: boolean;
    /**
     * Number of blocklist sources.
     * @type {number}
     * @memberof BlockListed
     */
    sources: number;
    /**
     * Number of blocklist active reports for the given IP address. We constantly monitor and update this value as new reports are detected or resolved.
     * @type {number}
     * @memberof BlockListed
     */
    activeReports: number;
    /**
     * Date and time of the last blocklist detection. ISO 8601 standard.
     * @type {Date}
     * @memberof BlockListed
     */
    lastDetected?: Date;
}

/**
 * Check if a given object implements the BlockListed interface.
 */
export function instanceOfBlockListed(value: object): value is BlockListed {
    if (!('isBlockListed' in value) || value['isBlockListed'] === undefined) return false;
    if (!('sources' in value) || value['sources'] === undefined) return false;
    if (!('activeReports' in value) || value['activeReports'] === undefined) return false;
    return true;
}

export function BlockListedFromJSON(json: any): BlockListed {
    return BlockListedFromJSONTyped(json, false);
}

export function BlockListedFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockListed {
    if (json == null) {
        return json;
    }
    return {
        
        'isBlockListed': json['isBlockListed'],
        'sources': json['sources'],
        'activeReports': json['activeReports'],
        'lastDetected': json['lastDetected'] == null ? undefined : (new Date(json['lastDetected'])),
    };
}

export function BlockListedToJSON(json: any): BlockListed {
    return BlockListedToJSONTyped(json, false);
}

export function BlockListedToJSONTyped(value?: BlockListed | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'isBlockListed': value['isBlockListed'],
        'sources': value['sources'],
        'activeReports': value['activeReports'],
        'lastDetected': value['lastDetected'] == null ? undefined : ((value['lastDetected']).toISOString()),
    };
}


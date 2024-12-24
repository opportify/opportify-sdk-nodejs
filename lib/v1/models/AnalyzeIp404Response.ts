/* tslint:disable */
/* eslint-disable */
/**
 * Opportify Insights API
 * ## Overview  The **Opportify Insights API** provides access to a powerful and up-to-date platform. With advanced data warehousing and AI-driven capabilities, this API is designed to empower your business to make informed, data-driven decisions and effectively assess potential risks.  ### Base URL Use the following base URL for all API requests:  ```plaintext https://api.opportify.ai/insights/v1/<service>/<endpoint> ```  ### Features - [**Email Insights:**](/docs/api-reference/email-insights)   - Validate email syntax.   - Identify email types (free, disposable, corporate or unknown).   - Real time verifications:     - Reachable: Confirms if the email domain has valid MX DNS records using DNS lookup.     - Deliverable: Simulates an SMTP handshake to check if the email address exists and is deliverable.     - Catch-All: Detects if the domain accepts all emails (catch-all configuration).   - Intelligent Error Correction: Automatically corrects well-known misspelled email addresses.   - Risk Report: Provides an AI-driven normalized score (200-1000) to evaluate email risk, using predefined thresholds.      [Access Documentation >>](/docs/api-reference/email-insights)  - [**IP Insights:**](/docs/api-reference/ip-insights)   - Connection types: Detects connection types such as `wired`, `mobile`, `enterprise`, `satellite`, `VPN`, `cloud-provider`, `open-proxy`, or `Tor`.   - Geo location: Delivers detailed insights such as country, city, timezone, language preferences, and additional location-based information to enhance regional understanding.   - WHOIS: Provides main details including RIR, ASN, organization, and abuse/admin/technical contacts.   - Trusted Provider Recognition: Identifies if the IP is part of a known trusted provider (e.g., ZTNA - Zero Trust Network Access).   - Blocklist Reports: Retrieves up-to-date blocklist statuses, active reports, and the latest detections.   - Risk Report: Delivers an AI-driven normalized score (200-1000) to evaluate IP risk, supported by predefined thresholds.    [Access Documentation >>](/docs/api-reference/ip-insights)  ### Authentication & Security - **API Key:** Access to the API requires an API key, which must be included in the request headers. Businesses can generate unlimited API keys directly from their account, offering flexibility and ease of use.  - **ACL Rules:** Enhance security with Access Control Lists (ACL), allowing you to restrict API access from specific IP addresses or ranges. This feature provides an additional layer of protection by ensuring only authorized IPs can interact with the API. - **No Query Parameters:** As a precautionary measure, our API avoids the use of query parameters for all operations, including authentication and handling Personally Identifiable Information (PII). This approach minimizes security risks by preventing sensitive data from being exposed in access logs, browser history, cached URLs, debugging tools, or inadvertently shared URLs. All sensitive information is securely transmitted through headers or the request body. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { NOTFOUND } from './NOTFOUND';
import {
    NOTFOUNDFromJSON,
    NOTFOUNDFromJSONTyped,
    NOTFOUNDToJSON,
    NOTFOUNDToJSONTyped,
} from './NOTFOUND';

/**
 * 
 * @export
 * @interface AnalyzeIp404Response
 */
export interface AnalyzeIp404Response {
    /**
     * 
     * @type {NOTFOUND}
     * @memberof AnalyzeIp404Response
     */
    error?: NOTFOUND;
}

/**
 * Check if a given object implements the AnalyzeIp404Response interface.
 */
export function instanceOfAnalyzeIp404Response(value: object): value is AnalyzeIp404Response {
    return true;
}

export function AnalyzeIp404ResponseFromJSON(json: any): AnalyzeIp404Response {
    return AnalyzeIp404ResponseFromJSONTyped(json, false);
}

export function AnalyzeIp404ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeIp404Response {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : NOTFOUNDFromJSON(json['error']),
    };
}

export function AnalyzeIp404ResponseToJSON(json: any): AnalyzeIp404Response {
    return AnalyzeIp404ResponseToJSONTyped(json, false);
}

export function AnalyzeIp404ResponseToJSONTyped(value?: AnalyzeIp404Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error': NOTFOUNDToJSON(value['error']),
    };
}


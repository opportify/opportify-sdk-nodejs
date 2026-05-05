/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AnalyzeFraudRequest
 */
export interface AnalyzeFraudRequest {
    /**
     * Email address associated with the submission. At least one of `email` or `userIp` is required.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    email?: string;
    /**
     * Primary phone number in E.164 format.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    phone1?: string;
    /**
     * Secondary or alternate phone number in E.164 format.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    phone2?: string;
    /**
     * IPv4 or IPv6 address of the submitting user. At least one of `email` or `userIp` is required.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    userIp?: string;
    /**
     * First name of the submitter.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    firstName?: string;
    /**
     * Last name of the submitter.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    lastName?: string;
    /**
     * Full name of the submitter when first and last are not split.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    fullName?: string;
    /**
     * Requested username or handle.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    username?: string;
    /**
     * Company or organization name provided by the submitter.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    companyName?: string;
    /**
     * Website URL provided by the submitter.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    website?: string;
    /**
     * Subject line for contact or support forms.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    subject?: string;
    /**
     * Free-text message body of the submission.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    message?: string;
    /**
     * Primary street address.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    address1?: string;
    /**
     * Apartment, suite, or unit number.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    address2?: string;
    /**
     * City of the submitter.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    city?: string;
    /**
     * State, province, or region code.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    region?: string;
    /**
     * ISO 3166-1 alpha-2 country code.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    country?: string;
    /**
     * Postal or ZIP code.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    postalCode?: string;
    /**
     * Hostname of the page where the form was submitted (hostname only — no protocol, path, or port). Required when `opportifyToken` is provided.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    origin?: string;
    /**
     * Semantic type of the form being analyzed. Known values: registration, trial, contactForm, checkout, leadCapture, subscription, support. Custom values are accepted and stored but do not currently…
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    submissionType?: string;
    /**
     * Arbitrary key-value map of additional form fields for advanced content analysis.
     * @type {{ [key: string]: any; }}
     * @memberof AnalyzeFraudRequest
     */
    formData?: { [key: string]: any; };
    /**
     * Token issued by the Opportify frontend SDK. Carries session fingerprint and behavioral signals. Required for session source analysis. This is distinct from the `x-opportify-token` API key header used…
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    opportifyToken?: string;
    /**
     * UUID identifying the specific form configured in the Opportify dashboard.
     * @type {string}
     * @memberof AnalyzeFraudRequest
     */
    opportifyFormUUID?: string;
}

/**
 * Check if a given object implements the AnalyzeFraudRequest interface.
 */
export function instanceOfAnalyzeFraudRequest(value: object): value is AnalyzeFraudRequest {
    return true;
}

export function AnalyzeFraudRequestFromJSON(json: any): AnalyzeFraudRequest {
    return AnalyzeFraudRequestFromJSONTyped(json, false);
}

export function AnalyzeFraudRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeFraudRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'] == null ? undefined : json['email'],
        'phone1': json['phone1'] == null ? undefined : json['phone1'],
        'phone2': json['phone2'] == null ? undefined : json['phone2'],
        'userIp': json['userIp'] == null ? undefined : json['userIp'],
        'firstName': json['firstName'] == null ? undefined : json['firstName'],
        'lastName': json['lastName'] == null ? undefined : json['lastName'],
        'fullName': json['fullName'] == null ? undefined : json['fullName'],
        'username': json['username'] == null ? undefined : json['username'],
        'companyName': json['companyName'] == null ? undefined : json['companyName'],
        'website': json['website'] == null ? undefined : json['website'],
        'subject': json['subject'] == null ? undefined : json['subject'],
        'message': json['message'] == null ? undefined : json['message'],
        'address1': json['address1'] == null ? undefined : json['address1'],
        'address2': json['address2'] == null ? undefined : json['address2'],
        'city': json['city'] == null ? undefined : json['city'],
        'region': json['region'] == null ? undefined : json['region'],
        'country': json['country'] == null ? undefined : json['country'],
        'postalCode': json['postalCode'] == null ? undefined : json['postalCode'],
        'origin': json['origin'] == null ? undefined : json['origin'],
        'submissionType': json['submissionType'] == null ? undefined : json['submissionType'],
        'formData': json['formData'] == null ? undefined : json['formData'],
        'opportifyToken': json['opportifyToken'] == null ? undefined : json['opportifyToken'],
        'opportifyFormUUID': json['opportifyFormUUID'] == null ? undefined : json['opportifyFormUUID'],
    };
}

export function AnalyzeFraudRequestToJSON(json: any): AnalyzeFraudRequest {
    return AnalyzeFraudRequestToJSONTyped(json, false);
}

export function AnalyzeFraudRequestToJSONTyped(value?: AnalyzeFraudRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
        'phone1': value['phone1'],
        'phone2': value['phone2'],
        'userIp': value['userIp'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'fullName': value['fullName'],
        'username': value['username'],
        'companyName': value['companyName'],
        'website': value['website'],
        'subject': value['subject'],
        'message': value['message'],
        'address1': value['address1'],
        'address2': value['address2'],
        'city': value['city'],
        'region': value['region'],
        'country': value['country'],
        'postalCode': value['postalCode'],
        'origin': value['origin'],
        'submissionType': value['submissionType'],
        'formData': value['formData'],
        'opportifyToken': value['opportifyToken'],
        'opportifyFormUUID': value['opportifyFormUUID'],
    };
}


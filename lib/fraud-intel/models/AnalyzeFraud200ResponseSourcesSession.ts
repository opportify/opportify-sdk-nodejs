/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
import type { FraudAnalyzeSessionDetectionsInner } from './FraudAnalyzeSessionDetectionsInner';
import {
    FraudAnalyzeSessionDetectionsInnerFromJSON,
    FraudAnalyzeSessionDetectionsInnerFromJSONTyped,
    FraudAnalyzeSessionDetectionsInnerToJSON,
    FraudAnalyzeSessionDetectionsInnerToJSONTyped,
} from './FraudAnalyzeSessionDetectionsInner';
import type { RiskReport } from './RiskReport';
import {
    RiskReportFromJSON,
    RiskReportFromJSONTyped,
    RiskReportToJSON,
    RiskReportToJSONTyped,
} from './RiskReport';

/**
 * Behavioral session intelligence derived from the Opportify frontend SDK token. Present when `opportifyToken` was supplied.
 * @export
 * @interface AnalyzeFraud200ResponseSourcesSession
 */
export interface AnalyzeFraud200ResponseSourcesSession {
    /**
     * Persistent device fingerprint identifier.
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesSession
     */
    clientId?: string;
    /**
     * Session-scoped identifier for the current browser session.
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesSession
     */
    sessionId?: string;
    /**
     * UUID of the form as stored in the session record (raw field name from the SDK).
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesSession
     */
    fuuid?: string;
    /**
     * Age of the SDK-issued token in seconds at the time of submission.
     * @type {number}
     * @memberof AnalyzeFraud200ResponseSourcesSession
     */
    tokenAge?: number;
    /**
     * Whether the token passed cryptographic verification.
     * @type {boolean}
     * @memberof AnalyzeFraud200ResponseSourcesSession
     */
    tokenValid?: boolean;
    /**
     * Behavioral detection results aggregated from the session and its associated event records, deduplicated by name. Each element is a name/value pair. Example detection names: hpot (honeypot triggered),…
     * @type {Array<FraudAnalyzeSessionDetectionsInner>}
     * @memberof AnalyzeFraud200ResponseSourcesSession
     */
    detections?: Array<FraudAnalyzeSessionDetectionsInner>;
    /**
     * Composite session risk score normalized to 200–1000. Present when behavioral analysis produced a session risk score.
     * @type {number}
     * @memberof AnalyzeFraud200ResponseSourcesSession
     */
    score?: number;
    /**
     * Risk level derived from session behavioral analysis. Allowed values: lowest, low, medium, high, highest.
     * @type {string}
     * @memberof AnalyzeFraud200ResponseSourcesSession
     */
    level?: string;
    /**
     * Factor codes contributing to the session risk score. Values follow the `session:factor-code` format.
     * @type {Array<string>}
     * @memberof AnalyzeFraud200ResponseSourcesSession
     */
    factors?: Array<string>;
    /**
     * Number of telemetry events recorded for this session.
     * @type {number}
     * @memberof AnalyzeFraud200ResponseSourcesSession
     */
    eventCount?: number;
    /**
     * Risk report from session behavioral analysis.
     * @type {RiskReport}
     * @memberof AnalyzeFraud200ResponseSourcesSession
     */
    riskReport?: RiskReport;
}

/**
 * Check if a given object implements the AnalyzeFraud200ResponseSourcesSession interface.
 */
export function instanceOfAnalyzeFraud200ResponseSourcesSession(value: object): value is AnalyzeFraud200ResponseSourcesSession {
    return true;
}

export function AnalyzeFraud200ResponseSourcesSessionFromJSON(json: any): AnalyzeFraud200ResponseSourcesSession {
    return AnalyzeFraud200ResponseSourcesSessionFromJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseSourcesSessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeFraud200ResponseSourcesSession {
    if (json == null) {
        return json;
    }
    return {
        
        'clientId': json['clientId'] == null ? undefined : json['clientId'],
        'sessionId': json['sessionId'] == null ? undefined : json['sessionId'],
        'fuuid': json['fuuid'] == null ? undefined : json['fuuid'],
        'tokenAge': json['tokenAge'] == null ? undefined : json['tokenAge'],
        'tokenValid': json['tokenValid'] == null ? undefined : json['tokenValid'],
        'detections': json['detections'] == null ? undefined : ((json['detections'] as Array<any>).map(FraudAnalyzeSessionDetectionsInnerFromJSON)),
        'score': json['score'] == null ? undefined : json['score'],
        'level': json['level'] == null ? undefined : json['level'],
        'factors': json['factors'] == null ? undefined : json['factors'],
        'eventCount': json['eventCount'] == null ? undefined : json['eventCount'],
        'riskReport': json['riskReport'] == null ? undefined : RiskReportFromJSON(json['riskReport']),
    };
}

export function AnalyzeFraud200ResponseSourcesSessionToJSON(json: any): AnalyzeFraud200ResponseSourcesSession {
    return AnalyzeFraud200ResponseSourcesSessionToJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseSourcesSessionToJSONTyped(value?: AnalyzeFraud200ResponseSourcesSession | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'clientId': value['clientId'],
        'sessionId': value['sessionId'],
        'fuuid': value['fuuid'],
        'tokenAge': value['tokenAge'],
        'tokenValid': value['tokenValid'],
        'detections': value['detections'] == null ? undefined : ((value['detections'] as Array<any>).map(FraudAnalyzeSessionDetectionsInnerToJSON)),
        'score': value['score'],
        'level': value['level'],
        'factors': value['factors'],
        'eventCount': value['eventCount'],
        'riskReport': RiskReportToJSON(value['riskReport']),
    };
}


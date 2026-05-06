/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
import type { RiskReport } from './RiskReport';
import {
    RiskReportFromJSON,
    RiskReportFromJSONTyped,
    RiskReportToJSON,
    RiskReportToJSONTyped,
} from './RiskReport';
import type { FraudAnalyzeContentSection } from './FraudAnalyzeContentSection';
import {
    FraudAnalyzeContentSectionFromJSON,
    FraudAnalyzeContentSectionFromJSONTyped,
    FraudAnalyzeContentSectionToJSON,
    FraudAnalyzeContentSectionToJSONTyped,
} from './FraudAnalyzeContentSection';

/**
 * Content analysis. `null` when none of `firstName`, `lastName`, `fullName`, `username`, `companyName`, `website`, `subject`, or `message` was supplied.
 * @export
 * @interface AnalyzeFraud200ResponseSourcesContent
 */
export interface AnalyzeFraud200ResponseSourcesContent {
    /**
     * Analysis of name fields (firstName, lastName, fullName, username, companyName).
     * @type {FraudAnalyzeContentSection}
     * @memberof AnalyzeFraud200ResponseSourcesContent
     */
    names?: FraudAnalyzeContentSection;
    /**
     * Analysis of subject/title fields.
     * @type {FraudAnalyzeContentSection}
     * @memberof AnalyzeFraud200ResponseSourcesContent
     */
    subject?: FraudAnalyzeContentSection;
    /**
     * Analysis of message/body fields.
     * @type {FraudAnalyzeContentSection}
     * @memberof AnalyzeFraud200ResponseSourcesContent
     */
    message?: FraudAnalyzeContentSection;
    /**
     * Risk report for content signals. Present when content fields were supplied.
     * @type {RiskReport}
     * @memberof AnalyzeFraud200ResponseSourcesContent
     */
    riskReport?: RiskReport;
}

/**
 * Check if a given object implements the AnalyzeFraud200ResponseSourcesContent interface.
 */
export function instanceOfAnalyzeFraud200ResponseSourcesContent(value: object): value is AnalyzeFraud200ResponseSourcesContent {
    return true;
}

export function AnalyzeFraud200ResponseSourcesContentFromJSON(json: any): AnalyzeFraud200ResponseSourcesContent {
    return AnalyzeFraud200ResponseSourcesContentFromJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseSourcesContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeFraud200ResponseSourcesContent {
    if (json == null) {
        return json;
    }
    return {
        
        'names': json['names'] == null ? undefined : FraudAnalyzeContentSectionFromJSON(json['names']),
        'subject': json['subject'] == null ? undefined : FraudAnalyzeContentSectionFromJSON(json['subject']),
        'message': json['message'] == null ? undefined : FraudAnalyzeContentSectionFromJSON(json['message']),
        'riskReport': json['riskReport'] == null ? undefined : RiskReportFromJSON(json['riskReport']),
    };
}

export function AnalyzeFraud200ResponseSourcesContentToJSON(json: any): AnalyzeFraud200ResponseSourcesContent {
    return AnalyzeFraud200ResponseSourcesContentToJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseSourcesContentToJSONTyped(value?: AnalyzeFraud200ResponseSourcesContent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'names': FraudAnalyzeContentSectionToJSON(value['names']),
        'subject': FraudAnalyzeContentSectionToJSON(value['subject']),
        'message': FraudAnalyzeContentSectionToJSON(value['message']),
        'riskReport': RiskReportToJSON(value['riskReport']),
    };
}


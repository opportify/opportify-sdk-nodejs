/* tslint:disable */
/* eslint-disable */

import * as runtime from '../runtime';
import type {
  AnalyzeFraud200Response,
  AnalyzeFraud400Response,
  AnalyzeFraud402Response,
  AnalyzeFraud403Response,
  AnalyzeFraud429Response,
  AnalyzeFraud500Response,
  AnalyzeFraud502Response,
  AnalyzeFraud504Response,
  AnalyzeFraudRequest,
} from '../models/index';
import {
    AnalyzeFraud200ResponseFromJSON,
    AnalyzeFraud200ResponseToJSON,
    AnalyzeFraud400ResponseFromJSON,
    AnalyzeFraud400ResponseToJSON,
    AnalyzeFraud402ResponseFromJSON,
    AnalyzeFraud402ResponseToJSON,
    AnalyzeFraud403ResponseFromJSON,
    AnalyzeFraud403ResponseToJSON,
    AnalyzeFraud429ResponseFromJSON,
    AnalyzeFraud429ResponseToJSON,
    AnalyzeFraud500ResponseFromJSON,
    AnalyzeFraud500ResponseToJSON,
    AnalyzeFraud502ResponseFromJSON,
    AnalyzeFraud502ResponseToJSON,
    AnalyzeFraud504ResponseFromJSON,
    AnalyzeFraud504ResponseToJSON,
    AnalyzeFraudRequestFromJSON,
    AnalyzeFraudRequestToJSON,
} from '../models/index';

export interface AnalyzeFraudOperationRequest {
    analyzeFraudRequest: AnalyzeFraudRequest;
}

/**
 * FraudProtectionApi - interface
 * 
 * @export
 * @interface FraudProtectionApiInterface
 */
export interface FraudProtectionApiInterface {
    /**
     * The **Analyze Fraud** endpoint performs a synchronous, multi-signal fraud risk assessment on a form submission. Send mapped submission fields and receive a complete risk report in a single HTTP call.
     * @summary Analyze
     * @param {AnalyzeFraudRequest} analyzeFraudRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FraudProtectionApiInterface
     */
    analyzeFraudRaw(requestParameters: AnalyzeFraudOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnalyzeFraud200Response>>;

    /**
     * The **Analyze Fraud** endpoint performs a synchronous, multi-signal fraud risk assessment on a form submission. Send mapped submission fields and receive a complete risk report in a single HTTP call.
     * Analyze
     */
    analyzeFraud(requestParameters: AnalyzeFraudOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnalyzeFraud200Response>;

}

/**
 * 
 */
export class FraudProtectionApi extends runtime.BaseAPI implements FraudProtectionApiInterface {

    /**
     * The **Analyze Fraud** endpoint performs a synchronous, multi-signal fraud risk assessment on a form submission. Send mapped submission fields and receive a complete risk report in a single HTTP call.
     * Analyze
     */
    async analyzeFraudRaw(requestParameters: AnalyzeFraudOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnalyzeFraud200Response>> {
        if (requestParameters['analyzeFraudRequest'] == null) {
            throw new runtime.RequiredError(
                'analyzeFraudRequest',
                'Required parameter "analyzeFraudRequest" was null or undefined when calling analyzeFraud().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-opportify-token"] = await this.configuration.apiKey("x-opportify-token"); // opportifyToken authentication
        }

        const urlPath = `/fraud/analyze`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AnalyzeFraudRequestToJSON(requestParameters['analyzeFraudRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnalyzeFraud200ResponseFromJSON(jsonValue));
    }

    /**
     * The **Analyze Fraud** endpoint performs a synchronous, multi-signal fraud risk assessment on a form submission. Send mapped submission fields and receive a complete risk report in a single HTTP call.
     * Analyze
     */
    async analyzeFraud(requestParameters: AnalyzeFraudOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnalyzeFraud200Response> {
        const response = await this.analyzeFraudRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

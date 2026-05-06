/* tslint:disable */
/* eslint-disable */

import { mapValues } from '../runtime';
import type { AnalyzeFraud200ResponseSourcesEmail } from './AnalyzeFraud200ResponseSourcesEmail';
import {
    AnalyzeFraud200ResponseSourcesEmailFromJSON,
    AnalyzeFraud200ResponseSourcesEmailFromJSONTyped,
    AnalyzeFraud200ResponseSourcesEmailToJSON,
    AnalyzeFraud200ResponseSourcesEmailToJSONTyped,
} from './AnalyzeFraud200ResponseSourcesEmail';
import type { AnalyzeFraud200ResponseSourcesGeo } from './AnalyzeFraud200ResponseSourcesGeo';
import {
    AnalyzeFraud200ResponseSourcesGeoFromJSON,
    AnalyzeFraud200ResponseSourcesGeoFromJSONTyped,
    AnalyzeFraud200ResponseSourcesGeoToJSON,
    AnalyzeFraud200ResponseSourcesGeoToJSONTyped,
} from './AnalyzeFraud200ResponseSourcesGeo';
import type { AnalyzeFraud200ResponseSourcesSession } from './AnalyzeFraud200ResponseSourcesSession';
import {
    AnalyzeFraud200ResponseSourcesSessionFromJSON,
    AnalyzeFraud200ResponseSourcesSessionFromJSONTyped,
    AnalyzeFraud200ResponseSourcesSessionToJSON,
    AnalyzeFraud200ResponseSourcesSessionToJSONTyped,
} from './AnalyzeFraud200ResponseSourcesSession';
import type { AnalyzeFraud200ResponseSourcesIp } from './AnalyzeFraud200ResponseSourcesIp';
import {
    AnalyzeFraud200ResponseSourcesIpFromJSON,
    AnalyzeFraud200ResponseSourcesIpFromJSONTyped,
    AnalyzeFraud200ResponseSourcesIpToJSON,
    AnalyzeFraud200ResponseSourcesIpToJSONTyped,
} from './AnalyzeFraud200ResponseSourcesIp';
import type { AnalyzeFraud200ResponseSourcesVelocity } from './AnalyzeFraud200ResponseSourcesVelocity';
import {
    AnalyzeFraud200ResponseSourcesVelocityFromJSON,
    AnalyzeFraud200ResponseSourcesVelocityFromJSONTyped,
    AnalyzeFraud200ResponseSourcesVelocityToJSON,
    AnalyzeFraud200ResponseSourcesVelocityToJSONTyped,
} from './AnalyzeFraud200ResponseSourcesVelocity';
import type { AnalyzeFraud200ResponseSourcesContent } from './AnalyzeFraud200ResponseSourcesContent';
import {
    AnalyzeFraud200ResponseSourcesContentFromJSON,
    AnalyzeFraud200ResponseSourcesContentFromJSONTyped,
    AnalyzeFraud200ResponseSourcesContentToJSON,
    AnalyzeFraud200ResponseSourcesContentToJSONTyped,
} from './AnalyzeFraud200ResponseSourcesContent';

/**
 * Per-signal analysis results. `email` and `ip` are present only when the corresponding input field was supplied and omitted otherwise. `content`, `session`, `velocity`, and `geo` are always present as…
 * @export
 * @interface AnalyzeFraud200ResponseSources
 */
export interface AnalyzeFraud200ResponseSources {
    /**
     * 
     * @type {AnalyzeFraud200ResponseSourcesEmail}
     * @memberof AnalyzeFraud200ResponseSources
     */
    email?: AnalyzeFraud200ResponseSourcesEmail;
    /**
     * 
     * @type {AnalyzeFraud200ResponseSourcesIp}
     * @memberof AnalyzeFraud200ResponseSources
     */
    ip?: AnalyzeFraud200ResponseSourcesIp;
    /**
     * 
     * @type {AnalyzeFraud200ResponseSourcesContent}
     * @memberof AnalyzeFraud200ResponseSources
     */
    content?: AnalyzeFraud200ResponseSourcesContent | null;
    /**
     * 
     * @type {AnalyzeFraud200ResponseSourcesSession}
     * @memberof AnalyzeFraud200ResponseSources
     */
    session?: AnalyzeFraud200ResponseSourcesSession | null;
    /**
     * 
     * @type {AnalyzeFraud200ResponseSourcesVelocity}
     * @memberof AnalyzeFraud200ResponseSources
     */
    velocity?: AnalyzeFraud200ResponseSourcesVelocity | null;
    /**
     * 
     * @type {AnalyzeFraud200ResponseSourcesGeo}
     * @memberof AnalyzeFraud200ResponseSources
     */
    geo?: AnalyzeFraud200ResponseSourcesGeo | null;
}

/**
 * Check if a given object implements the AnalyzeFraud200ResponseSources interface.
 */
export function instanceOfAnalyzeFraud200ResponseSources(value: object): value is AnalyzeFraud200ResponseSources {
    return true;
}

export function AnalyzeFraud200ResponseSourcesFromJSON(json: any): AnalyzeFraud200ResponseSources {
    return AnalyzeFraud200ResponseSourcesFromJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseSourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyzeFraud200ResponseSources {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'] == null ? undefined : AnalyzeFraud200ResponseSourcesEmailFromJSON(json['email']),
        'ip': json['ip'] == null ? undefined : AnalyzeFraud200ResponseSourcesIpFromJSON(json['ip']),
        'content': json['content'] == null ? undefined : AnalyzeFraud200ResponseSourcesContentFromJSON(json['content']),
        'session': json['session'] == null ? undefined : AnalyzeFraud200ResponseSourcesSessionFromJSON(json['session']),
        'velocity': json['velocity'] == null ? undefined : AnalyzeFraud200ResponseSourcesVelocityFromJSON(json['velocity']),
        'geo': json['geo'] == null ? undefined : AnalyzeFraud200ResponseSourcesGeoFromJSON(json['geo']),
    };
}

export function AnalyzeFraud200ResponseSourcesToJSON(json: any): AnalyzeFraud200ResponseSources {
    return AnalyzeFraud200ResponseSourcesToJSONTyped(json, false);
}

export function AnalyzeFraud200ResponseSourcesToJSONTyped(value?: AnalyzeFraud200ResponseSources | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': AnalyzeFraud200ResponseSourcesEmailToJSON(value['email']),
        'ip': AnalyzeFraud200ResponseSourcesIpToJSON(value['ip']),
        'content': AnalyzeFraud200ResponseSourcesContentToJSON(value['content']),
        'session': AnalyzeFraud200ResponseSourcesSessionToJSON(value['session']),
        'velocity': AnalyzeFraud200ResponseSourcesVelocityToJSON(value['velocity']),
        'geo': AnalyzeFraud200ResponseSourcesGeoToJSON(value['geo']),
    };
}


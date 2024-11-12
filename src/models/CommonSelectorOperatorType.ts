/**
 * Sentio API
 * Sentio Open API for query data
 *
 * OpenAPI spec version: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.js';

/**
* - GT: Numeric operators  - CONTAINS: String operators
*/
export enum CommonSelectorOperatorType {
    Eq = 'EQ',
    Neq = 'NEQ',
    Exists = 'EXISTS',
    NotExists = 'NOT_EXISTS',
    Gt = 'GT',
    Gte = 'GTE',
    Lt = 'LT',
    Lte = 'LTE',
    Between = 'BETWEEN',
    NotBetween = 'NOT_BETWEEN',
    Contains = 'CONTAINS',
    NotContains = 'NOT_CONTAINS',
    InCohorts = 'IN_COHORTS',
    NotInCohorts = 'NOT_IN_COHORTS'
}

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

export enum PriceServiceAddCoinByGeckoResponseStatus {
    Ok = 'OK',
    AlreadyExists = 'ALREADY_EXISTS',
    MismatchWithExisting = 'MISMATCH_WITH_EXISTING',
    GeckoNotFound = 'GECKO_NOT_FOUND',
    GeckoReturnNonSupportedChain = 'GECKO_RETURN_NON_SUPPORTED_CHAIN'
}

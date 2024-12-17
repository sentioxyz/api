# .DebugAndSimulationApi

All URIs are relative to *https://app.sentio.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCallTraceByBundle**](DebugAndSimulationApi.md#getCallTraceByBundle) | **GET** /api/v1/solidity/{owner}/{slug}/{chainId}/bundle/{bundleId}/call_trace | Get trace by bundle simulation
[**getCallTraceBySimulation**](DebugAndSimulationApi.md#getCallTraceBySimulation) | **GET** /api/v1/solidity/{owner}/{slug}/{chainId}/simulation/{simulationId}/call_trace | Get trace by simulation
[**getCallTraceByTransaction**](DebugAndSimulationApi.md#getCallTraceByTransaction) | **GET** /api/v1/solidity/{owner}/{slug}/{chainId}/transaction/{txHash}/call_trace | Get trace by transaction
[**getEstimatedGasPrice**](DebugAndSimulationApi.md#getEstimatedGasPrice) | **GET** /api/v1/solidity/estimated_gas_price | Estimate gas price
[**getSimulation**](DebugAndSimulationApi.md#getSimulation) | **GET** /api/v1/solidity/{owner}/{slug}/simulation/{simulationId} | Get simulation by ID
[**getSimulationBundleInProject**](DebugAndSimulationApi.md#getSimulationBundleInProject) | **GET** /api/v1/solidity/{owner}/{slug}/simulation_bundle/{bundleId} | Get bundle simulation by ID
[**getSimulations**](DebugAndSimulationApi.md#getSimulations) | **GET** /api/v1/solidity/{owner}/{slug}/simulation | Get list of simulations
[**searchTransactions**](DebugAndSimulationApi.md#searchTransactions) | **GET** /api/v1/solidity/{owner}/{slug}/search_transactions | Search transactions
[**simulateTransaction**](DebugAndSimulationApi.md#simulateTransaction) | **POST** /api/v1/solidity/{owner}/{slug}/{chainId}/simulation | Run simulation
[**simulateTransactionBundle**](DebugAndSimulationApi.md#simulateTransactionBundle) | **POST** /api/v1/solidity/{owner}/{slug}/{chainId}/simulation_bundle | Run bundle simulation


# **getCallTraceByBundle**
> GoogleApiHttpBody getCallTraceByBundle()


### Example


```typescript
import { createConfiguration, DebugAndSimulationApi } from '';
import type { DebugAndSimulationApiGetCallTraceByBundleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DebugAndSimulationApi(configuration);

const request: DebugAndSimulationApiGetCallTraceByBundleRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  chainId: "chainId_example",
  
  bundleId: "bundleId_example",
    // Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace. (optional)
  withInternalCalls: true,
    // Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution. (optional)
  disableOptimizer: true,
    // Only effective when disableOptimizer=true. (optional)
  ignoreGasCost: true,
};

const data = await apiInstance.getCallTraceByBundle(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **chainId** | [**string**] |  | defaults to undefined
 **bundleId** | [**string**] |  | defaults to undefined
 **withInternalCalls** | [**boolean**] | Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace. | (optional) defaults to undefined
 **disableOptimizer** | [**boolean**] | Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution. | (optional) defaults to undefined
 **ignoreGasCost** | [**boolean**] | Only effective when disableOptimizer&#x3D;true. | (optional) defaults to undefined


### Return type

**GoogleApiHttpBody**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCallTraceBySimulation**
> GoogleApiHttpBody getCallTraceBySimulation()


### Example


```typescript
import { createConfiguration, DebugAndSimulationApi } from '';
import type { DebugAndSimulationApiGetCallTraceBySimulationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DebugAndSimulationApi(configuration);

const request: DebugAndSimulationApiGetCallTraceBySimulationRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  chainId: "chainId_example",
  
  simulationId: "simulationId_example",
    // Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace. (optional)
  withInternalCalls: true,
    // Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution. (optional)
  disableOptimizer: true,
    // Only effective when disableOptimizer=true. (optional)
  ignoreGasCost: true,
};

const data = await apiInstance.getCallTraceBySimulation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **chainId** | [**string**] |  | defaults to undefined
 **simulationId** | [**string**] |  | defaults to undefined
 **withInternalCalls** | [**boolean**] | Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace. | (optional) defaults to undefined
 **disableOptimizer** | [**boolean**] | Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution. | (optional) defaults to undefined
 **ignoreGasCost** | [**boolean**] | Only effective when disableOptimizer&#x3D;true. | (optional) defaults to undefined


### Return type

**GoogleApiHttpBody**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCallTraceByTransaction**
> GoogleApiHttpBody getCallTraceByTransaction()

API to get Sentio call trace. It takes `txId.txHash` and `chainSpec.chainId` arguments, where the first is transaction hash, and the second is the numeric ethereum chain ID.  The results looks very similar to the normal [Ethereum call trace](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png). But we have an additional `startIndex` and `startIndex` on each trace entry even for the LOG, representing the execution order in the trace.  This allows you to build chart that marks the order of fund flow.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png)

### Example


```typescript
import { createConfiguration, DebugAndSimulationApi } from '';
import type { DebugAndSimulationApiGetCallTraceByTransactionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DebugAndSimulationApi(configuration);

const request: DebugAndSimulationApiGetCallTraceByTransactionRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  chainId: "chainId_example",
  
  txHash: "txHash_example",
    // Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace. (optional)
  withInternalCalls: true,
    // Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution. (optional)
  disableOptimizer: true,
    // Only effective when disableOptimizer=true. (optional)
  ignoreGasCost: true,
};

const data = await apiInstance.getCallTraceByTransaction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **chainId** | [**string**] |  | defaults to undefined
 **txHash** | [**string**] |  | defaults to undefined
 **withInternalCalls** | [**boolean**] | Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace. | (optional) defaults to undefined
 **disableOptimizer** | [**boolean**] | Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution. | (optional) defaults to undefined
 **ignoreGasCost** | [**boolean**] | Only effective when disableOptimizer&#x3D;true. | (optional) defaults to undefined


### Return type

**GoogleApiHttpBody**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEstimatedGasPrice**
> SolidityServiceGetEstimatedGasPriceResponse getEstimatedGasPrice()


### Example


```typescript
import { createConfiguration, DebugAndSimulationApi } from '';
import type { DebugAndSimulationApiGetEstimatedGasPriceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DebugAndSimulationApi(configuration);

const request: DebugAndSimulationApiGetEstimatedGasPriceRequest = {
    // Current support chain id: 1 (optional)
  chainId: "chainId_example",
};

const data = await apiInstance.getEstimatedGasPrice(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | [**string**] | Current support chain id: 1 | (optional) defaults to undefined


### Return type

**SolidityServiceGetEstimatedGasPriceResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSimulation**
> SolidityServiceGetSimulationResponse getSimulation()


### Example


```typescript
import { createConfiguration, DebugAndSimulationApi } from '';
import type { DebugAndSimulationApiGetSimulationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DebugAndSimulationApi(configuration);

const request: DebugAndSimulationApiGetSimulationRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  simulationId: "simulationId_example",
};

const data = await apiInstance.getSimulation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **simulationId** | [**string**] |  | defaults to undefined


### Return type

**SolidityServiceGetSimulationResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSimulationBundleInProject**
> SolidityServiceGetSimulationBundleResponse getSimulationBundleInProject()


### Example


```typescript
import { createConfiguration, DebugAndSimulationApi } from '';
import type { DebugAndSimulationApiGetSimulationBundleInProjectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DebugAndSimulationApi(configuration);

const request: DebugAndSimulationApiGetSimulationBundleInProjectRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  bundleId: "bundleId_example",
};

const data = await apiInstance.getSimulationBundleInProject(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **bundleId** | [**string**] |  | defaults to undefined


### Return type

**SolidityServiceGetSimulationBundleResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSimulations**
> SolidityServiceGetSimulationsResponse getSimulations()


### Example


```typescript
import { createConfiguration, DebugAndSimulationApi } from '';
import type { DebugAndSimulationApiGetSimulationsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DebugAndSimulationApi(configuration);

const request: DebugAndSimulationApiGetSimulationsRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  labelContains: "labelContains_example",
  
  page: 1,
  
  pageSize: 1,
};

const data = await apiInstance.getSimulations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **labelContains** | [**string**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **pageSize** | [**number**] |  | (optional) defaults to undefined


### Return type

**SolidityServiceGetSimulationsResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchTransactions**
> TxindexEvmSearchTransactionsResponse searchTransactions()


### Example


```typescript
import { createConfiguration, DebugAndSimulationApi } from '';
import type { DebugAndSimulationApiSearchTransactionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DebugAndSimulationApi(configuration);

const request: DebugAndSimulationApiSearchTransactionsRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  chainId: [
    "chainId_example",
  ],
  
  address: [
    "address_example",
  ],
  
  includeDirect: true,
  
  includeTrace: true,
  
  includeIn: true,
  
  includeOut: true,
  
  startBlock: "startBlock_example",
  
  endBlock: "endBlock_example",
  
  startTimestamp: "startTimestamp_example",
  
  endTimestamp: "endTimestamp_example",
  
  transactionStatus: [
    1,
  ],
  
  methodSignature: "methodSignature_example",
  
  limit: 1,
  
  pageToken: 'YQ==',
};

const data = await apiInstance.searchTransactions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **chainId** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **address** | **Array&lt;string&gt;** |  | (optional) defaults to undefined
 **includeDirect** | [**boolean**] |  | (optional) defaults to undefined
 **includeTrace** | [**boolean**] |  | (optional) defaults to undefined
 **includeIn** | [**boolean**] |  | (optional) defaults to undefined
 **includeOut** | [**boolean**] |  | (optional) defaults to undefined
 **startBlock** | [**string**] |  | (optional) defaults to undefined
 **endBlock** | [**string**] |  | (optional) defaults to undefined
 **startTimestamp** | [**string**] |  | (optional) defaults to undefined
 **endTimestamp** | [**string**] |  | (optional) defaults to undefined
 **transactionStatus** | **Array&lt;number&gt;** |  | (optional) defaults to undefined
 **methodSignature** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **pageToken** | [**string**] |  | (optional) defaults to undefined


### Return type

**TxindexEvmSearchTransactionsResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simulateTransaction**
> SolidityServiceSimulateTransactionResponse simulateTransaction(body)

Create a new transaction simulation. The simulation body should be included in the request body. Your simulations will be saved, and a unique ID for each simulation is included in the response. It will be useful for fetching simulation details.

### Example


```typescript
import { createConfiguration, DebugAndSimulationApi } from '';
import type { DebugAndSimulationApiSimulateTransactionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DebugAndSimulationApi(configuration);

const request: DebugAndSimulationApiSimulateTransactionRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  chainId: "chainId_example",
  
  body: {
    simulation: {
      id: "id_example",
      createAt: "createAt_example",
      bundleId: "bundleId_example",
      networkId: "networkId_example",
      chainId: "chainId_example",
      chainSpec: {
        chainId: "chainId_example",
        forkId: "forkId_example",
      },
      to: "to_example",
      input: "input_example",
      blockNumber: "blockNumber_example",
      transactionIndex: "transactionIndex_example",
      _from: "_from_example",
      gas: "gas_example",
      gasPrice: "gasPrice_example",
      maxFeePerGas: "maxFeePerGas_example",
      maxPriorityFeePerGas: "maxPriorityFeePerGas_example",
      value: "value_example",
      accessList: [
        {
          address: "address_example",
          storageKeys: [
            "storageKeys_example",
          ],
        },
      ],
      originTxHash: "originTxHash_example",
      label: "label_example",
      stateOverrides: {
        "key": {
          state: {
            "key": "key_example",
          },
          balance: "balance_example",
          code: "code_example",
        },
      },
      sourceOverrides: {
        "key": "key_example",
      },
      blockOverride: {
        blockNumber: "blockNumber_example",
        timestamp: "timestamp_example",
        gasLimit: "gasLimit_example",
        difficulty: "difficulty_example",
        baseFee: "baseFee_example",
        blockHash: {
          "key": "key_example",
        },
      },
      debugDeployment: true,
      result: {
        transaction: {
          blockNumber: "blockNumber_example",
          blockHash: "blockHash_example",
          transactionIndex: "transactionIndex_example",
          hash: "hash_example",
          chainId: "chainId_example",
          type: "type_example",
          _from: "_from_example",
          to: "to_example",
          input: "input_example",
          value: "value_example",
          nonce: "nonce_example",
          gas: "gas_example",
          gasPrice: "gasPrice_example",
          maxFeePerGas: "maxFeePerGas_example",
          maxPriorityFeePerGas: "maxPriorityFeePerGas_example",
          accessList: [
            {
              address: "address_example",
              storageKeys: [
                "storageKeys_example",
              ],
            },
          ],
        },
        transactionReceipt: {
          gasUsed: "gasUsed_example",
          cumulativeGasUsed: "cumulativeGasUsed_example",
          effectiveGasPrice: "effectiveGasPrice_example",
          status: "status_example",
          error: "error_example",
          revertReason: "revertReason_example",
          logs: [
            {},
          ],
        },
      },
    },
  },
};

const data = await apiInstance.simulateTransaction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SolidityServiceSolidityAPIServiceSimulateTransactionBody**|  |
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **chainId** | [**string**] |  | defaults to undefined


### Return type

**SolidityServiceSimulateTransactionResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simulateTransactionBundle**
> SolidityServiceSimulateTransactionBundleResponse simulateTransactionBundle(body)

You could also create bundle simulations so that one transaction could be executed one after another. For `blockNumber` `transactionIndex` `networkId` `stateOverrides` and `blockOverrides` fields, only the first simulation takes effect.

### Example


```typescript
import { createConfiguration, DebugAndSimulationApi } from '';
import type { DebugAndSimulationApiSimulateTransactionBundleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DebugAndSimulationApi(configuration);

const request: DebugAndSimulationApiSimulateTransactionBundleRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  chainId: "chainId_example",
  
  body: {
    simulations: [
      {
        id: "id_example",
        createAt: "createAt_example",
        bundleId: "bundleId_example",
        networkId: "networkId_example",
        chainId: "chainId_example",
        chainSpec: {
          chainId: "chainId_example",
          forkId: "forkId_example",
        },
        to: "to_example",
        input: "input_example",
        blockNumber: "blockNumber_example",
        transactionIndex: "transactionIndex_example",
        _from: "_from_example",
        gas: "gas_example",
        gasPrice: "gasPrice_example",
        maxFeePerGas: "maxFeePerGas_example",
        maxPriorityFeePerGas: "maxPriorityFeePerGas_example",
        value: "value_example",
        accessList: [
          {
            address: "address_example",
            storageKeys: [
              "storageKeys_example",
            ],
          },
        ],
        originTxHash: "originTxHash_example",
        label: "label_example",
        stateOverrides: {
          "key": {
            state: {
              "key": "key_example",
            },
            balance: "balance_example",
            code: "code_example",
          },
        },
        sourceOverrides: {
          "key": "key_example",
        },
        blockOverride: {
          blockNumber: "blockNumber_example",
          timestamp: "timestamp_example",
          gasLimit: "gasLimit_example",
          difficulty: "difficulty_example",
          baseFee: "baseFee_example",
          blockHash: {
            "key": "key_example",
          },
        },
        debugDeployment: true,
        result: {
          transaction: {
            blockNumber: "blockNumber_example",
            blockHash: "blockHash_example",
            transactionIndex: "transactionIndex_example",
            hash: "hash_example",
            chainId: "chainId_example",
            type: "type_example",
            _from: "_from_example",
            to: "to_example",
            input: "input_example",
            value: "value_example",
            nonce: "nonce_example",
            gas: "gas_example",
            gasPrice: "gasPrice_example",
            maxFeePerGas: "maxFeePerGas_example",
            maxPriorityFeePerGas: "maxPriorityFeePerGas_example",
            accessList: [
              {
                address: "address_example",
                storageKeys: [
                  "storageKeys_example",
                ],
              },
            ],
          },
          transactionReceipt: {
            gasUsed: "gasUsed_example",
            cumulativeGasUsed: "cumulativeGasUsed_example",
            effectiveGasPrice: "effectiveGasPrice_example",
            status: "status_example",
            error: "error_example",
            revertReason: "revertReason_example",
            logs: [
              {},
            ],
          },
        },
      },
    ],
  },
};

const data = await apiInstance.simulateTransactionBundle(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody**|  |
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **chainId** | [**string**] |  | defaults to undefined


### Return type

**SolidityServiceSimulateTransactionBundleResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



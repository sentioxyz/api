# .ForksApi

All URIs are relative to *https://app.sentio.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFork**](ForksApi.md#createFork) | **POST** /api/v1/solidity/{owner}/{slug}/fork | Create a fork
[**deleteFork**](ForksApi.md#deleteFork) | **DELETE** /api/v1/solidity/{owner}/{slug}/fork/{id} | Delete fork by id
[**getCallTraceOnForkBundle**](ForksApi.md#getCallTraceOnForkBundle) | **GET** /api/v1/solidity/{owner}/{slug}/fork/{forkId}/bundle/{bundleId}/call_trace | Get trace by bundle simulation
[**getCallTraceOnForkSimulation**](ForksApi.md#getCallTraceOnForkSimulation) | **GET** /api/v1/solidity/{owner}/{slug}/fork/{forkId}/simulation/{simulationId}/call_trace | Get trace by simulation
[**getCallTraceOnForkTransaction**](ForksApi.md#getCallTraceOnForkTransaction) | **GET** /api/v1/solidity/{owner}/{slug}/fork/{forkId}/transaction/{txHash}/call_trace | Get trace by transaction
[**getFork**](ForksApi.md#getFork) | **GET** /api/v1/solidity/{owner}/{slug}/fork/{id} | Get fork by id
[**getForkInfo**](ForksApi.md#getForkInfo) | **GET** /api/v1/solidity/{owner}/{slug}/fork/{id}/info | Get fork info by id
[**listForks**](ForksApi.md#listForks) | **GET** /api/v1/solidity/{owner}/{slug}/fork | List all forks
[**simulateTransactionBundleOnFork**](ForksApi.md#simulateTransactionBundleOnFork) | **POST** /api/v1/solidity/{owner}/{slug}/fork/{forkId}/simulation_bundle | Run bundle simulation
[**simulateTransactionOnFork**](ForksApi.md#simulateTransactionOnFork) | **POST** /api/v1/solidity/{owner}/{slug}/fork/{forkId}/simulation | Run Simulation
[**updateFork**](ForksApi.md#updateFork) | **PUT** /api/v1/solidity/{owner}/{slug}/fork/{id} | Update fork by id


# **createFork**
> SolidityServiceCreateForkResponse createFork(body)


### Example


```typescript
import { createConfiguration, ForksApi } from '';
import type { ForksApiCreateForkRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ForksApi(configuration);

const request: ForksApiCreateForkRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  body: {
    fork: {
      id: "id_example",
      type: "MANAGED",
      name: "name_example",
      extra: "extra_example",
      managedFork: {
        parentChainSpec: {
          chainId: "chainId_example",
          forkId: "forkId_example",
        },
        parentRpcEndpoint: "parentRpcEndpoint_example",
        parentBlockNumber: "parentBlockNumber_example",
        chainId: "chainId_example",
      },
      externalFork: {
        chainConfig: {
          endpoint: "endpoint_example",
          debugEndpoint: "debugEndpoint_example",
          sourceFetcherType: "ETHERSCAN",
          sourceFetcherEndpoint: "sourceFetcherEndpoint_example",
          sourceFetcherTimeout: "sourceFetcherTimeout_example",
          sourceFetcherApiKeys: [
            "sourceFetcherApiKeys_example",
          ],
          oklinkChainShortName: "oklinkChainShortName_example",
        },
        nodeAdditionalHeaders: "nodeAdditionalHeaders_example",
      },
      createTime: new Date('1970-01-01T00:00:00.00Z'),
      updateTime: new Date('1970-01-01T00:00:00.00Z'),
    },
  },
};

const data = await apiInstance.createFork(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SolidityServiceForkServiceCreateForkBody**|  |
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined


### Return type

**SolidityServiceCreateForkResponse**

### Authorization

[ApiKeyHeaderAuth](README.md#ApiKeyHeaderAuth), [ApiKeyQueryAuth](README.md#ApiKeyQueryAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFork**
> any deleteFork()


### Example


```typescript
import { createConfiguration, ForksApi } from '';
import type { ForksApiDeleteForkRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ForksApi(configuration);

const request: ForksApiDeleteForkRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  id: "id_example",
};

const data = await apiInstance.deleteFork(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **id** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[ApiKeyHeaderAuth](README.md#ApiKeyHeaderAuth), [ApiKeyQueryAuth](README.md#ApiKeyQueryAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCallTraceOnForkBundle**
> GoogleApiHttpBody getCallTraceOnForkBundle()


### Example


```typescript
import { createConfiguration, ForksApi } from '';
import type { ForksApiGetCallTraceOnForkBundleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ForksApi(configuration);

const request: ForksApiGetCallTraceOnForkBundleRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  forkId: "forkId_example",
  
  bundleId: "bundleId_example",
    // Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace. (optional)
  withInternalCalls: true,
    // Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution. (optional)
  disableOptimizer: true,
    // Only effective when disableOptimizer=true. (optional)
  ignoreGasCost: true,
};

const data = await apiInstance.getCallTraceOnForkBundle(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **forkId** | [**string**] |  | defaults to undefined
 **bundleId** | [**string**] |  | defaults to undefined
 **withInternalCalls** | [**boolean**] | Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace. | (optional) defaults to undefined
 **disableOptimizer** | [**boolean**] | Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution. | (optional) defaults to undefined
 **ignoreGasCost** | [**boolean**] | Only effective when disableOptimizer&#x3D;true. | (optional) defaults to undefined


### Return type

**GoogleApiHttpBody**

### Authorization

[ApiKeyHeaderAuth](README.md#ApiKeyHeaderAuth), [ApiKeyQueryAuth](README.md#ApiKeyQueryAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCallTraceOnForkSimulation**
> GoogleApiHttpBody getCallTraceOnForkSimulation()


### Example


```typescript
import { createConfiguration, ForksApi } from '';
import type { ForksApiGetCallTraceOnForkSimulationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ForksApi(configuration);

const request: ForksApiGetCallTraceOnForkSimulationRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  forkId: "forkId_example",
  
  simulationId: "simulationId_example",
    // Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace. (optional)
  withInternalCalls: true,
    // Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution. (optional)
  disableOptimizer: true,
    // Only effective when disableOptimizer=true. (optional)
  ignoreGasCost: true,
};

const data = await apiInstance.getCallTraceOnForkSimulation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **forkId** | [**string**] |  | defaults to undefined
 **simulationId** | [**string**] |  | defaults to undefined
 **withInternalCalls** | [**boolean**] | Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace. | (optional) defaults to undefined
 **disableOptimizer** | [**boolean**] | Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution. | (optional) defaults to undefined
 **ignoreGasCost** | [**boolean**] | Only effective when disableOptimizer&#x3D;true. | (optional) defaults to undefined


### Return type

**GoogleApiHttpBody**

### Authorization

[ApiKeyHeaderAuth](README.md#ApiKeyHeaderAuth), [ApiKeyQueryAuth](README.md#ApiKeyQueryAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCallTraceOnForkTransaction**
> GoogleApiHttpBody getCallTraceOnForkTransaction()


### Example


```typescript
import { createConfiguration, ForksApi } from '';
import type { ForksApiGetCallTraceOnForkTransactionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ForksApi(configuration);

const request: ForksApiGetCallTraceOnForkTransactionRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  forkId: "forkId_example",
  
  txHash: "txHash_example",
    // Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace. (optional)
  withInternalCalls: true,
    // Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution. (optional)
  disableOptimizer: true,
    // Only effective when disableOptimizer=true. (optional)
  ignoreGasCost: true,
};

const data = await apiInstance.getCallTraceOnForkTransaction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **forkId** | [**string**] |  | defaults to undefined
 **txHash** | [**string**] |  | defaults to undefined
 **withInternalCalls** | [**boolean**] | Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace. | (optional) defaults to undefined
 **disableOptimizer** | [**boolean**] | Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution. | (optional) defaults to undefined
 **ignoreGasCost** | [**boolean**] | Only effective when disableOptimizer&#x3D;true. | (optional) defaults to undefined


### Return type

**GoogleApiHttpBody**

### Authorization

[ApiKeyHeaderAuth](README.md#ApiKeyHeaderAuth), [ApiKeyQueryAuth](README.md#ApiKeyQueryAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFork**
> SolidityServiceGetForkResponse getFork()


### Example


```typescript
import { createConfiguration, ForksApi } from '';
import type { ForksApiGetForkRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ForksApi(configuration);

const request: ForksApiGetForkRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  id: "id_example",
};

const data = await apiInstance.getFork(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **id** | [**string**] |  | defaults to undefined


### Return type

**SolidityServiceGetForkResponse**

### Authorization

[ApiKeyHeaderAuth](README.md#ApiKeyHeaderAuth), [ApiKeyQueryAuth](README.md#ApiKeyQueryAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getForkInfo**
> SolidityServiceGetForkInfoResponse getForkInfo()


### Example


```typescript
import { createConfiguration, ForksApi } from '';
import type { ForksApiGetForkInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ForksApi(configuration);

const request: ForksApiGetForkInfoRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  id: "id_example",
};

const data = await apiInstance.getForkInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **id** | [**string**] |  | defaults to undefined


### Return type

**SolidityServiceGetForkInfoResponse**

### Authorization

[ApiKeyHeaderAuth](README.md#ApiKeyHeaderAuth), [ApiKeyQueryAuth](README.md#ApiKeyQueryAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listForks**
> SolidityServiceListForksResponse listForks()


### Example


```typescript
import { createConfiguration, ForksApi } from '';
import type { ForksApiListForksRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ForksApi(configuration);

const request: ForksApiListForksRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
};

const data = await apiInstance.listForks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined


### Return type

**SolidityServiceListForksResponse**

### Authorization

[ApiKeyHeaderAuth](README.md#ApiKeyHeaderAuth), [ApiKeyQueryAuth](README.md#ApiKeyQueryAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simulateTransactionBundleOnFork**
> SolidityServiceSimulateTransactionBundleResponse simulateTransactionBundleOnFork(body)


### Example


```typescript
import { createConfiguration, ForksApi } from '';
import type { ForksApiSimulateTransactionBundleOnForkRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ForksApi(configuration);

const request: ForksApiSimulateTransactionBundleOnForkRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  forkId: "forkId_example",
  
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
        sharing: {
          isPublic: true,
          id: "id_example",
          simulationId: "simulationId_example",
        },
      },
    ],
  },
};

const data = await apiInstance.simulateTransactionBundleOnFork(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SolidityServiceSolidityAPIServiceSimulateTransactionBundleOnForkBody**|  |
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **forkId** | [**string**] |  | defaults to undefined


### Return type

**SolidityServiceSimulateTransactionBundleResponse**

### Authorization

[ApiKeyHeaderAuth](README.md#ApiKeyHeaderAuth), [ApiKeyQueryAuth](README.md#ApiKeyQueryAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simulateTransactionOnFork**
> SolidityServiceSimulateTransactionResponse simulateTransactionOnFork(body)


### Example


```typescript
import { createConfiguration, ForksApi } from '';
import type { ForksApiSimulateTransactionOnForkRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ForksApi(configuration);

const request: ForksApiSimulateTransactionOnForkRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  forkId: "forkId_example",
  
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
      sharing: {
        isPublic: true,
        id: "id_example",
        simulationId: "simulationId_example",
      },
    },
  },
};

const data = await apiInstance.simulateTransactionOnFork(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SolidityServiceSolidityAPIServiceSimulateTransactionOnForkBody**|  |
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **forkId** | [**string**] |  | defaults to undefined


### Return type

**SolidityServiceSimulateTransactionResponse**

### Authorization

[ApiKeyHeaderAuth](README.md#ApiKeyHeaderAuth), [ApiKeyQueryAuth](README.md#ApiKeyQueryAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateFork**
> SolidityServiceUpdateForkResponse updateFork(body)


### Example


```typescript
import { createConfiguration, ForksApi } from '';
import type { ForksApiUpdateForkRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ForksApi(configuration);

const request: ForksApiUpdateForkRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  id: "id_example",
  
  body: {
    fork: {
      id: "id_example",
      type: "MANAGED",
      name: "name_example",
      extra: "extra_example",
      managedFork: {
        parentChainSpec: {
          chainId: "chainId_example",
          forkId: "forkId_example",
        },
        parentRpcEndpoint: "parentRpcEndpoint_example",
        parentBlockNumber: "parentBlockNumber_example",
        chainId: "chainId_example",
      },
      externalFork: {
        chainConfig: {
          endpoint: "endpoint_example",
          debugEndpoint: "debugEndpoint_example",
          sourceFetcherType: "ETHERSCAN",
          sourceFetcherEndpoint: "sourceFetcherEndpoint_example",
          sourceFetcherTimeout: "sourceFetcherTimeout_example",
          sourceFetcherApiKeys: [
            "sourceFetcherApiKeys_example",
          ],
          oklinkChainShortName: "oklinkChainShortName_example",
        },
        nodeAdditionalHeaders: "nodeAdditionalHeaders_example",
      },
      createTime: new Date('1970-01-01T00:00:00.00Z'),
      updateTime: new Date('1970-01-01T00:00:00.00Z'),
    },
  },
};

const data = await apiInstance.updateFork(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SolidityServiceForkServiceUpdateForkBody**|  |
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **id** | [**string**] |  | defaults to undefined


### Return type

**SolidityServiceUpdateForkResponse**

### Authorization

[ApiKeyHeaderAuth](README.md#ApiKeyHeaderAuth), [ApiKeyQueryAuth](README.md#ApiKeyQueryAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



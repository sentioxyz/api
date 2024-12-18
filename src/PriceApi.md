# .PriceApi

All URIs are relative to *https://app.sentio.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchGetPrices**](PriceApi.md#batchGetPrices) | **POST** /api/v1/prices/batch | Batch get prices
[**checkLatestPrice**](PriceApi.md#checkLatestPrice) | **GET** /api/v1/prices/check_latest | Check latest price
[**getPrice**](PriceApi.md#getPrice) | **GET** /api/v1/prices | Get price
[**priceListCoins**](PriceApi.md#priceListCoins) | **GET** /api/v1/prices/coins | List coins


# **batchGetPrices**
> PriceServiceBatchGetPricesResponse batchGetPrices(body)


### Example


```typescript
import { createConfiguration, PriceApi } from '';
import type { PriceApiBatchGetPricesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PriceApi(configuration);

const request: PriceApiBatchGetPricesRequest = {
  
  body: {
    timestamps: [
      new Date('1970-01-01T00:00:00.00Z'),
    ],
    coinIds: [
      {
        symbol: "symbol_example",
        address: {
          address: "address_example",
          chain: "chain_example",
        },
      },
    ],
  },
};

const data = await apiInstance.batchGetPrices(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PriceServiceBatchGetPricesRequest**|  |


### Return type

**PriceServiceBatchGetPricesResponse**

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

# **checkLatestPrice**
> PriceServiceCheckLatestPriceResponse checkLatestPrice()


### Example


```typescript
import { createConfiguration, PriceApi } from '';

const configuration = createConfiguration();
const apiInstance = new PriceApi(configuration);

const request = {};

const data = await apiInstance.checkLatestPrice(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**PriceServiceCheckLatestPriceResponse**

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

# **getPrice**
> PriceServiceGetPriceResponse getPrice()

GetPrice returns the price of a given coin identifier, in a best effort way. If we do not have any price data for the given coin, we will return NOT_FOUND error. If we have at least one price data for the given coin, we will return it with the actual timestamp. Client is responsible for checking the timestamp and decide whether to use the price or not.

### Example


```typescript
import { createConfiguration, PriceApi } from '';
import type { PriceApiGetPriceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PriceApi(configuration);

const request: PriceApiGetPriceRequest = {
    // The timestamp we request the price at. Note, the price service may not have the price at the exact timestamp, in which case it will return the price at the closest timestamp. (optional)
  timestamp: new Date('1970-01-01T00:00:00.00Z'),
  
  coinIdSymbol: "coinId.symbol_example",
  
  coinIdAddressAddress: "coinId.address.address_example",
  
  coinIdAddressChain: "coinId.address.chain_example",
  
  source: "source_example",
};

const data = await apiInstance.getPrice(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timestamp** | [**Date**] | The timestamp we request the price at. Note, the price service may not have the price at the exact timestamp, in which case it will return the price at the closest timestamp. | (optional) defaults to undefined
 **coinIdSymbol** | [**string**] |  | (optional) defaults to undefined
 **coinIdAddressAddress** | [**string**] |  | (optional) defaults to undefined
 **coinIdAddressChain** | [**string**] |  | (optional) defaults to undefined
 **source** | [**string**] |  | (optional) defaults to undefined


### Return type

**PriceServiceGetPriceResponse**

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

# **priceListCoins**
> PriceServiceListCoinsResponse priceListCoins()


### Example


```typescript
import { createConfiguration, PriceApi } from '';
import type { PriceApiPriceListCoinsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PriceApi(configuration);

const request: PriceApiPriceListCoinsRequest = {
  
  limit: 1,
  
  offset: 1,
  
  searchQuery: "searchQuery_example",
  
  chain: "chain_example",
};

const data = await apiInstance.priceListCoins(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **searchQuery** | [**string**] |  | (optional) defaults to undefined
 **chain** | [**string**] |  | (optional) defaults to undefined


### Return type

**PriceServiceListCoinsResponse**

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



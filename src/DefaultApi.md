# .DefaultApi

All URIs are relative to *https://app.sentio.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCoinByGecko**](DefaultApi.md#addCoinByGecko) | **POST** /api/v1/prices/add_coin_by_gecko | 


# **addCoinByGecko**
> PriceServiceAddCoinByGeckoResponse addCoinByGecko(body)


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiAddCoinByGeckoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiAddCoinByGeckoRequest = {
  
  body: {
    coingeckoId: "coingeckoId_example",
  },
};

const data = await apiInstance.addCoinByGecko(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PriceServiceAddCoinByGeckoRequest**|  |


### Return type

**PriceServiceAddCoinByGeckoResponse**

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



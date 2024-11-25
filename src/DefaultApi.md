# .DefaultApi

All URIs are relative to *https://app.sentio.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAlertRule**](DefaultApi.md#deleteAlertRule) | **DELETE** /api/v1/alerts/rule/{id} | 


# **deleteAlertRule**
> any deleteAlertRule()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteAlertRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteAlertRuleRequest = {
  
  id: "id_example",
};

const data = await apiInstance.deleteAlertRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**any**

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



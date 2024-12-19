# .DefaultApi

All URIs are relative to *https://app.sentio.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProcessorStatus**](DefaultApi.md#getProcessorStatus) | **GET** /api/v1/processors/status | Get processor status
[**getProjectVersions**](DefaultApi.md#getProjectVersions) | **GET** /api/v1/processors/{projectId}/versions | Get Versions


# **getProcessorStatus**
> ProcessorServiceGetProcessorStatusResponse getProcessorStatus()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetProcessorStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetProcessorStatusRequest = {
  
  projectId: "projectId_example",
  
  id: "id_example",
};

const data = await apiInstance.getProcessorStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] |  | (optional) defaults to undefined
 **id** | [**string**] |  | (optional) defaults to undefined


### Return type

**ProcessorServiceGetProcessorStatusResponse**

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

# **getProjectVersions**
> ProcessorServiceGetProjectVersionsResponse getProjectVersions()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetProjectVersionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetProjectVersionsRequest = {
  
  projectId: "projectId_example",
};

const data = await apiInstance.getProjectVersions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] |  | defaults to undefined


### Return type

**ProcessorServiceGetProjectVersionsResponse**

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



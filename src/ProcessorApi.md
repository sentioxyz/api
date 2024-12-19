# .ProcessorApi

All URIs are relative to *https://app.sentio.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProcessorStatusV2**](ProcessorApi.md#getProcessorStatusV2) | **GET** /api/v1/processors/{owner}/{slug}/status | Get processor status


# **getProcessorStatusV2**
> ProcessorServiceGetProcessorStatusResponse getProcessorStatusV2()


### Example


```typescript
import { createConfiguration, ProcessorApi } from '';
import type { ProcessorApiGetProcessorStatusV2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ProcessorApi(configuration);

const request: ProcessorApiGetProcessorStatusV2Request = {
  
  owner: "owner_example",
  
  slug: "slug_example",
    //  - ACTIVE: Only active version  - PENDING: Only pending versions  - ALL: All version (optional)
  version: "ACTIVE",
};

const data = await apiInstance.getProcessorStatusV2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **version** | [**&#39;ACTIVE&#39; | &#39;PENDING&#39; | &#39;ALL&#39;**]**Array<&#39;ACTIVE&#39; &#124; &#39;PENDING&#39; &#124; &#39;ALL&#39;>** |  - ACTIVE: Only active version  - PENDING: Only pending versions  - ALL: All version | (optional) defaults to 'ACTIVE'


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



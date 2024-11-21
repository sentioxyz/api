# .AlertsApi

All URIs are relative to *https://app.sentio.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAlert**](AlertsApi.md#getAlert) | **GET** /api/v1/alerts/{ruleId} | Find an alert rule by id, and list all alerts for this rule
[**getAlertRules**](AlertsApi.md#getAlertRules) | **GET** /api/v1/alerts/rule/project/{projectId} | List all alert rules for a project


# **getAlert**
> AlertServiceGetAlertResponse getAlert()


### Example


```typescript
import { createConfiguration, AlertsApi } from '';
import type { AlertsApiGetAlertRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertsApi(configuration);

const request: AlertsApiGetAlertRequest = {
  
  ruleId: "ruleId_example",
  
  page: 1,
  
  pageSize: 1,
};

const data = await apiInstance.getAlert(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | [**string**] |  | defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **pageSize** | [**number**] |  | (optional) defaults to undefined


### Return type

**AlertServiceGetAlertResponse**

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

# **getAlertRules**
> AlertServiceGetAlertRulesResponse getAlertRules()


### Example


```typescript
import { createConfiguration, AlertsApi } from '';
import type { AlertsApiGetAlertRulesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertsApi(configuration);

const request: AlertsApiGetAlertRulesRequest = {
  
  projectId: "projectId_example",
};

const data = await apiInstance.getAlertRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] |  | defaults to undefined


### Return type

**AlertServiceGetAlertRulesResponse**

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



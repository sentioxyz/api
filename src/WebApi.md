# .WebApi

All URIs are relative to *https://app.sentio.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDashboard**](WebApi.md#deleteDashboard) | **DELETE** /api/v1/dashboards/{dashboardId} | Delete a dashboard by id
[**exportDashboard**](WebApi.md#exportDashboard) | **GET** /api/v1/dashboards/{dashboardId}/json | Export a dashboard to json
[**getDashboard**](WebApi.md#getDashboard) | **GET** /api/v1/dashboards/{dashboardId} | Get a dashboard by id
[**getDashboard2**](WebApi.md#getDashboard2) | **GET** /api/v1/projects/{owner}/{slug}/dashboards/{dashboardId} | Get a dashboard by id
[**getProject**](WebApi.md#getProject) | **GET** /api/v1/project/{owner}/{slug} | Get project details
[**getProjectById**](WebApi.md#getProjectById) | **GET** /api/v1/project/{projectId} | Get project details
[**getProjectList**](WebApi.md#getProjectList) | **GET** /api/v1/projects | Get project list
[**importDashboard**](WebApi.md#importDashboard) | **POST** /api/v1/dashboards/json | Import a dashboard to another dashboard
[**listDashboards**](WebApi.md#listDashboards) | **GET** /api/v1/dashboards | List all dashboards in a project
[**listDashboards2**](WebApi.md#listDashboards2) | **GET** /api/v1/projects/{owner}/{slug}/dashboards | List all dashboards in a project


# **deleteDashboard**
> WebServiceDashboard deleteDashboard()


### Example


```typescript
import { createConfiguration, WebApi } from '';
import type { WebApiDeleteDashboardRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebApi(configuration);

const request: WebApiDeleteDashboardRequest = {
    // filter the dashboard by id
  dashboardId: "dashboardId_example",
    // filter the dashboard by project id (optional)
  projectId: "projectId_example",
    // username or organization name (optional)
  ownerName: "ownerName_example",
    // project slug (optional)
  slug: "slug_example",
};

const data = await apiInstance.deleteDashboard(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | [**string**] | filter the dashboard by id | defaults to undefined
 **projectId** | [**string**] | filter the dashboard by project id | (optional) defaults to undefined
 **ownerName** | [**string**] | username or organization name | (optional) defaults to undefined
 **slug** | [**string**] | project slug | (optional) defaults to undefined


### Return type

**WebServiceDashboard**

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

# **exportDashboard**
> WebServiceExportDashboardResponse exportDashboard()


### Example


```typescript
import { createConfiguration, WebApi } from '';
import type { WebApiExportDashboardRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebApi(configuration);

const request: WebApiExportDashboardRequest = {
  
  dashboardId: "dashboardId_example",
};

const data = await apiInstance.exportDashboard(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | [**string**] |  | defaults to undefined


### Return type

**WebServiceExportDashboardResponse**

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

# **getDashboard**
> WebServiceGetDashboardResponse getDashboard()


### Example


```typescript
import { createConfiguration, WebApi } from '';
import type { WebApiGetDashboardRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebApi(configuration);

const request: WebApiGetDashboardRequest = {
    // filter the dashboard by id
  dashboardId: "dashboardId_example",
    // filter the dashboard by project id (optional)
  projectId: "projectId_example",
    // username or organization name (optional)
  ownerName: "ownerName_example",
    // project slug (optional)
  slug: "slug_example",
};

const data = await apiInstance.getDashboard(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | [**string**] | filter the dashboard by id | defaults to undefined
 **projectId** | [**string**] | filter the dashboard by project id | (optional) defaults to undefined
 **ownerName** | [**string**] | username or organization name | (optional) defaults to undefined
 **slug** | [**string**] | project slug | (optional) defaults to undefined


### Return type

**WebServiceGetDashboardResponse**

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

# **getDashboard2**
> WebServiceGetDashboardResponse getDashboard2()


### Example


```typescript
import { createConfiguration, WebApi } from '';
import type { WebApiGetDashboard2Request } from '';

const configuration = createConfiguration();
const apiInstance = new WebApi(configuration);

const request: WebApiGetDashboard2Request = {
    // username or organization name
  owner: "owner_example",
    // project slug
  slug: "slug_example",
    // filter the dashboard by id
  dashboardId: "dashboardId_example",
    // filter the dashboard by project id (optional)
  projectId: "projectId_example",
};

const data = await apiInstance.getDashboard2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] | username or organization name | defaults to undefined
 **slug** | [**string**] | project slug | defaults to undefined
 **dashboardId** | [**string**] | filter the dashboard by id | defaults to undefined
 **projectId** | [**string**] | filter the dashboard by project id | (optional) defaults to undefined


### Return type

**WebServiceGetDashboardResponse**

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

# **getProject**
> WebServiceGetProjectResponse getProject()


### Example


```typescript
import { createConfiguration, WebApi } from '';
import type { WebApiGetProjectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebApi(configuration);

const request: WebApiGetProjectRequest = {
    // username or organization name
  owner: "owner_example",
    // project slug
  slug: "slug_example",
};

const data = await apiInstance.getProject(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] | username or organization name | defaults to undefined
 **slug** | [**string**] | project slug | defaults to undefined


### Return type

**WebServiceGetProjectResponse**

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

# **getProjectById**
> CommonProjectInfo getProjectById()


### Example


```typescript
import { createConfiguration, WebApi } from '';
import type { WebApiGetProjectByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebApi(configuration);

const request: WebApiGetProjectByIdRequest = {
  
  projectId: "projectId_example",
};

const data = await apiInstance.getProjectById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] |  | defaults to undefined


### Return type

**CommonProjectInfo**

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

# **getProjectList**
> WebServiceGetProjectListResponse getProjectList()


### Example


```typescript
import { createConfiguration, WebApi } from '';
import type { WebApiGetProjectListRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebApi(configuration);

const request: WebApiGetProjectListRequest = {
  
  userId: "userId_example",
  
  organizationId: "organizationId_example",
};

const data = await apiInstance.getProjectList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | (optional) defaults to undefined
 **organizationId** | [**string**] |  | (optional) defaults to undefined


### Return type

**WebServiceGetProjectListResponse**

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

# **importDashboard**
> WebServiceImportDashboardResponse importDashboard(body)


### Example


```typescript
import { createConfiguration, WebApi } from '';
import type { WebApiImportDashboardRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebApi(configuration);

const request: WebApiImportDashboardRequest = {
  
  body: {
    dashboardId: "dashboardId_example",
    dashboardJson: {},
    overrideLayouts: true,
  },
};

const data = await apiInstance.importDashboard(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WebServiceImportDashboardRequest**|  |


### Return type

**WebServiceImportDashboardResponse**

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

# **listDashboards**
> WebServiceGetDashboardResponse listDashboards()


### Example


```typescript
import { createConfiguration, WebApi } from '';
import type { WebApiListDashboardsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WebApi(configuration);

const request: WebApiListDashboardsRequest = {
    // filter the dashboard by id (optional)
  dashboardId: "dashboardId_example",
    // filter the dashboard by project id (optional)
  projectId: "projectId_example",
    // username or organization name (optional)
  ownerName: "ownerName_example",
    // project slug (optional)
  slug: "slug_example",
};

const data = await apiInstance.listDashboards(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardId** | [**string**] | filter the dashboard by id | (optional) defaults to undefined
 **projectId** | [**string**] | filter the dashboard by project id | (optional) defaults to undefined
 **ownerName** | [**string**] | username or organization name | (optional) defaults to undefined
 **slug** | [**string**] | project slug | (optional) defaults to undefined


### Return type

**WebServiceGetDashboardResponse**

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

# **listDashboards2**
> WebServiceGetDashboardResponse listDashboards2()


### Example


```typescript
import { createConfiguration, WebApi } from '';
import type { WebApiListDashboards2Request } from '';

const configuration = createConfiguration();
const apiInstance = new WebApi(configuration);

const request: WebApiListDashboards2Request = {
    // username or organization name
  owner: "owner_example",
    // project slug
  slug: "slug_example",
    // filter the dashboard by id (optional)
  dashboardId: "dashboardId_example",
    // filter the dashboard by project id (optional)
  projectId: "projectId_example",
};

const data = await apiInstance.listDashboards2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] | username or organization name | defaults to undefined
 **slug** | [**string**] | project slug | defaults to undefined
 **dashboardId** | [**string**] | filter the dashboard by id | (optional) defaults to undefined
 **projectId** | [**string**] | filter the dashboard by project id | (optional) defaults to undefined


### Return type

**WebServiceGetDashboardResponse**

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



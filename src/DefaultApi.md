# .DefaultApi

All URIs are relative to *https://app.sentio.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rerunSQLQuery**](DefaultApi.md#rerunSQLQuery) | **POST** /api/v1/analytics/{owner}/{slug}/sql/rerun_query | deprecated
[**rerunSQLQuery2**](DefaultApi.md#rerunSQLQuery2) | **POST** /api/v1/analytics/sql/rerun_query | deprecated


# **rerunSQLQuery**
> AnalyticServiceRerunSQLQueryResponse rerunSQLQuery(body)


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiRerunSQLQueryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiRerunSQLQueryRequest = {
    // username or organization name
  owner: "owner_example",
    // project slug
  slug: "slug_example",
  
  body: {
    projectId: "projectId_example",
    version: 1,
    queryId: "queryId_example",
    sqlQuery: {
      sql: "sql_example",
      size: 1,
      parameters: {
        fields: {
          "key": {
            nullValue: "NULL_VALUE",
            intValue: 1,
            floatValue: 3.14,
            bytesValue: 'YQ==',
            boolValue: true,
            stringValue: "stringValue_example",
            timestampValue: new Date('1970-01-01T00:00:00.00Z'),
            bigintValue: {
              negative: true,
              data: 'YQ==',
            },
            bigdecimalValue: {
              value: {
                negative: true,
                data: 'YQ==',
              },
              exp: 1,
            },
            listValue: {
              values: [
                ,
              ],
            },
            structValue: ,
            tokenValue: {
              token: {
                symbol: "symbol_example",
                address: {
                  address: "address_example",
                  chain: "chain_example",
                },
              },
              amount: {
                value: {
                  negative: true,
                  data: 'YQ==',
                },
                exp: 1,
              },
              specifiedAt: new Date('1970-01-01T00:00:00.00Z'),
            },
          },
        },
      },
      name: "name_example",
      queryId: "queryId_example",
    },
  },
};

const data = await apiInstance.rerunSQLQuery(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AnalyticServiceAnalyticServiceRerunSQLQueryBody**|  |
 **owner** | [**string**] | username or organization name | defaults to undefined
 **slug** | [**string**] | project slug | defaults to undefined


### Return type

**AnalyticServiceRerunSQLQueryResponse**

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

# **rerunSQLQuery2**
> AnalyticServiceRerunSQLQueryResponse rerunSQLQuery2(body)


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiRerunSQLQuery2Request } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiRerunSQLQuery2Request = {
    // Deprecated: will drop in the future.
  body: {
    projectOwner: "projectOwner_example",
    projectSlug: "projectSlug_example",
    projectId: "projectId_example",
    version: 1,
    queryId: "queryId_example",
    sqlQuery: {
      sql: "sql_example",
      size: 1,
      parameters: {
        fields: {
          "key": {
            nullValue: "NULL_VALUE",
            intValue: 1,
            floatValue: 3.14,
            bytesValue: 'YQ==',
            boolValue: true,
            stringValue: "stringValue_example",
            timestampValue: new Date('1970-01-01T00:00:00.00Z'),
            bigintValue: {
              negative: true,
              data: 'YQ==',
            },
            bigdecimalValue: {
              value: {
                negative: true,
                data: 'YQ==',
              },
              exp: 1,
            },
            listValue: {
              values: [
                ,
              ],
            },
            structValue: ,
            tokenValue: {
              token: {
                symbol: "symbol_example",
                address: {
                  address: "address_example",
                  chain: "chain_example",
                },
              },
              amount: {
                value: {
                  negative: true,
                  data: 'YQ==',
                },
                exp: 1,
              },
              specifiedAt: new Date('1970-01-01T00:00:00.00Z'),
            },
          },
        },
      },
      name: "name_example",
      queryId: "queryId_example",
    },
  },
};

const data = await apiInstance.rerunSQLQuery2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AnalyticServiceRerunSQLQueryRequest**| Deprecated: will drop in the future. |


### Return type

**AnalyticServiceRerunSQLQueryResponse**

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



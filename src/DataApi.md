# .DataApi

All URIs are relative to *https://app.sentio.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelSQLQuery**](DataApi.md#cancelSQLQuery) | **PUT** /api/v1/analytics/{owner}/{slug}/sql/cancel_query/{executionId} | Cancel SQL Query
[**executeSQL**](DataApi.md#executeSQL) | **POST** /api/v1/analytics/{owner}/{slug}/sql/execute | Execute SQL
[**executeSQLAsync**](DataApi.md#executeSQLAsync) | **POST** /api/v1/analytics/{owner}/{slug}/sql/execute/async | Execute SQL by Async
[**getMetrics**](DataApi.md#getMetrics) | **GET** /api/v1/metrics | Get a list of metrics in a project
[**listCoins**](DataApi.md#listCoins) | **GET** /api/v1/insights/{owner}/{slug}/coins | List coins
[**listCoins2**](DataApi.md#listCoins2) | **GET** /api/v1/insights/coins | List coins
[**query**](DataApi.md#query) | **POST** /api/v1/insights/{owner}/{slug}/query | Insight Query
[**queryInstant**](DataApi.md#queryInstant) | **POST** /api/v1/metrics/{owner}/{slug}/query | Metric instant queries
[**queryLog**](DataApi.md#queryLog) | **POST** /api/v1/eventlogs/{owner}/{slug} | Query event logs
[**queryLog2**](DataApi.md#queryLog2) | **GET** /api/v1/eventlogs/{owner}/{slug}/query | Query event logs
[**queryRange**](DataApi.md#queryRange) | **POST** /api/v1/metrics/{owner}/{slug}/query_range | Metric range queries
[**querySQLExecutionDetail**](DataApi.md#querySQLExecutionDetail) | **GET** /api/v1/analytics/{owner}/{slug}/sql/query_execution_detail/{executionId} | Query SQL Execution Detail
[**querySQLResult**](DataApi.md#querySQLResult) | **GET** /api/v1/analytics/{owner}/{slug}/sql/query_result/{executionId} | Query SQL Result
[**saveSQL**](DataApi.md#saveSQL) | **POST** /api/v1/analytics/{owner}/{slug}/sql/save | Save SQL
[**saveSQL2**](DataApi.md#saveSQL2) | **PUT** /api/v1/analytics/{owner}/{slug}/sql/save | Save SQL


# **cancelSQLQuery**
> any cancelSQLQuery()

Cancel a SQL query by execution_id.

### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiCancelSQLQueryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiCancelSQLQueryRequest = {
    // username or organization name
  owner: "owner_example",
    // project slug
  slug: "slug_example",
  
  executionId: "executionId_example",
    // use project id if project_owner and project_slug are not provided (optional)
  projectId: "projectId_example",
    // version of the datasource, default to the active version if not provided (optional)
  version: 1,
};

const data = await apiInstance.cancelSQLQuery(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] | username or organization name | defaults to undefined
 **slug** | [**string**] | project slug | defaults to undefined
 **executionId** | [**string**] |  | defaults to undefined
 **projectId** | [**string**] | use project id if project_owner and project_slug are not provided | (optional) defaults to undefined
 **version** | [**number**] | version of the datasource, default to the active version if not provided | (optional) defaults to undefined


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

# **executeSQL**
> AnalyticServiceSyncExecuteSQLResponse executeSQL(body)

Execute SQL in a project. Go to \"Data Studio\" -> \"SQL Editor\", write your query and then click \"Export as cURL\"  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(102).png)  Find more: https://docs.sentio.xyz/reference/data#sql-api

### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiExecuteSQLRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiExecuteSQLRequest = {
    // username or organization name
  owner: "owner_example",
    // project slug
  slug: "slug_example",
  
  body: {
    projectId: "projectId_example",
    version: 1,
    sqlQuery: {
      sql: "sql_example",
      size: 1,
      parameters: {
        fields: {
          "key": {
            nullValue: "NULL_VALUE",
            intValue: 1,
            int64Value: "int64Value_example",
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
    cursor: "cursor_example",
    cachePolicy: {
      cacheTtlSecs: 1,
      cacheRefreshTtlSecs: 1,
      forceRefresh: true,
      noCache: true,
    },
  },
};

const data = await apiInstance.executeSQL(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AnalyticServiceAnalyticServiceExecuteSQLBody**|  |
 **owner** | [**string**] | username or organization name | defaults to undefined
 **slug** | [**string**] | project slug | defaults to undefined


### Return type

**AnalyticServiceSyncExecuteSQLResponse**

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

# **executeSQLAsync**
> AnalyticServiceAsyncExecuteSQLResponse executeSQLAsync(body)

Execute SQL in a project asynchronously.

### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiExecuteSQLAsyncRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiExecuteSQLAsyncRequest = {
    // username or organization name
  owner: "owner_example",
    // project slug
  slug: "slug_example",
  
  body: {
    projectId: "projectId_example",
    version: 1,
    sqlQuery: {
      sql: "sql_example",
      size: 1,
      parameters: {
        fields: {
          "key": {
            nullValue: "NULL_VALUE",
            intValue: 1,
            int64Value: "int64Value_example",
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
    cursor: "cursor_example",
    cachePolicy: {
      cacheTtlSecs: 1,
      cacheRefreshTtlSecs: 1,
      forceRefresh: true,
      noCache: true,
    },
  },
};

const data = await apiInstance.executeSQLAsync(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AnalyticServiceAnalyticServiceExecuteSQLAsyncBody**|  |
 **owner** | [**string**] | username or organization name | defaults to undefined
 **slug** | [**string**] | project slug | defaults to undefined


### Return type

**AnalyticServiceAsyncExecuteSQLResponse**

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

# **getMetrics**
> MetricsServiceGetMetricsResponse getMetrics()


### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiGetMetricsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiGetMetricsRequest = {
  
  projectId: "projectId_example",
  
  name: "name_example",
  
  version: 1,
};

const data = await apiInstance.getMetrics(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **version** | [**number**] |  | (optional) defaults to undefined


### Return type

**MetricsServiceGetMetricsResponse**

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

# **listCoins**
> InsightsServiceListCoinsResponse listCoins()

Get a list of coins in a project.

### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiListCoinsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiListCoinsRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  projectId: "projectId_example",
  
  version: 1,
  
  limit: 1,
  
  offset: 1,
  
  searchQuery: "searchQuery_example",
};

const data = await apiInstance.listCoins(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **projectId** | [**string**] |  | (optional) defaults to undefined
 **version** | [**number**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **searchQuery** | [**string**] |  | (optional) defaults to undefined


### Return type

**InsightsServiceListCoinsResponse**

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

# **listCoins2**
> InsightsServiceListCoinsResponse listCoins2()

Get a list of coins in a project.

### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiListCoins2Request } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiListCoins2Request = {
  
  projectOwner: "projectOwner_example",
  
  projectSlug: "projectSlug_example",
  
  projectId: "projectId_example",
  
  version: 1,
  
  limit: 1,
  
  offset: 1,
  
  searchQuery: "searchQuery_example",
};

const data = await apiInstance.listCoins2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectOwner** | [**string**] |  | (optional) defaults to undefined
 **projectSlug** | [**string**] |  | (optional) defaults to undefined
 **projectId** | [**string**] |  | (optional) defaults to undefined
 **version** | [**number**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **searchQuery** | [**string**] |  | (optional) defaults to undefined


### Return type

**InsightsServiceListCoinsResponse**

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

# **query**
> InsightsServiceQueryResponse query(body)

Query for metrics,event logs and coin prices in a project.

### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiQueryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiQueryRequest = {
    // username or organization name
  owner: "owner_example",
    // project slug
  slug: "slug_example",
  
  body: {
    projectId: "projectId_example",
    version: 1,
    timeRange: {
      start: "start_example",
      end: "end_example",
      step: 1,
      timezone: "timezone_example",
    },
    queries: [
      {
        metricsQuery: {
          query: "query_example",
          alias: "alias_example",
          id: "id_example",
          labelSelector: {
            "key": "key_example",
          },
          aggregate: {
            op: "AVG",
            grouping: [
              "grouping_example",
            ],
          },
          functions: [
            {
              name: "name_example",
              arguments: [
                {
                  stringValue: "stringValue_example",
                  intValue: 1,
                  doubleValue: 3.14,
                  boolValue: true,
                  durationValue: {
                    value: 3.14,
                    unit: "unit_example",
                  },
                },
              ],
            },
          ],
          disabled: true,
        },
        eventsQuery: {
          resource: {
            name: "name_example",
            type: "EVENTS",
            cohortsId: "cohortsId_example",
            cohortsQuery: {
              joinOperator: "AND",
              groups: [
                {
                  joinOperator: "AND",
                  filters: [
                    {
                      symbol: true,
                      name: "name_example",
                      aggregation: {
                        total: {},
                        aggregateProperties: {
                          type: "SUM",
                          propertyName: "propertyName_example",
                        },
                        operator: "EQ",
                        value: [
                          {
                            intValue: 1,
                            longValue: "longValue_example",
                            doubleValue: 3.14,
                            stringValue: "stringValue_example",
                            boolValue: true,
                            dateValue: new Date('1970-01-01T00:00:00.00Z'),
                            listValue: {
                              values: [
                                "values_example",
                              ],
                            },
                          },
                        ],
                      },
                      selectorExpr: {
                        selector: {
                          key: "key_example",
                          operator: "EQ",
                          value: [
                            {
                              intValue: 1,
                              longValue: "longValue_example",
                              doubleValue: 3.14,
                              stringValue: "stringValue_example",
                              boolValue: true,
                              dateValue: new Date('1970-01-01T00:00:00.00Z'),
                              listValue: {
                                values: [
                                  "values_example",
                                ],
                              },
                            },
                          ],
                        },
                        logicExpr: {
                          expressions: [
                            ,
                          ],
                          operator: "AND",
                        },
                      },
                      timeRange: {
                        start: "start_example",
                        end: "end_example",
                        step: 1,
                        timezone: "timezone_example",
                      },
                    },
                  ],
                },
              ],
              name: "name_example",
              id: "id_example",
            },
          },
          alias: "alias_example",
          id: "id_example",
          aggregation: {
            total: {},
            unique: {},
            countUnique: {
              duration: {
                value: 3.14,
                unit: "unit_example",
              },
            },
            aggregateProperties: {
              type: "SUM",
              propertyName: "propertyName_example",
            },
          },
          selectorExpr: {
            selector: {
              key: "key_example",
              operator: "EQ",
              value: [
                {
                  intValue: 1,
                  longValue: "longValue_example",
                  doubleValue: 3.14,
                  stringValue: "stringValue_example",
                  boolValue: true,
                  dateValue: new Date('1970-01-01T00:00:00.00Z'),
                  listValue: {
                    values: [
                      "values_example",
                    ],
                  },
                },
              ],
            },
            logicExpr: {
              expressions: [
                ,
              ],
              operator: "AND",
            },
          },
          groupBy: [
            "groupBy_example",
          ],
          limit: 1,
          functions: [
            {
              name: "name_example",
              arguments: [
                {
                  stringValue: "stringValue_example",
                  intValue: 1,
                  doubleValue: 3.14,
                  boolValue: true,
                  durationValue: {
                    value: 3.14,
                    unit: "unit_example",
                  },
                },
              ],
            },
          ],
          disabled: true,
        },
        priceQuery: {
          id: "id_example",
          alias: "alias_example",
          coinId: [
            {
              symbol: "symbol_example",
              address: {
                address: "address_example",
                chain: "chain_example",
              },
            },
          ],
          disabled: true,
        },
        dataSource: "METRICS",
        sourceName: "sourceName_example",
      },
    ],
    formulas: [
      {
        expression: "expression_example",
        alias: "alias_example",
        id: "id_example",
        disabled: true,
        functions: [
          {
            name: "name_example",
            arguments: [
              {
                stringValue: "stringValue_example",
                intValue: 1,
                doubleValue: 3.14,
                boolValue: true,
                durationValue: {
                  value: 3.14,
                  unit: "unit_example",
                },
              },
            ],
          },
        ],
      },
    ],
    limit: 1,
    offset: 1,
    bypassCache: true,
    cachePolicy: {
      cacheTtlSecs: 1,
      cacheRefreshTtlSecs: 1,
      forceRefresh: true,
      noCache: true,
    },
  },
};

const data = await apiInstance.query(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **InsightsServiceInsightsServiceQueryBody**|  |
 **owner** | [**string**] | username or organization name | defaults to undefined
 **slug** | [**string**] | project slug | defaults to undefined


### Return type

**InsightsServiceQueryResponse**

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

# **queryInstant**
> MetricsServiceQueryValueResponse queryInstant(body)


### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiQueryInstantRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiQueryInstantRequest = {
    // username or organization name
  owner: "owner_example",
    // project slug
  slug: "slug_example",
  
  body: {
    queries: [
      {
        query: "query_example",
        alias: "alias_example",
        id: "id_example",
        labelSelector: {
          "key": "key_example",
        },
        aggregate: {
          op: "AVG",
          grouping: [
            "grouping_example",
          ],
        },
        functions: [
          {
            name: "name_example",
            arguments: [
              {
                stringValue: "stringValue_example",
                intValue: 1,
                doubleValue: 3.14,
                boolValue: true,
                durationValue: {
                  value: 3.14,
                  unit: "unit_example",
                },
              },
            ],
          },
        ],
        disabled: true,
      },
    ],
    formulas: [
      {
        expression: "expression_example",
        alias: "alias_example",
        id: "id_example",
        disabled: true,
        functions: [
          {
            name: "name_example",
            arguments: [
              {
                stringValue: "stringValue_example",
                intValue: 1,
                doubleValue: 3.14,
                boolValue: true,
                durationValue: {
                  value: 3.14,
                  unit: "unit_example",
                },
              },
            ],
          },
        ],
      },
    ],
    time: "time_example",
    samplesLimit: 1,
    version: 1,
    timezone: "timezone_example",
    samplesOffset: 1,
  },
};

const data = await apiInstance.queryInstant(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **MetricsServiceObservabilityServiceQueryBody**|  |
 **owner** | [**string**] | username or organization name | defaults to undefined
 **slug** | [**string**] | project slug | defaults to undefined


### Return type

**MetricsServiceQueryValueResponse**

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

# **queryLog**
> AnalyticServiceLogQueryResponse queryLog(body)


### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiQueryLogRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiQueryLogRequest = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  body: {
    projectId: "projectId_example",
    query: "query_example",
    timeRange: {
      start: {
        relativeTime: {
          unit: "unit_example",
          value: 1,
          align: "align_example",
        },
        absoluteTime: "absoluteTime_example",
      },
      end: {
        relativeTime: {
          unit: "unit_example",
          value: 1,
          align: "align_example",
        },
        absoluteTime: "absoluteTime_example",
      },
      step: "step_example",
      interval: {
        value: 3.14,
        unit: "unit_example",
      },
      timezone: "timezone_example",
    },
    sorts: [
      {
        field: "field_example",
        desc: true,
      },
    ],
    after: [
      {
        intValue: 1,
        longValue: "longValue_example",
        doubleValue: 3.14,
        stringValue: "stringValue_example",
        boolValue: true,
        dateValue: new Date('1970-01-01T00:00:00.00Z'),
        listValue: {
          values: [
            "values_example",
          ],
        },
      },
    ],
    limit: 1,
    offset: 1,
    filters: [
      {
        field: "field_example",
        value: "value_example",
        not: true,
      },
    ],
    version: 1,
  },
};

const data = await apiInstance.queryLog(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AnalyticServiceSearchServiceQueryLogBody**|  |
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined


### Return type

**AnalyticServiceLogQueryResponse**

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

# **queryLog2**
> AnalyticServiceLogQueryResponse queryLog2()


### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiQueryLog2Request } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiQueryLog2Request = {
  
  owner: "owner_example",
  
  slug: "slug_example",
  
  projectId: "projectId_example",
  
  query: "query_example",
  
  timeRangeStartRelativeTimeUnit: "timeRange.start.relativeTime.unit_example",
  
  timeRangeStartRelativeTimeValue: 1,
  
  timeRangeStartRelativeTimeAlign: "timeRange.start.relativeTime.align_example",
  
  timeRangeStartAbsoluteTime: "timeRange.start.absoluteTime_example",
  
  timeRangeEndRelativeTimeUnit: "timeRange.end.relativeTime.unit_example",
  
  timeRangeEndRelativeTimeValue: 1,
  
  timeRangeEndRelativeTimeAlign: "timeRange.end.relativeTime.align_example",
  
  timeRangeEndAbsoluteTime: "timeRange.end.absoluteTime_example",
  
  timeRangeStep: "timeRange.step_example",
  
  timeRangeIntervalValue: 3.14,
  
  timeRangeIntervalUnit: "timeRange.interval.unit_example",
  
  timeRangeTimezone: "timeRange.timezone_example",
  
  limit: 1,
  
  offset: 1,
  
  version: 1,
};

const data = await apiInstance.queryLog2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] |  | defaults to undefined
 **slug** | [**string**] |  | defaults to undefined
 **projectId** | [**string**] |  | (optional) defaults to undefined
 **query** | [**string**] |  | (optional) defaults to undefined
 **timeRangeStartRelativeTimeUnit** | [**string**] |  | (optional) defaults to undefined
 **timeRangeStartRelativeTimeValue** | [**number**] |  | (optional) defaults to undefined
 **timeRangeStartRelativeTimeAlign** | [**string**] |  | (optional) defaults to undefined
 **timeRangeStartAbsoluteTime** | [**string**] |  | (optional) defaults to undefined
 **timeRangeEndRelativeTimeUnit** | [**string**] |  | (optional) defaults to undefined
 **timeRangeEndRelativeTimeValue** | [**number**] |  | (optional) defaults to undefined
 **timeRangeEndRelativeTimeAlign** | [**string**] |  | (optional) defaults to undefined
 **timeRangeEndAbsoluteTime** | [**string**] |  | (optional) defaults to undefined
 **timeRangeStep** | [**string**] |  | (optional) defaults to undefined
 **timeRangeIntervalValue** | [**number**] |  | (optional) defaults to undefined
 **timeRangeIntervalUnit** | [**string**] |  | (optional) defaults to undefined
 **timeRangeTimezone** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **version** | [**number**] |  | (optional) defaults to undefined


### Return type

**AnalyticServiceLogQueryResponse**

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

# **queryRange**
> MetricsServiceMetricsQueryResponse queryRange(body)

The easiest way to build query is through UI, you could first create an insight chart, and then **Export as cURL**.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(101).png)

### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiQueryRangeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiQueryRangeRequest = {
    // username or organization name
  owner: "owner_example",
    // project slug
  slug: "slug_example",
  
  body: {
    queries: [
      {
        query: "query_example",
        alias: "alias_example",
        id: "id_example",
        labelSelector: {
          "key": "key_example",
        },
        aggregate: {
          op: "AVG",
          grouping: [
            "grouping_example",
          ],
        },
        functions: [
          {
            name: "name_example",
            arguments: [
              {
                stringValue: "stringValue_example",
                intValue: 1,
                doubleValue: 3.14,
                boolValue: true,
                durationValue: {
                  value: 3.14,
                  unit: "unit_example",
                },
              },
            ],
          },
        ],
        disabled: true,
      },
    ],
    formulas: [
      {
        expression: "expression_example",
        alias: "alias_example",
        id: "id_example",
        disabled: true,
        functions: [
          {
            name: "name_example",
            arguments: [
              {
                stringValue: "stringValue_example",
                intValue: 1,
                doubleValue: 3.14,
                boolValue: true,
                durationValue: {
                  value: 3.14,
                  unit: "unit_example",
                },
              },
            ],
          },
        ],
      },
    ],
    samplesLimit: 1,
    timeRange: {
      start: "start_example",
      end: "end_example",
      step: 1,
      timezone: "timezone_example",
    },
    projectId: "projectId_example",
    version: 1,
    samplesOffset: 1,
  },
};

const data = await apiInstance.queryRange(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **MetricsServiceObservabilityServiceQueryRangeBody**|  |
 **owner** | [**string**] | username or organization name | defaults to undefined
 **slug** | [**string**] | project slug | defaults to undefined


### Return type

**MetricsServiceMetricsQueryResponse**

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

# **querySQLExecutionDetail**
> AnalyticServiceQuerySQLExecutionDetailResponse querySQLExecutionDetail()

Query the execution detail of a SQL query by execution_id.

### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiQuerySQLExecutionDetailRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiQuerySQLExecutionDetailRequest = {
    // username or organization name
  owner: "owner_example",
    // project slug
  slug: "slug_example",
  
  executionId: "executionId_example",
    // use project id if project_owner and project_slug are not provided (optional)
  projectId: "projectId_example",
    // version of the datasource, default to the active version if not provided (optional)
  version: 1,
};

const data = await apiInstance.querySQLExecutionDetail(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] | username or organization name | defaults to undefined
 **slug** | [**string**] | project slug | defaults to undefined
 **executionId** | [**string**] |  | defaults to undefined
 **projectId** | [**string**] | use project id if project_owner and project_slug are not provided | (optional) defaults to undefined
 **version** | [**number**] | version of the datasource, default to the active version if not provided | (optional) defaults to undefined


### Return type

**AnalyticServiceQuerySQLExecutionDetailResponse**

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

# **querySQLResult**
> AnalyticServiceQuerySQLResultResponse querySQLResult()

Query the result of a SQL query by execution_id.

### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiQuerySQLResultRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiQuerySQLResultRequest = {
    // username or organization name
  owner: "owner_example",
    // project slug
  slug: "slug_example",
  
  executionId: "executionId_example",
    // use project id if project_owner and project_slug are not provided (optional)
  projectId: "projectId_example",
    // version of the datasource, default to the active version if not provided (optional)
  version: 1,
};

const data = await apiInstance.querySQLResult(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | [**string**] | username or organization name | defaults to undefined
 **slug** | [**string**] | project slug | defaults to undefined
 **executionId** | [**string**] |  | defaults to undefined
 **projectId** | [**string**] | use project id if project_owner and project_slug are not provided | (optional) defaults to undefined
 **version** | [**number**] | version of the datasource, default to the active version if not provided | (optional) defaults to undefined


### Return type

**AnalyticServiceQuerySQLResultResponse**

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

# **saveSQL**
> AnalyticServiceSaveSQLResponse saveSQL(body)

Save or update a SQL query in a project.

### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiSaveSQLRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiSaveSQLRequest = {
    // username or organization name
  owner: "owner_example",
    // project slug
  slug: "slug_example",
  
  body: {
    projectId: "projectId_example",
    version: 1,
    sqlQuery: {
      sql: "sql_example",
      size: 1,
      parameters: {
        fields: {
          "key": {
            nullValue: "NULL_VALUE",
            intValue: 1,
            int64Value: "int64Value_example",
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
    source: "SQL_EDITOR",
  },
};

const data = await apiInstance.saveSQL(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AnalyticServiceAnalyticServiceSaveSQLBody**|  |
 **owner** | [**string**] | username or organization name | defaults to undefined
 **slug** | [**string**] | project slug | defaults to undefined


### Return type

**AnalyticServiceSaveSQLResponse**

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

# **saveSQL2**
> AnalyticServiceSaveSQLResponse saveSQL2(body)

Save or update a SQL query in a project.

### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiSaveSQL2Request } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiSaveSQL2Request = {
    // username or organization name
  owner: "owner_example",
    // project slug
  slug: "slug_example",
  
  body: {
    projectId: "projectId_example",
    version: 1,
    sqlQuery: {
      sql: "sql_example",
      size: 1,
      parameters: {
        fields: {
          "key": {
            nullValue: "NULL_VALUE",
            intValue: 1,
            int64Value: "int64Value_example",
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
    source: "SQL_EDITOR",
  },
};

const data = await apiInstance.saveSQL2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AnalyticServiceAnalyticServiceSaveSQLBody**|  |
 **owner** | [**string**] | username or organization name | defaults to undefined
 **slug** | [**string**] | project slug | defaults to undefined


### Return type

**AnalyticServiceSaveSQLResponse**

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



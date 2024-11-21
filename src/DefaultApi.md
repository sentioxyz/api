# .DefaultApi

All URIs are relative to *https://app.sentio.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMute**](DefaultApi.md#createMute) | **POST** /api/v1/alerts/mute | low priority
[**deleteAlertRule**](DefaultApi.md#deleteAlertRule) | **DELETE** /api/v1/alerts/rule/{id} | 
[**deleteChannel**](DefaultApi.md#deleteChannel) | **DELETE** /api/v1/alerts/channels/{id} | 
[**getChannel**](DefaultApi.md#getChannel) | **GET** /api/v1/alerts/channels/{channelId} | TODO move channel related APIs somewhere else
[**getChannels**](DefaultApi.md#getChannels) | **GET** /api/v1/alerts/project/{projectId}/channels | 
[**resolveAlert**](DefaultApi.md#resolveAlert) | **POST** /api/v1/alerts/resolve/{alertId} | 
[**saveAlertRule**](DefaultApi.md#saveAlertRule) | **POST** /api/v1/alerts/rule | 
[**saveAlertRule2**](DefaultApi.md#saveAlertRule2) | **PUT** /api/v1/alerts/rule/{rule.id} | 
[**saveChannel**](DefaultApi.md#saveChannel) | **POST** /api/v1/alerts/channels | 
[**saveSlackChannel**](DefaultApi.md#saveSlackChannel) | **POST** /api/v1/alerts/channels/slack | 
[**testAlert**](DefaultApi.md#testAlert) | **POST** /api/v1/alerts/test | 
[**updateMute**](DefaultApi.md#updateMute) | **PUT** /api/v1/alerts/mute/{muteId} | 


# **createMute**
> any createMute(body)


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateMuteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateMuteRequest = {
  
  body: {
    mute: {
      id: "id_example",
      ruleId: "ruleId_example",
      group: "group_example",
      active: true,
      startTime: new Date('1970-01-01T00:00:00.00Z'),
      endTime: new Date('1970-01-01T00:00:00.00Z'),
      updateTime: new Date('1970-01-01T00:00:00.00Z'),
    },
  },
};

const data = await apiInstance.createMute(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AlertServiceCreateMuteRequest**|  |


### Return type

**any**

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

# **deleteChannel**
> any deleteChannel()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteChannelRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteChannelRequest = {
  
  id: "id_example",
};

const data = await apiInstance.deleteChannel(request);
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

# **getChannel**
> AlertServiceGetChannelResponse getChannel()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetChannelRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetChannelRequest = {
  
  channelId: "channelId_example",
  
  projectId: "projectId_example",
};

const data = await apiInstance.getChannel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelId** | [**string**] |  | defaults to undefined
 **projectId** | [**string**] |  | (optional) defaults to undefined


### Return type

**AlertServiceGetChannelResponse**

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

# **getChannels**
> AlertServiceGetChannelResponse getChannels()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetChannelsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetChannelsRequest = {
  
  projectId: "projectId_example",
  
  channelId: "channelId_example",
};

const data = await apiInstance.getChannels(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] |  | defaults to undefined
 **channelId** | [**string**] |  | (optional) defaults to undefined


### Return type

**AlertServiceGetChannelResponse**

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

# **resolveAlert**
> any resolveAlert(body)


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiResolveAlertRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiResolveAlertRequest = {
  
  alertId: "alertId_example",
  
  body: {},
};

const data = await apiInstance.resolveAlert(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **alertId** | [**string**] |  | defaults to undefined


### Return type

**any**

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

# **saveAlertRule**
> any saveAlertRule(body)


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiSaveAlertRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiSaveAlertRuleRequest = {
  
  body: {
    rule: {
      id: "id_example",
      projectId: "projectId_example",
      state: "NO_DATA",
      subject: "subject_example",
      message: "message_example",
      group: "group_example",
      query: "query_example",
      _for: {
        value: 3.14,
        unit: "unit_example",
      },
      channels: [
        {
          id: "id_example",
          projectId: "projectId_example",
          type: "UNKNOWN",
          slackWebhookUrl: "slackWebhookUrl_example",
          emailAddress: "emailAddress_example",
          name: "name_example",
          customWebhookUrl: "customWebhookUrl_example",
          customHeaders: {
            "key": "key_example",
          },
          telegramReference: "telegramReference_example",
          telegramChatId: "telegramChatId_example",
          slackTeam: "slackTeam_example",
          slackChannel: "slackChannel_example",
          pagerdutyConfig: {},
        },
      ],
      updateTime: new Date('1970-01-01T00:00:00.00Z'),
      condition: {
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
        formula: {
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
        comparisonOp: "comparisonOp_example",
        threshold: 3.14,
        eventsQueries: [
          {
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
        ],
        priceQueries: [
          {
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
        ],
        insightQueries: [
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
            sourceName: "sourceName_example",
          },
        ],
      },
      renotifyDuration: {
        value: 3.14,
        unit: "unit_example",
      },
      renotifyLimit: 1,
      alertType: "METRIC",
      logCondition: {
        query: "query_example",
        comparisonOp: "comparisonOp_example",
        threshold: 1,
      },
      lastQueryTime: new Date('1970-01-01T00:00:00.00Z'),
      mute: true,
      interval: {
        value: 3.14,
        unit: "unit_example",
      },
    },
  },
};

const data = await apiInstance.saveAlertRule(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AlertServiceSaveAlertRuleRequest**|  |


### Return type

**any**

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

# **saveAlertRule2**
> any saveAlertRule2(body)


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiSaveAlertRule2Request } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiSaveAlertRule2Request = {
  
  ruleId: "rule.id_example",
  
  body: {
    rule: {
      projectId: "projectId_example",
      state: "NO_DATA",
      subject: "subject_example",
      message: "message_example",
      group: "group_example",
      query: "query_example",
      _for: {
        value: 3.14,
        unit: "unit_example",
      },
      channels: [
        {
          id: "id_example",
          projectId: "projectId_example",
          type: "UNKNOWN",
          slackWebhookUrl: "slackWebhookUrl_example",
          emailAddress: "emailAddress_example",
          name: "name_example",
          customWebhookUrl: "customWebhookUrl_example",
          customHeaders: {
            "key": "key_example",
          },
          telegramReference: "telegramReference_example",
          telegramChatId: "telegramChatId_example",
          slackTeam: "slackTeam_example",
          slackChannel: "slackChannel_example",
          pagerdutyConfig: {},
        },
      ],
      updateTime: new Date('1970-01-01T00:00:00.00Z'),
      condition: {
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
        formula: {
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
        comparisonOp: "comparisonOp_example",
        threshold: 3.14,
        eventsQueries: [
          {
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
        ],
        priceQueries: [
          {
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
        ],
        insightQueries: [
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
            sourceName: "sourceName_example",
          },
        ],
      },
      renotifyDuration: {
        value: 3.14,
        unit: "unit_example",
      },
      renotifyLimit: 1,
      alertType: "METRIC",
      logCondition: {
        query: "query_example",
        comparisonOp: "comparisonOp_example",
        threshold: 1,
      },
      lastQueryTime: new Date('1970-01-01T00:00:00.00Z'),
      mute: true,
      interval: {
        value: 3.14,
        unit: "unit_example",
      },
    },
  },
};

const data = await apiInstance.saveAlertRule2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AlertServiceAlertServiceSaveAlertRuleBody**|  |
 **ruleId** | [**string**] |  | defaults to undefined


### Return type

**any**

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

# **saveChannel**
> AlertServiceSaveChannelResponse saveChannel(body)


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiSaveChannelRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiSaveChannelRequest = {
  
  body: {
    channel: {
      id: "id_example",
      projectId: "projectId_example",
      type: "UNKNOWN",
      slackWebhookUrl: "slackWebhookUrl_example",
      emailAddress: "emailAddress_example",
      name: "name_example",
      customWebhookUrl: "customWebhookUrl_example",
      customHeaders: {
        "key": "key_example",
      },
      telegramReference: "telegramReference_example",
      telegramChatId: "telegramChatId_example",
      slackTeam: "slackTeam_example",
      slackChannel: "slackChannel_example",
      pagerdutyConfig: {},
    },
  },
};

const data = await apiInstance.saveChannel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AlertServiceSaveChannelRequest**|  |


### Return type

**AlertServiceSaveChannelResponse**

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

# **saveSlackChannel**
> AlertServiceSaveChannelResponse saveSlackChannel(body)


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiSaveSlackChannelRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiSaveSlackChannelRequest = {
  
  body: {
    channel: {
      id: "id_example",
      projectId: "projectId_example",
      type: "UNKNOWN",
      slackWebhookUrl: "slackWebhookUrl_example",
      emailAddress: "emailAddress_example",
      name: "name_example",
      customWebhookUrl: "customWebhookUrl_example",
      customHeaders: {
        "key": "key_example",
      },
      telegramReference: "telegramReference_example",
      telegramChatId: "telegramChatId_example",
      slackTeam: "slackTeam_example",
      slackChannel: "slackChannel_example",
      pagerdutyConfig: {},
    },
    code: "code_example",
    redirectUri: "redirectUri_example",
  },
};

const data = await apiInstance.saveSlackChannel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AlertServiceSaveSlackChannelRequest**|  |


### Return type

**AlertServiceSaveChannelResponse**

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

# **testAlert**
> any testAlert(body)


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiTestAlertRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiTestAlertRequest = {
  
  body: {
    rule: {
      id: "id_example",
      projectId: "projectId_example",
      state: "NO_DATA",
      subject: "subject_example",
      message: "message_example",
      group: "group_example",
      query: "query_example",
      _for: {
        value: 3.14,
        unit: "unit_example",
      },
      channels: [
        {
          id: "id_example",
          projectId: "projectId_example",
          type: "UNKNOWN",
          slackWebhookUrl: "slackWebhookUrl_example",
          emailAddress: "emailAddress_example",
          name: "name_example",
          customWebhookUrl: "customWebhookUrl_example",
          customHeaders: {
            "key": "key_example",
          },
          telegramReference: "telegramReference_example",
          telegramChatId: "telegramChatId_example",
          slackTeam: "slackTeam_example",
          slackChannel: "slackChannel_example",
          pagerdutyConfig: {},
        },
      ],
      updateTime: new Date('1970-01-01T00:00:00.00Z'),
      condition: {
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
        formula: {
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
        comparisonOp: "comparisonOp_example",
        threshold: 3.14,
        eventsQueries: [
          {
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
        ],
        priceQueries: [
          {
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
        ],
        insightQueries: [
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
            sourceName: "sourceName_example",
          },
        ],
      },
      renotifyDuration: {
        value: 3.14,
        unit: "unit_example",
      },
      renotifyLimit: 1,
      alertType: "METRIC",
      logCondition: {
        query: "query_example",
        comparisonOp: "comparisonOp_example",
        threshold: 1,
      },
      lastQueryTime: new Date('1970-01-01T00:00:00.00Z'),
      mute: true,
      interval: {
        value: 3.14,
        unit: "unit_example",
      },
    },
    timeRange: {
      start: "start_example",
      end: "end_example",
      step: 1,
      timezone: "timezone_example",
    },
  },
};

const data = await apiInstance.testAlert(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AlertServiceTestAlertRequest**|  |


### Return type

**any**

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

# **updateMute**
> any updateMute(body)


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateMuteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateMuteRequest = {
  
  muteId: "muteId_example",
  
  body: {
    unmute: true,
    mute: {
      id: "id_example",
      ruleId: "ruleId_example",
      group: "group_example",
      active: true,
      startTime: new Date('1970-01-01T00:00:00.00Z'),
      endTime: new Date('1970-01-01T00:00:00.00Z'),
      updateTime: new Date('1970-01-01T00:00:00.00Z'),
    },
  },
};

const data = await apiInstance.updateMute(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AlertServiceAlertServiceUpdateMuteBody**|  |
 **muteId** | [**string**] |  | defaults to undefined


### Return type

**any**

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



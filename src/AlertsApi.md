# .AlertsApi

All URIs are relative to *https://app.sentio.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAlertRule**](AlertsApi.md#deleteAlertRule) | **DELETE** /api/v1/alerts/rule/{id} | Delete an alert rule
[**getAlert**](AlertsApi.md#getAlert) | **GET** /api/v1/alerts/{ruleId} | Find an alert rule by id, and list all alerts for this rule
[**getAlertRules**](AlertsApi.md#getAlertRules) | **GET** /api/v1/alerts/rule/project/{projectId} | List all alert rules for a project
[**saveAlertRule**](AlertsApi.md#saveAlertRule) | **POST** /api/v1/alerts/rule | Save an alert rule
[**saveAlertRule2**](AlertsApi.md#saveAlertRule2) | **PUT** /api/v1/alerts/rule/{id} | Save an alert rule


# **deleteAlertRule**
> any deleteAlertRule()


### Example


```typescript
import { createConfiguration, AlertsApi } from '';
import type { AlertsApiDeleteAlertRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertsApi(configuration);

const request: AlertsApiDeleteAlertRuleRequest = {
  
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

[ApiKeyHeaderAuth](README.md#ApiKeyHeaderAuth), [ApiKeyQueryAuth](README.md#ApiKeyQueryAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

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

[ApiKeyHeaderAuth](README.md#ApiKeyHeaderAuth), [ApiKeyQueryAuth](README.md#ApiKeyQueryAuth)

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

[ApiKeyHeaderAuth](README.md#ApiKeyHeaderAuth), [ApiKeyQueryAuth](README.md#ApiKeyQueryAuth)

### HTTP request headers

 - **Content-Type**: Not defined
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
import { createConfiguration, AlertsApi } from '';
import type { AlertsApiSaveAlertRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertsApi(configuration);

const request: AlertsApiSaveAlertRuleRequest = {
  
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
            color: "color_example",
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
          color: "color_example",
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
            color: "color_example",
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
            color: "color_example",
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
              color: "color_example",
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
              color: "color_example",
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
              color: "color_example",
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

[ApiKeyHeaderAuth](README.md#ApiKeyHeaderAuth), [ApiKeyQueryAuth](README.md#ApiKeyQueryAuth)

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
import { createConfiguration, AlertsApi } from '';
import type { AlertsApiSaveAlertRule2Request } from '';

const configuration = createConfiguration();
const apiInstance = new AlertsApi(configuration);

const request: AlertsApiSaveAlertRule2Request = {
  
  id: "id_example",
  
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
            color: "color_example",
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
          color: "color_example",
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
            color: "color_example",
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
            color: "color_example",
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
              color: "color_example",
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
              color: "color_example",
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
              color: "color_example",
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
 **id** | [**string**] |  | defaults to undefined


### Return type

**any**

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



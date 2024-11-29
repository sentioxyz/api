import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.js';
import { Configuration} from '../configuration.js'
import { Observable, of, from } from '../rxjsStub.js';
import {mergeMap, map} from  '../rxjsStub.js';
import { AlertServiceAlert } from '../models/AlertServiceAlert.js';
import { AlertServiceAlertAlertState } from '../models/AlertServiceAlertAlertState.js';
import { AlertServiceAlertRule } from '../models/AlertServiceAlertRule.js';
import { AlertServiceAlertRuleState } from '../models/AlertServiceAlertRuleState.js';
import { AlertServiceAlertServiceSaveAlertRuleBody } from '../models/AlertServiceAlertServiceSaveAlertRuleBody.js';
import { AlertServiceAlertServiceSaveAlertRuleBodyRule } from '../models/AlertServiceAlertServiceSaveAlertRuleBodyRule.js';
import { AlertServiceAlertType } from '../models/AlertServiceAlertType.js';
import { AlertServiceCondition } from '../models/AlertServiceCondition.js';
import { AlertServiceConditionInsightQuery } from '../models/AlertServiceConditionInsightQuery.js';
import { AlertServiceGetAlertResponse } from '../models/AlertServiceGetAlertResponse.js';
import { AlertServiceGetAlertRulesResponse } from '../models/AlertServiceGetAlertRulesResponse.js';
import { AlertServiceLogCondition } from '../models/AlertServiceLogCondition.js';
import { AlertServiceMute } from '../models/AlertServiceMute.js';
import { AlertServiceSample } from '../models/AlertServiceSample.js';
import { AlertServiceSaveAlertRuleRequest } from '../models/AlertServiceSaveAlertRuleRequest.js';
import { AnalyticServiceAnalyticServiceExecuteSQLBody } from '../models/AnalyticServiceAnalyticServiceExecuteSQLBody.js';
import { AnalyticServiceAnalyticServiceRerunSQLQueryBody } from '../models/AnalyticServiceAnalyticServiceRerunSQLQueryBody.js';
import { AnalyticServiceAnalyticServiceSaveSQLBody } from '../models/AnalyticServiceAnalyticServiceSaveSQLBody.js';
import { AnalyticServiceExecutionInfo } from '../models/AnalyticServiceExecutionInfo.js';
import { AnalyticServiceExecutionStatus } from '../models/AnalyticServiceExecutionStatus.js';
import { AnalyticServiceLogQueryRequestFilter } from '../models/AnalyticServiceLogQueryRequestFilter.js';
import { AnalyticServiceLogQueryRequestSort } from '../models/AnalyticServiceLogQueryRequestSort.js';
import { AnalyticServiceLogQueryResponse } from '../models/AnalyticServiceLogQueryResponse.js';
import { AnalyticServiceQuerySQLResultResponse } from '../models/AnalyticServiceQuerySQLResultResponse.js';
import { AnalyticServiceRerunSQLQueryRequest } from '../models/AnalyticServiceRerunSQLQueryRequest.js';
import { AnalyticServiceRerunSQLQueryResponse } from '../models/AnalyticServiceRerunSQLQueryResponse.js';
import { AnalyticServiceSQLQuery } from '../models/AnalyticServiceSQLQuery.js';
import { AnalyticServiceSaveSQLRequest } from '../models/AnalyticServiceSaveSQLRequest.js';
import { AnalyticServiceSaveSQLResponse } from '../models/AnalyticServiceSaveSQLResponse.js';
import { AnalyticServiceSearchServiceQueryLogBody } from '../models/AnalyticServiceSearchServiceQueryLogBody.js';
import { AnalyticServiceSource } from '../models/AnalyticServiceSource.js';
import { AnalyticServiceSyncExecuteSQLResponse } from '../models/AnalyticServiceSyncExecuteSQLResponse.js';
import { CommonAggregate } from '../models/CommonAggregate.js';
import { CommonAggregateAggregateOps } from '../models/CommonAggregateAggregateOps.js';
import { CommonAny } from '../models/CommonAny.js';
import { CommonArgument } from '../models/CommonArgument.js';
import { CommonBigDecimal } from '../models/CommonBigDecimal.js';
import { CommonBigInteger } from '../models/CommonBigInteger.js';
import { CommonCachePolicy } from '../models/CommonCachePolicy.js';
import { CommonChannel } from '../models/CommonChannel.js';
import { CommonChannelType } from '../models/CommonChannelType.js';
import { CommonCohortsFilter } from '../models/CommonCohortsFilter.js';
import { CommonCohortsFilterAggregation } from '../models/CommonCohortsFilterAggregation.js';
import { CommonCohortsFilterAggregationAggregateProperties } from '../models/CommonCohortsFilterAggregationAggregateProperties.js';
import { CommonCohortsFilterAggregationAggregatePropertiesAggregationType } from '../models/CommonCohortsFilterAggregationAggregatePropertiesAggregationType.js';
import { CommonCohortsFilterAggregationOperatorType } from '../models/CommonCohortsFilterAggregationOperatorType.js';
import { CommonCohortsGroup } from '../models/CommonCohortsGroup.js';
import { CommonCohortsQuery } from '../models/CommonCohortsQuery.js';
import { CommonCoinID } from '../models/CommonCoinID.js';
import { CommonCoinIDAddressIdentifier } from '../models/CommonCoinIDAddressIdentifier.js';
import { CommonColumnState } from '../models/CommonColumnState.js';
import { CommonColumnStateSort } from '../models/CommonColumnStateSort.js';
import { CommonComputeStats } from '../models/CommonComputeStats.js';
import { CommonDuration } from '../models/CommonDuration.js';
import { CommonEventLogColumn } from '../models/CommonEventLogColumn.js';
import { CommonEventLogConfig } from '../models/CommonEventLogConfig.js';
import { CommonEventLogEntry } from '../models/CommonEventLogEntry.js';
import { CommonFormula } from '../models/CommonFormula.js';
import { CommonFunction } from '../models/CommonFunction.js';
import { CommonJoinOperator } from '../models/CommonJoinOperator.js';
import { CommonMatrix } from '../models/CommonMatrix.js';
import { CommonMatrixMetric } from '../models/CommonMatrixMetric.js';
import { CommonMatrixSample } from '../models/CommonMatrixSample.js';
import { CommonMatrixValue } from '../models/CommonMatrixValue.js';
import { CommonOrganization } from '../models/CommonOrganization.js';
import { CommonOrganizationMember } from '../models/CommonOrganizationMember.js';
import { CommonOrganizationRole } from '../models/CommonOrganizationRole.js';
import { CommonOwner } from '../models/CommonOwner.js';
import { CommonPermission } from '../models/CommonPermission.js';
import { CommonPriceSegmentationQuery } from '../models/CommonPriceSegmentationQuery.js';
import { CommonProject } from '../models/CommonProject.js';
import { CommonProjectInfo } from '../models/CommonProjectInfo.js';
import { CommonProjectProjectMember } from '../models/CommonProjectProjectMember.js';
import { CommonProjectSuperset } from '../models/CommonProjectSuperset.js';
import { CommonProjectType } from '../models/CommonProjectType.js';
import { CommonProjectView } from '../models/CommonProjectView.js';
import { CommonProjectViewProjectViewConfig } from '../models/CommonProjectViewProjectViewConfig.js';
import { CommonProjectVisibility } from '../models/CommonProjectVisibility.js';
import { CommonQuery } from '../models/CommonQuery.js';
import { CommonRetentionMatrix } from '../models/CommonRetentionMatrix.js';
import { CommonRetentionMatrixSample } from '../models/CommonRetentionMatrixSample.js';
import { CommonRetentionQuery } from '../models/CommonRetentionQuery.js';
import { CommonRetentionQueryCriteria } from '../models/CommonRetentionQueryCriteria.js';
import { CommonRetentionQueryFilter } from '../models/CommonRetentionQueryFilter.js';
import { CommonRetentionQueryFilterTimeFilter } from '../models/CommonRetentionQueryFilterTimeFilter.js';
import { CommonRetentionQueryFilterTimeFilterType } from '../models/CommonRetentionQueryFilterTimeFilterType.js';
import { CommonRetentionQueryInterval } from '../models/CommonRetentionQueryInterval.js';
import { CommonRetentionQueryIntervalUnit } from '../models/CommonRetentionQueryIntervalUnit.js';
import { CommonRetentionQueryResource } from '../models/CommonRetentionQueryResource.js';
import { CommonRichStruct } from '../models/CommonRichStruct.js';
import { CommonRichValue } from '../models/CommonRichValue.js';
import { CommonRichValueList } from '../models/CommonRichValueList.js';
import { CommonRichValueNullValue } from '../models/CommonRichValueNullValue.js';
import { CommonSegmentParameter } from '../models/CommonSegmentParameter.js';
import { CommonSegmentationQuery } from '../models/CommonSegmentationQuery.js';
import { CommonSegmentationQueryAggregation } from '../models/CommonSegmentationQueryAggregation.js';
import { CommonSegmentationQueryAggregationAggregateProperties } from '../models/CommonSegmentationQueryAggregationAggregateProperties.js';
import { CommonSegmentationQueryAggregationAggregatePropertiesAggregationType } from '../models/CommonSegmentationQueryAggregationAggregatePropertiesAggregationType.js';
import { CommonSegmentationQueryAggregationCountUnique } from '../models/CommonSegmentationQueryAggregationCountUnique.js';
import { CommonSegmentationQueryResource } from '../models/CommonSegmentationQueryResource.js';
import { CommonSegmentationQueryResourceType } from '../models/CommonSegmentationQueryResourceType.js';
import { CommonSegmentationQuerySelectorExpr } from '../models/CommonSegmentationQuerySelectorExpr.js';
import { CommonSegmentationQuerySelectorExprLogicExpr } from '../models/CommonSegmentationQuerySelectorExprLogicExpr.js';
import { CommonSelector } from '../models/CommonSelector.js';
import { CommonSelectorExpr } from '../models/CommonSelectorExpr.js';
import { CommonSelectorExprLogicExpr } from '../models/CommonSelectorExprLogicExpr.js';
import { CommonSelectorOperatorType } from '../models/CommonSelectorOperatorType.js';
import { CommonStringList } from '../models/CommonStringList.js';
import { CommonTabularData } from '../models/CommonTabularData.js';
import { CommonTabularDataColumnType } from '../models/CommonTabularDataColumnType.js';
import { CommonTier } from '../models/CommonTier.js';
import { CommonTimeRange } from '../models/CommonTimeRange.js';
import { CommonTimeRangeLite } from '../models/CommonTimeRangeLite.js';
import { CommonTimeRangeRelativeTime } from '../models/CommonTimeRangeRelativeTime.js';
import { CommonTimeRangeTimeLike } from '../models/CommonTimeRangeTimeLike.js';
import { CommonTokenAmount } from '../models/CommonTokenAmount.js';
import { CommonUser } from '../models/CommonUser.js';
import { CommonUserAccountStatus } from '../models/CommonUserAccountStatus.js';
import { CommonUserInfo } from '../models/CommonUserInfo.js';
import { EvmAccessListItem } from '../models/EvmAccessListItem.js';
import { EvmTransaction } from '../models/EvmTransaction.js';
import { EvmTransactionReceipt } from '../models/EvmTransactionReceipt.js';
import { GoogleApiHttpBody } from '../models/GoogleApiHttpBody.js';
import { GoogleProtobufAny } from '../models/GoogleProtobufAny.js';
import { GoogleProtobufNullValue } from '../models/GoogleProtobufNullValue.js';
import { InsightsServiceDataSource } from '../models/InsightsServiceDataSource.js';
import { InsightsServiceInsightsServiceQueryBody } from '../models/InsightsServiceInsightsServiceQueryBody.js';
import { InsightsServiceInsightsServiceRetentionBody } from '../models/InsightsServiceInsightsServiceRetentionBody.js';
import { InsightsServiceListCoinsResponse } from '../models/InsightsServiceListCoinsResponse.js';
import { InsightsServiceQueryRequestQuery } from '../models/InsightsServiceQueryRequestQuery.js';
import { InsightsServiceQueryResponse } from '../models/InsightsServiceQueryResponse.js';
import { InsightsServiceQueryResponseResult } from '../models/InsightsServiceQueryResponseResult.js';
import { InsightsServiceRetentionRequest } from '../models/InsightsServiceRetentionRequest.js';
import { InsightsServiceRetentionResponse } from '../models/InsightsServiceRetentionResponse.js';
import { MetricsServiceGetMetricsResponse } from '../models/MetricsServiceGetMetricsResponse.js';
import { MetricsServiceMetricInfo } from '../models/MetricsServiceMetricInfo.js';
import { MetricsServiceMetricInfoLabelValues } from '../models/MetricsServiceMetricInfoLabelValues.js';
import { MetricsServiceMetricMetadata } from '../models/MetricsServiceMetricMetadata.js';
import { MetricsServiceMetricsQueryResponse } from '../models/MetricsServiceMetricsQueryResponse.js';
import { MetricsServiceMetricsQueryResponseMatrix } from '../models/MetricsServiceMetricsQueryResponseMatrix.js';
import { MetricsServiceMetricsQueryResponseMetric } from '../models/MetricsServiceMetricsQueryResponseMetric.js';
import { MetricsServiceMetricsQueryResponseResult } from '../models/MetricsServiceMetricsQueryResponseResult.js';
import { MetricsServiceMetricsQueryResponseSample } from '../models/MetricsServiceMetricsQueryResponseSample.js';
import { MetricsServiceMetricsQueryResponseValue } from '../models/MetricsServiceMetricsQueryResponseValue.js';
import { MetricsServiceObservabilityServiceQueryBody } from '../models/MetricsServiceObservabilityServiceQueryBody.js';
import { MetricsServiceObservabilityServiceQueryRangeBody } from '../models/MetricsServiceObservabilityServiceQueryRangeBody.js';
import { MetricsServiceQueryValueResponse } from '../models/MetricsServiceQueryValueResponse.js';
import { MetricsServiceQueryValueResponseResult } from '../models/MetricsServiceQueryValueResponseResult.js';
import { PriceServiceBatchGetPricesRequest } from '../models/PriceServiceBatchGetPricesRequest.js';
import { PriceServiceBatchGetPricesResponse } from '../models/PriceServiceBatchGetPricesResponse.js';
import { PriceServiceBatchGetPricesResponseCoinPrice } from '../models/PriceServiceBatchGetPricesResponseCoinPrice.js';
import { PriceServiceBatchGetPricesResponseCoinPricePrice } from '../models/PriceServiceBatchGetPricesResponseCoinPricePrice.js';
import { PriceServiceCheckLatestPriceResponse } from '../models/PriceServiceCheckLatestPriceResponse.js';
import { PriceServiceCheckLatestPriceResponseCoinPrice } from '../models/PriceServiceCheckLatestPriceResponseCoinPrice.js';
import { PriceServiceCoinID } from '../models/PriceServiceCoinID.js';
import { PriceServiceCoinIDAddressIdentifier } from '../models/PriceServiceCoinIDAddressIdentifier.js';
import { PriceServiceGetPriceResponse } from '../models/PriceServiceGetPriceResponse.js';
import { PriceServiceListCoinsResponse } from '../models/PriceServiceListCoinsResponse.js';
import { SolidityServiceBaseChainConfig } from '../models/SolidityServiceBaseChainConfig.js';
import { SolidityServiceBlockOverrides } from '../models/SolidityServiceBlockOverrides.js';
import { SolidityServiceChainIdentifier } from '../models/SolidityServiceChainIdentifier.js';
import { SolidityServiceCompileSourceInternalResponse } from '../models/SolidityServiceCompileSourceInternalResponse.js';
import { SolidityServiceCompilerOptions } from '../models/SolidityServiceCompilerOptions.js';
import { SolidityServiceContractKeyInfo } from '../models/SolidityServiceContractKeyInfo.js';
import { SolidityServiceCreateForkResponse } from '../models/SolidityServiceCreateForkResponse.js';
import { SolidityServiceDecodeStateDiffResponse } from '../models/SolidityServiceDecodeStateDiffResponse.js';
import { SolidityServiceExternalFork } from '../models/SolidityServiceExternalFork.js';
import { SolidityServiceFailure } from '../models/SolidityServiceFailure.js';
import { SolidityServiceFetchAndCompileInternalResponse } from '../models/SolidityServiceFetchAndCompileInternalResponse.js';
import { SolidityServiceFork } from '../models/SolidityServiceFork.js';
import { SolidityServiceForkServiceCreateForkBody } from '../models/SolidityServiceForkServiceCreateForkBody.js';
import { SolidityServiceForkServiceUpdateForkBody } from '../models/SolidityServiceForkServiceUpdateForkBody.js';
import { SolidityServiceForkType } from '../models/SolidityServiceForkType.js';
import { SolidityServiceGetForkInfoResponse } from '../models/SolidityServiceGetForkInfoResponse.js';
import { SolidityServiceGetForkResponse } from '../models/SolidityServiceGetForkResponse.js';
import { SolidityServiceGetSimulationBundleResponse } from '../models/SolidityServiceGetSimulationBundleResponse.js';
import { SolidityServiceGetSimulationResponse } from '../models/SolidityServiceGetSimulationResponse.js';
import { SolidityServiceGetSimulationsResponse } from '../models/SolidityServiceGetSimulationsResponse.js';
import { SolidityServiceGetStorageSummaryInternalResponse } from '../models/SolidityServiceGetStorageSummaryInternalResponse.js';
import { SolidityServiceGetTraceCallInternalRequestBundle } from '../models/SolidityServiceGetTraceCallInternalRequestBundle.js';
import { SolidityServiceGetTraceCallInternalRequestStateContext } from '../models/SolidityServiceGetTraceCallInternalRequestStateContext.js';
import { SolidityServiceGetTraceCallInternalResponse } from '../models/SolidityServiceGetTraceCallInternalResponse.js';
import { SolidityServiceGetTraceTransactionInternalResponse } from '../models/SolidityServiceGetTraceTransactionInternalResponse.js';
import { SolidityServiceListForksResponse } from '../models/SolidityServiceListForksResponse.js';
import { SolidityServiceManagedFork } from '../models/SolidityServiceManagedFork.js';
import { SolidityServiceMetadata } from '../models/SolidityServiceMetadata.js';
import { SolidityServiceNodeEnvironment } from '../models/SolidityServiceNodeEnvironment.js';
import { SolidityServiceNodeForkConfig } from '../models/SolidityServiceNodeForkConfig.js';
import { SolidityServiceOptimizer } from '../models/SolidityServiceOptimizer.js';
import { SolidityServiceOptimizerDetails } from '../models/SolidityServiceOptimizerDetails.js';
import { SolidityServiceOptimizerDetailsYulDetails } from '../models/SolidityServiceOptimizerDetailsYulDetails.js';
import { SolidityServicePreProcessCompilationInternalResponse } from '../models/SolidityServicePreProcessCompilationInternalResponse.js';
import { SolidityServiceSettings } from '../models/SolidityServiceSettings.js';
import { SolidityServiceSimulateTransactionBundleResponse } from '../models/SolidityServiceSimulateTransactionBundleResponse.js';
import { SolidityServiceSimulateTransactionResponse } from '../models/SolidityServiceSimulateTransactionResponse.js';
import { SolidityServiceSimulation } from '../models/SolidityServiceSimulation.js';
import { SolidityServiceSimulationResult } from '../models/SolidityServiceSimulationResult.js';
import { SolidityServiceSolidityAPIServiceSimulateTransactionBody } from '../models/SolidityServiceSolidityAPIServiceSimulateTransactionBody.js';
import { SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody } from '../models/SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody.js';
import { SolidityServiceSolidityAPIServiceSimulateTransactionBundleOnForkBody } from '../models/SolidityServiceSolidityAPIServiceSimulateTransactionBundleOnForkBody.js';
import { SolidityServiceSolidityAPIServiceSimulateTransactionOnForkBody } from '../models/SolidityServiceSolidityAPIServiceSimulateTransactionOnForkBody.js';
import { SolidityServiceSourceFetcherType } from '../models/SolidityServiceSourceFetcherType.js';
import { SolidityServiceSourceInfo } from '../models/SolidityServiceSourceInfo.js';
import { SolidityServiceSourceMultiFile } from '../models/SolidityServiceSourceMultiFile.js';
import { SolidityServiceSourceSpec } from '../models/SolidityServiceSourceSpec.js';
import { SolidityServiceSpecializations } from '../models/SolidityServiceSpecializations.js';
import { SolidityServiceStateOverride } from '../models/SolidityServiceStateOverride.js';
import { SolidityServiceStorageSummaryResult } from '../models/SolidityServiceStorageSummaryResult.js';
import { SolidityServiceUpdateForkResponse } from '../models/SolidityServiceUpdateForkResponse.js';
import { TxindexEvmRawTransaction } from '../models/TxindexEvmRawTransaction.js';
import { TxindexEvmSearchTransactionsResponse } from '../models/TxindexEvmSearchTransactionsResponse.js';
import { WebServiceChart } from '../models/WebServiceChart.js';
import { WebServiceChartChartType } from '../models/WebServiceChartChartType.js';
import { WebServiceChartConfig } from '../models/WebServiceChartConfig.js';
import { WebServiceChartConfigBarGaugeConfig } from '../models/WebServiceChartConfigBarGaugeConfig.js';
import { WebServiceChartConfigCalculation } from '../models/WebServiceChartConfigCalculation.js';
import { WebServiceChartConfigColorTheme } from '../models/WebServiceChartConfigColorTheme.js';
import { WebServiceChartConfigColumnSort } from '../models/WebServiceChartConfigColumnSort.js';
import { WebServiceChartConfigCompareTime } from '../models/WebServiceChartConfigCompareTime.js';
import { WebServiceChartConfigDirection } from '../models/WebServiceChartConfigDirection.js';
import { WebServiceChartConfigLineConfig } from '../models/WebServiceChartConfigLineConfig.js';
import { WebServiceChartConfigLineConfigStyle } from '../models/WebServiceChartConfigLineConfigStyle.js';
import { WebServiceChartConfigMappingRule } from '../models/WebServiceChartConfigMappingRule.js';
import { WebServiceChartConfigMarker } from '../models/WebServiceChartConfigMarker.js';
import { WebServiceChartConfigMarkerType } from '../models/WebServiceChartConfigMarkerType.js';
import { WebServiceChartConfigPieConfig } from '../models/WebServiceChartConfigPieConfig.js';
import { WebServiceChartConfigPieConfigPieType } from '../models/WebServiceChartConfigPieConfigPieType.js';
import { WebServiceChartConfigQueryValueConfig } from '../models/WebServiceChartConfigQueryValueConfig.js';
import { WebServiceChartConfigSort } from '../models/WebServiceChartConfigSort.js';
import { WebServiceChartConfigSortBy } from '../models/WebServiceChartConfigSortBy.js';
import { WebServiceChartConfigTableConfig } from '../models/WebServiceChartConfigTableConfig.js';
import { WebServiceChartConfigTimeRangeOverride } from '../models/WebServiceChartConfigTimeRangeOverride.js';
import { WebServiceChartConfigValueConfig } from '../models/WebServiceChartConfigValueConfig.js';
import { WebServiceChartConfigValueConfigStyle } from '../models/WebServiceChartConfigValueConfigStyle.js';
import { WebServiceChartConfigValueFormatter } from '../models/WebServiceChartConfigValueFormatter.js';
import { WebServiceChartConfigYAxisConfig } from '../models/WebServiceChartConfigYAxisConfig.js';
import { WebServiceChartDataSourceType } from '../models/WebServiceChartDataSourceType.js';
import { WebServiceDashboard } from '../models/WebServiceDashboard.js';
import { WebServiceDashboardDashboardVisibility } from '../models/WebServiceDashboardDashboardVisibility.js';
import { WebServiceDashboardExtra } from '../models/WebServiceDashboardExtra.js';
import { WebServiceDashboardExtraTemplateVariable } from '../models/WebServiceDashboardExtraTemplateVariable.js';
import { WebServiceDashboardExtraTemplateView } from '../models/WebServiceDashboardExtraTemplateView.js';
import { WebServiceDashboardLayouts } from '../models/WebServiceDashboardLayouts.js';
import { WebServiceDashboardLayoutsLayout } from '../models/WebServiceDashboardLayoutsLayout.js';
import { WebServiceDashboardResponsiveLayouts } from '../models/WebServiceDashboardResponsiveLayouts.js';
import { WebServiceDashboardSharing } from '../models/WebServiceDashboardSharing.js';
import { WebServiceEventLogsConfig } from '../models/WebServiceEventLogsConfig.js';
import { WebServiceEventLogsConfigTimeRangeOverride } from '../models/WebServiceEventLogsConfigTimeRangeOverride.js';
import { WebServiceExportDashboardResponse } from '../models/WebServiceExportDashboardResponse.js';
import { WebServiceGetDashboardResponse } from '../models/WebServiceGetDashboardResponse.js';
import { WebServiceGetProjectListResponse } from '../models/WebServiceGetProjectListResponse.js';
import { WebServiceGetProjectResponse } from '../models/WebServiceGetProjectResponse.js';
import { WebServiceImportDashboardRequest } from '../models/WebServiceImportDashboardRequest.js';
import { WebServiceImportDashboardResponse } from '../models/WebServiceImportDashboardResponse.js';
import { WebServiceNote } from '../models/WebServiceNote.js';
import { WebServiceNoteAlignment } from '../models/WebServiceNoteAlignment.js';
import { WebServiceNoteFontSize } from '../models/WebServiceNoteFontSize.js';
import { WebServiceNoteVerticalAlignment } from '../models/WebServiceNoteVerticalAlignment.js';
import { WebServicePanel } from '../models/WebServicePanel.js';

import { AlertsApiRequestFactory, AlertsApiResponseProcessor} from "../apis/AlertsApi.js";
export class ObservableAlertsApi {
    private requestFactory: AlertsApiRequestFactory;
    private responseProcessor: AlertsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AlertsApiRequestFactory,
        responseProcessor?: AlertsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AlertsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AlertsApiResponseProcessor();
    }

    /**
     * Delete an alert rule
     * @param id
     */
    public deleteAlertRuleWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteAlertRule(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAlertRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an alert rule
     * @param id
     */
    public deleteAlertRule(id: string, _options?: Configuration): Observable<any> {
        return this.deleteAlertRuleWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Find an alert rule by id, and list all alerts for this rule
     * @param ruleId
     * @param [page]
     * @param [pageSize]
     */
    public getAlertWithHttpInfo(ruleId: string, page?: number, pageSize?: number, _options?: Configuration): Observable<HttpInfo<AlertServiceGetAlertResponse>> {
        const requestContextPromise = this.requestFactory.getAlert(ruleId, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlertWithHttpInfo(rsp)));
            }));
    }

    /**
     * Find an alert rule by id, and list all alerts for this rule
     * @param ruleId
     * @param [page]
     * @param [pageSize]
     */
    public getAlert(ruleId: string, page?: number, pageSize?: number, _options?: Configuration): Observable<AlertServiceGetAlertResponse> {
        return this.getAlertWithHttpInfo(ruleId, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<AlertServiceGetAlertResponse>) => apiResponse.data));
    }

    /**
     * List all alert rules for a project
     * @param projectId
     */
    public getAlertRulesWithHttpInfo(projectId: string, _options?: Configuration): Observable<HttpInfo<AlertServiceGetAlertRulesResponse>> {
        const requestContextPromise = this.requestFactory.getAlertRules(projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlertRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all alert rules for a project
     * @param projectId
     */
    public getAlertRules(projectId: string, _options?: Configuration): Observable<AlertServiceGetAlertRulesResponse> {
        return this.getAlertRulesWithHttpInfo(projectId, _options).pipe(map((apiResponse: HttpInfo<AlertServiceGetAlertRulesResponse>) => apiResponse.data));
    }

    /**
     * Save an alert rule
     * @param body
     */
    public saveAlertRuleWithHttpInfo(body: AlertServiceSaveAlertRuleRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.saveAlertRule(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.saveAlertRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Save an alert rule
     * @param body
     */
    public saveAlertRule(body: AlertServiceSaveAlertRuleRequest, _options?: Configuration): Observable<any> {
        return this.saveAlertRuleWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Save an alert rule
     * @param id
     * @param body
     */
    public saveAlertRule2WithHttpInfo(id: string, body: AlertServiceAlertServiceSaveAlertRuleBody, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.saveAlertRule2(id, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.saveAlertRule2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Save an alert rule
     * @param id
     * @param body
     */
    public saveAlertRule2(id: string, body: AlertServiceAlertServiceSaveAlertRuleBody, _options?: Configuration): Observable<any> {
        return this.saveAlertRule2WithHttpInfo(id, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { DataApiRequestFactory, DataApiResponseProcessor} from "../apis/DataApi.js";
export class ObservableDataApi {
    private requestFactory: DataApiRequestFactory;
    private responseProcessor: DataApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DataApiRequestFactory,
        responseProcessor?: DataApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DataApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DataApiResponseProcessor();
    }

    /**
     * Execute SQL in a project. Go to \"Data Studio\" -> \"SQL Editor\", write your query and then click \"Export as cURL\"  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(102).png)  Find more: https://docs.sentio.xyz/reference/data#sql-api
     * Execute SQL
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public executeSQLWithHttpInfo(owner: string, slug: string, body: AnalyticServiceAnalyticServiceExecuteSQLBody, _options?: Configuration): Observable<HttpInfo<AnalyticServiceSyncExecuteSQLResponse>> {
        const requestContextPromise = this.requestFactory.executeSQL(owner, slug, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.executeSQLWithHttpInfo(rsp)));
            }));
    }

    /**
     * Execute SQL in a project. Go to \"Data Studio\" -> \"SQL Editor\", write your query and then click \"Export as cURL\"  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(102).png)  Find more: https://docs.sentio.xyz/reference/data#sql-api
     * Execute SQL
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public executeSQL(owner: string, slug: string, body: AnalyticServiceAnalyticServiceExecuteSQLBody, _options?: Configuration): Observable<AnalyticServiceSyncExecuteSQLResponse> {
        return this.executeSQLWithHttpInfo(owner, slug, body, _options).pipe(map((apiResponse: HttpInfo<AnalyticServiceSyncExecuteSQLResponse>) => apiResponse.data));
    }

    /**
     * Get a list of metrics in a project
     * @param [projectId]
     * @param [name]
     * @param [version]
     */
    public getMetricsWithHttpInfo(projectId?: string, name?: string, version?: number, _options?: Configuration): Observable<HttpInfo<MetricsServiceGetMetricsResponse>> {
        const requestContextPromise = this.requestFactory.getMetrics(projectId, name, version, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMetricsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of metrics in a project
     * @param [projectId]
     * @param [name]
     * @param [version]
     */
    public getMetrics(projectId?: string, name?: string, version?: number, _options?: Configuration): Observable<MetricsServiceGetMetricsResponse> {
        return this.getMetricsWithHttpInfo(projectId, name, version, _options).pipe(map((apiResponse: HttpInfo<MetricsServiceGetMetricsResponse>) => apiResponse.data));
    }

    /**
     * Get a list of coins in a project.
     * List coins
     * @param owner
     * @param slug
     * @param [projectId]
     * @param [version]
     * @param [limit]
     * @param [offset]
     * @param [searchQuery]
     */
    public listCoinsWithHttpInfo(owner: string, slug: string, projectId?: string, version?: number, limit?: number, offset?: number, searchQuery?: string, _options?: Configuration): Observable<HttpInfo<InsightsServiceListCoinsResponse>> {
        const requestContextPromise = this.requestFactory.listCoins(owner, slug, projectId, version, limit, offset, searchQuery, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCoinsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of coins in a project.
     * List coins
     * @param owner
     * @param slug
     * @param [projectId]
     * @param [version]
     * @param [limit]
     * @param [offset]
     * @param [searchQuery]
     */
    public listCoins(owner: string, slug: string, projectId?: string, version?: number, limit?: number, offset?: number, searchQuery?: string, _options?: Configuration): Observable<InsightsServiceListCoinsResponse> {
        return this.listCoinsWithHttpInfo(owner, slug, projectId, version, limit, offset, searchQuery, _options).pipe(map((apiResponse: HttpInfo<InsightsServiceListCoinsResponse>) => apiResponse.data));
    }

    /**
     * Get a list of coins in a project.
     * List coins
     * @param [projectOwner]
     * @param [projectSlug]
     * @param [projectId]
     * @param [version]
     * @param [limit]
     * @param [offset]
     * @param [searchQuery]
     */
    public listCoins2WithHttpInfo(projectOwner?: string, projectSlug?: string, projectId?: string, version?: number, limit?: number, offset?: number, searchQuery?: string, _options?: Configuration): Observable<HttpInfo<InsightsServiceListCoinsResponse>> {
        const requestContextPromise = this.requestFactory.listCoins2(projectOwner, projectSlug, projectId, version, limit, offset, searchQuery, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCoins2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of coins in a project.
     * List coins
     * @param [projectOwner]
     * @param [projectSlug]
     * @param [projectId]
     * @param [version]
     * @param [limit]
     * @param [offset]
     * @param [searchQuery]
     */
    public listCoins2(projectOwner?: string, projectSlug?: string, projectId?: string, version?: number, limit?: number, offset?: number, searchQuery?: string, _options?: Configuration): Observable<InsightsServiceListCoinsResponse> {
        return this.listCoins2WithHttpInfo(projectOwner, projectSlug, projectId, version, limit, offset, searchQuery, _options).pipe(map((apiResponse: HttpInfo<InsightsServiceListCoinsResponse>) => apiResponse.data));
    }

    /**
     * Query for metrics,event logs and coin prices in a project.
     * Insight Query
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public queryWithHttpInfo(owner: string, slug: string, body: InsightsServiceInsightsServiceQueryBody, _options?: Configuration): Observable<HttpInfo<InsightsServiceQueryResponse>> {
        const requestContextPromise = this.requestFactory.query(owner, slug, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Query for metrics,event logs and coin prices in a project.
     * Insight Query
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public query(owner: string, slug: string, body: InsightsServiceInsightsServiceQueryBody, _options?: Configuration): Observable<InsightsServiceQueryResponse> {
        return this.queryWithHttpInfo(owner, slug, body, _options).pipe(map((apiResponse: HttpInfo<InsightsServiceQueryResponse>) => apiResponse.data));
    }

    /**
     * Metric instant queries
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public queryInstantWithHttpInfo(owner: string, slug: string, body: MetricsServiceObservabilityServiceQueryBody, _options?: Configuration): Observable<HttpInfo<MetricsServiceQueryValueResponse>> {
        const requestContextPromise = this.requestFactory.queryInstant(owner, slug, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryInstantWithHttpInfo(rsp)));
            }));
    }

    /**
     * Metric instant queries
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public queryInstant(owner: string, slug: string, body: MetricsServiceObservabilityServiceQueryBody, _options?: Configuration): Observable<MetricsServiceQueryValueResponse> {
        return this.queryInstantWithHttpInfo(owner, slug, body, _options).pipe(map((apiResponse: HttpInfo<MetricsServiceQueryValueResponse>) => apiResponse.data));
    }

    /**
     * Query event logs
     * @param owner
     * @param slug
     * @param body
     */
    public queryLogWithHttpInfo(owner: string, slug: string, body: AnalyticServiceSearchServiceQueryLogBody, _options?: Configuration): Observable<HttpInfo<AnalyticServiceLogQueryResponse>> {
        const requestContextPromise = this.requestFactory.queryLog(owner, slug, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryLogWithHttpInfo(rsp)));
            }));
    }

    /**
     * Query event logs
     * @param owner
     * @param slug
     * @param body
     */
    public queryLog(owner: string, slug: string, body: AnalyticServiceSearchServiceQueryLogBody, _options?: Configuration): Observable<AnalyticServiceLogQueryResponse> {
        return this.queryLogWithHttpInfo(owner, slug, body, _options).pipe(map((apiResponse: HttpInfo<AnalyticServiceLogQueryResponse>) => apiResponse.data));
    }

    /**
     * Query event logs
     * @param owner
     * @param slug
     * @param [projectId]
     * @param [query]
     * @param [timeRangeStartRelativeTimeUnit]
     * @param [timeRangeStartRelativeTimeValue]
     * @param [timeRangeStartRelativeTimeAlign]
     * @param [timeRangeStartAbsoluteTime]
     * @param [timeRangeEndRelativeTimeUnit]
     * @param [timeRangeEndRelativeTimeValue]
     * @param [timeRangeEndRelativeTimeAlign]
     * @param [timeRangeEndAbsoluteTime]
     * @param [timeRangeStep]
     * @param [timeRangeIntervalValue]
     * @param [timeRangeIntervalUnit]
     * @param [timeRangeTimezone]
     * @param [limit]
     * @param [offset]
     * @param [version]
     */
    public queryLog2WithHttpInfo(owner: string, slug: string, projectId?: string, query?: string, timeRangeStartRelativeTimeUnit?: string, timeRangeStartRelativeTimeValue?: number, timeRangeStartRelativeTimeAlign?: string, timeRangeStartAbsoluteTime?: string, timeRangeEndRelativeTimeUnit?: string, timeRangeEndRelativeTimeValue?: number, timeRangeEndRelativeTimeAlign?: string, timeRangeEndAbsoluteTime?: string, timeRangeStep?: string, timeRangeIntervalValue?: number, timeRangeIntervalUnit?: string, timeRangeTimezone?: string, limit?: number, offset?: number, version?: number, _options?: Configuration): Observable<HttpInfo<AnalyticServiceLogQueryResponse>> {
        const requestContextPromise = this.requestFactory.queryLog2(owner, slug, projectId, query, timeRangeStartRelativeTimeUnit, timeRangeStartRelativeTimeValue, timeRangeStartRelativeTimeAlign, timeRangeStartAbsoluteTime, timeRangeEndRelativeTimeUnit, timeRangeEndRelativeTimeValue, timeRangeEndRelativeTimeAlign, timeRangeEndAbsoluteTime, timeRangeStep, timeRangeIntervalValue, timeRangeIntervalUnit, timeRangeTimezone, limit, offset, version, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryLog2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Query event logs
     * @param owner
     * @param slug
     * @param [projectId]
     * @param [query]
     * @param [timeRangeStartRelativeTimeUnit]
     * @param [timeRangeStartRelativeTimeValue]
     * @param [timeRangeStartRelativeTimeAlign]
     * @param [timeRangeStartAbsoluteTime]
     * @param [timeRangeEndRelativeTimeUnit]
     * @param [timeRangeEndRelativeTimeValue]
     * @param [timeRangeEndRelativeTimeAlign]
     * @param [timeRangeEndAbsoluteTime]
     * @param [timeRangeStep]
     * @param [timeRangeIntervalValue]
     * @param [timeRangeIntervalUnit]
     * @param [timeRangeTimezone]
     * @param [limit]
     * @param [offset]
     * @param [version]
     */
    public queryLog2(owner: string, slug: string, projectId?: string, query?: string, timeRangeStartRelativeTimeUnit?: string, timeRangeStartRelativeTimeValue?: number, timeRangeStartRelativeTimeAlign?: string, timeRangeStartAbsoluteTime?: string, timeRangeEndRelativeTimeUnit?: string, timeRangeEndRelativeTimeValue?: number, timeRangeEndRelativeTimeAlign?: string, timeRangeEndAbsoluteTime?: string, timeRangeStep?: string, timeRangeIntervalValue?: number, timeRangeIntervalUnit?: string, timeRangeTimezone?: string, limit?: number, offset?: number, version?: number, _options?: Configuration): Observable<AnalyticServiceLogQueryResponse> {
        return this.queryLog2WithHttpInfo(owner, slug, projectId, query, timeRangeStartRelativeTimeUnit, timeRangeStartRelativeTimeValue, timeRangeStartRelativeTimeAlign, timeRangeStartAbsoluteTime, timeRangeEndRelativeTimeUnit, timeRangeEndRelativeTimeValue, timeRangeEndRelativeTimeAlign, timeRangeEndAbsoluteTime, timeRangeStep, timeRangeIntervalValue, timeRangeIntervalUnit, timeRangeTimezone, limit, offset, version, _options).pipe(map((apiResponse: HttpInfo<AnalyticServiceLogQueryResponse>) => apiResponse.data));
    }

    /**
     * The easiest way to build query is through UI, you could first create an insight chart, and then **Export as cURL**.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(101).png)
     * Metric range queries
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public queryRangeWithHttpInfo(owner: string, slug: string, body: MetricsServiceObservabilityServiceQueryRangeBody, _options?: Configuration): Observable<HttpInfo<MetricsServiceMetricsQueryResponse>> {
        const requestContextPromise = this.requestFactory.queryRange(owner, slug, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryRangeWithHttpInfo(rsp)));
            }));
    }

    /**
     * The easiest way to build query is through UI, you could first create an insight chart, and then **Export as cURL**.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(101).png)
     * Metric range queries
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public queryRange(owner: string, slug: string, body: MetricsServiceObservabilityServiceQueryRangeBody, _options?: Configuration): Observable<MetricsServiceMetricsQueryResponse> {
        return this.queryRangeWithHttpInfo(owner, slug, body, _options).pipe(map((apiResponse: HttpInfo<MetricsServiceMetricsQueryResponse>) => apiResponse.data));
    }

    /**
     * Query the result of a SQL query by execution_id.
     * Query SQL Result
     * @param owner username or organization name
     * @param slug project slug
     * @param [projectId] use project id if project_owner and project_slug are not provided
     * @param [version] version of the datasource, default to the active version if not provided
     * @param [executionId]
     */
    public querySQLResultWithHttpInfo(owner: string, slug: string, projectId?: string, version?: number, executionId?: string, _options?: Configuration): Observable<HttpInfo<AnalyticServiceQuerySQLResultResponse>> {
        const requestContextPromise = this.requestFactory.querySQLResult(owner, slug, projectId, version, executionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.querySQLResultWithHttpInfo(rsp)));
            }));
    }

    /**
     * Query the result of a SQL query by execution_id.
     * Query SQL Result
     * @param owner username or organization name
     * @param slug project slug
     * @param [projectId] use project id if project_owner and project_slug are not provided
     * @param [version] version of the datasource, default to the active version if not provided
     * @param [executionId]
     */
    public querySQLResult(owner: string, slug: string, projectId?: string, version?: number, executionId?: string, _options?: Configuration): Observable<AnalyticServiceQuerySQLResultResponse> {
        return this.querySQLResultWithHttpInfo(owner, slug, projectId, version, executionId, _options).pipe(map((apiResponse: HttpInfo<AnalyticServiceQuerySQLResultResponse>) => apiResponse.data));
    }

    /**
     * Query the result of a SQL query by execution_id.
     * Query SQL Result
     * @param [projectOwner] username or organization name
     * @param [projectSlug] project slug
     * @param [projectId] use project id if project_owner and project_slug are not provided
     * @param [version] version of the datasource, default to the active version if not provided
     * @param [executionId]
     */
    public querySQLResult2WithHttpInfo(projectOwner?: string, projectSlug?: string, projectId?: string, version?: number, executionId?: string, _options?: Configuration): Observable<HttpInfo<AnalyticServiceQuerySQLResultResponse>> {
        const requestContextPromise = this.requestFactory.querySQLResult2(projectOwner, projectSlug, projectId, version, executionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.querySQLResult2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Query the result of a SQL query by execution_id.
     * Query SQL Result
     * @param [projectOwner] username or organization name
     * @param [projectSlug] project slug
     * @param [projectId] use project id if project_owner and project_slug are not provided
     * @param [version] version of the datasource, default to the active version if not provided
     * @param [executionId]
     */
    public querySQLResult2(projectOwner?: string, projectSlug?: string, projectId?: string, version?: number, executionId?: string, _options?: Configuration): Observable<AnalyticServiceQuerySQLResultResponse> {
        return this.querySQLResult2WithHttpInfo(projectOwner, projectSlug, projectId, version, executionId, _options).pipe(map((apiResponse: HttpInfo<AnalyticServiceQuerySQLResultResponse>) => apiResponse.data));
    }

    /**
     * Rerun your SQL query by query_id, you can also update the query and run it.  It will return execution_id, use it to query the result.
     * Rerun SQL
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public rerunSQLQueryWithHttpInfo(owner: string, slug: string, body: AnalyticServiceAnalyticServiceRerunSQLQueryBody, _options?: Configuration): Observable<HttpInfo<AnalyticServiceRerunSQLQueryResponse>> {
        const requestContextPromise = this.requestFactory.rerunSQLQuery(owner, slug, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rerunSQLQueryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Rerun your SQL query by query_id, you can also update the query and run it.  It will return execution_id, use it to query the result.
     * Rerun SQL
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public rerunSQLQuery(owner: string, slug: string, body: AnalyticServiceAnalyticServiceRerunSQLQueryBody, _options?: Configuration): Observable<AnalyticServiceRerunSQLQueryResponse> {
        return this.rerunSQLQueryWithHttpInfo(owner, slug, body, _options).pipe(map((apiResponse: HttpInfo<AnalyticServiceRerunSQLQueryResponse>) => apiResponse.data));
    }

    /**
     * Rerun your SQL query by query_id, you can also update the query and run it.  It will return execution_id, use it to query the result.
     * Rerun SQL
     * @param body
     */
    public rerunSQLQuery2WithHttpInfo(body: AnalyticServiceRerunSQLQueryRequest, _options?: Configuration): Observable<HttpInfo<AnalyticServiceRerunSQLQueryResponse>> {
        const requestContextPromise = this.requestFactory.rerunSQLQuery2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rerunSQLQuery2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Rerun your SQL query by query_id, you can also update the query and run it.  It will return execution_id, use it to query the result.
     * Rerun SQL
     * @param body
     */
    public rerunSQLQuery2(body: AnalyticServiceRerunSQLQueryRequest, _options?: Configuration): Observable<AnalyticServiceRerunSQLQueryResponse> {
        return this.rerunSQLQuery2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<AnalyticServiceRerunSQLQueryResponse>) => apiResponse.data));
    }

    /**
     * Query for retention.
     * Retention query
     * @param owner
     * @param slug
     * @param body
     */
    public retentionWithHttpInfo(owner: string, slug: string, body: InsightsServiceInsightsServiceRetentionBody, _options?: Configuration): Observable<HttpInfo<InsightsServiceRetentionResponse>> {
        const requestContextPromise = this.requestFactory.retention(owner, slug, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retentionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Query for retention.
     * Retention query
     * @param owner
     * @param slug
     * @param body
     */
    public retention(owner: string, slug: string, body: InsightsServiceInsightsServiceRetentionBody, _options?: Configuration): Observable<InsightsServiceRetentionResponse> {
        return this.retentionWithHttpInfo(owner, slug, body, _options).pipe(map((apiResponse: HttpInfo<InsightsServiceRetentionResponse>) => apiResponse.data));
    }

    /**
     * Query for retention.
     * Retention query
     * @param body
     */
    public retention2WithHttpInfo(body: InsightsServiceRetentionRequest, _options?: Configuration): Observable<HttpInfo<InsightsServiceRetentionResponse>> {
        const requestContextPromise = this.requestFactory.retention2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retention2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Query for retention.
     * Retention query
     * @param body
     */
    public retention2(body: InsightsServiceRetentionRequest, _options?: Configuration): Observable<InsightsServiceRetentionResponse> {
        return this.retention2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<InsightsServiceRetentionResponse>) => apiResponse.data));
    }

    /**
     * Save your SQL query, and you can run it immediately or later.  It will return query_id, you can use it to rerun the query. if you enable the \"run_immediately\" field, it will run the query immediately, and return execution_id, use it to query the result.
     * Save SQL
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public saveSQLWithHttpInfo(owner: string, slug: string, body: AnalyticServiceAnalyticServiceSaveSQLBody, _options?: Configuration): Observable<HttpInfo<AnalyticServiceSaveSQLResponse>> {
        const requestContextPromise = this.requestFactory.saveSQL(owner, slug, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.saveSQLWithHttpInfo(rsp)));
            }));
    }

    /**
     * Save your SQL query, and you can run it immediately or later.  It will return query_id, you can use it to rerun the query. if you enable the \"run_immediately\" field, it will run the query immediately, and return execution_id, use it to query the result.
     * Save SQL
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public saveSQL(owner: string, slug: string, body: AnalyticServiceAnalyticServiceSaveSQLBody, _options?: Configuration): Observable<AnalyticServiceSaveSQLResponse> {
        return this.saveSQLWithHttpInfo(owner, slug, body, _options).pipe(map((apiResponse: HttpInfo<AnalyticServiceSaveSQLResponse>) => apiResponse.data));
    }

    /**
     * Save your SQL query, and you can run it immediately or later.  It will return query_id, you can use it to rerun the query. if you enable the \"run_immediately\" field, it will run the query immediately, and return execution_id, use it to query the result.
     * Save SQL
     * @param body
     */
    public saveSQL2WithHttpInfo(body: AnalyticServiceSaveSQLRequest, _options?: Configuration): Observable<HttpInfo<AnalyticServiceSaveSQLResponse>> {
        const requestContextPromise = this.requestFactory.saveSQL2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.saveSQL2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Save your SQL query, and you can run it immediately or later.  It will return query_id, you can use it to rerun the query. if you enable the \"run_immediately\" field, it will run the query immediately, and return execution_id, use it to query the result.
     * Save SQL
     * @param body
     */
    public saveSQL2(body: AnalyticServiceSaveSQLRequest, _options?: Configuration): Observable<AnalyticServiceSaveSQLResponse> {
        return this.saveSQL2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<AnalyticServiceSaveSQLResponse>) => apiResponse.data));
    }

}

import { DebugAndSimulationApiRequestFactory, DebugAndSimulationApiResponseProcessor} from "../apis/DebugAndSimulationApi.js";
export class ObservableDebugAndSimulationApi {
    private requestFactory: DebugAndSimulationApiRequestFactory;
    private responseProcessor: DebugAndSimulationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DebugAndSimulationApiRequestFactory,
        responseProcessor?: DebugAndSimulationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DebugAndSimulationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DebugAndSimulationApiResponseProcessor();
    }

    /**
     * Get trace by bundle simulation
     * @param owner
     * @param slug
     * @param chainId
     * @param bundleId
     * @param [withInternalCalls] Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param [disableOptimizer] Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param [ignoreGasCost] Only effective when disableOptimizer&#x3D;true.
     */
    public getCallTraceByBundleWithHttpInfo(owner: string, slug: string, chainId: string, bundleId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Observable<HttpInfo<GoogleApiHttpBody>> {
        const requestContextPromise = this.requestFactory.getCallTraceByBundle(owner, slug, chainId, bundleId, withInternalCalls, disableOptimizer, ignoreGasCost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCallTraceByBundleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get trace by bundle simulation
     * @param owner
     * @param slug
     * @param chainId
     * @param bundleId
     * @param [withInternalCalls] Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param [disableOptimizer] Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param [ignoreGasCost] Only effective when disableOptimizer&#x3D;true.
     */
    public getCallTraceByBundle(owner: string, slug: string, chainId: string, bundleId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Observable<GoogleApiHttpBody> {
        return this.getCallTraceByBundleWithHttpInfo(owner, slug, chainId, bundleId, withInternalCalls, disableOptimizer, ignoreGasCost, _options).pipe(map((apiResponse: HttpInfo<GoogleApiHttpBody>) => apiResponse.data));
    }

    /**
     * Get trace by simulation
     * @param owner
     * @param slug
     * @param chainId
     * @param simulationId
     * @param [withInternalCalls] Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param [disableOptimizer] Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param [ignoreGasCost] Only effective when disableOptimizer&#x3D;true.
     */
    public getCallTraceBySimulationWithHttpInfo(owner: string, slug: string, chainId: string, simulationId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Observable<HttpInfo<GoogleApiHttpBody>> {
        const requestContextPromise = this.requestFactory.getCallTraceBySimulation(owner, slug, chainId, simulationId, withInternalCalls, disableOptimizer, ignoreGasCost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCallTraceBySimulationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get trace by simulation
     * @param owner
     * @param slug
     * @param chainId
     * @param simulationId
     * @param [withInternalCalls] Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param [disableOptimizer] Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param [ignoreGasCost] Only effective when disableOptimizer&#x3D;true.
     */
    public getCallTraceBySimulation(owner: string, slug: string, chainId: string, simulationId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Observable<GoogleApiHttpBody> {
        return this.getCallTraceBySimulationWithHttpInfo(owner, slug, chainId, simulationId, withInternalCalls, disableOptimizer, ignoreGasCost, _options).pipe(map((apiResponse: HttpInfo<GoogleApiHttpBody>) => apiResponse.data));
    }

    /**
     * API to get Sentio call trace. It takes `txId.txHash` and `chainSpec.chainId` arguments, where the first is transaction hash, and the second is the numeric ethereum chain ID.  The results looks very similar to the normal [Ethereum call trace](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png). But we have an additional `startIndex` and `startIndex` on each trace entry even for the LOG, representing the execution order in the trace.  This allows you to build chart that marks the order of fund flow.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png)
     * Get trace by transaction
     * @param owner
     * @param slug
     * @param chainId
     * @param txHash
     * @param [withInternalCalls] Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param [disableOptimizer] Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param [ignoreGasCost] Only effective when disableOptimizer&#x3D;true.
     */
    public getCallTraceByTransactionWithHttpInfo(owner: string, slug: string, chainId: string, txHash: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Observable<HttpInfo<GoogleApiHttpBody>> {
        const requestContextPromise = this.requestFactory.getCallTraceByTransaction(owner, slug, chainId, txHash, withInternalCalls, disableOptimizer, ignoreGasCost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCallTraceByTransactionWithHttpInfo(rsp)));
            }));
    }

    /**
     * API to get Sentio call trace. It takes `txId.txHash` and `chainSpec.chainId` arguments, where the first is transaction hash, and the second is the numeric ethereum chain ID.  The results looks very similar to the normal [Ethereum call trace](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png). But we have an additional `startIndex` and `startIndex` on each trace entry even for the LOG, representing the execution order in the trace.  This allows you to build chart that marks the order of fund flow.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png)
     * Get trace by transaction
     * @param owner
     * @param slug
     * @param chainId
     * @param txHash
     * @param [withInternalCalls] Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param [disableOptimizer] Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param [ignoreGasCost] Only effective when disableOptimizer&#x3D;true.
     */
    public getCallTraceByTransaction(owner: string, slug: string, chainId: string, txHash: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Observable<GoogleApiHttpBody> {
        return this.getCallTraceByTransactionWithHttpInfo(owner, slug, chainId, txHash, withInternalCalls, disableOptimizer, ignoreGasCost, _options).pipe(map((apiResponse: HttpInfo<GoogleApiHttpBody>) => apiResponse.data));
    }

    /**
     * Get simulation by ID
     * @param owner
     * @param slug
     * @param simulationId
     */
    public getSimulationWithHttpInfo(owner: string, slug: string, simulationId: string, _options?: Configuration): Observable<HttpInfo<SolidityServiceGetSimulationResponse>> {
        const requestContextPromise = this.requestFactory.getSimulation(owner, slug, simulationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSimulationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get simulation by ID
     * @param owner
     * @param slug
     * @param simulationId
     */
    public getSimulation(owner: string, slug: string, simulationId: string, _options?: Configuration): Observable<SolidityServiceGetSimulationResponse> {
        return this.getSimulationWithHttpInfo(owner, slug, simulationId, _options).pipe(map((apiResponse: HttpInfo<SolidityServiceGetSimulationResponse>) => apiResponse.data));
    }

    /**
     * Get bundle simulation by ID
     * @param owner
     * @param slug
     * @param bundleId
     */
    public getSimulationBundleInProjectWithHttpInfo(owner: string, slug: string, bundleId: string, _options?: Configuration): Observable<HttpInfo<SolidityServiceGetSimulationBundleResponse>> {
        const requestContextPromise = this.requestFactory.getSimulationBundleInProject(owner, slug, bundleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSimulationBundleInProjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get bundle simulation by ID
     * @param owner
     * @param slug
     * @param bundleId
     */
    public getSimulationBundleInProject(owner: string, slug: string, bundleId: string, _options?: Configuration): Observable<SolidityServiceGetSimulationBundleResponse> {
        return this.getSimulationBundleInProjectWithHttpInfo(owner, slug, bundleId, _options).pipe(map((apiResponse: HttpInfo<SolidityServiceGetSimulationBundleResponse>) => apiResponse.data));
    }

    /**
     * Get list of simulations
     * @param owner
     * @param slug
     * @param [labelContains]
     * @param [page]
     * @param [pageSize]
     */
    public getSimulationsWithHttpInfo(owner: string, slug: string, labelContains?: string, page?: number, pageSize?: number, _options?: Configuration): Observable<HttpInfo<SolidityServiceGetSimulationsResponse>> {
        const requestContextPromise = this.requestFactory.getSimulations(owner, slug, labelContains, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSimulationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of simulations
     * @param owner
     * @param slug
     * @param [labelContains]
     * @param [page]
     * @param [pageSize]
     */
    public getSimulations(owner: string, slug: string, labelContains?: string, page?: number, pageSize?: number, _options?: Configuration): Observable<SolidityServiceGetSimulationsResponse> {
        return this.getSimulationsWithHttpInfo(owner, slug, labelContains, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<SolidityServiceGetSimulationsResponse>) => apiResponse.data));
    }

    /**
     * Search transactions
     * @param owner
     * @param slug
     * @param [chainId]
     * @param [address]
     * @param [includeDirect]
     * @param [includeTrace]
     * @param [includeIn]
     * @param [includeOut]
     * @param [startBlock]
     * @param [endBlock]
     * @param [startTimestamp]
     * @param [endTimestamp]
     * @param [transactionStatus]
     * @param [methodSignature]
     * @param [limit]
     * @param [pageToken]
     */
    public searchTransactionsWithHttpInfo(owner: string, slug: string, chainId?: Array<string>, address?: Array<string>, includeDirect?: boolean, includeTrace?: boolean, includeIn?: boolean, includeOut?: boolean, startBlock?: string, endBlock?: string, startTimestamp?: string, endTimestamp?: string, transactionStatus?: Array<number>, methodSignature?: string, limit?: number, pageToken?: string, _options?: Configuration): Observable<HttpInfo<TxindexEvmSearchTransactionsResponse>> {
        const requestContextPromise = this.requestFactory.searchTransactions(owner, slug, chainId, address, includeDirect, includeTrace, includeIn, includeOut, startBlock, endBlock, startTimestamp, endTimestamp, transactionStatus, methodSignature, limit, pageToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchTransactionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search transactions
     * @param owner
     * @param slug
     * @param [chainId]
     * @param [address]
     * @param [includeDirect]
     * @param [includeTrace]
     * @param [includeIn]
     * @param [includeOut]
     * @param [startBlock]
     * @param [endBlock]
     * @param [startTimestamp]
     * @param [endTimestamp]
     * @param [transactionStatus]
     * @param [methodSignature]
     * @param [limit]
     * @param [pageToken]
     */
    public searchTransactions(owner: string, slug: string, chainId?: Array<string>, address?: Array<string>, includeDirect?: boolean, includeTrace?: boolean, includeIn?: boolean, includeOut?: boolean, startBlock?: string, endBlock?: string, startTimestamp?: string, endTimestamp?: string, transactionStatus?: Array<number>, methodSignature?: string, limit?: number, pageToken?: string, _options?: Configuration): Observable<TxindexEvmSearchTransactionsResponse> {
        return this.searchTransactionsWithHttpInfo(owner, slug, chainId, address, includeDirect, includeTrace, includeIn, includeOut, startBlock, endBlock, startTimestamp, endTimestamp, transactionStatus, methodSignature, limit, pageToken, _options).pipe(map((apiResponse: HttpInfo<TxindexEvmSearchTransactionsResponse>) => apiResponse.data));
    }

    /**
     * Create a new transaction simulation. The simulation body should be included in the request body. Your simulations will be saved, and a unique ID for each simulation is included in the response. It will be useful for fetching simulation details.
     * Run simulation
     * @param owner
     * @param slug
     * @param chainId
     * @param body
     */
    public simulateTransactionWithHttpInfo(owner: string, slug: string, chainId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionBody, _options?: Configuration): Observable<HttpInfo<SolidityServiceSimulateTransactionResponse>> {
        const requestContextPromise = this.requestFactory.simulateTransaction(owner, slug, chainId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.simulateTransactionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new transaction simulation. The simulation body should be included in the request body. Your simulations will be saved, and a unique ID for each simulation is included in the response. It will be useful for fetching simulation details.
     * Run simulation
     * @param owner
     * @param slug
     * @param chainId
     * @param body
     */
    public simulateTransaction(owner: string, slug: string, chainId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionBody, _options?: Configuration): Observable<SolidityServiceSimulateTransactionResponse> {
        return this.simulateTransactionWithHttpInfo(owner, slug, chainId, body, _options).pipe(map((apiResponse: HttpInfo<SolidityServiceSimulateTransactionResponse>) => apiResponse.data));
    }

    /**
     * You could also create bundle simulations so that one transaction could be executed one after another. For `blockNumber` `transactionIndex` `networkId` `stateOverrides` and `blockOverrides` fields, only the first simulation takes effect.
     * Run bundle simulation
     * @param owner
     * @param slug
     * @param chainId
     * @param body
     */
    public simulateTransactionBundleWithHttpInfo(owner: string, slug: string, chainId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody, _options?: Configuration): Observable<HttpInfo<SolidityServiceSimulateTransactionBundleResponse>> {
        const requestContextPromise = this.requestFactory.simulateTransactionBundle(owner, slug, chainId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.simulateTransactionBundleWithHttpInfo(rsp)));
            }));
    }

    /**
     * You could also create bundle simulations so that one transaction could be executed one after another. For `blockNumber` `transactionIndex` `networkId` `stateOverrides` and `blockOverrides` fields, only the first simulation takes effect.
     * Run bundle simulation
     * @param owner
     * @param slug
     * @param chainId
     * @param body
     */
    public simulateTransactionBundle(owner: string, slug: string, chainId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody, _options?: Configuration): Observable<SolidityServiceSimulateTransactionBundleResponse> {
        return this.simulateTransactionBundleWithHttpInfo(owner, slug, chainId, body, _options).pipe(map((apiResponse: HttpInfo<SolidityServiceSimulateTransactionBundleResponse>) => apiResponse.data));
    }

}

import { ForksApiRequestFactory, ForksApiResponseProcessor} from "../apis/ForksApi.js";
export class ObservableForksApi {
    private requestFactory: ForksApiRequestFactory;
    private responseProcessor: ForksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ForksApiRequestFactory,
        responseProcessor?: ForksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ForksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ForksApiResponseProcessor();
    }

    /**
     * Create a fork
     * @param owner
     * @param slug
     * @param body
     */
    public createForkWithHttpInfo(owner: string, slug: string, body: SolidityServiceForkServiceCreateForkBody, _options?: Configuration): Observable<HttpInfo<SolidityServiceCreateForkResponse>> {
        const requestContextPromise = this.requestFactory.createFork(owner, slug, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createForkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a fork
     * @param owner
     * @param slug
     * @param body
     */
    public createFork(owner: string, slug: string, body: SolidityServiceForkServiceCreateForkBody, _options?: Configuration): Observable<SolidityServiceCreateForkResponse> {
        return this.createForkWithHttpInfo(owner, slug, body, _options).pipe(map((apiResponse: HttpInfo<SolidityServiceCreateForkResponse>) => apiResponse.data));
    }

    /**
     * Delete fork by id
     * @param owner
     * @param slug
     * @param id
     */
    public deleteForkWithHttpInfo(owner: string, slug: string, id: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteFork(owner, slug, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteForkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete fork by id
     * @param owner
     * @param slug
     * @param id
     */
    public deleteFork(owner: string, slug: string, id: string, _options?: Configuration): Observable<any> {
        return this.deleteForkWithHttpInfo(owner, slug, id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get trace by bundle simulation
     * @param owner
     * @param slug
     * @param forkId
     * @param bundleId
     * @param [withInternalCalls] Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param [disableOptimizer] Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param [ignoreGasCost] Only effective when disableOptimizer&#x3D;true.
     */
    public getCallTraceOnForkBundleWithHttpInfo(owner: string, slug: string, forkId: string, bundleId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Observable<HttpInfo<GoogleApiHttpBody>> {
        const requestContextPromise = this.requestFactory.getCallTraceOnForkBundle(owner, slug, forkId, bundleId, withInternalCalls, disableOptimizer, ignoreGasCost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCallTraceOnForkBundleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get trace by bundle simulation
     * @param owner
     * @param slug
     * @param forkId
     * @param bundleId
     * @param [withInternalCalls] Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param [disableOptimizer] Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param [ignoreGasCost] Only effective when disableOptimizer&#x3D;true.
     */
    public getCallTraceOnForkBundle(owner: string, slug: string, forkId: string, bundleId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Observable<GoogleApiHttpBody> {
        return this.getCallTraceOnForkBundleWithHttpInfo(owner, slug, forkId, bundleId, withInternalCalls, disableOptimizer, ignoreGasCost, _options).pipe(map((apiResponse: HttpInfo<GoogleApiHttpBody>) => apiResponse.data));
    }

    /**
     * Get trace by simulation
     * @param owner
     * @param slug
     * @param forkId
     * @param simulationId
     * @param [withInternalCalls] Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param [disableOptimizer] Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param [ignoreGasCost] Only effective when disableOptimizer&#x3D;true.
     */
    public getCallTraceOnForkSimulationWithHttpInfo(owner: string, slug: string, forkId: string, simulationId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Observable<HttpInfo<GoogleApiHttpBody>> {
        const requestContextPromise = this.requestFactory.getCallTraceOnForkSimulation(owner, slug, forkId, simulationId, withInternalCalls, disableOptimizer, ignoreGasCost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCallTraceOnForkSimulationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get trace by simulation
     * @param owner
     * @param slug
     * @param forkId
     * @param simulationId
     * @param [withInternalCalls] Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param [disableOptimizer] Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param [ignoreGasCost] Only effective when disableOptimizer&#x3D;true.
     */
    public getCallTraceOnForkSimulation(owner: string, slug: string, forkId: string, simulationId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Observable<GoogleApiHttpBody> {
        return this.getCallTraceOnForkSimulationWithHttpInfo(owner, slug, forkId, simulationId, withInternalCalls, disableOptimizer, ignoreGasCost, _options).pipe(map((apiResponse: HttpInfo<GoogleApiHttpBody>) => apiResponse.data));
    }

    /**
     * Get trace by transaction
     * @param owner
     * @param slug
     * @param forkId
     * @param txHash
     * @param [withInternalCalls] Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param [disableOptimizer] Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param [ignoreGasCost] Only effective when disableOptimizer&#x3D;true.
     */
    public getCallTraceOnForkTransactionWithHttpInfo(owner: string, slug: string, forkId: string, txHash: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Observable<HttpInfo<GoogleApiHttpBody>> {
        const requestContextPromise = this.requestFactory.getCallTraceOnForkTransaction(owner, slug, forkId, txHash, withInternalCalls, disableOptimizer, ignoreGasCost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCallTraceOnForkTransactionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get trace by transaction
     * @param owner
     * @param slug
     * @param forkId
     * @param txHash
     * @param [withInternalCalls] Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * @param [disableOptimizer] Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * @param [ignoreGasCost] Only effective when disableOptimizer&#x3D;true.
     */
    public getCallTraceOnForkTransaction(owner: string, slug: string, forkId: string, txHash: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Observable<GoogleApiHttpBody> {
        return this.getCallTraceOnForkTransactionWithHttpInfo(owner, slug, forkId, txHash, withInternalCalls, disableOptimizer, ignoreGasCost, _options).pipe(map((apiResponse: HttpInfo<GoogleApiHttpBody>) => apiResponse.data));
    }

    /**
     * Get fork by id
     * @param owner
     * @param slug
     * @param id
     */
    public getForkWithHttpInfo(owner: string, slug: string, id: string, _options?: Configuration): Observable<HttpInfo<SolidityServiceGetForkResponse>> {
        const requestContextPromise = this.requestFactory.getFork(owner, slug, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getForkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get fork by id
     * @param owner
     * @param slug
     * @param id
     */
    public getFork(owner: string, slug: string, id: string, _options?: Configuration): Observable<SolidityServiceGetForkResponse> {
        return this.getForkWithHttpInfo(owner, slug, id, _options).pipe(map((apiResponse: HttpInfo<SolidityServiceGetForkResponse>) => apiResponse.data));
    }

    /**
     * Get fork info by id
     * @param owner
     * @param slug
     * @param id
     */
    public getForkInfoWithHttpInfo(owner: string, slug: string, id: string, _options?: Configuration): Observable<HttpInfo<SolidityServiceGetForkInfoResponse>> {
        const requestContextPromise = this.requestFactory.getForkInfo(owner, slug, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getForkInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get fork info by id
     * @param owner
     * @param slug
     * @param id
     */
    public getForkInfo(owner: string, slug: string, id: string, _options?: Configuration): Observable<SolidityServiceGetForkInfoResponse> {
        return this.getForkInfoWithHttpInfo(owner, slug, id, _options).pipe(map((apiResponse: HttpInfo<SolidityServiceGetForkInfoResponse>) => apiResponse.data));
    }

    /**
     * List all forks
     * @param owner
     * @param slug
     */
    public listForksWithHttpInfo(owner: string, slug: string, _options?: Configuration): Observable<HttpInfo<SolidityServiceListForksResponse>> {
        const requestContextPromise = this.requestFactory.listForks(owner, slug, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listForksWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all forks
     * @param owner
     * @param slug
     */
    public listForks(owner: string, slug: string, _options?: Configuration): Observable<SolidityServiceListForksResponse> {
        return this.listForksWithHttpInfo(owner, slug, _options).pipe(map((apiResponse: HttpInfo<SolidityServiceListForksResponse>) => apiResponse.data));
    }

    /**
     * Run bundle simulation
     * @param owner
     * @param slug
     * @param forkId
     * @param body
     */
    public simulateTransactionBundleOnForkWithHttpInfo(owner: string, slug: string, forkId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionBundleOnForkBody, _options?: Configuration): Observable<HttpInfo<SolidityServiceSimulateTransactionBundleResponse>> {
        const requestContextPromise = this.requestFactory.simulateTransactionBundleOnFork(owner, slug, forkId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.simulateTransactionBundleOnForkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Run bundle simulation
     * @param owner
     * @param slug
     * @param forkId
     * @param body
     */
    public simulateTransactionBundleOnFork(owner: string, slug: string, forkId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionBundleOnForkBody, _options?: Configuration): Observable<SolidityServiceSimulateTransactionBundleResponse> {
        return this.simulateTransactionBundleOnForkWithHttpInfo(owner, slug, forkId, body, _options).pipe(map((apiResponse: HttpInfo<SolidityServiceSimulateTransactionBundleResponse>) => apiResponse.data));
    }

    /**
     * Run Simulation
     * @param owner
     * @param slug
     * @param forkId
     * @param body
     */
    public simulateTransactionOnForkWithHttpInfo(owner: string, slug: string, forkId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionOnForkBody, _options?: Configuration): Observable<HttpInfo<SolidityServiceSimulateTransactionResponse>> {
        const requestContextPromise = this.requestFactory.simulateTransactionOnFork(owner, slug, forkId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.simulateTransactionOnForkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Run Simulation
     * @param owner
     * @param slug
     * @param forkId
     * @param body
     */
    public simulateTransactionOnFork(owner: string, slug: string, forkId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionOnForkBody, _options?: Configuration): Observable<SolidityServiceSimulateTransactionResponse> {
        return this.simulateTransactionOnForkWithHttpInfo(owner, slug, forkId, body, _options).pipe(map((apiResponse: HttpInfo<SolidityServiceSimulateTransactionResponse>) => apiResponse.data));
    }

    /**
     * Update fork by id
     * @param owner
     * @param slug
     * @param id
     * @param body
     */
    public updateForkWithHttpInfo(owner: string, slug: string, id: string, body: SolidityServiceForkServiceUpdateForkBody, _options?: Configuration): Observable<HttpInfo<SolidityServiceUpdateForkResponse>> {
        const requestContextPromise = this.requestFactory.updateFork(owner, slug, id, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateForkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update fork by id
     * @param owner
     * @param slug
     * @param id
     * @param body
     */
    public updateFork(owner: string, slug: string, id: string, body: SolidityServiceForkServiceUpdateForkBody, _options?: Configuration): Observable<SolidityServiceUpdateForkResponse> {
        return this.updateForkWithHttpInfo(owner, slug, id, body, _options).pipe(map((apiResponse: HttpInfo<SolidityServiceUpdateForkResponse>) => apiResponse.data));
    }

}

import { PriceApiRequestFactory, PriceApiResponseProcessor} from "../apis/PriceApi.js";
export class ObservablePriceApi {
    private requestFactory: PriceApiRequestFactory;
    private responseProcessor: PriceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PriceApiRequestFactory,
        responseProcessor?: PriceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PriceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PriceApiResponseProcessor();
    }

    /**
     * Batch get prices
     * @param body
     */
    public batchGetPricesWithHttpInfo(body: PriceServiceBatchGetPricesRequest, _options?: Configuration): Observable<HttpInfo<PriceServiceBatchGetPricesResponse>> {
        const requestContextPromise = this.requestFactory.batchGetPrices(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchGetPricesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Batch get prices
     * @param body
     */
    public batchGetPrices(body: PriceServiceBatchGetPricesRequest, _options?: Configuration): Observable<PriceServiceBatchGetPricesResponse> {
        return this.batchGetPricesWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PriceServiceBatchGetPricesResponse>) => apiResponse.data));
    }

    /**
     * Check latest price
     */
    public checkLatestPriceWithHttpInfo(_options?: Configuration): Observable<HttpInfo<PriceServiceCheckLatestPriceResponse>> {
        const requestContextPromise = this.requestFactory.checkLatestPrice(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkLatestPriceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check latest price
     */
    public checkLatestPrice(_options?: Configuration): Observable<PriceServiceCheckLatestPriceResponse> {
        return this.checkLatestPriceWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<PriceServiceCheckLatestPriceResponse>) => apiResponse.data));
    }

    /**
     * GetPrice returns the price of a given coin identifier, in a best effort way. If we do not have any price data for the given coin, we will return NOT_FOUND error. If we have at least one price data for the given coin, we will return it with the actual timestamp. Client is responsible for checking the timestamp and decide whether to use the price or not.
     * Get price
     * @param [timestamp] The timestamp we request the price at. Note, the price service may not have the price at the exact timestamp, in which case it will return the price at the closest timestamp.
     * @param [coinIdSymbol]
     * @param [coinIdAddressAddress]
     * @param [coinIdAddressChain]
     * @param [source]
     */
    public getPriceWithHttpInfo(timestamp?: Date, coinIdSymbol?: string, coinIdAddressAddress?: string, coinIdAddressChain?: string, source?: string, _options?: Configuration): Observable<HttpInfo<PriceServiceGetPriceResponse>> {
        const requestContextPromise = this.requestFactory.getPrice(timestamp, coinIdSymbol, coinIdAddressAddress, coinIdAddressChain, source, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPriceWithHttpInfo(rsp)));
            }));
    }

    /**
     * GetPrice returns the price of a given coin identifier, in a best effort way. If we do not have any price data for the given coin, we will return NOT_FOUND error. If we have at least one price data for the given coin, we will return it with the actual timestamp. Client is responsible for checking the timestamp and decide whether to use the price or not.
     * Get price
     * @param [timestamp] The timestamp we request the price at. Note, the price service may not have the price at the exact timestamp, in which case it will return the price at the closest timestamp.
     * @param [coinIdSymbol]
     * @param [coinIdAddressAddress]
     * @param [coinIdAddressChain]
     * @param [source]
     */
    public getPrice(timestamp?: Date, coinIdSymbol?: string, coinIdAddressAddress?: string, coinIdAddressChain?: string, source?: string, _options?: Configuration): Observable<PriceServiceGetPriceResponse> {
        return this.getPriceWithHttpInfo(timestamp, coinIdSymbol, coinIdAddressAddress, coinIdAddressChain, source, _options).pipe(map((apiResponse: HttpInfo<PriceServiceGetPriceResponse>) => apiResponse.data));
    }

    /**
     * List coins
     * @param [limit]
     * @param [offset]
     * @param [searchQuery]
     * @param [chain]
     */
    public priceListCoinsWithHttpInfo(limit?: number, offset?: number, searchQuery?: string, chain?: string, _options?: Configuration): Observable<HttpInfo<PriceServiceListCoinsResponse>> {
        const requestContextPromise = this.requestFactory.priceListCoins(limit, offset, searchQuery, chain, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.priceListCoinsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List coins
     * @param [limit]
     * @param [offset]
     * @param [searchQuery]
     * @param [chain]
     */
    public priceListCoins(limit?: number, offset?: number, searchQuery?: string, chain?: string, _options?: Configuration): Observable<PriceServiceListCoinsResponse> {
        return this.priceListCoinsWithHttpInfo(limit, offset, searchQuery, chain, _options).pipe(map((apiResponse: HttpInfo<PriceServiceListCoinsResponse>) => apiResponse.data));
    }

}

import { WebApiRequestFactory, WebApiResponseProcessor} from "../apis/WebApi.js";
export class ObservableWebApi {
    private requestFactory: WebApiRequestFactory;
    private responseProcessor: WebApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WebApiRequestFactory,
        responseProcessor?: WebApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WebApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WebApiResponseProcessor();
    }

    /**
     * Delete a dashboard by id
     * @param dashboardId filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     * @param [ownerName] username or organization name
     * @param [slug] project slug
     */
    public deleteDashboardWithHttpInfo(dashboardId: string, projectId?: string, ownerName?: string, slug?: string, _options?: Configuration): Observable<HttpInfo<WebServiceDashboard>> {
        const requestContextPromise = this.requestFactory.deleteDashboard(dashboardId, projectId, ownerName, slug, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDashboardWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a dashboard by id
     * @param dashboardId filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     * @param [ownerName] username or organization name
     * @param [slug] project slug
     */
    public deleteDashboard(dashboardId: string, projectId?: string, ownerName?: string, slug?: string, _options?: Configuration): Observable<WebServiceDashboard> {
        return this.deleteDashboardWithHttpInfo(dashboardId, projectId, ownerName, slug, _options).pipe(map((apiResponse: HttpInfo<WebServiceDashboard>) => apiResponse.data));
    }

    /**
     * Export a dashboard to json
     * @param dashboardId
     */
    public exportDashboardWithHttpInfo(dashboardId: string, _options?: Configuration): Observable<HttpInfo<WebServiceExportDashboardResponse>> {
        const requestContextPromise = this.requestFactory.exportDashboard(dashboardId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportDashboardWithHttpInfo(rsp)));
            }));
    }

    /**
     * Export a dashboard to json
     * @param dashboardId
     */
    public exportDashboard(dashboardId: string, _options?: Configuration): Observable<WebServiceExportDashboardResponse> {
        return this.exportDashboardWithHttpInfo(dashboardId, _options).pipe(map((apiResponse: HttpInfo<WebServiceExportDashboardResponse>) => apiResponse.data));
    }

    /**
     * Get a dashboard by id
     * @param dashboardId filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     * @param [ownerName] username or organization name
     * @param [slug] project slug
     */
    public getDashboardWithHttpInfo(dashboardId: string, projectId?: string, ownerName?: string, slug?: string, _options?: Configuration): Observable<HttpInfo<WebServiceGetDashboardResponse>> {
        const requestContextPromise = this.requestFactory.getDashboard(dashboardId, projectId, ownerName, slug, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDashboardWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a dashboard by id
     * @param dashboardId filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     * @param [ownerName] username or organization name
     * @param [slug] project slug
     */
    public getDashboard(dashboardId: string, projectId?: string, ownerName?: string, slug?: string, _options?: Configuration): Observable<WebServiceGetDashboardResponse> {
        return this.getDashboardWithHttpInfo(dashboardId, projectId, ownerName, slug, _options).pipe(map((apiResponse: HttpInfo<WebServiceGetDashboardResponse>) => apiResponse.data));
    }

    /**
     * Get a dashboard by id
     * @param owner username or organization name
     * @param slug project slug
     * @param dashboardId filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     */
    public getDashboard2WithHttpInfo(owner: string, slug: string, dashboardId: string, projectId?: string, _options?: Configuration): Observable<HttpInfo<WebServiceGetDashboardResponse>> {
        const requestContextPromise = this.requestFactory.getDashboard2(owner, slug, dashboardId, projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDashboard2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a dashboard by id
     * @param owner username or organization name
     * @param slug project slug
     * @param dashboardId filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     */
    public getDashboard2(owner: string, slug: string, dashboardId: string, projectId?: string, _options?: Configuration): Observable<WebServiceGetDashboardResponse> {
        return this.getDashboard2WithHttpInfo(owner, slug, dashboardId, projectId, _options).pipe(map((apiResponse: HttpInfo<WebServiceGetDashboardResponse>) => apiResponse.data));
    }

    /**
     * Get project details
     * @param owner username or organization name
     * @param slug project slug
     */
    public getProjectWithHttpInfo(owner: string, slug: string, _options?: Configuration): Observable<HttpInfo<WebServiceGetProjectResponse>> {
        const requestContextPromise = this.requestFactory.getProject(owner, slug, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get project details
     * @param owner username or organization name
     * @param slug project slug
     */
    public getProject(owner: string, slug: string, _options?: Configuration): Observable<WebServiceGetProjectResponse> {
        return this.getProjectWithHttpInfo(owner, slug, _options).pipe(map((apiResponse: HttpInfo<WebServiceGetProjectResponse>) => apiResponse.data));
    }

    /**
     * Get project list
     * @param [userId]
     * @param [organizationId]
     */
    public getProjectListWithHttpInfo(userId?: string, organizationId?: string, _options?: Configuration): Observable<HttpInfo<WebServiceGetProjectListResponse>> {
        const requestContextPromise = this.requestFactory.getProjectList(userId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProjectListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get project list
     * @param [userId]
     * @param [organizationId]
     */
    public getProjectList(userId?: string, organizationId?: string, _options?: Configuration): Observable<WebServiceGetProjectListResponse> {
        return this.getProjectListWithHttpInfo(userId, organizationId, _options).pipe(map((apiResponse: HttpInfo<WebServiceGetProjectListResponse>) => apiResponse.data));
    }

    /**
     * Import a dashboard to another dashboard
     * @param body
     */
    public importDashboardWithHttpInfo(body: WebServiceImportDashboardRequest, _options?: Configuration): Observable<HttpInfo<WebServiceImportDashboardResponse>> {
        const requestContextPromise = this.requestFactory.importDashboard(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.importDashboardWithHttpInfo(rsp)));
            }));
    }

    /**
     * Import a dashboard to another dashboard
     * @param body
     */
    public importDashboard(body: WebServiceImportDashboardRequest, _options?: Configuration): Observable<WebServiceImportDashboardResponse> {
        return this.importDashboardWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<WebServiceImportDashboardResponse>) => apiResponse.data));
    }

    /**
     * List all dashboards in a project
     * @param [dashboardId] filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     * @param [ownerName] username or organization name
     * @param [slug] project slug
     */
    public listDashboardsWithHttpInfo(dashboardId?: string, projectId?: string, ownerName?: string, slug?: string, _options?: Configuration): Observable<HttpInfo<WebServiceGetDashboardResponse>> {
        const requestContextPromise = this.requestFactory.listDashboards(dashboardId, projectId, ownerName, slug, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listDashboardsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all dashboards in a project
     * @param [dashboardId] filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     * @param [ownerName] username or organization name
     * @param [slug] project slug
     */
    public listDashboards(dashboardId?: string, projectId?: string, ownerName?: string, slug?: string, _options?: Configuration): Observable<WebServiceGetDashboardResponse> {
        return this.listDashboardsWithHttpInfo(dashboardId, projectId, ownerName, slug, _options).pipe(map((apiResponse: HttpInfo<WebServiceGetDashboardResponse>) => apiResponse.data));
    }

    /**
     * List all dashboards in a project
     * @param owner username or organization name
     * @param slug project slug
     * @param [dashboardId] filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     */
    public listDashboards2WithHttpInfo(owner: string, slug: string, dashboardId?: string, projectId?: string, _options?: Configuration): Observable<HttpInfo<WebServiceGetDashboardResponse>> {
        const requestContextPromise = this.requestFactory.listDashboards2(owner, slug, dashboardId, projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listDashboards2WithHttpInfo(rsp)));
            }));
    }

    /**
     * List all dashboards in a project
     * @param owner username or organization name
     * @param slug project slug
     * @param [dashboardId] filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     */
    public listDashboards2(owner: string, slug: string, dashboardId?: string, projectId?: string, _options?: Configuration): Observable<WebServiceGetDashboardResponse> {
        return this.listDashboards2WithHttpInfo(owner, slug, dashboardId, projectId, _options).pipe(map((apiResponse: HttpInfo<WebServiceGetDashboardResponse>) => apiResponse.data));
    }

}

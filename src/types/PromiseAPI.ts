import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.js';
import { Configuration} from '../configuration.js'

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
import { ObservableAlertsApi } from './ObservableAPI.js';

import { AlertsApiRequestFactory, AlertsApiResponseProcessor} from "../apis/AlertsApi.js";
export class PromiseAlertsApi {
    private api: ObservableAlertsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AlertsApiRequestFactory,
        responseProcessor?: AlertsApiResponseProcessor
    ) {
        this.api = new ObservableAlertsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an alert rule
     * @param id
     */
    public deleteAlertRuleWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteAlertRuleWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete an alert rule
     * @param id
     */
    public deleteAlertRule(id: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteAlertRule(id, _options);
        return result.toPromise();
    }

    /**
     * Find an alert rule by id, and list all alerts for this rule
     * @param ruleId
     * @param [page]
     * @param [pageSize]
     */
    public getAlertWithHttpInfo(ruleId: string, page?: number, pageSize?: number, _options?: Configuration): Promise<HttpInfo<AlertServiceGetAlertResponse>> {
        const result = this.api.getAlertWithHttpInfo(ruleId, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Find an alert rule by id, and list all alerts for this rule
     * @param ruleId
     * @param [page]
     * @param [pageSize]
     */
    public getAlert(ruleId: string, page?: number, pageSize?: number, _options?: Configuration): Promise<AlertServiceGetAlertResponse> {
        const result = this.api.getAlert(ruleId, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * List all alert rules for a project
     * @param projectId
     */
    public getAlertRulesWithHttpInfo(projectId: string, _options?: Configuration): Promise<HttpInfo<AlertServiceGetAlertRulesResponse>> {
        const result = this.api.getAlertRulesWithHttpInfo(projectId, _options);
        return result.toPromise();
    }

    /**
     * List all alert rules for a project
     * @param projectId
     */
    public getAlertRules(projectId: string, _options?: Configuration): Promise<AlertServiceGetAlertRulesResponse> {
        const result = this.api.getAlertRules(projectId, _options);
        return result.toPromise();
    }

    /**
     * Save an alert rule
     * @param body
     */
    public saveAlertRuleWithHttpInfo(body: AlertServiceSaveAlertRuleRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.saveAlertRuleWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Save an alert rule
     * @param body
     */
    public saveAlertRule(body: AlertServiceSaveAlertRuleRequest, _options?: Configuration): Promise<any> {
        const result = this.api.saveAlertRule(body, _options);
        return result.toPromise();
    }

    /**
     * Save an alert rule
     * @param id
     * @param body
     */
    public saveAlertRule2WithHttpInfo(id: string, body: AlertServiceAlertServiceSaveAlertRuleBody, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.saveAlertRule2WithHttpInfo(id, body, _options);
        return result.toPromise();
    }

    /**
     * Save an alert rule
     * @param id
     * @param body
     */
    public saveAlertRule2(id: string, body: AlertServiceAlertServiceSaveAlertRuleBody, _options?: Configuration): Promise<any> {
        const result = this.api.saveAlertRule2(id, body, _options);
        return result.toPromise();
    }


}



import { ObservableDataApi } from './ObservableAPI.js';

import { DataApiRequestFactory, DataApiResponseProcessor} from "../apis/DataApi.js";
export class PromiseDataApi {
    private api: ObservableDataApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataApiRequestFactory,
        responseProcessor?: DataApiResponseProcessor
    ) {
        this.api = new ObservableDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Execute SQL in a project. Go to \"Data Studio\" -> \"SQL Editor\", write your query and then click \"Export as cURL\"  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(102).png)  Find more: https://docs.sentio.xyz/reference/data#sql-api
     * Execute SQL
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public executeSQLWithHttpInfo(owner: string, slug: string, body: AnalyticServiceAnalyticServiceExecuteSQLBody, _options?: Configuration): Promise<HttpInfo<AnalyticServiceSyncExecuteSQLResponse>> {
        const result = this.api.executeSQLWithHttpInfo(owner, slug, body, _options);
        return result.toPromise();
    }

    /**
     * Execute SQL in a project. Go to \"Data Studio\" -> \"SQL Editor\", write your query and then click \"Export as cURL\"  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(102).png)  Find more: https://docs.sentio.xyz/reference/data#sql-api
     * Execute SQL
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public executeSQL(owner: string, slug: string, body: AnalyticServiceAnalyticServiceExecuteSQLBody, _options?: Configuration): Promise<AnalyticServiceSyncExecuteSQLResponse> {
        const result = this.api.executeSQL(owner, slug, body, _options);
        return result.toPromise();
    }

    /**
     * Get a list of metrics in a project
     * @param [projectId]
     * @param [name]
     * @param [version]
     */
    public getMetricsWithHttpInfo(projectId?: string, name?: string, version?: number, _options?: Configuration): Promise<HttpInfo<MetricsServiceGetMetricsResponse>> {
        const result = this.api.getMetricsWithHttpInfo(projectId, name, version, _options);
        return result.toPromise();
    }

    /**
     * Get a list of metrics in a project
     * @param [projectId]
     * @param [name]
     * @param [version]
     */
    public getMetrics(projectId?: string, name?: string, version?: number, _options?: Configuration): Promise<MetricsServiceGetMetricsResponse> {
        const result = this.api.getMetrics(projectId, name, version, _options);
        return result.toPromise();
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
    public listCoinsWithHttpInfo(owner: string, slug: string, projectId?: string, version?: number, limit?: number, offset?: number, searchQuery?: string, _options?: Configuration): Promise<HttpInfo<InsightsServiceListCoinsResponse>> {
        const result = this.api.listCoinsWithHttpInfo(owner, slug, projectId, version, limit, offset, searchQuery, _options);
        return result.toPromise();
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
    public listCoins(owner: string, slug: string, projectId?: string, version?: number, limit?: number, offset?: number, searchQuery?: string, _options?: Configuration): Promise<InsightsServiceListCoinsResponse> {
        const result = this.api.listCoins(owner, slug, projectId, version, limit, offset, searchQuery, _options);
        return result.toPromise();
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
    public listCoins2WithHttpInfo(projectOwner?: string, projectSlug?: string, projectId?: string, version?: number, limit?: number, offset?: number, searchQuery?: string, _options?: Configuration): Promise<HttpInfo<InsightsServiceListCoinsResponse>> {
        const result = this.api.listCoins2WithHttpInfo(projectOwner, projectSlug, projectId, version, limit, offset, searchQuery, _options);
        return result.toPromise();
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
    public listCoins2(projectOwner?: string, projectSlug?: string, projectId?: string, version?: number, limit?: number, offset?: number, searchQuery?: string, _options?: Configuration): Promise<InsightsServiceListCoinsResponse> {
        const result = this.api.listCoins2(projectOwner, projectSlug, projectId, version, limit, offset, searchQuery, _options);
        return result.toPromise();
    }

    /**
     * Query for metrics,event logs and coin prices in a project.
     * Insight Query
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public queryWithHttpInfo(owner: string, slug: string, body: InsightsServiceInsightsServiceQueryBody, _options?: Configuration): Promise<HttpInfo<InsightsServiceQueryResponse>> {
        const result = this.api.queryWithHttpInfo(owner, slug, body, _options);
        return result.toPromise();
    }

    /**
     * Query for metrics,event logs and coin prices in a project.
     * Insight Query
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public query(owner: string, slug: string, body: InsightsServiceInsightsServiceQueryBody, _options?: Configuration): Promise<InsightsServiceQueryResponse> {
        const result = this.api.query(owner, slug, body, _options);
        return result.toPromise();
    }

    /**
     * Metric instant queries
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public queryInstantWithHttpInfo(owner: string, slug: string, body: MetricsServiceObservabilityServiceQueryBody, _options?: Configuration): Promise<HttpInfo<MetricsServiceQueryValueResponse>> {
        const result = this.api.queryInstantWithHttpInfo(owner, slug, body, _options);
        return result.toPromise();
    }

    /**
     * Metric instant queries
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public queryInstant(owner: string, slug: string, body: MetricsServiceObservabilityServiceQueryBody, _options?: Configuration): Promise<MetricsServiceQueryValueResponse> {
        const result = this.api.queryInstant(owner, slug, body, _options);
        return result.toPromise();
    }

    /**
     * Query event logs
     * @param owner
     * @param slug
     * @param body
     */
    public queryLogWithHttpInfo(owner: string, slug: string, body: AnalyticServiceSearchServiceQueryLogBody, _options?: Configuration): Promise<HttpInfo<AnalyticServiceLogQueryResponse>> {
        const result = this.api.queryLogWithHttpInfo(owner, slug, body, _options);
        return result.toPromise();
    }

    /**
     * Query event logs
     * @param owner
     * @param slug
     * @param body
     */
    public queryLog(owner: string, slug: string, body: AnalyticServiceSearchServiceQueryLogBody, _options?: Configuration): Promise<AnalyticServiceLogQueryResponse> {
        const result = this.api.queryLog(owner, slug, body, _options);
        return result.toPromise();
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
    public queryLog2WithHttpInfo(owner: string, slug: string, projectId?: string, query?: string, timeRangeStartRelativeTimeUnit?: string, timeRangeStartRelativeTimeValue?: number, timeRangeStartRelativeTimeAlign?: string, timeRangeStartAbsoluteTime?: string, timeRangeEndRelativeTimeUnit?: string, timeRangeEndRelativeTimeValue?: number, timeRangeEndRelativeTimeAlign?: string, timeRangeEndAbsoluteTime?: string, timeRangeStep?: string, timeRangeIntervalValue?: number, timeRangeIntervalUnit?: string, timeRangeTimezone?: string, limit?: number, offset?: number, version?: number, _options?: Configuration): Promise<HttpInfo<AnalyticServiceLogQueryResponse>> {
        const result = this.api.queryLog2WithHttpInfo(owner, slug, projectId, query, timeRangeStartRelativeTimeUnit, timeRangeStartRelativeTimeValue, timeRangeStartRelativeTimeAlign, timeRangeStartAbsoluteTime, timeRangeEndRelativeTimeUnit, timeRangeEndRelativeTimeValue, timeRangeEndRelativeTimeAlign, timeRangeEndAbsoluteTime, timeRangeStep, timeRangeIntervalValue, timeRangeIntervalUnit, timeRangeTimezone, limit, offset, version, _options);
        return result.toPromise();
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
    public queryLog2(owner: string, slug: string, projectId?: string, query?: string, timeRangeStartRelativeTimeUnit?: string, timeRangeStartRelativeTimeValue?: number, timeRangeStartRelativeTimeAlign?: string, timeRangeStartAbsoluteTime?: string, timeRangeEndRelativeTimeUnit?: string, timeRangeEndRelativeTimeValue?: number, timeRangeEndRelativeTimeAlign?: string, timeRangeEndAbsoluteTime?: string, timeRangeStep?: string, timeRangeIntervalValue?: number, timeRangeIntervalUnit?: string, timeRangeTimezone?: string, limit?: number, offset?: number, version?: number, _options?: Configuration): Promise<AnalyticServiceLogQueryResponse> {
        const result = this.api.queryLog2(owner, slug, projectId, query, timeRangeStartRelativeTimeUnit, timeRangeStartRelativeTimeValue, timeRangeStartRelativeTimeAlign, timeRangeStartAbsoluteTime, timeRangeEndRelativeTimeUnit, timeRangeEndRelativeTimeValue, timeRangeEndRelativeTimeAlign, timeRangeEndAbsoluteTime, timeRangeStep, timeRangeIntervalValue, timeRangeIntervalUnit, timeRangeTimezone, limit, offset, version, _options);
        return result.toPromise();
    }

    /**
     * The easiest way to build query is through UI, you could first create an insight chart, and then **Export as cURL**.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(101).png)
     * Metric range queries
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public queryRangeWithHttpInfo(owner: string, slug: string, body: MetricsServiceObservabilityServiceQueryRangeBody, _options?: Configuration): Promise<HttpInfo<MetricsServiceMetricsQueryResponse>> {
        const result = this.api.queryRangeWithHttpInfo(owner, slug, body, _options);
        return result.toPromise();
    }

    /**
     * The easiest way to build query is through UI, you could first create an insight chart, and then **Export as cURL**.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(101).png)
     * Metric range queries
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public queryRange(owner: string, slug: string, body: MetricsServiceObservabilityServiceQueryRangeBody, _options?: Configuration): Promise<MetricsServiceMetricsQueryResponse> {
        const result = this.api.queryRange(owner, slug, body, _options);
        return result.toPromise();
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
    public querySQLResultWithHttpInfo(owner: string, slug: string, projectId?: string, version?: number, executionId?: string, _options?: Configuration): Promise<HttpInfo<AnalyticServiceQuerySQLResultResponse>> {
        const result = this.api.querySQLResultWithHttpInfo(owner, slug, projectId, version, executionId, _options);
        return result.toPromise();
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
    public querySQLResult(owner: string, slug: string, projectId?: string, version?: number, executionId?: string, _options?: Configuration): Promise<AnalyticServiceQuerySQLResultResponse> {
        const result = this.api.querySQLResult(owner, slug, projectId, version, executionId, _options);
        return result.toPromise();
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
    public querySQLResult2WithHttpInfo(projectOwner?: string, projectSlug?: string, projectId?: string, version?: number, executionId?: string, _options?: Configuration): Promise<HttpInfo<AnalyticServiceQuerySQLResultResponse>> {
        const result = this.api.querySQLResult2WithHttpInfo(projectOwner, projectSlug, projectId, version, executionId, _options);
        return result.toPromise();
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
    public querySQLResult2(projectOwner?: string, projectSlug?: string, projectId?: string, version?: number, executionId?: string, _options?: Configuration): Promise<AnalyticServiceQuerySQLResultResponse> {
        const result = this.api.querySQLResult2(projectOwner, projectSlug, projectId, version, executionId, _options);
        return result.toPromise();
    }

    /**
     * Rerun your SQL query by query_id, you can also update the query and run it.  It will return execution_id, use it to query the result.
     * Rerun SQL
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public rerunSQLQueryWithHttpInfo(owner: string, slug: string, body: AnalyticServiceAnalyticServiceRerunSQLQueryBody, _options?: Configuration): Promise<HttpInfo<AnalyticServiceRerunSQLQueryResponse>> {
        const result = this.api.rerunSQLQueryWithHttpInfo(owner, slug, body, _options);
        return result.toPromise();
    }

    /**
     * Rerun your SQL query by query_id, you can also update the query and run it.  It will return execution_id, use it to query the result.
     * Rerun SQL
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public rerunSQLQuery(owner: string, slug: string, body: AnalyticServiceAnalyticServiceRerunSQLQueryBody, _options?: Configuration): Promise<AnalyticServiceRerunSQLQueryResponse> {
        const result = this.api.rerunSQLQuery(owner, slug, body, _options);
        return result.toPromise();
    }

    /**
     * Rerun your SQL query by query_id, you can also update the query and run it.  It will return execution_id, use it to query the result.
     * Rerun SQL
     * @param body
     */
    public rerunSQLQuery2WithHttpInfo(body: AnalyticServiceRerunSQLQueryRequest, _options?: Configuration): Promise<HttpInfo<AnalyticServiceRerunSQLQueryResponse>> {
        const result = this.api.rerunSQLQuery2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Rerun your SQL query by query_id, you can also update the query and run it.  It will return execution_id, use it to query the result.
     * Rerun SQL
     * @param body
     */
    public rerunSQLQuery2(body: AnalyticServiceRerunSQLQueryRequest, _options?: Configuration): Promise<AnalyticServiceRerunSQLQueryResponse> {
        const result = this.api.rerunSQLQuery2(body, _options);
        return result.toPromise();
    }

    /**
     * Query for retention.
     * Retention query
     * @param owner
     * @param slug
     * @param body
     */
    public retentionWithHttpInfo(owner: string, slug: string, body: InsightsServiceInsightsServiceRetentionBody, _options?: Configuration): Promise<HttpInfo<InsightsServiceRetentionResponse>> {
        const result = this.api.retentionWithHttpInfo(owner, slug, body, _options);
        return result.toPromise();
    }

    /**
     * Query for retention.
     * Retention query
     * @param owner
     * @param slug
     * @param body
     */
    public retention(owner: string, slug: string, body: InsightsServiceInsightsServiceRetentionBody, _options?: Configuration): Promise<InsightsServiceRetentionResponse> {
        const result = this.api.retention(owner, slug, body, _options);
        return result.toPromise();
    }

    /**
     * Query for retention.
     * Retention query
     * @param body
     */
    public retention2WithHttpInfo(body: InsightsServiceRetentionRequest, _options?: Configuration): Promise<HttpInfo<InsightsServiceRetentionResponse>> {
        const result = this.api.retention2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Query for retention.
     * Retention query
     * @param body
     */
    public retention2(body: InsightsServiceRetentionRequest, _options?: Configuration): Promise<InsightsServiceRetentionResponse> {
        const result = this.api.retention2(body, _options);
        return result.toPromise();
    }

    /**
     * Save your SQL query, and you can run it immediately or later.  It will return query_id, you can use it to rerun the query. if you enable the \"run_immediately\" field, it will run the query immediately, and return execution_id, use it to query the result.
     * Save SQL
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public saveSQLWithHttpInfo(owner: string, slug: string, body: AnalyticServiceAnalyticServiceSaveSQLBody, _options?: Configuration): Promise<HttpInfo<AnalyticServiceSaveSQLResponse>> {
        const result = this.api.saveSQLWithHttpInfo(owner, slug, body, _options);
        return result.toPromise();
    }

    /**
     * Save your SQL query, and you can run it immediately or later.  It will return query_id, you can use it to rerun the query. if you enable the \"run_immediately\" field, it will run the query immediately, and return execution_id, use it to query the result.
     * Save SQL
     * @param owner username or organization name
     * @param slug project slug
     * @param body
     */
    public saveSQL(owner: string, slug: string, body: AnalyticServiceAnalyticServiceSaveSQLBody, _options?: Configuration): Promise<AnalyticServiceSaveSQLResponse> {
        const result = this.api.saveSQL(owner, slug, body, _options);
        return result.toPromise();
    }

    /**
     * Save your SQL query, and you can run it immediately or later.  It will return query_id, you can use it to rerun the query. if you enable the \"run_immediately\" field, it will run the query immediately, and return execution_id, use it to query the result.
     * Save SQL
     * @param body
     */
    public saveSQL2WithHttpInfo(body: AnalyticServiceSaveSQLRequest, _options?: Configuration): Promise<HttpInfo<AnalyticServiceSaveSQLResponse>> {
        const result = this.api.saveSQL2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Save your SQL query, and you can run it immediately or later.  It will return query_id, you can use it to rerun the query. if you enable the \"run_immediately\" field, it will run the query immediately, and return execution_id, use it to query the result.
     * Save SQL
     * @param body
     */
    public saveSQL2(body: AnalyticServiceSaveSQLRequest, _options?: Configuration): Promise<AnalyticServiceSaveSQLResponse> {
        const result = this.api.saveSQL2(body, _options);
        return result.toPromise();
    }


}



import { ObservableDebugAndSimulationApi } from './ObservableAPI.js';

import { DebugAndSimulationApiRequestFactory, DebugAndSimulationApiResponseProcessor} from "../apis/DebugAndSimulationApi.js";
export class PromiseDebugAndSimulationApi {
    private api: ObservableDebugAndSimulationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DebugAndSimulationApiRequestFactory,
        responseProcessor?: DebugAndSimulationApiResponseProcessor
    ) {
        this.api = new ObservableDebugAndSimulationApi(configuration, requestFactory, responseProcessor);
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
    public getCallTraceByBundleWithHttpInfo(owner: string, slug: string, chainId: string, bundleId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<HttpInfo<GoogleApiHttpBody>> {
        const result = this.api.getCallTraceByBundleWithHttpInfo(owner, slug, chainId, bundleId, withInternalCalls, disableOptimizer, ignoreGasCost, _options);
        return result.toPromise();
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
    public getCallTraceByBundle(owner: string, slug: string, chainId: string, bundleId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<GoogleApiHttpBody> {
        const result = this.api.getCallTraceByBundle(owner, slug, chainId, bundleId, withInternalCalls, disableOptimizer, ignoreGasCost, _options);
        return result.toPromise();
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
    public getCallTraceBySimulationWithHttpInfo(owner: string, slug: string, chainId: string, simulationId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<HttpInfo<GoogleApiHttpBody>> {
        const result = this.api.getCallTraceBySimulationWithHttpInfo(owner, slug, chainId, simulationId, withInternalCalls, disableOptimizer, ignoreGasCost, _options);
        return result.toPromise();
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
    public getCallTraceBySimulation(owner: string, slug: string, chainId: string, simulationId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<GoogleApiHttpBody> {
        const result = this.api.getCallTraceBySimulation(owner, slug, chainId, simulationId, withInternalCalls, disableOptimizer, ignoreGasCost, _options);
        return result.toPromise();
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
    public getCallTraceByTransactionWithHttpInfo(owner: string, slug: string, chainId: string, txHash: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<HttpInfo<GoogleApiHttpBody>> {
        const result = this.api.getCallTraceByTransactionWithHttpInfo(owner, slug, chainId, txHash, withInternalCalls, disableOptimizer, ignoreGasCost, _options);
        return result.toPromise();
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
    public getCallTraceByTransaction(owner: string, slug: string, chainId: string, txHash: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<GoogleApiHttpBody> {
        const result = this.api.getCallTraceByTransaction(owner, slug, chainId, txHash, withInternalCalls, disableOptimizer, ignoreGasCost, _options);
        return result.toPromise();
    }

    /**
     * Get simulation by ID
     * @param owner
     * @param slug
     * @param simulationId
     */
    public getSimulationWithHttpInfo(owner: string, slug: string, simulationId: string, _options?: Configuration): Promise<HttpInfo<SolidityServiceGetSimulationResponse>> {
        const result = this.api.getSimulationWithHttpInfo(owner, slug, simulationId, _options);
        return result.toPromise();
    }

    /**
     * Get simulation by ID
     * @param owner
     * @param slug
     * @param simulationId
     */
    public getSimulation(owner: string, slug: string, simulationId: string, _options?: Configuration): Promise<SolidityServiceGetSimulationResponse> {
        const result = this.api.getSimulation(owner, slug, simulationId, _options);
        return result.toPromise();
    }

    /**
     * Get bundle simulation by ID
     * @param owner
     * @param slug
     * @param bundleId
     */
    public getSimulationBundleInProjectWithHttpInfo(owner: string, slug: string, bundleId: string, _options?: Configuration): Promise<HttpInfo<SolidityServiceGetSimulationBundleResponse>> {
        const result = this.api.getSimulationBundleInProjectWithHttpInfo(owner, slug, bundleId, _options);
        return result.toPromise();
    }

    /**
     * Get bundle simulation by ID
     * @param owner
     * @param slug
     * @param bundleId
     */
    public getSimulationBundleInProject(owner: string, slug: string, bundleId: string, _options?: Configuration): Promise<SolidityServiceGetSimulationBundleResponse> {
        const result = this.api.getSimulationBundleInProject(owner, slug, bundleId, _options);
        return result.toPromise();
    }

    /**
     * Get list of simulations
     * @param owner
     * @param slug
     * @param [labelContains]
     * @param [page]
     * @param [pageSize]
     */
    public getSimulationsWithHttpInfo(owner: string, slug: string, labelContains?: string, page?: number, pageSize?: number, _options?: Configuration): Promise<HttpInfo<SolidityServiceGetSimulationsResponse>> {
        const result = this.api.getSimulationsWithHttpInfo(owner, slug, labelContains, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Get list of simulations
     * @param owner
     * @param slug
     * @param [labelContains]
     * @param [page]
     * @param [pageSize]
     */
    public getSimulations(owner: string, slug: string, labelContains?: string, page?: number, pageSize?: number, _options?: Configuration): Promise<SolidityServiceGetSimulationsResponse> {
        const result = this.api.getSimulations(owner, slug, labelContains, page, pageSize, _options);
        return result.toPromise();
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
    public searchTransactionsWithHttpInfo(owner: string, slug: string, chainId?: Array<string>, address?: Array<string>, includeDirect?: boolean, includeTrace?: boolean, includeIn?: boolean, includeOut?: boolean, startBlock?: string, endBlock?: string, startTimestamp?: string, endTimestamp?: string, transactionStatus?: Array<number>, methodSignature?: string, limit?: number, pageToken?: string, _options?: Configuration): Promise<HttpInfo<TxindexEvmSearchTransactionsResponse>> {
        const result = this.api.searchTransactionsWithHttpInfo(owner, slug, chainId, address, includeDirect, includeTrace, includeIn, includeOut, startBlock, endBlock, startTimestamp, endTimestamp, transactionStatus, methodSignature, limit, pageToken, _options);
        return result.toPromise();
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
    public searchTransactions(owner: string, slug: string, chainId?: Array<string>, address?: Array<string>, includeDirect?: boolean, includeTrace?: boolean, includeIn?: boolean, includeOut?: boolean, startBlock?: string, endBlock?: string, startTimestamp?: string, endTimestamp?: string, transactionStatus?: Array<number>, methodSignature?: string, limit?: number, pageToken?: string, _options?: Configuration): Promise<TxindexEvmSearchTransactionsResponse> {
        const result = this.api.searchTransactions(owner, slug, chainId, address, includeDirect, includeTrace, includeIn, includeOut, startBlock, endBlock, startTimestamp, endTimestamp, transactionStatus, methodSignature, limit, pageToken, _options);
        return result.toPromise();
    }

    /**
     * Create a new transaction simulation. The simulation body should be included in the request body. Your simulations will be saved, and a unique ID for each simulation is included in the response. It will be useful for fetching simulation details.
     * Run simulation
     * @param owner
     * @param slug
     * @param chainId
     * @param body
     */
    public simulateTransactionWithHttpInfo(owner: string, slug: string, chainId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionBody, _options?: Configuration): Promise<HttpInfo<SolidityServiceSimulateTransactionResponse>> {
        const result = this.api.simulateTransactionWithHttpInfo(owner, slug, chainId, body, _options);
        return result.toPromise();
    }

    /**
     * Create a new transaction simulation. The simulation body should be included in the request body. Your simulations will be saved, and a unique ID for each simulation is included in the response. It will be useful for fetching simulation details.
     * Run simulation
     * @param owner
     * @param slug
     * @param chainId
     * @param body
     */
    public simulateTransaction(owner: string, slug: string, chainId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionBody, _options?: Configuration): Promise<SolidityServiceSimulateTransactionResponse> {
        const result = this.api.simulateTransaction(owner, slug, chainId, body, _options);
        return result.toPromise();
    }

    /**
     * You could also create bundle simulations so that one transaction could be executed one after another. For `blockNumber` `transactionIndex` `networkId` `stateOverrides` and `blockOverrides` fields, only the first simulation takes effect.
     * Run bundle simulation
     * @param owner
     * @param slug
     * @param chainId
     * @param body
     */
    public simulateTransactionBundleWithHttpInfo(owner: string, slug: string, chainId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody, _options?: Configuration): Promise<HttpInfo<SolidityServiceSimulateTransactionBundleResponse>> {
        const result = this.api.simulateTransactionBundleWithHttpInfo(owner, slug, chainId, body, _options);
        return result.toPromise();
    }

    /**
     * You could also create bundle simulations so that one transaction could be executed one after another. For `blockNumber` `transactionIndex` `networkId` `stateOverrides` and `blockOverrides` fields, only the first simulation takes effect.
     * Run bundle simulation
     * @param owner
     * @param slug
     * @param chainId
     * @param body
     */
    public simulateTransactionBundle(owner: string, slug: string, chainId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody, _options?: Configuration): Promise<SolidityServiceSimulateTransactionBundleResponse> {
        const result = this.api.simulateTransactionBundle(owner, slug, chainId, body, _options);
        return result.toPromise();
    }


}



import { ObservableForksApi } from './ObservableAPI.js';

import { ForksApiRequestFactory, ForksApiResponseProcessor} from "../apis/ForksApi.js";
export class PromiseForksApi {
    private api: ObservableForksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ForksApiRequestFactory,
        responseProcessor?: ForksApiResponseProcessor
    ) {
        this.api = new ObservableForksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a fork
     * @param owner
     * @param slug
     * @param body
     */
    public createForkWithHttpInfo(owner: string, slug: string, body: SolidityServiceForkServiceCreateForkBody, _options?: Configuration): Promise<HttpInfo<SolidityServiceCreateForkResponse>> {
        const result = this.api.createForkWithHttpInfo(owner, slug, body, _options);
        return result.toPromise();
    }

    /**
     * Create a fork
     * @param owner
     * @param slug
     * @param body
     */
    public createFork(owner: string, slug: string, body: SolidityServiceForkServiceCreateForkBody, _options?: Configuration): Promise<SolidityServiceCreateForkResponse> {
        const result = this.api.createFork(owner, slug, body, _options);
        return result.toPromise();
    }

    /**
     * Delete fork by id
     * @param owner
     * @param slug
     * @param id
     */
    public deleteForkWithHttpInfo(owner: string, slug: string, id: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteForkWithHttpInfo(owner, slug, id, _options);
        return result.toPromise();
    }

    /**
     * Delete fork by id
     * @param owner
     * @param slug
     * @param id
     */
    public deleteFork(owner: string, slug: string, id: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteFork(owner, slug, id, _options);
        return result.toPromise();
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
    public getCallTraceOnForkBundleWithHttpInfo(owner: string, slug: string, forkId: string, bundleId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<HttpInfo<GoogleApiHttpBody>> {
        const result = this.api.getCallTraceOnForkBundleWithHttpInfo(owner, slug, forkId, bundleId, withInternalCalls, disableOptimizer, ignoreGasCost, _options);
        return result.toPromise();
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
    public getCallTraceOnForkBundle(owner: string, slug: string, forkId: string, bundleId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<GoogleApiHttpBody> {
        const result = this.api.getCallTraceOnForkBundle(owner, slug, forkId, bundleId, withInternalCalls, disableOptimizer, ignoreGasCost, _options);
        return result.toPromise();
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
    public getCallTraceOnForkSimulationWithHttpInfo(owner: string, slug: string, forkId: string, simulationId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<HttpInfo<GoogleApiHttpBody>> {
        const result = this.api.getCallTraceOnForkSimulationWithHttpInfo(owner, slug, forkId, simulationId, withInternalCalls, disableOptimizer, ignoreGasCost, _options);
        return result.toPromise();
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
    public getCallTraceOnForkSimulation(owner: string, slug: string, forkId: string, simulationId: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<GoogleApiHttpBody> {
        const result = this.api.getCallTraceOnForkSimulation(owner, slug, forkId, simulationId, withInternalCalls, disableOptimizer, ignoreGasCost, _options);
        return result.toPromise();
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
    public getCallTraceOnForkTransactionWithHttpInfo(owner: string, slug: string, forkId: string, txHash: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<HttpInfo<GoogleApiHttpBody>> {
        const result = this.api.getCallTraceOnForkTransactionWithHttpInfo(owner, slug, forkId, txHash, withInternalCalls, disableOptimizer, ignoreGasCost, _options);
        return result.toPromise();
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
    public getCallTraceOnForkTransaction(owner: string, slug: string, forkId: string, txHash: string, withInternalCalls?: boolean, disableOptimizer?: boolean, ignoreGasCost?: boolean, _options?: Configuration): Promise<GoogleApiHttpBody> {
        const result = this.api.getCallTraceOnForkTransaction(owner, slug, forkId, txHash, withInternalCalls, disableOptimizer, ignoreGasCost, _options);
        return result.toPromise();
    }

    /**
     * Get fork by id
     * @param owner
     * @param slug
     * @param id
     */
    public getForkWithHttpInfo(owner: string, slug: string, id: string, _options?: Configuration): Promise<HttpInfo<SolidityServiceGetForkResponse>> {
        const result = this.api.getForkWithHttpInfo(owner, slug, id, _options);
        return result.toPromise();
    }

    /**
     * Get fork by id
     * @param owner
     * @param slug
     * @param id
     */
    public getFork(owner: string, slug: string, id: string, _options?: Configuration): Promise<SolidityServiceGetForkResponse> {
        const result = this.api.getFork(owner, slug, id, _options);
        return result.toPromise();
    }

    /**
     * Get fork info by id
     * @param owner
     * @param slug
     * @param id
     */
    public getForkInfoWithHttpInfo(owner: string, slug: string, id: string, _options?: Configuration): Promise<HttpInfo<SolidityServiceGetForkInfoResponse>> {
        const result = this.api.getForkInfoWithHttpInfo(owner, slug, id, _options);
        return result.toPromise();
    }

    /**
     * Get fork info by id
     * @param owner
     * @param slug
     * @param id
     */
    public getForkInfo(owner: string, slug: string, id: string, _options?: Configuration): Promise<SolidityServiceGetForkInfoResponse> {
        const result = this.api.getForkInfo(owner, slug, id, _options);
        return result.toPromise();
    }

    /**
     * List all forks
     * @param owner
     * @param slug
     */
    public listForksWithHttpInfo(owner: string, slug: string, _options?: Configuration): Promise<HttpInfo<SolidityServiceListForksResponse>> {
        const result = this.api.listForksWithHttpInfo(owner, slug, _options);
        return result.toPromise();
    }

    /**
     * List all forks
     * @param owner
     * @param slug
     */
    public listForks(owner: string, slug: string, _options?: Configuration): Promise<SolidityServiceListForksResponse> {
        const result = this.api.listForks(owner, slug, _options);
        return result.toPromise();
    }

    /**
     * Run bundle simulation
     * @param owner
     * @param slug
     * @param forkId
     * @param body
     */
    public simulateTransactionBundleOnForkWithHttpInfo(owner: string, slug: string, forkId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionBundleOnForkBody, _options?: Configuration): Promise<HttpInfo<SolidityServiceSimulateTransactionBundleResponse>> {
        const result = this.api.simulateTransactionBundleOnForkWithHttpInfo(owner, slug, forkId, body, _options);
        return result.toPromise();
    }

    /**
     * Run bundle simulation
     * @param owner
     * @param slug
     * @param forkId
     * @param body
     */
    public simulateTransactionBundleOnFork(owner: string, slug: string, forkId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionBundleOnForkBody, _options?: Configuration): Promise<SolidityServiceSimulateTransactionBundleResponse> {
        const result = this.api.simulateTransactionBundleOnFork(owner, slug, forkId, body, _options);
        return result.toPromise();
    }

    /**
     * Run Simulation
     * @param owner
     * @param slug
     * @param forkId
     * @param body
     */
    public simulateTransactionOnForkWithHttpInfo(owner: string, slug: string, forkId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionOnForkBody, _options?: Configuration): Promise<HttpInfo<SolidityServiceSimulateTransactionResponse>> {
        const result = this.api.simulateTransactionOnForkWithHttpInfo(owner, slug, forkId, body, _options);
        return result.toPromise();
    }

    /**
     * Run Simulation
     * @param owner
     * @param slug
     * @param forkId
     * @param body
     */
    public simulateTransactionOnFork(owner: string, slug: string, forkId: string, body: SolidityServiceSolidityAPIServiceSimulateTransactionOnForkBody, _options?: Configuration): Promise<SolidityServiceSimulateTransactionResponse> {
        const result = this.api.simulateTransactionOnFork(owner, slug, forkId, body, _options);
        return result.toPromise();
    }

    /**
     * Update fork by id
     * @param owner
     * @param slug
     * @param id
     * @param body
     */
    public updateForkWithHttpInfo(owner: string, slug: string, id: string, body: SolidityServiceForkServiceUpdateForkBody, _options?: Configuration): Promise<HttpInfo<SolidityServiceUpdateForkResponse>> {
        const result = this.api.updateForkWithHttpInfo(owner, slug, id, body, _options);
        return result.toPromise();
    }

    /**
     * Update fork by id
     * @param owner
     * @param slug
     * @param id
     * @param body
     */
    public updateFork(owner: string, slug: string, id: string, body: SolidityServiceForkServiceUpdateForkBody, _options?: Configuration): Promise<SolidityServiceUpdateForkResponse> {
        const result = this.api.updateFork(owner, slug, id, body, _options);
        return result.toPromise();
    }


}



import { ObservablePriceApi } from './ObservableAPI.js';

import { PriceApiRequestFactory, PriceApiResponseProcessor} from "../apis/PriceApi.js";
export class PromisePriceApi {
    private api: ObservablePriceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PriceApiRequestFactory,
        responseProcessor?: PriceApiResponseProcessor
    ) {
        this.api = new ObservablePriceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Batch get prices
     * @param body
     */
    public batchGetPricesWithHttpInfo(body: PriceServiceBatchGetPricesRequest, _options?: Configuration): Promise<HttpInfo<PriceServiceBatchGetPricesResponse>> {
        const result = this.api.batchGetPricesWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Batch get prices
     * @param body
     */
    public batchGetPrices(body: PriceServiceBatchGetPricesRequest, _options?: Configuration): Promise<PriceServiceBatchGetPricesResponse> {
        const result = this.api.batchGetPrices(body, _options);
        return result.toPromise();
    }

    /**
     * Check latest price
     */
    public checkLatestPriceWithHttpInfo(_options?: Configuration): Promise<HttpInfo<PriceServiceCheckLatestPriceResponse>> {
        const result = this.api.checkLatestPriceWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Check latest price
     */
    public checkLatestPrice(_options?: Configuration): Promise<PriceServiceCheckLatestPriceResponse> {
        const result = this.api.checkLatestPrice(_options);
        return result.toPromise();
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
    public getPriceWithHttpInfo(timestamp?: Date, coinIdSymbol?: string, coinIdAddressAddress?: string, coinIdAddressChain?: string, source?: string, _options?: Configuration): Promise<HttpInfo<PriceServiceGetPriceResponse>> {
        const result = this.api.getPriceWithHttpInfo(timestamp, coinIdSymbol, coinIdAddressAddress, coinIdAddressChain, source, _options);
        return result.toPromise();
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
    public getPrice(timestamp?: Date, coinIdSymbol?: string, coinIdAddressAddress?: string, coinIdAddressChain?: string, source?: string, _options?: Configuration): Promise<PriceServiceGetPriceResponse> {
        const result = this.api.getPrice(timestamp, coinIdSymbol, coinIdAddressAddress, coinIdAddressChain, source, _options);
        return result.toPromise();
    }

    /**
     * List coins
     * @param [limit]
     * @param [offset]
     * @param [searchQuery]
     * @param [chain]
     */
    public priceListCoinsWithHttpInfo(limit?: number, offset?: number, searchQuery?: string, chain?: string, _options?: Configuration): Promise<HttpInfo<PriceServiceListCoinsResponse>> {
        const result = this.api.priceListCoinsWithHttpInfo(limit, offset, searchQuery, chain, _options);
        return result.toPromise();
    }

    /**
     * List coins
     * @param [limit]
     * @param [offset]
     * @param [searchQuery]
     * @param [chain]
     */
    public priceListCoins(limit?: number, offset?: number, searchQuery?: string, chain?: string, _options?: Configuration): Promise<PriceServiceListCoinsResponse> {
        const result = this.api.priceListCoins(limit, offset, searchQuery, chain, _options);
        return result.toPromise();
    }


}



import { ObservableWebApi } from './ObservableAPI.js';

import { WebApiRequestFactory, WebApiResponseProcessor} from "../apis/WebApi.js";
export class PromiseWebApi {
    private api: ObservableWebApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebApiRequestFactory,
        responseProcessor?: WebApiResponseProcessor
    ) {
        this.api = new ObservableWebApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a dashboard by id
     * @param dashboardId filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     * @param [ownerName] username or organization name
     * @param [slug] project slug
     */
    public deleteDashboardWithHttpInfo(dashboardId: string, projectId?: string, ownerName?: string, slug?: string, _options?: Configuration): Promise<HttpInfo<WebServiceDashboard>> {
        const result = this.api.deleteDashboardWithHttpInfo(dashboardId, projectId, ownerName, slug, _options);
        return result.toPromise();
    }

    /**
     * Delete a dashboard by id
     * @param dashboardId filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     * @param [ownerName] username or organization name
     * @param [slug] project slug
     */
    public deleteDashboard(dashboardId: string, projectId?: string, ownerName?: string, slug?: string, _options?: Configuration): Promise<WebServiceDashboard> {
        const result = this.api.deleteDashboard(dashboardId, projectId, ownerName, slug, _options);
        return result.toPromise();
    }

    /**
     * Export a dashboard to json
     * @param dashboardId
     */
    public exportDashboardWithHttpInfo(dashboardId: string, _options?: Configuration): Promise<HttpInfo<WebServiceExportDashboardResponse>> {
        const result = this.api.exportDashboardWithHttpInfo(dashboardId, _options);
        return result.toPromise();
    }

    /**
     * Export a dashboard to json
     * @param dashboardId
     */
    public exportDashboard(dashboardId: string, _options?: Configuration): Promise<WebServiceExportDashboardResponse> {
        const result = this.api.exportDashboard(dashboardId, _options);
        return result.toPromise();
    }

    /**
     * Get a dashboard by id
     * @param dashboardId filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     * @param [ownerName] username or organization name
     * @param [slug] project slug
     */
    public getDashboardWithHttpInfo(dashboardId: string, projectId?: string, ownerName?: string, slug?: string, _options?: Configuration): Promise<HttpInfo<WebServiceGetDashboardResponse>> {
        const result = this.api.getDashboardWithHttpInfo(dashboardId, projectId, ownerName, slug, _options);
        return result.toPromise();
    }

    /**
     * Get a dashboard by id
     * @param dashboardId filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     * @param [ownerName] username or organization name
     * @param [slug] project slug
     */
    public getDashboard(dashboardId: string, projectId?: string, ownerName?: string, slug?: string, _options?: Configuration): Promise<WebServiceGetDashboardResponse> {
        const result = this.api.getDashboard(dashboardId, projectId, ownerName, slug, _options);
        return result.toPromise();
    }

    /**
     * Get a dashboard by id
     * @param owner username or organization name
     * @param slug project slug
     * @param dashboardId filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     */
    public getDashboard2WithHttpInfo(owner: string, slug: string, dashboardId: string, projectId?: string, _options?: Configuration): Promise<HttpInfo<WebServiceGetDashboardResponse>> {
        const result = this.api.getDashboard2WithHttpInfo(owner, slug, dashboardId, projectId, _options);
        return result.toPromise();
    }

    /**
     * Get a dashboard by id
     * @param owner username or organization name
     * @param slug project slug
     * @param dashboardId filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     */
    public getDashboard2(owner: string, slug: string, dashboardId: string, projectId?: string, _options?: Configuration): Promise<WebServiceGetDashboardResponse> {
        const result = this.api.getDashboard2(owner, slug, dashboardId, projectId, _options);
        return result.toPromise();
    }

    /**
     * Get project details
     * @param owner username or organization name
     * @param slug project slug
     */
    public getProjectWithHttpInfo(owner: string, slug: string, _options?: Configuration): Promise<HttpInfo<WebServiceGetProjectResponse>> {
        const result = this.api.getProjectWithHttpInfo(owner, slug, _options);
        return result.toPromise();
    }

    /**
     * Get project details
     * @param owner username or organization name
     * @param slug project slug
     */
    public getProject(owner: string, slug: string, _options?: Configuration): Promise<WebServiceGetProjectResponse> {
        const result = this.api.getProject(owner, slug, _options);
        return result.toPromise();
    }

    /**
     * Get project list
     * @param [userId]
     * @param [organizationId]
     */
    public getProjectListWithHttpInfo(userId?: string, organizationId?: string, _options?: Configuration): Promise<HttpInfo<WebServiceGetProjectListResponse>> {
        const result = this.api.getProjectListWithHttpInfo(userId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Get project list
     * @param [userId]
     * @param [organizationId]
     */
    public getProjectList(userId?: string, organizationId?: string, _options?: Configuration): Promise<WebServiceGetProjectListResponse> {
        const result = this.api.getProjectList(userId, organizationId, _options);
        return result.toPromise();
    }

    /**
     * Import a dashboard to another dashboard
     * @param body
     */
    public importDashboardWithHttpInfo(body: WebServiceImportDashboardRequest, _options?: Configuration): Promise<HttpInfo<WebServiceImportDashboardResponse>> {
        const result = this.api.importDashboardWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Import a dashboard to another dashboard
     * @param body
     */
    public importDashboard(body: WebServiceImportDashboardRequest, _options?: Configuration): Promise<WebServiceImportDashboardResponse> {
        const result = this.api.importDashboard(body, _options);
        return result.toPromise();
    }

    /**
     * List all dashboards in a project
     * @param [dashboardId] filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     * @param [ownerName] username or organization name
     * @param [slug] project slug
     */
    public listDashboardsWithHttpInfo(dashboardId?: string, projectId?: string, ownerName?: string, slug?: string, _options?: Configuration): Promise<HttpInfo<WebServiceGetDashboardResponse>> {
        const result = this.api.listDashboardsWithHttpInfo(dashboardId, projectId, ownerName, slug, _options);
        return result.toPromise();
    }

    /**
     * List all dashboards in a project
     * @param [dashboardId] filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     * @param [ownerName] username or organization name
     * @param [slug] project slug
     */
    public listDashboards(dashboardId?: string, projectId?: string, ownerName?: string, slug?: string, _options?: Configuration): Promise<WebServiceGetDashboardResponse> {
        const result = this.api.listDashboards(dashboardId, projectId, ownerName, slug, _options);
        return result.toPromise();
    }

    /**
     * List all dashboards in a project
     * @param owner username or organization name
     * @param slug project slug
     * @param [dashboardId] filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     */
    public listDashboards2WithHttpInfo(owner: string, slug: string, dashboardId?: string, projectId?: string, _options?: Configuration): Promise<HttpInfo<WebServiceGetDashboardResponse>> {
        const result = this.api.listDashboards2WithHttpInfo(owner, slug, dashboardId, projectId, _options);
        return result.toPromise();
    }

    /**
     * List all dashboards in a project
     * @param owner username or organization name
     * @param slug project slug
     * @param [dashboardId] filter the dashboard by id
     * @param [projectId] filter the dashboard by project id
     */
    public listDashboards2(owner: string, slug: string, dashboardId?: string, projectId?: string, _options?: Configuration): Promise<WebServiceGetDashboardResponse> {
        const result = this.api.listDashboards2(owner, slug, dashboardId, projectId, _options);
        return result.toPromise();
    }


}




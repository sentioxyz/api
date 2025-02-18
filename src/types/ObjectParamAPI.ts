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
import { AnalyticServiceAnalyticServiceExecuteSQLAsyncBody } from '../models/AnalyticServiceAnalyticServiceExecuteSQLAsyncBody.js';
import { AnalyticServiceAnalyticServiceExecuteSQLBody } from '../models/AnalyticServiceAnalyticServiceExecuteSQLBody.js';
import { AnalyticServiceAnalyticServiceSaveSQLBody } from '../models/AnalyticServiceAnalyticServiceSaveSQLBody.js';
import { AnalyticServiceAsyncExecuteSQLResponse } from '../models/AnalyticServiceAsyncExecuteSQLResponse.js';
import { AnalyticServiceExecutionInfo } from '../models/AnalyticServiceExecutionInfo.js';
import { AnalyticServiceExecutionStatus } from '../models/AnalyticServiceExecutionStatus.js';
import { AnalyticServiceLogQueryRequestFilter } from '../models/AnalyticServiceLogQueryRequestFilter.js';
import { AnalyticServiceLogQueryRequestSort } from '../models/AnalyticServiceLogQueryRequestSort.js';
import { AnalyticServiceLogQueryResponse } from '../models/AnalyticServiceLogQueryResponse.js';
import { AnalyticServiceQuerySQLResultResponse } from '../models/AnalyticServiceQuerySQLResultResponse.js';
import { AnalyticServiceSQLQuery } from '../models/AnalyticServiceSQLQuery.js';
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
import { CommonComputeStatsClickhouseStats } from '../models/CommonComputeStatsClickhouseStats.js';
import { CommonDuration } from '../models/CommonDuration.js';
import { CommonErrorRecord } from '../models/CommonErrorRecord.js';
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
import { CommonProjectVariables } from '../models/CommonProjectVariables.js';
import { CommonProjectVariablesVariable } from '../models/CommonProjectVariablesVariable.js';
import { CommonProjectView } from '../models/CommonProjectView.js';
import { CommonProjectViewProjectViewConfig } from '../models/CommonProjectViewProjectViewConfig.js';
import { CommonProjectVisibility } from '../models/CommonProjectVisibility.js';
import { CommonQuery } from '../models/CommonQuery.js';
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
import { InsightsServiceListCoinsResponse } from '../models/InsightsServiceListCoinsResponse.js';
import { InsightsServiceQueryRequestQuery } from '../models/InsightsServiceQueryRequestQuery.js';
import { InsightsServiceQueryResponse } from '../models/InsightsServiceQueryResponse.js';
import { InsightsServiceQueryResponseResult } from '../models/InsightsServiceQueryResponseResult.js';
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
import { PriceServiceAddCoinByGeckoRequest } from '../models/PriceServiceAddCoinByGeckoRequest.js';
import { PriceServiceAddCoinByGeckoResponse } from '../models/PriceServiceAddCoinByGeckoResponse.js';
import { PriceServiceAddCoinByGeckoResponseStatus } from '../models/PriceServiceAddCoinByGeckoResponseStatus.js';
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
import { ProcessorServiceChainState } from '../models/ProcessorServiceChainState.js';
import { ProcessorServiceChainStateStatus } from '../models/ProcessorServiceChainStateStatus.js';
import { ProcessorServiceChainStateStatusState } from '../models/ProcessorServiceChainStateStatusState.js';
import { ProcessorServiceDownloadProcessorResponse } from '../models/ProcessorServiceDownloadProcessorResponse.js';
import { ProcessorServiceGetProcessorResponse } from '../models/ProcessorServiceGetProcessorResponse.js';
import { ProcessorServiceGetProcessorStatusRequestV2VersionSelector } from '../models/ProcessorServiceGetProcessorStatusRequestV2VersionSelector.js';
import { ProcessorServiceGetProcessorStatusResponse } from '../models/ProcessorServiceGetProcessorStatusResponse.js';
import { ProcessorServiceGetProcessorStatusResponseProcessorEx } from '../models/ProcessorServiceGetProcessorStatusResponseProcessorEx.js';
import { ProcessorServiceGetProcessorStatusResponseProcessorStatus } from '../models/ProcessorServiceGetProcessorStatusResponseProcessorStatus.js';
import { ProcessorServiceGetProcessorStatusResponseProcessorStatusState } from '../models/ProcessorServiceGetProcessorStatusResponseProcessorStatusState.js';
import { ProcessorServiceGetProcessorWithProjectResponse } from '../models/ProcessorServiceGetProcessorWithProjectResponse.js';
import { ProcessorServiceGetProcessorsResponse } from '../models/ProcessorServiceGetProcessorsResponse.js';
import { ProcessorServiceNetworkOverride } from '../models/ProcessorServiceNetworkOverride.js';
import { ProcessorServiceProcessor } from '../models/ProcessorServiceProcessor.js';
import { ProcessorServiceProcessorVersionState } from '../models/ProcessorServiceProcessorVersionState.js';
import { SolidityServiceBaseChainConfig } from '../models/SolidityServiceBaseChainConfig.js';
import { SolidityServiceBlockOverrides } from '../models/SolidityServiceBlockOverrides.js';
import { SolidityServiceBlockPrice } from '../models/SolidityServiceBlockPrice.js';
import { SolidityServiceChainIdentifier } from '../models/SolidityServiceChainIdentifier.js';
import { SolidityServiceCompileSourceInternalResponse } from '../models/SolidityServiceCompileSourceInternalResponse.js';
import { SolidityServiceCompilerOptions } from '../models/SolidityServiceCompilerOptions.js';
import { SolidityServiceContractKeyInfo } from '../models/SolidityServiceContractKeyInfo.js';
import { SolidityServiceCreateForkResponse } from '../models/SolidityServiceCreateForkResponse.js';
import { SolidityServiceDecodeStateDiffResponse } from '../models/SolidityServiceDecodeStateDiffResponse.js';
import { SolidityServiceEstimatedPrice } from '../models/SolidityServiceEstimatedPrice.js';
import { SolidityServiceEvmRawTransaction } from '../models/SolidityServiceEvmRawTransaction.js';
import { SolidityServiceEvmSearchTransactionsResponse } from '../models/SolidityServiceEvmSearchTransactionsResponse.js';
import { SolidityServiceExternalFork } from '../models/SolidityServiceExternalFork.js';
import { SolidityServiceFailure } from '../models/SolidityServiceFailure.js';
import { SolidityServiceFetchAndCompileInternalResponse } from '../models/SolidityServiceFetchAndCompileInternalResponse.js';
import { SolidityServiceFork } from '../models/SolidityServiceFork.js';
import { SolidityServiceForkServiceCreateForkBody } from '../models/SolidityServiceForkServiceCreateForkBody.js';
import { SolidityServiceForkServiceUpdateForkBody } from '../models/SolidityServiceForkServiceUpdateForkBody.js';
import { SolidityServiceForkType } from '../models/SolidityServiceForkType.js';
import { SolidityServiceGetEstimatedGasPriceResponse } from '../models/SolidityServiceGetEstimatedGasPriceResponse.js';
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
import { SolidityServiceSimulationSharing } from '../models/SolidityServiceSimulationSharing.js';
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
import { WebServiceChart } from '../models/WebServiceChart.js';
import { WebServiceChartChartType } from '../models/WebServiceChartChartType.js';
import { WebServiceChartConfig } from '../models/WebServiceChartConfig.js';
import { WebServiceChartConfigBarGaugeConfig } from '../models/WebServiceChartConfigBarGaugeConfig.js';
import { WebServiceChartConfigCalculation } from '../models/WebServiceChartConfigCalculation.js';
import { WebServiceChartConfigColorTheme } from '../models/WebServiceChartConfigColorTheme.js';
import { WebServiceChartConfigColumnSort } from '../models/WebServiceChartConfigColumnSort.js';
import { WebServiceChartConfigCompareTime } from '../models/WebServiceChartConfigCompareTime.js';
import { WebServiceChartConfigDirection } from '../models/WebServiceChartConfigDirection.js';
import { WebServiceChartConfigLabelConfig } from '../models/WebServiceChartConfigLabelConfig.js';
import { WebServiceChartConfigLabelConfigColumn } from '../models/WebServiceChartConfigLabelConfigColumn.js';
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
import { WebServiceChartConfigXAxisConfig } from '../models/WebServiceChartConfigXAxisConfig.js';
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

import { ObservableAlertsApi } from "./ObservableAPI.js";
import { AlertsApiRequestFactory, AlertsApiResponseProcessor} from "../apis/AlertsApi.js";

export interface AlertsApiDeleteAlertRuleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApideleteAlertRule
     */
    id: string
}

export interface AlertsApiGetAlertRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApigetAlert
     */
    ruleId: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AlertsApigetAlert
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AlertsApigetAlert
     */
    pageSize?: number
}

export interface AlertsApiGetAlertRulesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApigetAlertRules
     */
    projectId: string
}

export interface AlertsApiSaveAlertRuleRequest {
    /**
     * 
     * @type AlertServiceSaveAlertRuleRequest
     * @memberof AlertsApisaveAlertRule
     */
    body: AlertServiceSaveAlertRuleRequest
}

export interface AlertsApiSaveAlertRule2Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AlertsApisaveAlertRule2
     */
    id: string
    /**
     * 
     * @type AlertServiceAlertServiceSaveAlertRuleBody
     * @memberof AlertsApisaveAlertRule2
     */
    body: AlertServiceAlertServiceSaveAlertRuleBody
}

export class ObjectAlertsApi {
    private api: ObservableAlertsApi

    public constructor(configuration: Configuration, requestFactory?: AlertsApiRequestFactory, responseProcessor?: AlertsApiResponseProcessor) {
        this.api = new ObservableAlertsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an alert rule
     * @param param the request object
     */
    public deleteAlertRuleWithHttpInfo(param: AlertsApiDeleteAlertRuleRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteAlertRuleWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete an alert rule
     * @param param the request object
     */
    public deleteAlertRule(param: AlertsApiDeleteAlertRuleRequest, options?: Configuration): Promise<any> {
        return this.api.deleteAlertRule(param.id,  options).toPromise();
    }

    /**
     * Find an alert rule by id, and list all alerts for this rule
     * @param param the request object
     */
    public getAlertWithHttpInfo(param: AlertsApiGetAlertRequest, options?: Configuration): Promise<HttpInfo<AlertServiceGetAlertResponse>> {
        return this.api.getAlertWithHttpInfo(param.ruleId, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Find an alert rule by id, and list all alerts for this rule
     * @param param the request object
     */
    public getAlert(param: AlertsApiGetAlertRequest, options?: Configuration): Promise<AlertServiceGetAlertResponse> {
        return this.api.getAlert(param.ruleId, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * List all alert rules for a project
     * @param param the request object
     */
    public getAlertRulesWithHttpInfo(param: AlertsApiGetAlertRulesRequest, options?: Configuration): Promise<HttpInfo<AlertServiceGetAlertRulesResponse>> {
        return this.api.getAlertRulesWithHttpInfo(param.projectId,  options).toPromise();
    }

    /**
     * List all alert rules for a project
     * @param param the request object
     */
    public getAlertRules(param: AlertsApiGetAlertRulesRequest, options?: Configuration): Promise<AlertServiceGetAlertRulesResponse> {
        return this.api.getAlertRules(param.projectId,  options).toPromise();
    }

    /**
     * Save an alert rule
     * @param param the request object
     */
    public saveAlertRuleWithHttpInfo(param: AlertsApiSaveAlertRuleRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.saveAlertRuleWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Save an alert rule
     * @param param the request object
     */
    public saveAlertRule(param: AlertsApiSaveAlertRuleRequest, options?: Configuration): Promise<any> {
        return this.api.saveAlertRule(param.body,  options).toPromise();
    }

    /**
     * Save an alert rule
     * @param param the request object
     */
    public saveAlertRule2WithHttpInfo(param: AlertsApiSaveAlertRule2Request, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.saveAlertRule2WithHttpInfo(param.id, param.body,  options).toPromise();
    }

    /**
     * Save an alert rule
     * @param param the request object
     */
    public saveAlertRule2(param: AlertsApiSaveAlertRule2Request, options?: Configuration): Promise<any> {
        return this.api.saveAlertRule2(param.id, param.body,  options).toPromise();
    }

}

import { ObservableDataApi } from "./ObservableAPI.js";
import { DataApiRequestFactory, DataApiResponseProcessor} from "../apis/DataApi.js";

export interface DataApiCancelSQLQueryRequest {
    /**
     * username or organization name
     * Defaults to: undefined
     * @type string
     * @memberof DataApicancelSQLQuery
     */
    owner: string
    /**
     * project slug
     * Defaults to: undefined
     * @type string
     * @memberof DataApicancelSQLQuery
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApicancelSQLQuery
     */
    executionId: string
    /**
     * use project id if project_owner and project_slug are not provided
     * Defaults to: undefined
     * @type string
     * @memberof DataApicancelSQLQuery
     */
    projectId?: string
    /**
     * version of the datasource, default to the active version if not provided
     * Defaults to: undefined
     * @type number
     * @memberof DataApicancelSQLQuery
     */
    version?: number
}

export interface DataApiExecuteSQLRequest {
    /**
     * username or organization name
     * Defaults to: undefined
     * @type string
     * @memberof DataApiexecuteSQL
     */
    owner: string
    /**
     * project slug
     * Defaults to: undefined
     * @type string
     * @memberof DataApiexecuteSQL
     */
    slug: string
    /**
     * 
     * @type AnalyticServiceAnalyticServiceExecuteSQLBody
     * @memberof DataApiexecuteSQL
     */
    body: AnalyticServiceAnalyticServiceExecuteSQLBody
}

export interface DataApiExecuteSQLAsyncRequest {
    /**
     * username or organization name
     * Defaults to: undefined
     * @type string
     * @memberof DataApiexecuteSQLAsync
     */
    owner: string
    /**
     * project slug
     * Defaults to: undefined
     * @type string
     * @memberof DataApiexecuteSQLAsync
     */
    slug: string
    /**
     * 
     * @type AnalyticServiceAnalyticServiceExecuteSQLAsyncBody
     * @memberof DataApiexecuteSQLAsync
     */
    body: AnalyticServiceAnalyticServiceExecuteSQLAsyncBody
}

export interface DataApiGetMetricsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApigetMetrics
     */
    projectId?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApigetMetrics
     */
    name?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DataApigetMetrics
     */
    version?: number
}

export interface DataApiListCoinsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApilistCoins
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApilistCoins
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApilistCoins
     */
    projectId?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DataApilistCoins
     */
    version?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DataApilistCoins
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DataApilistCoins
     */
    offset?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApilistCoins
     */
    searchQuery?: string
}

export interface DataApiListCoins2Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApilistCoins2
     */
    projectOwner?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApilistCoins2
     */
    projectSlug?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApilistCoins2
     */
    projectId?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DataApilistCoins2
     */
    version?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DataApilistCoins2
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DataApilistCoins2
     */
    offset?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApilistCoins2
     */
    searchQuery?: string
}

export interface DataApiQueryRequest {
    /**
     * username or organization name
     * Defaults to: undefined
     * @type string
     * @memberof DataApiquery
     */
    owner: string
    /**
     * project slug
     * Defaults to: undefined
     * @type string
     * @memberof DataApiquery
     */
    slug: string
    /**
     * 
     * @type InsightsServiceInsightsServiceQueryBody
     * @memberof DataApiquery
     */
    body: InsightsServiceInsightsServiceQueryBody
}

export interface DataApiQueryInstantRequest {
    /**
     * username or organization name
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryInstant
     */
    owner: string
    /**
     * project slug
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryInstant
     */
    slug: string
    /**
     * 
     * @type MetricsServiceObservabilityServiceQueryBody
     * @memberof DataApiqueryInstant
     */
    body: MetricsServiceObservabilityServiceQueryBody
}

export interface DataApiQueryLogRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryLog
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryLog
     */
    slug: string
    /**
     * 
     * @type AnalyticServiceSearchServiceQueryLogBody
     * @memberof DataApiqueryLog
     */
    body: AnalyticServiceSearchServiceQueryLogBody
}

export interface DataApiQueryLog2Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryLog2
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryLog2
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryLog2
     */
    projectId?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryLog2
     */
    query?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryLog2
     */
    timeRangeStartRelativeTimeUnit?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DataApiqueryLog2
     */
    timeRangeStartRelativeTimeValue?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryLog2
     */
    timeRangeStartRelativeTimeAlign?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryLog2
     */
    timeRangeStartAbsoluteTime?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryLog2
     */
    timeRangeEndRelativeTimeUnit?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DataApiqueryLog2
     */
    timeRangeEndRelativeTimeValue?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryLog2
     */
    timeRangeEndRelativeTimeAlign?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryLog2
     */
    timeRangeEndAbsoluteTime?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryLog2
     */
    timeRangeStep?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DataApiqueryLog2
     */
    timeRangeIntervalValue?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryLog2
     */
    timeRangeIntervalUnit?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryLog2
     */
    timeRangeTimezone?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DataApiqueryLog2
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DataApiqueryLog2
     */
    offset?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DataApiqueryLog2
     */
    version?: number
}

export interface DataApiQueryRangeRequest {
    /**
     * username or organization name
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryRange
     */
    owner: string
    /**
     * project slug
     * Defaults to: undefined
     * @type string
     * @memberof DataApiqueryRange
     */
    slug: string
    /**
     * 
     * @type MetricsServiceObservabilityServiceQueryRangeBody
     * @memberof DataApiqueryRange
     */
    body: MetricsServiceObservabilityServiceQueryRangeBody
}

export interface DataApiQuerySQLResultRequest {
    /**
     * username or organization name
     * Defaults to: undefined
     * @type string
     * @memberof DataApiquerySQLResult
     */
    owner: string
    /**
     * project slug
     * Defaults to: undefined
     * @type string
     * @memberof DataApiquerySQLResult
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiquerySQLResult
     */
    executionId: string
    /**
     * use project id if project_owner and project_slug are not provided
     * Defaults to: undefined
     * @type string
     * @memberof DataApiquerySQLResult
     */
    projectId?: string
    /**
     * version of the datasource, default to the active version if not provided
     * Defaults to: undefined
     * @type number
     * @memberof DataApiquerySQLResult
     */
    version?: number
}

export interface DataApiSaveSQLRequest {
    /**
     * username or organization name
     * Defaults to: undefined
     * @type string
     * @memberof DataApisaveSQL
     */
    owner: string
    /**
     * project slug
     * Defaults to: undefined
     * @type string
     * @memberof DataApisaveSQL
     */
    slug: string
    /**
     * 
     * @type AnalyticServiceAnalyticServiceSaveSQLBody
     * @memberof DataApisaveSQL
     */
    body: AnalyticServiceAnalyticServiceSaveSQLBody
}

export interface DataApiSaveSQL2Request {
    /**
     * username or organization name
     * Defaults to: undefined
     * @type string
     * @memberof DataApisaveSQL2
     */
    owner: string
    /**
     * project slug
     * Defaults to: undefined
     * @type string
     * @memberof DataApisaveSQL2
     */
    slug: string
    /**
     * 
     * @type AnalyticServiceAnalyticServiceSaveSQLBody
     * @memberof DataApisaveSQL2
     */
    body: AnalyticServiceAnalyticServiceSaveSQLBody
}

export class ObjectDataApi {
    private api: ObservableDataApi

    public constructor(configuration: Configuration, requestFactory?: DataApiRequestFactory, responseProcessor?: DataApiResponseProcessor) {
        this.api = new ObservableDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancel a SQL query by execution_id.
     * Cancel SQL Query
     * @param param the request object
     */
    public cancelSQLQueryWithHttpInfo(param: DataApiCancelSQLQueryRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.cancelSQLQueryWithHttpInfo(param.owner, param.slug, param.executionId, param.projectId, param.version,  options).toPromise();
    }

    /**
     * Cancel a SQL query by execution_id.
     * Cancel SQL Query
     * @param param the request object
     */
    public cancelSQLQuery(param: DataApiCancelSQLQueryRequest, options?: Configuration): Promise<any> {
        return this.api.cancelSQLQuery(param.owner, param.slug, param.executionId, param.projectId, param.version,  options).toPromise();
    }

    /**
     * Execute SQL in a project. Go to \"Data Studio\" -> \"SQL Editor\", write your query and then click \"Export as cURL\"  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(102).png)  Find more: https://docs.sentio.xyz/reference/data#sql-api
     * Execute SQL
     * @param param the request object
     */
    public executeSQLWithHttpInfo(param: DataApiExecuteSQLRequest, options?: Configuration): Promise<HttpInfo<AnalyticServiceSyncExecuteSQLResponse>> {
        return this.api.executeSQLWithHttpInfo(param.owner, param.slug, param.body,  options).toPromise();
    }

    /**
     * Execute SQL in a project. Go to \"Data Studio\" -> \"SQL Editor\", write your query and then click \"Export as cURL\"  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(102).png)  Find more: https://docs.sentio.xyz/reference/data#sql-api
     * Execute SQL
     * @param param the request object
     */
    public executeSQL(param: DataApiExecuteSQLRequest, options?: Configuration): Promise<AnalyticServiceSyncExecuteSQLResponse> {
        return this.api.executeSQL(param.owner, param.slug, param.body,  options).toPromise();
    }

    /**
     * Execute SQL in a project asynchronously.
     * Execute SQL by Async
     * @param param the request object
     */
    public executeSQLAsyncWithHttpInfo(param: DataApiExecuteSQLAsyncRequest, options?: Configuration): Promise<HttpInfo<AnalyticServiceAsyncExecuteSQLResponse>> {
        return this.api.executeSQLAsyncWithHttpInfo(param.owner, param.slug, param.body,  options).toPromise();
    }

    /**
     * Execute SQL in a project asynchronously.
     * Execute SQL by Async
     * @param param the request object
     */
    public executeSQLAsync(param: DataApiExecuteSQLAsyncRequest, options?: Configuration): Promise<AnalyticServiceAsyncExecuteSQLResponse> {
        return this.api.executeSQLAsync(param.owner, param.slug, param.body,  options).toPromise();
    }

    /**
     * Get a list of metrics in a project
     * @param param the request object
     */
    public getMetricsWithHttpInfo(param: DataApiGetMetricsRequest = {}, options?: Configuration): Promise<HttpInfo<MetricsServiceGetMetricsResponse>> {
        return this.api.getMetricsWithHttpInfo(param.projectId, param.name, param.version,  options).toPromise();
    }

    /**
     * Get a list of metrics in a project
     * @param param the request object
     */
    public getMetrics(param: DataApiGetMetricsRequest = {}, options?: Configuration): Promise<MetricsServiceGetMetricsResponse> {
        return this.api.getMetrics(param.projectId, param.name, param.version,  options).toPromise();
    }

    /**
     * Get a list of coins in a project.
     * List coins
     * @param param the request object
     */
    public listCoinsWithHttpInfo(param: DataApiListCoinsRequest, options?: Configuration): Promise<HttpInfo<InsightsServiceListCoinsResponse>> {
        return this.api.listCoinsWithHttpInfo(param.owner, param.slug, param.projectId, param.version, param.limit, param.offset, param.searchQuery,  options).toPromise();
    }

    /**
     * Get a list of coins in a project.
     * List coins
     * @param param the request object
     */
    public listCoins(param: DataApiListCoinsRequest, options?: Configuration): Promise<InsightsServiceListCoinsResponse> {
        return this.api.listCoins(param.owner, param.slug, param.projectId, param.version, param.limit, param.offset, param.searchQuery,  options).toPromise();
    }

    /**
     * Get a list of coins in a project.
     * List coins
     * @param param the request object
     */
    public listCoins2WithHttpInfo(param: DataApiListCoins2Request = {}, options?: Configuration): Promise<HttpInfo<InsightsServiceListCoinsResponse>> {
        return this.api.listCoins2WithHttpInfo(param.projectOwner, param.projectSlug, param.projectId, param.version, param.limit, param.offset, param.searchQuery,  options).toPromise();
    }

    /**
     * Get a list of coins in a project.
     * List coins
     * @param param the request object
     */
    public listCoins2(param: DataApiListCoins2Request = {}, options?: Configuration): Promise<InsightsServiceListCoinsResponse> {
        return this.api.listCoins2(param.projectOwner, param.projectSlug, param.projectId, param.version, param.limit, param.offset, param.searchQuery,  options).toPromise();
    }

    /**
     * Query for metrics,event logs and coin prices in a project.
     * Insight Query
     * @param param the request object
     */
    public queryWithHttpInfo(param: DataApiQueryRequest, options?: Configuration): Promise<HttpInfo<InsightsServiceQueryResponse>> {
        return this.api.queryWithHttpInfo(param.owner, param.slug, param.body,  options).toPromise();
    }

    /**
     * Query for metrics,event logs and coin prices in a project.
     * Insight Query
     * @param param the request object
     */
    public query(param: DataApiQueryRequest, options?: Configuration): Promise<InsightsServiceQueryResponse> {
        return this.api.query(param.owner, param.slug, param.body,  options).toPromise();
    }

    /**
     * Metric instant queries
     * @param param the request object
     */
    public queryInstantWithHttpInfo(param: DataApiQueryInstantRequest, options?: Configuration): Promise<HttpInfo<MetricsServiceQueryValueResponse>> {
        return this.api.queryInstantWithHttpInfo(param.owner, param.slug, param.body,  options).toPromise();
    }

    /**
     * Metric instant queries
     * @param param the request object
     */
    public queryInstant(param: DataApiQueryInstantRequest, options?: Configuration): Promise<MetricsServiceQueryValueResponse> {
        return this.api.queryInstant(param.owner, param.slug, param.body,  options).toPromise();
    }

    /**
     * Query event logs
     * @param param the request object
     */
    public queryLogWithHttpInfo(param: DataApiQueryLogRequest, options?: Configuration): Promise<HttpInfo<AnalyticServiceLogQueryResponse>> {
        return this.api.queryLogWithHttpInfo(param.owner, param.slug, param.body,  options).toPromise();
    }

    /**
     * Query event logs
     * @param param the request object
     */
    public queryLog(param: DataApiQueryLogRequest, options?: Configuration): Promise<AnalyticServiceLogQueryResponse> {
        return this.api.queryLog(param.owner, param.slug, param.body,  options).toPromise();
    }

    /**
     * Query event logs
     * @param param the request object
     */
    public queryLog2WithHttpInfo(param: DataApiQueryLog2Request, options?: Configuration): Promise<HttpInfo<AnalyticServiceLogQueryResponse>> {
        return this.api.queryLog2WithHttpInfo(param.owner, param.slug, param.projectId, param.query, param.timeRangeStartRelativeTimeUnit, param.timeRangeStartRelativeTimeValue, param.timeRangeStartRelativeTimeAlign, param.timeRangeStartAbsoluteTime, param.timeRangeEndRelativeTimeUnit, param.timeRangeEndRelativeTimeValue, param.timeRangeEndRelativeTimeAlign, param.timeRangeEndAbsoluteTime, param.timeRangeStep, param.timeRangeIntervalValue, param.timeRangeIntervalUnit, param.timeRangeTimezone, param.limit, param.offset, param.version,  options).toPromise();
    }

    /**
     * Query event logs
     * @param param the request object
     */
    public queryLog2(param: DataApiQueryLog2Request, options?: Configuration): Promise<AnalyticServiceLogQueryResponse> {
        return this.api.queryLog2(param.owner, param.slug, param.projectId, param.query, param.timeRangeStartRelativeTimeUnit, param.timeRangeStartRelativeTimeValue, param.timeRangeStartRelativeTimeAlign, param.timeRangeStartAbsoluteTime, param.timeRangeEndRelativeTimeUnit, param.timeRangeEndRelativeTimeValue, param.timeRangeEndRelativeTimeAlign, param.timeRangeEndAbsoluteTime, param.timeRangeStep, param.timeRangeIntervalValue, param.timeRangeIntervalUnit, param.timeRangeTimezone, param.limit, param.offset, param.version,  options).toPromise();
    }

    /**
     * The easiest way to build query is through UI, you could first create an insight chart, and then **Export as cURL**.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(101).png)
     * Metric range queries
     * @param param the request object
     */
    public queryRangeWithHttpInfo(param: DataApiQueryRangeRequest, options?: Configuration): Promise<HttpInfo<MetricsServiceMetricsQueryResponse>> {
        return this.api.queryRangeWithHttpInfo(param.owner, param.slug, param.body,  options).toPromise();
    }

    /**
     * The easiest way to build query is through UI, you could first create an insight chart, and then **Export as cURL**.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(101).png)
     * Metric range queries
     * @param param the request object
     */
    public queryRange(param: DataApiQueryRangeRequest, options?: Configuration): Promise<MetricsServiceMetricsQueryResponse> {
        return this.api.queryRange(param.owner, param.slug, param.body,  options).toPromise();
    }

    /**
     * Query the result of a SQL query by execution_id.
     * Query SQL Result
     * @param param the request object
     */
    public querySQLResultWithHttpInfo(param: DataApiQuerySQLResultRequest, options?: Configuration): Promise<HttpInfo<AnalyticServiceQuerySQLResultResponse>> {
        return this.api.querySQLResultWithHttpInfo(param.owner, param.slug, param.executionId, param.projectId, param.version,  options).toPromise();
    }

    /**
     * Query the result of a SQL query by execution_id.
     * Query SQL Result
     * @param param the request object
     */
    public querySQLResult(param: DataApiQuerySQLResultRequest, options?: Configuration): Promise<AnalyticServiceQuerySQLResultResponse> {
        return this.api.querySQLResult(param.owner, param.slug, param.executionId, param.projectId, param.version,  options).toPromise();
    }

    /**
     * Save or update a SQL query in a project.
     * Save SQL
     * @param param the request object
     */
    public saveSQLWithHttpInfo(param: DataApiSaveSQLRequest, options?: Configuration): Promise<HttpInfo<AnalyticServiceSaveSQLResponse>> {
        return this.api.saveSQLWithHttpInfo(param.owner, param.slug, param.body,  options).toPromise();
    }

    /**
     * Save or update a SQL query in a project.
     * Save SQL
     * @param param the request object
     */
    public saveSQL(param: DataApiSaveSQLRequest, options?: Configuration): Promise<AnalyticServiceSaveSQLResponse> {
        return this.api.saveSQL(param.owner, param.slug, param.body,  options).toPromise();
    }

    /**
     * Save or update a SQL query in a project.
     * Save SQL
     * @param param the request object
     */
    public saveSQL2WithHttpInfo(param: DataApiSaveSQL2Request, options?: Configuration): Promise<HttpInfo<AnalyticServiceSaveSQLResponse>> {
        return this.api.saveSQL2WithHttpInfo(param.owner, param.slug, param.body,  options).toPromise();
    }

    /**
     * Save or update a SQL query in a project.
     * Save SQL
     * @param param the request object
     */
    public saveSQL2(param: DataApiSaveSQL2Request, options?: Configuration): Promise<AnalyticServiceSaveSQLResponse> {
        return this.api.saveSQL2(param.owner, param.slug, param.body,  options).toPromise();
    }

}

import { ObservableDebugAndSimulationApi } from "./ObservableAPI.js";
import { DebugAndSimulationApiRequestFactory, DebugAndSimulationApiResponseProcessor} from "../apis/DebugAndSimulationApi.js";

export interface DebugAndSimulationApiGetCallTraceByBundleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetCallTraceByBundle
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetCallTraceByBundle
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetCallTraceByBundle
     */
    chainId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetCallTraceByBundle
     */
    bundleId: string
    /**
     * Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * Defaults to: undefined
     * @type boolean
     * @memberof DebugAndSimulationApigetCallTraceByBundle
     */
    withInternalCalls?: boolean
    /**
     * Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * Defaults to: undefined
     * @type boolean
     * @memberof DebugAndSimulationApigetCallTraceByBundle
     */
    disableOptimizer?: boolean
    /**
     * Only effective when disableOptimizer&#x3D;true.
     * Defaults to: undefined
     * @type boolean
     * @memberof DebugAndSimulationApigetCallTraceByBundle
     */
    ignoreGasCost?: boolean
}

export interface DebugAndSimulationApiGetCallTraceBySimulationRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetCallTraceBySimulation
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetCallTraceBySimulation
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetCallTraceBySimulation
     */
    chainId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetCallTraceBySimulation
     */
    simulationId: string
    /**
     * Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * Defaults to: undefined
     * @type boolean
     * @memberof DebugAndSimulationApigetCallTraceBySimulation
     */
    withInternalCalls?: boolean
    /**
     * Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * Defaults to: undefined
     * @type boolean
     * @memberof DebugAndSimulationApigetCallTraceBySimulation
     */
    disableOptimizer?: boolean
    /**
     * Only effective when disableOptimizer&#x3D;true.
     * Defaults to: undefined
     * @type boolean
     * @memberof DebugAndSimulationApigetCallTraceBySimulation
     */
    ignoreGasCost?: boolean
}

export interface DebugAndSimulationApiGetCallTraceByTransactionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetCallTraceByTransaction
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetCallTraceByTransaction
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetCallTraceByTransaction
     */
    chainId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetCallTraceByTransaction
     */
    txHash: string
    /**
     * Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * Defaults to: undefined
     * @type boolean
     * @memberof DebugAndSimulationApigetCallTraceByTransaction
     */
    withInternalCalls?: boolean
    /**
     * Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * Defaults to: undefined
     * @type boolean
     * @memberof DebugAndSimulationApigetCallTraceByTransaction
     */
    disableOptimizer?: boolean
    /**
     * Only effective when disableOptimizer&#x3D;true.
     * Defaults to: undefined
     * @type boolean
     * @memberof DebugAndSimulationApigetCallTraceByTransaction
     */
    ignoreGasCost?: boolean
}

export interface DebugAndSimulationApiGetEstimatedGasPriceRequest {
    /**
     * Current support chain id: 1
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetEstimatedGasPrice
     */
    chainId?: string
}

export interface DebugAndSimulationApiGetSimulationRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetSimulation
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetSimulation
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetSimulation
     */
    simulationId: string
}

export interface DebugAndSimulationApiGetSimulationBundleInProjectRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetSimulationBundleInProject
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetSimulationBundleInProject
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetSimulationBundleInProject
     */
    bundleId: string
}

export interface DebugAndSimulationApiGetSimulationsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetSimulations
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetSimulations
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApigetSimulations
     */
    labelContains?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DebugAndSimulationApigetSimulations
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DebugAndSimulationApigetSimulations
     */
    pageSize?: number
}

export interface DebugAndSimulationApiSearchTransactionsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApisearchTransactions
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApisearchTransactions
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof DebugAndSimulationApisearchTransactions
     */
    chainId?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof DebugAndSimulationApisearchTransactions
     */
    address?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof DebugAndSimulationApisearchTransactions
     */
    includeDirect?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof DebugAndSimulationApisearchTransactions
     */
    includeTrace?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof DebugAndSimulationApisearchTransactions
     */
    includeIn?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof DebugAndSimulationApisearchTransactions
     */
    includeOut?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApisearchTransactions
     */
    startBlock?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApisearchTransactions
     */
    endBlock?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApisearchTransactions
     */
    startTimestamp?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApisearchTransactions
     */
    endTimestamp?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof DebugAndSimulationApisearchTransactions
     */
    transactionStatus?: Array<number>
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApisearchTransactions
     */
    methodSignature?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DebugAndSimulationApisearchTransactions
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApisearchTransactions
     */
    pageToken?: string
}

export interface DebugAndSimulationApiSimulateTransactionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApisimulateTransaction
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApisimulateTransaction
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApisimulateTransaction
     */
    chainId: string
    /**
     * 
     * @type SolidityServiceSolidityAPIServiceSimulateTransactionBody
     * @memberof DebugAndSimulationApisimulateTransaction
     */
    body: SolidityServiceSolidityAPIServiceSimulateTransactionBody
}

export interface DebugAndSimulationApiSimulateTransactionBundleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApisimulateTransactionBundle
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApisimulateTransactionBundle
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DebugAndSimulationApisimulateTransactionBundle
     */
    chainId: string
    /**
     * 
     * @type SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody
     * @memberof DebugAndSimulationApisimulateTransactionBundle
     */
    body: SolidityServiceSolidityAPIServiceSimulateTransactionBundleBody
}

export class ObjectDebugAndSimulationApi {
    private api: ObservableDebugAndSimulationApi

    public constructor(configuration: Configuration, requestFactory?: DebugAndSimulationApiRequestFactory, responseProcessor?: DebugAndSimulationApiResponseProcessor) {
        this.api = new ObservableDebugAndSimulationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get trace by bundle simulation
     * @param param the request object
     */
    public getCallTraceByBundleWithHttpInfo(param: DebugAndSimulationApiGetCallTraceByBundleRequest, options?: Configuration): Promise<HttpInfo<GoogleApiHttpBody>> {
        return this.api.getCallTraceByBundleWithHttpInfo(param.owner, param.slug, param.chainId, param.bundleId, param.withInternalCalls, param.disableOptimizer, param.ignoreGasCost,  options).toPromise();
    }

    /**
     * Get trace by bundle simulation
     * @param param the request object
     */
    public getCallTraceByBundle(param: DebugAndSimulationApiGetCallTraceByBundleRequest, options?: Configuration): Promise<GoogleApiHttpBody> {
        return this.api.getCallTraceByBundle(param.owner, param.slug, param.chainId, param.bundleId, param.withInternalCalls, param.disableOptimizer, param.ignoreGasCost,  options).toPromise();
    }

    /**
     * Get trace by simulation
     * @param param the request object
     */
    public getCallTraceBySimulationWithHttpInfo(param: DebugAndSimulationApiGetCallTraceBySimulationRequest, options?: Configuration): Promise<HttpInfo<GoogleApiHttpBody>> {
        return this.api.getCallTraceBySimulationWithHttpInfo(param.owner, param.slug, param.chainId, param.simulationId, param.withInternalCalls, param.disableOptimizer, param.ignoreGasCost,  options).toPromise();
    }

    /**
     * Get trace by simulation
     * @param param the request object
     */
    public getCallTraceBySimulation(param: DebugAndSimulationApiGetCallTraceBySimulationRequest, options?: Configuration): Promise<GoogleApiHttpBody> {
        return this.api.getCallTraceBySimulation(param.owner, param.slug, param.chainId, param.simulationId, param.withInternalCalls, param.disableOptimizer, param.ignoreGasCost,  options).toPromise();
    }

    /**
     * API to get Sentio call trace. It takes `txId.txHash` and `chainSpec.chainId` arguments, where the first is transaction hash, and the second is the numeric ethereum chain ID.  The results looks very similar to the normal [Ethereum call trace](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png). But we have an additional `startIndex` and `startIndex` on each trace entry even for the LOG, representing the execution order in the trace.  This allows you to build chart that marks the order of fund flow.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png)
     * Get trace by transaction
     * @param param the request object
     */
    public getCallTraceByTransactionWithHttpInfo(param: DebugAndSimulationApiGetCallTraceByTransactionRequest, options?: Configuration): Promise<HttpInfo<GoogleApiHttpBody>> {
        return this.api.getCallTraceByTransactionWithHttpInfo(param.owner, param.slug, param.chainId, param.txHash, param.withInternalCalls, param.disableOptimizer, param.ignoreGasCost,  options).toPromise();
    }

    /**
     * API to get Sentio call trace. It takes `txId.txHash` and `chainSpec.chainId` arguments, where the first is transaction hash, and the second is the numeric ethereum chain ID.  The results looks very similar to the normal [Ethereum call trace](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png). But we have an additional `startIndex` and `startIndex` on each trace entry even for the LOG, representing the execution order in the trace.  This allows you to build chart that marks the order of fund flow.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png)
     * Get trace by transaction
     * @param param the request object
     */
    public getCallTraceByTransaction(param: DebugAndSimulationApiGetCallTraceByTransactionRequest, options?: Configuration): Promise<GoogleApiHttpBody> {
        return this.api.getCallTraceByTransaction(param.owner, param.slug, param.chainId, param.txHash, param.withInternalCalls, param.disableOptimizer, param.ignoreGasCost,  options).toPromise();
    }

    /**
     * Estimate gas price
     * @param param the request object
     */
    public getEstimatedGasPriceWithHttpInfo(param: DebugAndSimulationApiGetEstimatedGasPriceRequest = {}, options?: Configuration): Promise<HttpInfo<SolidityServiceGetEstimatedGasPriceResponse>> {
        return this.api.getEstimatedGasPriceWithHttpInfo(param.chainId,  options).toPromise();
    }

    /**
     * Estimate gas price
     * @param param the request object
     */
    public getEstimatedGasPrice(param: DebugAndSimulationApiGetEstimatedGasPriceRequest = {}, options?: Configuration): Promise<SolidityServiceGetEstimatedGasPriceResponse> {
        return this.api.getEstimatedGasPrice(param.chainId,  options).toPromise();
    }

    /**
     * Get simulation by ID
     * @param param the request object
     */
    public getSimulationWithHttpInfo(param: DebugAndSimulationApiGetSimulationRequest, options?: Configuration): Promise<HttpInfo<SolidityServiceGetSimulationResponse>> {
        return this.api.getSimulationWithHttpInfo(param.owner, param.slug, param.simulationId,  options).toPromise();
    }

    /**
     * Get simulation by ID
     * @param param the request object
     */
    public getSimulation(param: DebugAndSimulationApiGetSimulationRequest, options?: Configuration): Promise<SolidityServiceGetSimulationResponse> {
        return this.api.getSimulation(param.owner, param.slug, param.simulationId,  options).toPromise();
    }

    /**
     * Get bundle simulation by ID
     * @param param the request object
     */
    public getSimulationBundleInProjectWithHttpInfo(param: DebugAndSimulationApiGetSimulationBundleInProjectRequest, options?: Configuration): Promise<HttpInfo<SolidityServiceGetSimulationBundleResponse>> {
        return this.api.getSimulationBundleInProjectWithHttpInfo(param.owner, param.slug, param.bundleId,  options).toPromise();
    }

    /**
     * Get bundle simulation by ID
     * @param param the request object
     */
    public getSimulationBundleInProject(param: DebugAndSimulationApiGetSimulationBundleInProjectRequest, options?: Configuration): Promise<SolidityServiceGetSimulationBundleResponse> {
        return this.api.getSimulationBundleInProject(param.owner, param.slug, param.bundleId,  options).toPromise();
    }

    /**
     * Get list of simulations
     * @param param the request object
     */
    public getSimulationsWithHttpInfo(param: DebugAndSimulationApiGetSimulationsRequest, options?: Configuration): Promise<HttpInfo<SolidityServiceGetSimulationsResponse>> {
        return this.api.getSimulationsWithHttpInfo(param.owner, param.slug, param.labelContains, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Get list of simulations
     * @param param the request object
     */
    public getSimulations(param: DebugAndSimulationApiGetSimulationsRequest, options?: Configuration): Promise<SolidityServiceGetSimulationsResponse> {
        return this.api.getSimulations(param.owner, param.slug, param.labelContains, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Search transactions
     * @param param the request object
     */
    public searchTransactionsWithHttpInfo(param: DebugAndSimulationApiSearchTransactionsRequest, options?: Configuration): Promise<HttpInfo<SolidityServiceEvmSearchTransactionsResponse>> {
        return this.api.searchTransactionsWithHttpInfo(param.owner, param.slug, param.chainId, param.address, param.includeDirect, param.includeTrace, param.includeIn, param.includeOut, param.startBlock, param.endBlock, param.startTimestamp, param.endTimestamp, param.transactionStatus, param.methodSignature, param.limit, param.pageToken,  options).toPromise();
    }

    /**
     * Search transactions
     * @param param the request object
     */
    public searchTransactions(param: DebugAndSimulationApiSearchTransactionsRequest, options?: Configuration): Promise<SolidityServiceEvmSearchTransactionsResponse> {
        return this.api.searchTransactions(param.owner, param.slug, param.chainId, param.address, param.includeDirect, param.includeTrace, param.includeIn, param.includeOut, param.startBlock, param.endBlock, param.startTimestamp, param.endTimestamp, param.transactionStatus, param.methodSignature, param.limit, param.pageToken,  options).toPromise();
    }

    /**
     * Create a new transaction simulation. The simulation body should be included in the request body. Your simulations will be saved, and a unique ID for each simulation is included in the response. It will be useful for fetching simulation details.
     * Run simulation
     * @param param the request object
     */
    public simulateTransactionWithHttpInfo(param: DebugAndSimulationApiSimulateTransactionRequest, options?: Configuration): Promise<HttpInfo<SolidityServiceSimulateTransactionResponse>> {
        return this.api.simulateTransactionWithHttpInfo(param.owner, param.slug, param.chainId, param.body,  options).toPromise();
    }

    /**
     * Create a new transaction simulation. The simulation body should be included in the request body. Your simulations will be saved, and a unique ID for each simulation is included in the response. It will be useful for fetching simulation details.
     * Run simulation
     * @param param the request object
     */
    public simulateTransaction(param: DebugAndSimulationApiSimulateTransactionRequest, options?: Configuration): Promise<SolidityServiceSimulateTransactionResponse> {
        return this.api.simulateTransaction(param.owner, param.slug, param.chainId, param.body,  options).toPromise();
    }

    /**
     * You could also create bundle simulations so that one transaction could be executed one after another. For `blockNumber` `transactionIndex` `networkId` `stateOverrides` and `blockOverrides` fields, only the first simulation takes effect.
     * Run bundle simulation
     * @param param the request object
     */
    public simulateTransactionBundleWithHttpInfo(param: DebugAndSimulationApiSimulateTransactionBundleRequest, options?: Configuration): Promise<HttpInfo<SolidityServiceSimulateTransactionBundleResponse>> {
        return this.api.simulateTransactionBundleWithHttpInfo(param.owner, param.slug, param.chainId, param.body,  options).toPromise();
    }

    /**
     * You could also create bundle simulations so that one transaction could be executed one after another. For `blockNumber` `transactionIndex` `networkId` `stateOverrides` and `blockOverrides` fields, only the first simulation takes effect.
     * Run bundle simulation
     * @param param the request object
     */
    public simulateTransactionBundle(param: DebugAndSimulationApiSimulateTransactionBundleRequest, options?: Configuration): Promise<SolidityServiceSimulateTransactionBundleResponse> {
        return this.api.simulateTransactionBundle(param.owner, param.slug, param.chainId, param.body,  options).toPromise();
    }

}

import { ObservableForksApi } from "./ObservableAPI.js";
import { ForksApiRequestFactory, ForksApiResponseProcessor} from "../apis/ForksApi.js";

export interface ForksApiCreateForkRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApicreateFork
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApicreateFork
     */
    slug: string
    /**
     * 
     * @type SolidityServiceForkServiceCreateForkBody
     * @memberof ForksApicreateFork
     */
    body: SolidityServiceForkServiceCreateForkBody
}

export interface ForksApiDeleteForkRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApideleteFork
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApideleteFork
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApideleteFork
     */
    id: string
}

export interface ForksApiGetCallTraceOnForkBundleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetCallTraceOnForkBundle
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetCallTraceOnForkBundle
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetCallTraceOnForkBundle
     */
    forkId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetCallTraceOnForkBundle
     */
    bundleId: string
    /**
     * Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * Defaults to: undefined
     * @type boolean
     * @memberof ForksApigetCallTraceOnForkBundle
     */
    withInternalCalls?: boolean
    /**
     * Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * Defaults to: undefined
     * @type boolean
     * @memberof ForksApigetCallTraceOnForkBundle
     */
    disableOptimizer?: boolean
    /**
     * Only effective when disableOptimizer&#x3D;true.
     * Defaults to: undefined
     * @type boolean
     * @memberof ForksApigetCallTraceOnForkBundle
     */
    ignoreGasCost?: boolean
}

export interface ForksApiGetCallTraceOnForkSimulationRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetCallTraceOnForkSimulation
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetCallTraceOnForkSimulation
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetCallTraceOnForkSimulation
     */
    forkId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetCallTraceOnForkSimulation
     */
    simulationId: string
    /**
     * Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * Defaults to: undefined
     * @type boolean
     * @memberof ForksApigetCallTraceOnForkSimulation
     */
    withInternalCalls?: boolean
    /**
     * Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * Defaults to: undefined
     * @type boolean
     * @memberof ForksApigetCallTraceOnForkSimulation
     */
    disableOptimizer?: boolean
    /**
     * Only effective when disableOptimizer&#x3D;true.
     * Defaults to: undefined
     * @type boolean
     * @memberof ForksApigetCallTraceOnForkSimulation
     */
    ignoreGasCost?: boolean
}

export interface ForksApiGetCallTraceOnForkTransactionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetCallTraceOnForkTransaction
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetCallTraceOnForkTransaction
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetCallTraceOnForkTransaction
     */
    forkId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetCallTraceOnForkTransaction
     */
    txHash: string
    /**
     * Fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
     * Defaults to: undefined
     * @type boolean
     * @memberof ForksApigetCallTraceOnForkTransaction
     */
    withInternalCalls?: boolean
    /**
     * Disable optimizations to make internal calls more accurate, but gas costs will differ from the actual execution.
     * Defaults to: undefined
     * @type boolean
     * @memberof ForksApigetCallTraceOnForkTransaction
     */
    disableOptimizer?: boolean
    /**
     * Only effective when disableOptimizer&#x3D;true.
     * Defaults to: undefined
     * @type boolean
     * @memberof ForksApigetCallTraceOnForkTransaction
     */
    ignoreGasCost?: boolean
}

export interface ForksApiGetForkRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetFork
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetFork
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetFork
     */
    id: string
}

export interface ForksApiGetForkInfoRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetForkInfo
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetForkInfo
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApigetForkInfo
     */
    id: string
}

export interface ForksApiListForksRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApilistForks
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApilistForks
     */
    slug: string
}

export interface ForksApiSimulateTransactionBundleOnForkRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApisimulateTransactionBundleOnFork
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApisimulateTransactionBundleOnFork
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApisimulateTransactionBundleOnFork
     */
    forkId: string
    /**
     * 
     * @type SolidityServiceSolidityAPIServiceSimulateTransactionBundleOnForkBody
     * @memberof ForksApisimulateTransactionBundleOnFork
     */
    body: SolidityServiceSolidityAPIServiceSimulateTransactionBundleOnForkBody
}

export interface ForksApiSimulateTransactionOnForkRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApisimulateTransactionOnFork
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApisimulateTransactionOnFork
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApisimulateTransactionOnFork
     */
    forkId: string
    /**
     * 
     * @type SolidityServiceSolidityAPIServiceSimulateTransactionOnForkBody
     * @memberof ForksApisimulateTransactionOnFork
     */
    body: SolidityServiceSolidityAPIServiceSimulateTransactionOnForkBody
}

export interface ForksApiUpdateForkRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApiupdateFork
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApiupdateFork
     */
    slug: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ForksApiupdateFork
     */
    id: string
    /**
     * 
     * @type SolidityServiceForkServiceUpdateForkBody
     * @memberof ForksApiupdateFork
     */
    body: SolidityServiceForkServiceUpdateForkBody
}

export class ObjectForksApi {
    private api: ObservableForksApi

    public constructor(configuration: Configuration, requestFactory?: ForksApiRequestFactory, responseProcessor?: ForksApiResponseProcessor) {
        this.api = new ObservableForksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a fork
     * @param param the request object
     */
    public createForkWithHttpInfo(param: ForksApiCreateForkRequest, options?: Configuration): Promise<HttpInfo<SolidityServiceCreateForkResponse>> {
        return this.api.createForkWithHttpInfo(param.owner, param.slug, param.body,  options).toPromise();
    }

    /**
     * Create a fork
     * @param param the request object
     */
    public createFork(param: ForksApiCreateForkRequest, options?: Configuration): Promise<SolidityServiceCreateForkResponse> {
        return this.api.createFork(param.owner, param.slug, param.body,  options).toPromise();
    }

    /**
     * Delete fork by id
     * @param param the request object
     */
    public deleteForkWithHttpInfo(param: ForksApiDeleteForkRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteForkWithHttpInfo(param.owner, param.slug, param.id,  options).toPromise();
    }

    /**
     * Delete fork by id
     * @param param the request object
     */
    public deleteFork(param: ForksApiDeleteForkRequest, options?: Configuration): Promise<any> {
        return this.api.deleteFork(param.owner, param.slug, param.id,  options).toPromise();
    }

    /**
     * Get trace by bundle simulation
     * @param param the request object
     */
    public getCallTraceOnForkBundleWithHttpInfo(param: ForksApiGetCallTraceOnForkBundleRequest, options?: Configuration): Promise<HttpInfo<GoogleApiHttpBody>> {
        return this.api.getCallTraceOnForkBundleWithHttpInfo(param.owner, param.slug, param.forkId, param.bundleId, param.withInternalCalls, param.disableOptimizer, param.ignoreGasCost,  options).toPromise();
    }

    /**
     * Get trace by bundle simulation
     * @param param the request object
     */
    public getCallTraceOnForkBundle(param: ForksApiGetCallTraceOnForkBundleRequest, options?: Configuration): Promise<GoogleApiHttpBody> {
        return this.api.getCallTraceOnForkBundle(param.owner, param.slug, param.forkId, param.bundleId, param.withInternalCalls, param.disableOptimizer, param.ignoreGasCost,  options).toPromise();
    }

    /**
     * Get trace by simulation
     * @param param the request object
     */
    public getCallTraceOnForkSimulationWithHttpInfo(param: ForksApiGetCallTraceOnForkSimulationRequest, options?: Configuration): Promise<HttpInfo<GoogleApiHttpBody>> {
        return this.api.getCallTraceOnForkSimulationWithHttpInfo(param.owner, param.slug, param.forkId, param.simulationId, param.withInternalCalls, param.disableOptimizer, param.ignoreGasCost,  options).toPromise();
    }

    /**
     * Get trace by simulation
     * @param param the request object
     */
    public getCallTraceOnForkSimulation(param: ForksApiGetCallTraceOnForkSimulationRequest, options?: Configuration): Promise<GoogleApiHttpBody> {
        return this.api.getCallTraceOnForkSimulation(param.owner, param.slug, param.forkId, param.simulationId, param.withInternalCalls, param.disableOptimizer, param.ignoreGasCost,  options).toPromise();
    }

    /**
     * Get trace by transaction
     * @param param the request object
     */
    public getCallTraceOnForkTransactionWithHttpInfo(param: ForksApiGetCallTraceOnForkTransactionRequest, options?: Configuration): Promise<HttpInfo<GoogleApiHttpBody>> {
        return this.api.getCallTraceOnForkTransactionWithHttpInfo(param.owner, param.slug, param.forkId, param.txHash, param.withInternalCalls, param.disableOptimizer, param.ignoreGasCost,  options).toPromise();
    }

    /**
     * Get trace by transaction
     * @param param the request object
     */
    public getCallTraceOnForkTransaction(param: ForksApiGetCallTraceOnForkTransactionRequest, options?: Configuration): Promise<GoogleApiHttpBody> {
        return this.api.getCallTraceOnForkTransaction(param.owner, param.slug, param.forkId, param.txHash, param.withInternalCalls, param.disableOptimizer, param.ignoreGasCost,  options).toPromise();
    }

    /**
     * Get fork by id
     * @param param the request object
     */
    public getForkWithHttpInfo(param: ForksApiGetForkRequest, options?: Configuration): Promise<HttpInfo<SolidityServiceGetForkResponse>> {
        return this.api.getForkWithHttpInfo(param.owner, param.slug, param.id,  options).toPromise();
    }

    /**
     * Get fork by id
     * @param param the request object
     */
    public getFork(param: ForksApiGetForkRequest, options?: Configuration): Promise<SolidityServiceGetForkResponse> {
        return this.api.getFork(param.owner, param.slug, param.id,  options).toPromise();
    }

    /**
     * Get fork info by id
     * @param param the request object
     */
    public getForkInfoWithHttpInfo(param: ForksApiGetForkInfoRequest, options?: Configuration): Promise<HttpInfo<SolidityServiceGetForkInfoResponse>> {
        return this.api.getForkInfoWithHttpInfo(param.owner, param.slug, param.id,  options).toPromise();
    }

    /**
     * Get fork info by id
     * @param param the request object
     */
    public getForkInfo(param: ForksApiGetForkInfoRequest, options?: Configuration): Promise<SolidityServiceGetForkInfoResponse> {
        return this.api.getForkInfo(param.owner, param.slug, param.id,  options).toPromise();
    }

    /**
     * List all forks
     * @param param the request object
     */
    public listForksWithHttpInfo(param: ForksApiListForksRequest, options?: Configuration): Promise<HttpInfo<SolidityServiceListForksResponse>> {
        return this.api.listForksWithHttpInfo(param.owner, param.slug,  options).toPromise();
    }

    /**
     * List all forks
     * @param param the request object
     */
    public listForks(param: ForksApiListForksRequest, options?: Configuration): Promise<SolidityServiceListForksResponse> {
        return this.api.listForks(param.owner, param.slug,  options).toPromise();
    }

    /**
     * Run bundle simulation
     * @param param the request object
     */
    public simulateTransactionBundleOnForkWithHttpInfo(param: ForksApiSimulateTransactionBundleOnForkRequest, options?: Configuration): Promise<HttpInfo<SolidityServiceSimulateTransactionBundleResponse>> {
        return this.api.simulateTransactionBundleOnForkWithHttpInfo(param.owner, param.slug, param.forkId, param.body,  options).toPromise();
    }

    /**
     * Run bundle simulation
     * @param param the request object
     */
    public simulateTransactionBundleOnFork(param: ForksApiSimulateTransactionBundleOnForkRequest, options?: Configuration): Promise<SolidityServiceSimulateTransactionBundleResponse> {
        return this.api.simulateTransactionBundleOnFork(param.owner, param.slug, param.forkId, param.body,  options).toPromise();
    }

    /**
     * Run Simulation
     * @param param the request object
     */
    public simulateTransactionOnForkWithHttpInfo(param: ForksApiSimulateTransactionOnForkRequest, options?: Configuration): Promise<HttpInfo<SolidityServiceSimulateTransactionResponse>> {
        return this.api.simulateTransactionOnForkWithHttpInfo(param.owner, param.slug, param.forkId, param.body,  options).toPromise();
    }

    /**
     * Run Simulation
     * @param param the request object
     */
    public simulateTransactionOnFork(param: ForksApiSimulateTransactionOnForkRequest, options?: Configuration): Promise<SolidityServiceSimulateTransactionResponse> {
        return this.api.simulateTransactionOnFork(param.owner, param.slug, param.forkId, param.body,  options).toPromise();
    }

    /**
     * Update fork by id
     * @param param the request object
     */
    public updateForkWithHttpInfo(param: ForksApiUpdateForkRequest, options?: Configuration): Promise<HttpInfo<SolidityServiceUpdateForkResponse>> {
        return this.api.updateForkWithHttpInfo(param.owner, param.slug, param.id, param.body,  options).toPromise();
    }

    /**
     * Update fork by id
     * @param param the request object
     */
    public updateFork(param: ForksApiUpdateForkRequest, options?: Configuration): Promise<SolidityServiceUpdateForkResponse> {
        return this.api.updateFork(param.owner, param.slug, param.id, param.body,  options).toPromise();
    }

}

import { ObservablePriceApi } from "./ObservableAPI.js";
import { PriceApiRequestFactory, PriceApiResponseProcessor} from "../apis/PriceApi.js";

export interface PriceApiAddCoinByGeckoRequest {
    /**
     * 
     * @type PriceServiceAddCoinByGeckoRequest
     * @memberof PriceApiaddCoinByGecko
     */
    body: PriceServiceAddCoinByGeckoRequest
}

export interface PriceApiBatchGetPricesRequest {
    /**
     * 
     * @type PriceServiceBatchGetPricesRequest
     * @memberof PriceApibatchGetPrices
     */
    body: PriceServiceBatchGetPricesRequest
}

export interface PriceApiCheckLatestPriceRequest {
}

export interface PriceApiGetPriceRequest {
    /**
     * The timestamp we request the price at. Note, the price service may not have the price at the exact timestamp, in which case it will return the price at the closest timestamp.
     * Defaults to: undefined
     * @type Date
     * @memberof PriceApigetPrice
     */
    timestamp?: Date
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PriceApigetPrice
     */
    coinIdSymbol?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PriceApigetPrice
     */
    coinIdAddressAddress?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PriceApigetPrice
     */
    coinIdAddressChain?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PriceApigetPrice
     */
    source?: string
}

export interface PriceApiPriceListCoinsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof PriceApipriceListCoins
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof PriceApipriceListCoins
     */
    offset?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PriceApipriceListCoins
     */
    searchQuery?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PriceApipriceListCoins
     */
    chain?: string
}

export class ObjectPriceApi {
    private api: ObservablePriceApi

    public constructor(configuration: Configuration, requestFactory?: PriceApiRequestFactory, responseProcessor?: PriceApiResponseProcessor) {
        this.api = new ObservablePriceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * adds a coin by its coingecko id.  coingecko id the API ID of the coin in coingecko web page.  please AWARE that the coingecko id is NOT the same as the symbol of the coin.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/coingecko_apiid.png)
     * Add coin by Gecko
     * @param param the request object
     */
    public addCoinByGeckoWithHttpInfo(param: PriceApiAddCoinByGeckoRequest, options?: Configuration): Promise<HttpInfo<PriceServiceAddCoinByGeckoResponse>> {
        return this.api.addCoinByGeckoWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * adds a coin by its coingecko id.  coingecko id the API ID of the coin in coingecko web page.  please AWARE that the coingecko id is NOT the same as the symbol of the coin.  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/coingecko_apiid.png)
     * Add coin by Gecko
     * @param param the request object
     */
    public addCoinByGecko(param: PriceApiAddCoinByGeckoRequest, options?: Configuration): Promise<PriceServiceAddCoinByGeckoResponse> {
        return this.api.addCoinByGecko(param.body,  options).toPromise();
    }

    /**
     * Batch get prices
     * @param param the request object
     */
    public batchGetPricesWithHttpInfo(param: PriceApiBatchGetPricesRequest, options?: Configuration): Promise<HttpInfo<PriceServiceBatchGetPricesResponse>> {
        return this.api.batchGetPricesWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Batch get prices
     * @param param the request object
     */
    public batchGetPrices(param: PriceApiBatchGetPricesRequest, options?: Configuration): Promise<PriceServiceBatchGetPricesResponse> {
        return this.api.batchGetPrices(param.body,  options).toPromise();
    }

    /**
     * Check latest price
     * @param param the request object
     */
    public checkLatestPriceWithHttpInfo(param: PriceApiCheckLatestPriceRequest = {}, options?: Configuration): Promise<HttpInfo<PriceServiceCheckLatestPriceResponse>> {
        return this.api.checkLatestPriceWithHttpInfo( options).toPromise();
    }

    /**
     * Check latest price
     * @param param the request object
     */
    public checkLatestPrice(param: PriceApiCheckLatestPriceRequest = {}, options?: Configuration): Promise<PriceServiceCheckLatestPriceResponse> {
        return this.api.checkLatestPrice( options).toPromise();
    }

    /**
     * GetPrice returns the price of a given coin identifier, in a best effort way. If we do not have any price data for the given coin, we will return NOT_FOUND error. If we have at least one price data for the given coin, we will return it with the actual timestamp. Client is responsible for checking the timestamp and decide whether to use the price or not.
     * Get price
     * @param param the request object
     */
    public getPriceWithHttpInfo(param: PriceApiGetPriceRequest = {}, options?: Configuration): Promise<HttpInfo<PriceServiceGetPriceResponse>> {
        return this.api.getPriceWithHttpInfo(param.timestamp, param.coinIdSymbol, param.coinIdAddressAddress, param.coinIdAddressChain, param.source,  options).toPromise();
    }

    /**
     * GetPrice returns the price of a given coin identifier, in a best effort way. If we do not have any price data for the given coin, we will return NOT_FOUND error. If we have at least one price data for the given coin, we will return it with the actual timestamp. Client is responsible for checking the timestamp and decide whether to use the price or not.
     * Get price
     * @param param the request object
     */
    public getPrice(param: PriceApiGetPriceRequest = {}, options?: Configuration): Promise<PriceServiceGetPriceResponse> {
        return this.api.getPrice(param.timestamp, param.coinIdSymbol, param.coinIdAddressAddress, param.coinIdAddressChain, param.source,  options).toPromise();
    }

    /**
     * List coins
     * @param param the request object
     */
    public priceListCoinsWithHttpInfo(param: PriceApiPriceListCoinsRequest = {}, options?: Configuration): Promise<HttpInfo<PriceServiceListCoinsResponse>> {
        return this.api.priceListCoinsWithHttpInfo(param.limit, param.offset, param.searchQuery, param.chain,  options).toPromise();
    }

    /**
     * List coins
     * @param param the request object
     */
    public priceListCoins(param: PriceApiPriceListCoinsRequest = {}, options?: Configuration): Promise<PriceServiceListCoinsResponse> {
        return this.api.priceListCoins(param.limit, param.offset, param.searchQuery, param.chain,  options).toPromise();
    }

}

import { ObservableProcessorApi } from "./ObservableAPI.js";
import { ProcessorApiRequestFactory, ProcessorApiResponseProcessor} from "../apis/ProcessorApi.js";

export interface ProcessorApiGetProcessorStatusV2Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProcessorApigetProcessorStatusV2
     */
    owner: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProcessorApigetProcessorStatusV2
     */
    slug: string
    /**
     *  - ACTIVE: Only active version  - PENDING: Only pending versions  - ALL: All version
     * Defaults to: &#39;ACTIVE&#39;
     * @type &#39;ACTIVE&#39; | &#39;PENDING&#39; | &#39;ALL&#39;
     * @memberof ProcessorApigetProcessorStatusV2
     */
    version?: 'ACTIVE' | 'PENDING' | 'ALL'
}

export class ObjectProcessorApi {
    private api: ObservableProcessorApi

    public constructor(configuration: Configuration, requestFactory?: ProcessorApiRequestFactory, responseProcessor?: ProcessorApiResponseProcessor) {
        this.api = new ObservableProcessorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get processor status
     * @param param the request object
     */
    public getProcessorStatusV2WithHttpInfo(param: ProcessorApiGetProcessorStatusV2Request, options?: Configuration): Promise<HttpInfo<ProcessorServiceGetProcessorStatusResponse>> {
        return this.api.getProcessorStatusV2WithHttpInfo(param.owner, param.slug, param.version,  options).toPromise();
    }

    /**
     * Get processor status
     * @param param the request object
     */
    public getProcessorStatusV2(param: ProcessorApiGetProcessorStatusV2Request, options?: Configuration): Promise<ProcessorServiceGetProcessorStatusResponse> {
        return this.api.getProcessorStatusV2(param.owner, param.slug, param.version,  options).toPromise();
    }

}

import { ObservableWebApi } from "./ObservableAPI.js";
import { WebApiRequestFactory, WebApiResponseProcessor} from "../apis/WebApi.js";

export interface WebApiDeleteDashboardRequest {
    /**
     * filter the dashboard by id
     * Defaults to: undefined
     * @type string
     * @memberof WebApideleteDashboard
     */
    dashboardId: string
    /**
     * filter the dashboard by project id
     * Defaults to: undefined
     * @type string
     * @memberof WebApideleteDashboard
     */
    projectId?: string
    /**
     * username or organization name
     * Defaults to: undefined
     * @type string
     * @memberof WebApideleteDashboard
     */
    ownerName?: string
    /**
     * project slug
     * Defaults to: undefined
     * @type string
     * @memberof WebApideleteDashboard
     */
    slug?: string
}

export interface WebApiExportDashboardRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof WebApiexportDashboard
     */
    dashboardId: string
}

export interface WebApiGetDashboardRequest {
    /**
     * filter the dashboard by id
     * Defaults to: undefined
     * @type string
     * @memberof WebApigetDashboard
     */
    dashboardId: string
    /**
     * filter the dashboard by project id
     * Defaults to: undefined
     * @type string
     * @memberof WebApigetDashboard
     */
    projectId?: string
    /**
     * username or organization name
     * Defaults to: undefined
     * @type string
     * @memberof WebApigetDashboard
     */
    ownerName?: string
    /**
     * project slug
     * Defaults to: undefined
     * @type string
     * @memberof WebApigetDashboard
     */
    slug?: string
}

export interface WebApiGetDashboard2Request {
    /**
     * username or organization name
     * Defaults to: undefined
     * @type string
     * @memberof WebApigetDashboard2
     */
    owner: string
    /**
     * project slug
     * Defaults to: undefined
     * @type string
     * @memberof WebApigetDashboard2
     */
    slug: string
    /**
     * filter the dashboard by id
     * Defaults to: undefined
     * @type string
     * @memberof WebApigetDashboard2
     */
    dashboardId: string
    /**
     * filter the dashboard by project id
     * Defaults to: undefined
     * @type string
     * @memberof WebApigetDashboard2
     */
    projectId?: string
}

export interface WebApiGetProjectRequest {
    /**
     * username or organization name
     * Defaults to: undefined
     * @type string
     * @memberof WebApigetProject
     */
    owner: string
    /**
     * project slug
     * Defaults to: undefined
     * @type string
     * @memberof WebApigetProject
     */
    slug: string
}

export interface WebApiGetProjectByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof WebApigetProjectById
     */
    projectId: string
}

export interface WebApiGetProjectListRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof WebApigetProjectList
     */
    userId?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof WebApigetProjectList
     */
    organizationId?: string
}

export interface WebApiImportDashboardRequest {
    /**
     * 
     * @type WebServiceImportDashboardRequest
     * @memberof WebApiimportDashboard
     */
    body: WebServiceImportDashboardRequest
}

export interface WebApiListDashboardsRequest {
    /**
     * filter the dashboard by id
     * Defaults to: undefined
     * @type string
     * @memberof WebApilistDashboards
     */
    dashboardId?: string
    /**
     * filter the dashboard by project id
     * Defaults to: undefined
     * @type string
     * @memberof WebApilistDashboards
     */
    projectId?: string
    /**
     * username or organization name
     * Defaults to: undefined
     * @type string
     * @memberof WebApilistDashboards
     */
    ownerName?: string
    /**
     * project slug
     * Defaults to: undefined
     * @type string
     * @memberof WebApilistDashboards
     */
    slug?: string
}

export interface WebApiListDashboards2Request {
    /**
     * username or organization name
     * Defaults to: undefined
     * @type string
     * @memberof WebApilistDashboards2
     */
    owner: string
    /**
     * project slug
     * Defaults to: undefined
     * @type string
     * @memberof WebApilistDashboards2
     */
    slug: string
    /**
     * filter the dashboard by id
     * Defaults to: undefined
     * @type string
     * @memberof WebApilistDashboards2
     */
    dashboardId?: string
    /**
     * filter the dashboard by project id
     * Defaults to: undefined
     * @type string
     * @memberof WebApilistDashboards2
     */
    projectId?: string
}

export class ObjectWebApi {
    private api: ObservableWebApi

    public constructor(configuration: Configuration, requestFactory?: WebApiRequestFactory, responseProcessor?: WebApiResponseProcessor) {
        this.api = new ObservableWebApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a dashboard by id
     * @param param the request object
     */
    public deleteDashboardWithHttpInfo(param: WebApiDeleteDashboardRequest, options?: Configuration): Promise<HttpInfo<WebServiceDashboard>> {
        return this.api.deleteDashboardWithHttpInfo(param.dashboardId, param.projectId, param.ownerName, param.slug,  options).toPromise();
    }

    /**
     * Delete a dashboard by id
     * @param param the request object
     */
    public deleteDashboard(param: WebApiDeleteDashboardRequest, options?: Configuration): Promise<WebServiceDashboard> {
        return this.api.deleteDashboard(param.dashboardId, param.projectId, param.ownerName, param.slug,  options).toPromise();
    }

    /**
     * Export a dashboard to json
     * @param param the request object
     */
    public exportDashboardWithHttpInfo(param: WebApiExportDashboardRequest, options?: Configuration): Promise<HttpInfo<WebServiceExportDashboardResponse>> {
        return this.api.exportDashboardWithHttpInfo(param.dashboardId,  options).toPromise();
    }

    /**
     * Export a dashboard to json
     * @param param the request object
     */
    public exportDashboard(param: WebApiExportDashboardRequest, options?: Configuration): Promise<WebServiceExportDashboardResponse> {
        return this.api.exportDashboard(param.dashboardId,  options).toPromise();
    }

    /**
     * Get a dashboard by id
     * @param param the request object
     */
    public getDashboardWithHttpInfo(param: WebApiGetDashboardRequest, options?: Configuration): Promise<HttpInfo<WebServiceGetDashboardResponse>> {
        return this.api.getDashboardWithHttpInfo(param.dashboardId, param.projectId, param.ownerName, param.slug,  options).toPromise();
    }

    /**
     * Get a dashboard by id
     * @param param the request object
     */
    public getDashboard(param: WebApiGetDashboardRequest, options?: Configuration): Promise<WebServiceGetDashboardResponse> {
        return this.api.getDashboard(param.dashboardId, param.projectId, param.ownerName, param.slug,  options).toPromise();
    }

    /**
     * Get a dashboard by id
     * @param param the request object
     */
    public getDashboard2WithHttpInfo(param: WebApiGetDashboard2Request, options?: Configuration): Promise<HttpInfo<WebServiceGetDashboardResponse>> {
        return this.api.getDashboard2WithHttpInfo(param.owner, param.slug, param.dashboardId, param.projectId,  options).toPromise();
    }

    /**
     * Get a dashboard by id
     * @param param the request object
     */
    public getDashboard2(param: WebApiGetDashboard2Request, options?: Configuration): Promise<WebServiceGetDashboardResponse> {
        return this.api.getDashboard2(param.owner, param.slug, param.dashboardId, param.projectId,  options).toPromise();
    }

    /**
     * Get project details
     * @param param the request object
     */
    public getProjectWithHttpInfo(param: WebApiGetProjectRequest, options?: Configuration): Promise<HttpInfo<WebServiceGetProjectResponse>> {
        return this.api.getProjectWithHttpInfo(param.owner, param.slug,  options).toPromise();
    }

    /**
     * Get project details
     * @param param the request object
     */
    public getProject(param: WebApiGetProjectRequest, options?: Configuration): Promise<WebServiceGetProjectResponse> {
        return this.api.getProject(param.owner, param.slug,  options).toPromise();
    }

    /**
     * Get project details
     * @param param the request object
     */
    public getProjectByIdWithHttpInfo(param: WebApiGetProjectByIdRequest, options?: Configuration): Promise<HttpInfo<CommonProjectInfo>> {
        return this.api.getProjectByIdWithHttpInfo(param.projectId,  options).toPromise();
    }

    /**
     * Get project details
     * @param param the request object
     */
    public getProjectById(param: WebApiGetProjectByIdRequest, options?: Configuration): Promise<CommonProjectInfo> {
        return this.api.getProjectById(param.projectId,  options).toPromise();
    }

    /**
     * Get project list
     * @param param the request object
     */
    public getProjectListWithHttpInfo(param: WebApiGetProjectListRequest = {}, options?: Configuration): Promise<HttpInfo<WebServiceGetProjectListResponse>> {
        return this.api.getProjectListWithHttpInfo(param.userId, param.organizationId,  options).toPromise();
    }

    /**
     * Get project list
     * @param param the request object
     */
    public getProjectList(param: WebApiGetProjectListRequest = {}, options?: Configuration): Promise<WebServiceGetProjectListResponse> {
        return this.api.getProjectList(param.userId, param.organizationId,  options).toPromise();
    }

    /**
     * Import a dashboard to another dashboard
     * @param param the request object
     */
    public importDashboardWithHttpInfo(param: WebApiImportDashboardRequest, options?: Configuration): Promise<HttpInfo<WebServiceImportDashboardResponse>> {
        return this.api.importDashboardWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Import a dashboard to another dashboard
     * @param param the request object
     */
    public importDashboard(param: WebApiImportDashboardRequest, options?: Configuration): Promise<WebServiceImportDashboardResponse> {
        return this.api.importDashboard(param.body,  options).toPromise();
    }

    /**
     * List all dashboards in a project
     * @param param the request object
     */
    public listDashboardsWithHttpInfo(param: WebApiListDashboardsRequest = {}, options?: Configuration): Promise<HttpInfo<WebServiceGetDashboardResponse>> {
        return this.api.listDashboardsWithHttpInfo(param.dashboardId, param.projectId, param.ownerName, param.slug,  options).toPromise();
    }

    /**
     * List all dashboards in a project
     * @param param the request object
     */
    public listDashboards(param: WebApiListDashboardsRequest = {}, options?: Configuration): Promise<WebServiceGetDashboardResponse> {
        return this.api.listDashboards(param.dashboardId, param.projectId, param.ownerName, param.slug,  options).toPromise();
    }

    /**
     * List all dashboards in a project
     * @param param the request object
     */
    public listDashboards2WithHttpInfo(param: WebApiListDashboards2Request, options?: Configuration): Promise<HttpInfo<WebServiceGetDashboardResponse>> {
        return this.api.listDashboards2WithHttpInfo(param.owner, param.slug, param.dashboardId, param.projectId,  options).toPromise();
    }

    /**
     * List all dashboards in a project
     * @param param the request object
     */
    public listDashboards2(param: WebApiListDashboards2Request, options?: Configuration): Promise<WebServiceGetDashboardResponse> {
        return this.api.listDashboards2(param.owner, param.slug, param.dashboardId, param.projectId,  options).toPromise();
    }

}

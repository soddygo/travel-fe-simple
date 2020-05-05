define('travel-fe-simple/js/config/apilist', function (require, exports, module) {
	var URL, URL1, CGI;
	URL = {
		//获取登录用户信息
		//getUserInfo: 'user/getUserInfo' //获取登录用户信息




        returnSupplierList: 'returnSupplier/getPage',
        returnSupplierDetail: 'returnSupplier/getDetail',
        returnSupplierSave: 'returnSupplier/save',
        returnSupplierSubmit: 'returnSupplier/submit',
        returnSupplierReverse: 'returnSupplier/reverse',

        compensationList: 'compensation/getDcPage',
        compensationDetail: 'compensation/getDcDetail',
        compensationSubmit: 'compensation/submit',
        compensationAuditDetail: 'compensation/getAuditDetail',
        compensationAudit: 'compensation/audit',
        compensationCreate: 'compensation/create',
        compensationReason: 'compensation/reasonList',
        compensationDeal: 'compensation/dealList',
        compensationPrint: 'compensation/printDc?billNos=',

        warehouseList: 'common/warehouseList', //仓库列表
        localeList: 'common/localeList', //用户有权限门店列表
        dcLocaleList: 'common/dcLocaleList', //仓库对应可配门店列表

        // 出库单
        outboundOrderList: 'outbound/list',
        outboundOrderDetail: 'outbound/detail',
        outboundOrderSave: 'outbound/save',
        outboundOrderIdList: 'outbound/getByIdList',
        outboundOrderOutbound: 'outbound/outbound',
        outboundOrderCancel: 'outbound/cancelOutbound',
        outboundOrderOperateLog: 'outbound/operateLog',
        outboundOrderSaveDetailOutboundCount: 'outbound/saveDetailOutboundCount',
        outboundOrderPrint: 'outbound/print',
        // 配货计划单
        distributionPlanList: 'distributionPlan/list',
        distributionPlanDetail: 'distributionPlan/detail',
        distributionPlanSave: 'distributionPlan/save',
        distributionPlanIdList: 'distributionPlan/getByIdList',
        distributionPlanOutbound: 'distributionPlan/distribution',
        distributionPlanCancel: 'distributionPlan/cancelOutbound',
        distributionPlanOperateLog: 'distributionPlan/operateLog',
        distributionPlanPrint: 'distributionPlan/print',
        // 强配单
        hqdistributionList: 'hqdistribution/list',
        hqdistributionDetail: 'hqdistribution/detail',
        hqdistributionSearchWare: 'hqdistribution/searchWare',
        hqdistributionSave: 'hqdistribution/save',

        //DC收货单
        receiveBillSearch:'receiveBill/list',
        receiveBillDetail:'receiveBill/detail',
        receiveBillReceive:'receiveBill/receive',
        receiveBillSaveItem:'receiveBill/saveItemReceive',
        receiveBillPrint:'receiveBill/print',
        receiveBillPickUpPrint:'receiveBill/printPickOrder',
        receiveBillReverse:'receiveBill/reverse',

        //返仓
        returnWarehouseList: 'returnWarehouse/list',
        returnWarehouseDetail: 'returnWarehouse/detail',
        returnWarehouseApprove: 'returnWarehouse/approve',
        returnWarehouseApproveSubmit: 'returnWarehouse/approveSubmit',
        returnWarehousePrint:'returnWarehouse/print?billNos=',

        returnSupplierPrint: 'returnSupplier/print?billNos=',

        //返仓收货
        rwReceiveBillSearch:'/returnWarehouse/receive/list',
        rwReceiveBillDetail:'/returnWarehouse/receive/detail',
        rwReceiveBillReceive:'/returnWarehouse/receive/receive',
        rwReceiveBillSaveItem:'/returnWarehouse/receive/saveItemReceive',
        rwReceiveBillPrint:'/returnWarehouse/receive/print',

        // MQ
        mqlist: 'mq/list',

        //safe
        querySafeMqError: 'safe/error/getPage',
        querySafeMqBackup: 'safe/backup/getPage',
        querySafeCommand: 'safe/command/getPage',
        commandCallback: 'safe/command/callback',
        mqCallback: 'safe/mq/callback',

	};
	URL1 = {
        //用户有权限的门店
        voucherLocalList: 'common/localList',
        //人工干预处理 disaster
        voucherDisasterSetStatusFlag: 'disaster/setStatusFlag',

        //凭证MQ
        voucherMqList: 'voucherMq/list', //凭证抬头表,list查询


        voucherDetailList: 'voucherDetail/list', //凭证明细表,list查询


        //凭证
        voucherList: 'voucher/list', //凭证抬头表,list查询
        voucherQueryOne: 'voucher/queryOne', //根据凭证抬头表id,查询凭证信息
        voucherSave: 'voucher/save', //save test demo
        //本地凭证,同步任务查询
        voucherSynTaskList: 'voucher/voucherSynTask/list', //凭证抬头表,list查询
        voucherRetryByBillIdAndType: 'voucher/voucherSynTask/retryByBillIdAndType', //根据本地凭证主键id,且指定同步平台,立即同步
        voucherRetrySynByDetailIdAndType: 'voucher/voucherSynTask/retrySynByDetailIdAndType', //根据本地凭证明细的主键id,立即同步

        voucherDisabledSynTask: 'voucher/voucherSynTask/disabledSynTask', //禁用同步
        voucherStartSynTask: 'voucher/voucherSynTask/startSynTask', //启动同步
        voucherDeleteById: 'voucher/voucherSynTask/deleteById', //删除
        voucherDeleteByIds: 'voucher/voucherSynTask/deleteByIds', //根据本地凭证明细的主键ids,批量删除重试任务列表明细


        voucherCreateNeedToSynByReferBillNo: 'voucher/voucherSynTask/createNeedToSynByReferBillNo', //生成同步记录,根据业务单号

        //下拉框查询
        voucherQueryCascaderBusinessType: 'voucher/search/queryCascaderBusinessType', //本地凭证,级联查询订单类型,业务类型
        voucherOrderType: 'voucher/search/orderType', //本地凭证,订单类型
        voucherBusinessType: 'voucher/search/businessType', //本地凭证,业务类型
        voucherBuinessTypeForOrderType: 'voucher/search/buinessTypeForOrderType', //本地凭证,业务类型

        queryAllVender: 'voucher/search/queryAllVender', //查询所有商家信息

        //请求日志
        recordLogSearch: 'voucher/recordLog/list', //搜索

        //公共参数配置
        configParamSearch: 'voucher/configParam/list', //搜索
        configParamUpdate: 'voucher/configParam/update', //更新
        configParamSave: 'voucher/configParam/save', //保存
        configParamDeleteById: 'voucher/configParam/deleteById', //根据主键id删除

    };
	CGI = {};
	module.exports = $.extend({}, {
		URL: URL,
		URL1: URL1
	});
});

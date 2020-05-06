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
	CGI = {};
	module.exports = $.extend({}, {
		URL: URL,
	});
});

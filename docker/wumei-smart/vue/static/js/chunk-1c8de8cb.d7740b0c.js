(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c8de8cb","chunk-28b7a9aa"],{"10f3":function(e,t,r){"use strict";r.d(t,"e",(function(){return a})),r.d(t,"d",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return l})),r.d(t,"g",(function(){return s})),r.d(t,"f",(function(){return u})),r.d(t,"b",(function(){return c}));var i=r("b775");function a(e){return Object(i["a"])({url:"/iot/group/list",method:"get",params:e})}function n(e){return Object(i["a"])({url:"/iot/group/"+e,method:"get"})}function o(e){return Object(i["a"])({url:"/iot/group/getDeviceIds/"+e,method:"get"})}function l(e){return Object(i["a"])({url:"/iot/group",method:"post",data:e})}function s(e){return Object(i["a"])({url:"/iot/group",method:"put",data:e})}function u(e){return Object(i["a"])({url:"/iot/group/updateDeviceGroups",method:"put",data:e})}function c(e){return Object(i["a"])({url:"/iot/group/"+e,method:"delete"})}},1967:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{padding:"6px"}},[r("el-card",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],staticStyle:{"margin-bottom":"6px"}},[r("el-form",{ref:"queryForm",staticStyle:{"margin-bottom":"-20px"},attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[r("el-form-item",{attrs:{label:"分组名称",prop:"groupName"}},[r("el-input",{attrs:{placeholder:"请输入分组名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.groupName,callback:function(t){e.$set(e.queryParams,"groupName",t)},expression:"queryParams.groupName"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),r("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1)],1),r("el-card",{staticStyle:{"padding-bottom":"100px"}},[r("el-row",{staticClass:"mb8",attrs:{gutter:10}},[r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:group:add"],expression:"['iot:group:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:group:edit"],expression:"['iot:group:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:group:remove"],expression:"['iot:group:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:group:export"],expression:"['iot:group:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),r("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.groupList,border:""},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),r("el-table-column",{attrs:{label:"分组名称",align:"center",prop:"groupName",width:"200"}}),r("el-table-column",{attrs:{label:"分组排序",align:"center",prop:"groupOrder",width:"100"}}),r("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.parseTime(t.row.createTime,"{y}-{m}-{d}")))])]}}])}),r("el-table-column",{attrs:{label:"备注",align:"left",prop:"remark"}}),r("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:group:edit"],expression:"['iot:group:edit']"}],staticStyle:{padding:"5px"},attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(r){return e.selectDevice(t.row)}}},[e._v("添加设备")]),r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:group:edit"],expression:"['iot:group:edit']"}],staticStyle:{padding:"5px"},attrs:{size:"small",type:"primary",icon:"el-icon-edit"},on:{click:function(r){return e.handleUpdate(t.row)}}},[e._v("修改")]),r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:group:remove"],expression:"['iot:group:remove']"}],staticStyle:{padding:"5px"},attrs:{size:"small",type:"danger",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),r("el-dialog",{attrs:{title:"选择设备",visible:e.openDeviceList,width:"800px","append-to-body":""},on:{"update:visible":function(t){e.openDeviceList=t}}},[r("device-list",{ref:"deviceList",attrs:{groupId:e.deviceGroup.groupId},on:{idsToParentEvent:function(t){return e.getChildData(t)}}}),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleDeviceSelected}},[e._v("确 定")]),r("el-button",{on:{click:e.closeSelectDeviceList}},[e._v("取 消")])],1)],1),r("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"分组名称",prop:"groupName"}},[r("el-input",{attrs:{placeholder:"请输入分组名称"},model:{value:e.form.groupName,callback:function(t){e.$set(e.form,"groupName",t)},expression:"form.groupName"}})],1),r("el-form-item",{attrs:{label:"分组排序",prop:"groupOrder"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入分组排序"},model:{value:e.form.groupOrder,callback:function(t){e.$set(e.form,"groupOrder",t)},expression:"form.groupOrder"}})],1),r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),r("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)],1)},a=[],n=r("5530"),o=(r("b0c0"),r("d81d"),r("d4b0")),l=r("10f3"),s={name:"Group",components:{deviceList:o["default"]},data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,groupList:[],title:"",open:!1,openDeviceList:!1,queryParams:{pageNum:1,pageSize:10,groupName:null,userName:null},deviceGroup:{},form:{},rules:{groupName:[{required:!0,message:"分组名称不能为空",trigger:"blur"}],groupOrder:[{required:!0,message:"分组排序不能为空,最大值为99",trigger:"blur"},{min:1,max:2,message:"范围在 0 到 99",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,-1===this.$store.state.user.roles.indexOf("admin")&&(this.queryParams.userName=this.$store.state.user.name),Object(l["e"])(this.queryParams).then((function(t){e.groupList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},closeSelectDeviceList:function(){this.openDeviceList=!1},reset:function(){this.form={groupId:null,groupName:null,groupOrder:null,userId:null,userName:null,delFlag:null,createBy:null,createTime:null,updateBy:null,updateTime:null,remark:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.groupId})),console.log(this.ids),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加设备分组"},handleUpdate:function(e){var t=this;this.reset();var r=e.groupId||this.ids;Object(l["d"])(r).then((function(e){t.form=e.data,t.open=!0,t.title="修改设备分组"}))},selectDevice:function(e){this.deviceGroup.groupId=e.groupId,this.openDeviceList=!0,this.$refs.deviceList.getDeviceIdsByGroupId()},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.groupId?Object(l["g"])(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):Object(l["a"])(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,r=e.groupId||this.ids;this.$modal.confirm('是否确认删除设备分组编号为"'+r+'"的数据项？').then((function(){return Object(l["b"])(r)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("iot/group/export",Object(n["a"])({},this.queryParams),"group_".concat((new Date).getTime(),".xlsx"))},getChildData:function(e){this.deviceGroup.deviceIds=e},handleDeviceSelected:function(){var e=this;Object(l["f"])(this.deviceGroup).then((function(t){e.$modal.msgSuccess("更新分组下的设备成功"),e.openDeviceList=!1}))}}},u=s,c=r("2877"),d=Object(c["a"])(u,i,a,!1,null,null,null);t["default"]=d.exports},"584f":function(e,t,r){"use strict";r.d(t,"g",(function(){return a})),r.d(t,"f",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return l})),r.d(t,"a",(function(){return s})),r.d(t,"h",(function(){return u})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return d}));var i=r("b775");function a(e){return Object(i["a"])({url:"/iot/device/shortList",method:"get",params:e})}function n(e){return Object(i["a"])({url:"/iot/device/all",method:"get",params:e})}function o(e){return Object(i["a"])({url:"/iot/device/"+e,method:"get"})}function l(e){return Object(i["a"])({url:"/iot/device/runningStatus/"+e,method:"get"})}function s(e){return Object(i["a"])({url:"/iot/device",method:"post",data:e})}function u(e){return Object(i["a"])({url:"/iot/device",method:"put",data:e})}function c(e){return Object(i["a"])({url:"/iot/device/"+e,method:"delete"})}function d(){return Object(i["a"])({url:"/iot/device/generator",method:"get"})}},d4b0:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{padding:"6px"}},[r("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[r("el-form-item",{attrs:{label:"设备名称",prop:"deviceName"}},[r("el-input",{attrs:{placeholder:"请输入设备名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.deviceName,callback:function(t){e.$set(e.queryParams,"deviceName",t)},expression:"queryParams.deviceName"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),r("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",attrs:{data:e.deviceList,size:"mini",border:""},on:{select:e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),r("el-table-column",{attrs:{label:"设备名称",align:"center",prop:"deviceName"}}),r("el-table-column",{attrs:{label:"设备编号",align:"center",prop:"serialNumber"}}),r("el-table-column",{attrs:{label:"产品名称",align:"center",prop:"productName"}}),r("el-table-column",{attrs:{label:"设备状态",align:"center",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("dict-tag",{attrs:{options:e.dict.type.iot_device_status,value:t.row.status}})]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)},a=[],n=(r("a9e3"),r("b0c0"),r("d3b7"),r("159b"),r("d81d"),r("10f3")),o=r("584f"),l={name:"device-list",dicts:["iot_device_status"],props:{groupId:{type:Number,default:null}},data:function(){return{loading:!0,parentGroupId:0,ids:[],showSearch:!0,total:0,deviceList:[],queryParams:{pageNum:1,pageSize:10,deviceName:null,productId:null,productName:null,userId:null,userName:null,tenantId:null,tenantName:null,serialNumber:null,status:null,networkAddress:null,activeTime:null}}},watch:{groupId:{handler:function(e,t){this.parentGroupId=e,this.queryParams.pageNum=1,this.getDeviceIdsByGroupId()},immediate:!0}},created:function(){},methods:{getDeviceIdsByGroupId:function(){var e=this;Object(n["c"])(this.parentGroupId).then((function(t){e.ids=t.data,e.getList()}))},getList:function(){var e=this;this.loading=!0,this.queryParams.params={},null!=this.daterangeActiveTime&&""!=this.daterangeActiveTime&&(this.queryParams.params["beginActiveTime"]=this.daterangeActiveTime[0],this.queryParams.params["endActiveTime"]=this.daterangeActiveTime[1]),-1===this.$store.state.user.roles.indexOf("admin")&&(this.queryParams.userName=this.$store.state.user.name),Object(o["g"])(this.queryParams).then((function(t){e.deviceList=t.rows,e.total=t.total,e.loading=!1,e.deviceList.forEach((function(t){e.$nextTick((function(){e.ids.some((function(e){return e===t.deviceId}))&&e.$refs.multipleTable.toggleRowSelection(t,!0)}))}))}))},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.daterangeActiveTime=[],this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.deviceId})),console.log("选择赋值"),console.log(this.ids),this.single=1!==e.length,this.multiple=!e.length,this.$emit("idsToParentEvent",this.ids)}}},s=l,u=r("2877"),c=Object(u["a"])(s,i,a,!1,null,null,null);t["default"]=c.exports}}]);
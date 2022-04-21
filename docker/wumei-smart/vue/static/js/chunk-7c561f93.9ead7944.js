(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c561f93","chunk-10233db4"],{2544:function(e,t,r){"use strict";r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return a})),r.d(t,"e",(function(){return o})),r.d(t,"b",(function(){return u}));var n=r("b775");function i(e){return Object(n["a"])({url:"/iot/deviceUser/list",method:"get",params:e})}function s(e){return Object(n["a"])({url:"/iot/deviceUser/"+e,method:"get"})}function a(e){return Object(n["a"])({url:"/iot/deviceUser",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/iot/deviceUser",method:"put",data:e})}function u(e){return Object(n["a"])({url:"/iot/deviceUser/"+e,method:"delete"})}},b52e:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"padding-left":"20px"}},[r("el-row",{staticClass:"mb8",attrs:{gutter:10}},[r("el-col",{attrs:{span:1.5}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:deviceUser:add"],expression:"['iot:deviceUser:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.selectUser}},[e._v("分享设备")])],1),r("right-toolbar",{on:{queryTable:e.getList}})],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.deviceUserList,size:"mini"},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{label:"用户昵称",align:"center",prop:"userName",width:"200"}}),r("el-table-column",{attrs:{label:"手机号码",align:"center",prop:"phonenumber",width:"200"}}),r("el-table-column",{attrs:{label:"设备所有者",align:"center",prop:"isOwner",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("dict-tag",{attrs:{options:e.dict.type.iot_yes_no,value:t.row.isOwner}})]}}])}),r("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.parseTime(t.row.createTime,"{y}-{m}-{d}")))])]}}])}),r("el-table-column",{attrs:{label:"备注",align:"left",prop:"remark",al:""}}),r("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.isOwner?r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:deviceUser:edit"],expression:"['iot:deviceUser:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(r){return e.handleUpdate(t.row)}}},[e._v("备注")]):e._e(),0==t.row.isOwner?r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:deviceUser:remove"],expression:"['iot:deviceUser:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.row)}}},[e._v("删除")]):e._e()]}}])})],1),r("el-dialog",{attrs:{title:e.title,visible:e.open,width:"500px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入内容",rows:"8"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),r("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),r("user-list",{ref:"userList",attrs:{device:e.device}})],1)},i=[],s=r("5530"),a=(r("d81d"),r("e018")),o=r("2544"),u={name:"device-user",dicts:["iot_yes_no"],components:{userList:a["default"]},props:{device:{type:Object,default:null}},watch:{device:function(e,t){this.deviceInfo=e,this.deviceInfo&&0!=this.deviceInfo.deviceId&&(this.queryParams.deviceId=this.deviceInfo.deviceId,this.getList())}},data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,deviceUserList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,deviceName:null,userName:null,tenantName:null,isOwner:null},form:{},rules:{deviceName:[{required:!0,message:"设备名称不能为空",trigger:"blur"}],userName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,Object(o["d"])(this.queryParams).then((function(t){e.deviceUserList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={deviceId:null,userId:null,deviceName:null,userName:null,tenantId:null,tenantName:null,isOwner:null,limitNum:null,delFlag:null,createBy:null,createTime:null,updateBy:null,updateTime:null,remark:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.deviceId})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加设备用户"},handleUpdate:function(e){var t=this;this.reset();var r=e.deviceId||this.ids;Object(o["c"])(r).then((function(e){t.form=e.data,t.open=!0,t.title="用户备注"}))},submitForm:function(){var e=this;null!=this.form.deviceId&&Object(o["e"])(this.form).then((function(t){e.$modal.msgSuccess("备注成功"),e.open=!1,e.getList()}))},handleDelete:function(e){var t=this,r=e.deviceId||this.ids;this.$modal.confirm('是否确认删除设备用户编号为"'+r+'"的数据项？').then((function(){return Object(o["b"])(r)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("iot/deviceUser/export",Object(s["a"])({},this.queryParams),"deviceUser_".concat((new Date).getTime(),".xlsx"))},selectUser:function(){this.$refs.userList.openSelectUser=!0}}},l=u,c=r("2877"),d=Object(c["a"])(l,n,i,!1,null,null,null);t["default"]=d.exports},c0c7:function(e,t,r){"use strict";r.d(t,"g",(function(){return s})),r.d(t,"e",(function(){return a})),r.d(t,"a",(function(){return o})),r.d(t,"j",(function(){return u})),r.d(t,"c",(function(){return l})),r.d(t,"h",(function(){return c})),r.d(t,"b",(function(){return d})),r.d(t,"f",(function(){return m})),r.d(t,"k",(function(){return h})),r.d(t,"l",(function(){return f})),r.d(t,"m",(function(){return p})),r.d(t,"d",(function(){return v})),r.d(t,"i",(function(){return b}));var n=r("b775"),i=r("c38a");function s(e){return Object(n["a"])({url:"/system/user/list",method:"get",params:e})}function a(e){return Object(n["a"])({url:"/system/user/"+Object(i["f"])(e),method:"get"})}function o(e){return Object(n["a"])({url:"/system/user",method:"post",data:e})}function u(e){return Object(n["a"])({url:"/system/user",method:"put",data:e})}function l(e){return Object(n["a"])({url:"/system/user/"+e,method:"delete"})}function c(e,t){var r={userId:e,password:t};return Object(n["a"])({url:"/system/user/resetPwd",method:"put",data:r})}function d(e,t){var r={userId:e,status:t};return Object(n["a"])({url:"/system/user/changeStatus",method:"put",data:r})}function m(){return Object(n["a"])({url:"/system/user/profile",method:"get"})}function h(e){return Object(n["a"])({url:"/system/user/profile",method:"put",data:e})}function f(e,t){var r={oldPassword:e,newPassword:t};return Object(n["a"])({url:"/system/user/profile/updatePwd",method:"put",params:r})}function p(e){return Object(n["a"])({url:"/system/user/profile/avatar",method:"post",data:e})}function v(e){return Object(n["a"])({url:"/system/user/authRole/"+e,method:"get"})}function b(e){return Object(n["a"])({url:"/system/user/authRole",method:"put",params:e})}},e018:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"选择产品",visible:e.openSelectUser,width:"800px"},on:{"update:visible":function(t){e.openSelectUser=t}}},[r("div",{staticStyle:{"margin-top":"-50px"}},[r("el-divider")],1),r("el-form",{ref:"queryForm",attrs:{model:e.queryParams,rules:e.rules,inline:!0,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"手机号码",prop:"phonenumber"}},[r("el-input",{staticStyle:{width:"240px"},attrs:{type:"text",placeholder:"请输入用户手机号码",minlength:"10",clearable:"",size:"small","show-word-limit":""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.phonenumber,callback:function(t){e.$set(e.queryParams,"phonenumber",t)},expression:"queryParams.phonenumber"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("查询")])],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.userList,"highlight-current-row":"",size:"mini",border:""},on:{"current-change":e.handleCurrentChange}},[r("el-table-column",{attrs:{label:"选择",width:"50",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("input",{attrs:{type:"radio",name:"user"},domProps:{checked:e.row.isSelect}})]}}])}),r("el-table-column",{key:"nickName",attrs:{label:"用户昵称",align:"center",prop:"nickName","show-overflow-tooltip":!0}}),r("el-table-column",{key:"phonenumber",attrs:{label:"手机号码",align:"center",prop:"phonenumber",width:"120"}}),r("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])})],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.addDeviceUser}},[e._v("添加")]),r("el-button",{on:{click:e.closeSelectUser}},[e._v("关 闭")])],1)],1)},i=[],s=r("c0c7"),a=r("2544"),o={name:"user-list",props:{device:{type:Object,default:null}},watch:{device:function(e,t){this.deviceInfo=e}},data:function(){return{loading:!1,ids:[],title:"",userList:[],user:{},deviceInfo:{},openSelectUser:!1,queryParams:{pageNum:1,pageSize:10,userName:void 0,phonenumber:void 0,status:0,deptId:void 0},rules:{phonenumber:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{min:11,max:11,message:"手机号码长度为11位",trigger:"blur"}]}}},created:function(){},methods:{getList:function(){var e=this;this.loading=!0,Object(s["g"])(this.addDateRange(this.queryParams,this.dateRange)).then((function(t){e.userList=t.rows,e.total=t.total,e.loading=!1}))},handleQuery:function(){var e=this;this.$refs["queryForm"].validate((function(t){t&&(e.queryParams.pageNum=1,e.getList())}))},resetQuery:function(){this.$refs["queryForm"].resetFields(),this.userList=[]},setRadioSelected:function(e){for(var t=0;t<this.userList.length;t++)this.userList[t].userId==e?(this.userList[t].isSelect=!0,this.user=this.userList[t]):this.userList[t].isSelect=!1},handleCurrentChange:function(e){null!=e&&(this.setRadioSelected(e.userId),this.user=e)},closeSelectUser:function(){this.openSelectUser=!1,this.resetQuery()},addDeviceUser:function(){var e=this;if(null!=this.deviceInfo.deviceId){var t={};t.deviceId=this.deviceInfo.deviceId,t.deviceName=this.deviceInfo.deviceName,t.userId=this.user.userId,t.userName=this.user.userName,t.phonenumber=this.user.phonenumber,Object(a["a"])(t).then((function(t){e.$modal.msgSuccess("新增成功"),e.resetQuery(),e.openSelectUser=!1,e.$parent.getList()}))}}}},u=o,l=r("2877"),c=Object(l["a"])(u,n,i,!1,null,null,null);t["default"]=c.exports}}]);
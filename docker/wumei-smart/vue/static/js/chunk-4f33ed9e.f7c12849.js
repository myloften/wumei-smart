(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f33ed9e","chunk-2d0a3715"],{"01ca":function(e,t,i){"use strict";i.d(t,"f",(function(){return a})),i.d(t,"d",(function(){return n})),i.d(t,"a",(function(){return r})),i.d(t,"e",(function(){return s})),i.d(t,"g",(function(){return l})),i.d(t,"c",(function(){return c})),i.d(t,"b",(function(){return u}));var o=i("b775");function a(e){return Object(o["a"])({url:"/iot/model/list",method:"get",params:e})}function n(e){return Object(o["a"])({url:"/iot/model/"+e,method:"get"})}function r(e){return Object(o["a"])({url:"/iot/model",method:"post",data:e})}function s(e){return Object(o["a"])({url:"/iot/model/import",method:"post",data:e})}function l(e){return Object(o["a"])({url:"/iot/model",method:"put",data:e})}function c(e){return Object(o["a"])({url:"/iot/model/"+e,method:"delete"})}function u(e){return Object(o["a"])({url:"/iot/model/cache/"+e,method:"get"})}},"04d1":function(e,t,i){var o=i("342f"),a=o.match(/firefox\/(\d+)/i);e.exports=!!a&&+a[1]},"4e82":function(e,t,i){"use strict";var o=i("23e7"),a=i("e330"),n=i("59ed"),r=i("7b0b"),s=i("07fa"),l=i("577e"),c=i("d039"),u=i("addb"),d=i("a640"),m=i("04d1"),p=i("d998"),f=i("2d00"),h=i("512ce"),v=[],b=a(v.sort),g=a(v.push),y=c((function(){v.sort(void 0)})),x=c((function(){v.sort(null)})),I=d("sort"),w=!c((function(){if(f)return f<70;if(!(m&&m>3)){if(p)return!0;if(h)return h<603;var e,t,i,o,a="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:i=3;break;case 68:case 71:i=4;break;default:i=2}for(o=0;o<47;o++)v.push({k:t+o,v:i})}for(v.sort((function(e,t){return t.v-e.v})),o=0;o<v.length;o++)t=v[o].k.charAt(0),a.charAt(a.length-1)!==t&&(a+=t);return"DGBEFHACIJK"!==a}})),k=y||!x||!I||!w,j=function(e){return function(t,i){return void 0===i?-1:void 0===t?1:void 0!==e?+e(t,i)||0:l(t)>l(i)?1:-1}};o({target:"Array",proto:!0,forced:k},{sort:function(e){void 0!==e&&n(e);var t=r(this);if(w)return void 0===e?b(t):b(t,e);var i,o,a=[],l=s(t);for(o=0;o<l;o++)o in t&&g(a,t[o]);u(a,j(e)),i=a.length,o=0;while(o<i)t[o]=a[o++];while(o<l)delete t[o++];return t}})},"512ce":function(e,t,i){var o=i("342f"),a=o.match(/AppleWebKit\/(\d+)\./);e.exports=!!a&&+a[1]},"7a72":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"padding-left":"20px"}},[i("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,inline:!0,"label-width":"70px"}},[i("el-form-item",{attrs:{label:"定时名称",prop:"jobName"}},[i("el-input",{attrs:{placeholder:"请输入定时名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.jobName,callback:function(t){e.$set(e.queryParams,"jobName",t)},expression:"queryParams.jobName"}})],1),i("el-form-item",{staticStyle:{"margin-left":"20px"},attrs:{label:"定时状态",prop:"status"}},[i("el-select",{attrs:{placeholder:"请选择定时状态",clearable:"",size:"small"},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.dict.type.sys_job_status,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),i("el-form-item",[i("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),i("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),i("el-row",{staticClass:"mb8",attrs:{gutter:10}},[i("el-col",{attrs:{span:1.5}},[i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:job:add"],expression:"['iot:job:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),i("el-col",{attrs:{span:1.5}},[i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:job:edit"],expression:"['iot:job:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),i("el-col",{attrs:{span:1.5}},[i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:job:remove"],expression:"['iot:job:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),i("el-col",{attrs:{span:1.5}},[i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:job:export"],expression:"['iot:job:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),i("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.jobList,size:"mini"},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),i("el-table-column",{attrs:{label:"名称",align:"center",prop:"jobName","show-overflow-tooltip":!0}}),i("el-table-column",{attrs:{label:"描述",align:"center",prop:"cronText"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("div",{domProps:{innerHTML:e._s(e.formatCronDisplay(t.row))}})]}}])}),i("el-table-column",{attrs:{label:"CRON表达式",align:"center",prop:"cronExpression","show-overflow-tooltip":!0}}),i("el-table-column",{attrs:{label:"动作",align:"left",prop:"actions","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[i("div",{domProps:{innerHTML:e._s(e.formatActionsDisplay(t.row.actions))}})]}}])}),i("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-switch",{attrs:{"active-value":"0","inactive-value":"1","active-text":"启用"},on:{change:function(i){return e.handleStatusChange(t.row)}},model:{value:t.row.status,callback:function(i){e.$set(t.row,"status",i)},expression:"scope.row.status"}})]}}])}),i("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:job:edit"],expression:"['iot:job:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(i){return e.handleUpdate(t.row)}}},[e._v("修改")]),i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:job:query"],expression:"['iot:job:query']"}],attrs:{size:"mini",type:"text",icon:"el-icon-caret-right"},on:{click:function(i){return e.handleView(t.row)}}},[e._v("定时详细")]),i("br"),i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:job:remove"],expression:"['iot:job:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(i){return e.handleDelete(t.row)}}},[e._v("删除")]),i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:job:changeStatus"],expression:"['iot:job:changeStatus']"}],attrs:{size:"mini",type:"text",icon:"el-icon-caret-right"},on:{click:function(i){return e.handleRun(t.row)}}},[e._v("执行一次")])]}}])})],1),i("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),i("el-dialog",{attrs:{title:e.title,visible:e.open,width:"800px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[i("el-row",[i("el-col",{attrs:{span:15}},[i("el-form-item",{attrs:{label:"定时名称",prop:"jobName"}},[i("el-input",{attrs:{placeholder:"请输入定时名称"},model:{value:e.form.jobName,callback:function(t){e.$set(e.form,"jobName",t)},expression:"form.jobName"}})],1)],1),i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"执行时间",prop:"timerTimeValue"}},[i("el-time-picker",{staticStyle:{width:"354px"},attrs:{"value-format":"HH:mm",placeholder:"选择时间",disabled:1==e.form.isAdvance},on:{change:e.timeChange},model:{value:e.timerTimeValue,callback:function(t){e.timerTimeValue=t},expression:"timerTimeValue"}})],1)],1),i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"重复执行",prop:"timerWeek"}},[i("el-row",[i("el-col",{attrs:{span:4}},[i("el-select",{attrs:{placeholder:"请选择",disabled:1==e.form.isAdvance},on:{change:e.repeatChange},model:{value:e.timerRepeatValue,callback:function(t){e.timerRepeatValue=t},expression:"timerRepeatValue"}},e._l(e.timerRepeats,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),2==e.timerRepeatValue?i("el-col",{attrs:{span:15,offset:1}},[i("el-select",{staticStyle:{width:"485px"},attrs:{placeholder:"请选择",multiple:"",disabled:1==e.form.isAdvance},on:{change:e.weekChange},model:{value:e.timerWeekValue,callback:function(t){e.timerWeekValue=t},expression:"timerWeekValue"}},e._l(e.timerWeeks,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e()],1)],1)],1),i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"cron表达式",prop:""}},[i("el-row",[i("el-col",{attrs:{span:18}},[i("el-input",{attrs:{placeholder:"cron执行表达式",disabled:0==e.form.isAdvance},model:{value:e.form.cronExpression,callback:function(t){e.$set(e.form,"cronExpression",t)},expression:"form.cronExpression"}},[i("template",{slot:"append"},[i("el-button",{attrs:{type:"primary",disabled:0==e.form.isAdvance},on:{click:e.handleShowCron}},[e._v(" 生成表达式 "),i("i",{staticClass:"el-icon-time el-icon--right"})])],1)],2)],1),i("el-col",{attrs:{span:4,offset:1}},[i("el-checkbox",{attrs:{"true-label":1,"false-label":0},on:{change:e.customerCronChange},model:{value:e.form.isAdvance,callback:function(t){e.$set(e.form,"isAdvance",t)},expression:"form.isAdvance"}},[e._v("自定义表达式")])],1)],1)],1)],1),i("el-col",{attrs:{span:24}},[i("div",{staticStyle:{"padding-bottom":"15px",padding:"0 20px"}},[i("el-divider")],1),i("el-form-item",{attrs:{label:"执行动作"}},[e._l(e.actionList,(function(t,o){return i("el-row",{key:o+"action",staticStyle:{"margin-bottom":"10px"}},[i("el-col",{attrs:{span:4}},[i("el-select",{attrs:{placeholder:"请选择类别"},model:{value:t.type,callback:function(i){e.$set(t,"type",i)},expression:"actionItem.type"}},e._l(e.modelTypes,(function(e,t){return i("el-option",{key:t+"type",attrs:{label:e.label,value:e.value}})})),1)],1),i("el-col",{attrs:{span:4,offset:1}},[1==t.type?i("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){return e.thingsModelItemChange(t,o)}},model:{value:t.id,callback:function(i){e.$set(t,"id",i)},expression:"actionItem.id"}},e._l(e.thingsModel.properties,(function(e,t){return i("el-option",{key:t+"property",attrs:{label:e.name,value:e.id}})})),1):2==t.type?i("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){return e.thingsModelItemChange(t,o)}},model:{value:t.id,callback:function(i){e.$set(t,"id",i)},expression:"actionItem.id"}},e._l(e.thingsModel.functions,(function(e,t){return i("el-option",{key:t+"func",attrs:{label:e.name,value:e.id}})})),1):e._e()],1),i("el-col",{attrs:{span:10,offset:1}},[!t.thingsModelItem||"integer"!=t.thingsModelItem.datatype.type&&"decimal"!=t.thingsModelItem.datatype.type?t.thingsModelItem&&"bool"==t.thingsModelItem.datatype.type?i("span",[i("el-switch",{attrs:{"active-text":t.thingsModelItem.datatype.trueText,"inactive-text":t.thingsModelItem.datatype.falseText,"active-value":"1","inactive-value":"0"},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"actionItem.value"}})],1):t.thingsModelItem&&"enum"==t.thingsModelItem.datatype.type?i("span",[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"actionItem.value"}},e._l(t.thingsModelItem.datatype.enumList,(function(e,t){return i("el-option",{key:t+"things",attrs:{label:e.text,value:e.value}})})),1)],1):t.thingsModelItem&&"string"==t.thingsModelItem.datatype.type?i("span",[i("el-input",{attrs:{placeholder:"请输入字符串",max:t.thingsModelItem.datatype.maxLength},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"actionItem.value"}})],1):t.thingsModelItem&&"array"==t.thingsModelItem.datatype.type?i("span",[i("el-input",{attrs:{placeholder:"请输入英文逗号分隔的数组"},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"actionItem.value"}})],1):e._e():i("span",[i("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"值",max:t.thingsModelItem.datatype.max,min:t.thingsModelItem.datatype.min,type:"number"},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"actionItem.value"}}),i("el-input",{staticStyle:{width:"70px","margin-left":"15px"},attrs:{placeholder:"请输入整数或小数",disabled:""},model:{value:t.thingsModelItem.datatype.unit,callback:function(i){e.$set(t.thingsModelItem.datatype,"unit",i)},expression:"actionItem.thingsModelItem.datatype.unit"}})],1)]),0!=o?i("el-col",{attrs:{span:2,offset:1}},[i("a",{staticStyle:{color:"#F56C6C"},on:{click:function(t){return e.removeEnumItem(o)}}},[e._v("删除")])]):e._e()],1)})),i("div",[e._v("+ "),i("a",{staticStyle:{color:"#409EFF"},on:{click:function(t){return e.addEnumItem()}}},[e._v("添加执行动作")])])],2)],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"定时状态"}},[i("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.dict.type.sys_job_status,(function(t){return i("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)],1)],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",loading:e.submitButtonLoading},on:{click:e.submitForm}},[e._v("确 定")]),i("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),i("el-dialog",{staticClass:"scrollbar",attrs:{title:"Cron表达式生成器",visible:e.openCron,"append-to-body":"","destroy-on-close":""},on:{"update:visible":function(t){e.openCron=t}}},[i("crontab",{staticStyle:{"padding-bottom":"80px"},attrs:{expression:e.expression},on:{hide:function(t){e.openCron=!1},fill:e.crontabFill}})],1),i("el-dialog",{attrs:{title:"定时详细",visible:e.openView,width:"700px","append-to-body":""},on:{"update:visible":function(t){e.openView=t}}},[i("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px",size:"mini"}},[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"定时编号："}},[e._v(e._s(e.form.jobId))]),i("el-form-item",{attrs:{label:"定时名称："}},[e._v(e._s(e.form.jobName))])],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"定时分组："}},[e._v(e._s(e.jobGroupFormat(e.form)))]),i("el-form-item",{attrs:{label:"创建时间："}},[e._v(e._s(e.form.createTime))])],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"是否并发："}},[0==e.form.concurrent?i("div",[e._v("允许")]):1==e.form.concurrent?i("div",[e._v("禁止")]):e._e()])],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"cron表达式："}},[e._v(e._s(e.form.cronExpression))])],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"执行策略："}},[0==e.form.misfirePolicy?i("div",[e._v("默认策略")]):1==e.form.misfirePolicy?i("div",[e._v("立即执行")]):2==e.form.misfirePolicy?i("div",[e._v("执行一次")]):3==e.form.misfirePolicy?i("div",[e._v("放弃执行")]):e._e()])],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"下次执行时间："}},[e._v(e._s(e.parseTime(e.form.nextValidTime)))])],1),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"定时状态："}},[0==e.form.status?i("div",[e._v("正常")]):1==e.form.status?i("div",[e._v("暂停")]):e._e()])],1),i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"执行动作："}},[i("div",{staticStyle:{border:"1px solid #ddd",padding:"10px","border-radius":"5px",width:"465px"},domProps:{innerHTML:e._s(e.formatActionsDisplay(e.form.actions))}})])],1)],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.openView=!1}}},[e._v("关 闭")])],1)],1)],1)},a=[],n=i("5530"),r=(i("4de4"),i("d3b7"),i("d81d"),i("ac1f"),i("1276"),i("a9e3"),i("b0c0"),i("e9c4"),i("a434"),i("b775"));function s(e){return Object(r["a"])({url:"/iot/job/list",method:"get",params:e})}function l(e){return Object(r["a"])({url:"/iot/job/"+e,method:"get"})}function c(e){return Object(r["a"])({url:"/iot/job",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/iot/job",method:"put",data:e})}function d(e){return Object(r["a"])({url:"/iot/job/"+e,method:"delete"})}function m(e,t){var i={jobId:e,status:t};return Object(r["a"])({url:"/iot/job/changeStatus",method:"put",data:i})}function p(e,t){var i={jobId:e,jobGroup:t};return Object(r["a"])({url:"/iot/job/run",method:"put",data:i})}var f=i("bdd0"),h=i("01ca"),v={components:{Crontab:f["a"]},name:"device-timer",dicts:["sys_job_group","sys_job_status"],props:{device:{type:Object,default:null}},watch:{device:function(e,t){var i=this;this.deviceInfo=e,this.deviceInfo&&0!=this.deviceInfo.deviceId&&Object(h["b"])(this.deviceInfo.productId).then((function(e){i.thingsModel=JSON.parse(e.data),i.thingsModel.properties=i.thingsModel.properties.filter((function(e){return 0==e.isMonitor})),i.queryParams.deviceId=i.deviceInfo.deviceId,i.getList()}))}},data:function(){return{thingsModel:{},actionList:[],deviceInfo:{},loading:!1,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,jobList:[],title:"",open:!1,openView:!1,openCron:!1,expression:"",submitButtonLoading:!1,queryParams:{pageNum:1,pageSize:10,deviceId:0,jobName:void 0,jobGroup:void 0,status:void 0},timerRepeats:[{value:1,label:"每天"},{value:2,label:"指定"}],timerRepeatValue:1,timerWeeks:[{value:1,label:"周一"},{value:2,label:"周二"},{value:3,label:"周三"},{value:4,label:"周四"},{value:5,label:"周五"},{value:6,label:"周六"},{value:7,label:"周日"}],timerWeekValue:[1,2,3,4,5,6,7],timerTimeValue:"",modelTypes:[{value:1,label:"属性"},{value:2,label:"功能"}],form:{},rules:{jobName:[{required:!0,message:"定时名称不能为空",trigger:"blur"}],actions:[{required:!0,message:"执行动作不能为空",trigger:"blur"}],cronExpression:[{required:!0,message:"cron执行表达式不能为空",trigger:"blur"}]}}},created:function(){},methods:{getList:function(){var e=this;this.loading=!0,s(this.queryParams).then((function(t){e.jobList=t.rows,e.total=t.total,e.loading=!1}))},jobGroupFormat:function(e,t){return this.selectDictLabel(this.dict.type.sys_job_group,e.jobGroup)},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={jobId:void 0,jobName:void 0,cronExpression:void 0,status:"0",jobGroup:"DEFAULT",misfirePolicy:2,concurrent:1,isAdvance:0,jobType:1,productId:0,productName:"",sceneId:0,alertId:0,actions:""},this.submitButtonLoading=!1,this.timerRepeatValue=1,this.timerWeekValue=[1,2,3,4,5,6,7],this.timerTimeValue="",this.actionList=[{id:"",name:"",value:"",type:2,source:2,deviceId:this.deviceInfo.deviceId,deviceName:this.deviceInfo.deviceName,alertName:"",alertLevel:1,thingsModelItem:{id:"",name:"",datatype:{type:""}}}],this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.jobId})),this.single=1!=e.length,this.multiple=!e.length},handleStatusChange:function(e){var t=this,i="0"===e.status?"启用":"停用";this.$modal.confirm('确认要"'+i+'""'+e.jobName+'"定时吗？').then((function(){return m(e.jobId,e.status)})).then((function(){t.$modal.msgSuccess(i+"成功")})).catch((function(){e.status="0"===e.status?"1":"0"}))},handleRun:function(e){var t=this;this.$modal.confirm('确认要立即执行一次"'+e.jobName+'"定时吗？').then((function(){return p(e.jobId,e.jobGroup)})).then((function(){t.$modal.msgSuccess("执行成功")})).catch((function(){}))},handleView:function(e){var t=this;l(e.jobId).then((function(e){t.form=e.data,t.openView=!0}))},handleShowCron:function(){this.expression=this.form.cronExpression,this.openCron=!0},crontabFill:function(e){this.form.cronExpression=e},handleAdd:function(){this.reset(),this.open=!0,this.title="添加定时"},handleUpdate:function(e){var t=this;this.reset();var i=e.jobId||this.ids;l(i).then((function(e){t.form=e.data,t.actionList=JSON.parse(t.form.actions);for(var i=0;i<t.actionList.length;i++)if(1==t.actionList[i].type){for(var o=0;o<t.thingsModel.properties.length;o++)if(t.actionList[i].id==t.thingsModel.properties[o].id){t.actionList[i].thingsModelItem=t.thingsModel.properties[o];break}}else if(2==t.actionList[i].type)for(var a=0;a<t.thingsModel.functions.length;a++)if(t.actionList[i].id==t.thingsModel.functions[a].id){t.actionList[i].thingsModelItem=t.thingsModel.functions[a];break}if(0==t.form.isAdvance){"1,2,3,4,5,6,7"==t.form.cronExpression.substring(12)?t.timerRepeatValue=1:t.timerRepeatValue=2;var n=t.form.cronExpression.substring(12).split(",").map(Number);t.timerWeekValue=n,t.timerTimeValue=t.form.cronExpression.substring(5,7)+":"+t.form.cronExpression.substring(2,4)}t.open=!0,t.title="修改定时"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){if(t){if(0==e.form.isAdvance){if(""==e.timerTimeValue||null==e.timerTimeValue)return void e.$modal.alertError("执行时间不能空");if(2==e.timerRepeatValue&&(null==e.timerWeekValue||""==e.timerWeekValue))return void e.$modal.alertError("请选择要执行的星期")}else if(1==e.form.isAdvance&&""==e.form.cronExpression)return void e.$modal.alertError("cron表达式不能为空");for(var i=0;i<e.actionList.length;i++)if(""==e.actionList[i].id||""==e.actionList[i].name||""==e.actionList[i].value)return void e.$modal.alertError("执行动作中的选项和值不能为空");e.actionList[0].deviceId=e.deviceInfo.deviceId,e.actionList[0].deviceName=e.deviceInfo.deviceName;for(var o=0;o<e.actionList.length;o++)e.$delete(e.actionList[o],"thingsModelItem");e.form.actions=JSON.stringify(e.actionList),e.form.deviceId=e.deviceInfo.deviceId,e.form.deviceName=e.deviceInfo.deviceName,e.form.serialNumber=e.deviceInfo.serialNumber,e.form.productId=e.deviceInfo.productId,e.form.productName=e.deviceInfo.productName,console.log("this.form:",e.form),e.submitButtonLoading=!0,void 0!=e.form.jobId?u(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.submitButtonLoading=!1,e.open=!1,e.getList()})):c(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.submitButtonLoading=!1,e.open=!1,e.getList()}))}}))},handleDelete:function(e){var t=this,i=e.jobId||this.ids;this.$modal.confirm('是否确认删除定时定时编号为"'+i+'"的数据项？').then((function(){return d(i)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("iot/job/export",Object(n["a"])({},this.queryParams),"job_".concat((new Date).getTime(),".xlsx"))},addEnumItem:function(){this.actionList.push({id:"",name:"",value:"",type:2,source:2,deviceId:this.deviceInfo.deviceId,deviceName:this.deviceInfo.deviceName,alertName:"",alertLevel:1,thingsModelItem:{id:"",name:"",datatype:{type:""}}})},removeEnumItem:function(e){this.actionList.splice(e,1)},repeatChange:function(e){(1==e||2==e)&&(this.timerWeekValue=[1,2,3,4,5,6,7]),this.gentCronExpression()},weekChange:function(e){this.gentCronExpression()},timeChange:function(e){this.gentCronExpression()},customerCronChange:function(e){0==e&&this.gentCronExpression()},gentCronExpression:function(){var e="00",t="00";null!=this.timerTimeValue&&""!=this.timerTimeValue&&(e=this.timerTimeValue.substring(0,2),t=this.timerTimeValue.substring(3));var i="*";this.timerWeekValue.length>0&&(i=this.timerWeekValue),this.form.cronExpression="0 "+t+" "+e+" ? * "+i},thingsModelItemChange:function(e,t){if(this.actionList[t].value="",1==this.actionList[t].type){for(var i=0;i<this.thingsModel.properties.length;i++)if(this.thingsModel.properties[i].id==e){this.actionList[t].name=this.thingsModel.properties[i].name,this.actionList[t].thingsModelItem=this.thingsModel.properties[i];break}}else if(2==this.actionList[t].type)for(var o=0;o<this.thingsModel.functions.length;o++)if(this.thingsModel.functions[o].id==e){this.actionList[t].name=this.thingsModel.functions[o].name,this.actionList[t].thingsModelItem=this.thingsModel.functions[o];break}},formatActionsDisplay:function(e){if(null!=e&&""!=e){for(var t=JSON.parse(e),i="",o=0;o<t.length;o++){var a=t[o].value;if(1==t[o].type){for(var n=0;n<this.thingsModel.properties.length;n++)if(t[o].id==this.thingsModel.properties[n].id){if("decimal"==this.thingsModel.properties[n].datatype||"integer"==this.thingsModel.properties[n].datatype)a=t[o].value+this.thingsModel.properties[n].datatype.unit;else if("enum"==this.thingsModel.properties[n].datatype){for(var r=0;r<this.thingsModel.properties[n].datatype.enumList.length;r++)if(t[o].value==this.thingsModel.properties[n].datatype.enumList[r].value){a=this.thingsModel.properties[n].datatype.enumList[r].text;break}}else"bool"==this.thingsModel.properties[n].datatype&&(a="1"==t[o].value?this.thingsModel.properties[n].datatype.trueText:this.thingsModel.properties[n].datatype.falseText);break}}else if(2==t[o].type)for(var s=0;s<this.thingsModel.functions.length;s++)if(t[o].id==this.thingsModel.functions[s].id){if("decimal"==this.thingsModel.functions[s].datatype.type||"integer"==this.thingsModel.functions[s].datatype.type)a=t[o].value+this.thingsModel.functions[s].datatype.unit;else if("enum"==this.thingsModel.functions[s].datatype.type){for(var l=0;l<this.thingsModel.functions[s].datatype.enumList.length;l++)if(t[o].value==this.thingsModel.functions[s].datatype.enumList[l].value){a=this.thingsModel.functions[s].datatype.enumList[l].text;break}}else"bool"==this.thingsModel.functions[s].datatype.type&&(a="1"==t[o].value?this.thingsModel.functions[s].datatype.trueText:this.thingsModel.functions[s].datatype.falseText);break}i=i+t[o].name+'：</span><span style="color:#F56C6C">'+a+"</span><br />"}return i}},formatCronDisplay:function(e){var t="";if(0==e.isAdvance){var i='<br /><span style="color:#F56C6C">时间 '+e.cronExpression.substring(5,7)+":"+e.cronExpression.substring(2,4)+"</span>",o=e.cronExpression.substring(12);if("1,2,3,4,5,6,7"==o)t="每天 "+i;else{for(var a=o.split(","),n=0;n<a.length;n++)"1"==a[n]?t+="周一、":"2"==a[n]?t+="周二、":"3"==a[n]?t+="周三、":"4"==a[n]?t+="周四、":"5"==a[n]?t+="周五、":"6"==a[n]?t+="周六、":"7"==a[n]&&(t+="周日、");t=t.substring(0,t.length-1)+" "+i}}else t="自定义Cron表达式";return t}}},b=v,g=i("2877"),y=Object(g["a"])(b,o,a,!1,null,null,null);t["default"]=y.exports},addb:function(e,t,i){var o=i("f36a"),a=Math.floor,n=function(e,t){var i=e.length,l=a(i/2);return i<8?r(e,t):s(e,n(o(e,0,l),t),n(o(e,l),t),t)},r=function(e,t){var i,o,a=e.length,n=1;while(n<a){o=n,i=e[n];while(o&&t(e[o-1],i)>0)e[o]=e[--o];o!==n++&&(e[o]=i)}return e},s=function(e,t,i,o){var a=t.length,n=i.length,r=0,s=0;while(r<a||s<n)e[r+s]=r<a&&s<n?o(t[r],i[s])<=0?t[r++]:i[s++]:r<a?t[r++]:i[s++];return e};e.exports=n},d998:function(e,t,i){var o=i("342f");e.exports=/MSIE|Trident/.test(o)}}]);
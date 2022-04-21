(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05c003da","chunk-823020a0","chunk-2d0a3715"],{"01ca":function(e,t,o){"use strict";o.d(t,"f",(function(){return l})),o.d(t,"d",(function(){return n})),o.d(t,"a",(function(){return r})),o.d(t,"e",(function(){return i})),o.d(t,"g",(function(){return s})),o.d(t,"c",(function(){return c})),o.d(t,"b",(function(){return p}));var a=o("b775");function l(e){return Object(a["a"])({url:"/iot/model/list",method:"get",params:e})}function n(e){return Object(a["a"])({url:"/iot/model/"+e,method:"get"})}function r(e){return Object(a["a"])({url:"/iot/model",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/iot/model/import",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/iot/model",method:"put",data:e})}function c(e){return Object(a["a"])({url:"/iot/model/"+e,method:"delete"})}function p(e){return Object(a["a"])({url:"/iot/model/cache/"+e,method:"get"})}},"18bb":function(e,t,o){},"416d":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{"padding-left":"20px"}},[o("el-row",{staticClass:"mb8",attrs:{gutter:10}},[o("el-col",{attrs:{span:1.5}},[1==e.productInfo.status?o("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")]):e._e()],1),o("el-col",{attrs:{span:1.5}},[1==e.productInfo.status?o("el-button",{attrs:{type:"success",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleSelect}},[e._v("导入通用物模型")]):e._e()],1),o("el-col",{attrs:{span:1.5}},[o("el-button",{attrs:{type:"info",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleOpenThingsModel}},[e._v("查看物模型")])],1),o("el-col",{attrs:{span:1.5}},[o("el-link",{staticStyle:{"padding-top":"5px"},attrs:{type:"danger",underline:!1}},[e._v("注意：标识符不能重复")])],1),o("right-toolbar",{on:{queryTable:e.getList}})],1),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.modelList,border:""}},[o("el-table-column",{attrs:{label:"名称",align:"center",prop:"modelName"}}),o("el-table-column",{attrs:{label:"标识符",align:"center",prop:"identifier"}}),o("el-table-column",{attrs:{label:"首页显示",align:"center",prop:"isTop",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("dict-tag",{attrs:{options:e.dict.type.iot_yes_no,value:t.row.isTop}})]}}])}),o("el-table-column",{attrs:{label:"实时监测",align:"center",prop:"isMonitor",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("dict-tag",{attrs:{options:e.dict.type.iot_yes_no,value:t.row.isMonitor}})]}}])}),o("el-table-column",{attrs:{label:"物模型类别",align:"center",prop:"type"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("dict-tag",{attrs:{options:e.dict.type.iot_things_type,value:t.row.type}})]}}])}),o("el-table-column",{attrs:{label:"数据类型",align:"center",prop:"datatype"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("dict-tag",{attrs:{options:e.dict.type.iot_data_type,value:t.row.datatype}})]}}])}),o("el-table-column",{attrs:{label:"数据定义",align:"left","header-align":"center",prop:"specs","min-width":"150","class-name":"specsColor"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("div",{domProps:{innerHTML:e._s(e.formatSpecsDisplay(t.row.specs))}})]}}])}),o("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(o){return e.handleUpdate(t.row)}}},[e._v("修改")]),o("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(o){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),o("el-dialog",{attrs:{title:e.title,visible:e.open,width:"600px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[o("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"名称",prop:"modelName"}},[o("el-input",{attrs:{placeholder:"请输入物模型名称，例如：温度"},model:{value:e.form.modelName,callback:function(t){e.$set(e.form,"modelName",t)},expression:"form.modelName"}})],1),o("el-form-item",{attrs:{label:"标识符",prop:"identifier"}},[o("el-input",{attrs:{placeholder:"请输入标识符，例如：temperature"},model:{value:e.form.identifier,callback:function(t){e.$set(e.form,"identifier",t)},expression:"form.identifier"}})],1),o("el-form-item",{attrs:{label:"模型类别",prop:"type"}},[o("el-radio-group",{on:{change:function(t){return e.typeChange(e.form.type)}},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[o("el-radio-button",{attrs:{label:"1"}},[e._v("属性")]),o("el-radio-button",{attrs:{label:"2"}},[e._v("功能")]),o("el-radio-button",{attrs:{label:"3"}},[e._v("事件")])],1)],1),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:3!=e.form.type,expression:"form.type != 3"}],attrs:{label:"首页显示",prop:"isTop"}},[o("el-switch",{attrs:{"active-text":"","inactive-text":"","active-value":1,"inactive-value":0,"active-color":"#13ce66"},model:{value:e.form.isTop,callback:function(t){e.$set(e.form,"isTop",t)},expression:"form.isTop"}})],1),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1==e.form.type,expression:"form.type == 1"}],attrs:{label:"实时监测",prop:"isMonitor"}},[o("el-switch",{attrs:{"active-text":"","inactive-text":"","active-value":1,"inactive-value":0,"active-color":"#13ce66"},on:{change:function(t){return e.changeMonitor(e.form.isMonitor)}},model:{value:e.form.isMonitor,callback:function(t){e.$set(e.form,"isMonitor",t)},expression:"form.isMonitor"}})],1),o("el-divider"),o("el-form-item",{attrs:{label:"数据类型",prop:"datatype"}},[o("el-select",{attrs:{placeholder:"请选择数据类型"},on:{change:e.dataTypeChange},model:{value:e.form.datatype,callback:function(t){e.$set(e.form,"datatype",t)},expression:"form.datatype"}},[o("el-option",{key:"integer",attrs:{label:"整数",value:"integer"}}),o("el-option",{key:"decimal",attrs:{label:"小数",value:"decimal"}}),o("el-option",{key:"bool",attrs:{label:"布尔",value:"bool",disabled:1==e.form.isMonitor}}),o("el-option",{key:"enum",attrs:{label:"枚举",value:"enum",disabled:1==e.form.isMonitor}}),o("el-option",{key:"string",attrs:{label:"字符串",value:"string",disabled:1==e.form.isMonitor}}),o("el-option",{key:"array",attrs:{label:"数组",value:"array",disabled:1==e.form.isMonitor}})],1)],1),"integer"==e.form.datatype||"decimal"==e.form.datatype?o("div",[o("el-form-item",{attrs:{label:"取值范围"}},[o("el-row",[o("el-col",{attrs:{span:9}},[o("el-input",{attrs:{placeholder:"最小值",type:"number"},model:{value:e.form.specs.min,callback:function(t){e.$set(e.form.specs,"min",t)},expression:"form.specs.min"}})],1),o("el-col",{attrs:{span:2,align:"center"}},[e._v("到")]),o("el-col",{attrs:{span:9}},[o("el-input",{attrs:{placeholder:"最大值",type:"number"},model:{value:e.form.specs.max,callback:function(t){e.$set(e.form.specs,"max",t)},expression:"form.specs.max"}})],1)],1)],1),o("el-form-item",{attrs:{label:"单位"}},[o("el-input",{attrs:{placeholder:"请输入单位，例如：℃"},model:{value:e.form.specs.unit,callback:function(t){e.$set(e.form.specs,"unit",t)},expression:"form.specs.unit"}})],1),o("el-form-item",{attrs:{label:"步长"}},[o("el-input",{attrs:{placeholder:"请输入步长，例如：1",type:"number"},model:{value:e.form.specs.step,callback:function(t){e.$set(e.form.specs,"step",t)},expression:"form.specs.step"}})],1)],1):e._e(),"bool"==e.form.datatype?o("div",[o("el-form-item",{attrs:{label:"布尔值",prop:""}},[o("el-row",{staticStyle:{"margin-bottom":"10px"}},[o("el-col",{attrs:{span:11}},[o("el-input",{attrs:{placeholder:"0 对应的文本，例如：关闭"},model:{value:e.form.specs.falseText,callback:function(t){e.$set(e.form.specs,"falseText",t)},expression:"form.specs.falseText"}})],1),o("el-col",{attrs:{span:10,offset:1}},[e._v(" 0 对应文本")])],1),o("el-row",[o("el-col",{attrs:{span:11}},[o("el-input",{attrs:{placeholder:"1 对应的文本，例如：打开"},model:{value:e.form.specs.trueText,callback:function(t){e.$set(e.form.specs,"trueText",t)},expression:"form.specs.trueText"}})],1),o("el-col",{attrs:{span:10,offset:1}},[e._v(" 1 对应文本")])],1)],1)],1):e._e(),"enum"==e.form.datatype?o("div",[o("el-form-item",{attrs:{label:"枚举项",prop:""}},[e._l(e.form.specs.enumList,(function(t,a){return o("el-row",{key:a,staticStyle:{"margin-bottom":"10px"}},[o("el-col",{attrs:{span:8}},[o("el-input",{attrs:{placeholder:"参数值，例如：0",type:"number"},model:{value:t.value,callback:function(o){e.$set(t,"value",o)},expression:"item.value"}})],1),o("el-col",{attrs:{span:12,offset:1}},[o("el-input",{attrs:{placeholder:"参数描述，例如：中速档位"},model:{value:t.text,callback:function(o){e.$set(t,"text",o)},expression:"item.text"}})],1),0!=a?o("el-col",{attrs:{span:2,offset:1}},[o("a",{staticStyle:{color:"#F56C6C"},on:{click:function(t){return e.removeEnumItem(a)}}},[e._v("删除")])]):e._e()],1)})),o("div",[e._v("+ "),o("a",{staticStyle:{color:"#409EFF"},on:{click:function(t){return e.addEnumItem()}}},[e._v("添加枚举项")])])],2)],1):e._e(),"string"==e.form.datatype?o("div",[o("el-form-item",{attrs:{label:"最大长度",prop:""}},[o("el-input",{attrs:{placeholder:"请输入字符串最大长度，例如：1024",type:"number"},model:{value:e.form.specs.maxLength,callback:function(t){e.$set(e.form.specs,"maxLength",t)},expression:"form.specs.maxLength"}})],1)],1):e._e(),"array"==e.form.datatype?o("div",[o("el-form-item",{attrs:{label:"数组类型",prop:""}},[o("el-radio-group",{model:{value:e.form.specs.arrayType,callback:function(t){e.$set(e.form.specs,"arrayType",t)},expression:"form.specs.arrayType"}},[o("el-radio",{attrs:{label:"int"}},[e._v("int（整数）")]),o("el-radio",{attrs:{label:"double"}},[e._v("double（小数）")]),o("el-radio",{attrs:{label:"string"}},[e._v("string（字符串）")])],1)],1)],1):e._e()],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),o("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),o("el-dialog",{attrs:{title:e.title,visible:e.openSelect,width:"800px","append-to-body":""},on:{"update:visible":function(t){e.openSelect=t}}},[o("product-select-template",{ref:"productSelectTemplate",on:{idsToParentEvent:function(t){return e.getChildData(t)}}}),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:e.importSelect}},[e._v("导 入")]),o("el-button",{on:{click:e.cancelSelect}},[e._v("取 消")])],1)],1),o("el-dialog",{attrs:{title:e.title,visible:e.openThingsModel,width:"600px","append-to-body":""},on:{"update:visible":function(t){e.openThingsModel=t}}},[o("div",{staticStyle:{border:"1px solid #ccc","margin-top":"-15px",height:"600px",overflow:"scroll"}},[o("json-viewer",{attrs:{value:e.thingsModel,"expand-depth":10,copyable:""},scopedSlots:e._u([{key:"copy",fn:function(){return[e._v(" 复制 ")]},proxy:!0}])})],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"info"},on:{click:e.handleCloseThingsModel}},[e._v("关 闭")])],1)])],1)},l=[],n=o("5530"),r=(o("a9e3"),o("e9c4"),o("a434"),o("dbf4")),i=o("349e"),s=o.n(i),c=(o("0b22"),o("01ca")),p={name:"product-things-model",dicts:["iot_things_type","iot_data_type","iot_yes_no"],components:{productSelectTemplate:r["default"],JsonViewer:s.a},props:{product:{type:Object,default:null}},watch:{product:function(e,t){this.productInfo=e,this.productInfo&&0!=this.productInfo.productId&&(this.queryParams.productId=this.productInfo.productId,this.getList())}},data:function(){return{thingsModel:{},productInfo:{},templateIds:[],loading:!1,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,modelList:[],title:"",open:!1,openSelect:!1,openThingsModel:!1,queryParams:{productId:0},form:{},rules:{modelName:[{required:!0,message:"物模型名称不能为空",trigger:"blur"}],identifier:[{required:!0,message:"标识符，产品下唯一不能为空",trigger:"blur"}],type:[{required:!0,message:"模型类别不能为空",trigger:"change"}],datatype:[{required:!0,message:"数据类型不能为空",trigger:"change"}],specs:[{required:!0,message:"数据定义不能为空",trigger:"blur"}]}}},created:function(){},methods:{getList:function(){var e=this;this.loading=!0,Object(c["f"])(this.queryParams).then((function(t){e.modelList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={modelId:null,modelName:null,productId:null,productName:null,tenantId:null,tenantName:null,identifier:null,type:null,datatype:null,isSys:null,isTop:null,isMonitor:null,delFlag:null,createBy:null,createTime:null,updateBy:null,updateTime:null,remark:null,specs:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleAdd:function(){this.reset(),this.open=!0,this.title="添加物模型",this.form.type=1,this.form.datatype="integer",this.form.specs={enumList:[],arrayType:"int"}},handleUpdate:function(e){var t=this;this.reset();var o=e.modelId;Object(c["d"])(o).then((function(e){t.form=e.data,t.open=!0,t.title="修改物模型",t.form.specs=JSON.parse(t.form.specs)}))},handleOpenThingsModel:function(){this.title="物模型",this.thingsModel={properties:[],functions:[],events:[]};for(var e=0;e<this.modelList.length;e++){var t={};t.id=this.modelList[e].identifier,t.name=this.modelList[e].modelName,1==this.modelList[e].type?(t.isTop=this.modelList[e].isTop,t.isMonitor=this.modelList[e].isMonitor,t.datatype=JSON.parse(this.modelList[e].specs),this.thingsModel.properties.push(t)):2==this.modelList[e].type?(t.isTop=this.modelList[e].isTop,t.datatype=JSON.parse(this.modelList[e].specs),this.thingsModel.functions.push(t)):3==this.modelList[e].type&&(t.datatype=JSON.parse(this.modelList[e].specs),this.thingsModel.events.push(t))}this.openThingsModel=!0},handleCloseThingsModel:function(){this.openThingsModel=!1},handleSelect:function(){this.openSelect=!0,this.title="导入通用物模型",this.form.type=1,this.form.datatype="integer",this.form.specs={enumList:[]}},cancelSelect:function(){this.openSelect=!1,this.$refs.productSelectTemplate.$refs.selectTemplateTable.clearSelection()},getChildData:function(e){this.templateIds=e},importSelect:function(){var e=this;if(null!=this.templateIds&&this.templateIds.length>0){var t={productId:this.productInfo.productId,productName:this.productInfo.productName,templateIds:this.templateIds};Object(c["e"])(t).then((function(t){e.$modal.msgSuccess(t.msg),e.openSelect=!1,e.$refs.productSelectTemplate.$refs.selectTemplateTable.clearSelection(),e.getList()}))}},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.modelId?(e.form.specs=e.formatThingsSpecs(),2==e.form.type?e.form.isMonitor=0:3==e.form.type&&(e.form.isMonitor=0,e.form.isTop=0),Object(c["g"])(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()}))):(e.form.specs=e.formatThingsSpecs(),e.form.productId=e.productInfo.productId,e.form.productName=e.productInfo.productName,2==e.form.type?e.form.isMonitor=0:3==e.form.type&&(e.form.isMonitor=0,e.form.isTop=0),Object(c["a"])(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()}))))}))},handleDelete:function(e){var t=this,o=e.modelId;this.$modal.confirm('是否确认删除物模型编号为"'+o+'"的数据项？').then((function(){return Object(c["c"])(o)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("iot/model/export",Object(n["a"])({},this.queryParams),"model_".concat((new Date).getTime(),".xlsx"))},typeChange:function(e){2!=e&&3!=e||(this.form.isMonitor=0)},changeMonitor:function(e){1==e&&"integer"!=this.form.datatype&&"decimal"!=this.form.datatype&&(this.form.datatype="integer")},formatThingsSpecs:function(){var e={};return e.type=this.form.datatype,"integer"==this.form.datatype||"decimal"==this.form.datatype?(e.min=Number(this.form.specs.min),e.max=Number(this.form.specs.max),e.unit=this.form.specs.unit,e.step=Number(this.form.specs.step)):"string"==this.form.datatype?e.maxLength=Number(this.form.specs.maxLength):"bool"==this.form.datatype?(e.falseText=this.form.specs.falseText,e.trueText=this.form.specs.trueText):"array"==this.form.datatype?e.arrayType=this.form.specs.arrayType:"enum"==this.form.datatype&&(e.enumList=this.form.specs.enumList),JSON.stringify(e)},dataTypeChange:function(e){"enum"==e&&(this.form.specs.enumList=[{value:"",text:""}])},addEnumItem:function(){this.form.specs.enumList.push({value:"",text:""})},removeEnumItem:function(e){this.form.specs.enumList.splice(e,1)},formatSpecsDisplay:function(e){var t=JSON.parse(e);if("integer"===t.type||"decimal"===t.type)return"<span style='width:50%;display:inline-block;'>最大值：<span style=\"color:#F56C6C\">"+t.max+'</span></span>最小值：<span style="color:#F56C6C">'+t.min+"</span><br /><span style='width:50%;display:inline-block;'>步长：<span style=\"color:#F56C6C\">"+t.step+'</span></span>单位：<span style="color:#F56C6C">'+t.unit;if("string"===t.type)return'最大长度：<span style="color:#F56C6C">'+t.maxLength+"</span>";if("array"===t.type)return'数组类型：<span style="color:#F56C6C">'+t.arrayType+"</span>";if("enum"===t.type){for(var o="",a=0;a<t.enumList.length;a++)o=o+"<span style='width:50%;display:inline-block;'>"+t.enumList[a].value+"：<span style='color:#F56C6C'>"+t.enumList[a].text+"</span></span>",a>0&&a%2!=0&&(o+="<br />");return o}return"bool"===t.type?"<span style='width:50%;display:inline-block;'>0：<span style=\"color:#F56C6C\">"+t.falseText+'</span></span>1：<span style="color:#F56C6C">'+t.trueText:void 0}}},u=p,m=(o("9594"),o("2877")),d=Object(m["a"])(u,a,l,!1,null,null,null);t["default"]=d.exports},9594:function(e,t,o){"use strict";o("18bb")},cec4:function(e,t,o){"use strict";o.d(t,"d",(function(){return l})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){return r})),o.d(t,"e",(function(){return i})),o.d(t,"b",(function(){return s}));var a=o("b775");function l(e){return Object(a["a"])({url:"/iot/template/list",method:"get",params:e})}function n(e){return Object(a["a"])({url:"/iot/template/"+e,method:"get"})}function r(e){return Object(a["a"])({url:"/iot/template",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/iot/template",method:"put",data:e})}function s(e){return Object(a["a"])({url:"/iot/template/"+e,method:"delete"})}},dbf4:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{"margin-top":"-35px"}},[o("el-divider"),o("el-form",{ref:"product-select-template",attrs:{model:e.queryParams,inline:!0,"label-width":"48px"}},[o("el-form-item",{attrs:{label:"名称",prop:"templateName"}},[o("el-input",{attrs:{placeholder:"请输入物模型名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.templateName,callback:function(t){e.$set(e.queryParams,"templateName",t)},expression:"queryParams.templateName"}})],1),o("el-form-item",{attrs:{label:"类别",prop:"type"}},[o("el-select",{attrs:{placeholder:"请选择模型类别",clearable:"",size:"small"},model:{value:e.queryParams.type,callback:function(t){e.$set(e.queryParams,"type",t)},expression:"queryParams.type"}},e._l(e.dict.type.iot_things_type,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),o("el-form-item",[o("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),o("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"selectTemplateTable",attrs:{data:e.templateList,border:""},on:{"selection-change":e.handleSelectionChange}},[o("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),o("el-table-column",{attrs:{label:"名称",align:"center",prop:"templateName"}}),o("el-table-column",{attrs:{label:"标识符",align:"center",prop:"identifier"}}),o("el-table-column",{attrs:{label:"物模型类别",align:"center",prop:"type"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("dict-tag",{attrs:{options:e.dict.type.iot_things_type,value:t.row.type}})]}}])}),o("el-table-column",{attrs:{label:"首页显示",align:"center",prop:"isTop"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#81c0fb",disabled:""},model:{value:t.row.isTop,callback:function(o){e.$set(t.row,"isTop",o)},expression:"scope.row.isTop"}})]}}])}),o("el-table-column",{attrs:{label:"监测值",align:"center",prop:"isMonitor"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#81c0fb",disabled:""},model:{value:t.row.isMonitor,callback:function(o){e.$set(t.row,"isMonitor",o)},expression:"scope.row.isMonitor"}})]}}])}),o("el-table-column",{attrs:{label:"数据类型",align:"center",prop:"datatype"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("dict-tag",{attrs:{options:e.dict.type.iot_data_type,value:t.row.datatype}})]}}])})],1),o("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)},l=[],n=(o("b0c0"),o("d81d"),o("cec4")),r={name:"product-select-template",dicts:["iot_things_type","iot_data_type","iot_yes_no"],data:function(){return{ids:[],single:!0,multiple:!0,total:0,templateList:[],queryParams:{pageNum:1,pageSize:10,templateName:null,type:null,tenantName:""}}},created:function(){this.getList(),this.ids=[]},methods:{getList:function(){var e=this;this.loading=!0,-1===this.$store.state.user.roles.indexOf("admin")&&(this.queryParams.tenantName=this.$store.state.user.name),Object(n["d"])(this.queryParams).then((function(t){e.templateList=t.rows,e.total=t.total,e.loading=!1}))},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.templateId})),this.single=1!==e.length,this.multiple=!e.length,this.$emit("idsToParentEvent",this.ids)}}},i=r,s=o("2877"),c=Object(s["a"])(i,a,l,!1,null,null,null);t["default"]=c.exports}}]);
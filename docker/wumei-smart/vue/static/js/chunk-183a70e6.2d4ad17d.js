(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-183a70e6"],{"1cfd":function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"e",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"f",(function(){return s})),a.d(t,"b",(function(){return u}));var r=a("b775");function n(e){return Object(r["a"])({url:"/iot/newsCategory/list",method:"get",params:e})}function l(){return Object(r["a"])({url:"/iot/newsCategory/newsCategoryShortList",method:"get"})}function i(e){return Object(r["a"])({url:"/iot/newsCategory/"+e,method:"get"})}function o(e){return Object(r["a"])({url:"/iot/newsCategory",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/iot/newsCategory",method:"put",data:e})}function u(e){return Object(r["a"])({url:"/iot/newsCategory/"+e,method:"delete"})}},"8eba":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,inline:!0,"label-width":"60px"}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入标题",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.title,callback:function(t){e.$set(e.queryParams,"title",t)},expression:"queryParams.title"}})],1),a("el-form-item",{attrs:{label:"分类",prop:"categoryName"}},[a("el-input",{attrs:{placeholder:"请输入分类名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.categoryName,callback:function(t){e.$set(e.queryParams,"categoryName",t)},expression:"queryParams.categoryName"}})],1),a("el-form-item",{attrs:{label:"置顶",prop:"isTop"}},[a("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"是否置顶",clearable:"",size:"small"},model:{value:e.queryParams.isTop,callback:function(t){e.$set(e.queryParams,"isTop",t)},expression:"queryParams.isTop"}},e._l(e.dict.type.iot_yes_no,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"轮播",prop:"isBanner"}},[a("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"是否轮播",clearable:"",size:"small"},model:{value:e.queryParams.isBanner,callback:function(t){e.$set(e.queryParams,"isBanner",t)},expression:"queryParams.isBanner"}},e._l(e.dict.type.iot_yes_no,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"发布",prop:"status"}},[a("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"选择状态",clearable:"",size:"small"},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.dict.type.iot_yes_no,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:news:add"],expression:"['iot:news:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:news:edit"],expression:"['iot:news:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:news:remove"],expression:"['iot:news:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:news:export"],expression:"['iot:news:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),a("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.newsList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"图片",align:"center",prop:"imgUrl",width:"140px;"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{"border-radius":"5px",height:"60px",width:"120px","margin-bottom":"-5px"},attrs:{lazy:"","preview-src-list":[e.baseUrl+t.row.imgUrl],src:e.baseUrl+t.row.imgUrl,fit:"cover"}})]}}])}),a("el-table-column",{attrs:{label:"标题",align:"center",prop:"title"}}),a("el-table-column",{attrs:{label:"作者",align:"center",prop:"author"}}),a("el-table-column",{attrs:{label:"分类",align:"center",prop:"categoryName"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:"info"}},[e._v(e._s(t.row.categoryName))])]}}])}),a("el-table-column",{attrs:{label:"置顶",align:"center",prop:"isTop"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.iot_yes_no,value:t.row.isTop}})]}}])}),a("el-table-column",{attrs:{label:"轮播",align:"center",prop:"isBanner"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.iot_yes_no,value:t.row.isBanner}})]}}])}),a("el-table-column",{attrs:{label:"发布",align:"center",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.iot_yes_no,value:t.row.status}})]}}])}),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.createTime,"{y}-{m}-{d}")))])]}}])}),a("el-table-column",{attrs:{label:"备注",align:"center",prop:"remark"}}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:news:edit"],expression:"['iot:news:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改")]),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:news:remove"],expression:"['iot:news:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"800px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"60px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"作者",prop:"author"}},[a("el-input",{attrs:{placeholder:"请输入作者"},model:{value:e.form.author,callback:function(t){e.$set(e.form,"author",t)},expression:"form.author"}})],1),a("el-form-item",{attrs:{label:"摘要",prop:"remark"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入内容",rows:"3"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"置顶",prop:"isTop"}},[a("el-switch",{attrs:{"active-text":"","inactive-text":"","active-value":1,"inactive-value":0},model:{value:e.form.isTop,callback:function(t){e.$set(e.form,"isTop",t)},expression:"form.isTop"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"轮播",prop:"isBanner"}},[a("el-switch",{attrs:{"active-text":"","inactive-text":"","active-value":1,"inactive-value":0},model:{value:e.form.isBanner,callback:function(t){e.$set(e.form,"isBanner",t)},expression:"form.isBanner"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"发布",prop:"status"}},[a("el-switch",{attrs:{"active-text":"","inactive-text":"","active-value":1,"inactive-value":0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)],1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"分类",prop:"categoryId"}},[a("el-select",{attrs:{placeholder:"请选择分类"},on:{change:e.selectCategory},model:{value:e.form.categoryId,callback:function(t){e.$set(e.form,"categoryId",t)},expression:"form.categoryId"}},e._l(e.categoryList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"图片"}},[a("imageUpload",{ref:"image-upload",attrs:{value:e.form.imgUrl,limit:1,fileSize:1},on:{input:function(t){return e.getImagePath(t)}}})],1)],1)],1),a("el-form-item",{attrs:{label:"内容"}},[a("editor",{attrs:{"min-height":192},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},n=[],l=a("5530"),i=(a("d81d"),a("b0c0"),a("b775"));function o(e){return Object(i["a"])({url:"/iot/news/list",method:"get",params:e})}function s(e){return Object(i["a"])({url:"/iot/news/"+e,method:"get"})}function u(e){return Object(i["a"])({url:"/iot/news",method:"post",data:e})}function c(e){return Object(i["a"])({url:"/iot/news",method:"put",data:e})}function m(e){return Object(i["a"])({url:"/iot/news/"+e,method:"delete"})}var p=a("1cfd"),d=a("0835"),f={name:"News",dicts:["iot_yes_no"],components:{imageUpload:d["a"]},data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,newsList:[],title:"",open:!1,categoryList:[],queryParams:{pageNum:1,pageSize:10,title:null,isTop:null,isBanner:null,categoryName:null,status:null},form:{},baseUrl:"/prod-api",rules:{title:[{required:!0,message:"标题不能为空",trigger:"blur"}],content:[{required:!0,message:"内容不能为空",trigger:"blur"}],categoryId:[{required:!0,message:"分类不能为空",trigger:"blur"}],author:[{required:!0,message:"作者不能为空",trigger:"blur"}]}}},created:function(){var e=this;this.getList(),Object(p["e"])().then((function(t){e.categoryList=t.data}))},methods:{getList:function(){var e=this;this.loading=!0,o(this.queryParams).then((function(t){e.newsList=t.rows,e.total=t.total,e.loading=!1}))},getImagePath:function(e){this.form.imgUrl=e},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={newsId:null,title:null,content:"暂无内容",imgUrl:"",isTop:null,isBanner:null,categoryId:null,categoryName:null,status:null,author:null,delFlag:null,createBy:null,createTime:null,updateBy:null,updateTime:null,remark:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.newsId})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加新闻资讯"},handleUpdate:function(e){var t=this;this.reset();var a=e.newsId||this.ids;s(a).then((function(e){t.form=e.data,t.open=!0,t.title="修改新闻资讯"}))},submitForm:function(){var e=this;console.log(this.form),null!=this.form.imgUrl&&""!=this.form.imgUrl?this.$refs["form"].validate((function(t){t&&(null!=e.form.newsId?c(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):u(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))})):this.$modal.msgError("请上传图片")},handleDelete:function(e){var t=this,a=e.newsId||this.ids;this.$modal.confirm('是否确认删除新闻资讯编号为"'+a+'"的数据项？').then((function(){return m(a)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("iot/news/export",Object(l["a"])({},this.queryParams),"news_".concat((new Date).getTime(),".xlsx"))},selectCategory:function(e){for(var t=0;t<this.categoryList.length;t++)if(this.categoryList[t].id==e)return void(this.form.categoryName=this.categoryList[t].name)}}},h=f,g=a("2877"),y=Object(g["a"])(h,r,n,!1,null,null,null);t["default"]=y.exports}}]);
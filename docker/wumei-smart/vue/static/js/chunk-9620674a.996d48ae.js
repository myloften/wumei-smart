(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9620674a","chunk-e14bc6fc","chunk-2d0a3715"],{"01ca":function(t,e,i){"use strict";i.d(e,"f",(function(){return s})),i.d(e,"d",(function(){return o})),i.d(e,"a",(function(){return l})),i.d(e,"e",(function(){return a})),i.d(e,"g",(function(){return c})),i.d(e,"c",(function(){return r})),i.d(e,"b",(function(){return u}));var n=i("b775");function s(t){return Object(n["a"])({url:"/iot/model/list",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/iot/model/"+t,method:"get"})}function l(t){return Object(n["a"])({url:"/iot/model",method:"post",data:t})}function a(t){return Object(n["a"])({url:"/iot/model/import",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/iot/model",method:"put",data:t})}function r(t){return Object(n["a"])({url:"/iot/model/"+t,method:"delete"})}function u(t){return Object(n["a"])({url:"/iot/model/cache/"+t,method:"get"})}},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"584f":function(t,e,i){"use strict";i.d(e,"g",(function(){return s})),i.d(e,"f",(function(){return o})),i.d(e,"d",(function(){return l})),i.d(e,"e",(function(){return a})),i.d(e,"a",(function(){return c})),i.d(e,"h",(function(){return r})),i.d(e,"b",(function(){return u})),i.d(e,"c",(function(){return d}));var n=i("b775");function s(t){return Object(n["a"])({url:"/iot/device/shortList",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/iot/device/all",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/iot/device/"+t,method:"get"})}function a(t){return Object(n["a"])({url:"/iot/device/runningStatus/"+t,method:"get"})}function c(t){return Object(n["a"])({url:"/iot/device",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/iot/device",method:"put",data:t})}function u(t){return Object(n["a"])({url:"/iot/device/"+t,method:"delete"})}function d(){return Object(n["a"])({url:"/iot/device/generator",method:"get"})}},"5f43":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"padding-left":"20px"}},[i("el-row",{attrs:{gutter:80}},[i("el-col",{attrs:{xs:24,sm:24,md:24,lg:10,xl:10}},[i("el-descriptions",{attrs:{column:1,border:"",title:t.title}},[i("el-descriptions-item",{attrs:{labelStyle:t.statusColor}},[i("template",{slot:"label"},[i("svg-icon",{attrs:{"icon-class":"ota"}}),t._v(" OTA升级 ")],1),i("el-link",{staticStyle:{"line-height":"28px","font-size":"16px","padding-right":"10px"},attrs:{underline:!1}},[t._v("Version "+t._s(t.deviceInfo.firmwareVersion))]),i("el-link",{staticStyle:{"font-size":"12px",display:"none"},attrs:{type:"success",underline:!1}},[t._v("已经是最新版本")]),i("el-button",{staticStyle:{float:"right"},attrs:{type:"success",size:"mini",disabled:3!=t.deviceInfo.status},on:{click:function(e){return t.otaUpgrade()}}},[t._v("升级")])],2),t._l(t.deviceInfo.boolList,(function(e,n){return i("el-descriptions-item",{key:n,attrs:{labelStyle:t.statusColor}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-open"}),t._v(" "+t._s(e.name)+" ")]),i("el-switch",{staticStyle:{"min-width":"100px"},attrs:{"active-text":"","inactive-text":"","active-value":"1","inactive-value":"0",disabled:t.shadowUnEnable},on:{change:function(i){return t.publishThingsModel(t.deviceInfo,e)}},model:{value:e.shadow,callback:function(i){t.$set(e,"shadow",i)},expression:"item.shadow"}})],2)})),t._l(t.deviceInfo.enumList,(function(e,n){return i("el-descriptions-item",{key:n,attrs:{labelStyle:t.statusColor}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-s-unfold"}),t._v(" "+t._s(e.name)+" ")]),i("el-select",{attrs:{placeholder:"请选择",clearable:"",disabled:t.shadowUnEnable},on:{change:function(i){return t.publishThingsModel(t.deviceInfo,e)}},model:{value:e.shadow,callback:function(i){t.$set(e,"shadow",i)},expression:"item.shadow"}},t._l(e.enumList,(function(t){return i("el-option",{key:t.value,attrs:{label:t.text,value:t.value}})})),1)],2)})),t._l(t.deviceInfo.stringList,(function(e,n){return i("el-descriptions-item",{key:n,attrs:{labelStyle:t.statusColor}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-tickets"}),t._v(" "+t._s(e.name)+" ")]),i("el-input",{attrs:{placeholder:"请输入字符串",disabled:t.shadowUnEnable},model:{value:e.shadow,callback:function(i){t.$set(e,"shadow",i)},expression:"item.shadow"}},[i("el-button",{staticStyle:{"font-size":"20px"},attrs:{slot:"append",icon:"el-icon-s-promotion",title:"指令发送"},on:{click:function(i){return t.publishThingsModel(t.deviceInfo,e)}},slot:"append"})],1)],2)})),t._l(t.deviceInfo.arrayList,(function(e,n){return i("el-descriptions-item",{key:n,attrs:{labelStyle:t.statusColor}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-tickets"}),t._v(" "+t._s(e.name)+" ")]),i("el-input",{attrs:{placeholder:"请输入英文逗号分隔的字符串",disabled:t.shadowUnEnable},model:{value:e.shadow,callback:function(i){t.$set(e,"shadow",i)},expression:"item.shadow"}},[i("el-button",{staticStyle:{"font-size":"20px"},attrs:{slot:"append",icon:"el-icon-s-promotion",title:"指令发送"},on:{click:function(i){return t.publishThingsModel(t.deviceInfo,e)}},slot:"append"})],1)],2)})),t._l(t.deviceInfo.decimalList,(function(e,n){return i("el-descriptions-item",{key:n,attrs:{labelStyle:t.statusColor}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-star-off"}),t._v(" "+t._s(e.name)+" ")]),i("el-input",{attrs:{type:"number",placeholder:"请输入小数 ",disabled:t.shadowUnEnable},model:{value:e.shadow,callback:function(i){t.$set(e,"shadow",i)},expression:"item.shadow"}},[i("el-button",{staticStyle:{"font-size":"20px"},attrs:{slot:"append",icon:"el-icon-s-promotion",title:"指令发送"},on:{click:function(i){return t.publishThingsModel(t.deviceInfo,e)}},slot:"append"})],1)],2)})),t._l(t.deviceInfo.integerList,(function(e,n){return i("el-descriptions-item",{key:n,attrs:{labelStyle:t.statusColor}},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-paperclip"}),t._v(" "+t._s(e.name)+" ")]),i("el-input",{attrs:{type:"integer",placeholder:"请输入整数 ",disabled:t.shadowUnEnable},model:{value:e.shadow,callback:function(i){t.$set(e,"shadow",i)},expression:"item.shadow"}},[i("el-button",{staticStyle:{"font-size":"20px"},attrs:{slot:"append",icon:"el-icon-s-promotion",title:"指令发送"},on:{click:function(i){return t.publishThingsModel(t.deviceInfo,e)}},slot:"append"})],1)],2)}))],2),i("el-descriptions",{staticStyle:{margin:"40px 0"},attrs:{column:2,border:"",title:"监测数据"}},t._l(t.deviceInfo.readOnlyList,(function(e,n){return i("el-descriptions-item",{key:n},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-odometer"}),t._v(" "+t._s(e.name)+" ")]),i("el-link",{attrs:{type:"primary",underline:!1}},[t._v(t._s(e.shadow)+" "+t._s(null==e.unit?"":e.unit))])],2)})),1),1==t.deviceInfo.isShadow&&3!=t.deviceInfo.status?i("el-descriptions",{attrs:{column:1,border:"",size:"mini"}},[i("template",{slot:"title"},[i("span",{staticStyle:{"font-size":"14px",color:"#606266"}},[t._v("设备处于离线状态")])]),t._l(t.deviceInfo.boolList,(function(e,n){return i("el-descriptions-item",{key:n},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-open"}),t._v(" "+t._s(e.name)+" ")]),i("el-switch",{staticStyle:{"min-width":"100px"},attrs:{size:"mini","active-text":"","inactive-text":"","active-value":"1","inactive-value":"0",disabled:""},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}})],2)})),t._l(t.deviceInfo.enumList,(function(e,n){return i("el-descriptions-item",{key:n},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-s-unfold"}),t._v(" "+t._s(e.name)+" ")]),i("el-select",{attrs:{placeholder:"请选择",clearable:"",size:"mini",disabled:""},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}},t._l(e.enumList,(function(t){return i("el-option",{key:t.value,attrs:{label:t.text,value:t.value}})})),1)],2)})),t._l(t.deviceInfo.stringList,(function(e,n){return i("el-descriptions-item",{key:n},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-tickets"}),t._v(" "+t._s(e.name)+" ")]),i("el-input",{attrs:{placeholder:"请输入字符串",size:"mini",disabled:""},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}})],2)})),t._l(t.deviceInfo.arrayList,(function(e,n){return i("el-descriptions-item",{key:n},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-tickets"}),t._v(" "+t._s(e.name)+" ")]),i("el-input",{attrs:{placeholder:"请输入英文逗号分隔的字符串",size:"mini",disabled:""},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}})],2)})),t._l(t.deviceInfo.decimalList,(function(e,n){return i("el-descriptions-item",{key:n},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-star-off"}),t._v(" "+t._s(e.name)+" ")]),i("el-input",{attrs:{type:"number",placeholder:"请输入小数",size:"mini",disabled:""},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}})],2)})),t._l(t.deviceInfo.integerList,(function(e,n){return i("el-descriptions-item",{key:n},[i("template",{slot:"label"},[i("i",{staticClass:"el-icon-paperclip"}),t._v(" "+t._s(e.name)+" ")]),i("el-input",{attrs:{type:"integer",placeholder:"请输入整数 ",size:"mini",disabled:""},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}})],2)}))],2):t._e(),i("mqtt-client",{ref:"mqttClient",attrs:{publish:t.publish,subscribes:t.subscribes},on:{callbackEvent:function(e){return t.mqttCallback(e)}}})],1),i("el-col",{attrs:{xs:24,sm:24,md:24,lg:14,xl:14}},[i("el-row",{staticStyle:{"background-color":"#F5F7FA",padding:"20px","padding-left":"10px"},attrs:{gutter:20}},t._l(t.deviceInfo.readOnlyList,(function(t,e){return i("el-col",{key:e,staticStyle:{"margin-bottom":"20px"},attrs:{xs:24,sm:12,md:12,lg:12,xl:8}},[i("el-card",{staticStyle:{"border-radius":"30px"},attrs:{shadow:"hover"}},[i("div",{ref:"map",refInFor:!0,staticStyle:{height:"230px",width:"180px",margin:"0 auto","margin-top":"-10px"}})])],1)})),1)],1)],1)],1)},s=[],o=(i("b0c0"),i("ac1f"),i("1276"),i("d81d"),i("584f")),l=i("01ca"),a=i("313e"),c=i("7d04"),r={name:"running-status",dicts:["iot_yes_no"],components:{mqttClient:c["default"]},props:{device:{type:Object,default:null}},watch:{device:function(t,e){var i=this;this.deviceInfo=t,this.deviceInfo&&0!=this.deviceInfo.deviceId&&Object(o["e"])(this.deviceInfo.deviceId).then((function(t){i.deviceInfo=t.data,i.updateDeviceStatus(i.deviceInfo),i.$nextTick((function(){this.MonitorChart()})),i.mqttSubscribe(i.deviceInfo)}))}},data:function(){return{publish:{},subscribes:[],title:"设备控制 ",shadowUnEnable:!1,statusColor:{background:"#67C23A",color:"#fff"},loading:!0,deviceInfo:{boolList:[],enumList:[],stringList:[],integerList:[],decimalList:[],arrayList:[],readonlyList:[]}}},created:function(){},methods:{publishThingsModel:function(t,e){var i=this;Object(l["b"])(t.productId).then((function(n){for(var s=JSON.parse(n.data),o=0,l=0;l<s.functions.length;l++)if(e.id==s.functions[l].id){o=2;break}if(0==o)for(var a=0;a<s.properties.length;a++)if(e.id==s.properties[a].id){o=1;break}0!=o&&i.mqttPublish(o,t,e)}))},mqttPublish:function(t,e,i){var n="",s="";if(1==t)3==e.status?n="/"+e.productId+"/"+e.serialNumber+"/property-online/get":e.isShadow&&(n="/"+e.productId+"/"+e.serialNumber+"/property-offline/post"),s='[{"id":"'+i.id+'","value":"'+i.shadow+'"}]';else if(2==t)3==e.status?n="/"+e.productId+"/"+e.serialNumber+"/function-online/get":e.isShadow&&(n="/"+e.productId+"/"+e.serialNumber+"/function-offline/post"),s='[{"id":"'+i.id+'","value":"'+i.shadow+'"}]';else{if(3!=t)return;n="/"+e.productId+"/"+e.serialNumber+"/ota/get",s='{"version":'+e.firmwareVersion+"}"}""!=n&&(this.publish={topic:n,message:s,name:i.name})},mqttCallback:function(t){var e=[];e=t.topic.split("/");e[1],e[2];"status"==e[3]&&(this.deviceInfo.status=t.message.status,this.deviceInfo.isShadow=t.message.isShadow,this.updateDeviceStatus(this.deviceInfo))},mqttSubscribe:function(t){var e="/"+t.productId+"/"+t.serialNumber+"/status/post";this.subscribes=[e]},updateDeviceStatus:function(t){3==t.status?(this.statusColor.background="#12d09f",this.title="设备控制（在线）"):1==t.isShadow?(this.statusColor.background="#409EFF",this.title="设备控制（影子模式）"):(this.statusColor.background="#909399",this.title="设备控制（设备不在线 未启用影子）",this.shadowUnEnable=!0)},otaUpgrade:function(){var t={name:"设备升级"};this.mqttPublish(3,this.deviceInfo,t)},MonitorChart:function(){for(var t=0;t<this.deviceInfo.readOnlyList.length;t++){var e,i=a["init"](this.$refs.map[t]);e={tooltip:{formatter:" {b} <br/> {c}"+this.deviceInfo.readOnlyList[t].unit},series:[{name:this.deviceInfo.readOnlyList[t].type,type:"gauge",min:this.deviceInfo.readOnlyList[t].min,max:this.deviceInfo.readOnlyList[t].max,colorBy:"data",splitNumber:10,radius:"100%",splitLine:{distance:4},axisLabel:{fontSize:10,distance:10},axisTick:{distance:4},axisLine:{lineStyle:{width:8,color:[[.2,"#409EFF"],[.8,"#12d09f"],[1,"#F56C6C"]],opacity:.3}},pointer:{icon:"triangle",length:"60%",width:7},progress:{show:!0,width:8},detail:{valueAnimation:!0,formatter:"{value} "+this.deviceInfo.readOnlyList[t].unit,offsetCenter:[0,"80%"],fontSize:20},data:[{value:this.deviceInfo.readOnlyList[t].shadow,name:this.deviceInfo.readOnlyList[t].name}],title:{offsetCenter:[0,"115%"],fontSize:16}}]},e&&i.setOption(e)}}}},u=r,d=i("2877"),f=Object(d["a"])(u,n,s,!1,null,null,null);e["default"]=f.exports},6:function(t,e){},"7d04":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span")},s=[],o=(i("b0c0"),i("d3b7"),i("25f0"),i("a15b"),i("e7fc")),l=i.n(o),a=i("5f87"),c={name:"mqttClient",props:{publish:{type:Object,default:null},subscribes:{type:Array,default:null}},watch:{publish:function(t,e){this.mqttPublish(t.topic,t.message,t.name)},subscribes:function(t,e){this.connectMqtt(t)}},data:function(){return{deviceInfo:{}}},created:function(){},methods:{connectMqtt:function(t){var e=this,i={username:"wumei-smart",password:Object(a["a"])(),cleanSession:!1,keepAlive:30,clientId:"web-"+Math.random().toString(16).substr(2),connectTimeout:6e4},n="ws://"+window.location.hostname+":8083/mqtt";console.log("mqtt地址：",n),this.client=l.a.connect(n,i),this.client.on("connect",(function(i){console.log("成功连接服务器:",i),e.client.subscribe(t,{qos:1},(function(e){e?console.log("消息订阅失败！"):(console.log("订阅成功"),console.log(t.join(", ")))}))})),this.reconnectMqtt(),this.mqttError(),this.mqttSubscribe()},mqttPublish:function(t,e,i){var n=this;if(!this.client.connected)return console.log("客户端未连接"),void this.$modal.notifyError("Mqtt客户端未连接");this.client.publish(t,e,{qos:1},(function(s){s||(console.log("成功发布主题："+t),console.log("主题内容："+e),n.$modal.notifySuccess("[ "+i+" ] 指令发送成功"))}))},mqttSubscribe:function(){var t=this;this.client.on("message",(function(e,i){console.log("收到来自",e,"的信息",i.toString());var n={};n.topic=e,n.message=JSON.parse(i.toString()),t.$emit("callbackEvent",n)}))},mqttError:function(){var t=this;this.client.on("error",(function(e){console.log("连接失败：",e),t.$modal.notifyError("Mqtt客户端连接失败"),t.client.end()}))},unsubscribeMqtt:function(){var t=this;this.client.unsubscribe(this.mtopic,(function(e){console.log("主题为"+t.mtopic+"取消订阅成功",e)}))},unconnectMqtt:function(){this.client.end(),this.client=null,console.log("服务器已断开连接！"),this.$modal.notifyError("Mqtt服务器已断开连接！")},reconnectMqtt:function(){this.client.on("reconnect",(function(t){console.log("正在重连:",t)}))}}},r=c,u=i("2877"),d=Object(u["a"])(r,n,s,!1,null,null,null);e["default"]=d.exports}}]);
import{C as w,r as K,c as o,e as k,g as e,h as a,o as C,i as n,s as I,E as T,_ as x}from"./index.835d0f58.js";const R={class:"account-message-detail"},m=400;var S={__name:"detail",setup(N){const l=w({times:[],orderId:"",orderName:"",payStatus:1,orderStatus:1}),s=[];for(let t=0;t<m;t++)s.push({index:t+1,errorInfo:[][t%4],orderId:[5741607345621,5741607345621,5741607345621,5741607345621][t%4],payType:["\u652F\u4ED8\u5B9D","\u5FAE\u4FE1","\u652F\u4ED8\u5B9D","\u5FAE\u4FE1"][t%4],createTime:["2022-02-16 13:12:14","2022-02-16 13:12:14","2022-02-16 13:12:14","2022-02-16 13:12:14","2022-02-16 13:12:14"][t%4]});const _=K([{colKey:"createTime",title:"\u5BF9\u8D26\u65E5\u671F",width:"150",align:"center"},{colKey:"bank",title:"\u94F6\u884C",align:"center"},{colKey:"store",title:"\u5546\u6237",align:"center"},{colKey:"hospitalIncome",title:"\u533B\u9662\u6536\u5165",align:"center"},{colKey:"platformIncome",title:"\u5E73\u53F0\u6536\u5165",align:"center"},{colKey:"payType",title:"\u652F\u4ED8\u65B9\u5F0F",align:"center"},{colKey:"shortfall",title:"\u5DEE\u989D",align:"center"},{colKey:"diffNum",title:"\u5DEE\u5F02\u7B14\u6570",align:"center"},{colKey:"handledNum",title:"\u5DF2\u5904\u7406\u7B14\u6570",align:"center"},{colKey:"accountResult",title:"\u5BF9\u8D26\u7ED3\u679C",align:"center"},{colKey:"handleResult",title:"\u5904\u7406\u7ED3\u679C",align:"center"},{colKey:"options",title:"\u64CD\u4F5C",cell:(t,{row:c})=>e(o("t-button"),{class:"detail-btn"},{default:()=>[n("\u8BE6\u60C5")]}),align:"center"}]),f={defaultCurrent:1,defaultPageSize:30,total:m};return(t,c)=>{const p=o("t-date-range-picker"),d=o("t-form-item"),r=o("t-col"),g=o("t-input"),i=o("t-button"),y=o("t-row"),h=o("t-form"),u=o("t-card"),b=o("t-table");return C(),k("div",R,[e(u,{bordered:!1},{default:a(()=>[e(h,{ref:"form",data:l,"label-width":"calc(5em + 24px)","scroll-to-first-error":"smooth",onReset:t.onReset,onSubmit:t.onSubmit,class:"filter-form"},{default:a(()=>[e(y,{gutter:[56,20]},{default:a(()=>[e(r,{span:3},{default:a(()=>[e(d,{label:"\u4EA4\u6613\u65F6\u95F4\uFF1A",name:"times"},{default:a(()=>[e(p,{"allow-input":"",clearable:"",defaultTime:l.times,onPick:t.onPick,onChange:t.onChange},null,8,["defaultTime","onPick","onChange"])]),_:1})]),_:1}),e(r,{span:2},{default:a(()=>[e(d,{label:"\u5E73\u53F0\u6D41\u6C34\u53F7\uFF1A",name:"orderId"},{default:a(()=>[e(g,{modelValue:l.orderId,"onUpdate:modelValue":c[0]||(c[0]=v=>l.orderId=v)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:4,offset:"3"},{default:a(()=>[e(i,{theme:"primary"},{default:a(()=>[n("\u67E5\u8BE2")]),_:1}),e(i,{theme:"warning"},{default:a(()=>[n("\u5BFC\u51FA")]),_:1}),e(i,{theme:"default"},{default:a(()=>[n("\u6E05\u7A7A")]),_:1})]),_:1}),e(r,{span:2},{default:a(()=>[e(i,{theme:"primary",variant:"text",class:"more-btn"},{default:a(()=>[n("\u66F4\u591A\u67E5\u8BE2\u6761\u4EF6"),e(I(T))]),_:1})]),_:1})]),_:1})]),_:1},8,["data","onReset","onSubmit"])]),_:1}),e(u,{bordered:!1,size:"small"},{default:a(()=>[e(b,{"row-key":"index",data:s,columns:_.value,stripe:!0,bordered:!1,hover:!1,size:"large",pagination:f,tableLayout:"auto","show-header":!0,"lazy-load":"",align:t.center},null,8,["columns","align"])]),_:1})])}}};var z=x(S,[["__file","/Users/qiweiguo/work/taobao/vue_project/xunru-admin/src/pages/account/manage/detail.vue"]]);export{z as default};

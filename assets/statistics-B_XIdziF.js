import{c as i,r,b as l,m as d,d as c,f as p,i as P,e,S as V}from"./index-CowSbynL.js";import{D as S}from"./date-picker-wgI5DOO0.js";import{B as h,a as C}from"./button-group-DTJnFlWs.js";import{C as O}from"./check-tag-Brb2ymxU.js";import{L as w}from"./line-chart-nAVeicOl.js";import{S as o,a as u}from"./statistics-line-card-RlpyzGhD.js";function x(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!P(t)}const y=i({props:{modelValue:c,class:""},emits:{"update:modelValue":p}},(t,{emit:f,slots:v})=>{const m=r("Credit"),g=r(["Pool","Asset","Storage","Traffic","Credits"]),b=r(["Credit","Storage","Traffic"]),n=r([]),F=s=>{n.value.includes(s)?n.value=n.value.filter(a=>a!==s):n.value.push(s)};return()=>{let s;return l("div",{class:d("flex flex-col gap-4",t.class)},[l("div",{class:"flex justify-between items-center p-4"},[l(h,{modelValue:m.value,"onUpdate:modelValue":a=>m.value=a,class:"bg-[#F6F6F6] p-1  "},x(s=b.value.map(a=>l(C,{key:a,value:a,class:"px-8 text-sm"},{default:()=>[l("div",null,[a])]})))?s:{default:()=>[s]}),l("x-tag",{class:"flex flex-wrap gap-2 p-4"},[g.value.map((a,E)=>l(O,{key:E,class:"text-xs",checked:n.value.includes(a),onClick:()=>F(a)},x(a)?a:{default:()=>[a]}))])]),l(w,{data:[55,40,85,90,40,80,55,80,95,100,90,75,50,60,55,60,28,27,22,30,47,95,50,30,85,30,47,95,50,30,85]},null)])}}),k=i({props:{modelValue:c,class:""},emits:{"update:modelValue":p}},(t,{emit:f,slots:v})=>()=>l("div",{class:d("flex flex-col pt-4 px-4 bg-[#F8F9FF] rounded-lg",t.class)},[l("div",{class:"font-bold text-xs text-[#999] mb-4"},[e("DATA POOL")]),l("div",{class:"grid grid-cols-3 gap-2 border-b border-[#E0E0E0] pb-4"},[l(o,{data:{title:"Pool",value:"123,456",increase:()=>l("div",null,[e("+123")])}},null),l(o,{data:{title:"Asset",value:"123,456",increase:()=>l("div",null,[e("+123")])}},null),l(o,{data:{title:"Storage",value:"123,456",increase:()=>l("div",null,[e("+123")])}},null)]),l("div",null,[l(u,{class:"border-b border-[#E0E0E0]",data:{title:"Pool",value:"123,456",increase:()=>l("div",null,[e("+123")]),icon:"traffic"}},null),l(u,{data:{title:"Pool",value:"123,456",increase:()=>l("div",null,[e("+123")]),icon:"credits"}},null)])])),D=i({props:{modelValue:c,class:""},emits:{"update:modelValue":p}},(t,{emit:f,slots:v})=>()=>l("div",{class:d("flex flex-col gap-2 p-4 bg-[#F8F9FF] rounded-lg",t.class)},[l("div",{class:"font-bold text-xs text-[#999]"},[e("EMPLOYEE")]),l("div",{class:"flex gap-2"},[l("x-chart",{class:"text-[#409e4c]"},[l(V,{name:"chart-demo",colored:!0,class:"w-40 h-[126px] "},null)]),l(o,{data:{title:"Pool",value:"123,456",increase:()=>l("div",null,[e("+123")])}},null)])])),L=i({props:{modelValue:c,class:""},emits:{"update:modelValue":p}},(t,{emit:f,slots:v})=>()=>l("div",{class:d("flex flex-col pt-4 px-4 bg-[#F8F9FF] rounded-lg",t.class)},[l("div",{class:"font-bold text-xs text-[#999] mb-4"},[e("MODLES")]),l("div",{class:"grid grid-cols-3 gap-2 border-b border-[#E0E0E0] pb-4"},[l(o,{data:{title:"Pool",value:"123,456",increase:()=>l("div",null,[e("+123")])}},null),l(o,{data:{title:"Asset",value:"123,456",increase:()=>l("div",null,[e("+123")])}},null),l(o,{data:{title:"Storage",value:"123,456",increase:()=>l("div",null,[e("+123")])}},null)]),l("div",null,[l(u,{class:"border-b border-[#E0E0E0]",data:{title:"Pool",value:"123,456",increase:()=>l("div",null,[e("+123")]),icon:"traffic"}},null),l(u,{data:{title:"Pool",value:"123,456",increase:()=>l("div",null,[e("+123")]),icon:"credits"}},null)])])),M=i(null,()=>()=>l("div",{class:"p-8 h-full flex flex-col"},[l("div",{class:"flex justify-between items-center"},[l("header",{class:"text-3xl font-bold mb-10"},[e("Statistics")]),l(S,null,null)]),l("main",{class:"flex grow gap-4 "},[l("div",{class:"w-1/3 flex flex-col gap-4"},[l(D,null,null),l(L,null,null),l(k,null,null)]),l(y,{class:"grow bg-[#F8F9FF]"},null)])]));export{M as StatisticsPage,M as default};

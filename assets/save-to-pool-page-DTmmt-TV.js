import{c as f,r as l,w as m,b as e,e as p,S,i as h,B as x,f as v}from"./index-CowSbynL.js";import{D as b}from"./date-picker-wgI5DOO0.js";import{T}from"./table-BvClhQCn.js";import{T as g}from"./tag-DYtrA518.js";import{S as r}from"./select-ABZmvD2f.js";function A(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!h(a)}const C=f(null,()=>{l({page:1,perPage:10,total:100});const a=l({resource:[{index:1,seirial:"1234567890",data_space:"Data Space 1",data_pool:"Data Pool 1",models:["Model 1","Model 2","Model 3"],status:"Active",created_at:"2021-01-01"}]});m(()=>a.value,()=>{var t;console.log("data: ",(t=a.value)==null?void 0:t.resource)});const d=l([{prop:"index",header:()=>"NO.",width:"80px"},{prop:"seirial",header:()=>"SEIRIAL"},{prop:"data_space",header:()=>"DATA SPACE"},{prop:"data_pool",header:()=>"DATA POOL"},{prop:"models",header:()=>"MODELS"},{prop:"status",header:()=>"STATUS"},{prop:"created_at",header:()=>"CREAT"},{prop:"actions",header:()=>"ACTIONS",cell:t=>e("div",{class:"flex gap-x-4 items-center"},[e(x,{level:"text",width:"fit",class:"h-8 text-sm font-bold",onClick:v},{default:()=>[p("DETAIL")]})])}]),n=l(!1),u=l(null);return()=>{var t;return e("div",{class:"p-8"},[e("header",{class:"text-3xl font-bold mb-8"},[p("Save to pool")]),e("x-toolbar",{class:"flex  justify-between items-center mb-4 "},[e("div",{class:"flex items-center gap-x-2"},[e(r,{class:"!w-64",placeholder:"Search",filterable:!0},{prefix:()=>e(S,{name:"search",colored:!0},null)}),e(r,{class:"!w-32",placeholder:"Data Space"},null),e(r,{class:"!w-32",placeholder:"Data Pool"},null),e(r,{class:"!w-32",placeholder:"Status"},null)]),e(b,null,null)]),((t=a.value)==null?void 0:t.resource[0])&&e(T,{ref:u,columns:d.value,dataSource:a.value.resource,total:a.value.resource.length,enableSelect:n.value},{cell:({row:c,column:s})=>{if(s.prop==="dimension_requirements"){const i=c[s.prop];return e("div",{class:"flex flex-wrap gap-2"},[i.map(o=>e(g,{key:o},A(o)?o:{default:()=>[o]}))])}else return c[s.prop]}})])}});export{C as SaveToPoolPage,C as default};

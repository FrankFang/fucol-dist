import{c as a,b as e,S as n,e as t,B as s,n as l}from"./index-CowSbynL.js";const r=a({emits:["cancel","continue"]},(o,{emit:c})=>()=>e(l,null,[e("header",{class:"flex justify-center my-2"},[e(n,{name:"export",colored:!0,class:"w-10 h-10"},null)]),e("main",{class:"flex justify-center text-center text-sm text-[#666]"},[t("Selected items will be exported to .csv format, which you can open with Excel")]),e("div",{class:"flex justify-center gap-4 h-8 text-sm mt-8  "},[e(s,{width:"fit",type:"submit",class:"!px-4 py-2 w-[108px]  ",onClick:()=>c("cancel")},{default:()=>[t("CANCEL  ")]}),e(s,{level:"important",width:"fit",type:"submit",class:" py-2 bg-[#363947]",onClick:()=>c("continue")},{default:()=>[t("CONTINUE")]})])]));export{r as E};

import{f as n,o as r,c as u,a as o,l as p}from"./BPO1TO6k.js";const c={class:"input__place"},_=n({__name:"OInput",emits:["update:modelValue"],setup(d,{emit:l}){const s=l,a=e=>{const t=e.target;t.value===""?t.style.border="1px solid red":(t.style.border="1px solid #BCBCBC",s("update:modelValue",e.target.value))};return(e,t)=>(r(),u("div",c,[o("label",null,[p(e.$slots,"default")]),o("input",{onInput:a,onFocus:a},null,32)]))}});export{_};

import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{n as b,a as w}from"./Plus.es-DlhzA7Qm.js";import{c as v}from"./cn-2dOUpm6k.js";import"./iframe-Bbood9mG.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-C6Ij38Yg.js";const f="_button_1ws3k_1",k="_icon_1ws3k_15",x="_sm_1ws3k_25",j="_md_1ws3k_35",T="_lg_1ws3k_45",q="_primary_1ws3k_55",B="_secondary_1ws3k_68",I="_tertiary_1ws3k_77",N="_ghost_1ws3k_87",A="_danger_1ws3k_96",e={button:f,icon:k,sm:x,md:j,lg:T,primary:q,secondary:B,tertiary:I,ghost:N,danger:A};function c({variant:d="primary",size:u="md",label:p,children:_,className:g,disabled:y,...h}){return a.jsx("button",{type:"button","aria-label":p,disabled:y,className:v(e.button,e[d],e[u],g),...h,children:a.jsx("span",{className:e.icon,children:_})})}c.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["ButtonHTMLAttributes"]};const V={title:"Components/Icon Button",component:c,tags:["autodocs"]},r={args:{label:"Add",variant:"primary",children:a.jsx(w,{weight:"bold"})}},t={args:{label:"More",variant:"ghost",children:a.jsx(b,{weight:"bold"})}};var s,o,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Add',
    variant: 'primary',
    children: <Plus weight="bold" />
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var i,l,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'More',
    variant: 'ghost',
    children: <DotsThree weight="bold" />
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const z=["Primary","Ghost"];export{t as Ghost,r as Primary,z as __namedExportsOrder,V as default};

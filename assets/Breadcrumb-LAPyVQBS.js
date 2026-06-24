import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as t}from"./cn-2dOUpm6k.js";import{I as q}from"./Icon-sGIf7kVh.js";import{I as L}from"./IconButton-D3K7mo_e.js";import{r as g}from"./iframe-BH_zNAgC.js";import{s as N}from"./CaretDown.es-BY4yHaWr.js";import{M as S}from"./Menu-D3nK8gBs.js";const O="_trail_1s781_1",I="_separator_1s781_8",T="_item_1s781_18",A="_itemLink_1s781_32",G="_itemCurrent_1s781_43",E="_backButton_1s781_49",P="_backLink_1s781_53",V="_selector_1s781_68",M="_selectorLabel_1s781_79",z="_selectorOpen_1s781_83",D="_selectorIcon_1s781_83",R="_selectorWrapper_1s781_87",W="_selectorMenu_1s781_92",K="_menuPrefix_1s781_100",F="_selectorPrefix_1s781_121",H="_bar_1s781_151",n={trail:O,separator:I,item:T,itemLink:A,itemCurrent:G,backButton:E,backLink:P,selector:V,selectorLabel:M,selectorOpen:z,selectorIcon:D,selectorWrapper:R,selectorMenu:W,menuPrefix:K,selectorPrefix:F,bar:H};function J({letter:i}){return r.jsx("span",{className:n.menuPrefix,children:i})}function h({className:i,label:e,prefix:l,options:s,value:o,onValueChange:d,menuGroupLabel:j="Clients",onClick:p}){const[u,m]=g.useState(!1),v=g.useRef(null),b=g.useId(),c=!!(s!=null&&s.length);g.useEffect(()=>{if(!u)return;const a=k=>{var y;(y=v.current)!=null&&y.contains(k.target)||m(!1)},f=k=>{k.key==="Escape"&&m(!1)};return document.addEventListener("mousedown",a),document.addEventListener("keydown",f),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("keydown",f)}},[u]);const B=(s==null?void 0:s.map(a=>({kind:"item",id:a.id,label:a.label,icon:r.jsx(J,{letter:a.prefix}),shortcut:o===a.id?"✓":void 0,onSelect:()=>d==null?void 0:d(a.id)})))??[],C=()=>{if(c){m(a=>!a);return}p==null||p()};return r.jsxs("div",{ref:v,className:t(n.selectorWrapper,i),children:[r.jsxs("button",{type:"button",className:t(n.selector,u&&n.selectorOpen),onClick:C,"aria-haspopup":c?"menu":"listbox","aria-expanded":c?u:void 0,"aria-controls":c&&u?b:void 0,children:[r.jsx("span",{className:n.selectorPrefix,children:l}),r.jsx("span",{className:n.selectorLabel,children:e}),r.jsx(N,{size:16,weight:"regular",className:n.selectorIcon,"aria-hidden":!0})]}),u&&c?r.jsx(S,{id:b,className:n.selectorMenu,entries:B,groupLabel:j,showGroupLabel:!0,showDivider:!1,showDelete:!1,onSelect:()=>m(!1)}):null]})}h.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSelector",props:{className:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},prefix:{required:!0,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbSelectorOption"}],raw:"BreadcrumbSelectorOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},menuGroupLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Clients'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function _({className:i}){return r.jsx("span",{className:t(n.separator,i),"aria-hidden":!0,children:"/"})}function x({className:i,entry:e}){return e.kind==="back"?e.href?r.jsx("a",{href:e.href,className:t(n.backButton,n.backLink),"aria-label":e.label,children:r.jsx(q,{name:"arrow-left",size:16,"aria-hidden":!0})}):r.jsx(L,{variant:"ghost",size:"sm",label:e.label,className:t(n.backButton,i),onClick:e.onClick,children:r.jsx(q,{name:"arrow-left",size:16})}):e.kind==="current"?r.jsx("span",{className:t(n.item,n.itemCurrent,i),"aria-current":"page",children:e.label}):e.kind==="selector"?r.jsx(h,{className:i,label:e.label,prefix:e.prefix,options:e.options,value:e.value,onValueChange:e.onValueChange,menuGroupLabel:e.menuGroupLabel,onClick:e.onClick}):e.href?r.jsx("a",{href:e.href,className:t(n.item,n.itemLink,i),children:e.label}):r.jsx("button",{type:"button",className:t(n.item,n.itemLink,i),onClick:e.onClick,children:e.label})}function w({className:i,items:e}){return r.jsx("nav",{className:t(n.trail,i),"aria-label":"Breadcrumb",children:e.map((l,s)=>{const o=e[s-1],d=s>0&&!((o==null?void 0:o.kind)==="back"&&l.kind==="current");return r.jsxs("span",{style:{display:"contents"},children:[d?r.jsx(_,{}):null,r.jsx(x,{entry:l})]},l.id)})})}function Q({className:i,items:e,end:l}){return r.jsxs("div",{className:t(n.bar,i),children:[r.jsx(w,{items:e}),l?r.jsx("div",{style:{marginLeft:"auto"},children:l}):null]})}_.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator",props:{className:{required:!1,tsType:{name:"string"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{className:{required:!1,tsType:{name:"string"},description:""},entry:{required:!0,tsType:{name:"union",raw:`| {
    kind: 'link';
    id: string;
    label: string;
    href?: string;
    onClick?: () => void;
  }
| {
    kind: 'current';
    id: string;
    label: string;
  }
| {
    kind: 'back';
    id: string;
    /** Accessible label, e.g. "Back to projects". */
    label: string;
    onClick?: () => void;
    href?: string;
  }
| {
    kind: 'selector';
    id: string;
    label: string;
    prefix: string;
    onClick?: () => void;
    options?: BreadcrumbSelectorOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    menuGroupLabel?: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  kind: 'link';
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'link'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},{name:"signature",type:"object",raw:`{
  kind: 'current';
  id: string;
  label: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'current'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kind: 'back';
  id: string;
  /** Accessible label, e.g. "Back to projects". */
  label: string;
  onClick?: () => void;
  href?: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'back'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0},description:'Accessible label, e.g. "Back to projects".'},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"href",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kind: 'selector';
  id: string;
  label: string;
  prefix: string;
  onClick?: () => void;
  options?: BreadcrumbSelectorOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  menuGroupLabel?: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'selector'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"prefix",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"options",value:{name:"Array",elements:[{name:"BreadcrumbSelectorOption"}],raw:"BreadcrumbSelectorOption[]",required:!1}},{key:"value",value:{name:"string",required:!1}},{key:"onValueChange",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}},required:!1}},{key:"menuGroupLabel",value:{name:"string",required:!1}}]}}]},description:""}}};w.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{className:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| {
    kind: 'link';
    id: string;
    label: string;
    href?: string;
    onClick?: () => void;
  }
| {
    kind: 'current';
    id: string;
    label: string;
  }
| {
    kind: 'back';
    id: string;
    /** Accessible label, e.g. "Back to projects". */
    label: string;
    onClick?: () => void;
    href?: string;
  }
| {
    kind: 'selector';
    id: string;
    label: string;
    prefix: string;
    onClick?: () => void;
    options?: BreadcrumbSelectorOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    menuGroupLabel?: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  kind: 'link';
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'link'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},{name:"signature",type:"object",raw:`{
  kind: 'current';
  id: string;
  label: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'current'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kind: 'back';
  id: string;
  /** Accessible label, e.g. "Back to projects". */
  label: string;
  onClick?: () => void;
  href?: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'back'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0},description:'Accessible label, e.g. "Back to projects".'},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"href",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kind: 'selector';
  id: string;
  label: string;
  prefix: string;
  onClick?: () => void;
  options?: BreadcrumbSelectorOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  menuGroupLabel?: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'selector'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"prefix",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"options",value:{name:"Array",elements:[{name:"BreadcrumbSelectorOption"}],raw:"BreadcrumbSelectorOption[]",required:!1}},{key:"value",value:{name:"string",required:!1}},{key:"onValueChange",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}},required:!1}},{key:"menuGroupLabel",value:{name:"string",required:!1}}]}}]}],raw:"BreadcrumbEntry[]"},description:""}}};Q.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbBar",props:{className:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| {
    kind: 'link';
    id: string;
    label: string;
    href?: string;
    onClick?: () => void;
  }
| {
    kind: 'current';
    id: string;
    label: string;
  }
| {
    kind: 'back';
    id: string;
    /** Accessible label, e.g. "Back to projects". */
    label: string;
    onClick?: () => void;
    href?: string;
  }
| {
    kind: 'selector';
    id: string;
    label: string;
    prefix: string;
    onClick?: () => void;
    options?: BreadcrumbSelectorOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    menuGroupLabel?: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  kind: 'link';
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'link'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},{name:"signature",type:"object",raw:`{
  kind: 'current';
  id: string;
  label: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'current'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kind: 'back';
  id: string;
  /** Accessible label, e.g. "Back to projects". */
  label: string;
  onClick?: () => void;
  href?: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'back'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0},description:'Accessible label, e.g. "Back to projects".'},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"href",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kind: 'selector';
  id: string;
  label: string;
  prefix: string;
  onClick?: () => void;
  options?: BreadcrumbSelectorOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  menuGroupLabel?: string;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'selector'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"prefix",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"options",value:{name:"Array",elements:[{name:"BreadcrumbSelectorOption"}],raw:"BreadcrumbSelectorOption[]",required:!1}},{key:"value",value:{name:"string",required:!1}},{key:"onValueChange",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}},required:!1}},{key:"menuGroupLabel",value:{name:"string",required:!1}}]}}]}],raw:"BreadcrumbEntry[]"},description:""},end:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{w as B,Q as a};

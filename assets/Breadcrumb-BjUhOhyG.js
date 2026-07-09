import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as s}from"./cn-2dOUpm6k.js";import{I as q}from"./Icon-CBzlcWpN.js";import{I as A}from"./IconButton-BKzAixFV.js";import{r as v}from"./iframe-DvHjSd81.js";import{M}from"./Menu-DVqBUp66.js";const R="_trail_55nks_1",z="_separator_55nks_8",W="_item_55nks_13",F="_itemLink_55nks_24",K="_itemCurrent_55nks_33",$="_backButton_55nks_37",H="_backLink_55nks_41",J="_selector_55nks_56",Q="_selectorLabel_55nks_67",U="_selectorOpen_55nks_71",X="_selectorIcon_55nks_71",Y="_selectorIconOpen_55nks_72",Z="_selectorLink_55nks_76",ee="_selectorCurrent_55nks_85",re="_selectorLabelCurrent_55nks_86",ne="_selectorWrapper_55nks_90",ae="_selectorMenu_55nks_95",te="_menuPrefix_55nks_103",se="_selectorPrefix_55nks_120",ie="_bar_55nks_139",t={trail:R,separator:z,item:W,itemLink:F,itemCurrent:K,backButton:$,backLink:H,selector:J,selectorLabel:Q,selectorOpen:U,selectorIcon:X,selectorIconOpen:Y,selectorLink:Z,selectorCurrent:ee,selectorLabelCurrent:re,selectorWrapper:ne,selectorMenu:ae,menuPrefix:te,selectorPrefix:se,bar:ie};function le({letter:a}){return n.jsx("span",{className:s("rc-label-sm",t.menuPrefix),children:a})}function oe({prefix:a,content:e}){return e?n.jsx("span",{className:s("rc-label-md",t.selectorPrefix),children:e}):a?n.jsx("span",{className:s("rc-label-md",t.selectorPrefix),children:a}):null}function ue({open:a}){return n.jsx(q,{name:"caret-down",size:16,tone:"tertiary",className:s(t.selectorIcon,a&&t.selectorIconOpen),"aria-hidden":!0})}function I({className:a,label:e,prefix:d,leadingContent:c,showLeading:m=!0,showDropdown:r=!0,dropdownIcon:l,options:i,value:u,onValueChange:g,menuGroupLabel:O="Clients",onClick:k,href:y,isCurrent:h=!1}){const[f,b]=v.useState(!1),_=v.useRef(null),C=v.useId(),p=!!(i!=null&&i.length),S=m&&!!(c||d),V=r&&(p||k||l);v.useEffect(()=>{if(!f)return;const o=w=>{var x;(x=_.current)!=null&&x.contains(w.target)||b(!1)},L=w=>{w.key==="Escape"&&b(!1)};return document.addEventListener("mousedown",o),document.addEventListener("keydown",L),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("keydown",L)}},[f]);const G=(i==null?void 0:i.map(o=>({kind:"item",id:o.id,label:o.label,icon:n.jsx(le,{letter:o.prefix}),shortcut:u===o.id?"✓":void 0,onSelect:()=>g==null?void 0:g(o.id)})))??[],P=()=>{if(p){b(o=>!o);return}k==null||k()},E=s("rc-label-md",t.selectorLabel,h&&t.selectorLabelCurrent),B=n.jsxs(n.Fragment,{children:[S?n.jsx(oe,{prefix:d,content:c}):null,n.jsx("span",{className:E,children:e}),V?l??n.jsx(ue,{open:f}):null]});return y&&!p?n.jsx("a",{href:y,className:s(t.selector,t.selectorLink,a),children:B}):n.jsxs("div",{ref:_,className:s(t.selectorWrapper,a),children:[n.jsx("button",{type:"button",className:s(t.selector,f&&t.selectorOpen,h&&t.selectorCurrent),onClick:P,"aria-haspopup":p?"menu":r?"listbox":void 0,"aria-expanded":p?f:void 0,"aria-controls":p&&f?C:void 0,"aria-current":h?"page":void 0,disabled:!p&&!k&&!y,children:B}),f&&p?n.jsx(M,{id:C,className:t.selectorMenu,entries:G,groupLabel:O,showGroupLabel:!0,showDivider:!1,showDelete:!1,onSelect:()=>b(!1)}):null]})}I.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSelector",props:{className:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},prefix:{required:!0,tsType:{name:"string"},description:""},leadingContent:{required:!1,tsType:{name:"ReactNode"},description:""},showLeading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showDropdown:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},dropdownIcon:{required:!1,tsType:{name:"ReactNode"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbSelectorOption"}],raw:"BreadcrumbSelectorOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},menuGroupLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Clients'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},href:{required:!1,tsType:{name:"string"},description:""},isCurrent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function j(a){return"kind"in a}function de(a,e,d){const c=a.some(r=>j(r)?r.kind==="current":r.isCurrent===!0),m=d!==!1&&!!(e!=null&&e.prefix||e!=null&&e.content);return a.map((r,l)=>{if(j(r))return r.kind==="back"?{id:r.id,label:r.label,href:r.href,onClick:r.onClick,isCurrent:!1,isBack:!0,showDropdown:!1,showLeading:!1}:r.kind==="current"?{id:r.id,label:r.label,isCurrent:!0,isBack:!1,showDropdown:!1,showLeading:!1}:r.kind==="selector"?{id:r.id,label:r.label,onClick:r.onClick,isCurrent:!1,isBack:!1,showDropdown:!0,dropdownOptions:r.options,dropdownValue:r.value,onDropdownValueChange:r.onValueChange,dropdownMenuGroupLabel:r.menuGroupLabel,showLeading:!0,leadingPrefix:r.prefix}:{id:r.id,label:r.label,href:r.href,onClick:r.onClick,isCurrent:!1,isBack:!1,showDropdown:!1,showLeading:!1};const i=r.isCurrent??(!c&&l===a.length-1),u=l===0;return{id:r.id??`breadcrumb-${l}`,label:r.label,href:r.href,onClick:r.onClick,isCurrent:i,isBack:!1,showDropdown:!!r.showDropdown,dropdownIcon:r.dropdownIcon,dropdownOptions:r.dropdownOptions,dropdownValue:r.dropdownValue,onDropdownValueChange:r.onDropdownValueChange,dropdownMenuGroupLabel:r.dropdownMenuGroupLabel,showLeading:u&&m,leadingPrefix:u?e==null?void 0:e.prefix:void 0,leadingContent:u?e==null?void 0:e.content:void 0}})}function T({className:a,children:e="/"}){return n.jsx("span",{className:s("rc-body-sm",t.separator,a),"aria-hidden":!0,children:e})}function N({className:a,item:e}){return e.isBack?e.href?n.jsx("a",{href:e.href,className:s(t.backButton,t.backLink),"aria-label":e.label,children:n.jsx(q,{name:"arrow-left",size:16,"aria-hidden":!0})}):n.jsx(A,{variant:"ghost",size:"sm",label:e.label,className:s(t.backButton,a),onClick:e.onClick,children:n.jsx(q,{name:"arrow-left",size:16})}):e.showDropdown||e.showLeading?n.jsx(I,{className:a,label:e.label,prefix:e.leadingPrefix??"",leadingContent:e.leadingContent,showLeading:e.showLeading,showDropdown:e.showDropdown,dropdownIcon:e.dropdownIcon,options:e.dropdownOptions,value:e.dropdownValue,onValueChange:e.onDropdownValueChange,menuGroupLabel:e.dropdownMenuGroupLabel,onClick:e.onClick,href:e.href,isCurrent:e.isCurrent}):e.isCurrent?n.jsx("span",{className:s("rc-label-md",t.item,t.itemCurrent,a),"aria-current":"page",children:e.label}):e.href?n.jsx("a",{href:e.href,className:s("rc-label-md",t.item,t.itemLink,a),children:e.label}):n.jsx("button",{type:"button",className:s("rc-label-md",t.item,t.itemLink,a),onClick:e.onClick,children:e.label})}function D({className:a,items:e,leading:d,showLeading:c,separator:m}){const r=de(e,d,c);return n.jsx("nav",{className:s(t.trail,a),"aria-label":"Breadcrumb",children:r.map((l,i)=>{const u=r[i-1],g=i>0&&!(u!=null&&u.isBack&&l.isCurrent);return n.jsxs("span",{style:{display:"contents"},children:[g?n.jsx(T,{children:m}):null,n.jsx(N,{item:l})]},l.id)})})}function ce({className:a,items:e,leading:d,showLeading:c,separator:m,end:r}){return n.jsxs("div",{className:s(t.bar,a),children:[n.jsx(D,{items:e,leading:d,showLeading:c,separator:m}),r?n.jsx("div",{style:{marginLeft:"auto"},children:r}):null]})}T.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'/'",computed:!1}}}};N.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{className:{required:!1,tsType:{name:"string"},description:""},item:{required:!0,tsType:{name:"NormalizedBreadcrumbItem"},description:""}}};D.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{className:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"BreadcrumbItemData | BreadcrumbEntry",elements:[{name:"BreadcrumbItemData"},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'selector'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"prefix",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"options",value:{name:"Array",elements:[{name:"BreadcrumbSelectorOption"}],raw:"BreadcrumbSelectorOption[]",required:!1}},{key:"value",value:{name:"string",required:!1}},{key:"onValueChange",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}},required:!1}},{key:"menuGroupLabel",value:{name:"string",required:!1}}]}}]}]}],raw:"BreadcrumbTrailItem[]"},description:""},leading:{required:!1,tsType:{name:"BreadcrumbLeading"},description:"Avatar / client icon rendered before the first item."},showLeading:{required:!1,tsType:{name:"boolean"},description:"When false, hides the leading slot even if `leading` is set. Default: true when `leading` is provided."},separator:{required:!1,tsType:{name:"ReactNode"},description:"Separator between items. Default: `/`."}}};ce.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbBar",props:{className:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"BreadcrumbItemData | BreadcrumbEntry",elements:[{name:"BreadcrumbItemData"},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'selector'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"prefix",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"options",value:{name:"Array",elements:[{name:"BreadcrumbSelectorOption"}],raw:"BreadcrumbSelectorOption[]",required:!1}},{key:"value",value:{name:"string",required:!1}},{key:"onValueChange",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}},required:!1}},{key:"menuGroupLabel",value:{name:"string",required:!1}}]}}]}]}],raw:"BreadcrumbTrailItem[]"},description:""},leading:{required:!1,tsType:{name:"BreadcrumbLeading"},description:""},showLeading:{required:!1,tsType:{name:"boolean"},description:""},separator:{required:!1,tsType:{name:"ReactNode"},description:""},end:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{D as B,ce as a};

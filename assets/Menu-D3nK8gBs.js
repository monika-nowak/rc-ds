import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as d}from"./cn-2dOUpm6k.js";const g="_menu_otw0a_1",b="_groupLabel_otw0a_14",v="_separator_otw0a_24",f="_separatorLine_otw0a_28",_="_item_otw0a_33",h="_destructive_otw0a_62",k="_label_otw0a_75",w="_icon_otw0a_80",q="_iconPlaceholder_otw0a_94",j="_shortcut_otw0a_100",a={menu:g,groupLabel:b,separator:v,separatorLine:f,item:_,destructive:h,label:k,icon:w,iconPlaceholder:q,shortcut:j};function y(n,i,s=!0){const t=n.filter(o=>o.kind!=="group");return!s||!i?t:[{kind:"group",id:"menu-group",label:i},...t]}function N(n,i=!0,s=!0){return n.filter(t=>!(t.kind==="separator"&&!i||t.kind==="item"&&t.destructive&&!s))}function x({id:n,className:i,entries:s,groupLabel:t="Actions",showGroupLabel:o=!0,showDivider:c=!0,showDelete:p=!0,onSelect:u}){const m=N(y(s,t,o),c,p);return r.jsx("ul",{id:n,className:d(a.menu,i),role:"menu",children:m.map(e=>e.kind==="group"?r.jsx("li",{role:"presentation",className:a.groupLabel,children:e.label},e.id):e.kind==="separator"?r.jsx("li",{role:"separator",className:a.separator,children:r.jsx("div",{className:a.separatorLine})},e.id):r.jsx("li",{role:"none",children:r.jsxs("button",{type:"button",role:"menuitem",disabled:e.disabled,className:d(a.item,e.destructive&&a.destructive),onClick:()=>{var l;e.disabled||((l=e.onSelect)==null||l.call(e),u==null||u(e.id))},children:[e.icon?r.jsx("span",{className:a.icon,children:e.icon}):r.jsx("span",{className:a.iconPlaceholder,"aria-hidden":!0}),r.jsx("span",{className:a.label,children:e.label}),e.shortcut?r.jsx("span",{className:a.shortcut,children:e.shortcut}):null]})},e.id))})}x.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},entries:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| { kind: 'group'; id: string; label: string }
| { kind: 'separator'; id: string }
| {
    kind: 'item';
    id: string;
    label: string;
    icon?: ReactNode;
    shortcut?: string;
    destructive?: boolean;
    disabled?: boolean;
    onSelect?: () => void;
  }`,elements:[{name:"signature",type:"object",raw:"{ kind: 'group'; id: string; label: string }",signature:{properties:[{key:"kind",value:{name:"literal",value:"'group'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:"{ kind: 'separator'; id: string }",signature:{properties:[{key:"kind",value:{name:"literal",value:"'separator'",required:!0}},{key:"id",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  kind: 'item';
  id: string;
  label: string;
  icon?: ReactNode;
  shortcut?: string;
  destructive?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'item'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"shortcut",value:{name:"string",required:!1}},{key:"destructive",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}]}],raw:"MenuEntry[]"},description:""},groupLabel:{required:!1,tsType:{name:"string"},description:"Section title copy when `showGroupLabel` is true.",defaultValue:{value:"'Actions'",computed:!1}},showGroupLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showDelete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};export{x as M};

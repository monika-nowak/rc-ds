import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as d}from"./cn-2dOUpm6k.js";const g="_menu_1346p_1",b="_groupLabel_1346p_14",v="_separator_1346p_24",f="_separatorLine_1346p_28",_="_item_1346p_33",h="_destructive_1346p_62",k="_label_1346p_75",q="_icon_1346p_80",j="_iconPlaceholder_1346p_94",y="_shortcut_1346p_100",i={menu:g,groupLabel:b,separator:v,separatorLine:f,item:_,destructive:h,label:k,icon:q,iconPlaceholder:j,shortcut:y};function N(n,t,s=!0){const a=n.filter(u=>u.kind!=="group");return!s||!t?a:[{kind:"group",id:"menu-group",label:t},...a]}function w(n,t=!0,s=!0){return n.filter(a=>!(a.kind==="separator"&&!t||a.kind==="item"&&a.destructive&&!s))}function x({id:n,className:t,entries:s,groupLabel:a="Actions",showGroupLabel:u=!0,showDivider:c=!0,showDelete:p=!0,onSelect:o}){const m=w(N(s,a,u),c,p);return r.jsx("ul",{id:n,className:d(i.menu,t),role:"menu",children:m.map(e=>e.kind==="group"?r.jsx("li",{role:"presentation",className:i.groupLabel,children:e.label},e.id):e.kind==="separator"?r.jsx("li",{role:"separator",className:i.separator,children:r.jsx("div",{className:i.separatorLine})},e.id):r.jsx("li",{role:"none",children:r.jsxs("button",{type:"button",role:"menuitem",disabled:e.disabled,className:d(i.item,e.destructive&&i.destructive),onClick:()=>{var l;e.disabled||((l=e.onSelect)==null||l.call(e),o==null||o(e.id))},children:[e.icon?r.jsx("span",{className:i.icon,children:e.icon}):r.jsx("span",{className:i.iconPlaceholder,"aria-hidden":!0}),r.jsx("span",{className:i.label,children:e.label}),e.shortcut?r.jsx("span",{className:i.shortcut,children:e.shortcut}):null]})},e.id))})}x.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},entries:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| { kind: 'group'; id: string; label: string }
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

import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as o}from"./cn-2dOUpm6k.js";import{D as g}from"./Divider-BhWe8uDS.js";const b="_menu_1odqe_1",f="_groupLabel_1odqe_14",v="_separator_1odqe_19",q="_item_1odqe_23",h="_destructive_1odqe_47",k="_label_1odqe_60",_="_icon_1odqe_65",y="_iconPlaceholder_1odqe_79",j="_shortcut_1odqe_85",i={menu:b,groupLabel:f,separator:v,item:q,destructive:h,label:k,icon:_,iconPlaceholder:y,shortcut:j};function x(a,n,s=!0){const t=a.filter(u=>u.kind!=="group");return!s||!n?t:[{kind:"group",id:"menu-group",label:n},...t]}function w(a,n=!0,s=!0){return a.filter(t=>!(t.kind==="separator"&&!n||t.kind==="item"&&t.destructive&&!s))}function N({id:a,className:n,entries:s,groupLabel:t="Actions",showGroupLabel:u=!0,showDivider:c=!0,showDelete:p=!0,onSelect:l}){const m=w(x(s,t,u),c,p);return r.jsx("ul",{id:a,className:o(i.menu,n),role:"menu",children:m.map(e=>e.kind==="group"?r.jsx("li",{role:"presentation",className:o("rc-label-sm",i.groupLabel),children:e.label},e.id):e.kind==="separator"?r.jsx("li",{role:"presentation",className:i.separator,children:r.jsx(g,{})},e.id):r.jsx("li",{role:"none",children:r.jsxs("button",{type:"button",role:"menuitem",disabled:e.disabled,className:o("rc-body-sm",i.item,e.destructive&&i.destructive),onClick:()=>{var d;e.disabled||((d=e.onSelect)==null||d.call(e),l==null||l(e.id))},children:[e.icon?r.jsx("span",{className:i.icon,children:e.icon}):r.jsx("span",{className:i.iconPlaceholder,"aria-hidden":!0}),r.jsx("span",{className:i.label,children:e.label}),e.shortcut?r.jsx("span",{className:o("rc-body-xs",i.shortcut),children:e.shortcut}):null]})},e.id))})}N.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},entries:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| { kind: 'group'; id: string; label: string }
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
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'item'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"shortcut",value:{name:"string",required:!1}},{key:"destructive",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}]}],raw:"MenuEntry[]"},description:""},groupLabel:{required:!1,tsType:{name:"string"},description:"Section title copy when `showGroupLabel` is true.",defaultValue:{value:"'Actions'",computed:!1}},showGroupLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showDelete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};export{N as M};

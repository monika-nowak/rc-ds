import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as u}from"./cn-2dOUpm6k.js";const c="_menu_x7lsc_1",m="_groupLabel_x7lsc_14",p="_separator_x7lsc_24",g="_separatorLine_x7lsc_28",v="_item_x7lsc_33",b="_destructive_x7lsc_62",_="_label_x7lsc_75",k="_icon_x7lsc_80",h="_iconPlaceholder_x7lsc_94",x="_shortcut_x7lsc_100",i={menu:c,groupLabel:m,separator:p,separatorLine:g,item:v,destructive:b,label:_,icon:k,iconPlaceholder:h,shortcut:x};function f(s,n){if(n===void 0)return s;const a=s.filter(t=>t.kind!=="group");return n?[{kind:"group",id:"menu-group",label:n},...a]:a}function q({id:s,className:n,entries:a,groupLabel:t,onSelect:l}){const d=f(a,t);return r.jsx("ul",{id:s,className:u(i.menu,n),role:"menu",children:d.map(e=>e.kind==="group"?r.jsx("li",{role:"presentation",className:i.groupLabel,children:e.label},e.id):e.kind==="separator"?r.jsx("li",{role:"separator",className:i.separator,children:r.jsx("div",{className:i.separatorLine})},e.id):r.jsx("li",{role:"none",children:r.jsxs("button",{type:"button",role:"menuitem",disabled:e.disabled,className:u(i.item,e.destructive&&i.destructive),onClick:()=>{var o;e.disabled||((o=e.onSelect)==null||o.call(e),l==null||l(e.id))},children:[e.icon?r.jsx("span",{className:i.icon,children:e.icon}):r.jsx("span",{className:i.iconPlaceholder,"aria-hidden":!0}),r.jsx("span",{className:i.label,children:e.label}),e.shortcut?r.jsx("span",{className:i.shortcut,children:e.shortcut}):null]})},e.id))})}q.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},entries:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| { kind: 'group'; id: string; label: string }
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
}`,signature:{properties:[{key:"kind",value:{name:"literal",value:"'item'",required:!0}},{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"shortcut",value:{name:"string",required:!1}},{key:"destructive",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}]}],raw:"MenuEntry[]"},description:""},groupLabel:{required:!1,tsType:{name:"string"},description:'Optional section title. Omit or pass `""` to hide.'},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};export{q as M};

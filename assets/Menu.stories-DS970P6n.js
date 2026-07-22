import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{n as L}from"./Flag.es-BdG3sE1r.js";import{a as W,n as k}from"./Trash.es-ByI4ZgPH.js";import{M as x}from"./Menu-DVqBUp66.js";import"./iframe-DVYlbdCj.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-B2CDjfeH.js";import"./cn-2dOUpm6k.js";import"./Divider-BhWe8uDS.js";const G=[{kind:"item",id:"edit",label:"Edit",icon:a.jsx(W,{size:16,weight:"regular"})},{kind:"item",id:"duplicate",label:"Duplicate"},{kind:"item",id:"share",label:"Share...",shortcut:"⌘S"},{kind:"separator",id:"sep"},{kind:"item",id:"delete",label:"Delete",icon:a.jsx(k,{size:16,weight:"regular"}),destructive:!0}],y={title:"Components/Menu",component:x,tags:["autodocs"],args:{entries:G,groupLabel:"Actions",showGroupLabel:!0,showDivider:!0,showDelete:!0},argTypes:{groupLabel:{control:"text"},showGroupLabel:{control:"boolean"},showDivider:{control:"boolean"},showDelete:{control:"boolean"}}},e={},r={name:"Flag issue menu",args:{showGroupLabel:!1,showDivider:!1,entries:[{kind:"item",id:"edit",label:"Edit",icon:a.jsx(W,{size:16,weight:"regular"})},{kind:"item",id:"flag",label:"Flag an issue",icon:a.jsx(L,{size:16,weight:"regular"}),destructive:!0}]}},s={name:"Without group label",args:{showGroupLabel:!1}},t={name:"Without divider",args:{showDivider:!1}},o={name:"Without delete",args:{showDelete:!1}};var i,n,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var u,d,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Flag issue menu',
  args: {
    showGroupLabel: false,
    showDivider: false,
    entries: [{
      kind: 'item',
      id: 'edit',
      label: 'Edit',
      icon: <PencilSimple size={16} weight="regular" />
    }, {
      kind: 'item',
      id: 'flag',
      label: 'Flag an issue',
      icon: <Flag size={16} weight="regular" />,
      destructive: true
    }]
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Without group label',
  args: {
    showGroupLabel: false
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,b,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Without divider',
  args: {
    showDivider: false
  }
}`,...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var f,D,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Without delete',
  args: {
    showDelete: false
  }
}`,...(v=(D=o.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};const C=["ActionsMenu","FlagIssueMenu","WithoutGroupLabel","WithoutDivider","WithoutDelete"];export{e as ActionsMenu,r as FlagIssueMenu,o as WithoutDelete,t as WithoutDivider,s as WithoutGroupLabel,C as __namedExportsOrder,y as default};

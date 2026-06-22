import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as H}from"./cn-2dOUpm6k.js";const I="_button_1d5ly_1",L="_label_1d5ly_18",M="_icon_1d5ly_22",O="_sm_1d5ly_36",k="_md_1d5ly_42",F="_lg_1d5ly_48",J="_primary_1d5ly_55",K="_secondary_1d5ly_68",Q="_tertiary_1d5ly_77",U="_ghost_1d5ly_87",X="_danger_1d5ly_96",e={button:I,label:L,icon:M,sm:O,md:k,lg:F,primary:J,secondary:K,tertiary:Q,ghost:U,danger:X};function a({variant:A="primary",size:R="md",iconLeft:d,iconRight:m,className:z,children:E,disabled:W,...C}){return r.jsxs("button",{type:"button",disabled:W,className:H(e.button,e[A],e[R],z),...C,children:[d?r.jsx("span",{className:e.icon,children:d}):null,r.jsx("span",{className:e.label,children:E}),m?r.jsx("span",{className:e.icon,children:m}):null]})}a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},iconLeft:{required:!1,tsType:{name:"ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["ButtonHTMLAttributes"]};const $={title:"Components/Button",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","ghost","danger"]},size:{control:"select",options:["sm","md","lg"]}}},t={args:{children:"Button",variant:"primary"}},n={args:{children:"Button",variant:"secondary"}},s={args:{children:"Button",variant:"tertiary"}},o={args:{children:"Button",variant:"ghost"}},i={args:{children:"Delete",variant:"danger"}},c={args:{children:"Button",disabled:!0}},l={render:()=>r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12},children:[r.jsx(a,{variant:"primary",children:"Primary"}),r.jsx(a,{variant:"secondary",children:"Secondary"}),r.jsx(a,{variant:"tertiary",children:"Tertiary"}),r.jsx(a,{variant:"ghost",children:"Ghost"}),r.jsx(a,{variant:"danger",children:"Danger"})]})};var u,p,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary'
  }
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var g,_,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'secondary'
  }
}`,...(h=(_=n.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var v,B,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'tertiary'
  }
}`,...(x=(B=s.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var f,b,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'ghost'
  }
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var S,T,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    variant: 'danger'
  }
}`,...(D=(T=i.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var N,q,w;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    disabled: true
  }
}`,...(w=(q=c.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var G,P,V;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
}`,...(V=(P=l.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const rr=["Primary","Secondary","Tertiary","Ghost","Danger","Disabled","AllVariants"];export{l as AllVariants,i as Danger,c as Disabled,o as Ghost,t as Primary,n as Secondary,s as Tertiary,rr as __namedExportsOrder,$ as default};

import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as v}from"./cn-2dOUpm6k.js";const f="_badge_5oztu_1",b="_primary_5oztu_21",x="_neutral_5oztu_21",B="_success_5oztu_25",w="_warning_5oztu_29",z="_error_5oztu_33",h="_info_5oztu_37",j="_purple_5oztu_41",E="_blue_5oztu_45",T="_subtle_5oztu_51",s={badge:f,primary:b,neutral:x,success:B,warning:w,error:z,info:h,purple:j,blue:E,subtle:T};function t({variant:e="primary",type:m="neutral",className:y,children:g,..._}){return a.jsx("span",{className:v(s.badge,s[e],s[m],y),..._,children:g})}t.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'subtle'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'subtle'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:`| 'neutral'
| 'success'
| 'warning'
| 'error'
| 'info'
| 'purple'
| 'blue'`,elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'blue'"}]},description:"",defaultValue:{value:"'neutral'",computed:!1}}},composes:["HTMLAttributes"]};const S={title:"Components/Badge",component:t,tags:["autodocs"]},r={args:{children:"Badge",variant:"primary",type:"neutral"}},l=["neutral","success","warning","error","info","purple","blue"],n={render:()=>a.jsxs("div",{style:{display:"grid",gap:12},children:[a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:l.map(e=>a.jsx(t,{variant:"primary",type:e,children:"Badge"},`p-${e}`))}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:l.map(e=>a.jsx(t,{variant:"subtle",type:e,children:"Badge"},`s-${e}`))})]})};var p,i,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    variant: 'primary',
    type: 'neutral'
  }
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var o,d,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 12
  }}>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }}>
        {BADGE_TYPES.map(type => <Badge key={\`p-\${type}\`} variant="primary" type={type}>Badge</Badge>)}
      </div>
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }}>
        {BADGE_TYPES.map(type => <Badge key={\`s-\${type}\`} variant="subtle" type={type}>Badge</Badge>)}
      </div>
    </div>
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const N=["PrimaryNeutral","AllTypes"];export{n as AllTypes,r as PrimaryNeutral,N as __namedExportsOrder,S as default};

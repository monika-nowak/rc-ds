import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as w}from"./cn-2dOUpm6k.js";const b="_badge_wbxwr_1",x="_primary_wbxwr_21",v="_neutral_wbxwr_21",f="_success_wbxwr_25",B="_warning_wbxwr_29",h="_error_wbxwr_33",j="_info_wbxwr_37",E="_purple_wbxwr_41",T="_blue_wbxwr_45",A="_subtle_wbxwr_51",l={badge:b,primary:x,neutral:v,success:f,warning:B,error:h,info:j,purple:E,blue:T,subtle:A};function s({variant:e="primary",type:m="neutral",className:y,children:g,..._}){return r.jsx("span",{className:w(l.badge,l[e],l[m],y),..._,children:g})}s.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'subtle'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'subtle'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:`| 'neutral'
| 'success'
| 'warning'
| 'error'
| 'info'
| 'purple'
| 'blue'`,elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'blue'"}]},description:"",defaultValue:{value:"'neutral'",computed:!1}}},composes:["HTMLAttributes"]};const N={title:"Components/Badge",component:s,tags:["autodocs"]},a={args:{children:"Badge",variant:"primary",type:"neutral"}},t=["neutral","success","warning","error","info","purple","blue"],n={render:()=>r.jsxs("div",{style:{display:"grid",gap:12},children:[r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:t.map(e=>r.jsx(s,{variant:"primary",type:e,children:"Badge"},`p-${e}`))}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:t.map(e=>r.jsx(s,{variant:"subtle",type:e,children:"Badge"},`s-${e}`))})]})};var p,i,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    variant: 'primary',
    type: 'neutral'
  }
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var o,d,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const W=["PrimaryNeutral","AllTypes"];export{n as AllTypes,a as PrimaryNeutral,W as __namedExportsOrder,N as default};

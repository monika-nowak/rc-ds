import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as x}from"./cn-2dOUpm6k.js";const v="_badge_rqrxg_1",f="_primary_rqrxg_21",b="_neutral_rqrxg_21",B="_success_rqrxg_25",q="_warning_rqrxg_29",w="_error_rqrxg_33",h="_info_rqrxg_37",j="_purple_rqrxg_41",E="_blue_rqrxg_45",T="_subtle_rqrxg_51",l={badge:v,primary:f,neutral:b,success:B,warning:q,error:w,info:h,purple:j,blue:E,subtle:T};function s({variant:e="primary",type:m="neutral",className:g,children:y,..._}){return r.jsx("span",{className:x(l.badge,l[e],l[m],g),..._,children:y})}s.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'subtle'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'subtle'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:`| 'neutral'
| 'success'
| 'warning'
| 'error'
| 'info'
| 'purple'
| 'blue'`,elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'blue'"}]},description:"",defaultValue:{value:"'neutral'",computed:!1}}},composes:["HTMLAttributes"]};const S={title:"Components/Badge",component:s,tags:["autodocs"]},a={args:{children:"Badge",variant:"primary",type:"neutral"}},t=["neutral","success","warning","error","info","purple","blue"],n={render:()=>r.jsxs("div",{style:{display:"grid",gap:12},children:[r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:t.map(e=>r.jsx(s,{variant:"primary",type:e,children:"Badge"},`p-${e}`))}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:t.map(e=>r.jsx(s,{variant:"subtle",type:e,children:"Badge"},`s-${e}`))})]})};var p,i,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const N=["PrimaryNeutral","AllTypes"];export{n as AllTypes,a as PrimaryNeutral,N as __namedExportsOrder,S as default};

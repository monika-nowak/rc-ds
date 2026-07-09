import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as D}from"./cn-2dOUpm6k.js";const V="_root_1fgmk_1",W="_success_1fgmk_8",$="_warning_1fgmk_12",C="_error_1fgmk_16",H="_info_1fgmk_20",L="_neutral_1fgmk_24",R="_dot_1fgmk_28",l={root:V,success:W,warning:$,error:C,info:H,neutral:L,dot:R};function e({variant:P,count:u,label:p,className:q,...O}){return a.jsxs("span",{className:D("rc-label-md",l.root,l[P],q),role:"status",...O,children:[a.jsx("span",{className:l.dot,"aria-hidden":!0}),a.jsx("span",{children:u!=null?`${u} ${p}`:p})]})}e.__docgenInfo={description:"",methods:[],displayName:"StatusIndicator",props:{variant:{required:!0,tsType:{name:"union",raw:`| 'success'
| 'warning'
| 'error'
| 'info'
| 'neutral'`,elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'neutral'"}]},description:""},count:{required:!1,tsType:{name:"number"},description:'Optional count prefix shown before the label (e.g. 7 in "7 Auto-mapped"). Omit for a label-only status.'},label:{required:!0,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const G={title:"Components/Status Indicator",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["success","warning","error","info","neutral"]},count:{control:"number"},label:{control:"text"}}},r={args:{variant:"success",count:7,label:"Auto-mapped"}},n={args:{variant:"warning",count:3,label:"Needs review"}},s={args:{variant:"error",count:2,label:"Failed"}},t={args:{variant:"info",count:5,label:"In progress"}},o={args:{variant:"neutral",count:1,label:"Pending"}},c={name:"All variants",args:{variant:"success",count:7,label:"Auto-mapped"},render:()=>a.jsxs("div",{style:{display:"inline-flex",flexDirection:"column",alignItems:"flex-start",gap:"var(--rc-spacing-3)"},children:[a.jsx(e,{variant:"success",count:7,label:"Auto-mapped"}),a.jsx(e,{variant:"warning",count:3,label:"Needs review"}),a.jsx(e,{variant:"error",count:2,label:"Failed"}),a.jsx(e,{variant:"info",count:5,label:"In progress"}),a.jsx(e,{variant:"neutral",count:1,label:"Pending"})]})},i={name:"Mapping summary",args:{variant:"success",count:7,label:"Auto-mapped"},render:()=>a.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"var(--rc-spacing-6)"},children:[a.jsx(e,{variant:"success",count:7,label:"Auto-mapped"}),a.jsx(e,{variant:"warning",count:3,label:"Needs review"})]})};var d,m,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    count: 7,
    label: 'Auto-mapped'
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,b,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    count: 3,
    label: 'Needs review'
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,_,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    count: 2,
    label: 'Failed'
  }
}`,...(I=(_=s.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var S,w,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    count: 5,
    label: 'In progress'
  }
}`,...(y=(w=t.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var A,j,N;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'neutral',
    count: 1,
    label: 'Pending'
  }
}`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var h,k,M;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'All variants',
  args: {
    variant: 'success',
    count: 7,
    label: 'Auto-mapped'
  },
  render: () => <div style={{
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 'var(--rc-spacing-3)'
  }}>
      <StatusIndicator variant="success" count={7} label="Auto-mapped" />
      <StatusIndicator variant="warning" count={3} label="Needs review" />
      <StatusIndicator variant="error" count={2} label="Failed" />
      <StatusIndicator variant="info" count={5} label="In progress" />
      <StatusIndicator variant="neutral" count={1} label="Pending" />
    </div>
}`,...(M=(k=c.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var T,E,F;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Mapping summary',
  args: {
    variant: 'success',
    count: 7,
    label: 'Auto-mapped'
  },
  render: () => <div style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--rc-spacing-6)'
  }}>
      <StatusIndicator variant="success" count={7} label="Auto-mapped" />
      <StatusIndicator variant="warning" count={3} label="Needs review" />
    </div>
}`,...(F=(E=i.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const J=["Success","Warning","Error","Info","Neutral","AllVariants","MappingSummary"];export{c as AllVariants,s as Error,t as Info,i as MappingSummary,o as Neutral,r as Success,n as Warning,J as __namedExportsOrder,G as default};

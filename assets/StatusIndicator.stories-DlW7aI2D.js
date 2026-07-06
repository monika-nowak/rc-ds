import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as D}from"./cn-2dOUpm6k.js";const V="_root_1fgmk_1",W="_success_1fgmk_8",H="_warning_1fgmk_12",L="_error_1fgmk_16",O="_info_1fgmk_20",R="_neutral_1fgmk_24",z="_dot_1fgmk_28",l={root:V,success:W,warning:H,error:L,info:O,neutral:R,dot:z};function e({variant:E,count:F,label:P,className:q,...C}){return a.jsxs("span",{className:D("rc-label-md",l.root,l[E],q),role:"status",...C,children:[a.jsx("span",{className:l.dot,"aria-hidden":!0}),a.jsxs("span",{children:[F," ",P]})]})}e.__docgenInfo={description:"",methods:[],displayName:"StatusIndicator",props:{variant:{required:!0,tsType:{name:"union",raw:`| 'success'
| 'warning'
| 'error'
| 'info'
| 'neutral'`,elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'neutral'"}]},description:""},count:{required:!0,tsType:{name:"number"},description:'Count prefix shown before the label (e.g. 7 in "7 Auto-mapped").'},label:{required:!0,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const J={title:"Components/Status Indicator",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["success","warning","error","info","neutral"]},count:{control:"number"},label:{control:"text"}}},r={args:{variant:"success",count:7,label:"Auto-mapped"}},n={args:{variant:"warning",count:3,label:"Needs review"}},s={args:{variant:"error",count:2,label:"Failed"}},t={args:{variant:"info",count:5,label:"In progress"}},o={args:{variant:"neutral",count:1,label:"Pending"}},c={name:"All variants",args:{variant:"success",count:7,label:"Auto-mapped"},render:()=>a.jsxs("div",{style:{display:"inline-flex",flexDirection:"column",alignItems:"flex-start",gap:"var(--rc-spacing-3)"},children:[a.jsx(e,{variant:"success",count:7,label:"Auto-mapped"}),a.jsx(e,{variant:"warning",count:3,label:"Needs review"}),a.jsx(e,{variant:"error",count:2,label:"Failed"}),a.jsx(e,{variant:"info",count:5,label:"In progress"}),a.jsx(e,{variant:"neutral",count:1,label:"Pending"})]})},i={name:"Mapping summary",args:{variant:"success",count:7,label:"Auto-mapped"},render:()=>a.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"var(--rc-spacing-6)"},children:[a.jsx(e,{variant:"success",count:7,label:"Auto-mapped"}),a.jsx(e,{variant:"warning",count:3,label:"Needs review"})]})};var u,p,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    count: 7,
    label: 'Auto-mapped'
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,g,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    count: 3,
    label: 'Needs review'
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,f,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    count: 2,
    label: 'Failed'
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var _,I,S;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    count: 5,
    label: 'In progress'
  }
}`,...(S=(I=t.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var w,y,A;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'neutral',
    count: 1,
    label: 'Pending'
  }
}`,...(A=(y=o.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var j,N,h;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(h=(N=c.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var k,M,T;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(T=(M=i.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const K=["Success","Warning","Error","Info","Neutral","AllVariants","MappingSummary"];export{c as AllVariants,s as Error,t as Info,i as MappingSummary,o as Neutral,r as Success,n as Warning,K as __namedExportsOrder,J as default};

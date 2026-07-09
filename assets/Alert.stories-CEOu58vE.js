import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as z,s as b,a as I}from"./Warning.es-CuJUbBrY.js";import{n as T}from"./Flag.es-Bms5NN41.js";import{c as N}from"./cn-2dOUpm6k.js";import"./iframe-BuZpaoXC.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-BUpxiAvL.js";const R="_alert_olpl0_1",E="_icon_olpl0_9",W="_content_olpl0_24",q="_error_olpl0_28",k="_warning_olpl0_38",U="_success_olpl0_48",Y="_info_olpl0_58",r={alert:R,icon:E,content:W,error:q,warning:k,success:U,info:Y};function s({type:S="info",children:C,className:F,icon:a}){return e.jsxs("div",{className:N("rc-body-sm",r.alert,r[S],F),role:"status",children:[a?e.jsx("span",{className:r.icon,children:a}):null,e.jsx("div",{className:r.content,children:C})]})}s.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""}}};const J={title:"Components/Alert",component:s,tags:["autodocs"]},i={args:{type:"error",icon:e.jsx(T,{size:20,weight:"fill"}),children:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"This teaches the model – it doesn’t change the report."}),e.jsx("br",{}),"Use Flag when the AI got something wrong. To just reword the text, use Edit instead."]})}},o={args:{type:"warning",icon:e.jsx(z,{size:20,weight:"fill"}),children:"Review this section before publishing."}},n={args:{type:"success",icon:e.jsx(b,{size:20,weight:"fill"}),children:"Changes saved successfully."}},t={args:{type:"info",icon:e.jsx(I,{size:20,weight:"fill"}),children:"This action can be undone from version history."}},c={args:{children:"Alert"},render:()=>e.jsxs("div",{style:{display:"grid",gap:16,maxWidth:480},children:[e.jsxs(s,{type:"error",icon:e.jsx(T,{size:20,weight:"fill"}),children:[e.jsx("strong",{children:"Flag an issue"})," when the AI got something wrong."]}),e.jsx(s,{type:"warning",icon:e.jsx(z,{size:20,weight:"fill"}),children:"Review before publishing."}),e.jsx(s,{type:"success",icon:e.jsx(b,{size:20,weight:"fill"}),children:"Saved successfully."}),e.jsx(s,{type:"info",icon:e.jsx(I,{size:20,weight:"fill"}),children:"You can undo this from version history."})]})};var l,d,g;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'error',
    icon: <Flag size={20} weight="fill" />,
    children: <>
        <strong>This teaches the model – it doesn’t change the report.</strong>
        <br />
        Use Flag when the AI got something wrong. To just reword the text, use Edit instead.
      </>
  }
}`,...(g=(d=i.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,p,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    icon: <WarningIcon size={20} weight="fill" />,
    children: 'Review this section before publishing.'
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,f,w;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'success',
    icon: <CheckCircle size={20} weight="fill" />,
    children: 'Changes saved successfully.'
  }
}`,...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var y,x,_;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'info',
    icon: <InfoIcon size={20} weight="fill" />,
    children: 'This action can be undone from version history.'
  }
}`,...(_=(x=t.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var j,v,A;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Alert'
  },
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    maxWidth: 480
  }}>
      <Alert type="error" icon={<Flag size={20} weight="fill" />}>
        <strong>Flag an issue</strong> when the AI got something wrong.
      </Alert>
      <Alert type="warning" icon={<WarningIcon size={20} weight="fill" />}>
        Review before publishing.
      </Alert>
      <Alert type="success" icon={<CheckCircle size={20} weight="fill" />}>
        Saved successfully.
      </Alert>
      <Alert type="info" icon={<InfoIcon size={20} weight="fill" />}>
        You can undo this from version history.
      </Alert>
    </div>
}`,...(A=(v=c.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const K=["Error","Warning","Success","Info","AllTypes"];export{c as AllTypes,i as Error,t as Info,n as Success,o as Warning,K as __namedExportsOrder,J as default};

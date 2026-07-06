import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as s}from"./MappingRow-v7lABEuu.js";import"./Icon-6KlfR_aX.js";import"./cn-2dOUpm6k.js";import"./iframe-DBX0v1Wm.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-zeqnIraZ.js";import"./CaretRight.es-C7OiW3AX.js";import"./CaretDown.es-CCRlVziS.js";import"./Minus.es-gPxNOu_K.js";import"./Warning.es-BxbdZV1j.js";import"./Flag.es-D0A0cjfy.js";import"./Trash.es-ChueP44e.js";import"./Select-Ce8Zpatj.js";import"./Divider-BhWe8uDS.js";const t=[{kind:"option",id:"sentiment",label:"Sentiment"},{kind:"option",id:"score",label:"Score"},{kind:"option",id:"topic",label:"Topic"},{kind:"option",id:"date",label:"Date"}],A={title:"Components/Mapping Row",component:s,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Column mapping row for the upload pipeline. Unmapped rows use error borders; the arrow connector and placeholder chevron use `icon/tertiary` for subtle decorative emphasis."}}},argTypes:{state:{control:"select",options:["mapped","unmapped"]}},decorators:[h=>e.jsx("div",{style:{maxWidth:640,width:"100%"},children:e.jsx(h,{})})]},o={name:"Unmapped",args:{sourceField:"sentiment_score",state:"unmapped",placeholder:"Select field",options:t}},a={name:"Mapped",args:{sourceField:"sentiment_score",state:"mapped",placeholder:"Select field",options:t,defaultValue:"sentiment"}},r={name:"All states",args:{sourceField:"sentiment_score",state:"unmapped",options:t},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--rc-spacing-4)",width:"100%"},children:[e.jsx(s,{sourceField:"sentiment_score",state:"unmapped",placeholder:"Select field",options:t}),e.jsx(s,{sourceField:"record_date",state:"mapped",placeholder:"Select field",options:t,defaultValue:"date"})]})};var p,n,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Unmapped',
  args: {
    sourceField: 'sentiment_score',
    state: 'unmapped',
    placeholder: 'Select field',
    options: targetFieldOptions
  }
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,l,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Mapped',
  args: {
    sourceField: 'sentiment_score',
    state: 'mapped',
    placeholder: 'Select field',
    options: targetFieldOptions,
    defaultValue: 'sentiment'
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'All states',
  args: {
    sourceField: 'sentiment_score',
    state: 'unmapped',
    options: targetFieldOptions
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--rc-spacing-4)',
    width: '100%'
  }}>
      <MappingRow sourceField="sentiment_score" state="unmapped" placeholder="Select field" options={targetFieldOptions} />
      <MappingRow sourceField="record_date" state="mapped" placeholder="Select field" options={targetFieldOptions} defaultValue="date" />
    </div>
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const V=["Unmapped","Mapped","AllStates"];export{r as AllStates,a as Mapped,o as Unmapped,V as __namedExportsOrder,A as default};

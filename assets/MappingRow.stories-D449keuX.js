import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as a,a as R}from"./MappingRowGroup-q1vqUs8k.js";import"./iframe-okLCOoZf.js";import"./preload-helper-Uod2V3eo.js";import"./Icon-D1Mi1OoL.js";import"./cn-2dOUpm6k.js";import"./IconBase.es-DLmrfCuS.js";import"./CaretRight.es-BOg3ZnOv.js";import"./CaretDown.es-CsqFuBgP.js";import"./Minus.es-hMcAcDyQ.js";import"./Warning.es-B4vTOCq-.js";import"./Flag.es-D_cVYw98.js";import"./Trash.es-CHXGmJNG.js";import"./Select-Cv0LJq_N.js";import"./Divider-BhWe8uDS.js";const t=[{kind:"option",id:"sentiment",label:"Sentiment"},{kind:"option",id:"score",label:"Score"},{kind:"option",id:"topic",label:"Topic"},{kind:"option",id:"date",label:"Date"}],D={title:"Components/Mapping Row",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Column mapping row for the upload pipeline. Unmapped rows use error borders; the arrow connector and placeholder chevron use `icon/tertiary` for subtle decorative emphasis."}}},decorators:[H=>e.jsx("div",{style:{maxWidth:640,width:"100%"},children:e.jsx(H,{})})]},o={name:"Unmapped",args:{sourceField:"sentiment_score",state:"unmapped",placeholder:"Select field",options:t}},s={name:"Mapped",args:{sourceField:"sentiment_score",state:"mapped",placeholder:"Select field",options:t,defaultValue:"sentiment"}},r={name:"All states",args:{sourceField:"sentiment_score",state:"unmapped",options:t},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--rc-spacing-4)",width:"100%"},children:[e.jsx(a,{sourceField:"sentiment_score",state:"unmapped",placeholder:"Select field",options:t}),e.jsx(a,{sourceField:"record_date",state:"mapped",placeholder:"Select field",options:t,defaultValue:"date"})]})},n={name:"Validation Row",parameters:{docs:{description:{story:"Single validation row — change `sourceField`, `status.label`, and `message` for each issue. Layout and error styling stay the same."}}},args:{variant:"validation",sourceField:"HCP Name",status:{label:"Missing",tone:"error"},message:"No value found in this column for the uploaded file."}},i={name:"Validation Context",parameters:{docs:{description:{story:'Related validation rows wrapped in `MappingRowGroup` with `context`, rendering the error-tinted "Validation Context" panel from Figma. Each row is the same component with different text props.'}}},args:{variant:"validation",sourceField:"HCP Name",status:{label:"Missing",tone:"error"},message:"No value found in this column for the uploaded file."},render:()=>e.jsxs(R,{context:!0,children:[e.jsx(a,{variant:"validation",sourceField:"HCP Name",status:{label:"Missing",tone:"error"},message:"No value found in this column for the uploaded file."}),e.jsx(a,{variant:"validation",sourceField:"HCP Name",status:{label:"Wrong name",tone:"error"},message:"Expected HCP Name but found Question in your file."})]})},l={name:"All validation states",parameters:{docs:{description:{story:"Validation rows wrapped in `MappingRowGroup`, which aligns them into clean columns: chips share the widest chip width, status pills line up, and messages start at the same x. Shows the available pill tones: warning, error, success, and neutral."}}},args:{variant:"validation",sourceField:"HCP Name",status:{label:"Missing",tone:"error"},message:"Add a column named HCP Name to your file."},render:()=>e.jsxs(R,{children:[e.jsx(a,{variant:"validation",sourceField:"HCP Name",status:{label:"Missing",tone:"error"},message:"Add a column named HCP Name to your file."}),e.jsx(a,{variant:"validation",sourceField:"MSL Name",status:{label:"Wrong name",tone:"error"},message:"Found CSL instead. Rename the column to MSL Name."}),e.jsx(a,{variant:"validation",sourceField:"Territory",status:{label:"Matched",tone:"success"},message:"Mapped to Territory."}),e.jsx(a,{variant:"validation",sourceField:"Notes",status:{label:"Ignored",tone:"neutral"},message:"Column Notes will not be imported."})]})};var d,p,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Unmapped',
  args: {
    sourceField: 'sentiment_score',
    state: 'unmapped',
    placeholder: 'Select field',
    options: targetFieldOptions
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Mapped',
  args: {
    sourceField: 'sentiment_score',
    state: 'mapped',
    placeholder: 'Select field',
    options: targetFieldOptions,
    defaultValue: 'sentiment'
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,v,w;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(w=(v=r.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var f,M,F;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Validation Row',
  parameters: {
    docs: {
      description: {
        story: 'Single validation row — change \`sourceField\`, \`status.label\`, and \`message\` for each issue. Layout and error styling stay the same.'
      }
    }
  },
  args: {
    variant: 'validation',
    sourceField: 'HCP Name',
    status: {
      label: 'Missing',
      tone: 'error'
    },
    message: 'No value found in this column for the uploaded file.'
  }
}`,...(F=(M=n.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var x,b,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Validation Context',
  parameters: {
    docs: {
      description: {
        story: 'Related validation rows wrapped in \`MappingRowGroup\` with \`context\`, rendering the error-tinted "Validation Context" panel from Figma. Each row is the same component with different text props.'
      }
    }
  },
  args: {
    variant: 'validation',
    sourceField: 'HCP Name',
    status: {
      label: 'Missing',
      tone: 'error'
    },
    message: 'No value found in this column for the uploaded file.'
  },
  render: () => <MappingRowGroup context>
      <MappingRow variant="validation" sourceField="HCP Name" status={{
      label: 'Missing',
      tone: 'error'
    }} message="No value found in this column for the uploaded file." />
      <MappingRow variant="validation" sourceField="HCP Name" status={{
      label: 'Wrong name',
      tone: 'error'
    }} message="Expected HCP Name but found Question in your file." />
    </MappingRowGroup>
}`,...(N=(b=i.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var C,S,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'All validation states',
  parameters: {
    docs: {
      description: {
        story: 'Validation rows wrapped in \`MappingRowGroup\`, which aligns them into clean columns: chips share the widest chip width, status pills line up, and messages start at the same x. Shows the available pill tones: warning, error, success, and neutral.'
      }
    }
  },
  args: {
    variant: 'validation',
    sourceField: 'HCP Name',
    status: {
      label: 'Missing',
      tone: 'error'
    },
    message: 'Add a column named HCP Name to your file.'
  },
  render: () => <MappingRowGroup>
      <MappingRow variant="validation" sourceField="HCP Name" status={{
      label: 'Missing',
      tone: 'error'
    }} message="Add a column named HCP Name to your file." />
      <MappingRow variant="validation" sourceField="MSL Name" status={{
      label: 'Wrong name',
      tone: 'error'
    }} message="Found CSL instead. Rename the column to MSL Name." />
      <MappingRow variant="validation" sourceField="Territory" status={{
      label: 'Matched',
      tone: 'success'
    }} message="Mapped to Territory." />
      <MappingRow variant="validation" sourceField="Notes" status={{
      label: 'Ignored',
      tone: 'neutral'
    }} message="Column Notes will not be imported." />
    </MappingRowGroup>
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const q=["Unmapped","Mapped","AllStates","ValidationRow","ValidationContext","AllValidationStates"];export{r as AllStates,l as AllValidationStates,s as Mapped,o as Unmapped,i as ValidationContext,n as ValidationRow,q as __namedExportsOrder,D as default};

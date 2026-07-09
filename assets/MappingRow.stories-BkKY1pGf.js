import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as a,a as A}from"./MappingRowGroup-Dyc6TPF6.js";import"./iframe-SpVpO4_-.js";import"./preload-helper-Uod2V3eo.js";import"./Icon-quxERthd.js";import"./cn-2dOUpm6k.js";import"./IconBase.es-nCges0Do.js";import"./CaretRight.es-BtMKu1HW.js";import"./CaretDown.es-9dx_bpTB.js";import"./Minus.es-Bx0-RUTF.js";import"./Warning.es-BndqD_7T.js";import"./Flag.es-CW4_NuCL.js";import"./Trash.es-BBxtDL8P.js";import"./Select-BM56CfCk.js";import"./Divider-BhWe8uDS.js";const t=[{kind:"option",id:"sentiment",label:"Sentiment"},{kind:"option",id:"score",label:"Score"},{kind:"option",id:"topic",label:"Topic"},{kind:"option",id:"date",label:"Date"}],K={title:"Components/Mapping Row",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Column mapping row for the upload pipeline. Unmapped rows use error borders; the arrow connector and placeholder chevron use `icon/tertiary` for subtle decorative emphasis."}}},decorators:[L=>e.jsx("div",{style:{maxWidth:640,width:"100%"},children:e.jsx(L,{})})]},o={name:"Unmapped",args:{sourceField:"sentiment_score",state:"unmapped",placeholder:"Select field",options:t}},s={name:"Mapped",args:{sourceField:"sentiment_score",state:"mapped",placeholder:"Select field",options:t,defaultValue:"sentiment"}},r={name:"All states",args:{sourceField:"sentiment_score",state:"unmapped",options:t},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--rc-spacing-4)",width:"100%"},children:[e.jsx(a,{sourceField:"sentiment_score",state:"unmapped",placeholder:"Select field",options:t}),e.jsx(a,{sourceField:"record_date",state:"mapped",placeholder:"Select field",options:t,defaultValue:"date"})]})},n={name:"Validation — Missing",parameters:{docs:{description:{story:'Validation variant (matches the Figma "upload-error" screen): gray chip, arrow, error-tone status badge, and message.'}}},args:{variant:"validation",sourceField:"HCP Name",status:{label:"Missing",tone:"error"},message:"Add a column named HCP Name to your file."}},i={name:"Validation — Wrong name",parameters:{docs:{description:{story:"Validation variant used when a column exists but is named incorrectly."}}},args:{variant:"validation",sourceField:"MSL Name",status:{label:"Wrong name",tone:"error"},message:"Found CSL instead. Rename the column to MSL Name."}},d={name:"Validation context",parameters:{docs:{description:{story:'Related validation rows wrapped in `MappingRowGroup` with `context`, rendering the amber "Validation Context" panel from Figma. Rows still align into clean columns via subgrid.'}}},args:{variant:"validation",sourceField:"HCP Name",status:{label:"Missing",tone:"error"},message:"Add a column named HCP Name to your file."},render:()=>e.jsxs(A,{context:!0,children:[e.jsx(a,{variant:"validation",sourceField:"HCP Name",status:{label:"Missing",tone:"error"},message:"Add a column named HCP Name to your file."}),e.jsx(a,{variant:"validation",sourceField:"MSL Name",status:{label:"Wrong name",tone:"error"},message:"Found CSL instead. Rename the column to MSL Name."})]})},l={name:"All validation states",parameters:{docs:{description:{story:"Validation rows wrapped in `MappingRowGroup`, which aligns them into clean columns: chips share the widest chip width, status pills line up, and messages start at the same x. Shows the available pill tones: warning, error, success, and neutral."}}},args:{variant:"validation",sourceField:"HCP Name",status:{label:"Missing",tone:"error"},message:"Add a column named HCP Name to your file."},render:()=>e.jsxs(A,{children:[e.jsx(a,{variant:"validation",sourceField:"HCP Name",status:{label:"Missing",tone:"error"},message:"Add a column named HCP Name to your file."}),e.jsx(a,{variant:"validation",sourceField:"MSL Name",status:{label:"Wrong name",tone:"error"},message:"Found CSL instead. Rename the column to MSL Name."}),e.jsx(a,{variant:"validation",sourceField:"Territory",status:{label:"Matched",tone:"success"},message:"Mapped to Territory."}),e.jsx(a,{variant:"validation",sourceField:"Notes",status:{label:"Ignored",tone:"neutral"},message:"Column Notes will not be imported."})]})};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Unmapped',
  args: {
    sourceField: 'sentiment_score',
    state: 'unmapped',
    placeholder: 'Select field',
    options: targetFieldOptions
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,g,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Mapped',
  args: {
    sourceField: 'sentiment_score',
    state: 'mapped',
    placeholder: 'Select field',
    options: targetFieldOptions,
    defaultValue: 'sentiment'
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,M,w;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(M=r.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var F,S,b;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Validation — Missing',
  parameters: {
    docs: {
      description: {
        story: 'Validation variant (matches the Figma "upload-error" screen): gray chip, arrow, error-tone status badge, and message.'
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
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var N,C,y;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Validation — Wrong name',
  parameters: {
    docs: {
      description: {
        story: 'Validation variant used when a column exists but is named incorrectly.'
      }
    }
  },
  args: {
    variant: 'validation',
    sourceField: 'MSL Name',
    status: {
      label: 'Wrong name',
      tone: 'error'
    },
    message: 'Found CSL instead. Rename the column to MSL Name.'
  }
}`,...(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var x,R,f;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Validation context',
  parameters: {
    docs: {
      description: {
        story: 'Related validation rows wrapped in \`MappingRowGroup\` with \`context\`, rendering the amber "Validation Context" panel from Figma. Rows still align into clean columns via subgrid.'
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
  render: () => <MappingRowGroup context>
      <MappingRow variant="validation" sourceField="HCP Name" status={{
      label: 'Missing',
      tone: 'error'
    }} message="Add a column named HCP Name to your file." />
      <MappingRow variant="validation" sourceField="MSL Name" status={{
      label: 'Wrong name',
      tone: 'error'
    }} message="Found CSL instead. Rename the column to MSL Name." />
    </MappingRowGroup>
}`,...(f=(R=d.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var V,H,P;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(P=(H=l.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};const Q=["Unmapped","Mapped","AllStates","ValidationMissing","ValidationWrongName","ValidationContext","AllValidationStates"];export{r as AllStates,l as AllValidationStates,s as Mapped,o as Unmapped,d as ValidationContext,n as ValidationMissing,i as ValidationWrongName,Q as __namedExportsOrder,K as default};

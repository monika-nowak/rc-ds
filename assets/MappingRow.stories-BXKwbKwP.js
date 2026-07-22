import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as a,a as m}from"./MappingRowGroup-BADAsopO.js";import"./iframe-DVYlbdCj.js";import"./preload-helper-Uod2V3eo.js";import"./Icon-CvApckDy.js";import"./cn-2dOUpm6k.js";import"./IconBase.es-B2CDjfeH.js";import"./CaretRight.es-DZQcZDHf.js";import"./CaretDown.es-dcCKaQIp.js";import"./Minus.es-jJJNhrfV.js";import"./Warning.es-xNai1R_s.js";import"./Flag.es-BdG3sE1r.js";import"./Trash.es-ByI4ZgPH.js";import"./Badge-BFZJJhva.js";import"./Select-BKMjN_wA.js";import"./Divider-BhWe8uDS.js";const t=[{kind:"option",id:"sentiment",label:"Sentiment"},{kind:"option",id:"score",label:"Score"},{kind:"option",id:"topic",label:"Topic"},{kind:"option",id:"date",label:"Date"}],$={title:"Components/Mapping Row",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Column mapping row for the upload pipeline. Field labels, status badges, and match indicators compose existing `Badge` and `Icon` primitives; this component owns layout only."}}},decorators:[T=>e.jsx("div",{style:{maxWidth:640,width:"100%"},children:e.jsx(T,{})})]},s={name:"Unmapped",args:{sourceField:"sentiment_score",state:"unmapped",placeholder:"Select field",options:t}},o={name:"Mapped",args:{sourceField:"sentiment_score",state:"mapped",placeholder:"Select field",options:t,defaultValue:"sentiment"}},r={name:"All states",args:{sourceField:"sentiment_score",state:"unmapped",options:t},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--rc-spacing-4)",width:"100%"},children:[e.jsx(a,{sourceField:"sentiment_score",state:"unmapped",placeholder:"Select field",options:t}),e.jsx(a,{sourceField:"record_date",state:"mapped",placeholder:"Select field",options:t,defaultValue:"date"})]})},i={name:"Mapping review",parameters:{docs:{description:{story:'Review screen mixing resolved mappings (`variant="resolved"`) with validation issues (`variant="validation"`) in a flat list. Resolved rows show the mapped target and match percentage; validation rows show the status pill and helper message.'}}},render:()=>e.jsxs(m,{layout:"list",children:[e.jsx(a,{variant:"resolved",sourceField:"Call date",targetField:"Timestamp",matchPercent:100}),e.jsx(a,{variant:"resolved",sourceField:"MSL Name",targetField:"MSL",matchPercent:100}),e.jsx(a,{variant:"validation",sourceField:"HCP Name",status:{label:"Missing",tone:"error"},message:e.jsxs(e.Fragment,{children:["Add a column named ",e.jsx("strong",{children:"HCP Name"})," to your file."]})}),e.jsx(a,{variant:"resolved",sourceField:"HCP Name",targetField:"HCP",matchPercent:100})]})},n={name:"Resolved",args:{variant:"resolved",sourceField:"Call date",targetField:"Timestamp",matchPercent:100}},l={name:"Validation Row",parameters:{docs:{description:{story:"Single validation row — change `sourceField`, `status.label`, and `message` for each issue. Layout and error styling stay the same."}}},args:{variant:"validation",sourceField:"HCP Name",status:{label:"Missing",tone:"error"},message:"No value found in this column for the uploaded file."}},d={name:"Validation Context",parameters:{docs:{description:{story:'Related validation rows wrapped in `MappingRowGroup` with `context`, rendering the error-tinted "Validation Context" panel from Figma. Each row is the same component with different text props.'}}},args:{variant:"validation",sourceField:"HCP Name",status:{label:"Missing",tone:"error"},message:"No value found in this column for the uploaded file."},render:()=>e.jsxs(m,{context:!0,children:[e.jsx(a,{variant:"validation",sourceField:"HCP Name",status:{label:"Missing",tone:"error"},message:"No value found in this column for the uploaded file."}),e.jsx(a,{variant:"validation",sourceField:"HCP Name",status:{label:"Wrong name",tone:"error"},message:"Expected HCP Name but found Question in your file."})]})},p={name:"All validation states",parameters:{docs:{description:{story:"Validation rows wrapped in `MappingRowGroup`, which aligns them into clean columns: chips share the widest chip width, status pills line up, and messages start at the same x. Shows the available pill tones: warning, error, success, and neutral."}}},args:{variant:"validation",sourceField:"HCP Name",status:{label:"Missing",tone:"error"},message:"Add a column named HCP Name to your file."},render:()=>e.jsxs(m,{children:[e.jsx(a,{variant:"validation",sourceField:"HCP Name",status:{label:"Missing",tone:"error"},message:"Add a column named HCP Name to your file."}),e.jsx(a,{variant:"validation",sourceField:"MSL Name",status:{label:"Wrong name",tone:"error"},message:"Found CSL instead. Rename the column to MSL Name."}),e.jsx(a,{variant:"validation",sourceField:"Territory",status:{label:"Matched",tone:"success"},message:"Mapped to Territory."}),e.jsx(a,{variant:"validation",sourceField:"Notes",status:{label:"Ignored",tone:"neutral"},message:"Column Notes will not be imported."})]})};var c,u,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Unmapped',
  args: {
    sourceField: 'sentiment_score',
    state: 'unmapped',
    placeholder: 'Select field',
    options: targetFieldOptions
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,h,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Mapped',
  args: {
    sourceField: 'sentiment_score',
    state: 'mapped',
    placeholder: 'Select field',
    options: targetFieldOptions,
    defaultValue: 'sentiment'
  }
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var F,M,f;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(f=(M=r.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var R,x,C;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Mapping review',
  parameters: {
    docs: {
      description: {
        story: 'Review screen mixing resolved mappings (\`variant="resolved"\`) with validation issues (\`variant="validation"\`) in a flat list. Resolved rows show the mapped target and match percentage; validation rows show the status pill and helper message.'
      }
    }
  },
  render: () => <MappingRowGroup layout="list">
      <MappingRow variant="resolved" sourceField="Call date" targetField="Timestamp" matchPercent={100} />
      <MappingRow variant="resolved" sourceField="MSL Name" targetField="MSL" matchPercent={100} />
      <MappingRow variant="validation" sourceField="HCP Name" status={{
      label: 'Missing',
      tone: 'error'
    }} message={<>
            Add a column named <strong>HCP Name</strong> to your file.
          </>} />
      <MappingRow variant="resolved" sourceField="HCP Name" targetField="HCP" matchPercent={100} />
    </MappingRowGroup>
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var N,y,S;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Resolved',
  args: {
    variant: 'resolved',
    sourceField: 'Call date',
    targetField: 'Timestamp',
    matchPercent: 100
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var b,P,H;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(H=(P=l.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var j,V,A;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(V=d.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var L,_,G;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(G=(_=p.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};const ee=["Unmapped","Mapped","AllStates","MappingReview","ResolvedRow","ValidationRow","ValidationContext","AllValidationStates"];export{r as AllStates,p as AllValidationStates,o as Mapped,i as MappingReview,n as ResolvedRow,s as Unmapped,d as ValidationContext,l as ValidationRow,ee as __namedExportsOrder,$ as default};

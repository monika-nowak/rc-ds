import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./iframe-DVYlbdCj.js";import{B as L}from"./Button-DJR8o6Ri.js";import{M as n}from"./MappingRowGroup-BADAsopO.js";import{c as w}from"./cn-2dOUpm6k.js";import"./preload-helper-Uod2V3eo.js";import"./Icon-CvApckDy.js";import"./IconBase.es-B2CDjfeH.js";import"./CaretRight.es-DZQcZDHf.js";import"./CaretDown.es-dcCKaQIp.js";import"./Minus.es-jJJNhrfV.js";import"./Warning.es-xNai1R_s.js";import"./Flag.es-BdG3sE1r.js";import"./Trash.es-ByI4ZgPH.js";import"./Badge-BFZJJhva.js";import"./Select-BKMjN_wA.js";import"./Divider-BhWe8uDS.js";const D="_root_lmmgy_1",N="_header_lmmgy_8",k="_columnLabel_lmmgy_15",q="_connectorSpacer_lmmgy_21",I="_rows_lmmgy_26",a={root:D,header:N,columnLabel:k,connectorSpacer:q,rows:I};function s({sourceColumnLabel:r="Field from file",targetColumnLabel:i="Map to field",showColumnHeaders:l=!0,children:u,className:t}){return e.jsxs("div",{className:w(a.root,t),children:[l?e.jsxs("div",{className:a.header,role:"row",children:[e.jsx("span",{className:w("rc-label-md",a.columnLabel),children:r}),e.jsx("span",{className:a.connectorSpacer,"aria-hidden":!0}),e.jsx("span",{className:w("rc-label-md",a.columnLabel),children:i})]}):null,e.jsx("div",{className:a.rows,children:u})]})}s.__docgenInfo={description:"",methods:[],displayName:"MappingTable",props:{sourceColumnLabel:{required:!1,tsType:{name:"string"},description:"Label above the source column.",defaultValue:{value:"'Field from file'",computed:!1}},targetColumnLabel:{required:!1,tsType:{name:"string"},description:"Label above the target select column.",defaultValue:{value:"'Map to field'",computed:!1}},showColumnHeaders:{required:!1,tsType:{name:"boolean"},description:"Show the column header row.",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:'Any number of `MappingRow` children — render one per source column from the uploaded file.\nMap over your column list in the parent and pass `state="mapped"` when a target is selected.'},className:{required:!1,tsType:{name:"string"},description:""}}};const o=[{kind:"option",id:"treatment-sequencing",label:"Treatment sequencing"},{kind:"option",id:"patient-id",label:"Patient ID"},{kind:"option",id:"visit-date",label:"Visit date"},{kind:"option",id:"sentiment",label:"Sentiment"},{kind:"option",id:"score",label:"Score"},{kind:"option",id:"topic",label:"Topic"}],te={title:"Components/Mapping Table",component:s,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Field mapping table for the upload pipeline. Pass any number of `MappingRow` children — one per source column. Column headers use `text/tertiary` and align with `MappingRow` source and select columns; the arrow column has no header."}}},decorators:[r=>e.jsx("div",{style:{maxWidth:640,width:"100%"},children:e.jsx(r,{})})]},d={name:"Field mapping",args:{children:null},parameters:{docs:{description:{story:"Typical upload mapping with three source columns. Unmapped rows show error borders until a target field is selected. Add more rows by rendering additional `MappingRow` children or mapping over your column list."}}},render:()=>e.jsxs(s,{children:[e.jsx(n,{sourceField:"KIT Treatment Sequencing",state:"unmapped",placeholder:"Select field",options:o}),e.jsx(n,{sourceField:"Patient Identifier",state:"mapped",placeholder:"Select field",options:o,defaultValue:"patient-id"}),e.jsx(n,{sourceField:"Visit Date",state:"unmapped",placeholder:"Select field",options:o})]})},O=[{id:"kit-treatment",sourceField:"KIT Treatment Sequencing"},{id:"patient-id",sourceField:"Patient Identifier",targetValue:"patient-id"},{id:"visit-date",sourceField:"Visit Date"}],p={name:"Dynamic rows",args:{children:null},parameters:{docs:{description:{story:'Map over your column list to render rows. Use `state="mapped"` when `targetValue` is set; otherwise `state="unmapped"` shows error borders.'}}},render:function(){const[i,l]=C.useState(O),u=()=>{const t=i.length+1;l(g=>[...g,{id:`column-${t}`,sourceField:`New column ${t}`}])};return e.jsxs("div",{style:{display:"grid",gap:"var(--rc-spacing-4)"},children:[e.jsx(s,{children:i.map(t=>e.jsx(n,{sourceField:t.sourceField,state:t.targetValue?"mapped":"unmapped",placeholder:"Select field",options:o,value:t.targetValue,onValueChange:g=>{l(V=>V.map(h=>h.id===t.id?{...h,targetValue:g}:h))}},t.id))}),e.jsx("div",{children:e.jsx(L,{type:"button",variant:"secondary",size:"sm",onClick:u,children:"Add row"})})]})}},c={name:"Custom column labels",args:{children:null,sourceColumnLabel:"Source column",targetColumnLabel:"Destination field"},render:r=>e.jsx(s,{...r,children:e.jsx(n,{sourceField:"sentiment_score",state:"unmapped",placeholder:"Select field",options:o})})},m={name:"Without headers",args:{children:null,showColumnHeaders:!1},render:r=>e.jsx(s,{...r,children:e.jsx(n,{sourceField:"sentiment_score",state:"unmapped",placeholder:"Select field",options:o})})};var f,y,b;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Field mapping',
  args: {
    children: null
  },
  parameters: {
    docs: {
      description: {
        story: 'Typical upload mapping with three source columns. Unmapped rows show error borders until a target field is selected. Add more rows by rendering additional \`MappingRow\` children or mapping over your column list.'
      }
    }
  },
  render: () => <MappingTable>
      <MappingRow sourceField="KIT Treatment Sequencing" state="unmapped" placeholder="Select field" options={targetFieldOptions} />
      <MappingRow sourceField="Patient Identifier" state="mapped" placeholder="Select field" options={targetFieldOptions} defaultValue="patient-id" />
      <MappingRow sourceField="Visit Date" state="unmapped" placeholder="Select field" options={targetFieldOptions} />
    </MappingTable>
}`,...(b=(y=d.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var F,x,S;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Dynamic rows',
  args: {
    children: null
  },
  parameters: {
    docs: {
      description: {
        story: 'Map over your column list to render rows. Use \`state="mapped"\` when \`targetValue\` is set; otherwise \`state="unmapped"\` shows error borders.'
      }
    }
  },
  render: function DynamicRowsStory() {
    const [rows, setRows] = useState(initialDynamicRows);
    const addRow = () => {
      const index = rows.length + 1;
      setRows(current => [...current, {
        id: \`column-\${index}\`,
        sourceField: \`New column \${index}\`
      }]);
    };
    return <div style={{
      display: 'grid',
      gap: 'var(--rc-spacing-4)'
    }}>
        <MappingTable>
          {rows.map(row => <MappingRow key={row.id} sourceField={row.sourceField} state={row.targetValue ? 'mapped' : 'unmapped'} placeholder="Select field" options={targetFieldOptions} value={row.targetValue} onValueChange={targetValue => {
          setRows(current => current.map(entry => entry.id === row.id ? {
            ...entry,
            targetValue
          } : entry));
        }} />)}
        </MappingTable>
        <div>
          <Button type="button" variant="secondary" size="sm" onClick={addRow}>
            Add row
          </Button>
        </div>
      </div>;
  }
}`,...(S=(x=p.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var M,v,R;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Custom column labels',
  args: {
    children: null,
    sourceColumnLabel: 'Source column',
    targetColumnLabel: 'Destination field'
  },
  render: args => <MappingTable {...args}>
      <MappingRow sourceField="sentiment_score" state="unmapped" placeholder="Select field" options={targetFieldOptions} />
    </MappingTable>
}`,...(R=(v=c.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var T,j,_;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Without headers',
  args: {
    children: null,
    showColumnHeaders: false
  },
  render: args => <MappingTable {...args}>
      <MappingRow sourceField="sentiment_score" state="unmapped" placeholder="Select field" options={targetFieldOptions} />
    </MappingTable>
}`,...(_=(j=m.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};const re=["FieldMapping","DynamicRows","CustomLabels","WithoutHeaders"];export{c as CustomLabels,p as DynamicRows,d as FieldMapping,m as WithoutHeaders,re as __namedExportsOrder,te as default};

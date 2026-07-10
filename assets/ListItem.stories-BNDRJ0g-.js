import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./iframe-okLCOoZf.js";import{D as _e}from"./DatePicker-6t4_QH3d.js";import{S as Ce}from"./Select-Cv0LJq_N.js";import{n as je}from"./Icon-D1Mi1OoL.js";import{C as Re}from"./Checkbox-DZovaYUJ.js";import{R as Me}from"./Radio-D_84V3sp.js";import{D as Fe}from"./Divider-BhWe8uDS.js";import{c as l}from"./cn-2dOUpm6k.js";import"./preload-helper-Uod2V3eo.js";import"./CaretRight.es-BOg3ZnOv.js";import"./IconBase.es-DLmrfCuS.js";import"./CaretDown.es-CsqFuBgP.js";import"./Minus.es-hMcAcDyQ.js";import"./Warning.es-B4vTOCq-.js";import"./Flag.es-D_cVYw98.js";import"./Trash.es-CHXGmJNG.js";const Ie="_card_1u2e3_2",Ve="_cardChecked_1u2e3_12",De="_cardExpanded_1u2e3_16",ze="_header_1u2e3_21",Ee="_controlSlot_1u2e3_36",Ae="_cardAddNew_1u2e3_41",Pe="_addNewLabel_1u2e3_45",Ke="_addNewLabelPrefix_1u2e3_52",We="_disabled_1u2e3_56",Te="_selectableLabel_1u2e3_60",Be="_meta_1u2e3_67",Ge="_metaValue_1u2e3_75",He="_metaLabel_1u2e3_79",Ue="_panel_1u2e3_83",Oe="_filters_1u2e3_88",$e="_file_1u2e3_108",qe="_fileTile_1u2e3_120",Je="_fileContent_1u2e3_132",Qe="_fileName_1u2e3_143",Xe="_fileSize_1u2e3_147",Ye="_fileColumn_1u2e3_152",a={card:Ie,cardChecked:Ve,cardExpanded:De,header:ze,controlSlot:Ee,cardAddNew:Ae,addNewLabel:Pe,addNewLabelPrefix:Ke,disabled:We,selectableLabel:Te,meta:Be,metaValue:Ge,metaLabel:He,panel:Ue,filters:Oe,file:$e,fileTile:qe,fileContent:Je,fileName:Qe,fileSize:Xe,fileColumn:Ye};function t(o){const{className:r}=o;if(o.type==="file"){const{fileName:i,fileSize:d,icon:p,rows:h,date:m}=o;return e.jsxs("div",{className:l(a.file,r),children:[e.jsx("div",{className:a.fileTile,"aria-hidden":!0,children:p??e.jsx(je,{size:24,weight:"regular"})}),e.jsxs("div",{className:a.fileContent,children:[e.jsx("span",{className:l("rc-label-lg",a.fileName),children:i}),d!=null?e.jsx("span",{className:l("rc-body-sm",a.fileSize),children:d}):null]}),h!=null?e.jsx("span",{className:l("rc-body-sm",a.fileColumn),children:h}):null,m!=null?e.jsx("span",{className:l("rc-body-sm",a.fileColumn),children:m}):null]})}return o.type==="radio"?e.jsx(ea,{...o,className:r}):e.jsx(Ze,{...o,className:r})}function Ze({className:o,label:r,metaValue:i,metaLabel:d="records",checked:p,defaultChecked:h,onCheckedChange:m,disabled:u,children:b}){const[y,w]=f.useState(h??!1),c=p??y,s=!!b&&c,C=n=>{p===void 0&&w(n),m==null||m(n)},j=()=>{u||C(!c)},x=n=>{u||(n.key===" "||n.key==="Enter")&&(n.preventDefault(),j())},R={checked:c,onChange:n=>C(n.target.checked)};return e.jsxs("div",{className:l(a.card,c&&a.cardChecked,s&&a.cardExpanded,u&&a.disabled,o),children:[e.jsxs("div",{className:a.header,role:"button",tabIndex:u?-1:0,"aria-pressed":c,"aria-expanded":b?s:void 0,onClick:j,onKeyDown:x,children:[e.jsx("div",{className:a.controlSlot,onClick:n=>n.stopPropagation(),children:e.jsx(Re,{showLabel:!1,disabled:u,...R})}),e.jsx("span",{className:l("rc-label-lg",a.selectableLabel),children:r}),i?e.jsxs("div",{className:a.meta,children:[e.jsx("span",{className:l("rc-label-md",a.metaValue),children:i}),e.jsx("span",{className:l("rc-body-sm",a.metaLabel),children:d})]}):null]}),s?e.jsxs(e.Fragment,{children:[e.jsx(Fe,{}),e.jsx("div",{className:a.panel,children:b})]}):null]})}function ea({className:o,variant:r="default",label:i,metaValue:d,metaLabel:p="records",name:h,value:m,checked:u,defaultChecked:b,onChange:y,onAddNewClick:w,disabled:c}){const s=r==="add-new",[C,j]=f.useState(b??!1),x=!s&&(u??C),R=()=>{c||s||(u===void 0&&j(!0),y==null||y(m))},n=()=>{c||w==null||w()},z=()=>{if(s){n();return}R()},ke=S=>{c||(S.key===" "||S.key==="Enter")&&(S.preventDefault(),z())},Ne={name:h,value:m,checked:x,onChange:()=>s?n():R(),tabIndex:s?-1:void 0};return e.jsx("div",{className:l(a.card,x&&a.cardChecked,s&&a.cardAddNew,c&&a.disabled,o),children:e.jsxs("div",{className:a.header,role:s?"button":void 0,"aria-pressed":s?void 0:x,tabIndex:c?-1:0,onClick:z,onKeyDown:ke,children:[e.jsx("div",{className:a.controlSlot,onClick:S=>S.stopPropagation(),children:e.jsx(Me,{showLabel:!1,disabled:c,...Ne})}),e.jsx("span",{className:l(s?l("rc-body-md",a.addNewLabel):l("rc-label-lg",a.selectableLabel),s&&a.addNewLabelPrefix),children:i}),!s&&d?e.jsxs("div",{className:a.meta,children:[e.jsx("span",{className:l("rc-label-md",a.metaValue),children:d}),e.jsx("span",{className:l("rc-body-sm",a.metaLabel),children:p})]}):null]})})}t.__docgenInfo={description:"",methods:[],displayName:"ListItem"};const aa=[{kind:"option",id:"all",label:"All"},{kind:"option",id:"oncology",label:"Oncology"},{kind:"option",id:"cardiology",label:"Cardiology"}];function D(){return e.jsxs("div",{className:a.filters,children:[e.jsx(_e,{label:"Date range",placeholder:"All time",showHelperText:!1}),e.jsx(Ce,{label:"Specialty",placeholder:"All",options:aa,defaultValue:"all",showHelperText:!1})]})}const xa={title:"Components/List Item",component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"List row variants: selectable (checkbox + optional expand panel), radio (single-select group), and file. Pass `children` on selectable rows to reveal a filter panel when checked."}}}},g={args:{type:"selectable",label:"MSL Records",metaValue:"2,430",metaLabel:"records"},parameters:{docs:{description:{story:"Toggle the checkbox to expand or collapse the filter panel."}}},render:function(){const[r,i]=f.useState(!0);return e.jsx("div",{style:{maxWidth:720,width:"100%"},children:e.jsx(t,{type:"selectable",label:"MSL Records",metaValue:"2,430",metaLabel:"records",checked:r,onCheckedChange:i,children:e.jsx(D,{})})})}},M={args:{type:"selectable",label:"MSL Records",metaValue:"2,430",metaLabel:"records"}},F={args:{type:"selectable",label:"MSL Records"},render:function(){const[r,i]=f.useState(!0),[d,p]=f.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:720,width:"100%"},children:[e.jsx(t,{type:"selectable",label:"MSL Records",metaValue:"2,430",metaLabel:"records",checked:r,onCheckedChange:i,children:e.jsx(D,{})}),e.jsx(t,{type:"selectable",label:"Social Media Listening",metaValue:"2,430",metaLabel:"records",checked:d,onCheckedChange:p,children:e.jsx(D,{})})]})}},L={args:{type:"file",fileName:"File-name.csv",fileSize:"87.2 KB",rows:"248 rows",date:"May 5, 2026"},parameters:{docs:{description:{story:"File row with a leading icon tile. The `fileSize`, `rows`, and `date` columns are each optional and render only when provided."}}}},v={args:{type:"file",fileName:"File-name.csv"},parameters:{docs:{description:{story:"Each column (`fileSize`, `rows`, `date`) renders only when its prop is provided, so rows can show any combination."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:720,width:"100%"},children:[e.jsx(t,{type:"file",fileName:"File-name.csv",fileSize:"87.2 KB",rows:"248 rows",date:"May 5, 2026"}),e.jsx(t,{type:"file",fileName:"File-name.csv",fileSize:"87.2 KB"}),e.jsx(t,{type:"file",fileName:"File-name.csv",rows:"248 rows"}),e.jsx(t,{type:"file",fileName:"File-name.csv",date:"May 5, 2026"}),e.jsx(t,{type:"file",fileName:"File-name.csv"})]})},k={args:{type:"radio",label:"MSL Records",metaValue:"2,430",metaLabel:"records",name:"example",value:"a",checked:!0},parameters:{docs:{description:{story:"Single radio row (selected). In production, multiple rows share the same `name` so only one can be selected — see **RadioGroup**."}}}},N={args:{type:"radio",label:"MSL Records",metaValue:"2,430",metaLabel:"records",name:"example",value:"a",checked:!1},parameters:{docs:{description:{story:"Single radio row (unselected). In production, multiple rows share the same `name` for single-select grouping."}}}},_={args:{type:"radio",variant:"add-new",label:"New data source",name:"example",value:"new",onAddNewClick:()=>{}},parameters:{docs:{description:{story:"Add-new row in a radio list. Shares `name` with sibling rows in production; activation calls `onAddNewClick` rather than selecting."}}}},I={args:{type:"selectable",label:"MSL Records"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:720,width:"100%"},children:[e.jsx(t,{type:"selectable",label:"MSL Records",metaValue:"2,430",metaLabel:"records",defaultChecked:!0,children:e.jsx(D,{})}),e.jsx(t,{type:"file",fileName:"File-name.csv",fileSize:"87.2 KB",rows:"248 rows",date:"May 5, 2026"})]})},V={args:{type:"radio",label:"MSL Records",name:"list-selection",value:"msl"},parameters:{docs:{description:{story:"Radio single-select rows. Entire row is clickable."}}},render:function(){const[r,i]=f.useState("msl");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:720,width:"100%"},children:[e.jsx(t,{type:"radio",label:"MSL Records",metaValue:"2,430",metaLabel:"records",name:"list-selection",value:"msl",checked:r==="msl",onChange:i}),e.jsx(t,{type:"radio",label:"Social Media Listening",metaValue:"2,430",metaLabel:"records",name:"list-selection",value:"social",checked:r==="social",onChange:i}),e.jsx(t,{type:"radio",variant:"add-new",label:"New data source",name:"list-selection",value:"new",onAddNewClick:()=>{}})]})}};var E,A,P,K,W;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'selectable',
    label: 'MSL Records',
    metaValue: '2,430',
    metaLabel: 'records'
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle the checkbox to expand or collapse the filter panel.'
      }
    }
  },
  render: function SelectableStory() {
    const [checked, setChecked] = useState(true);
    return <div style={{
      maxWidth: 720,
      width: '100%'
    }}>
        <ListItem type="selectable" label="MSL Records" metaValue="2,430" metaLabel="records" checked={checked} onCheckedChange={setChecked}>
          <FilterPanel />
        </ListItem>
      </div>;
  }
}`,...(P=(A=g.parameters)==null?void 0:A.docs)==null?void 0:P.source},description:{story:"Default docs preview — toggle the checkbox to expand/collapse filters.",...(W=(K=g.parameters)==null?void 0:K.docs)==null?void 0:W.description}}};var T,B,G;M.parameters={...M.parameters,docs:{...(T=M.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'selectable',
    label: 'MSL Records',
    metaValue: '2,430',
    metaLabel: 'records'
  }
}`,...(G=(B=M.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var H,U,O;F.parameters={...F.parameters,docs:{...(H=F.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    type: 'selectable',
    label: 'MSL Records'
  },
  render: function ExpandableListStory() {
    const [mslChecked, setMslChecked] = useState(true);
    const [socialChecked, setSocialChecked] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 720,
      width: '100%'
    }}>
        <ListItem type="selectable" label="MSL Records" metaValue="2,430" metaLabel="records" checked={mslChecked} onCheckedChange={setMslChecked}>
          <FilterPanel />
        </ListItem>
        <ListItem type="selectable" label="Social Media Listening" metaValue="2,430" metaLabel="records" checked={socialChecked} onCheckedChange={setSocialChecked}>
          <FilterPanel />
        </ListItem>
      </div>;
  }
}`,...(O=(U=F.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var $,q,J,Q,X;L.parameters={...L.parameters,docs:{...($=L.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: 'file',
    fileName: 'File-name.csv',
    fileSize: '87.2 KB',
    rows: '248 rows',
    date: 'May 5, 2026'
  },
  parameters: {
    docs: {
      description: {
        story: 'File row with a leading icon tile. The \`fileSize\`, \`rows\`, and \`date\` columns are each optional and render only when provided.'
      }
    }
  }
}`,...(J=(q=L.parameters)==null?void 0:q.docs)==null?void 0:J.source},description:{story:"Full file row — icon tile, name + size, row count, and date columns.",...(X=(Q=L.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,ee,ae,se;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    type: 'file',
    fileName: 'File-name.csv'
  },
  parameters: {
    docs: {
      description: {
        story: 'Each column (\`fileSize\`, \`rows\`, \`date\`) renders only when its prop is provided, so rows can show any combination.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 720,
    width: '100%'
  }}>
      <ListItem type="file" fileName="File-name.csv" fileSize="87.2 KB" rows="248 rows" date="May 5, 2026" />
      <ListItem type="file" fileName="File-name.csv" fileSize="87.2 KB" />
      <ListItem type="file" fileName="File-name.csv" rows="248 rows" />
      <ListItem type="file" fileName="File-name.csv" date="May 5, 2026" />
      <ListItem type="file" fileName="File-name.csv" />
    </div>
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Every metadata column is independently toggleable.",...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.description}}};var le,te,re,oe,ie;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    type: 'radio',
    label: 'MSL Records',
    metaValue: '2,430',
    metaLabel: 'records',
    name: 'example',
    value: 'a',
    checked: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Single radio row (selected). In production, multiple rows share the same \`name\` so only one can be selected — see **RadioGroup**.'
      }
    }
  }
}`,...(re=(te=k.parameters)==null?void 0:te.docs)==null?void 0:re.source},description:{story:"Single radio row — selected. In production, multiple rows share the same `name` for grouping.",...(ie=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:ie.description}}};var ne,ce,de,me,pe;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    type: 'radio',
    label: 'MSL Records',
    metaValue: '2,430',
    metaLabel: 'records',
    name: 'example',
    value: 'a',
    checked: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Single radio row (unselected). In production, multiple rows share the same \`name\` for single-select grouping.'
      }
    }
  }
}`,...(de=(ce=N.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:"Single radio row — unselected.",...(pe=(me=N.parameters)==null?void 0:me.docs)==null?void 0:pe.description}}};var ue,he,fe,be,ye;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    type: 'radio',
    variant: 'add-new',
    label: 'New data source',
    name: 'example',
    value: 'new',
    onAddNewClick: () => {
      /* open add-new flow */
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Add-new row in a radio list. Shares \`name\` with sibling rows in production; activation calls \`onAddNewClick\` rather than selecting.'
      }
    }
  }
}`,...(fe=(he=_.parameters)==null?void 0:he.docs)==null?void 0:fe.source},description:{story:"Add-new radio row — opens a create flow instead of selecting.",...(ye=(be=_.parameters)==null?void 0:be.docs)==null?void 0:ye.description}}};var we,xe,Se;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    type: 'selectable',
    label: 'MSL Records'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 720,
    width: '100%'
  }}>
      <ListItem type="selectable" label="MSL Records" metaValue="2,430" metaLabel="records" defaultChecked>
        <FilterPanel />
      </ListItem>
      <ListItem type="file" fileName="File-name.csv" fileSize="87.2 KB" rows="248 rows" date="May 5, 2026" />
    </div>
}`,...(Se=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var ge,Le,ve;V.parameters={...V.parameters,docs:{...(ge=V.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    type: 'radio',
    label: 'MSL Records',
    name: 'list-selection',
    value: 'msl'
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio single-select rows. Entire row is clickable.'
      }
    }
  },
  render: function RadioGroupStory() {
    const [selected, setSelected] = useState('msl');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 720,
      width: '100%'
    }}>
        <ListItem type="radio" label="MSL Records" metaValue="2,430" metaLabel="records" name="list-selection" value="msl" checked={selected === 'msl'} onChange={setSelected} />
        <ListItem type="radio" label="Social Media Listening" metaValue="2,430" metaLabel="records" name="list-selection" value="social" checked={selected === 'social'} onChange={setSelected} />
        <ListItem type="radio" variant="add-new" label="New data source" name="list-selection" value="new" onAddNewClick={() => {
        /* open add-new flow */
      }} />
      </div>;
  }
}`,...(ve=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:ve.source}}};const Sa=["Selectable","WithoutFilters","ExpandableList","File","FileColumnVariants","RadioSelected","RadioUnchecked","RadioAddNew","AllVariants","RadioGroup"];export{I as AllVariants,F as ExpandableList,L as File,v as FileColumnVariants,_ as RadioAddNew,V as RadioGroup,k as RadioSelected,N as RadioUnchecked,g as Selectable,M as WithoutFilters,Sa as __namedExportsOrder,xa as default};

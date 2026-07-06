import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-DBX0v1Wm.js";import{D as ye}from"./DatePicker-CKp6XN8K.js";import{S as Se}from"./Select-Ce8Zpatj.js";import{s as ge}from"./Icon-6KlfR_aX.js";import{C as Le}from"./Checkbox-56xQcUuN.js";import{R as we}from"./Radio-D4W_x4t7.js";import{D as ke}from"./Divider-BhWe8uDS.js";import{c as o}from"./cn-2dOUpm6k.js";import"./preload-helper-Uod2V3eo.js";import"./CaretRight.es-C7OiW3AX.js";import"./IconBase.es-zeqnIraZ.js";import"./CaretDown.es-CCRlVziS.js";import"./Minus.es-gPxNOu_K.js";import"./Warning.es-BxbdZV1j.js";import"./Flag.es-D0A0cjfy.js";import"./Trash.es-ChueP44e.js";const _e="_card_ee7jo_2",je="_cardChecked_ee7jo_12",ve="_cardExpanded_ee7jo_16",Ne="_header_ee7jo_21",Ce="_controlSlot_ee7jo_36",Re="_cardAddNew_ee7jo_41",Ie="_addNewLabel_ee7jo_45",Me="_addNewLabelPrefix_ee7jo_52",Ve="_disabled_ee7jo_56",Ae="_selectableLabel_ee7jo_60",De="_meta_ee7jo_67",Ee="_metaValue_ee7jo_75",Pe="_metaLabel_ee7jo_79",ze="_panel_ee7jo_83",Fe="_filters_ee7jo_88",We="_file_ee7jo_108",Ke="_fileIcon_ee7jo_120",Ge="_fileContent_ee7jo_125",Be="_fileName_ee7jo_135",He="_fileSize_ee7jo_139",a={card:_e,cardChecked:je,cardExpanded:ve,header:Ne,controlSlot:Ce,cardAddNew:Re,addNewLabel:Ie,addNewLabelPrefix:Me,disabled:Ve,selectableLabel:Ae,meta:De,metaValue:Ee,metaLabel:Pe,panel:ze,filters:Fe,file:We,fileIcon:Ke,fileContent:Ge,fileName:Be,fileSize:He};function d(t){const{className:l}=t;return t.type==="file"?e.jsxs("div",{className:o(a.file,l),children:[e.jsx(ge,{size:24,weight:"regular",className:a.fileIcon,"aria-hidden":!0}),e.jsxs("div",{className:a.fileContent,children:[e.jsx("span",{className:o("rc-body-md",a.fileName),children:t.fileName}),e.jsx("span",{className:o("rc-body-sm",a.fileSize),children:t.fileSize})]})]}):t.type==="radio"?e.jsx(Ue,{...t,className:l}):e.jsx(Te,{...t,className:l})}function Te({className:t,label:l,metaValue:n,metaLabel:m="records",checked:p,defaultChecked:A,onCheckedChange:u,disabled:i,children:b}){const[f,x]=h.useState(A??!1),c=p??f,s=!!b&&c,_=r=>{p===void 0&&x(r),u==null||u(r)},j=()=>{i||_(!c)},y=r=>{i||(r.key===" "||r.key==="Enter")&&(r.preventDefault(),j())},v={checked:c,onChange:r=>_(r.target.checked)};return e.jsxs("div",{className:o(a.card,c&&a.cardChecked,s&&a.cardExpanded,i&&a.disabled,t),children:[e.jsxs("div",{className:a.header,role:"button",tabIndex:i?-1:0,"aria-pressed":c,"aria-expanded":b?s:void 0,onClick:j,onKeyDown:y,children:[e.jsx("div",{className:a.controlSlot,onClick:r=>r.stopPropagation(),children:e.jsx(Le,{showLabel:!1,disabled:i,...v})}),e.jsx("span",{className:o("rc-label-lg",a.selectableLabel),children:l}),n?e.jsxs("div",{className:a.meta,children:[e.jsx("span",{className:o("rc-label-md",a.metaValue),children:n}),e.jsx("span",{className:o("rc-body-sm",a.metaLabel),children:m})]}):null]}),s?e.jsxs(e.Fragment,{children:[e.jsx(ke,{}),e.jsx("div",{className:a.panel,children:b})]}):null]})}function Ue({className:t,variant:l="default",label:n,metaValue:m,metaLabel:p="records",name:A,value:u,checked:i,defaultChecked:b,onChange:f,onAddNewClick:x,disabled:c}){const s=l==="add-new",[_,j]=h.useState(b??!1),y=!s&&(i??_),v=()=>{c||s||(i===void 0&&j(!0),f==null||f(u))},r=()=>{c||x==null||x()},D=()=>{if(s){r();return}v()},fe=S=>{c||(S.key===" "||S.key==="Enter")&&(S.preventDefault(),D())},xe={name:A,value:u,checked:y,onChange:()=>s?r():v(),tabIndex:s?-1:void 0};return e.jsx("div",{className:o(a.card,y&&a.cardChecked,s&&a.cardAddNew,c&&a.disabled,t),children:e.jsxs("div",{className:a.header,role:s?"button":void 0,"aria-pressed":s?void 0:y,tabIndex:c?-1:0,onClick:D,onKeyDown:fe,children:[e.jsx("div",{className:a.controlSlot,onClick:S=>S.stopPropagation(),children:e.jsx(we,{showLabel:!1,disabled:c,...xe})}),e.jsx("span",{className:o(s?o("rc-body-md",a.addNewLabel):o("rc-label-lg",a.selectableLabel),s&&a.addNewLabelPrefix),children:n}),!s&&m?e.jsxs("div",{className:a.meta,children:[e.jsx("span",{className:o("rc-label-md",a.metaValue),children:m}),e.jsx("span",{className:o("rc-body-sm",a.metaLabel),children:p})]}):null]})})}d.__docgenInfo={description:"",methods:[],displayName:"ListItem"};const Oe=[{kind:"option",id:"all",label:"All"},{kind:"option",id:"oncology",label:"Oncology"},{kind:"option",id:"cardiology",label:"Cardiology"}];function V(){return e.jsxs("div",{className:a.filters,children:[e.jsx(ye,{label:"Date range",placeholder:"All time",showHelperText:!1}),e.jsx(Se,{label:"Specialty",placeholder:"All",options:Oe,defaultValue:"all",showHelperText:!1})]})}const ia={title:"Components/List Item",component:d,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"List row variants: selectable (checkbox + optional expand panel), radio (single-select group), and file. Pass `children` on selectable rows to reveal a filter panel when checked."}}}},g={args:{type:"selectable",label:"MSL Records",metaValue:"2,430",metaLabel:"records"},parameters:{docs:{description:{story:"Toggle the checkbox to expand or collapse the filter panel."}}},render:function(){const[l,n]=h.useState(!0);return e.jsx("div",{style:{maxWidth:720,width:"100%"},children:e.jsx(d,{type:"selectable",label:"MSL Records",metaValue:"2,430",metaLabel:"records",checked:l,onCheckedChange:n,children:e.jsx(V,{})})})}},N={args:{type:"selectable",label:"MSL Records",metaValue:"2,430",metaLabel:"records"}},C={args:{type:"selectable",label:"MSL Records"},render:function(){const[l,n]=h.useState(!0),[m,p]=h.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:720,width:"100%"},children:[e.jsx(d,{type:"selectable",label:"MSL Records",metaValue:"2,430",metaLabel:"records",checked:l,onCheckedChange:n,children:e.jsx(V,{})}),e.jsx(d,{type:"selectable",label:"Social Media Listening",metaValue:"2,430",metaLabel:"records",checked:m,onCheckedChange:p,children:e.jsx(V,{})})]})}},R={args:{type:"file",fileName:"data_export.csv",fileSize:"87.2 KB"}},L={args:{type:"radio",label:"MSL Records",metaValue:"2,430",metaLabel:"records",name:"example",value:"a",checked:!0},parameters:{docs:{description:{story:"Single radio row (selected). In production, multiple rows share the same `name` so only one can be selected — see **RadioGroup**."}}}},w={args:{type:"radio",label:"MSL Records",metaValue:"2,430",metaLabel:"records",name:"example",value:"a",checked:!1},parameters:{docs:{description:{story:"Single radio row (unselected). In production, multiple rows share the same `name` for single-select grouping."}}}},k={args:{type:"radio",variant:"add-new",label:"New data source",name:"example",value:"new",onAddNewClick:()=>{}},parameters:{docs:{description:{story:"Add-new row in a radio list. Shares `name` with sibling rows in production; activation calls `onAddNewClick` rather than selecting."}}}},I={args:{type:"selectable",label:"MSL Records"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:720,width:"100%"},children:[e.jsx(d,{type:"selectable",label:"MSL Records",metaValue:"2,430",metaLabel:"records",defaultChecked:!0,children:e.jsx(V,{})}),e.jsx(d,{type:"file",fileName:"data_export.csv",fileSize:"87.2 KB"})]})},M={args:{type:"radio",label:"MSL Records",name:"list-selection",value:"msl"},parameters:{docs:{description:{story:"Radio single-select rows. Entire row is clickable."}}},render:function(){const[l,n]=h.useState("msl");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:720,width:"100%"},children:[e.jsx(d,{type:"radio",label:"MSL Records",metaValue:"2,430",metaLabel:"records",name:"list-selection",value:"msl",checked:l==="msl",onChange:n}),e.jsx(d,{type:"radio",label:"Social Media Listening",metaValue:"2,430",metaLabel:"records",name:"list-selection",value:"social",checked:l==="social",onChange:n}),e.jsx(d,{type:"radio",variant:"add-new",label:"New data source",name:"list-selection",value:"new",onAddNewClick:()=>{}})]})}};var E,P,z,F,W;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(z=(P=g.parameters)==null?void 0:P.docs)==null?void 0:z.source},description:{story:"Default docs preview — toggle the checkbox to expand/collapse filters.",...(W=(F=g.parameters)==null?void 0:F.docs)==null?void 0:W.description}}};var K,G,B;N.parameters={...N.parameters,docs:{...(K=N.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    type: 'selectable',
    label: 'MSL Records',
    metaValue: '2,430',
    metaLabel: 'records'
  }
}`,...(B=(G=N.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var H,T,U;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=(T=C.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var O,$,q;R.parameters={...R.parameters,docs:{...(O=R.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: 'file',
    fileName: 'data_export.csv',
    fileSize: '87.2 KB'
  }
}`,...(q=($=R.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var J,Q,X,Y,Z;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=L.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Single radio row — selected. In production, multiple rows share the same `name` for grouping.",...(Z=(Y=L.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,ae,se,te,le;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(se=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:"Single radio row — unselected.",...(le=(te=w.parameters)==null?void 0:te.docs)==null?void 0:le.description}}};var re,oe,ce,ne,de;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ce=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:ce.source},description:{story:"Add-new radio row — opens a create flow instead of selecting.",...(de=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:de.description}}};var ie,me,pe;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
      <ListItem type="file" fileName="data_export.csv" fileSize="87.2 KB" />
    </div>
}`,...(pe=(me=I.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,he,be;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(be=(he=M.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};const ma=["Selectable","WithoutFilters","ExpandableList","File","RadioSelected","RadioUnchecked","RadioAddNew","AllVariants","RadioGroup"];export{I as AllVariants,C as ExpandableList,R as File,k as RadioAddNew,M as RadioGroup,L as RadioSelected,w as RadioUnchecked,g as Selectable,N as WithoutFilters,ma as __namedExportsOrder,ia as default};

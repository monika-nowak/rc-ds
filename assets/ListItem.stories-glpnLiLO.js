import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{s as v}from"./File.es-DKD7WV0_.js";import{C}from"./Checkbox-tz3OJT2w.js";import{c as b}from"./cn-2dOUpm6k.js";import"./iframe-BH_zNAgC.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-DDBWKy-D.js";import"./Minus.es-DieFk8IS.js";const V="_selectable_1wz7t_2",I="_selectableLabel_1wz7t_14",k="_meta_1wz7t_26",R="_metaValue_1wz7t_34",M="_metaLabel_1wz7t_43",B="_disabled_1wz7t_52",K="_file_1wz7t_58",A="_fileIcon_1wz7t_70",D="_fileContent_1wz7t_75",E="_fileName_1wz7t_85",F="_fileSize_1wz7t_94",a={selectable:V,selectableLabel:I,meta:k,metaValue:R,metaLabel:M,disabled:B,file:K,fileIcon:A,fileContent:D,fileName:E,fileSize:F};function r(t){const{className:o}=t;if(t.type==="file")return e.jsxs("div",{className:b(a.file,o),children:[e.jsx(v,{size:24,weight:"regular",className:a.fileIcon,"aria-hidden":!0}),e.jsxs("div",{className:a.fileContent,children:[e.jsx("span",{className:a.fileName,children:t.fileName}),e.jsx("span",{className:a.fileSize,children:t.fileSize})]})]});const{label:y,metaValue:n,metaLabel:j="records",checked:m,defaultChecked:d,onCheckedChange:f,disabled:p}=t,s={};return m!==void 0&&(s.checked=m),d!==void 0&&(s.defaultChecked=d),f&&(s.onChange=w=>f(w.target.checked)),e.jsxs("div",{className:b(a.selectable,p&&a.disabled,o),children:[e.jsx(C,{showLabel:!1,disabled:p,...s}),e.jsx("span",{className:a.selectableLabel,children:y}),n?e.jsxs("div",{className:a.meta,children:[e.jsx("span",{className:a.metaValue,children:n}),e.jsx("span",{className:a.metaLabel,children:j})]}):null]})}r.__docgenInfo={description:"",methods:[],displayName:"ListItem"};const Q={title:"Components/List Item",component:r,tags:["autodocs"],parameters:{layout:"padded"}},l={args:{type:"selectable",label:"MSL Records",metaValue:"2,430",metaLabel:"records"}},c={args:{type:"file",fileName:"data_export.csv",fileSize:"87.2 KB"}},i={args:{type:"selectable",label:"MSL Records"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:640,width:"100%"},children:[e.jsx(r,{type:"selectable",label:"MSL Records",metaValue:"2,430",metaLabel:"records"}),e.jsx(r,{type:"file",fileName:"data_export.csv",fileSize:"87.2 KB"})]})};var _,u,x;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'selectable',
    label: 'MSL Records',
    metaValue: '2,430',
    metaLabel: 'records'
  }
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,L,z;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'file',
    fileName: 'data_export.csv',
    fileSize: '87.2 KB'
  }
}`,...(z=(L=c.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var N,S,g;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: 'selectable',
    label: 'MSL Records'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 640,
    width: '100%'
  }}>
      <ListItem type="selectable" label="MSL Records" metaValue="2,430" metaLabel="records" />
      <ListItem type="file" fileName="data_export.csv" fileSize="87.2 KB" />
    </div>
}`,...(g=(S=i.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const T=["Selectable","File","AllVariants"];export{i as AllVariants,c as File,l as Selectable,T as __namedExportsOrder,Q as default};

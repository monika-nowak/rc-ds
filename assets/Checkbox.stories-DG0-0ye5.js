import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-Bbood9mG.js";import{n as ee,m as ae}from"./Minus.es-B3DAmIdC.js";import{c as se}from"./cn-2dOUpm6k.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-C6Ij38Yg.js";const re="_root_19aso_1",te="_iconOnly_19aso_10",le="_input_19aso_14",ne="_box_19aso_27",de="_checkIcon_19aso_41",ce="_minusIcon_19aso_42",oe="_label_19aso_70",ie="_disabled_19aso_84",s={root:re,iconOnly:te,input:le,box:ne,checkIcon:de,minusIcon:ce,label:oe,disabled:ie};function a({label:P="Label",showLabel:h=!0,disabled:f,className:Q,id:X,indeterminate:x=!1,...Y}){const b=p.useRef(null),Z=p.useId(),$=X??Z;return p.useEffect(()=>{b.current&&(b.current.indeterminate=x)},[x]),e.jsxs("label",{className:se(s.root,!h&&s.iconOnly,f&&s.disabled,Q),children:[e.jsx("input",{ref:b,id:$,type:"checkbox",className:s.input,disabled:f,...Y}),e.jsxs("span",{className:s.box,"aria-hidden":!0,children:[e.jsx(ee,{className:s.checkIcon,weight:"bold"}),e.jsx(ae,{className:s.minusIcon,weight:"bold"})]}),h?e.jsx("span",{className:s.label,children:P}):null]})}a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Label'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const xe={title:"Components/Checkbox",component:a,tags:["autodocs"],args:{label:"Label",showLabel:!0}},r={},t={args:{defaultChecked:!0}},l={args:{indeterminate:!0}},n={name:"Disabled — unchecked",args:{disabled:!0}},d={name:"Disabled — checked",args:{defaultChecked:!0,disabled:!0}},c={name:"Disabled — indeterminate",args:{indeterminate:!0,disabled:!0}},o={args:{showLabel:!1,defaultChecked:!0,label:"Select row"}},i={render:()=>e.jsx(a,{label:"Click me"})},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(a,{showLabel:!1,label:"Unchecked"}),e.jsx(a,{showLabel:!1,defaultChecked:!0,label:"Checked"}),e.jsx(a,{showLabel:!1,indeterminate:!0,label:"Indeterminate"})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:80,padding:24,alignItems:"start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:24},children:"Default"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsx(a,{label:"Unchecked"}),e.jsx(a,{label:"Checked",defaultChecked:!0}),e.jsx(a,{label:"Indeterminate",indeterminate:!0})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:24},children:"Disabled"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsx(a,{label:"Unchecked",disabled:!0}),e.jsx(a,{label:"Checked",defaultChecked:!0,disabled:!0}),e.jsx(a,{label:"Indeterminate",indeterminate:!0,disabled:!0})]})]})]})};var k,g,C;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var y,v,I;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(I=(v=t.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var _,j,D;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...(D=(j=l.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var S,L,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Disabled — unchecked',
  args: {
    disabled: true
  }
}`,...(w=(L=n.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var U,N,O;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Disabled — checked',
  args: {
    defaultChecked: true,
    disabled: true
  }
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var z,B,E;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Disabled — indeterminate',
  args: {
    indeterminate: true,
    disabled: true
  }
}`,...(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var q,R,T;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    defaultChecked: true,
    label: 'Select row'
  }
}`,...(T=(R=o.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var V,A,W;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Checkbox label="Click me" />
}`,...(W=(A=i.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var F,G,H;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <Checkbox showLabel={false} label="Unchecked" />
      <Checkbox showLabel={false} defaultChecked label="Checked" />
      <Checkbox showLabel={false} indeterminate label="Indeterminate" />
    </div>
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,M;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 80,
    padding: 24,
    alignItems: 'start'
  }}>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 24
      }}>Default</div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Indeterminate" indeterminate />
        </div>
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 24
      }}>Disabled</div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          <Checkbox label="Unchecked" disabled />
          <Checkbox label="Checked" defaultChecked disabled />
          <Checkbox label="Indeterminate" indeterminate disabled />
        </div>
      </div>
    </div>
}`,...(M=(K=u.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const ke=["Unchecked","Checked","Indeterminate","DisabledUnchecked","DisabledChecked","DisabledIndeterminate","WithoutLabel","Interactive","Standalone","AllStates"];export{u as AllStates,t as Checked,d as DisabledChecked,c as DisabledIndeterminate,n as DisabledUnchecked,l as Indeterminate,i as Interactive,m as Standalone,r as Unchecked,o as WithoutLabel,ke as __namedExportsOrder,xe as default};

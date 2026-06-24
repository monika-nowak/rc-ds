import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as re}from"./iframe-CHWteash.js";import{c as m}from"./cn-2dOUpm6k.js";import"./preload-helper-Uod2V3eo.js";const ae="_field_7d6ub_1",le="_label_7d6ub_9",te="_input_7d6ub_18",se="_error_7d6ub_38",oe="_focus_7d6ub_39",de="_helper_7d6ub_55",ie="_helperError_7d6ub_64",ne="_disabled_7d6ub_68",r={field:ae,label:le,input:te,error:se,focus:oe,helper:de,helperError:ie,disabled:ne};function a({label:h,helperText:b,showLabel:J=!0,showHelperText:K=!0,state:p="default",className:Q,id:U,disabled:X,...Y}){const Z=re.useId(),f=U??Z,$=J&&h,ee=K&&b,x=X||p==="disabled",g=p==="error";return e.jsxs("div",{className:m(r.field,x&&r.disabled,Q),children:[$?e.jsx("label",{className:r.label,htmlFor:f,children:h}):null,e.jsx("input",{id:f,disabled:x,className:m(r.input,p==="focus"&&r.focus,g&&r.error),...Y}),ee?e.jsx("span",{className:m(r.helper,g&&r.helperError),children:b}):null]})}a.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show the label row. Matches Figma `Label` boolean property.",defaultValue:{value:"true",computed:!1}},showHelperText:{required:!1,tsType:{name:"boolean"},description:"Show helper text below the field. Matches Figma `Helper Text` boolean property.",defaultValue:{value:"true",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'focus' | 'filled' | 'error' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}},composes:["InputHTMLAttributes"]};const he={title:"Components/Input",component:a,tags:["autodocs"],args:{label:"Label",placeholder:"Placeholder",helperText:"Helper text",showLabel:!0,showHelperText:!0},argTypes:{showLabel:{control:"boolean"},showHelperText:{control:"boolean"}}},l={},t={args:{state:"focus"}},s={args:{defaultValue:"Value text"}},o={args:{defaultValue:"Value text",helperText:"Error message",state:"error"}},d={args:{state:"disabled"}},i={args:{showLabel:!1,defaultValue:"Value text"}},n={args:{showHelperText:!1,defaultValue:"Value text"}},c={args:{showLabel:!1,showHelperText:!1,placeholder:"Placeholder"}},u={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 280px)",gap:48,padding:24,alignItems:"start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Default"}),e.jsx(a,{label:"Label",placeholder:"Placeholder",helperText:"Helper text"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Focus"}),e.jsx(a,{label:"Label",placeholder:"Placeholder",helperText:"Helper text",state:"focus"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Filled"}),e.jsx(a,{label:"Label",defaultValue:"Value text",helperText:"Helper text"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Error"}),e.jsx(a,{label:"Label",defaultValue:"Value text",helperText:"Error message",state:"error"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Disabled"}),e.jsx(a,{label:"Label",placeholder:"Placeholder",helperText:"Helper text",state:"disabled"})]})]})};var v,T,_;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(_=(T=l.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var V,y,L;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    state: 'focus'
  }
}`,...(L=(y=t.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var S,j,H;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Value text'
  }
}`,...(H=(j=s.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var w,E,I;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Value text',
    helperText: 'Error message',
    state: 'error'
  }
}`,...(I=(E=o.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var F,z,B;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(B=(z=d.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var D,P,q;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    defaultValue: 'Value text'
  }
}`,...(q=(P=i.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var N,W,A;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    showHelperText: false,
    defaultValue: 'Value text'
  }
}`,...(A=(W=n.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var C,M,O;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    showHelperText: false,
    placeholder: 'Placeholder'
  }
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var R,k,G;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 280px)',
    gap: 48,
    padding: 24,
    alignItems: 'start'
  }}>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Default</div>
        <Input label="Label" placeholder="Placeholder" helperText="Helper text" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Focus</div>
        <Input label="Label" placeholder="Placeholder" helperText="Helper text" state="focus" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Filled</div>
        <Input label="Label" defaultValue="Value text" helperText="Helper text" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Error</div>
        <Input label="Label" defaultValue="Value text" helperText="Error message" state="error" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Disabled</div>
        <Input label="Label" placeholder="Placeholder" helperText="Helper text" state="disabled" />
      </div>
    </div>
}`,...(G=(k=u.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};const be=["Default","Focus","Filled","Error","Disabled","WithoutLabel","WithoutHelper","FieldOnly","AllStates"];export{u as AllStates,l as Default,d as Disabled,o as Error,c as FieldOnly,s as Filled,t as Focus,n as WithoutHelper,i as WithoutLabel,be as __namedExportsOrder,he as default};

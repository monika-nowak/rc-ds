import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ae}from"./iframe-Di2CNPDO.js";import{c as m}from"./cn-2dOUpm6k.js";import"./preload-helper-Uod2V3eo.js";const se="_field_1v1gx_1",te="_label_1v1gx_9",le="_textarea_1v1gx_18",oe="_error_1v1gx_40",ie="_focus_1v1gx_41",de="_helper_1v1gx_57",ne="_helperError_1v1gx_66",ce="_disabled_1v1gx_70",r={field:se,label:te,textarea:le,error:oe,focus:ie,helper:de,helperError:ne,disabled:ce};function a({label:h,helperText:x,showLabel:K=!0,showHelperText:P=!0,state:u="default",rows:Q=4,className:U,id:X,disabled:Y,...Z}){const $=ae.useId(),f=X??$,ee=K&&h,re=P&&x,g=Y||u==="disabled",b=u==="error";return e.jsxs("div",{className:m(r.field,g&&r.disabled,U),children:[ee?e.jsx("label",{className:r.label,htmlFor:f,children:h}):null,e.jsx("textarea",{id:f,rows:Q,disabled:g,className:m(r.textarea,u==="focus"&&r.focus,b&&r.error),...Z}),re?e.jsx("span",{className:m(r.helper,b&&r.helperError),children:x}):null]})}a.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showHelperText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'focus' | 'filled' | 'error' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}}},composes:["TextareaHTMLAttributes"]};const xe={title:"Components/Text Area",component:a,tags:["autodocs"],args:{label:"Label",placeholder:"Add a note…",helperText:"Helper text",showLabel:!0,showHelperText:!0},argTypes:{showLabel:{control:"boolean"},showHelperText:{control:"boolean"}}},s={},t={args:{state:"focus"}},l={args:{defaultValue:"This is a longer note that wraps across multiple lines in the text area field."}},o={args:{defaultValue:"This note is too long for the allowed limit.",helperText:"Error message",state:"error"}},i={args:{state:"disabled"}},d={args:{showLabel:!1,defaultValue:"This is a longer note that wraps across multiple lines."}},n={args:{showHelperText:!1,defaultValue:"This is a longer note that wraps across multiple lines."}},c={args:{showLabel:!1,showHelperText:!1,placeholder:"Add a note…"}},p={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 280px)",gap:48,padding:24,alignItems:"start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Default"}),e.jsx(a,{label:"Label",placeholder:"Add a note…",helperText:"Helper text"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Focus"}),e.jsx(a,{label:"Label",placeholder:"Add a note…",helperText:"Helper text",state:"focus"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Filled"}),e.jsx(a,{label:"Label",defaultValue:"This is a longer note that wraps across multiple lines.",helperText:"Helper text"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Error"}),e.jsx(a,{label:"Label",defaultValue:"This note exceeds the limit.",helperText:"Error message",state:"error"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Disabled"}),e.jsx(a,{label:"Label",placeholder:"Add a note…",helperText:"Helper text",state:"disabled"})]})]})};var v,T,_;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(_=(T=s.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var w,y,j;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    state: 'focus'
  }
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var L,S,A;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    defaultValue: 'This is a longer note that wraps across multiple lines in the text area field.'
  }
}`,...(A=(S=l.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var H,E,V;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    defaultValue: 'This note is too long for the allowed limit.',
    helperText: 'Error message',
    state: 'error'
  }
}`,...(V=(E=o.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var F,z,B;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(B=(z=i.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var D,q,I;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    defaultValue: 'This is a longer note that wraps across multiple lines.'
  }
}`,...(I=(q=d.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var N,W,C;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    showHelperText: false,
    defaultValue: 'This is a longer note that wraps across multiple lines.'
  }
}`,...(C=(W=n.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var O,M,R;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    showHelperText: false,
    placeholder: 'Add a note…'
  }
}`,...(R=(M=c.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var k,G,J;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
        <TextArea label="Label" placeholder="Add a note…" helperText="Helper text" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Focus</div>
        <TextArea label="Label" placeholder="Add a note…" helperText="Helper text" state="focus" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Filled</div>
        <TextArea label="Label" defaultValue="This is a longer note that wraps across multiple lines." helperText="Helper text" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Error</div>
        <TextArea label="Label" defaultValue="This note exceeds the limit." helperText="Error message" state="error" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Disabled</div>
        <TextArea label="Label" placeholder="Add a note…" helperText="Helper text" state="disabled" />
      </div>
    </div>
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const fe=["Default","Focus","Filled","Error","Disabled","WithoutLabel","WithoutHelper","FieldOnly","AllStates"];export{p as AllStates,s as Default,i as Disabled,o as Error,c as FieldOnly,l as Filled,t as Focus,n as WithoutHelper,d as WithoutLabel,fe as __namedExportsOrder,xe as default};

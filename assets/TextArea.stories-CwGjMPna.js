import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as re}from"./iframe-BotCSNRQ.js";import{c as s}from"./cn-2dOUpm6k.js";import"./preload-helper-Uod2V3eo.js";const se="_field_e2ap9_1",le="_label_e2ap9_9",te="_textarea_e2ap9_13",oe="_error_e2ap9_30",ie="_focus_e2ap9_31",de="_helper_e2ap9_47",ne="_helperError_e2ap9_51",ce="_disabled_e2ap9_55",a={field:se,label:le,textarea:te,error:oe,focus:ie,helper:de,helperError:ne,disabled:ce};function r({label:h,helperText:f,showLabel:K=!0,showHelperText:P=!0,state:m="default",rows:Q=4,className:U,id:X,disabled:Y,...Z}){const $=re.useId(),x=X??$,ee=K&&h,ae=P&&f,b=Y||m==="disabled",g=m==="error";return e.jsxs("div",{className:s(a.field,b&&a.disabled,U),children:[ee?e.jsx("label",{className:s("rc-label-md",a.label),htmlFor:x,children:h}):null,e.jsx("textarea",{id:x,rows:Q,disabled:b,className:s("rc-body-sm",a.textarea,m==="focus"&&a.focus,g&&a.error),...Z}),ae?e.jsx("span",{className:s("rc-helper-sm",a.helper,g&&a.helperError),children:f}):null]})}r.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showHelperText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'focus' | 'filled' | 'error' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}}},composes:["TextareaHTMLAttributes"]};const fe={title:"Components/Text Area",component:r,tags:["autodocs"],args:{label:"Label",placeholder:"Add a note…",helperText:"Helper text",showLabel:!0,showHelperText:!0},argTypes:{showLabel:{control:"boolean"},showHelperText:{control:"boolean"}}},l={},t={args:{state:"focus"}},o={args:{defaultValue:"This is a longer note that wraps across multiple lines in the text area field."}},i={args:{defaultValue:"This note is too long for the allowed limit.",helperText:"Error message",state:"error"}},d={args:{state:"disabled"}},n={args:{showLabel:!1,defaultValue:"This is a longer note that wraps across multiple lines."}},c={args:{showHelperText:!1,defaultValue:"This is a longer note that wraps across multiple lines."}},p={args:{showLabel:!1,showHelperText:!1,placeholder:"Add a note…"}},u={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 280px)",gap:48,padding:24,alignItems:"start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Default"}),e.jsx(r,{label:"Label",placeholder:"Add a note…",helperText:"Helper text"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Focus"}),e.jsx(r,{label:"Label",placeholder:"Add a note…",helperText:"Helper text",state:"focus"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Filled"}),e.jsx(r,{label:"Label",defaultValue:"This is a longer note that wraps across multiple lines.",helperText:"Helper text"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Error"}),e.jsx(r,{label:"Label",defaultValue:"This note exceeds the limit.",helperText:"Error message",state:"error"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Disabled"}),e.jsx(r,{label:"Label",placeholder:"Add a note…",helperText:"Helper text",state:"disabled"})]})]})};var T,v,_;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(_=(v=l.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var w,y,j;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    state: 'focus'
  }
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var L,S,A;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    defaultValue: 'This is a longer note that wraps across multiple lines in the text area field.'
  }
}`,...(A=(S=o.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var H,E,V;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    defaultValue: 'This note is too long for the allowed limit.',
    helperText: 'Error message',
    state: 'error'
  }
}`,...(V=(E=i.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var F,z,B;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(B=(z=d.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var D,q,I;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    defaultValue: 'This is a longer note that wraps across multiple lines.'
  }
}`,...(I=(q=n.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var N,W,C;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    showHelperText: false,
    defaultValue: 'This is a longer note that wraps across multiple lines.'
  }
}`,...(C=(W=c.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var O,M,R;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    showHelperText: false,
    placeholder: 'Add a note…'
  }
}`,...(R=(M=p.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var k,G,J;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const xe=["Default","Focus","Filled","Error","Disabled","WithoutLabel","WithoutHelper","FieldOnly","AllStates"];export{u as AllStates,l as Default,d as Disabled,i as Error,p as FieldOnly,o as Filled,t as Focus,c as WithoutHelper,n as WithoutLabel,xe as __namedExportsOrder,fe as default};

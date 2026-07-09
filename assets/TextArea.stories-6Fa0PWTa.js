import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ae}from"./iframe-BuZpaoXC.js";import{c as s}from"./cn-2dOUpm6k.js";import"./preload-helper-Uod2V3eo.js";const se="_field_cdrlq_1",le="_label_cdrlq_9",te="_textarea_cdrlq_13",oe="_error_cdrlq_30",de="_focus_cdrlq_31",ie="_helper_cdrlq_47",ne="_helperError_cdrlq_51",ce="_disabled_cdrlq_55",r={field:se,label:le,textarea:te,error:oe,focus:de,helper:ie,helperError:ne,disabled:ce};function a({label:h,helperText:f,showLabel:K=!0,showHelperText:P=!0,state:m="default",rows:Q=4,className:U,id:X,disabled:Y,...Z}){const $=ae.useId(),x=X??$,ee=K&&h,re=P&&f,b=Y||m==="disabled",g=m==="error";return e.jsxs("div",{className:s(r.field,b&&r.disabled,U),children:[ee?e.jsx("label",{className:s("rc-label-md",r.label),htmlFor:x,children:h}):null,e.jsx("textarea",{id:x,rows:Q,disabled:b,className:s("rc-body-sm",r.textarea,m==="focus"&&r.focus,g&&r.error),...Z}),re?e.jsx("span",{className:s("rc-helper-sm",r.helper,g&&r.helperError),children:f}):null]})}a.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showHelperText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'focus' | 'filled' | 'error' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}}},composes:["TextareaHTMLAttributes"]};const fe={title:"Components/Text Area",component:a,tags:["autodocs"],args:{label:"Label",placeholder:"Add a note…",helperText:"Helper text",showLabel:!0,showHelperText:!0},argTypes:{showLabel:{control:"boolean"},showHelperText:{control:"boolean"}}},l={},t={args:{state:"focus"}},o={args:{defaultValue:"This is a longer note that wraps across multiple lines in the text area field."}},d={args:{defaultValue:"This note is too long for the allowed limit.",helperText:"Error message",state:"error"}},i={args:{state:"disabled"}},n={args:{showLabel:!1,defaultValue:"This is a longer note that wraps across multiple lines."}},c={args:{showHelperText:!1,defaultValue:"This is a longer note that wraps across multiple lines."}},p={args:{showLabel:!1,showHelperText:!1,placeholder:"Add a note…"}},u={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 280px)",gap:48,padding:24,alignItems:"start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Default"}),e.jsx(a,{label:"Label",placeholder:"Add a note…",helperText:"Helper text"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Focus"}),e.jsx(a,{label:"Label",placeholder:"Add a note…",helperText:"Helper text",state:"focus"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Filled"}),e.jsx(a,{label:"Label",defaultValue:"This is a longer note that wraps across multiple lines.",helperText:"Helper text"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Error"}),e.jsx(a,{label:"Label",defaultValue:"This note exceeds the limit.",helperText:"Error message",state:"error"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Disabled"}),e.jsx(a,{label:"Label",placeholder:"Add a note…",helperText:"Helper text",state:"disabled"})]})]})};var T,v,_;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(_=(v=l.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var w,y,j;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    state: 'focus'
  }
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var L,S,A;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    defaultValue: 'This is a longer note that wraps across multiple lines in the text area field.'
  }
}`,...(A=(S=o.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var H,E,V;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    defaultValue: 'This note is too long for the allowed limit.',
    helperText: 'Error message',
    state: 'error'
  }
}`,...(V=(E=d.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var q,F,z;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(z=(F=i.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var B,D,I;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    defaultValue: 'This is a longer note that wraps across multiple lines.'
  }
}`,...(I=(D=n.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var N,W,C;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const xe=["Default","Focus","Filled","Error","Disabled","WithoutLabel","WithoutHelper","FieldOnly","AllStates"];export{u as AllStates,l as Default,i as Disabled,d as Error,p as FieldOnly,o as Filled,t as Focus,c as WithoutHelper,n as WithoutLabel,xe as __namedExportsOrder,fe as default};

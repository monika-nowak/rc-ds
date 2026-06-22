import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as p}from"./cn-2dOUpm6k.js";const C="_field_kdhq2_1",A="_label_kdhq2_9",w="_input_kdhq2_18",M="_error_kdhq2_38",O="_focus_kdhq2_39",R="_helper_kdhq2_55",$="_helperError_kdhq2_64",G="_disabled_kdhq2_68",r={field:C,label:A,input:w,error:M,focus:O,helper:R,helperError:$,disabled:G};function l({label:a,helperText:u,state:c="default",className:F,id:k,disabled:P,...N}){const m=k??(a?`input-${a.replace(/\s+/g,"-").toLowerCase()}`:void 0),h=P||c==="disabled",x=c==="error";return e.jsxs("div",{className:p(r.field,h&&r.disabled,F),children:[a?e.jsx("label",{className:r.label,htmlFor:m,children:a}):null,e.jsx("input",{id:m,disabled:h,className:p(r.input,c==="focus"&&r.focus,x&&r.error),...N}),u?e.jsx("span",{className:p(r.helper,x&&r.helperError),children:u}):null]})}l.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},state:{required:!1,tsType:{name:"union",raw:"'default' | 'focus' | 'filled' | 'error' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}},composes:["InputHTMLAttributes"]};const Q={title:"Components/Input",component:l,tags:["autodocs"],args:{label:"Label",placeholder:"Placeholder",helperText:"Helper text"}},t={},s={args:{state:"focus"}},o={args:{defaultValue:"Value text"}},d={args:{defaultValue:"Value text",helperText:"Error message",state:"error"}},i={args:{state:"disabled"}},n={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 280px)",gap:48,padding:24,alignItems:"start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Default"}),e.jsx(l,{label:"Label",placeholder:"Placeholder",helperText:"Helper text"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Focus"}),e.jsx(l,{label:"Label",placeholder:"Placeholder",helperText:"Helper text",state:"focus"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Filled"}),e.jsx(l,{label:"Label",defaultValue:"Value text",helperText:"Helper text"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Error"}),e.jsx(l,{label:"Label",defaultValue:"Value text",helperText:"Error message",state:"error"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Disabled"}),e.jsx(l,{label:"Label",placeholder:"Placeholder",helperText:"Helper text",state:"disabled"})]})]})};var f,g,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,_,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    state: 'focus'
  }
}`,...(j=(_=s.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var y,T,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Value text'
  }
}`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var V,E,I;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Value text',
    helperText: 'Error message',
    state: 'error'
  }
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var L,q,z;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(z=(q=i.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var B,H,D;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(D=(H=n.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};const U=["Default","Focus","Filled","Error","Disabled","AllStates"];export{n as AllStates,t as Default,i as Disabled,d as Error,o as Filled,s as Focus,U as __namedExportsOrder,Q as default};

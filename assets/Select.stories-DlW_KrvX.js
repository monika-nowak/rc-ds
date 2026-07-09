import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as r}from"./Select-CUXmyY8L.js";import"./iframe-CFPpygOq.js";import"./preload-helper-Uod2V3eo.js";import"./CaretDown.es-CRuKJHJd.js";import"./IconBase.es-Ci70Mi93.js";import"./Icon-CBt5swoi.js";import"./cn-2dOUpm6k.js";import"./CaretRight.es-CXYRXHl7.js";import"./Minus.es-DMGkuERm.js";import"./Warning.es-BUEF3uh9.js";import"./Flag.es-CzHuahiJ.js";import"./Trash.es-CYNBqqhO.js";import"./Divider-BhWe8uDS.js";const a=[{kind:"option",id:"us",label:"United States"},{kind:"option",id:"ca",label:"Canada"},{kind:"option",id:"mx",label:"Mexico"},{kind:"option",id:"uk",label:"United Kingdom"},{kind:"option",id:"de",label:"Germany"}],re=[{kind:"group",id:"fruits",label:"Fruits"},{kind:"option",id:"apple",label:"Apple"},{kind:"option",id:"banana",label:"Banana"},{kind:"option",id:"cherry",label:"Cherry"},{kind:"separator",id:"sep-1"},{kind:"group",id:"vegetables",label:"Vegetables"},{kind:"option",id:"carrot",label:"Carrot"},{kind:"option",id:"pea",label:"Pea",disabled:!0}],he={title:"Components/Select",component:r,tags:["autodocs"],args:{label:"Label",placeholder:"Select an option...",helperText:"Helper text",showLabel:!0,showHelperText:!1,options:a},argTypes:{showLabel:{control:"boolean"},showHelperText:{control:"boolean"}}},o={},t={args:{state:"focus"}},s={args:{defaultValue:"us"}},l={args:{defaultValue:"us"},parameters:{docs:{description:{story:"Click the trigger to open the dropdown list."}}}},i={args:{defaultValue:"us",helperText:"Error message",state:"error"}},n={args:{state:"disabled"}},d={args:{size:"sm",defaultValue:"us"}},p={args:{label:"Food",options:re,defaultValue:"apple",showHelperText:!1}},c={args:{showLabel:!1,defaultValue:"us"}},u={args:{showHelperText:!1,defaultValue:"us"}},m={args:{showLabel:!1,showHelperText:!1,defaultValue:"us"}},g={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 280px)",gap:48,padding:24,alignItems:"start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Default"}),e.jsx(r,{label:"Label",placeholder:"Select an option...",helperText:"Helper text",options:a})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Focus"}),e.jsx(r,{label:"Label",placeholder:"Select an option...",helperText:"Helper text",options:a,state:"focus"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Filled"}),e.jsx(r,{label:"Label",helperText:"Helper text",options:a,defaultValue:"us"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Error"}),e.jsx(r,{label:"Label",helperText:"Error message",options:a,defaultValue:"us",state:"error"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Disabled"}),e.jsx(r,{label:"Label",placeholder:"Select an option...",helperText:"Helper text",options:a,state:"disabled"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Small"}),e.jsx(r,{label:"Label",helperText:"Helper text",options:a,defaultValue:"us",size:"sm"})]})]})},x={name:"Select + Dropdown List",render:()=>e.jsx("div",{style:{padding:24,maxWidth:280},children:e.jsx(r,{label:"Country",placeholder:"Select an option...",options:a,defaultValue:"us"})})};var h,b,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var S,v,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    state: 'focus'
  }
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var T,V,j;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    defaultValue: 'us'
  }
}`,...(j=(V=s.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var L,H,w;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    defaultValue: 'us'
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the trigger to open the dropdown list.'
      }
    }
  }
}`,...(w=(H=l.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var k,z,O;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    defaultValue: 'us',
    helperText: 'Error message',
    state: 'error'
  }
}`,...(O=(z=i.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var B,C,E;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var F,D,W;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    defaultValue: 'us'
  }
}`,...(W=(D=d.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var A,G,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Food',
    options: groupedOptions,
    defaultValue: 'apple',
    showHelperText: false
  }
}`,...(I=(G=p.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var U,_,K;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    defaultValue: 'us'
  }
}`,...(K=(_=c.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var M,P,R;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    showHelperText: false,
    defaultValue: 'us'
  }
}`,...(R=(P=u.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var q,J,N;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    showHelperText: false,
    defaultValue: 'us'
  }
}`,...(N=(J=m.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 280px)',
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
        <Select label="Label" placeholder="Select an option..." helperText="Helper text" options={countryOptions} />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Focus</div>
        <Select label="Label" placeholder="Select an option..." helperText="Helper text" options={countryOptions} state="focus" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Filled</div>
        <Select label="Label" helperText="Helper text" options={countryOptions} defaultValue="us" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Error</div>
        <Select label="Label" helperText="Error message" options={countryOptions} defaultValue="us" state="error" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Disabled</div>
        <Select label="Label" placeholder="Select an option..." helperText="Helper text" options={countryOptions} state="disabled" />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#5a575d',
        marginBottom: 16
      }}>Small</div>
        <Select label="Label" helperText="Helper text" options={countryOptions} defaultValue="us" size="sm" />
      </div>
    </div>
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Select + Dropdown List',
  render: () => <div style={{
    padding: 24,
    maxWidth: 280
  }}>
      <Select label="Country" placeholder="Select an option..." options={countryOptions} defaultValue="us" />
    </div>
}`,...(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const be=["Default","Focus","Filled","Open","Error","Disabled","Small","WithGroups","WithoutLabel","WithoutHelper","TriggerOnly","AllStates","ComposedExample"];export{g as AllStates,x as ComposedExample,o as Default,n as Disabled,i as Error,s as Filled,t as Focus,l as Open,d as Small,m as TriggerOnly,p as WithGroups,u as WithoutHelper,c as WithoutLabel,be as __namedExportsOrder,he as default};

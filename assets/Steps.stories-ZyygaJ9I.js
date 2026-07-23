import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as q}from"./iframe-BotCSNRQ.js";import{I as E}from"./Icon-DI9dzrBi.js";import{c as u}from"./cn-2dOUpm6k.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-Cw7Iwhdq.js";import"./CaretRight.es-Dhk1dAmj.js";import"./CaretDown.es-BKDwJi94.js";import"./Minus.es-B8XolVOv.js";import"./Warning.es-BbqsqbaC.js";import"./Flag.es-B0EYSIeH.js";import"./Trash.es-BwOqZC4J.js";const z="_root_137o8_1",R="_step_137o8_7",$="_separator_137o8_14",k="_indicator_137o8_29",F="_indicatorCurrent_137o8_39",H="_indicatorUpcoming_137o8_44",L="_indicatorComplete_137o8_45",M="_label_137o8_54",O="_labelCurrent_137o8_58",V="_labelUpcoming_137o8_62",Z="_labelComplete_137o8_63",r={root:z,step:R,separator:$,indicator:k,indicatorCurrent:F,indicatorUpcoming:H,indicatorComplete:L,label:M,labelCurrent:O,labelUpcoming:V,labelComplete:Z};function B(t,e){return t<e?"complete":t===e?"current":"upcoming"}function D(t,e,d){return e>0&&e<d-1&&t<e&&t+1<=e?"secondary":"tertiary"}const G={current:r.indicatorCurrent,upcoming:r.indicatorUpcoming,complete:r.indicatorComplete},J={current:"rc-label-md",upcoming:"rc-label-sm",complete:"rc-label-sm"},K={current:r.labelCurrent,upcoming:r.labelUpcoming,complete:r.labelComplete};function g({steps:t,currentStep:e,className:d,ariaLabel:A="Progress"}){return s.jsx("nav",{className:u(r.root,d),"aria-label":A,children:t.map((S,n)=>{const o=B(n,e);return s.jsxs(q.Fragment,{children:[s.jsxs("span",{className:r.step,"aria-current":o==="current"?"step":void 0,children:[s.jsx("span",{className:u(r.indicator,G[o],J[o]),"aria-hidden":o!=="current",children:n+1}),s.jsx("span",{className:u("rc-label-md",r.label,K[o]),children:S.label})]}),n<t.length-1?s.jsx("span",{className:r.separator,"aria-hidden":!0,children:s.jsx(E,{name:"arrow-right",size:16,tone:D(n,e,t.length)})}):null]},`${S.label}-${n}`)})})}g.__docgenInfo={description:"",methods:[],displayName:"Steps",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:""},currentStep:{required:!0,tsType:{name:"number"},description:"Zero-based index of the active step."},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible name for the step list.",defaultValue:{value:"'Progress'",computed:!1}}}};const a=[{label:"Upload"},{label:"Map columns"},{label:"Review values"},{label:"Import"}],ie={title:"Components/Steps",component:g,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Horizontal step indicator for multi-step flows (e.g. upload pipeline). Active step uses inverse badge + primary label; upcoming and completed steps use neutral-100 badge + tertiary label. Separators use Icon/arrow-right with icon/secondary on the completed path and icon/tertiary elsewhere."}}},argTypes:{currentStep:{control:{type:"number",min:0,max:3}}}},p={name:"Upload pipeline · step 1",args:{steps:a,currentStep:0}},i={name:"Upload pipeline · step 2",args:{steps:a,currentStep:1}},l={name:"Upload pipeline · step 3",args:{steps:a,currentStep:2}},c={name:"Upload pipeline · step 4",args:{steps:a,currentStep:3}},m={args:{steps:a,currentStep:0},render:()=>s.jsx("div",{style:{display:"grid",gap:24},children:a.map((t,e)=>s.jsx(g,{steps:a,currentStep:e},e))})};var _,b,y;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Upload pipeline · step 1',
  args: {
    steps: uploadPipelineSteps,
    currentStep: 0
  }
}`,...(y=(b=p.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,h,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Upload pipeline · step 2',
  args: {
    steps: uploadPipelineSteps,
    currentStep: 1
  }
}`,...(C=(h=i.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var U,v,x;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Upload pipeline · step 3',
  args: {
    steps: uploadPipelineSteps,
    currentStep: 2
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var P,j,w;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Upload pipeline · step 4',
  args: {
    steps: uploadPipelineSteps,
    currentStep: 3
  }
}`,...(w=(j=c.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var N,T,I;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    steps: uploadPipelineSteps,
    currentStep: 0
  },
  render: () => <div style={{
    display: 'grid',
    gap: 24
  }}>
      {uploadPipelineSteps.map((_, index) => <Steps key={index} steps={uploadPipelineSteps} currentStep={index} />)}
    </div>
}`,...(I=(T=m.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const le=["UploadPipeline","Step2","Step3","Step4","AllStates"];export{m as AllStates,i as Step2,l as Step3,c as Step4,p as UploadPipeline,le as __namedExportsOrder,ie as default};

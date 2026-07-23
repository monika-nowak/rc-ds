import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ce}from"./iframe-BotCSNRQ.js";import{C as de,a as b}from"./ChoiceTag-DJXDLlOe.js";import{I as r}from"./IconButton-BCtUxGtU.js";import{I as t}from"./Icon-DI9dzrBi.js";import{I as a}from"./Input-jivfzFmR.js";import"./preload-helper-Uod2V3eo.js";import"./cn-2dOUpm6k.js";import"./IconBase.es-Cw7Iwhdq.js";import"./CaretRight.es-Dhk1dAmj.js";import"./CaretDown.es-BKDwJi94.js";import"./Minus.es-B8XolVOv.js";import"./Warning.es-BbqsqbaC.js";import"./Flag.es-B0EYSIeH.js";import"./Trash.es-BwOqZC4J.js";import"./Badge-bDgxJBGs.js";const He={title:"Components/Input",component:a,tags:["autodocs"],args:{label:"Label",placeholder:"Placeholder",helperText:"Helper text",showLabel:!0,showHelperText:!0},argTypes:{variant:{control:"select",options:["default","ai"]},showLabel:{control:"boolean"},showHelperText:{control:"boolean"},showAiBadge:{control:"boolean"},showAiAction:{control:"boolean"},aiBadgeText:{control:"text"},aiActionLabel:{control:"text"}}},l={},o={args:{state:"focus"}},s={args:{defaultValue:"Value text"}},i={args:{defaultValue:"Value text",helperText:"Error message",state:"error"}},n={args:{state:"disabled"}},c={args:{showLabel:!1,defaultValue:"Value text"}},d={args:{showHelperText:!1,defaultValue:"Value text"}},p={args:{showLabel:!1,showHelperText:!1,placeholder:"Placeholder"}},m={name:"AI generated",args:{variant:"ai",label:"Narrative title",defaultValue:"Brain metastases response as 1L confidence anchor",showHelperText:!1,showAiBadge:!0,showAiAction:!0,aiActionLabel:"Ask AI to redraft"}},h={name:"AI with refinement tags",args:{label:"Label",placeholder:"Placeholder",helperText:"Helper text"},render:()=>{const[ie,ne]=ce.useState("direct");return e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:280},children:[e.jsx(a,{variant:"ai",label:"Narrative title",defaultValue:"Brain metastases response as 1L confidence anchor",showHelperText:!1,showAiBadge:!0,showAiAction:!0,aiActionLabel:"Ask AI to redraft"}),e.jsxs(de,{value:ie,onValueChange:ne,"aria-label":"Refinement style",children:[e.jsx(b,{value:"direct",children:"More direct"}),e.jsx(b,{value:"reframe",children:"Reframe"}),e.jsx(b,{value:"tighten",children:"Tighten tone"})]})]})}},u={name:"With trailing action",args:{label:"Search",placeholder:"Search records…",showHelperText:!1,trailingAction:e.jsx(r,{variant:"primary",size:"md",label:"Search",children:e.jsx(t,{name:"magnifying-glass",size:18,tone:"on-color"})})}},g={name:"With trailing action · AI",args:{variant:"ai",label:"Prompt",placeholder:"Describe what to generate…",showHelperText:!1,trailingAction:e.jsx(r,{variant:"ai",size:"md",label:"Generate with AI",children:e.jsx(t,{name:"sparkle",size:18,tone:"on-color"})})}},x={name:"Trailing action variants",args:{label:"Label",placeholder:"Placeholder",helperText:"Helper text"},render:()=>e.jsxs("div",{style:{display:"grid",gap:16,maxWidth:280},children:[e.jsx(a,{label:"Primary",placeholder:"Placeholder",showHelperText:!1,trailingAction:e.jsx(r,{variant:"primary",size:"md",label:"Search",children:e.jsx(t,{name:"magnifying-glass",size:18,tone:"on-color"})})}),e.jsx(a,{label:"AI",placeholder:"Placeholder",showHelperText:!1,variant:"ai",trailingAction:e.jsx(r,{variant:"ai",size:"md",label:"Generate",children:e.jsx(t,{name:"sparkle",size:18,tone:"on-color"})})}),e.jsx(a,{label:"AI secondary",placeholder:"Placeholder",showHelperText:!1,trailingAction:e.jsx(r,{variant:"aiSecondary",size:"md",label:"Generate",children:e.jsx(t,{name:"sparkle",size:18,tone:"ai"})})})]})},f={args:{label:"Label",placeholder:"Placeholder",helperText:"Helper text"},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 280px)",gap:48,padding:24,alignItems:"start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Default"}),e.jsx(a,{label:"Label",placeholder:"Placeholder",helperText:"Helper text"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Focus"}),e.jsx(a,{label:"Label",placeholder:"Placeholder",helperText:"Helper text",state:"focus"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Filled"}),e.jsx(a,{label:"Label",defaultValue:"Value text",helperText:"Helper text"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Error"}),e.jsx(a,{label:"Label",defaultValue:"Value text",helperText:"Error message",state:"error"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#5a575d",marginBottom:16},children:"Disabled"}),e.jsx(a,{label:"Label",placeholder:"Placeholder",helperText:"Helper text",state:"disabled"})]})]})};var v,T,A;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(A=(T=l.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var I,w,y;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    state: 'focus'
  }
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var j,S,H;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Value text'
  }
}`,...(H=(S=s.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var L,V,B;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Value text',
    helperText: 'Error message',
    state: 'error'
  }
}`,...(B=(V=i.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var z,P,W;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(W=(P=n.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var C,E,G;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    defaultValue: 'Value text'
  }
}`,...(G=(E=c.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var k,D,F;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    showHelperText: false,
    defaultValue: 'Value text'
  }
}`,...(F=(D=d.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var R,N,O;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    showHelperText: false,
    placeholder: 'Placeholder'
  }
}`,...(O=(N=p.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var M,_,q;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'AI generated',
  args: {
    variant: 'ai',
    label: 'Narrative title',
    defaultValue: 'Brain metastases response as 1L confidence anchor',
    showHelperText: false,
    showAiBadge: true,
    showAiAction: true,
    aiActionLabel: 'Ask AI to redraft'
  }
}`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'AI with refinement tags',
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper text'
  },
  render: () => {
    const [refinement, setRefinement] = useState('direct');
    return <div style={{
      display: 'grid',
      gap: 12,
      maxWidth: 280
    }}>
        <Input variant="ai" label="Narrative title" defaultValue="Brain metastases response as 1L confidence anchor" showHelperText={false} showAiBadge showAiAction aiActionLabel="Ask AI to redraft" />
        <ChoiceTagGroup value={refinement} onValueChange={setRefinement} aria-label="Refinement style">
          <ChoiceTag value="direct">More direct</ChoiceTag>
          <ChoiceTag value="reframe">Reframe</ChoiceTag>
          <ChoiceTag value="tighten">Tighten tone</ChoiceTag>
        </ChoiceTagGroup>
      </div>;
  }
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'With trailing action',
  args: {
    label: 'Search',
    placeholder: 'Search records…',
    showHelperText: false,
    trailingAction: <IconButton variant="primary" size="md" label="Search">
        <Icon name="magnifying-glass" size={18} tone="on-color" />
      </IconButton>
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'With trailing action · AI',
  args: {
    variant: 'ai',
    label: 'Prompt',
    placeholder: 'Describe what to generate…',
    showHelperText: false,
    trailingAction: <IconButton variant="ai" size="md" label="Generate with AI">
        <Icon name="sparkle" size={18} tone="on-color" />
      </IconButton>
  }
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,re,te;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Trailing action variants',
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper text'
  },
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    maxWidth: 280
  }}>
      <Input label="Primary" placeholder="Placeholder" showHelperText={false} trailingAction={<IconButton variant="primary" size="md" label="Search">
            <Icon name="magnifying-glass" size={18} tone="on-color" />
          </IconButton>} />
      <Input label="AI" placeholder="Placeholder" showHelperText={false} variant="ai" trailingAction={<IconButton variant="ai" size="md" label="Generate">
            <Icon name="sparkle" size={18} tone="on-color" />
          </IconButton>} />
      <Input label="AI secondary" placeholder="Placeholder" showHelperText={false} trailingAction={<IconButton variant="aiSecondary" size="md" label="Generate">
            <Icon name="sparkle" size={18} tone="ai" />
          </IconButton>} />
    </div>
}`,...(te=(re=x.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var le,oe,se;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper text'
  },
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
}`,...(se=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};const Le=["Default","Focus","Filled","Error","Disabled","WithoutLabel","WithoutHelper","FieldOnly","AIGenerated","AIWithRefinementTags","WithTrailingAction","WithTrailingActionAI","TrailingActionVariants","AllStates"];export{m as AIGenerated,h as AIWithRefinementTags,f as AllStates,l as Default,n as Disabled,i as Error,p as FieldOnly,s as Filled,o as Focus,x as TrailingActionVariants,u as WithTrailingAction,g as WithTrailingActionAI,d as WithoutHelper,c as WithoutLabel,Le as __namedExportsOrder,He as default};

import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as K}from"./Icon-D1Mi1OoL.js";import{B as v}from"./Button-DWMQq-uk.js";import{I as Q}from"./IconButton-BKzAixFV.js";import{P as u,a as J}from"./Popover-CLzDwvXu.js";import"./cn-2dOUpm6k.js";import"./iframe-okLCOoZf.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-DLmrfCuS.js";import"./CaretRight.es-BOg3ZnOv.js";import"./CaretDown.es-CsqFuBgP.js";import"./Minus.es-hMcAcDyQ.js";import"./Warning.es-B4vTOCq-.js";import"./Flag.es-D_cVYw98.js";import"./Trash.es-CHXGmJNG.js";const U="_metricList_784e4_1",W="_metricRow_784e4_8",X="_richContent_784e4_22",Z="_title_784e4_29",$="_body_784e4_36",ee="_actions_784e4_47",te="_placementGrid_784e4_52",re="_placementLabel_784e4_60",t={metricList:U,metricRow:W,richContent:X,title:Z,body:$,actions:ee,placementGrid:te,placementLabel:re},h=e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Reflects record volume, HCP tier and institution breadth, and AI assessment."}),e.jsx("p",{children:"Detailed logic of combined score is evolving over time based on model training. Once a report is generated, combined scores do not change."})]}),fe={title:"Components/Popover",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Light-surface popover (default appearance) for richer helper content — optional title and description with independent show/hide toggles. Tooltip stays compact and inverse (dark)."}}},argTypes:{showTitle:{control:"boolean"},showDescription:{control:"boolean"},appearance:{control:"radio",options:["default","inverse"]}}},a={args:{children:"Short helper copy that can wrap when needed.",appearance:"default",caret:!0,placement:"top"}},n={name:"Default · title + description",args:{appearance:"default",caret:!0,placement:"top",title:"Combined score",description:h,showTitle:!0,showDescription:!0}},o={name:"Default · title only",args:{appearance:"default",caret:!0,placement:"top",title:"Combined score",description:h,showTitle:!0,showDescription:!1}},s={name:"Default · description only",args:{appearance:"default",caret:!0,placement:"top",title:"Combined score",description:h,showTitle:!1,showDescription:!0}},c={name:"Inverse · metric rows",args:{children:null,appearance:"inverse",caret:!0,placement:"top"},render:()=>e.jsx(u,{appearance:"inverse",placement:"top",caret:!0,children:e.jsxs("div",{className:t.metricList,children:[e.jsxs("div",{className:t.metricRow,children:[e.jsx("span",{children:"Deterministic score (DET)"}),e.jsx("strong",{children:"0.47/1"})]}),e.jsxs("div",{className:t.metricRow,children:[e.jsx("span",{children:"AI Read (AI)"}),e.jsx("strong",{children:"0.86/1"})]}),e.jsxs("div",{className:t.metricRow,children:[e.jsx("span",{children:"Strategic Relevance (SR)"}),e.jsx("strong",{children:"5/5"})]})]})})},i={name:"Default · mixed content",args:{children:null,appearance:"default",caret:!0,placement:"bottom"},render:()=>e.jsx(u,{appearance:"default",placement:"bottom",caret:!0,children:e.jsxs("div",{className:t.richContent,children:[e.jsx("p",{className:t.title,children:"Export options"}),e.jsx("p",{className:t.body,children:"Choose a format for this view. You can change defaults in settings."}),e.jsxs("div",{className:t.actions,children:[e.jsx(v,{size:"sm",variant:"secondary",children:"CSV"}),e.jsx(v,{size:"sm",variant:"primary",children:"PDF"})]})]})})},p={args:{children:"Popover without a caret tip — flush to the trigger edge.",appearance:"default",caret:!1,placement:"bottom"}},l={args:{children:"Popover content",appearance:"inverse",caret:!0,placement:"top"},render:()=>e.jsx("div",{className:t.placementGrid,children:["top","bottom","left","right"].map(r=>e.jsx(u,{appearance:"inverse",placement:r,caret:!0,children:e.jsx("span",{className:t.placementLabel,children:r})},r))})},m={name:"Popover · click",args:{children:null,appearance:"default",caret:!0,placement:"top",title:"Combined score",description:h,showTitle:!0,showDescription:!0},render:r=>e.jsx(J,{openOn:"click",appearance:r.appearance,placement:r.placement,title:r.title,description:r.description,showTitle:r.showTitle,showDescription:r.showDescription,children:e.jsx(Q,{label:"Combined score details",variant:"ghost",size:"sm",children:e.jsx(K,{name:"info",size:16})})})},d={name:"Popover · hover",args:{children:null,appearance:"default",caret:!0,placement:"bottom"},render:()=>e.jsx(J,{openOn:"hover",appearance:"default",placement:"bottom",content:e.jsx("p",{className:t.body,children:"Hover to open. Content can include links and buttons."}),children:e.jsx(v,{variant:"tertiary",size:"sm",children:"Hover me"})})};var g,b,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Short helper copy that can wrap when needed.',
    appearance: 'default',
    caret: true,
    placement: 'top'
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var w,y,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Default · title + description',
  args: {
    appearance: 'default',
    caret: true,
    placement: 'top',
    title: 'Combined score',
    description: combinedScoreDescription,
    showTitle: true,
    showDescription: true
  }
}`,...(D=(y=n.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var x,j,C;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Default · title only',
  args: {
    appearance: 'default',
    caret: true,
    placement: 'top',
    title: 'Combined score',
    description: combinedScoreDescription,
    showTitle: true,
    showDescription: false
  }
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var P,_,S;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Default · description only',
  args: {
    appearance: 'default',
    caret: true,
    placement: 'top',
    title: 'Combined score',
    description: combinedScoreDescription,
    showTitle: false,
    showDescription: true
  }
}`,...(S=(_=s.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var T,N,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Inverse · metric rows',
  args: {
    children: null,
    appearance: 'inverse',
    caret: true,
    placement: 'top'
  },
  render: () => <PopoverBubble appearance="inverse" placement="top" caret>
      <div className={styles.metricList}>
        <div className={styles.metricRow}>
          <span>Deterministic score (DET)</span>
          <strong>0.47/1</strong>
        </div>
        <div className={styles.metricRow}>
          <span>AI Read (AI)</span>
          <strong>0.86/1</strong>
        </div>
        <div className={styles.metricRow}>
          <span>Strategic Relevance (SR)</span>
          <strong>5/5</strong>
        </div>
      </div>
    </PopoverBubble>
}`,...(B=(N=c.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var R,I,k;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Default · mixed content',
  args: {
    children: null,
    appearance: 'default',
    caret: true,
    placement: 'bottom'
  },
  render: () => <PopoverBubble appearance="default" placement="bottom" caret>
      <div className={styles.richContent}>
        <p className={styles.title}>Export options</p>
        <p className={styles.body}>Choose a format for this view. You can change defaults in settings.</p>
        <div className={styles.actions}>
          <Button size="sm" variant="secondary">
            CSV
          </Button>
          <Button size="sm" variant="primary">
            PDF
          </Button>
        </div>
      </div>
    </PopoverBubble>
}`,...(k=(I=i.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var L,z,O;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Popover without a caret tip — flush to the trigger edge.',
    appearance: 'default',
    caret: false,
    placement: 'bottom'
  }
}`,...(O=(z=p.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var A,H,E;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Popover content',
    appearance: 'inverse',
    caret: true,
    placement: 'top'
  },
  render: () => <div className={styles.placementGrid}>
      {(['top', 'bottom', 'left', 'right'] as const).map(placement => <PopoverBubble key={placement} appearance="inverse" placement={placement} caret>
          <span className={styles.placementLabel}>{placement}</span>
        </PopoverBubble>)}
    </div>
}`,...(E=(H=l.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var G,F,M;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Popover · click',
  args: {
    children: null,
    appearance: 'default',
    caret: true,
    placement: 'top',
    title: 'Combined score',
    description: combinedScoreDescription,
    showTitle: true,
    showDescription: true
  },
  render: args => <Popover openOn="click" appearance={args.appearance} placement={args.placement} title={args.title} description={args.description} showTitle={args.showTitle} showDescription={args.showDescription}>
      <IconButton label="Combined score details" variant="ghost" size="sm">
        <Icon name="info" size={16} />
      </IconButton>
    </Popover>
}`,...(M=(F=m.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var V,Y,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Popover · hover',
  args: {
    children: null,
    appearance: 'default',
    caret: true,
    placement: 'bottom'
  },
  render: () => <Popover openOn="hover" appearance="default" placement="bottom" content={<p className={styles.body}>Hover to open. Content can include links and buttons.</p>}>
      <Button variant="tertiary" size="sm">
        Hover me
      </Button>
    </Popover>
}`,...(q=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};const we=["DefaultShell","TitleAndDescription","TitleOnly","DescriptionOnly","InverseMetricBreakdown","RichContent","NoCaret","AllPlacements","ClickTrigger","HoverTrigger"];export{l as AllPlacements,m as ClickTrigger,a as DefaultShell,s as DescriptionOnly,d as HoverTrigger,c as InverseMetricBreakdown,p as NoCaret,i as RichContent,n as TitleAndDescription,o as TitleOnly,we as __namedExportsOrder,fe as default};

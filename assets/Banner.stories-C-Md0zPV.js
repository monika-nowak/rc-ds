import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as v}from"./cn-2dOUpm6k.js";import{I as _}from"./Icon-CBzlcWpN.js";import{B as gt}from"./Badge-GlCorBbr.js";import{I as wt}from"./IconButton-BKzAixFV.js";import{L as ft}from"./Logo-CaDbwhKt.js";import{B as a}from"./Button-DWMQq-uk.js";import{L as j}from"./Link-C731kjes.js";import"./iframe-DvHjSd81.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-myOP7pT7.js";import"./CaretRight.es-C1rIAn_X.js";import"./CaretDown.es-Daz0ptHA.js";import"./Minus.es-C8Pax7pW.js";import"./Warning.es-DibZimwv.js";import"./Flag.es-iB4b_H5b.js";import"./Trash.es-DWkRDEUr.js";const vt="_banner_1dywm_1",xt="_layoutHorizontal_1dywm_11",_t="_layoutStacked_1dywm_16",jt="_densityDefault_1dywm_22",kt="_densityCompact_1dywm_27",Tt="_leading_1dywm_33",Ct="_tile_1dywm_40",It="_tileCompact_1dywm_51",St="_tileGlyph_1dywm_57",Bt="_text_1dywm_64",Nt="_eyebrow_1dywm_72",At="_title_1dywm_77",zt="_description_1dywm_83",Lt="_actions_1dywm_90",Pt="_dismiss_1dywm_102",Dt="_dismissFloating_1dywm_108",Ft="_accent_1dywm_132",t={banner:vt,layoutHorizontal:xt,layoutStacked:_t,densityDefault:jt,densityCompact:kt,leading:Tt,tile:Ct,tileCompact:It,tileGlyph:St,text:Bt,eyebrow:Nt,title:At,description:zt,actions:Lt,dismiss:Pt,dismissFloating:Dt,"emphasis-subtle":"_emphasis-subtle_1dywm_115","emphasis-branded":"_emphasis-branded_1dywm_120","emphasis-elevated":"_emphasis-elevated_1dywm_125",accent:Ft};function qt({compact:s}){return e.jsx("div",{className:v(t.tile,s&&t.tileCompact),"aria-hidden":!0,children:e.jsx(ft,{className:t.tileGlyph})})}function Rt({eyebrow:s}){return typeof s=="string"?e.jsx(gt,{appearance:"subtle",color:"purple",children:s}):e.jsx(e.Fragment,{children:s})}function at({title:s,description:T,eyebrow:C,illustration:st,showIllustration:rt=!0,actions:I,layout:S="horizontal",emphasis:ot="subtle",accent:it=!1,density:nt="default",dismissible:dt=!1,onDismiss:ct,dismissLabel:lt="Dismiss",role:pt,"aria-label":ut,className:mt,...yt}){const x=nt==="compact",B=rt?st??e.jsx(qt,{compact:x}):null,ht=x?"rc-label-lg":"rc-heading-h7",bt=x?"rc-body-md":"rc-body-rg";return e.jsxs("section",{role:pt??"region","aria-label":ut??s,className:v(t.banner,S==="stacked"?t.layoutStacked:t.layoutHorizontal,t[`emphasis-${ot}`],x?t.densityCompact:t.densityDefault,it&&t.accent,mt),...yt,children:[B?e.jsx("div",{className:t.leading,children:B}):null,e.jsxs("div",{className:t.text,children:[C!=null?e.jsx("div",{className:t.eyebrow,children:e.jsx(Rt,{eyebrow:C})}):null,e.jsx("h3",{className:v(ht,t.title),children:s}),T?e.jsx("p",{className:v(bt,t.description),children:T}):null]}),I?e.jsx("div",{className:t.actions,children:I}):null,dt?e.jsx("div",{className:v(t.dismiss,S==="stacked"&&t.dismissFloating),children:e.jsx(wt,{variant:"ghost",size:"sm",label:lt,onClick:ct,children:e.jsx(_,{name:"x",size:16,tone:"secondary"})})}):null]})}at.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{title:{required:!0,tsType:{name:"string"},description:"Heading — required. Bold 18/24 (`rc-heading-h7`) in the base design."},description:{required:!1,tsType:{name:"string"},description:"Optional supporting copy below the title."},eyebrow:{required:!1,tsType:{name:"ReactNode"},description:'Small label above the title (e.g. "New", "Beta", "Tip"). A string is\nrendered as a subtle purple `Badge`; pass a node for full control.'},illustration:{required:!1,tsType:{name:"ReactNode"},description:`Swappable leading illustration slot. When omitted the default brand tile
(Figma node 1974:2079) is rendered.`},showIllustration:{required:!1,tsType:{name:"boolean"},description:"Toggle the leading region on/off. Layout reflows with no empty gap when false.",defaultValue:{value:"true",computed:!1}},actions:{required:!1,tsType:{name:"ReactNode"},description:"Trailing actions slot — a primary CTA plus an optional secondary link."},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'stacked'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'stacked'"}]},description:"Root orientation.",defaultValue:{value:"'horizontal'",computed:!1}},emphasis:{required:!1,tsType:{name:"union",raw:"'subtle' | 'branded' | 'elevated'",elements:[{name:"literal",value:"'subtle'"},{name:"literal",value:"'branded'"},{name:"literal",value:"'elevated'"}]},description:"Surface treatment.",defaultValue:{value:"'subtle'",computed:!1}},accent:{required:!1,tsType:{name:"boolean"},description:"Add a brand-colored leading accent bar.",defaultValue:{value:"false",computed:!1}},density:{required:!1,tsType:{name:"union",raw:"'default' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"}]},description:"Density — `default` is comfortable, `compact` is a tighter inline banner.",defaultValue:{value:"'default'",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Render a close (X) button. Visibility is controlled by the consumer.",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the close button is activated."},dismissLabel:{required:!1,tsType:{name:"string"},description:"Label for the close button (a11y).",defaultValue:{value:"'Dismiss'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const aa={title:"Components/Banner",component:at,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'Promotional / feature-highlight surface for new-feature announcements, discovery tips, upsell/upgrade prompts, and onboarding CTAs — not a status/alert component (`role="region"`). Base design reproduces Figma node 1974:2079: a horizontal, `subtle` banner with a swappable brand illustration tile, a title + optional description, and a trailing `actions` slot. Compose with `eyebrow`, `layout` (`horizontal`/`stacked`), `emphasis` (`subtle`/`branded`/`elevated`), an optional leading `accent` bar, `density`, and `dismissible`.'}}},argTypes:{layout:{control:"select",options:["horizontal","stacked"]},emphasis:{control:"select",options:["subtle","branded","elevated"]},density:{control:"select",options:["default","compact"]},showIllustration:{control:"boolean"},accent:{control:"boolean"},dismissible:{control:"boolean"},eyebrow:{control:"text"},title:{control:"text"},description:{control:"text"}},args:{title:"Ready to explore your data?",description:"Create a project to turn this source into a dashboard.",layout:"horizontal",emphasis:"subtle",density:"default",showIllustration:!0}},k=e.jsx(a,{variant:"secondary",iconLeft:e.jsx(_,{name:"plus",size:16,tone:"primary","aria-hidden":!0}),children:"Create project"}),r={args:{actions:k}},o={args:{eyebrow:"New",actions:k,accent:!1,dismissible:!1}},i={args:{eyebrow:"New",emphasis:"branded",title:"Introducing AI dashboards",description:"Turn any source into a narrated dashboard in one click.",actions:e.jsx(a,{variant:"ai",children:"Try it now"}),dismissible:!0}},n={args:{eyebrow:"Tip",title:"Did you know you can schedule syncs?",description:"Keep dashboards fresh automatically — set a daily or weekly refresh.",actions:e.jsx(j,{href:"#",children:"Set up a schedule"}),dismissible:!0}},d={args:{eyebrow:"Pro",emphasis:"branded",title:"Unlock unlimited projects",description:"Upgrade to Pro for unlimited projects, scheduled syncs, and priority support.",actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"ai",children:"Upgrade"}),e.jsx(j,{href:"#",children:"Maybe later"})]}),dismissible:!0}},c={args:{title:"Ready to explore your data?",description:"Create a project to turn this source into a dashboard.",actions:k}},l={args:{eyebrow:"Explore",title:"Connect more sources",description:"Blend CSVs, spreadsheets, and databases into a single dashboard.",illustration:e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:"var(--rc-radius-md)",background:"var(--rc-layer-03)"},children:e.jsx(_,{name:"database",size:24,tone:"primary"})}),actions:e.jsx(a,{variant:"secondary",children:"Browse integrations"})}},p={args:{layout:"stacked",emphasis:"branded",eyebrow:"New",title:"Introducing AI dashboards",description:"Turn any source into a narrated dashboard in one click. Ask questions in plain language and get charts back instantly.",actions:e.jsx(a,{variant:"ai",children:"Try it now"}),dismissible:!0}},u={args:{emphasis:"subtle",eyebrow:"New",title:"Introducing AI dashboards",description:"Turn any source into a narrated dashboard in one click.",actions:e.jsx(a,{variant:"secondary",children:"Try it now"})}},m={args:{emphasis:"branded",eyebrow:"New",title:"Introducing AI dashboards",description:"Turn any source into a narrated dashboard in one click.",actions:e.jsx(a,{variant:"ai",children:"Try it now"})}},y={args:{emphasis:"elevated",eyebrow:"New",title:"Introducing AI dashboards",description:"Turn any source into a narrated dashboard in one click.",actions:e.jsx(a,{variant:"secondary",children:"Try it now"})}},h={args:{accent:!0,eyebrow:"What’s new",title:"Faster syncs this week",description:"Sources now refresh up to 3x faster.",actions:e.jsx(j,{href:"#",children:"See changelog"})}},b={args:{title:"Connect a new source",description:"Import a CSV, spreadsheet, or database to get started.",illustration:e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:"var(--rc-radius-md)",background:"var(--rc-layer-03)"},children:e.jsx(_,{name:"database",size:24,tone:"primary"})}),actions:e.jsx(a,{variant:"secondary",children:"Add source"})}},g={args:{showIllustration:!1,eyebrow:"Tip",title:"Ready to explore your data?",description:"Create a project to turn this source into a dashboard.",actions:k}},w={args:{emphasis:"branded",eyebrow:"Pro",title:"Your trial ends in 3 days",description:"Upgrade to keep your dashboards and scheduled syncs.",actions:e.jsx(a,{variant:"ai",children:"Upgrade"}),dismissible:!0}},f={args:{density:"compact",eyebrow:"Tip",title:"You can pin dashboards",description:"Pin your most-used dashboards to the top of the sidebar.",actions:e.jsx(j,{href:"#",children:"Learn how"})}};var N,A,z,L,P;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    actions: CreateProjectAction
  }
}`,...(z=(A=r.parameters)==null?void 0:A.docs)==null?void 0:z.source},description:{story:"Base design — Figma node 1974:2079. Horizontal, `subtle`, brand illustration, secondary action.",...(P=(L=r.parameters)==null?void 0:L.docs)==null?void 0:P.description}}};var D,F,q,R,E;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    eyebrow: 'New',
    actions: CreateProjectAction,
    accent: false,
    dismissible: false
  }
}`,...(q=(F=o.parameters)==null?void 0:F.docs)==null?void 0:q.source},description:{story:"Playground with controls for every prop.",...(E=(R=o.parameters)==null?void 0:R.docs)==null?void 0:E.description}}};var U,V,G,H,W;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    eyebrow: 'New',
    emphasis: 'branded',
    title: 'Introducing AI dashboards',
    description: 'Turn any source into a narrated dashboard in one click.',
    actions: <Button variant="ai">Try it now</Button>,
    dismissible: true
  }
}`,...(G=(V=i.parameters)==null?void 0:V.docs)==null?void 0:G.source},description:{story:'New feature announcement — "New" eyebrow badge draws the eye to a just-shipped capability.',...(W=(H=i.parameters)==null?void 0:H.docs)==null?void 0:W.description}}};var M,O,Y,K,X;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Tip',
    title: 'Did you know you can schedule syncs?',
    description: 'Keep dashboards fresh automatically — set a daily or weekly refresh.',
    actions: <Link href="#">Set up a schedule</Link>,
    dismissible: true
  }
}`,...(Y=(O=n.parameters)==null?void 0:O.docs)==null?void 0:Y.source},description:{story:'Feature discovery / "Did you know" — lightweight tip that surfaces an existing option.',...(X=(K=n.parameters)==null?void 0:K.docs)==null?void 0:X.description}}};var $,J,Q,Z,ee;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Pro',
    emphasis: 'branded',
    title: 'Unlock unlimited projects',
    description: 'Upgrade to Pro for unlimited projects, scheduled syncs, and priority support.',
    actions: <>
        <Button variant="ai">Upgrade</Button>
        <Link href="#">Maybe later</Link>
      </>,
    dismissible: true
  }
}`,...(Q=(J=d.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"Upgrade / upsell — branded emphasis + primary CTA to nudge a plan change.",...(ee=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,ae,se,re,oe;c.parameters={...c.parameters,docs:{...(te=c.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    title: 'Ready to explore your data?',
    description: 'Create a project to turn this source into a dashboard.',
    actions: CreateProjectAction
  }
}`,...(se=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:"Getting started / onboarding CTA — the empty-state prompt from the Figma base design.",...(oe=(re=c.parameters)==null?void 0:re.docs)==null?void 0:oe.description}}};var ie,ne,de,ce,le;l.parameters={...l.parameters,docs:{...(ie=l.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Explore',
    title: 'Connect more sources',
    description: 'Blend CSVs, spreadsheets, and databases into a single dashboard.',
    illustration: <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      borderRadius: 'var(--rc-radius-md)',
      background: 'var(--rc-layer-03)'
    }}>
        <Icon name="database" size={24} tone="primary" />
      </div>,
    actions: <Button variant="secondary">Browse integrations</Button>
  }
}`,...(de=(ne=l.parameters)==null?void 0:ne.docs)==null?void 0:de.source},description:{story:`Cross-sell "explore more options" — surface adjacent capabilities the user hasn't tried.`,...(le=(ce=l.parameters)==null?void 0:ce.docs)==null?void 0:le.description}}};var pe,ue,me,ye,he;p.parameters={...p.parameters,docs:{...(pe=p.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    layout: 'stacked',
    emphasis: 'branded',
    eyebrow: 'New',
    title: 'Introducing AI dashboards',
    description: 'Turn any source into a narrated dashboard in one click. Ask questions in plain language and get charts back instantly.',
    actions: <Button variant="ai">Try it now</Button>,
    dismissible: true
  }
}`,...(me=(ue=p.parameters)==null?void 0:ue.docs)==null?void 0:me.source},description:{story:'`layout="stacked"` — illustration and content flow vertically for narrow columns or hero promos.',...(he=(ye=p.parameters)==null?void 0:ye.docs)==null?void 0:he.description}}};var be,ge,we,fe,ve;u.parameters={...u.parameters,docs:{...(be=u.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    emphasis: 'subtle',
    eyebrow: 'New',
    title: 'Introducing AI dashboards',
    description: 'Turn any source into a narrated dashboard in one click.',
    actions: <Button variant="secondary">Try it now</Button>
  }
}`,...(we=(ge=u.parameters)==null?void 0:ge.docs)==null?void 0:we.source},description:{story:'`emphasis="subtle"` — the neutral white Figma surface (default).',...(ve=(fe=u.parameters)==null?void 0:fe.docs)==null?void 0:ve.description}}};var xe,_e,je,ke,Te;m.parameters={...m.parameters,docs:{...(xe=m.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    emphasis: 'branded',
    eyebrow: 'New',
    title: 'Introducing AI dashboards',
    description: 'Turn any source into a narrated dashboard in one click.',
    actions: <Button variant="ai">Try it now</Button>
  }
}`,...(je=(_e=m.parameters)==null?void 0:_e.docs)==null?void 0:je.source},description:{story:'`emphasis="branded"` — brand/purple gradient tint for a more promotional look.',...(Te=(ke=m.parameters)==null?void 0:ke.docs)==null?void 0:Te.description}}};var Ce,Ie,Se,Be,Ne;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    emphasis: 'elevated',
    eyebrow: 'New',
    title: 'Introducing AI dashboards',
    description: 'Turn any source into a narrated dashboard in one click.',
    actions: <Button variant="secondary">Try it now</Button>
  }
}`,...(Se=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source},description:{story:'`emphasis="elevated"` — raised with `--rc-shadow-md` to stand out over busy content.',...(Ne=(Be=y.parameters)==null?void 0:Be.docs)==null?void 0:Ne.description}}};var Ae,ze,Le,Pe,De;h.parameters={...h.parameters,docs:{...(Ae=h.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    accent: true,
    eyebrow: 'What\\u2019s new',
    title: 'Faster syncs this week',
    description: 'Sources now refresh up to 3x faster.',
    actions: <Link href="#">See changelog</Link>
  }
}`,...(Le=(ze=h.parameters)==null?void 0:ze.docs)==null?void 0:Le.source},description:{story:"Leading accent bar — a brand-colored stripe for a lightweight promotional cue.",...(De=(Pe=h.parameters)==null?void 0:Pe.docs)==null?void 0:De.description}}};var Fe,qe,Re,Ee,Ue;b.parameters={...b.parameters,docs:{...(Fe=b.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    title: 'Connect a new source',
    description: 'Import a CSV, spreadsheet, or database to get started.',
    illustration: <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      borderRadius: 'var(--rc-radius-md)',
      background: 'var(--rc-layer-03)'
    }}>
        <Icon name="database" size={24} tone="primary" />
      </div>,
    actions: <Button variant="secondary">Add source</Button>
  }
}`,...(Re=(qe=b.parameters)==null?void 0:qe.docs)==null?void 0:Re.source},description:{story:"Swapped illustration — pass any `ReactNode` into the `illustration` slot.",...(Ue=(Ee=b.parameters)==null?void 0:Ee.docs)==null?void 0:Ue.description}}};var Ve,Ge,He,We,Me;g.parameters={...g.parameters,docs:{...(Ve=g.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    showIllustration: false,
    eyebrow: 'Tip',
    title: 'Ready to explore your data?',
    description: 'Create a project to turn this source into a dashboard.',
    actions: CreateProjectAction
  }
}`,...(He=(Ge=g.parameters)==null?void 0:Ge.docs)==null?void 0:He.source},description:{story:"No illustration — the layout reflows with no empty gap when `showIllustration` is false.",...(Me=(We=g.parameters)==null?void 0:We.docs)==null?void 0:Me.description}}};var Oe,Ye,Ke,Xe,$e;w.parameters={...w.parameters,docs:{...(Oe=w.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    emphasis: 'branded',
    eyebrow: 'Pro',
    title: 'Your trial ends in 3 days',
    description: 'Upgrade to keep your dashboards and scheduled syncs.',
    actions: <Button variant="ai">Upgrade</Button>,
    dismissible: true
  }
}`,...(Ke=(Ye=w.parameters)==null?void 0:Ye.docs)==null?void 0:Ke.source},description:{story:"Dismissible — adds an accessible close (X) button. Visibility is controlled by the consumer.",...($e=(Xe=w.parameters)==null?void 0:Xe.docs)==null?void 0:$e.description}}};var Je,Qe,Ze,et,tt;f.parameters={...f.parameters,docs:{...(Je=f.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    density: 'compact',
    eyebrow: 'Tip',
    title: 'You can pin dashboards',
    description: 'Pin your most-used dashboards to the top of the sidebar.',
    actions: <Link href="#">Learn how</Link>
  }
}`,...(Ze=(Qe=f.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source},description:{story:"Compact / inline density — tighter padding and a 16px title for dense layouts and toolbars.",...(tt=(et=f.parameters)==null?void 0:et.docs)==null?void 0:tt.description}}};const sa=["Default","Playground","NewFeatureAnnouncement","FeatureDiscoveryTip","UpgradePrompt","GettingStartedCta","ExploreMoreOptions","Stacked","EmphasisSubtle","EmphasisBranded","EmphasisElevated","WithAccentBar","SwappedIllustration","WithoutIllustration","Dismissible","Compact"];export{f as Compact,r as Default,w as Dismissible,m as EmphasisBranded,y as EmphasisElevated,u as EmphasisSubtle,l as ExploreMoreOptions,n as FeatureDiscoveryTip,c as GettingStartedCta,i as NewFeatureAnnouncement,o as Playground,p as Stacked,b as SwappedIllustration,d as UpgradePrompt,h as WithAccentBar,g as WithoutIllustration,sa as __namedExportsOrder,aa as default};

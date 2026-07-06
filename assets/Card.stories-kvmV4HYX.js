import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as j}from"./Badge-Cbms_ml2.js";import{I}from"./Icon-6KlfR_aX.js";import{c as i}from"./cn-2dOUpm6k.js";import{A as Et}from"./Avatar-B56rupaZ.js";import{D as Ot}from"./Divider-BhWe8uDS.js";import{I as Gt}from"./IconButton-BKzAixFV.js";import"./iframe-DBX0v1Wm.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-zeqnIraZ.js";import"./CaretRight.es-C7OiW3AX.js";import"./CaretDown.es-CCRlVziS.js";import"./Minus.es-gPxNOu_K.js";import"./Warning.es-BxbdZV1j.js";import"./Flag.es-D0A0cjfy.js";import"./Trash.es-ChueP44e.js";const Ut="_card_1bpge_1",$t="_elevated_1bpge_11",Yt="_layoutProject_1bpge_16",Jt="_layoutStacked_1bpge_22",Kt="_layoutStackedWithFooter_1bpge_28",Qt="_densityCompact_1bpge_33",Xt="_densityDefault_1bpge_37",Zt="_densityRoomy_1bpge_42",ea="_projectWithHeaderStart_1bpge_47",ta="_stackedContent_1bpge_51",aa="_stackedHeader_1bpge_59",sa="_signalBadges_1bpge_66",oa="_description_1bpge_74",ra="_descriptionBase_1bpge_81",na="_descriptionMd_1bpge_88",ia="_descriptionLg_1bpge_95",la="_stats_1bpge_102",da="_stat_1bpge_102",ca="_statValue_1bpge_115",ua="_statLabel_1bpge_120",pa="_statsCompact_1bpge_125",ha="_statCompact_1bpge_133",ma="_considerations_1bpge_139",ga="_considerationsLabel_1bpge_146",wa="_considerationsList_1bpge_151",fa="_considerationsItem_1bpge_161",ya="_considerationsIcon_1bpge_168",ba="_considerationsText_1bpge_172",Ca="_header_1bpge_178",Sa="_headerBetween_1bpge_187",_a="_headerStartOnly_1bpge_191",va="_body_1bpge_195",ja="_titleH6_1bpge_205",Da="_titleH5_1bpge_212",Ta="_titleH7_1bpge_219",Ba="_meta_1bpge_226",Aa="_badgeSlot_1bpge_234",xa="_metaItem_1bpge_242",ka="_author_1bpge_250",Na="_authorName_1bpge_256",Ma="_footer_1bpge_261",a={card:Ut,elevated:$t,layoutProject:Yt,layoutStacked:Jt,layoutStackedWithFooter:Kt,densityCompact:Qt,densityDefault:Xt,densityRoomy:Zt,projectWithHeaderStart:ea,stackedContent:ta,stackedHeader:aa,signalBadges:sa,description:oa,descriptionBase:ra,descriptionMd:na,descriptionLg:ia,stats:la,stat:da,statValue:ca,statLabel:ua,statsCompact:pa,statCompact:ha,considerations:ma,considerationsLabel:ga,considerationsList:wa,considerationsItem:fa,considerationsIcon:ya,considerationsText:ba,header:Ca,headerBetween:Sa,headerStartOnly:_a,body:va,titleH6:ja,titleH5:Da,titleH7:Ta,meta:Ba,badgeSlot:Aa,metaItem:xa,author:ka,authorName:Na,footer:Ma},le={project:{layout:"project",density:"compact",titleSize:"h6",descriptionSize:"sm",statsSpacing:"default"},dataSource:{layout:"stacked",density:"default",titleSize:"h6",descriptionSize:"sm",statsSpacing:"default"},signal:{layout:"stacked",density:"roomy",titleSize:"h6",descriptionSize:"sm",statsSpacing:"compact"},trend:{layout:"stacked",density:"roomy",titleSize:"h5",descriptionSize:"base",statsSpacing:"default"}},La={project:{showTitle:!0,showDescription:!1,showHeader:!0,showActions:!0,showCreatedDate:!0,showAuthor:!0,showDivider:!1,showStats:!1,showStrengthBadge:!1,showLeadBadge:!1,showCategory:!1,showConsiderations:!1},dataSource:{showTitle:!0,showDescription:!0,showHeader:!1,showActions:!1,showCreatedDate:!1,showAuthor:!1,showDivider:!0,showStats:!0,showStrengthBadge:!1,showLeadBadge:!1,showCategory:!1,showConsiderations:!1},signal:{showTitle:!0,showDescription:!0,showHeader:!1,showActions:!1,showCreatedDate:!1,showAuthor:!1,showDivider:!1,showStats:!0,showStrengthBadge:!0,showLeadBadge:!0,showCategory:!0,showConsiderations:!1},trend:{showTitle:!0,showDescription:!0,showHeader:!1,showActions:!1,showCreatedDate:!1,showAuthor:!1,showDivider:!1,showStats:!1,showStrengthBadge:!1,showLeadBadge:!1,showCategory:!1,showConsiderations:!0}};function Ha(s,e){const r=s?La[s]:null,d={showTitle:!!(e.title??e.children),showDescription:!!e.description,showHeader:!!e.header,showActions:!!(e.actions??e.onMenuClick),showCreatedDate:!!e.createdDate,showAuthor:!!e.authorName,showDivider:!!(e.title||e.description||e.children)&&!!(e.stats&&e.stats.length>0),showStats:!!(e.stats&&e.stats.length>0),showStrengthBadge:!!e.strengthLabel,showLeadBadge:!!e.leadLabel,showCategory:!!e.category,showConsiderations:!!(e.considerations&&e.considerations.length>0)},n=r??d;return{showTitle:e.showTitle??n.showTitle,showDescription:e.showDescription??n.showDescription,showHeader:e.showHeader??n.showHeader,showActions:e.showActions??n.showActions,showCreatedDate:e.showCreatedDate??n.showCreatedDate,showAuthor:e.showAuthor??n.showAuthor,showDivider:e.showDivider??n.showDivider,showStats:e.showStats??n.showStats,showStrengthBadge:e.showStrengthBadge??n.showStrengthBadge,showLeadBadge:e.showLeadBadge??n.showLeadBadge,showCategory:e.showCategory??n.showCategory,showConsiderations:e.showConsiderations??n.showConsiderations}}function qa(s,e){const r=s?le[s]:le.project;return{layout:e.layout??r.layout,density:e.density??r.density,titleSize:e.titleSize??r.titleSize,descriptionSize:e.descriptionSize??r.descriptionSize,statsSpacing:e.statsSpacing??e.statsAppearance??r.statsSpacing}}function za({onMenuClick:s,menuLabel:e="Open menu"}){return s?t.jsx(Gt,{variant:"ghost",size:"sm",label:e,onClick:s,children:t.jsx(I,{name:"dots-three-vertical",size:16,tone:"primary"})}):null}function Ia({createdLabel:s="Created:",createdDate:e,authorName:r,authorInitials:d,showCreatedDate:n=!0,showAuthor:l=!0}){const T=n&&!!e,h=l&&!!r;return!T&&!h?null:t.jsxs("div",{className:a.meta,children:[T?t.jsxs("div",{className:a.metaItem,children:[t.jsx("span",{className:"rc-label-md",children:s}),t.jsx("span",{className:"rc-body-sm",children:e})]}):null,h?t.jsxs("div",{className:a.author,children:[t.jsx(Et,{size:"sm",name:r,initials:d}),t.jsx("span",{className:i("rc-label-md",a.authorName),children:r})]}):null]})}function Pa({stats:s,spacing:e}){if(s.length===0)return null;const r=e==="compact",d=r?a.statsCompact:a.stats,n=r?a.statCompact:a.stat;return t.jsx("div",{className:d,children:s.map(l=>t.jsxs("div",{className:n,children:[t.jsx("span",{className:i("rc-heading-h7",a.statValue),children:l.value}),t.jsx("span",{className:i("rc-label-md",a.statLabel),children:l.label})]},`${l.label}-${l.value}`))})}function Ra({label:s="Badge"}){return t.jsx("div",{className:a.badgeSlot,children:t.jsx(j,{appearance:"subtle",color:"neutral",children:s})})}function Wa({strengthLabel:s,leadLabel:e,showStrengthBadge:r,showLeadBadge:d}){const n=r&&!!s,l=d&&!!e;return!n&&!l?null:t.jsxs("div",{className:a.signalBadges,children:[n?t.jsx(j,{appearance:"emphasis",color:"purple",iconLeft:t.jsx(I,{name:"cell-signal-full",size:12,tone:"on-color","aria-hidden":!0}),children:s}):null,l?t.jsx(j,{appearance:"subtle",color:"lightPurple",iconLeft:t.jsx(I,{name:"flag",size:12,tone:"ai","aria-hidden":!0}),children:e}):null]})}function Fa({label:s="Strategic considerations",items:e=[]}){return e.length===0?null:t.jsxs("div",{className:a.considerations,children:[t.jsx("p",{className:i("rc-label-lg",a.considerationsLabel),children:s}),t.jsx("ul",{className:a.considerationsList,children:e.map(r=>t.jsxs("li",{className:a.considerationsItem,children:[t.jsx(I,{name:"arrow-elbow-down-right",size:24,tone:"secondary",className:a.considerationsIcon,"aria-hidden":!0}),t.jsx("span",{className:i("rc-body-md",a.considerationsText),children:r})]},r))})]})}function v({variant:s="project",layout:e,density:r,titleSize:d,descriptionSize:n,statsAppearance:l,statsSpacing:T,className:h,elevated:G=!0,header:m,badgeLabel:bt,footer:U,children:B,title:g,description:A,stats:$=[],strengthLabel:Y,leadLabel:J,category:P,considerationsLabel:Ct,considerations:K=[],createdLabel:St,createdDate:Q,authorName:X,authorInitials:_t,actions:R,onMenuClick:W,menuLabel:vt,showTitle:jt,showDescription:Dt,showHeader:Tt,showActions:Bt,showCreatedDate:At,showAuthor:xt,showDivider:kt,showStats:Nt,showStrengthBadge:Mt,showLeadBadge:Lt,showCategory:Ht,showConsiderations:qt,...Z}){const c=qa(s,{layout:e,density:r,titleSize:d,descriptionSize:n,statsSpacing:T??l}),o=Ha(s,{title:g,description:A,header:m,actions:R,onMenuClick:W,createdDate:Q,authorName:X,stats:$,strengthLabel:Y,leadLabel:J,category:P,considerations:K,children:B,showTitle:jt,showDescription:Dt,showHeader:Tt,showActions:Bt,showCreatedDate:At,showAuthor:xt,showDivider:kt,showStats:Nt,showStrengthBadge:Mt,showLeadBadge:Lt,showCategory:Ht,showConsiderations:qt}),ee=c.density==="compact"?a.densityCompact:c.density==="roomy"?a.densityRoomy:a.densityDefault,te=c.titleSize==="h5"?i("rc-heading-h5",a.titleH5):c.titleSize==="h7"?i("rc-heading-h7",a.titleH7):i("rc-heading-h6",a.titleH6),zt=c.descriptionSize==="lg"?i("rc-body-lg",a.descriptionLg):c.descriptionSize==="md"?i("rc-body-rg",a.descriptionMd):c.descriptionSize==="base"?i("rc-body-md",a.descriptionBase):i("rc-body-sm",a.description);if(c.layout==="project"){const Wt=o.showActions?R??t.jsx(za,{onMenuClick:W,menuLabel:vt}):null,ne=o.showHeader&&m?m:o.showHeader?t.jsx(Ra,{label:bt}):null,w=!!ne,E=o.showActions&&!!(R??W),Ft=w||E,Vt=B??(o.showTitle&&g?t.jsx("h3",{className:te,children:g}):null),ie=U??(o.showCreatedDate||o.showAuthor?t.jsx(Ia,{createdLabel:St,createdDate:Q,authorName:X,authorInitials:_t,showCreatedDate:o.showCreatedDate,showAuthor:o.showAuthor}):null);return t.jsxs("article",{className:i(a.card,a.layoutProject,ee,G&&a.elevated,w&&a.projectWithHeaderStart,h),...Z,children:[Ft?t.jsxs("div",{className:i(a.header,w&&E&&a.headerBetween,w&&!E&&a.headerStartOnly),children:[w?ne:null,Wt]}):null,t.jsxs("div",{className:a.body,children:[Vt,ie?t.jsx("div",{className:a.footer,children:ie}):null]})]})}const ae=o.showHeader&&m?m:null,It=!ae&&(o.showStrengthBadge||o.showLeadBadge)?t.jsx(Wa,{strengthLabel:Y,leadLabel:J,showStrengthBadge:o.showStrengthBadge,showLeadBadge:o.showLeadBadge}):null,se=ae??It,Pt=!!se,oe=o.showTitle||o.showDescription&&!!A||!!B,F=o.showStats?$:[],Rt=o.showDivider&&oe&&F.length>0,re=o.showConsiderations?K:[],V=U??(o.showCategory&&P?t.jsx(j,{appearance:"subtle",color:"neutral",children:P}):null);return t.jsxs("article",{className:i(a.card,a.layoutStacked,ee,G&&a.elevated,!!V&&a.layoutStackedWithFooter,h),...Z,children:[t.jsxs("div",{className:a.stackedContent,children:[Pt?se:null,oe?t.jsxs("div",{className:a.stackedHeader,children:[B??(o.showTitle&&g?t.jsx("h3",{className:te,children:g}):null),o.showDescription&&A?t.jsx("p",{className:zt,children:A}):null]}):null,Rt?t.jsx(Ot,{}):null,F.length>0?t.jsx(Pa,{stats:F,spacing:c.statsSpacing}):null,re.length>0?t.jsx(Fa,{label:Ct,items:re}):null]}),V?t.jsx("div",{className:a.footer,children:V}):null]})}v.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:"'project' | 'dataSource' | 'signal' | 'trend'",elements:[{name:"literal",value:"'project'"},{name:"literal",value:"'dataSource'"},{name:"literal",value:"'signal'"},{name:"literal",value:"'trend'"}]},description:"@deprecated Maps to layout, density, and visibility defaults. Explicit props override.",defaultValue:{value:"'project'",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'project' | 'stacked'",elements:[{name:"literal",value:"'project'"},{name:"literal",value:"'stacked'"}]},description:""},density:{required:!1,tsType:{name:"union",raw:"'compact' | 'default' | 'roomy'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'default'"},{name:"literal",value:"'roomy'"}]},description:""},titleSize:{required:!1,tsType:{name:"union",raw:"'h5' | 'h6' | 'h7'",elements:[{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'h7'"}]},description:""},descriptionSize:{required:!1,tsType:{name:"union",raw:"'sm' | 'base' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},statsSpacing:{required:!1,tsType:{name:"union",raw:"'default' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"}]},description:""},statsAppearance:{required:!1,tsType:{name:"union",raw:"'default' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"}]},description:"@deprecated Use `statsSpacing` instead."},className:{required:!1,tsType:{name:"string"},description:""},elevated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},header:{required:!1,tsType:{name:"ReactNode"},description:"Top slot — project: top-left badge row; stacked: replaces default badge row when set."},badgeLabel:{required:!1,tsType:{name:"string"},description:"Default header badge label for project layout when `header` is not provided."},footer:{required:!1,tsType:{name:"ReactNode"},description:"Bottom slot — replaces auto-generated footer content when provided."},children:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},stats:{required:!1,tsType:{name:"Array",elements:[{name:"CardStat"}],raw:"CardStat[]"},description:"",defaultValue:{value:"[]",computed:!1}},strengthLabel:{required:!1,tsType:{name:"string"},description:""},leadLabel:{required:!1,tsType:{name:"string"},description:""},category:{required:!1,tsType:{name:"string"},description:""},considerationsLabel:{required:!1,tsType:{name:"string"},description:""},considerations:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},createdLabel:{required:!1,tsType:{name:"string"},description:""},createdDate:{required:!1,tsType:{name:"string"},description:""},authorName:{required:!1,tsType:{name:"string"},description:""},authorInitials:{required:!1,tsType:{name:"string"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""},onMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},menuLabel:{required:!1,tsType:{name:"string"},description:""},showTitle:{required:!1,tsType:{name:"boolean"},description:""},showDescription:{required:!1,tsType:{name:"boolean"},description:""},showHeader:{required:!1,tsType:{name:"boolean"},description:""},showActions:{required:!1,tsType:{name:"boolean"},description:""},showCreatedDate:{required:!1,tsType:{name:"boolean"},description:""},showAuthor:{required:!1,tsType:{name:"boolean"},description:""},showDivider:{required:!1,tsType:{name:"boolean"},description:""},showStats:{required:!1,tsType:{name:"boolean"},description:""},showStrengthBadge:{required:!1,tsType:{name:"boolean"},description:""},showLeadBadge:{required:!1,tsType:{name:"boolean"},description:""},showCategory:{required:!1,tsType:{name:"boolean"},description:""},showConsiderations:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};const os={title:"Components/Card",component:v,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Flexible surface container aligned with Figma Card (node 1297:237). Toggle optional regions with `show*` props — title, description, header badge, actions, metadata, divider, stats, signal badges, category, and considerations. Use `variant` presets (`project`, `dataSource`, `signal`, `trend`) or compose with `layout` and `density`."}}},argTypes:{showTitle:{control:"boolean"},showDescription:{control:"boolean"},showHeader:{control:"boolean"},showActions:{control:"boolean"},showCreatedDate:{control:"boolean"},showAuthor:{control:"boolean"},showDivider:{control:"boolean"},showStats:{control:"boolean"},showStrengthBadge:{control:"boolean"},showLeadBadge:{control:"boolean"},showCategory:{control:"boolean"},showConsiderations:{control:"boolean"},elevated:{control:"boolean"},layout:{control:"select",options:["project","stacked"]},density:{control:"select",options:["compact","default","roomy"]},titleSize:{control:"select",options:["h5","h6","h7"]},descriptionSize:{control:"select",options:["sm","base","md","lg"]},statsSpacing:{control:"select",options:["default","compact"]}},decorators:[s=>t.jsx("div",{style:{maxWidth:418,width:"100%"},children:t.jsx(s,{})})]},O="Field medical insights captured by MSLs during HCP interactions.",u={args:{variant:"project",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{}}},p={args:{variant:"dataSource",title:"Card title",description:O,stats:[{value:"2,130",label:"Records"},{value:"4",label:"Files"}]}},f={args:{variant:"signal",strengthLabel:"Strong",leadLabel:"Lead",title:"Card title",description:O,stats:[{value:"43",label:"Records"},{value:"18",label:"HCPs"}],category:"Infrastructure"}},y={args:{variant:"trend",title:"Card title",description:O,considerations:["Only 3 of 12 records note formal AE reporting – modifications happen but rarely surface in formal channels.","Only 3 of 12 records note formal AE reporting – modifications happen but rarely surface in formal channels."]}},b={args:{layout:"stacked",density:"default",title:"Ready to explore your data?",description:"Create a project to turn this source into a dashboard.",titleSize:"h7",descriptionSize:"md",showTitle:!0,showDescription:!0,elevated:!1}},C={args:{layout:"project",density:"compact",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{},badgeLabel:"Draft",showTitle:!0,showCreatedDate:!0,showAuthor:!0,showActions:!0,showHeader:!0,elevated:!0}},S=u,_=p,D={variant:"project",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{}},x={args:{...D,showCreatedDate:!0,showAuthor:!0,showActions:!0,showHeader:!0}},k={args:{...D,showAuthor:!1}},N={args:{...D,showCreatedDate:!1}},M={args:{...D,showActions:!1}},L={args:{...D,showHeader:!1}},H={args:{variant:"project",title:"Card title",showTitle:!0,showCreatedDate:!1,showAuthor:!1,showActions:!1,showHeader:!1}},q={args:{variant:"project",title:"Project 5",createdDate:"1 May 2026",authorName:"Monika Nowak",elevated:!1,header:t.jsx(j,{appearance:"subtle",color:"neutral",loading:!0,children:"Generating..."}),onMenuClick:()=>{}}},z={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:24,maxWidth:1344,width:"100%"},children:[t.jsx(v,{variant:"project",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{}}),t.jsx(v,{variant:"project",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{}}),t.jsx(v,{variant:"project",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{}})]})};var de,ce,ue,pe,he;u.parameters={...u.parameters,docs:{...(de=u.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    variant: 'project',
    title: 'Card title',
    createdDate: '1 May 2026',
    authorName: 'Monika Nowak',
    onMenuClick: () => undefined
  }
}`,...(ue=(ce=u.parameters)==null?void 0:ce.docs)==null?void 0:ue.source},description:{story:"Project preset — Figma Preset=Project (1297:108).",...(he=(pe=u.parameters)==null?void 0:pe.docs)==null?void 0:he.description}}};var me,ge,we,fe,ye;p.parameters={...p.parameters,docs:{...(me=p.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    variant: 'dataSource',
    title: 'Card title',
    description: defaultDescription,
    stats: [{
      value: '2,130',
      label: 'Records'
    }, {
      value: '4',
      label: 'Files'
    }]
  }
}`,...(we=(ge=p.parameters)==null?void 0:ge.docs)==null?void 0:we.source},description:{story:"Data source preset — Figma Preset=DataSource (1297:126).",...(ye=(fe=p.parameters)==null?void 0:fe.docs)==null?void 0:ye.description}}};var be,Ce,Se,_e,ve;f.parameters={...f.parameters,docs:{...(be=f.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    variant: 'signal',
    strengthLabel: 'Strong',
    leadLabel: 'Lead',
    title: 'Card title',
    description: defaultDescription,
    stats: [{
      value: '43',
      label: 'Records'
    }, {
      value: '18',
      label: 'HCPs'
    }],
    category: 'Infrastructure'
  }
}`,...(Se=(Ce=f.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source},description:{story:"Signal preset — Figma Preset=Signal (1297:139).",...(ve=(_e=f.parameters)==null?void 0:_e.docs)==null?void 0:ve.description}}};var je,De,Te,Be,Ae;y.parameters={...y.parameters,docs:{...(je=y.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    variant: 'trend',
    title: 'Card title',
    description: defaultDescription,
    considerations: ['Only 3 of 12 records note formal AE reporting – modifications happen but rarely surface in formal channels.', 'Only 3 of 12 records note formal AE reporting – modifications happen but rarely surface in formal channels.']
  }
}`,...(Te=(De=y.parameters)==null?void 0:De.docs)==null?void 0:Te.source},description:{story:"Trend preset — Figma Preset=Trend (1297:217).",...(Ae=(Be=y.parameters)==null?void 0:Be.docs)==null?void 0:Ae.description}}};var xe,ke,Ne,Me,Le;b.parameters={...b.parameters,docs:{...(xe=b.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    layout: 'stacked',
    density: 'default',
    title: 'Ready to explore your data?',
    description: 'Create a project to turn this source into a dashboard.',
    titleSize: 'h7',
    descriptionSize: 'md',
    showTitle: true,
    showDescription: true,
    elevated: false
  }
}`,...(Ne=(ke=b.parameters)==null?void 0:ke.docs)==null?void 0:Ne.source},description:{story:"Empty-state CTA — composed stacked card (not a Figma preset variant).",...(Le=(Me=b.parameters)==null?void 0:Me.docs)==null?void 0:Le.description}}};var He,qe,ze,Ie,Pe;C.parameters={...C.parameters,docs:{...(He=C.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    layout: 'project',
    density: 'compact',
    title: 'Card title',
    createdDate: '1 May 2026',
    authorName: 'Monika Nowak',
    onMenuClick: () => undefined,
    badgeLabel: 'Draft',
    showTitle: true,
    showCreatedDate: true,
    showAuthor: true,
    showActions: true,
    showHeader: true,
    elevated: true
  }
}`,...(ze=(qe=C.parameters)==null?void 0:qe.docs)==null?void 0:ze.source},description:{story:"Playground with toggles for every optional region.",...(Pe=(Ie=C.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.description}}};var Re,We,Fe,Ve,Ee;S.parameters={...S.parameters,docs:{...(Re=S.parameters)==null?void 0:Re.docs,source:{originalSource:"ProjectCard",...(Fe=(We=S.parameters)==null?void 0:We.docs)==null?void 0:Fe.source},description:{story:"@deprecated Alias for `ProjectCard`.",...(Ee=(Ve=S.parameters)==null?void 0:Ve.docs)==null?void 0:Ee.description}}};var Oe,Ge,Ue,$e,Ye;_.parameters={..._.parameters,docs:{...(Oe=_.parameters)==null?void 0:Oe.docs,source:{originalSource:"DataSourceCard",...(Ue=(Ge=_.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source},description:{story:"@deprecated Alias for `DataSourceCard`.",...(Ye=($e=_.parameters)==null?void 0:$e.docs)==null?void 0:Ye.description}}};var Je,Ke,Qe;x.parameters={...x.parameters,docs:{...(Je=x.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    ...projectCardArgs,
    showCreatedDate: true,
    showAuthor: true,
    showActions: true,
    showHeader: true
  }
}`,...(Qe=(Ke=x.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;k.parameters={...k.parameters,docs:{...(Xe=k.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    ...projectCardArgs,
    showAuthor: false
  }
}`,...(et=(Ze=k.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,st;N.parameters={...N.parameters,docs:{...(tt=N.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    ...projectCardArgs,
    showCreatedDate: false
  }
}`,...(st=(at=N.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};var ot,rt,nt;M.parameters={...M.parameters,docs:{...(ot=M.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  args: {
    ...projectCardArgs,
    showActions: false
  }
}`,...(nt=(rt=M.parameters)==null?void 0:rt.docs)==null?void 0:nt.source}}};var it,lt,dt;L.parameters={...L.parameters,docs:{...(it=L.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    ...projectCardArgs,
    showHeader: false
  }
}`,...(dt=(lt=L.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ct,ut,pt;H.parameters={...H.parameters,docs:{...(ct=H.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  args: {
    variant: 'project',
    title: 'Card title',
    showTitle: true,
    showCreatedDate: false,
    showAuthor: false,
    showActions: false,
    showHeader: false
  }
}`,...(pt=(ut=H.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var ht,mt,gt;q.parameters={...q.parameters,docs:{...(ht=q.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  args: {
    variant: 'project',
    title: 'Project 5',
    createdDate: '1 May 2026',
    authorName: 'Monika Nowak',
    elevated: false,
    header: <Badge appearance="subtle" color="neutral" loading>
        Generating...
      </Badge>,
    onMenuClick: () => undefined
  }
}`,...(gt=(mt=q.parameters)==null?void 0:mt.docs)==null?void 0:gt.source}}};var wt,ft,yt;z.parameters={...z.parameters,docs:{...(wt=z.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: 24,
    maxWidth: 1344,
    width: '100%'
  }}>
      <Card variant="project" title="Card title" createdDate="1 May 2026" authorName="Monika Nowak" onMenuClick={() => undefined} />
      <Card variant="project" title="Card title" createdDate="1 May 2026" authorName="Monika Nowak" onMenuClick={() => undefined} />
      <Card variant="project" title="Card title" createdDate="1 May 2026" authorName="Monika Nowak" onMenuClick={() => undefined} />
    </div>
}`,...(yt=(ft=z.parameters)==null?void 0:ft.docs)==null?void 0:yt.source}}};const rs=["ProjectCard","DataSourceCard","SignalCard","TrendCard","ExploreDataCta","Playground","Default","DataSource","AllVisible","WithoutAuthor","WithoutCreated","WithoutMenu","WithoutBadge","Minimal","Generating","Grid"];export{x as AllVisible,_ as DataSource,p as DataSourceCard,S as Default,b as ExploreDataCta,q as Generating,z as Grid,H as Minimal,C as Playground,u as ProjectCard,f as SignalCard,y as TrendCard,k as WithoutAuthor,L as WithoutBadge,N as WithoutCreated,M as WithoutMenu,rs as __namedExportsOrder,os as default};

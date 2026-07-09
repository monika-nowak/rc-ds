import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as D}from"./Badge-GlCorBbr.js";import{I as P}from"./Icon-CBzlcWpN.js";import{c as i}from"./cn-2dOUpm6k.js";import{A as Kt}from"./Avatar-B56rupaZ.js";import{D as Qt}from"./Divider-BhWe8uDS.js";import{I as Xt}from"./IconButton-BKzAixFV.js";import"./iframe-DvHjSd81.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-myOP7pT7.js";import"./CaretRight.es-C1rIAn_X.js";import"./CaretDown.es-Daz0ptHA.js";import"./Minus.es-C8Pax7pW.js";import"./Warning.es-DibZimwv.js";import"./Flag.es-iB4b_H5b.js";import"./Trash.es-DWkRDEUr.js";const Zt="_card_thz32_1",ea="_elevated_thz32_12",ta="_hoverable_thz32_17",aa="_layoutProject_thz32_23",sa="_layoutStacked_thz32_29",oa="_layoutStackedWithFooter_thz32_35",ra="_densityCompact_thz32_40",na="_densityDefault_thz32_44",ia="_densityRoomy_thz32_49",la="_projectWithHeaderStart_thz32_54",da="_stackedContent_thz32_58",ca="_stackedHeader_thz32_66",ua="_signalBadges_thz32_73",ha="_description_thz32_81",pa="_descriptionBase_thz32_88",ma="_descriptionMd_thz32_95",ga="_descriptionLg_thz32_102",wa="_stats_thz32_109",fa="_stat_thz32_109",ya="_statValue_thz32_122",Ca="_statLabel_thz32_127",va="_statsCompact_thz32_132",Sa="_statCompact_thz32_140",_a="_considerations_thz32_146",ba="_considerationsLabel_thz32_153",ja="_considerationsList_thz32_158",Da="_considerationsItem_thz32_168",Ta="_considerationsIcon_thz32_175",za="_considerationsText_thz32_179",ka="_header_thz32_185",Ba="_headerBetween_thz32_194",Aa="_headerStartOnly_thz32_198",xa="_body_thz32_202",Na="_titleH6_thz32_212",Ma="_titleH5_thz32_219",Ha="_titleH7_thz32_226",La="_meta_thz32_233",qa="_badgeSlot_thz32_241",Ia="_metaItem_thz32_249",Pa="_author_thz32_257",Ra="_authorName_thz32_263",Wa="_footer_thz32_268",a={card:Zt,elevated:ea,hoverable:ta,layoutProject:aa,layoutStacked:sa,layoutStackedWithFooter:oa,densityCompact:ra,densityDefault:na,densityRoomy:ia,projectWithHeaderStart:la,stackedContent:da,stackedHeader:ca,signalBadges:ua,description:ha,descriptionBase:pa,descriptionMd:ma,descriptionLg:ga,stats:wa,stat:fa,statValue:ya,statLabel:Ca,statsCompact:va,statCompact:Sa,considerations:_a,considerationsLabel:ba,considerationsList:ja,considerationsItem:Da,considerationsIcon:Ta,considerationsText:za,header:ka,headerBetween:Ba,headerStartOnly:Aa,body:xa,titleH6:Na,titleH5:Ma,titleH7:Ha,meta:La,badgeSlot:qa,metaItem:Ia,author:Pa,authorName:Ra,footer:Wa},ce={project:{layout:"project",density:"compact",titleSize:"h6",descriptionSize:"sm",statsSpacing:"default"},dataSource:{layout:"stacked",density:"default",titleSize:"h6",descriptionSize:"sm",statsSpacing:"default"},signal:{layout:"stacked",density:"roomy",titleSize:"h6",descriptionSize:"sm",statsSpacing:"compact"},trend:{layout:"stacked",density:"roomy",titleSize:"h5",descriptionSize:"base",statsSpacing:"default"}},Fa={project:{showTitle:!0,showDescription:!1,showHeader:!0,showActions:!0,showCreatedDate:!0,showAuthor:!0,showDivider:!1,showStats:!1,showStrengthBadge:!1,showLeadBadge:!1,showCategory:!1,showConsiderations:!1},dataSource:{showTitle:!0,showDescription:!0,showHeader:!1,showActions:!1,showCreatedDate:!1,showAuthor:!1,showDivider:!0,showStats:!0,showStrengthBadge:!1,showLeadBadge:!1,showCategory:!1,showConsiderations:!1},signal:{showTitle:!0,showDescription:!0,showHeader:!1,showActions:!1,showCreatedDate:!1,showAuthor:!1,showDivider:!1,showStats:!0,showStrengthBadge:!0,showLeadBadge:!0,showCategory:!0,showConsiderations:!1},trend:{showTitle:!0,showDescription:!0,showHeader:!1,showActions:!1,showCreatedDate:!1,showAuthor:!1,showDivider:!0,showStats:!1,showStrengthBadge:!1,showLeadBadge:!1,showCategory:!1,showConsiderations:!0}};function Va(s,e){const r=s?Fa[s]:null,d={showTitle:!!(e.title??e.children),showDescription:!!e.description,showHeader:!!e.header,showActions:!!(e.actions??e.onMenuClick),showCreatedDate:!!e.createdDate,showAuthor:!!e.authorName,showDivider:!!(e.title||e.description||e.children)&&!!(e.stats&&e.stats.length>0||e.considerations&&e.considerations.length>0),showStats:!!(e.stats&&e.stats.length>0),showStrengthBadge:!!e.strengthLabel,showLeadBadge:!!e.leadLabel,showCategory:!!e.category,showConsiderations:!!(e.considerations&&e.considerations.length>0)},n=r??d;return{showTitle:e.showTitle??n.showTitle,showDescription:e.showDescription??n.showDescription,showHeader:e.showHeader??n.showHeader,showActions:e.showActions??n.showActions,showCreatedDate:e.showCreatedDate??n.showCreatedDate,showAuthor:e.showAuthor??n.showAuthor,showDivider:e.showDivider??n.showDivider,showStats:e.showStats??n.showStats,showStrengthBadge:e.showStrengthBadge??n.showStrengthBadge,showLeadBadge:e.showLeadBadge??n.showLeadBadge,showCategory:e.showCategory??n.showCategory,showConsiderations:e.showConsiderations??n.showConsiderations}}function Ea(s,e){const r=s?ce[s]:ce.project;return{layout:e.layout??r.layout,density:e.density??r.density,titleSize:e.titleSize??r.titleSize,descriptionSize:e.descriptionSize??r.descriptionSize,statsSpacing:e.statsSpacing??e.statsAppearance??r.statsSpacing}}function Oa({onMenuClick:s,menuLabel:e="Open menu"}){return s?t.jsx(Xt,{variant:"ghost",size:"sm",label:e,onClick:s,children:t.jsx(P,{name:"dots-three-vertical",size:16,tone:"primary"})}):null}function Ga({createdLabel:s="Created:",createdDate:e,authorName:r,authorInitials:d,showCreatedDate:n=!0,showAuthor:l=!0}){const z=n&&!!e,p=l&&!!r;return!z&&!p?null:t.jsxs("div",{className:a.meta,children:[z?t.jsxs("div",{className:a.metaItem,children:[t.jsx("span",{className:"rc-label-md",children:s}),t.jsx("span",{className:"rc-body-sm",children:e})]}):null,p?t.jsxs("div",{className:a.author,children:[t.jsx(Kt,{size:"sm",name:r,initials:d}),t.jsx("span",{className:i("rc-label-md",a.authorName),children:r})]}):null]})}function Ua({stats:s,spacing:e}){if(s.length===0)return null;const r=e==="compact",d=r?a.statsCompact:a.stats,n=r?a.statCompact:a.stat;return t.jsx("div",{className:d,children:s.map(l=>t.jsxs("div",{className:n,children:[t.jsx("span",{className:i("rc-heading-h7",a.statValue),children:l.value}),t.jsx("span",{className:i("rc-label-md",a.statLabel),children:l.label})]},`${l.label}-${l.value}`))})}function $a({label:s="Badge"}){return t.jsx("div",{className:a.badgeSlot,children:t.jsx(D,{appearance:"subtle",color:"neutral",children:s})})}function Ya({strengthLabel:s,leadLabel:e,showStrengthBadge:r,showLeadBadge:d}){const n=r&&!!s,l=d&&!!e;return!n&&!l?null:t.jsxs("div",{className:a.signalBadges,children:[n?t.jsx(D,{appearance:"emphasis",color:"purple",iconLeft:t.jsx(P,{name:"cell-signal-full",size:12,tone:"on-color","aria-hidden":!0}),children:s}):null,l?t.jsx(D,{appearance:"subtle",color:"lightPurple",iconLeft:t.jsx(P,{name:"flag",size:12,tone:"ai","aria-hidden":!0}),children:e}):null]})}function Ja({label:s="Strategic considerations",items:e=[]}){return e.length===0?null:t.jsxs("div",{className:a.considerations,children:[t.jsx("p",{className:i("rc-label-lg",a.considerationsLabel),children:s}),t.jsx("ul",{className:a.considerationsList,children:e.map(r=>t.jsxs("li",{className:a.considerationsItem,children:[t.jsx(P,{name:"arrow-elbow-down-right",size:16,tone:"secondary",className:a.considerationsIcon,"aria-hidden":!0}),t.jsx("span",{className:i("rc-body-sm",a.considerationsText),children:r})]},r))})]})}function j({variant:s="project",layout:e,density:r,titleSize:d,descriptionSize:n,statsAppearance:l,statsSpacing:z,className:p,elevated:$=!0,hoverable:Y=!1,header:m,badgeLabel:Tt,footer:J,children:k,title:g,description:B,stats:K=[],strengthLabel:Q,leadLabel:X,category:R,considerationsLabel:zt,considerations:Z=[],createdLabel:kt,createdDate:ee,authorName:te,authorInitials:Bt,actions:W,onMenuClick:F,menuLabel:At,showTitle:xt,showDescription:Nt,showHeader:Mt,showActions:Ht,showCreatedDate:Lt,showAuthor:qt,showDivider:It,showStats:Pt,showStrengthBadge:Rt,showLeadBadge:Wt,showCategory:Ft,showConsiderations:Vt,...ae}){const c=Ea(s,{layout:e,density:r,titleSize:d,descriptionSize:n,statsSpacing:z??l}),o=Va(s,{title:g,description:B,header:m,actions:W,onMenuClick:F,createdDate:ee,authorName:te,stats:K,strengthLabel:Q,leadLabel:X,category:R,considerations:Z,children:k,showTitle:xt,showDescription:Nt,showHeader:Mt,showActions:Ht,showCreatedDate:Lt,showAuthor:qt,showDivider:It,showStats:Pt,showStrengthBadge:Rt,showLeadBadge:Wt,showCategory:Ft,showConsiderations:Vt}),se=c.density==="compact"?a.densityCompact:c.density==="roomy"?a.densityRoomy:a.densityDefault,oe=c.titleSize==="h5"?i("rc-heading-h5",a.titleH5):c.titleSize==="h7"?i("rc-heading-h7",a.titleH7):i("rc-heading-h6",a.titleH6),Et=c.descriptionSize==="lg"?i("rc-body-lg",a.descriptionLg):c.descriptionSize==="md"?i("rc-body-rg",a.descriptionMd):c.descriptionSize==="base"?i("rc-body-md",a.descriptionBase):i("rc-body-sm",a.description);if(c.layout==="project"){const $t=o.showActions?W??t.jsx(Oa,{onMenuClick:F,menuLabel:At}):null,le=o.showHeader&&m?m:o.showHeader?t.jsx($a,{label:Tt}):null,w=!!le,G=o.showActions&&!!(W??F),Yt=w||G,Jt=k??(o.showTitle&&g?t.jsx("h3",{className:oe,children:g}):null),de=J??(o.showCreatedDate||o.showAuthor?t.jsx(Ga,{createdLabel:kt,createdDate:ee,authorName:te,authorInitials:Bt,showCreatedDate:o.showCreatedDate,showAuthor:o.showAuthor}):null);return t.jsxs("article",{className:i(a.card,a.layoutProject,se,$&&a.elevated,Y&&a.hoverable,w&&a.projectWithHeaderStart,p),...ae,children:[Yt?t.jsxs("div",{className:i(a.header,w&&G&&a.headerBetween,w&&!G&&a.headerStartOnly),children:[w?le:null,$t]}):null,t.jsxs("div",{className:a.body,children:[Jt,de?t.jsx("div",{className:a.footer,children:de}):null]})]})}const re=o.showHeader&&m?m:null,Ot=!re&&(o.showStrengthBadge||o.showLeadBadge)?t.jsx(Ya,{strengthLabel:Q,leadLabel:X,showStrengthBadge:o.showStrengthBadge,showLeadBadge:o.showLeadBadge}):null,ne=re??Ot,Gt=!!ne,ie=o.showTitle||o.showDescription&&!!B||!!k,V=o.showStats?K:[],E=o.showConsiderations?Z:[],Ut=o.showDivider&&ie&&(V.length>0||E.length>0),O=J??(o.showCategory&&R?t.jsx(D,{appearance:"subtle",color:"neutral",children:R}):null);return t.jsxs("article",{className:i(a.card,a.layoutStacked,se,$&&a.elevated,Y&&a.hoverable,!!O&&a.layoutStackedWithFooter,p),...ae,children:[t.jsxs("div",{className:a.stackedContent,children:[Gt?ne:null,ie?t.jsxs("div",{className:a.stackedHeader,children:[k??(o.showTitle&&g?t.jsx("h3",{className:oe,children:g}):null),o.showDescription&&B?t.jsx("p",{className:Et,children:B}):null]}):null,Ut?t.jsx(Qt,{}):null,V.length>0?t.jsx(Ua,{stats:V,spacing:c.statsSpacing}):null,E.length>0?t.jsx(Ja,{label:zt,items:E}):null]}),O?t.jsx("div",{className:a.footer,children:O}):null]})}j.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:"'project' | 'dataSource' | 'signal' | 'trend'",elements:[{name:"literal",value:"'project'"},{name:"literal",value:"'dataSource'"},{name:"literal",value:"'signal'"},{name:"literal",value:"'trend'"}]},description:"@deprecated Maps to layout, density, and visibility defaults. Explicit props override.",defaultValue:{value:"'project'",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'project' | 'stacked'",elements:[{name:"literal",value:"'project'"},{name:"literal",value:"'stacked'"}]},description:""},density:{required:!1,tsType:{name:"union",raw:"'compact' | 'default' | 'roomy'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'default'"},{name:"literal",value:"'roomy'"}]},description:""},titleSize:{required:!1,tsType:{name:"union",raw:"'h5' | 'h6' | 'h7'",elements:[{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'h7'"}]},description:""},descriptionSize:{required:!1,tsType:{name:"union",raw:"'sm' | 'base' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},statsSpacing:{required:!1,tsType:{name:"union",raw:"'default' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"}]},description:""},statsAppearance:{required:!1,tsType:{name:"union",raw:"'default' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"}]},description:"@deprecated Use `statsSpacing` instead."},className:{required:!1,tsType:{name:"string"},description:""},elevated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Enable an interactive hover/focus state that raises the card with a larger shadow.",defaultValue:{value:"false",computed:!1}},header:{required:!1,tsType:{name:"ReactNode"},description:"Top slot — project: top-left badge row; stacked: replaces default badge row when set."},badgeLabel:{required:!1,tsType:{name:"string"},description:"Default header badge label for project layout when `header` is not provided."},footer:{required:!1,tsType:{name:"ReactNode"},description:"Bottom slot — replaces auto-generated footer content when provided."},children:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},stats:{required:!1,tsType:{name:"Array",elements:[{name:"CardStat"}],raw:"CardStat[]"},description:"",defaultValue:{value:"[]",computed:!1}},strengthLabel:{required:!1,tsType:{name:"string"},description:""},leadLabel:{required:!1,tsType:{name:"string"},description:""},category:{required:!1,tsType:{name:"string"},description:""},considerationsLabel:{required:!1,tsType:{name:"string"},description:""},considerations:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},createdLabel:{required:!1,tsType:{name:"string"},description:""},createdDate:{required:!1,tsType:{name:"string"},description:""},authorName:{required:!1,tsType:{name:"string"},description:""},authorInitials:{required:!1,tsType:{name:"string"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""},onMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},menuLabel:{required:!1,tsType:{name:"string"},description:""},showTitle:{required:!1,tsType:{name:"boolean"},description:""},showDescription:{required:!1,tsType:{name:"boolean"},description:""},showHeader:{required:!1,tsType:{name:"boolean"},description:""},showActions:{required:!1,tsType:{name:"boolean"},description:""},showCreatedDate:{required:!1,tsType:{name:"boolean"},description:""},showAuthor:{required:!1,tsType:{name:"boolean"},description:""},showDivider:{required:!1,tsType:{name:"boolean"},description:""},showStats:{required:!1,tsType:{name:"boolean"},description:""},showStrengthBadge:{required:!1,tsType:{name:"boolean"},description:""},showLeadBadge:{required:!1,tsType:{name:"boolean"},description:""},showCategory:{required:!1,tsType:{name:"boolean"},description:""},showConsiderations:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};const hs={title:"Components/Card",component:j,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Flexible surface container aligned with Figma Card (node 1297:237). Toggle optional regions with `show*` props — title, description, header badge, actions, metadata, divider, stats, signal badges, category, and considerations. Use `variant` presets (`project`, `dataSource`, `signal`, `trend`) or compose with `layout` and `density`."}}},argTypes:{showTitle:{control:"boolean"},showDescription:{control:"boolean"},showHeader:{control:"boolean"},showActions:{control:"boolean"},showCreatedDate:{control:"boolean"},showAuthor:{control:"boolean"},showDivider:{control:"boolean"},showStats:{control:"boolean"},showStrengthBadge:{control:"boolean"},showLeadBadge:{control:"boolean"},showCategory:{control:"boolean"},showConsiderations:{control:"boolean"},elevated:{control:"boolean"},hoverable:{control:"boolean"},layout:{control:"select",options:["project","stacked"]},density:{control:"select",options:["compact","default","roomy"]},titleSize:{control:"select",options:["h5","h6","h7"]},descriptionSize:{control:"select",options:["sm","base","md","lg"]},statsSpacing:{control:"select",options:["default","compact"]}},decorators:[s=>t.jsx("div",{style:{maxWidth:418,width:"100%"},children:t.jsx(s,{})})]},U="Field medical insights captured by MSLs during HCP interactions.",u={args:{variant:"project",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{}}},f={args:{variant:"project",hoverable:!0,title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{}},parameters:{docs:{description:{story:"Set `hoverable` to raise the card with a larger shadow (`--rc-shadow-md`) on hover and keyboard focus. Works with any layout/variant."}}}},h={args:{variant:"dataSource",title:"Card title",description:U,stats:[{value:"2,130",label:"Records"},{value:"4",label:"Files"}]}},y={args:{variant:"signal",strengthLabel:"Strong",leadLabel:"Lead",title:"Card title",description:U,stats:[{value:"43",label:"Records"},{value:"18",label:"HCPs"}],category:"Infrastructure"}},C={args:{variant:"trend",title:"Card title",description:U,considerations:["Only 3 of 12 records note formal AE reporting – modifications happen but rarely surface in formal channels.","Only 3 of 12 records note formal AE reporting – modifications happen but rarely surface in formal channels."]}},v={args:{layout:"stacked",density:"default",title:"Ready to explore your data?",description:"Create a project to turn this source into a dashboard.",titleSize:"h7",descriptionSize:"md",showTitle:!0,showDescription:!0,elevated:!1}},S={args:{layout:"project",density:"compact",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{},badgeLabel:"Draft",showTitle:!0,showCreatedDate:!0,showAuthor:!0,showActions:!0,showHeader:!0,elevated:!0}},_=u,b=h,T={variant:"project",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{}},A={args:{...T,showCreatedDate:!0,showAuthor:!0,showActions:!0,showHeader:!0}},x={args:{...T,showAuthor:!1}},N={args:{...T,showCreatedDate:!1}},M={args:{...T,showActions:!1}},H={args:{...T,showHeader:!1}},L={args:{variant:"project",title:"Card title",showTitle:!0,showCreatedDate:!1,showAuthor:!1,showActions:!1,showHeader:!1}},q={args:{variant:"project",title:"Project 5",createdDate:"1 May 2026",authorName:"Monika Nowak",elevated:!1,header:t.jsx(D,{appearance:"subtle",color:"neutral",loading:!0,children:"Generating..."}),onMenuClick:()=>{}}},I={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:24,maxWidth:1344,width:"100%"},children:[t.jsx(j,{variant:"project",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{}}),t.jsx(j,{variant:"project",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{}}),t.jsx(j,{variant:"project",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{}})]})};var ue,he,pe,me,ge;u.parameters={...u.parameters,docs:{...(ue=u.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    variant: 'project',
    title: 'Card title',
    createdDate: '1 May 2026',
    authorName: 'Monika Nowak',
    onMenuClick: () => undefined
  }
}`,...(pe=(he=u.parameters)==null?void 0:he.docs)==null?void 0:pe.source},description:{story:"Project preset — Figma Preset=Project (1297:108).",...(ge=(me=u.parameters)==null?void 0:me.docs)==null?void 0:ge.description}}};var we,fe,ye,Ce,ve;f.parameters={...f.parameters,docs:{...(we=f.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    variant: 'project',
    hoverable: true,
    title: 'Card title',
    createdDate: '1 May 2026',
    authorName: 'Monika Nowak',
    onMenuClick: () => undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Set \`hoverable\` to raise the card with a larger shadow (\`--rc-shadow-md\`) on hover and keyboard focus. Works with any layout/variant.'
      }
    }
  }
}`,...(ye=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:ye.source},description:{story:"Interactive card — larger shadow on hover/focus. Hover the card to see the lift.",...(ve=(Ce=f.parameters)==null?void 0:Ce.docs)==null?void 0:ve.description}}};var Se,_e,be,je,De;h.parameters={...h.parameters,docs:{...(Se=h.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(be=(_e=h.parameters)==null?void 0:_e.docs)==null?void 0:be.source},description:{story:"Data source preset — Figma Preset=DataSource (1297:126).",...(De=(je=h.parameters)==null?void 0:je.docs)==null?void 0:De.description}}};var Te,ze,ke,Be,Ae;y.parameters={...y.parameters,docs:{...(Te=y.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(ke=(ze=y.parameters)==null?void 0:ze.docs)==null?void 0:ke.source},description:{story:"Signal preset — Figma Preset=Signal (1297:139).",...(Ae=(Be=y.parameters)==null?void 0:Be.docs)==null?void 0:Ae.description}}};var xe,Ne,Me,He,Le;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    variant: 'trend',
    title: 'Card title',
    description: defaultDescription,
    considerations: ['Only 3 of 12 records note formal AE reporting – modifications happen but rarely surface in formal channels.', 'Only 3 of 12 records note formal AE reporting – modifications happen but rarely surface in formal channels.']
  }
}`,...(Me=(Ne=C.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source},description:{story:"Trend preset — Figma Preset=Trend (1297:217).",...(Le=(He=C.parameters)==null?void 0:He.docs)==null?void 0:Le.description}}};var qe,Ie,Pe,Re,We;v.parameters={...v.parameters,docs:{...(qe=v.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Pe=(Ie=v.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source},description:{story:"Empty-state CTA — composed stacked card (not a Figma preset variant).",...(We=(Re=v.parameters)==null?void 0:Re.docs)==null?void 0:We.description}}};var Fe,Ve,Ee,Oe,Ge;S.parameters={...S.parameters,docs:{...(Fe=S.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ee=(Ve=S.parameters)==null?void 0:Ve.docs)==null?void 0:Ee.source},description:{story:"Playground with toggles for every optional region.",...(Ge=(Oe=S.parameters)==null?void 0:Oe.docs)==null?void 0:Ge.description}}};var Ue,$e,Ye,Je,Ke;_.parameters={..._.parameters,docs:{...(Ue=_.parameters)==null?void 0:Ue.docs,source:{originalSource:"ProjectCard",...(Ye=($e=_.parameters)==null?void 0:$e.docs)==null?void 0:Ye.source},description:{story:"@deprecated Alias for `ProjectCard`.",...(Ke=(Je=_.parameters)==null?void 0:Je.docs)==null?void 0:Ke.description}}};var Qe,Xe,Ze,et,tt;b.parameters={...b.parameters,docs:{...(Qe=b.parameters)==null?void 0:Qe.docs,source:{originalSource:"DataSourceCard",...(Ze=(Xe=b.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source},description:{story:"@deprecated Alias for `DataSourceCard`.",...(tt=(et=b.parameters)==null?void 0:et.docs)==null?void 0:tt.description}}};var at,st,ot;A.parameters={...A.parameters,docs:{...(at=A.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    ...projectCardArgs,
    showCreatedDate: true,
    showAuthor: true,
    showActions: true,
    showHeader: true
  }
}`,...(ot=(st=A.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};var rt,nt,it;x.parameters={...x.parameters,docs:{...(rt=x.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  args: {
    ...projectCardArgs,
    showAuthor: false
  }
}`,...(it=(nt=x.parameters)==null?void 0:nt.docs)==null?void 0:it.source}}};var lt,dt,ct;N.parameters={...N.parameters,docs:{...(lt=N.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    ...projectCardArgs,
    showCreatedDate: false
  }
}`,...(ct=(dt=N.parameters)==null?void 0:dt.docs)==null?void 0:ct.source}}};var ut,ht,pt;M.parameters={...M.parameters,docs:{...(ut=M.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    ...projectCardArgs,
    showActions: false
  }
}`,...(pt=(ht=M.parameters)==null?void 0:ht.docs)==null?void 0:pt.source}}};var mt,gt,wt;H.parameters={...H.parameters,docs:{...(mt=H.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  args: {
    ...projectCardArgs,
    showHeader: false
  }
}`,...(wt=(gt=H.parameters)==null?void 0:gt.docs)==null?void 0:wt.source}}};var ft,yt,Ct;L.parameters={...L.parameters,docs:{...(ft=L.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    variant: 'project',
    title: 'Card title',
    showTitle: true,
    showCreatedDate: false,
    showAuthor: false,
    showActions: false,
    showHeader: false
  }
}`,...(Ct=(yt=L.parameters)==null?void 0:yt.docs)==null?void 0:Ct.source}}};var vt,St,_t;q.parameters={...q.parameters,docs:{...(vt=q.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(_t=(St=q.parameters)==null?void 0:St.docs)==null?void 0:_t.source}}};var bt,jt,Dt;I.parameters={...I.parameters,docs:{...(bt=I.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(Dt=(jt=I.parameters)==null?void 0:jt.docs)==null?void 0:Dt.source}}};const ps=["ProjectCard","Hoverable","DataSourceCard","SignalCard","TrendCard","ExploreDataCta","Playground","Default","DataSource","AllVisible","WithoutAuthor","WithoutCreated","WithoutMenu","WithoutBadge","Minimal","Generating","Grid"];export{A as AllVisible,b as DataSource,h as DataSourceCard,_ as Default,v as ExploreDataCta,q as Generating,I as Grid,f as Hoverable,L as Minimal,S as Playground,u as ProjectCard,y as SignalCard,C as TrendCard,x as WithoutAuthor,H as WithoutBadge,N as WithoutCreated,M as WithoutMenu,ps as __namedExportsOrder,hs as default};

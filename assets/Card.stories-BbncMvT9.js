import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as D}from"./Badge-D3qVxMwk.js";import{I as P}from"./Icon-quxERthd.js";import{c as i}from"./cn-2dOUpm6k.js";import{A as Kt}from"./Avatar-B56rupaZ.js";import{D as Qt}from"./Divider-BhWe8uDS.js";import{I as Xt}from"./IconButton-BKzAixFV.js";import"./iframe-SpVpO4_-.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-nCges0Do.js";import"./CaretRight.es-BtMKu1HW.js";import"./CaretDown.es-9dx_bpTB.js";import"./Minus.es-Bx0-RUTF.js";import"./Warning.es-BndqD_7T.js";import"./Flag.es-CW4_NuCL.js";import"./Trash.es-BBxtDL8P.js";const Zt="_card_b1ttj_1",ea="_elevated_b1ttj_12",ta="_hoverable_b1ttj_17",aa="_layoutProject_b1ttj_23",sa="_layoutStacked_b1ttj_29",oa="_layoutStackedWithFooter_b1ttj_35",ra="_densityCompact_b1ttj_40",na="_densityDefault_b1ttj_44",ia="_densityRoomy_b1ttj_49",la="_projectWithHeaderStart_b1ttj_54",da="_stackedContent_b1ttj_58",ca="_stackedHeader_b1ttj_72",ua="_signalBadges_b1ttj_79",ha="_description_b1ttj_87",pa="_descriptionBase_b1ttj_94",ma="_descriptionMd_b1ttj_101",ga="_descriptionLg_b1ttj_108",wa="_stats_b1ttj_115",fa="_stat_b1ttj_115",ya="_statValue_b1ttj_128",ba="_statLabel_b1ttj_133",ja="_statsCompact_b1ttj_138",Ca="_statCompact_b1ttj_146",va="_considerations_b1ttj_152",Sa="_considerationsLabel_b1ttj_159",_a="_considerationsList_b1ttj_164",Da="_considerationsItem_b1ttj_174",Ta="_considerationsIcon_b1ttj_181",ka="_considerationsText_b1ttj_185",Ba="_header_b1ttj_191",Aa="_headerBetween_b1ttj_200",xa="_headerStartOnly_b1ttj_204",Na="_body_b1ttj_208",Ma="_titleH6_b1ttj_218",Ha="_titleH5_b1ttj_225",La="_titleH7_b1ttj_232",qa="_meta_b1ttj_239",za="_badgeSlot_b1ttj_247",Ia="_metaItem_b1ttj_255",Pa="_author_b1ttj_263",Ra="_authorName_b1ttj_269",Wa="_footer_b1ttj_274",a={card:Zt,elevated:ea,hoverable:ta,layoutProject:aa,layoutStacked:sa,layoutStackedWithFooter:oa,densityCompact:ra,densityDefault:na,densityRoomy:ia,projectWithHeaderStart:la,stackedContent:da,stackedHeader:ca,signalBadges:ua,description:ha,descriptionBase:pa,descriptionMd:ma,descriptionLg:ga,stats:wa,stat:fa,statValue:ya,statLabel:ba,statsCompact:ja,statCompact:Ca,considerations:va,considerationsLabel:Sa,considerationsList:_a,considerationsItem:Da,considerationsIcon:Ta,considerationsText:ka,header:Ba,headerBetween:Aa,headerStartOnly:xa,body:Na,titleH6:Ma,titleH5:Ha,titleH7:La,meta:qa,badgeSlot:za,metaItem:Ia,author:Pa,authorName:Ra,footer:Wa},ce={project:{layout:"project",density:"compact",titleSize:"h6",descriptionSize:"sm",statsSpacing:"default"},dataSource:{layout:"stacked",density:"default",titleSize:"h6",descriptionSize:"sm",statsSpacing:"default"},signal:{layout:"stacked",density:"roomy",titleSize:"h6",descriptionSize:"sm",statsSpacing:"compact"},trend:{layout:"stacked",density:"roomy",titleSize:"h5",descriptionSize:"base",statsSpacing:"default"}},Fa={project:{showTitle:!0,showDescription:!1,showHeader:!0,showActions:!0,showCreatedDate:!0,showAuthor:!0,showDivider:!1,showStats:!1,showStrengthBadge:!1,showLeadBadge:!1,showCategory:!1,showConsiderations:!1},dataSource:{showTitle:!0,showDescription:!0,showHeader:!1,showActions:!1,showCreatedDate:!1,showAuthor:!1,showDivider:!0,showStats:!0,showStrengthBadge:!1,showLeadBadge:!1,showCategory:!1,showConsiderations:!1},signal:{showTitle:!0,showDescription:!0,showHeader:!1,showActions:!1,showCreatedDate:!1,showAuthor:!1,showDivider:!1,showStats:!0,showStrengthBadge:!0,showLeadBadge:!0,showCategory:!0,showConsiderations:!1},trend:{showTitle:!0,showDescription:!0,showHeader:!1,showActions:!1,showCreatedDate:!1,showAuthor:!1,showDivider:!0,showStats:!1,showStrengthBadge:!1,showLeadBadge:!1,showCategory:!1,showConsiderations:!0}};function Va(s,e){const r=s?Fa[s]:null,d={showTitle:!!(e.title??e.children),showDescription:!!e.description,showHeader:!!e.header,showActions:!!(e.actions??e.onMenuClick),showCreatedDate:!!e.createdDate,showAuthor:!!e.authorName,showDivider:!!(e.title||e.description||e.children)&&!!(e.stats&&e.stats.length>0||e.considerations&&e.considerations.length>0),showStats:!!(e.stats&&e.stats.length>0),showStrengthBadge:!!e.strengthLabel,showLeadBadge:!!e.leadLabel,showCategory:!!e.category,showConsiderations:!!(e.considerations&&e.considerations.length>0)},n=r??d;return{showTitle:e.showTitle??n.showTitle,showDescription:e.showDescription??n.showDescription,showHeader:e.showHeader??n.showHeader,showActions:e.showActions??n.showActions,showCreatedDate:e.showCreatedDate??n.showCreatedDate,showAuthor:e.showAuthor??n.showAuthor,showDivider:e.showDivider??n.showDivider,showStats:e.showStats??n.showStats,showStrengthBadge:e.showStrengthBadge??n.showStrengthBadge,showLeadBadge:e.showLeadBadge??n.showLeadBadge,showCategory:e.showCategory??n.showCategory,showConsiderations:e.showConsiderations??n.showConsiderations}}function Ea(s,e){const r=s?ce[s]:ce.project;return{layout:e.layout??r.layout,density:e.density??r.density,titleSize:e.titleSize??r.titleSize,descriptionSize:e.descriptionSize??r.descriptionSize,statsSpacing:e.statsSpacing??e.statsAppearance??r.statsSpacing}}function Oa({onMenuClick:s,menuLabel:e="Open menu"}){return s?t.jsx(Xt,{variant:"ghost",size:"sm",label:e,onClick:s,children:t.jsx(P,{name:"dots-three-vertical",size:16,tone:"primary"})}):null}function Ga({createdLabel:s="Created:",createdDate:e,authorName:r,authorInitials:d,showCreatedDate:n=!0,showAuthor:l=!0}){const k=n&&!!e,p=l&&!!r;return!k&&!p?null:t.jsxs("div",{className:a.meta,children:[k?t.jsxs("div",{className:a.metaItem,children:[t.jsx("span",{className:"rc-label-md",children:s}),t.jsx("span",{className:"rc-body-sm",children:e})]}):null,p?t.jsxs("div",{className:a.author,children:[t.jsx(Kt,{size:"sm",name:r,initials:d}),t.jsx("span",{className:i("rc-label-md",a.authorName),children:r})]}):null]})}function Ua({stats:s,spacing:e}){if(s.length===0)return null;const r=e==="compact",d=r?a.statsCompact:a.stats,n=r?a.statCompact:a.stat;return t.jsx("div",{className:d,children:s.map(l=>t.jsxs("div",{className:n,children:[t.jsx("span",{className:i("rc-heading-h7",a.statValue),children:l.value}),t.jsx("span",{className:i("rc-label-md",a.statLabel),children:l.label})]},`${l.label}-${l.value}`))})}function $a({label:s="Badge"}){return t.jsx("div",{className:a.badgeSlot,children:t.jsx(D,{appearance:"subtle",color:"neutral",children:s})})}function Ya({strengthLabel:s,leadLabel:e,showStrengthBadge:r,showLeadBadge:d}){const n=r&&!!s,l=d&&!!e;return!n&&!l?null:t.jsxs("div",{className:a.signalBadges,children:[n?t.jsx(D,{appearance:"emphasis",color:"purple",iconLeft:t.jsx(P,{name:"cell-signal-full",size:12,tone:"on-color","aria-hidden":!0}),children:s}):null,l?t.jsx(D,{appearance:"subtle",color:"lightPurple",iconLeft:t.jsx(P,{name:"flag",size:12,tone:"ai","aria-hidden":!0}),children:e}):null]})}function Ja({label:s="Strategic considerations",items:e=[]}){return e.length===0?null:t.jsxs("div",{className:a.considerations,children:[t.jsx("p",{className:i("rc-label-lg",a.considerationsLabel),children:s}),t.jsx("ul",{className:a.considerationsList,children:e.map(r=>t.jsxs("li",{className:a.considerationsItem,children:[t.jsx(P,{name:"arrow-elbow-down-right",size:16,tone:"secondary",className:a.considerationsIcon,"aria-hidden":!0}),t.jsx("span",{className:i("rc-body-sm",a.considerationsText),children:r})]},r))})]})}function _({variant:s="project",layout:e,density:r,titleSize:d,descriptionSize:n,statsAppearance:l,statsSpacing:k,className:p,elevated:$=!0,hoverable:Y=!1,header:m,badgeLabel:Tt,footer:J,children:B,title:g,description:A,stats:K=[],strengthLabel:Q,leadLabel:X,category:R,considerationsLabel:kt,considerations:Z=[],createdLabel:Bt,createdDate:ee,authorName:te,authorInitials:At,actions:W,onMenuClick:F,menuLabel:xt,showTitle:Nt,showDescription:Mt,showHeader:Ht,showActions:Lt,showCreatedDate:qt,showAuthor:zt,showDivider:It,showStats:Pt,showStrengthBadge:Rt,showLeadBadge:Wt,showCategory:Ft,showConsiderations:Vt,...ae}){const c=Ea(s,{layout:e,density:r,titleSize:d,descriptionSize:n,statsSpacing:k??l}),o=Va(s,{title:g,description:A,header:m,actions:W,onMenuClick:F,createdDate:ee,authorName:te,stats:K,strengthLabel:Q,leadLabel:X,category:R,considerations:Z,children:B,showTitle:Nt,showDescription:Mt,showHeader:Ht,showActions:Lt,showCreatedDate:qt,showAuthor:zt,showDivider:It,showStats:Pt,showStrengthBadge:Rt,showLeadBadge:Wt,showCategory:Ft,showConsiderations:Vt}),se=c.density==="compact"?a.densityCompact:c.density==="roomy"?a.densityRoomy:a.densityDefault,oe=c.titleSize==="h5"?i("rc-heading-h5",a.titleH5):c.titleSize==="h7"?i("rc-heading-h7",a.titleH7):i("rc-heading-h6",a.titleH6),Et=c.descriptionSize==="lg"?i("rc-body-lg",a.descriptionLg):c.descriptionSize==="md"?i("rc-body-rg",a.descriptionMd):c.descriptionSize==="base"?i("rc-body-md",a.descriptionBase):i("rc-body-sm",a.description);if(c.layout==="project"){const $t=o.showActions?W??t.jsx(Oa,{onMenuClick:F,menuLabel:xt}):null,le=o.showHeader&&m?m:o.showHeader?t.jsx($a,{label:Tt}):null,w=!!le,G=o.showActions&&!!(W??F),Yt=w||G,Jt=B??(o.showTitle&&g?t.jsx("h3",{className:oe,children:g}):null),de=J??(o.showCreatedDate||o.showAuthor?t.jsx(Ga,{createdLabel:Bt,createdDate:ee,authorName:te,authorInitials:At,showCreatedDate:o.showCreatedDate,showAuthor:o.showAuthor}):null);return t.jsxs("article",{className:i(a.card,a.layoutProject,se,$&&a.elevated,Y&&a.hoverable,w&&a.projectWithHeaderStart,p),...ae,children:[Yt?t.jsxs("div",{className:i(a.header,w&&G&&a.headerBetween,w&&!G&&a.headerStartOnly),children:[w?le:null,$t]}):null,t.jsxs("div",{className:a.body,children:[Jt,de?t.jsx("div",{className:a.footer,children:de}):null]})]})}const re=o.showHeader&&m?m:null,Ot=!re&&(o.showStrengthBadge||o.showLeadBadge)?t.jsx(Ya,{strengthLabel:Q,leadLabel:X,showStrengthBadge:o.showStrengthBadge,showLeadBadge:o.showLeadBadge}):null,ne=re??Ot,Gt=!!ne,ie=o.showTitle||o.showDescription&&!!A||!!B,V=o.showStats?K:[],E=o.showConsiderations?Z:[],Ut=o.showDivider&&ie&&(V.length>0||E.length>0),O=J??(o.showCategory&&R?t.jsx(D,{appearance:"subtle",color:"neutral",children:R}):null);return t.jsxs("article",{className:i(a.card,a.layoutStacked,se,$&&a.elevated,Y&&a.hoverable,!!O&&a.layoutStackedWithFooter,p),...ae,children:[t.jsxs("div",{className:a.stackedContent,children:[Gt?ne:null,ie?t.jsxs("div",{className:a.stackedHeader,children:[B??(o.showTitle&&g?t.jsx("h3",{className:oe,children:g}):null),o.showDescription&&A?t.jsx("p",{className:Et,children:A}):null]}):null,Ut?t.jsx(Qt,{}):null,V.length>0?t.jsx(Ua,{stats:V,spacing:c.statsSpacing}):null,E.length>0?t.jsx(Ja,{label:kt,items:E}):null]}),O?t.jsx("div",{className:a.footer,children:O}):null]})}_.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:"'project' | 'dataSource' | 'signal' | 'trend'",elements:[{name:"literal",value:"'project'"},{name:"literal",value:"'dataSource'"},{name:"literal",value:"'signal'"},{name:"literal",value:"'trend'"}]},description:"@deprecated Maps to layout, density, and visibility defaults. Explicit props override.",defaultValue:{value:"'project'",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'project' | 'stacked'",elements:[{name:"literal",value:"'project'"},{name:"literal",value:"'stacked'"}]},description:""},density:{required:!1,tsType:{name:"union",raw:"'compact' | 'default' | 'roomy'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'default'"},{name:"literal",value:"'roomy'"}]},description:""},titleSize:{required:!1,tsType:{name:"union",raw:"'h5' | 'h6' | 'h7'",elements:[{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'h7'"}]},description:""},descriptionSize:{required:!1,tsType:{name:"union",raw:"'sm' | 'base' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},statsSpacing:{required:!1,tsType:{name:"union",raw:"'default' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"}]},description:""},statsAppearance:{required:!1,tsType:{name:"union",raw:"'default' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"}]},description:"@deprecated Use `statsSpacing` instead."},className:{required:!1,tsType:{name:"string"},description:""},elevated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Enable an interactive hover/focus state that raises the card with a larger shadow.",defaultValue:{value:"false",computed:!1}},header:{required:!1,tsType:{name:"ReactNode"},description:"Top slot — project: top-left badge row; stacked: replaces default badge row when set."},badgeLabel:{required:!1,tsType:{name:"string"},description:"Default header badge label for project layout when `header` is not provided."},footer:{required:!1,tsType:{name:"ReactNode"},description:"Bottom slot — replaces auto-generated footer content when provided."},children:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},stats:{required:!1,tsType:{name:"Array",elements:[{name:"CardStat"}],raw:"CardStat[]"},description:"",defaultValue:{value:"[]",computed:!1}},strengthLabel:{required:!1,tsType:{name:"string"},description:""},leadLabel:{required:!1,tsType:{name:"string"},description:""},category:{required:!1,tsType:{name:"string"},description:""},considerationsLabel:{required:!1,tsType:{name:"string"},description:""},considerations:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},createdLabel:{required:!1,tsType:{name:"string"},description:""},createdDate:{required:!1,tsType:{name:"string"},description:""},authorName:{required:!1,tsType:{name:"string"},description:""},authorInitials:{required:!1,tsType:{name:"string"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""},onMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},menuLabel:{required:!1,tsType:{name:"string"},description:""},showTitle:{required:!1,tsType:{name:"boolean"},description:""},showDescription:{required:!1,tsType:{name:"boolean"},description:""},showHeader:{required:!1,tsType:{name:"boolean"},description:""},showActions:{required:!1,tsType:{name:"boolean"},description:""},showCreatedDate:{required:!1,tsType:{name:"boolean"},description:""},showAuthor:{required:!1,tsType:{name:"boolean"},description:""},showDivider:{required:!1,tsType:{name:"boolean"},description:""},showStats:{required:!1,tsType:{name:"boolean"},description:""},showStrengthBadge:{required:!1,tsType:{name:"boolean"},description:""},showLeadBadge:{required:!1,tsType:{name:"boolean"},description:""},showCategory:{required:!1,tsType:{name:"boolean"},description:""},showConsiderations:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};const hs={title:"Components/Card",component:_,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Flexible surface container aligned with Figma Card (node 1297:237). Toggle optional regions with `show*` props — title, description, header badge, actions, metadata, divider, stats, signal badges, category, and considerations. Use `variant` presets (`project`, `dataSource`, `signal`, `trend`) or compose with `layout` and `density`."}}},argTypes:{showTitle:{control:"boolean"},showDescription:{control:"boolean"},showHeader:{control:"boolean"},showActions:{control:"boolean"},showCreatedDate:{control:"boolean"},showAuthor:{control:"boolean"},showDivider:{control:"boolean"},showStats:{control:"boolean"},showStrengthBadge:{control:"boolean"},showLeadBadge:{control:"boolean"},showCategory:{control:"boolean"},showConsiderations:{control:"boolean"},elevated:{control:"boolean"},hoverable:{control:"boolean"},layout:{control:"select",options:["project","stacked"]},density:{control:"select",options:["compact","default","roomy"]},titleSize:{control:"select",options:["h5","h6","h7"]},descriptionSize:{control:"select",options:["sm","base","md","lg"]},statsSpacing:{control:"select",options:["default","compact"]}},decorators:[s=>t.jsx("div",{style:{maxWidth:418,width:"100%"},children:t.jsx(s,{})})]},U="Field medical insights captured by MSLs during HCP interactions.",u={args:{variant:"project",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{}}},f={args:{variant:"project",hoverable:!0,title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{}},parameters:{docs:{description:{story:"Set `hoverable` to raise the card with a larger shadow (`--rc-shadow-md`) on hover and keyboard focus. Works with any layout/variant."}}}},h={args:{variant:"dataSource",title:"Card title",description:U,stats:[{value:"2,130",label:"Records"},{value:"4",label:"Files"}]}},y={args:{variant:"signal",strengthLabel:"Strong",leadLabel:"Lead",title:"Card title",description:U,stats:[{value:"43",label:"Records"},{value:"18",label:"HCPs"}],category:"Infrastructure"}},b={args:{variant:"trend",title:"Card title",description:U,considerations:["Only 3 of 12 records note formal AE reporting – modifications happen but rarely surface in formal channels.","Only 3 of 12 records note formal AE reporting – modifications happen but rarely surface in formal channels."]}},j={args:{layout:"stacked",density:"default",title:"Ready to explore your data?",description:"Create a project to turn this source into a dashboard.",titleSize:"h7",descriptionSize:"md",showTitle:!0,showDescription:!0,elevated:!1}},C={args:{layout:"project",density:"compact",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{},badgeLabel:"Draft",showTitle:!0,showCreatedDate:!0,showAuthor:!0,showActions:!0,showHeader:!0,elevated:!0}},v=u,S=h,T={variant:"project",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{}},x={args:{...T,showCreatedDate:!0,showAuthor:!0,showActions:!0,showHeader:!0}},N={args:{...T,showAuthor:!1}},M={args:{...T,showCreatedDate:!1}},H={args:{...T,showActions:!1}},L={args:{...T,showHeader:!1}},q={args:{variant:"project",title:"Card title",showTitle:!0,showCreatedDate:!1,showAuthor:!1,showActions:!1,showHeader:!1}},z={args:{variant:"project",title:"Project 5",createdDate:"1 May 2026",authorName:"Monika Nowak",elevated:!1,header:t.jsx(D,{appearance:"subtle",color:"neutral",loading:!0,children:"Generating..."}),onMenuClick:()=>{}}},I={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:24,maxWidth:1344,width:"100%"},children:[t.jsx(_,{variant:"project",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{}}),t.jsx(_,{variant:"project",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{}}),t.jsx(_,{variant:"project",title:"Card title",createdDate:"1 May 2026",authorName:"Monika Nowak",onMenuClick:()=>{}})]})};var ue,he,pe,me,ge;u.parameters={...u.parameters,docs:{...(ue=u.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    variant: 'project',
    title: 'Card title',
    createdDate: '1 May 2026',
    authorName: 'Monika Nowak',
    onMenuClick: () => undefined
  }
}`,...(pe=(he=u.parameters)==null?void 0:he.docs)==null?void 0:pe.source},description:{story:"Project preset — Figma Preset=Project (1297:108).",...(ge=(me=u.parameters)==null?void 0:me.docs)==null?void 0:ge.description}}};var we,fe,ye,be,je;f.parameters={...f.parameters,docs:{...(we=f.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ye=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:ye.source},description:{story:"Interactive card — larger shadow on hover/focus. Hover the card to see the lift.",...(je=(be=f.parameters)==null?void 0:be.docs)==null?void 0:je.description}}};var Ce,ve,Se,_e,De;h.parameters={...h.parameters,docs:{...(Ce=h.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Se=(ve=h.parameters)==null?void 0:ve.docs)==null?void 0:Se.source},description:{story:"Data source preset — Figma Preset=DataSource (1297:126).",...(De=(_e=h.parameters)==null?void 0:_e.docs)==null?void 0:De.description}}};var Te,ke,Be,Ae,xe;y.parameters={...y.parameters,docs:{...(Te=y.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Be=(ke=y.parameters)==null?void 0:ke.docs)==null?void 0:Be.source},description:{story:"Signal preset — Figma Preset=Signal (1297:139).",...(xe=(Ae=y.parameters)==null?void 0:Ae.docs)==null?void 0:xe.description}}};var Ne,Me,He,Le,qe;b.parameters={...b.parameters,docs:{...(Ne=b.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    variant: 'trend',
    title: 'Card title',
    description: defaultDescription,
    considerations: ['Only 3 of 12 records note formal AE reporting – modifications happen but rarely surface in formal channels.', 'Only 3 of 12 records note formal AE reporting – modifications happen but rarely surface in formal channels.']
  }
}`,...(He=(Me=b.parameters)==null?void 0:Me.docs)==null?void 0:He.source},description:{story:"Trend preset — Figma Preset=Trend (1297:217).",...(qe=(Le=b.parameters)==null?void 0:Le.docs)==null?void 0:qe.description}}};var ze,Ie,Pe,Re,We;j.parameters={...j.parameters,docs:{...(ze=j.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Pe=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source},description:{story:"Empty-state CTA — composed stacked card (not a Figma preset variant).",...(We=(Re=j.parameters)==null?void 0:Re.docs)==null?void 0:We.description}}};var Fe,Ve,Ee,Oe,Ge;C.parameters={...C.parameters,docs:{...(Fe=C.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ee=(Ve=C.parameters)==null?void 0:Ve.docs)==null?void 0:Ee.source},description:{story:"Playground with toggles for every optional region.",...(Ge=(Oe=C.parameters)==null?void 0:Oe.docs)==null?void 0:Ge.description}}};var Ue,$e,Ye,Je,Ke;v.parameters={...v.parameters,docs:{...(Ue=v.parameters)==null?void 0:Ue.docs,source:{originalSource:"ProjectCard",...(Ye=($e=v.parameters)==null?void 0:$e.docs)==null?void 0:Ye.source},description:{story:"@deprecated Alias for `ProjectCard`.",...(Ke=(Je=v.parameters)==null?void 0:Je.docs)==null?void 0:Ke.description}}};var Qe,Xe,Ze,et,tt;S.parameters={...S.parameters,docs:{...(Qe=S.parameters)==null?void 0:Qe.docs,source:{originalSource:"DataSourceCard",...(Ze=(Xe=S.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source},description:{story:"@deprecated Alias for `DataSourceCard`.",...(tt=(et=S.parameters)==null?void 0:et.docs)==null?void 0:tt.description}}};var at,st,ot;x.parameters={...x.parameters,docs:{...(at=x.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    ...projectCardArgs,
    showCreatedDate: true,
    showAuthor: true,
    showActions: true,
    showHeader: true
  }
}`,...(ot=(st=x.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};var rt,nt,it;N.parameters={...N.parameters,docs:{...(rt=N.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  args: {
    ...projectCardArgs,
    showAuthor: false
  }
}`,...(it=(nt=N.parameters)==null?void 0:nt.docs)==null?void 0:it.source}}};var lt,dt,ct;M.parameters={...M.parameters,docs:{...(lt=M.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    ...projectCardArgs,
    showCreatedDate: false
  }
}`,...(ct=(dt=M.parameters)==null?void 0:dt.docs)==null?void 0:ct.source}}};var ut,ht,pt;H.parameters={...H.parameters,docs:{...(ut=H.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    ...projectCardArgs,
    showActions: false
  }
}`,...(pt=(ht=H.parameters)==null?void 0:ht.docs)==null?void 0:pt.source}}};var mt,gt,wt;L.parameters={...L.parameters,docs:{...(mt=L.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  args: {
    ...projectCardArgs,
    showHeader: false
  }
}`,...(wt=(gt=L.parameters)==null?void 0:gt.docs)==null?void 0:wt.source}}};var ft,yt,bt;q.parameters={...q.parameters,docs:{...(ft=q.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    variant: 'project',
    title: 'Card title',
    showTitle: true,
    showCreatedDate: false,
    showAuthor: false,
    showActions: false,
    showHeader: false
  }
}`,...(bt=(yt=q.parameters)==null?void 0:yt.docs)==null?void 0:bt.source}}};var jt,Ct,vt;z.parameters={...z.parameters,docs:{...(jt=z.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(vt=(Ct=z.parameters)==null?void 0:Ct.docs)==null?void 0:vt.source}}};var St,_t,Dt;I.parameters={...I.parameters,docs:{...(St=I.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Dt=(_t=I.parameters)==null?void 0:_t.docs)==null?void 0:Dt.source}}};const ps=["ProjectCard","Hoverable","DataSourceCard","SignalCard","TrendCard","ExploreDataCta","Playground","Default","DataSource","AllVisible","WithoutAuthor","WithoutCreated","WithoutMenu","WithoutBadge","Minimal","Generating","Grid"];export{x as AllVisible,S as DataSource,h as DataSourceCard,v as Default,j as ExploreDataCta,z as Generating,I as Grid,f as Hoverable,q as Minimal,C as Playground,u as ProjectCard,y as SignalCard,b as TrendCard,N as WithoutAuthor,L as WithoutBadge,M as WithoutCreated,H as WithoutMenu,ps as __namedExportsOrder,hs as default};

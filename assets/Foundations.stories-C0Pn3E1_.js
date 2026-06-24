import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{s as a}from"./Foundations.module-CDmYB71H.js";function i({title:s,description:t,children:r}){return e.jsxs("section",{className:a.section,children:[e.jsx("h2",{className:a.title,children:s}),t?e.jsx("p",{className:a.description,children:t}):null,r]})}function $({name:s,cssVar:t,showBorder:r}){return e.jsxs("div",{className:a.swatch,children:[e.jsx("div",{className:a.swatchColor,style:{background:`var(${t})`,border:r?"1px solid var(--rc-border-subtle-01)":void 0}}),e.jsx("div",{className:a.swatchName,children:s})]})}function P({family:s,steps:t}){return e.jsxs("div",{className:a.ramp,children:[e.jsx("div",{className:a.rampLabel,children:s}),e.jsx("div",{className:a.rampRow,children:t.map(r=>{const u=`--rc-${r.replace(/\//g,"-")}`,W=r.includes("/50")||r.includes("/100")||r.includes("25");return e.jsxs("div",{className:a.rampStep,children:[e.jsx("div",{className:a.rampColor,style:{background:`var(${u})`,border:W?"1px solid var(--rc-border-subtle-01)":void 0}}),e.jsx("div",{className:a.rampStepName,children:r.split("/")[1]})]},r)})})]})}i.__docgenInfo={description:"",methods:[],displayName:"FoundationSection",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};$.__docgenInfo={description:"",methods:[],displayName:"Swatch",props:{name:{required:!0,tsType:{name:"string"},description:""},cssVar:{required:!0,tsType:{name:"string"},description:""},showBorder:{required:!1,tsType:{name:"boolean"},description:""}}};P.__docgenInfo={description:"",methods:[],displayName:"PrimitiveRamp",props:{family:{required:!0,tsType:{name:"string"},description:""},steps:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const q={"purple/50":"#f7f6ff","purple/100":"#ece9ff","purple/200":"#d7d0ff","purple/300":"#beafff","purple/400":"#a285ff","purple/500":"#8752fa","purple/600":"#663dc0","purple/700":"#4b2b8f","purple/800":"#311a61","purple/900":"#1c0d3c","purple/950":"#13092a","light-purple/50":"#fbf7ff","light-purple/100":"#f6eaff","light-purple/200":"#ebd2ff","light-purple/300":"#deb3ff","light-purple/400":"#cd83ff","light-purple/500":"#ad6ed7","light-purple/600":"#8352a4","light-purple/700":"#5c3874","light-purple/800":"#3c234d","light-purple/900":"#23122e","light-purple/950":"#190b22","orange/50":"#fff6f4","orange/100":"#ffebe5","orange/200":"#ffd3c6","orange/300":"#ffb49d","orange/400":"#ff8b68","orange/500":"#ff5001","orange/600":"#c43b01","orange/700":"#922a00","orange/800":"#631a00","orange/900":"#3d0c00","orange/950":"#320d01","blue/50":"#f1f4ff","blue/100":"#dfe5ff","blue/200":"#bcc7ff","blue/300":"#92a0ff","blue/400":"#656cff","blue/500":"#4500f9","blue/600":"#3300bf","blue/700":"#23008e","blue/800":"#150061","blue/900":"#09003b","blue/950":"#090132","neutral/25":"#fafafa","neutral/50":"#eaeaeb","neutral/100":"#bfbec0","neutral/200":"#a09ea2","neutral/300":"#757277","neutral/400":"#5a575d","neutral/500":"#312d34","neutral/600":"#2d292f","neutral/700":"#232025","neutral/800":"#1b191d","neutral/900":"#151316","green/50":"#f0fdf4","green/100":"#dcfce7","green/200":"#bbf7d0","green/300":"#86efac","green/400":"#4ade80","green/500":"#22c55e","green/600":"#16a34a","green/700":"#15803d","green/800":"#166534","green/900":"#14532d","green/950":"#0a2e18","amber/50":"#fffbeb","amber/100":"#fff6d1","amber/200":"#fee68a","amber/300":"#fcd34d","amber/400":"#fbbf24","amber/500":"#f59e0b","amber/600":"#d97706","white/1000":"#ffffff","black/1000":"#000000"},E={0:0,1:4,2:8,3:12,4:16,5:20,6:24,8:32,10:40,12:48,16:64},I={none:0,sm:4,md:8,lg:12,full:9999},m={primitives:q,spacing:E,radius:I};Object.fromEntries(Object.entries(m.spacing).map(([s,t])=>[`--rc-spacing-${s}`,`${t}px`]));Object.fromEntries(Object.entries(m.radius).map(([s,t])=>[`--rc-radius-${s}`,`${t}px`]));const O={Background:["background/canvas","background/blank","background/hover","background/active","background/selected","background/selected-hover","background/inverse","background/brand"],Layer:["layer/01","layer/02","layer/03","layer/hover-01","layer/active-01","layer/selected-01"],Field:["field/01","field/02","field/03","field/hover-01","field/hover-02","field/hover-03"],Border:["border/subtle-00","border/subtle-01","border/subtle-02","border/subtle-03","border/subtle-selected-01","border/subtle-selected-02","border/subtle-selected-03","border/strong-01","border/interactive","border/inverse","border/disabled"],Text:["text/primary","text/secondary","text/tertiary","text/placeholder","text/helper","text/error","text/on-color","text/on-color-disabled","text/inverse","text/disabled"],Link:["link/primary","link/primary-hover","link/inverse","link/visited"],Icon:["icon/primary","icon/secondary","icon/on-color","icon/disabled","icon/inverse"],Support:["support/error","support/success","support/warning","support/info"],Focus:["focus/default","focus/inverse"],Button:["button/primary","button/primary-hover","button/primary-active","button/secondary","button/secondary-hover","button/tertiary","button/tertiary-hover","button/ghost-hover","button/danger","button/danger-hover","button/disabled","button/disabled-text"]},_=["purple","light-purple","orange","blue","neutral","green","amber"];function M(s){return Object.keys(m.primitives).filter(t=>t.startsWith(`${s}/`))}const K={title:"Foundations",tags:["autodocs"],parameters:{layout:"fullscreen"}};function v(s){return`--rc-${s.replace(/\//g,"-")}`}const n={name:"Colors",render:()=>e.jsx(e.Fragment,{children:e.jsxs(i,{title:"Colors",description:"Primitive palette and semantic tokens (Light). Canvas: background/canvas or background/blank. Surfaces: layer/01–03 with hover, active, and selected-01 states.",children:[e.jsx("h3",{className:a.groupTitle,children:"Primitives"}),_.map(s=>e.jsx(P,{family:s,steps:M(s)},s)),e.jsxs("div",{className:a.ramp,children:[e.jsx("div",{className:a.rampLabel,children:"white / black"}),e.jsx("div",{className:a.rampRow,children:["white/1000","black/1000"].map(s=>e.jsxs("div",{className:a.rampStep,children:[e.jsx("div",{className:a.rampColor,style:{background:`var(${v(s)})`,border:s.startsWith("white")?"1px solid var(--rc-border-subtle-01)":void 0}}),e.jsx("div",{className:a.rampStepName,children:s.split("/")[1]})]},s))})]}),e.jsx("h3",{className:a.groupTitle,children:"Semantic"}),Object.entries(O).map(([s,t])=>e.jsxs("div",{children:[e.jsx("h3",{className:a.groupTitle,children:s}),e.jsx("div",{className:a.swatchGrid,children:t.map(r=>{const u=r.includes("blank")||r.includes("layer/01")||r.includes("field/02")||r.includes("on-color")||r.includes("inverse")&&r.startsWith("text/");return e.jsx($,{name:r,cssVar:v(r),showBorder:u},r)})})]},s))]})})},l={name:"Templates",render:()=>e.jsx(i,{title:"Page templates",description:"Layouts set the canvas. Components use layer/01 for nav, cards, modals. Do not bind UI chrome to background/canvas.",children:e.jsxs("div",{className:a.templateRow,children:[e.jsxs("div",{className:a.templateWrap,children:[e.jsxs("div",{className:a.templateFrame,style:{background:"var(--rc-background-canvas)"},children:[e.jsx("div",{className:a.templateNav,style:{background:"var(--rc-layer-01)"},children:"Nav / Breadcrumbs"}),e.jsx("div",{className:a.templateContent,children:e.jsx("div",{className:a.templateCard,style:{background:"var(--rc-layer-01)"},children:"Card"})})]}),e.jsx("div",{className:a.templateCaption,children:"Productive · background/canvas"})]}),e.jsxs("div",{className:a.templateWrap,children:[e.jsxs("div",{className:a.templateFrame,style:{background:"var(--rc-background-blank)"},children:[e.jsx("div",{className:a.templateNav,style:{background:"var(--rc-layer-01)"},children:"Nav / Breadcrumbs"}),e.jsx("div",{className:a.templateContent,children:e.jsx("div",{className:a.templateCard,style:{background:"var(--rc-layer-01)"},children:"Card"})})]}),e.jsx("div",{className:a.templateCaption,children:"Blank · background/blank"})]})]})})},V=[{cls:"rc-heading-h1",name:"Heading/H1",spec:"64 / 70 · Bold"},{cls:"rc-heading-h2",name:"Heading/H2",spec:"56 / 64 · Bold"},{cls:"rc-heading-h3",name:"Heading/H3",spec:"48 / 58 · Bold"},{cls:"rc-heading-h4",name:"Heading/H4",spec:"40 / 50 · Bold"},{cls:"rc-heading-h5",name:"Heading/H5",spec:"32 / 42 · Bold"},{cls:"rc-heading-h6",name:"Heading/H6",spec:"24 / 32 · Bold"},{cls:"rc-heading-h7",name:"Heading/H7",spec:"18 / 24 · Bold"},{cls:"rc-heading-h8",name:"Heading/H8",spec:"16 / 22 · Bold"},{cls:"rc-heading-h9",name:"Heading/H9",spec:"14 / 18 · Bold"},{cls:"rc-body-lg",name:"Body/LG",spec:"20 / 32 · Regular"},{cls:"rc-body-md",name:"Body/MD",spec:"16 / 24 · Regular"},{cls:"rc-body-sm",name:"Body/SM",spec:"14 / 20 · Regular"},{cls:"rc-body-xs",name:"Body/XS",spec:"12 / 18 · Regular"},{cls:"rc-label-lg",name:"Label/LG",spec:"16 / 24 · Bold"},{cls:"rc-label-md",name:"Label/MD",spec:"14 / 18 · Bold"},{cls:"rc-label-sm",name:"Label/SM",spec:"12 / 16 · Bold"},{cls:"rc-helper-sm",name:"Helper/SM",spec:"12 / 16 · Regular"}],d={name:"Typography",render:()=>e.jsx(i,{title:"Typography",description:"Helvetica Now Display — Heading (Bold, H1–H9) for titles · Body (Regular, up to 20px) for content · Label for UI controls · Helper for captions. Rule: 24px is always a heading (H6), never body.",children:V.map(s=>e.jsxs("div",{className:a.typeRow,children:[e.jsxs("div",{className:a.typeMeta,children:[s.name," — ",s.spec]}),e.jsx("div",{className:s.cls,children:s.name.startsWith("Helper")?"Helper text for form fields and hints":"The quick brown fox jumps over the lazy dog"})]},s.name))})},c={name:"Spacing",render:()=>e.jsx(i,{title:"Spacing",description:"4px base scale.",children:Object.entries(m.spacing).map(([s,t])=>e.jsxs("div",{className:a.spacingRow,children:[e.jsxs("div",{className:a.spacingLabel,children:["spacing/",s]}),e.jsx("div",{className:a.spacingBar,style:{width:`var(--rc-spacing-${s})`}}),e.jsxs("div",{className:a.spacingLabel,children:[t,"px"]})]},s))})},D=["none","sm","md","lg","full"],o={name:"Radius",render:()=>e.jsx(i,{title:"Radius",description:"Corner radius tokens. RC uses sharp corners (none/sm = 0–4px) with full for pills and avatars.",children:e.jsx("div",{className:a.radiusRow,children:D.map(s=>e.jsxs("div",{className:a.radiusCard,style:{borderRadius:`var(--rc-radius-${s})`},children:["radius/",s]},s))})})},G=[{name:"sm",shadow:"var(--rc-shadow-sm)"},{name:"md",shadow:"var(--rc-shadow-md)"},{name:"lg",shadow:"var(--rc-shadow-lg)"},{name:"xl",shadow:"var(--rc-shadow-xl)"}],p={name:"Elevation",render:()=>e.jsx(i,{title:"Elevation",description:"Subtle shadows for overlays and elevated surfaces. Flat UI uses borders; elevation is reserved for dropdowns, modals, and popovers.",children:e.jsx("div",{className:a.elevationRow,children:G.map(s=>e.jsxs("div",{className:a.elevationCard,style:{boxShadow:s.shadow},children:["elevation/",s.name]},s.name))})})};var b,h,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Colors',
  render: () => <>
    <FoundationSection title="Colors" description="Primitive palette and semantic tokens (Light). Canvas: background/canvas or background/blank. Surfaces: layer/01–03 with hover, active, and selected-01 states.">
      <h3 className={styles.groupTitle}>Primitives</h3>
      {primitiveFamilies.map(family => <PrimitiveRamp key={family} family={family} steps={primitiveSteps(family)} />)}
      <div className={styles.ramp}>
        <div className={styles.rampLabel}>white / black</div>
        <div className={styles.rampRow}>
          {['white/1000', 'black/1000'].map(step => <div key={step} className={styles.rampStep}>
              <div className={styles.rampColor} style={{
              background: \`var(\${toVar(step)})\`,
              border: step.startsWith('white') ? '1px solid var(--rc-border-subtle-01)' : undefined
            }} />
              <div className={styles.rampStepName}>{step.split('/')[1]}</div>
            </div>)}
        </div>
      </div>

      <h3 className={styles.groupTitle}>Semantic</h3>
      {Object.entries(semanticGroups).map(([group, tokenList]) => <div key={group}>
          <h3 className={styles.groupTitle}>{group}</h3>
          <div className={styles.swatchGrid}>
            {tokenList.map(name => {
            const isLight = name.includes('blank') || name.includes('layer/01') || name.includes('field/02') || name.includes('on-color') || name.includes('inverse') && name.startsWith('text/');
            return <Swatch key={name} name={name} cssVar={toVar(name)} showBorder={isLight} />;
          })}
          </div>
        </div>)}
    </FoundationSection>
  </>
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,f,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Templates',
  render: () => <FoundationSection title="Page templates" description="Layouts set the canvas. Components use layer/01 for nav, cards, modals. Do not bind UI chrome to background/canvas.">
      <div className={styles.templateRow}>
        <div className={styles.templateWrap}>
          <div className={styles.templateFrame} style={{
          background: 'var(--rc-background-canvas)'
        }}>
            <div className={styles.templateNav} style={{
            background: 'var(--rc-layer-01)'
          }}>
              Nav / Breadcrumbs
            </div>
            <div className={styles.templateContent}>
              <div className={styles.templateCard} style={{
              background: 'var(--rc-layer-01)'
            }}>
                Card
              </div>
            </div>
          </div>
          <div className={styles.templateCaption}>Productive · background/canvas</div>
        </div>
        <div className={styles.templateWrap}>
          <div className={styles.templateFrame} style={{
          background: 'var(--rc-background-blank)'
        }}>
            <div className={styles.templateNav} style={{
            background: 'var(--rc-layer-01)'
          }}>
              Nav / Breadcrumbs
            </div>
            <div className={styles.templateContent}>
              <div className={styles.templateCard} style={{
              background: 'var(--rc-layer-01)'
            }}>
                Card
              </div>
            </div>
          </div>
          <div className={styles.templateCaption}>Blank · background/blank</div>
        </div>
      </div>
    </FoundationSection>
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var N,k,j;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Typography',
  render: () => <FoundationSection title="Typography" description="Helvetica Now Display — Heading (Bold, H1–H9) for titles · Body (Regular, up to 20px) for content · Label for UI controls · Helper for captions. Rule: 24px is always a heading (H6), never body.">
      {typeScale.map(t => <div key={t.name} className={styles.typeRow}>
          <div className={styles.typeMeta}>
            {t.name} — {t.spec}
          </div>
          <div className={t.cls}>
            {t.name.startsWith('Helper') ? 'Helper text for form fields and hints' : 'The quick brown fox jumps over the lazy dog'}
          </div>
        </div>)}
    </FoundationSection>
}`,...(j=(k=d.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var w,S,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Spacing',
  render: () => <FoundationSection title="Spacing" description="4px base scale.">
      {Object.entries(tokens.spacing).map(([key, px]) => <div key={key} className={styles.spacingRow}>
          <div className={styles.spacingLabel}>spacing/{key}</div>
          <div className={styles.spacingBar} style={{
        width: \`var(--rc-spacing-\${key})\`
      }} />
          <div className={styles.spacingLabel}>{px}px</div>
        </div>)}
    </FoundationSection>
}`,...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var R,H,B;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Radius',
  render: () => <FoundationSection title="Radius" description="Corner radius tokens. RC uses sharp corners (none/sm = 0–4px) with full for pills and avatars.">
      <div className={styles.radiusRow}>
        {radiusKeys.map(key => <div key={key} className={styles.radiusCard} style={{
        borderRadius: \`var(--rc-radius-\${key})\`
      }}>
            radius/{key}
          </div>)}
      </div>
    </FoundationSection>
}`,...(B=(H=o.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var T,F,L;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Elevation',
  render: () => <FoundationSection title="Elevation" description="Subtle shadows for overlays and elevated surfaces. Flat UI uses borders; elevation is reserved for dropdowns, modals, and popovers.">
      <div className={styles.elevationRow}>
        {elevations.map(e => <div key={e.name} className={styles.elevationCard} style={{
        boxShadow: e.shadow
      }}>
            elevation/{e.name}
          </div>)}
      </div>
    </FoundationSection>
}`,...(L=(F=p.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const A=["Colors","Templates","Typography","Spacing","Radius","Elevation"];export{n as Colors,p as Elevation,o as Radius,c as Spacing,l as Templates,d as Typography,A as __namedExportsOrder,K as default};

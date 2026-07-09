import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{s as r}from"./Foundations.module-cW3O_KaT.js";function o({title:a,description:s,children:t}){return e.jsxs("section",{className:r.section,children:[e.jsx("h2",{className:r.title,children:a}),s?e.jsx("p",{className:r.description,children:s}):null,t]})}function O({name:a,cssVar:s,hex:t,showBorder:b,borderOnly:m}){return e.jsxs("div",{className:r.swatch,children:[e.jsx("div",{className:r.swatchColor,style:m?{background:"var(--rc-layer-01)",border:`2px solid var(${s})`}:{background:`var(${s})`,border:b?"1px solid var(--rc-border-subtle-01)":void 0}}),e.jsx("div",{className:r.swatchName,children:a}),t?e.jsx("div",{className:r.swatchHex,children:t}):null]})}function W({family:a,steps:s}){return e.jsxs("div",{className:r.ramp,children:[e.jsx("div",{className:r.rampLabel,children:a}),e.jsx("div",{className:r.rampRow,children:s.map(t=>{const b=`--rc-${t.replace(/\//g,"-")}`,m=t.includes("/50")||t.includes("/100")||t.includes("25");return e.jsxs("div",{className:r.rampStep,children:[e.jsx("div",{className:r.rampColor,style:{background:`var(${b})`,border:m?"1px solid var(--rc-border-subtle-01)":void 0}}),e.jsx("div",{className:r.rampStepName,children:t.split("/")[1]})]},t)})})]})}o.__docgenInfo={description:"",methods:[],displayName:"FoundationSection",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};O.__docgenInfo={description:"",methods:[],displayName:"Swatch",props:{name:{required:!0,tsType:{name:"string"},description:""},cssVar:{required:!0,tsType:{name:"string"},description:""},hex:{required:!1,tsType:{name:"string"},description:""},showBorder:{required:!1,tsType:{name:"boolean"},description:""},borderOnly:{required:!1,tsType:{name:"boolean"},description:""}}};W.__docgenInfo={description:"",methods:[],displayName:"PrimitiveRamp",props:{family:{required:!0,tsType:{name:"string"},description:""},steps:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const q={"purple/50":"#f7f6ff","purple/100":"#ece9ff","purple/200":"#d7d0ff","purple/300":"#beafff","purple/400":"#a285ff","purple/500":"#8752fa","purple/600":"#663dc0","purple/700":"#4b2b8f","purple/800":"#311a61","purple/900":"#1c0d3c","purple/950":"#13092a","light-purple/50":"#fbf7ff","light-purple/100":"#f6eaff","light-purple/200":"#ebd2ff","light-purple/300":"#deb3ff","light-purple/400":"#cd83ff","light-purple/500":"#ad6ed7","light-purple/600":"#8352a4","light-purple/700":"#5c3874","light-purple/800":"#3c234d","light-purple/900":"#23122e","light-purple/950":"#190b22","orange/50":"#fff6f4","orange/100":"#ffebe5","orange/200":"#ffd3c6","orange/300":"#ffb49d","orange/400":"#ff8b68","orange/500":"#ff5001","orange/600":"#c43b01","orange/700":"#922a00","orange/800":"#631a00","orange/900":"#3d0c00","orange/950":"#320d01","blue/50":"#f1f4ff","blue/100":"#dfe5ff","blue/200":"#bcc7ff","blue/300":"#92a0ff","blue/400":"#656cff","blue/500":"#4500f9","blue/600":"#3300bf","blue/700":"#23008e","blue/800":"#150061","blue/900":"#09003b","blue/950":"#090132","neutral/25":"#fafafa","neutral/50":"#eaeaeb","neutral/100":"#bfbec0","neutral/200":"#a09ea2","neutral/300":"#757277","neutral/400":"#5a575d","neutral/500":"#312d34","neutral/600":"#2d292f","neutral/700":"#232025","neutral/800":"#1b191d","neutral/900":"#151316","green/50":"#f0fdf4","green/100":"#dcfce7","green/200":"#bbf7d0","green/300":"#86efac","green/400":"#4ade80","green/500":"#22c55e","green/600":"#16a34a","green/700":"#15803d","green/800":"#166534","green/900":"#14532d","green/950":"#0a2e18","amber/50":"#fffbeb","amber/100":"#fff6d1","amber/200":"#fee68a","amber/300":"#fcd34d","amber/400":"#fbbf24","amber/500":"#f59e0b","amber/600":"#d97706","amber/700":"#b45309","amber/800":"#92400e","amber/900":"#78350f","amber/950":"#451a03","white/1000":"#ffffff","black/1000":"#000000"},E={"background/hover":"#eaeaeb","background/active":"#bfbec0","background/selected":"#eaeaeb","background/selected-hover":"#eaeaeb","background/inverse":"#151316","background/brand":"#8752fa","background/canvas":"#fafafa","background/blank":"#ffffff","layer/01":"#ffffff","layer/02":"#fafafa","layer/03":"#eaeaeb","layer/hover-01":"#fafafa","layer/active-01":"#eaeaeb","layer/selected-01":"#eaeaeb","field/01":"#fafafa","field/02":"#ffffff","field/03":"#fafafa","field/hover-01":"#eaeaeb","field/hover-02":"#fafafa","field/hover-03":"#eaeaeb","border/subtle-00":"#fafafa","border/subtle-01":"#eaeaeb","border/subtle-02":"#bfbec0","border/subtle-03":"#a09ea2","border/subtle-selected-01":"#bfbec0","border/subtle-selected-02":"#eaeaeb","border/subtle-selected-03":"#a09ea2","border/strong-01":"#151316","border/interactive":"#151316","border/inverse":"#151316","border/disabled":"#bfbec0","text/primary":"#151316","text/secondary":"#5a575d","text/tertiary":"#757277","text/placeholder":"#757277","text/helper":"#757277","text/error":"#c43b01","text/on-color":"#ffffff","text/on-color-disabled":"#a09ea2","text/inverse":"#fafafa","text/disabled":"#bfbec0","link/primary":"#151316","link/primary-hover":"#2d292f","link/inverse":"#fafafa","link/visited":"#312d34","icon/primary":"#151316","icon/secondary":"#757277","icon/tertiary":"#bfbec0","icon/on-color":"#ffffff","icon/disabled":"#bfbec0","icon/inverse":"#fafafa","icon/error":"#ff5001","icon/warning":"#d97706","icon/success":"#15803d","icon/info":"#4500f9","icon/ai":"#8752fa","text/warning":"#b45309","text/success":"#166534","text/info":"#150061","text/ai":"#4b2b8f","background/support/error":"#fff6f4","background/support/warning":"#fffbeb","background/support/success":"#f0fdf4","background/support/info":"#f1f4ff","border/support/error":"#ffb49d","border/support/warning":"#fcd34d","border/support/success":"#86efac","border/support/info":"#92a0ff","border/ai":"#8752fa","support/error":"#ff5001","support/success":"#15803d","support/warning":"#f59e0b","support/info":"#4500f9","focus/default":"#151316","focus/inverse":"#ffffff","button/primary":"#151316","button/primary-hover":"#5a575d","button/primary-active":"#312d34","button/secondary":"#eaeaeb","button/secondary-hover":"#bfbec0","button/tertiary":"#bfbec0","button/tertiary-hover":"#fafafa","button/ghost-hover":"#eaeaeb","button/danger":"#ff5001","button/danger-hover":"#c43b01","button/ai":"#8752fa","button/ai-hover":"#663dc0","button/ai-active":"#4b2b8f","button/ai-secondary":"#ece9ff","button/ai-secondary-hover":"#d7d0ff","button/ai-tertiary-hover":"#f7f6ff","button/ai-ghost":"#f7f6ff","button/ai-ghost-hover":"#ece9ff","button/disabled":"#eaeaeb","button/disabled-text":"#a09ea2","step/indicator/current-bg":"#151316","step/indicator/upcoming-bg":"#bfbec0","step/indicator/fg":"#ffffff","step/label/current":"#151316","step/label/upcoming":"#757277","chart/1":"#8752fa","chart/2":"#4500f9","chart/3":"#ff5001","chart/4":"#15803d","chart/5":"#f59e0b","chart/6":"#cd83ff","chart/red":"#d92d20","chart/bar":"#8752fa","chart/neutral":"#a09ea2","chart/track":"#eaeaeb","chart/grid":"#eaeaeb","chart/axis":"#bfbec0","chart/tick-label":"#757277","chart/value-label":"#5a575d","chart/value-label-on-bar":"#fafafa","chart/total-label":"#151316"},P={0:0,1:4,2:8,3:12,4:16,5:20,6:24,8:32,10:40,12:48,16:64},I={none:0,sm:4,md:8,lg:12,full:9999},_={sm:"0 1px 2px rgb(0 0 0 / 8%), 0 2px 6px rgb(0 0 0 / 6%)",md:"0 2px 4px rgb(0 0 0 / 8%), 0 6px 20px rgb(0 0 0 / 12%)",lg:"0 4px 8px rgb(0 0 0 / 10%), 0 12px 32px -2px rgb(0 0 0 / 16%)",xl:"0 8px 16px rgb(0 0 0 / 12%), 0 24px 64px -4px rgb(0 0 0 / 22%)"},n={primitives:q,semanticLight:E,spacing:P,radius:I,shadow:_};Object.fromEntries(Object.entries(n.spacing).map(([a,s])=>[`--rc-spacing-${a}`,`${s}px`]));Object.fromEntries(Object.entries(n.radius).map(([a,s])=>[`--rc-radius-${a}`,`${s}px`]));Object.fromEntries(Object.entries(n.shadow).map(([a,s])=>[`--rc-shadow-${a}`,s]));const G={Background:["background/canvas","background/blank","background/hover","background/active","background/selected","background/selected-hover","background/inverse","background/brand"],Layer:["layer/01","layer/02","layer/03","layer/hover-01","layer/active-01","layer/selected-01"],Field:["field/01","field/02","field/03","field/hover-01","field/hover-02","field/hover-03"],Border:["border/subtle-00","border/subtle-01","border/subtle-02","border/subtle-03","border/subtle-selected-01","border/subtle-selected-02","border/subtle-selected-03","border/strong-01","border/interactive","border/inverse","border/disabled","border/ai"],Text:["text/primary","text/secondary","text/tertiary","text/placeholder","text/helper","text/error","text/warning","text/success","text/info","text/ai","text/on-color","text/on-color-disabled","text/inverse","text/disabled"],Link:["link/primary","link/primary-hover","link/inverse","link/visited"],Icon:["icon/primary","icon/secondary","icon/tertiary","icon/on-color","icon/disabled","icon/inverse","icon/error","icon/warning","icon/success","icon/info","icon/ai"],"Support surfaces":["background/support/error","background/support/warning","background/support/success","background/support/info","border/support/error","border/support/warning","border/support/success","border/support/info"],Support:["support/error","support/success","support/warning","support/info"],Focus:["focus/default","focus/inverse"],Button:["button/primary","button/primary-hover","button/primary-active","button/secondary","button/secondary-hover","button/tertiary","button/tertiary-hover","button/ghost-hover","button/danger","button/danger-hover","button/ai","button/ai-hover","button/ai-active","button/ai-secondary","button/ai-secondary-hover","button/ai-tertiary-hover","button/ai-ghost","button/ai-ghost-hover","button/disabled","button/disabled-text"],Steps:["step/indicator/current-bg","step/indicator/upcoming-bg","step/indicator/fg","step/label/current","step/label/upcoming"],Chart:["chart/1","chart/2","chart/3","chart/4","chart/5","chart/6","chart/red","chart/bar","chart/neutral","chart/track","chart/grid","chart/axis","chart/tick-label","chart/value-label","chart/value-label-on-bar","chart/total-label"]},M=["purple","light-purple","orange","blue","neutral","green","amber"];function D(a){return Object.keys(n.primitives).filter(s=>s.startsWith(`${a}/`))}const Y={title:"Foundations",tags:["autodocs"],parameters:{layout:"fullscreen"}};function f(a){return`--rc-${a.replace(/\//g,"-")}`}const U=n.semanticLight;function V(a){return U[a]}function z(a){return a.includes("blank")||a.includes("layer/01")||a.includes("field/02")||a.includes("on-color")||a.includes("inverse")&&a.startsWith("text/")||a==="step/indicator/fg"||a.startsWith("background/support/")}const i={name:"Colors",render:()=>e.jsx(e.Fragment,{children:e.jsxs(o,{title:"Colors",description:"Primitive palette and semantic tokens (Light). Canvas: background/canvas or background/blank. Surfaces: layer/01–03 with hover, active, and selected-01 states. Support surfaces: pale feedback backgrounds (background/support/*) and matching borders (border/support/*) for alerts and mapping status.",children:[e.jsx("h3",{className:r.groupTitle,children:"Primitives"}),M.map(a=>e.jsx(W,{family:a,steps:D(a)},a)),e.jsxs("div",{className:r.ramp,children:[e.jsx("div",{className:r.rampLabel,children:"white / black"}),e.jsx("div",{className:r.rampRow,children:["white/1000","black/1000"].map(a=>e.jsxs("div",{className:r.rampStep,children:[e.jsx("div",{className:r.rampColor,style:{background:`var(${f(a)})`,border:a.startsWith("white")?"1px solid var(--rc-border-subtle-01)":void 0}}),e.jsx("div",{className:r.rampStepName,children:a.split("/")[1]})]},a))})]}),e.jsx("h3",{className:r.groupTitle,children:"Semantic"}),Object.entries(G).map(([a,s])=>e.jsxs("div",{children:[e.jsx("h3",{className:r.groupTitle,children:a}),e.jsx("div",{className:r.swatchGrid,children:s.map(t=>e.jsx(O,{name:t,cssVar:f(t),hex:V(t),showBorder:z(t),borderOnly:t.startsWith("border/")},t))})]},a))]})})},c={name:"Templates",render:()=>e.jsx(o,{title:"Page templates",description:"Layouts set the canvas. Components use layer/01 for nav, cards, modals. Do not bind UI chrome to background/canvas.",children:e.jsxs("div",{className:r.templateRow,children:[e.jsxs("div",{className:r.templateWrap,children:[e.jsxs("div",{className:r.templateFrame,style:{background:"var(--rc-background-canvas)"},children:[e.jsx("div",{className:r.templateNav,style:{background:"var(--rc-layer-01)"},children:"Nav / Breadcrumbs"}),e.jsx("div",{className:r.templateContent,children:e.jsx("div",{className:r.templateCard,style:{background:"var(--rc-layer-01)"},children:"Card"})})]}),e.jsx("div",{className:r.templateCaption,children:"Productive · background/canvas"})]}),e.jsxs("div",{className:r.templateWrap,children:[e.jsxs("div",{className:r.templateFrame,style:{background:"var(--rc-background-blank)"},children:[e.jsx("div",{className:r.templateNav,style:{background:"var(--rc-layer-01)"},children:"Nav / Breadcrumbs"}),e.jsx("div",{className:r.templateContent,children:e.jsx("div",{className:r.templateCard,style:{background:"var(--rc-layer-01)"},children:"Card"})})]}),e.jsx("div",{className:r.templateCaption,children:"Blank · background/blank"})]})]})})},K=[{cls:"rc-heading-h1",name:"Heading/H1",spec:"64 / 70 · Bold"},{cls:"rc-heading-h2",name:"Heading/H2",spec:"56 / 64 · Bold"},{cls:"rc-heading-h3",name:"Heading/H3",spec:"48 / 58 · Bold"},{cls:"rc-heading-h4",name:"Heading/H4",spec:"40 / 50 · Bold"},{cls:"rc-heading-h5",name:"Heading/H5",spec:"32 / 42 · Bold"},{cls:"rc-heading-h6",name:"Heading/H6",spec:"24 / 32 · Bold"},{cls:"rc-heading-h7",name:"Heading/H7",spec:"18 / 24 · Bold"},{cls:"rc-heading-h8",name:"Heading/H8",spec:"16 / 22 · Bold"},{cls:"rc-heading-h9",name:"Heading/H9",spec:"14 / 18 · Bold"},{cls:"rc-body-lg",name:"Body/LG",spec:"20 / 32 · Regular"},{cls:"rc-body-rg",name:"Body/RG",spec:"18 / 24 · Regular"},{cls:"rc-body-md",name:"Body/MD",spec:"16 / 24 · Regular"},{cls:"rc-body-sm",name:"Body/SM",spec:"14 / 20 · Regular"},{cls:"rc-body-xs",name:"Body/XS",spec:"12 / 16 · Regular"},{cls:"rc-label-lg",name:"Label/LG",spec:"16 / 24 · Bold"},{cls:"rc-label-md",name:"Label/MD",spec:"14 / 18 · Bold"},{cls:"rc-label-sm",name:"Label/SM",spec:"12 / 16 · Bold"},{cls:"rc-helper-sm",name:"Helper/SM",spec:"12 / 16 · Regular"}],d={name:"Typography",render:()=>e.jsx(o,{title:"Typography",description:"Helvetica Now Display — Heading (Bold, H1–H9) for titles · Body (Regular, up to 20px) for content · Label for UI controls · Helper for captions. Rule: 24px is always a heading (H6), never body.",children:K.map(a=>e.jsxs("div",{className:r.typeRow,children:[e.jsxs("div",{className:r.typeMeta,children:[a.name," — ",a.spec]}),e.jsx("div",{className:a.cls,children:a.name.startsWith("Helper")?"Helper text for form fields and hints":"The quick brown fox jumps over the lazy dog"})]},a.name))})},l={name:"Spacing",render:()=>e.jsx(o,{title:"Spacing",description:"4px base scale.",children:Object.entries(n.spacing).map(([a,s])=>e.jsxs("div",{className:r.spacingRow,children:[e.jsxs("div",{className:r.spacingLabel,children:["spacing/",a]}),e.jsx("div",{className:r.spacingBar,style:{width:`var(--rc-spacing-${a})`}}),e.jsxs("div",{className:r.spacingLabel,children:[s,"px"]})]},a))})},A=["none","sm","md","lg","full"],p={name:"Radius",render:()=>e.jsx(o,{title:"Radius",description:"Corner radius tokens. RC uses sharp corners (none/sm = 0–4px) with full for pills and avatars.",children:e.jsx("div",{className:r.radiusRow,children:A.map(a=>e.jsxs("div",{className:r.radiusCard,style:{borderRadius:`var(--rc-radius-${a})`},children:["radius/",a]},a))})})},X=[{name:"sm",shadow:"var(--rc-shadow-sm)"},{name:"md",shadow:"var(--rc-shadow-md)"},{name:"lg",shadow:"var(--rc-shadow-lg)"},{name:"xl",shadow:"var(--rc-shadow-xl)"}],u={name:"Elevation",render:()=>e.jsx(o,{title:"Elevation",description:"Subtle shadows for overlays and elevated surfaces. Flat UI uses borders; elevation is reserved for dropdowns, modals, and popovers.",children:e.jsx("div",{className:r.elevationRow,children:X.map(a=>e.jsxs("div",{className:r.elevationCard,style:{boxShadow:a.shadow},children:["elevation/",a.name]},a.name))})})};var v,h,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Colors',
  render: () => <>
    <FoundationSection title="Colors" description="Primitive palette and semantic tokens (Light). Canvas: background/canvas or background/blank. Surfaces: layer/01–03 with hover, active, and selected-01 states. Support surfaces: pale feedback backgrounds (background/support/*) and matching borders (border/support/*) for alerts and mapping status.">
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
            {tokenList.map(name => <Swatch key={name} name={name} cssVar={toVar(name)} hex={tokenHex(name)} showBorder={isLightSwatch(name)} borderOnly={name.startsWith('border/')} />)}
          </div>
        </div>)}
    </FoundationSection>
  </>
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,x,k;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(x=c.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var N,w,j;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=(w=d.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var S,C,R;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(R=(C=l.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var H,B,L;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(B=p.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var T,F,$;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...($=(F=u.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};const Z=["Colors","Templates","Typography","Spacing","Radius","Elevation"];export{i as Colors,u as Elevation,p as Radius,l as Spacing,c as Templates,d as Typography,Z as __namedExportsOrder,Y as default};

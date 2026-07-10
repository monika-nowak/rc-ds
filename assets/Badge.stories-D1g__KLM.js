import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./Badge-C2pIK4pD.js";import"./cn-2dOUpm6k.js";import"./Icon-D1Mi1OoL.js";import"./iframe-okLCOoZf.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-DLmrfCuS.js";import"./CaretRight.es-BOg3ZnOv.js";import"./CaretDown.es-CsqFuBgP.js";import"./Minus.es-hMcAcDyQ.js";import"./Warning.es-B4vTOCq-.js";import"./Flag.es-D_cVYw98.js";import"./Trash.es-CHXGmJNG.js";const E=["sparkle","info","check","warning","x","clock","star"],q={title:"Components/Badge",component:a,tags:["autodocs"],argTypes:{appearance:{control:"select",options:["emphasis","subtle"]},color:{control:"select",options:["neutral","success","warning","error","info","purple","lightPurple"]},showIcon:{control:"boolean",name:"Icon"},icon:{control:"select",options:[...E],if:{arg:"showIcon",truthy:!0}},loading:{control:"boolean",name:"Loading"},iconLeft:{control:!1},iconTone:{control:!1}}},s={args:{children:"Badge",appearance:"emphasis",color:"neutral",showIcon:!1}},i={name:"With icon",args:{children:"AI generated",appearance:"subtle",color:"purple",showIcon:!0,icon:"sparkle",loading:!1},render:({showIcon:n,loading:o,icon:d,iconLeft:g,...r})=>e.jsx(a,{...r,loading:o,icon:n&&!o?d:void 0})},c={name:"Icon swap",args:{children:"Verified",appearance:"subtle",color:"success",showIcon:!0,icon:"check",loading:!1},render:({showIcon:n,loading:o,icon:d,...g})=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:E.map(r=>e.jsx(a,{...g,icon:n&&!o?r:void 0,children:r},r))})},l={name:"Loading · generating",args:{children:"Generating…",appearance:"subtle",color:"purple",loading:!0}},t=["neutral","success","warning","error","info","purple","lightPurple"],_={neutral:"Neutral",success:"Success",warning:"Warning",error:"Error",info:"Info",purple:"Purple",lightPurple:"Light Purple"},p={args:{children:"Badge",showIcon:!1},render:()=>e.jsxs("div",{style:{display:"grid",gap:16},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#757277",marginBottom:8},children:"Emphasis"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:t.map(n=>e.jsx(a,{appearance:"emphasis",color:n,children:"Badge"},`emphasis-${n}`))})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#757277",marginBottom:8},children:"Subtle"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:t.map(n=>e.jsx(a,{appearance:"subtle",color:n,children:"Badge"},`subtle-${n}`))})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, auto)",gap:8,fontSize:11,color:"#757277"},children:t.map(n=>e.jsx("span",{children:_[n]},n))})]})};var m,u,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    appearance: 'emphasis',
    color: 'neutral',
    showIcon: false
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,x,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'With icon',
  args: {
    children: 'AI generated',
    appearance: 'subtle',
    color: 'purple',
    showIcon: true,
    icon: 'sparkle',
    loading: false
  },
  render: ({
    showIcon,
    loading,
    icon,
    iconLeft: _iconLeft,
    ...args
  }) => <Badge {...args} loading={loading} icon={showIcon && !loading ? icon : undefined} />
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var B,v,w;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Icon swap',
  args: {
    children: 'Verified',
    appearance: 'subtle',
    color: 'success',
    showIcon: true,
    icon: 'check',
    loading: false
  },
  render: ({
    showIcon,
    loading,
    icon,
    ...args
  }) => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8
  }}>
      {BADGE_ICON_OPTIONS.map(iconName => <Badge key={iconName} {...args} icon={showIcon && !loading ? iconName : undefined}>
          {iconName}
        </Badge>)}
    </div>
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var I,S,L;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Loading · generating',
  args: {
    children: 'Generating…',
    appearance: 'subtle',
    color: 'purple',
    loading: true
  }
}`,...(L=(S=l.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var O,j,b;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    showIcon: false
  },
  render: () => <div style={{
    display: 'grid',
    gap: 16
  }}>
      <div>
        <div style={{
        fontSize: 12,
        color: '#757277',
        marginBottom: 8
      }}>Emphasis</div>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }}>
          {BADGE_COLORS.map(color => <Badge key={\`emphasis-\${color}\`} appearance="emphasis" color={color}>
              Badge
            </Badge>)}
        </div>
      </div>
      <div>
        <div style={{
        fontSize: 12,
        color: '#757277',
        marginBottom: 8
      }}>Subtle</div>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }}>
          {BADGE_COLORS.map(color => <Badge key={\`subtle-\${color}\`} appearance="subtle" color={color}>
              Badge
            </Badge>)}
        </div>
      </div>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(7, auto)',
      gap: 8,
      fontSize: 11,
      color: '#757277'
    }}>
        {BADGE_COLORS.map(color => <span key={color}>{COLOR_LABELS[color]}</span>)}
      </div>
    </div>
}`,...(b=(j=p.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const F=["EmphasisNeutral","WithIcon","IconSwap","Loading","AllColors"];export{p as AllColors,s as EmphasisNeutral,c as IconSwap,l as Loading,i as WithIcon,F as __namedExportsOrder,q as default};

import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as S}from"./Icon-Dfh7bYp3.js";import{B as i}from"./Badge-B_VwoA0O.js";import"./cn-2dOUpm6k.js";import"./iframe-Dj2fNUKW.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-BN1nhKFu.js";import"./CaretRight.es-VMw27wF1.js";import"./CaretDown.es-BW8BGd4m.js";import"./Minus.es-DmGM4g94.js";import"./Warning.es-w2C_RtJU.js";import"./File.es-C6Vu3DIB.js";import"./Trash.es-DEznS888.js";const D={title:"Components/Badge",component:i,tags:["autodocs"],argTypes:{appearance:{control:"select",options:["emphasis","subtle"]},color:{control:"select",options:["neutral","success","warning","error","info","purple","lightPurple"]},showIcon:{control:"boolean",name:"Icon"},loading:{control:"boolean",name:"Loading"},iconLeft:{control:!1}}},r={args:{children:"Badge",appearance:"emphasis",color:"neutral",showIcon:!1}},a={name:"With icon",args:{children:"AI generated",appearance:"subtle",color:"purple",showIcon:!0,loading:!1},render:({showIcon:n,loading:t,iconLeft:w,...L})=>e.jsx(i,{...L,loading:t,iconLeft:n&&!t?e.jsx(S,{name:"sparkle",size:12,tone:"ai","aria-hidden":!0}):void 0})},o={name:"Loading · generating",args:{children:"Generating…",appearance:"subtle",color:"purple",loading:!0}},l=["neutral","success","warning","error","info","purple","lightPurple"],I={neutral:"Neutral",success:"Success",warning:"Warning",error:"Error",info:"Info",purple:"Purple",lightPurple:"Light Purple"},s={args:{children:"Badge",showIcon:!1},render:()=>e.jsxs("div",{style:{display:"grid",gap:16},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#757277",marginBottom:8},children:"Emphasis"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:l.map(n=>e.jsx(i,{appearance:"emphasis",color:n,children:"Badge"},`emphasis-${n}`))})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#757277",marginBottom:8},children:"Subtle"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:l.map(n=>e.jsx(i,{appearance:"subtle",color:n,children:"Badge"},`subtle-${n}`))})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, auto)",gap:8,fontSize:11,color:"#757277"},children:l.map(n=>e.jsx("span",{children:I[n]},n))})]})};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    appearance: 'emphasis',
    color: 'neutral',
    showIcon: false
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,m,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'With icon',
  args: {
    children: 'AI generated',
    appearance: 'subtle',
    color: 'purple',
    showIcon: true,
    loading: false
  },
  render: ({
    showIcon,
    loading,
    iconLeft: _iconLeft,
    ...args
  }) => <Badge {...args} loading={loading} iconLeft={showIcon && !loading ? <Icon name="sparkle" size={12} tone="ai" aria-hidden /> : undefined} />
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,f,B;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Loading · generating',
  args: {
    children: 'Generating…',
    appearance: 'subtle',
    color: 'purple',
    loading: true
  }
}`,...(B=(f=o.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var v,x,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const $=["EmphasisNeutral","WithIcon","Loading","AllColors"];export{s as AllColors,r as EmphasisNeutral,o as Loading,a as WithIcon,$ as __namedExportsOrder,D as default};

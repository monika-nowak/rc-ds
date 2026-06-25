import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as o}from"./Badge-HNaJTtNX.js";import"./cn-2dOUpm6k.js";const v={title:"Components/Badge",component:o,tags:["autodocs"],argTypes:{appearance:{control:"select",options:["emphasis","subtle"]},color:{control:"select",options:["neutral","success","warning","error","info","purple","lightPurple"]}}},a={args:{children:"Badge",appearance:"emphasis",color:"neutral"}},s=["neutral","success","warning","error","info","purple","lightPurple"],m={neutral:"Neutral",success:"Success",warning:"Warning",error:"Error",info:"Info",purple:"Purple",lightPurple:"Light Purple"},n={render:()=>e.jsxs("div",{style:{display:"grid",gap:16},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#757277",marginBottom:8},children:"Emphasis"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:s.map(r=>e.jsx(o,{appearance:"emphasis",color:r,children:"Badge"},`emphasis-${r}`))})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,color:"#757277",marginBottom:8},children:"Subtle"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:s.map(r=>e.jsx(o,{appearance:"subtle",color:r,children:"Badge"},`subtle-${r}`))})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, auto)",gap:8,fontSize:11,color:"#757277"},children:s.map(r=>e.jsx("span",{children:m[r]},r))})]})};var l,i,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    appearance: 'emphasis',
    color: 'neutral'
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var t,d,c;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const y=["EmphasisNeutral","AllColors"];export{n as AllColors,a as EmphasisNeutral,y as __namedExportsOrder,v as default};

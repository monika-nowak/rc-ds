import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as y}from"./Icon-DI9dzrBi.js";import{c as v}from"./cn-2dOUpm6k.js";import"./iframe-BotCSNRQ.js";import"./preload-helper-Uod2V3eo.js";import"./IconBase.es-Cw7Iwhdq.js";import"./CaretRight.es-Dhk1dAmj.js";import"./CaretDown.es-BKDwJi94.js";import"./Minus.es-B8XolVOv.js";import"./Warning.es-BbqsqbaC.js";import"./Flag.es-B0EYSIeH.js";import"./Trash.es-BwOqZC4J.js";const P="_tag_bzzcc_4",A="_label_bzzcc_15",V="_icon_bzzcc_20",G="_clickable_bzzcc_37",J="_body_bzzcc_43",K="_remove_bzzcc_65",Q="_purple_bzzcc_97",U="_blue_bzzcc_108",s={tag:P,label:A,icon:V,clickable:G,body:J,remove:K,purple:Q,blue:U};function b({color:l="purple",icon:i,onRemove:o,removeLabel:n="Remove",onClick:r,className:f,children:F,...g}){const h=!!r,k=!!o,c=e.jsxs(e.Fragment,{children:[i!=null?e.jsx("span",{className:s.icon,"aria-hidden":!0,children:i}):null,e.jsx("span",{className:s.label,children:F})]});return k?e.jsxs("span",{className:v("rc-label-md",s.tag,s[l],(h||k)&&s.clickable,f),...g,children:[h?e.jsx("button",{type:"button",className:s.body,onClick:r,children:c}):e.jsx("span",{className:s.body,children:c}),e.jsx("button",{type:"button",className:s.remove,"aria-label":n,onClick:()=>o==null?void 0:o(),children:e.jsx(y,{name:"x",size:16,tone:"inherit"})})]}):h?e.jsx("button",{type:"button",className:v("rc-label-md",s.tag,s[l],s.clickable,f),onClick:r,...g,children:c}):e.jsx("span",{className:v("rc-label-md",s.tag,s[l],f),...g,children:c})}b.__docgenInfo={description:'Reference tag — the unified answer-source / record chip (Figma 2286:4322).\nRadius-sm, 4px/8px padding, `rc-label-md` (700 14/18) label. Purple for\ntrends/signals, blue for records. Optional leading icon and dismiss "×".\nRenders as a <button> (hover + focus-visible) when `onClick` is set, else a\n<span>. When `onRemove` is set the root is a container with an inner "×"\nbutton so the two actions don\'t nest.',methods:[],displayName:"Tag",props:{color:{required:!1,tsType:{name:"union",raw:"'purple' | 'blue'",elements:[{name:"literal",value:"'purple'"},{name:"literal",value:"'blue'"}]},description:"Accent color — purple (trend/signal) or blue (records).",defaultValue:{value:"'purple'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Optional leading icon (rendered at 16px, colored to match the text accent -800)."},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'When provided, renders a trailing dismiss "×" affordance (accent -800).'},removeLabel:{required:!1,tsType:{name:"string"},description:"Accessible label for the dismiss affordance.",defaultValue:{value:"'Remove'",computed:!1}},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:"When provided, the tag becomes interactive (rendered as a <button> with hover)."}},composes:["Omit"]};const X=e.jsx(y,{name:"cell-signal-full",size:16});function Y({showIcon:l,clickable:i,dismissible:o,...n}){return e.jsx(b,{...n,icon:l?X:void 0,onClick:i?()=>{}:void 0,onRemove:o?()=>{}:void 0})}const me={title:"Components/Tag",component:b,tags:["autodocs"],argTypes:{color:{control:"inline-radio",options:["purple","blue"]},showIcon:{control:"boolean",name:"Leading icon"},clickable:{control:"boolean",name:"Clickable"},dismissible:{control:"boolean",name:"Dismiss ×"},icon:{control:!1},onClick:{control:!1},onRemove:{control:!1}},render:Y},t={args:{children:"T1",color:"purple",showIcon:!1,clickable:!0,dismissible:!1}},d={args:{children:"R–12",color:"blue",showIcon:!1,clickable:!0,dismissible:!1}},m={name:"With leading icon",args:{children:"Trend 1",color:"purple",showIcon:!0,clickable:!0,dismissible:!1}},p={name:"Icon + dismiss ×",args:{children:"Whole report",color:"purple",showIcon:!0,clickable:!0,dismissible:!0}},u={name:"Static (non-clickable)",args:{children:"S3",color:"purple",showIcon:!1,clickable:!1,dismissible:!1}},Z=["purple","blue"],a={render:()=>{const l=o=>o==="blue"?"R–12":"T1",i=[{title:"Label only",icon:!1,remove:!1},{title:"Leading icon",icon:!0,remove:!1},{title:"Dismiss ×",icon:!1,remove:!0},{title:"Icon + dismiss ×",icon:!0,remove:!0}];return e.jsx("div",{style:{display:"grid",gap:20},children:["Clickable","Static"].map(o=>e.jsxs("div",{style:{display:"grid",gap:12},children:[e.jsx("div",{style:{fontSize:12,color:"#757277"},children:o}),i.map(n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{width:130,fontSize:11,color:"#757277"},children:n.title}),Z.map(r=>e.jsx(b,{color:r,icon:n.icon?e.jsx(y,{name:"cell-signal-full",size:16}):void 0,onClick:o==="Clickable"?()=>{}:void 0,onRemove:n.remove?()=>{}:void 0,children:l(r)},r))]},n.title))]},o))})}};var x,_,w;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'T1',
    color: 'purple',
    showIcon: false,
    clickable: true,
    dismissible: false
  }
}`,...(w=(_=t.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var z,I,j;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'R–12',
    color: 'blue',
    showIcon: false,
    clickable: true,
    dismissible: false
  }
}`,...(j=(I=d.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var S,T,R;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'With leading icon',
  args: {
    children: 'Trend 1',
    color: 'purple',
    showIcon: true,
    clickable: true,
    dismissible: false
  }
}`,...(R=(T=m.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var C,L,W;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Icon + dismiss ×',
  args: {
    children: 'Whole report',
    color: 'purple',
    showIcon: true,
    clickable: true,
    dismissible: true
  }
}`,...(W=(L=p.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var N,O,B;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Static (non-clickable)',
  args: {
    children: 'S3',
    color: 'purple',
    showIcon: false,
    clickable: false,
    dismissible: false
  }
}`,...(B=(O=u.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var E,M,q,D,H;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const cellLabel = (color: string) => color === 'blue' ? 'R–12' : 'T1';
    const rows: {
      title: string;
      icon: boolean;
      remove: boolean;
    }[] = [{
      title: 'Label only',
      icon: false,
      remove: false
    }, {
      title: 'Leading icon',
      icon: true,
      remove: false
    }, {
      title: 'Dismiss ×',
      icon: false,
      remove: true
    }, {
      title: 'Icon + dismiss ×',
      icon: true,
      remove: true
    }];
    return <div style={{
      display: 'grid',
      gap: 20
    }}>
        {(['Clickable', 'Static'] as const).map(mode => <div key={mode} style={{
        display: 'grid',
        gap: 12
      }}>
            <div style={{
          fontSize: 12,
          color: '#757277'
        }}>{mode}</div>
            {rows.map(row => <div key={row.title} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>
                <span style={{
            width: 130,
            fontSize: 11,
            color: '#757277'
          }}>{row.title}</span>
                {COLORS.map(color => <Tag key={color} color={color} icon={row.icon ? <Icon name="cell-signal-full" size={16} /> : undefined} onClick={mode === 'Clickable' ? () => {} : undefined} onRemove={row.remove ? () => {} : undefined}>
                    {cellLabel(color)}
                  </Tag>)}
              </div>)}
          </div>)}
      </div>;
  }
}`,...(q=(M=a.parameters)==null?void 0:M.docs)==null?void 0:q.source},description:{story:"Full matrix: color × leading icon (on/off) × dismiss × (on/off) × clickable/static.",...(H=(D=a.parameters)==null?void 0:D.docs)==null?void 0:H.description}}};const pe=["Purple","Blue","WithIcon","Dismissible","Static","Matrix"];export{d as Blue,p as Dismissible,a as Matrix,t as Purple,u as Static,m as WithIcon,pe as __namedExportsOrder,me as default};

import{B as T,s as N,a as P,b as S}from"./@primevue-CKawswpI.js";import{p as m}from"./@primeuix-1F2RjyQi.js";import{f as K,c as i,d as l,e as c,h as z,m as r,i as b,j as f,k as h,F as y,l as v,p as O,q as x}from"./.pnpm-CEridyCk.js";var j=function(o){var n=o.dt;return`
.p-organizationchart-table {
    border-spacing: 0;
    border-collapse: separate;
    margin: 0 auto;
}

.p-organizationchart-table > tbody > tr > td {
    text-align: center;
    vertical-align: top;
    padding: 0 `.concat(n("organizationchart.gutter"),`;
}

.p-organizationchart-node {
    display: inline-block;
    position: relative;
    border: 1px solid `).concat(n("organizationchart.node.border.color"),`;
    background: `).concat(n("organizationchart.node.background"),`;
    color: `).concat(n("organizationchart.node.color"),`;
    padding: `).concat(n("organizationchart.node.padding"),`;
    border-radius: `).concat(n("organizationchart.node.border.radius"),`;
    transition: background `).concat(n("organizationchart.transition.duration"),", border-color ").concat(n("organizationchart.transition.duration"),", color ").concat(n("organizationchart.transition.duration"),", box-shadow ").concat(n("organizationchart.transition.duration"),`;
}

.p-organizationchart-node:has(.p-organizationchart-node-toggle-button) {
    padding: `).concat(n("organizationchart.node.toggleable.padding"),`;
}

.p-organizationchart-node.p-organizationchart-node-selectable:not(.p-organizationchart-node-selected):hover {
    background: `).concat(n("organizationchart.node.hover.background"),`;
    color: `).concat(n("organizationchart.node.hover.color"),`;
}

.p-organizationchart-node-selected {
    background: `).concat(n("organizationchart.node.selected.background"),`;
    color: `).concat(n("organizationchart.node.selected.color"),`;
}

.p-organizationchart-node-toggle-button {
    position: absolute;
    bottom: calc(-1 * calc(`).concat(n("organizationchart.node.toggle.button.size"),` / 2));
    margin-left: calc(-1 * calc(`).concat(n("organizationchart.node.toggle.button.size"),` / 2));
    z-index: 2;
    left: 50%;
    user-select: none;
    cursor: pointer;
    width: `).concat(n("organizationchart.node.toggle.button.size"),`;
    height: `).concat(n("organizationchart.node.toggle.button.size"),`;
    text-decoration: none;
    background: `).concat(n("organizationchart.node.toggle.button.background"),`;
    color: `).concat(n("organizationchart.node.toggle.button.color"),`;
    border-radius: `).concat(n("organizationchart.node.toggle.button.border.radius"),`;
    border: 1px solid `).concat(n("organizationchart.node.toggle.button.border.color"),`;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline-color: transparent;
    transition: background `).concat(n("organizationchart.transition.duration"),", color ").concat(n("organizationchart.transition.duration"),", border-color ").concat(n("organizationchart.transition.duration"),", outline-color ").concat(n("organizationchart.transition.duration"),", box-shadow ").concat(n("organizationchart.transition.duration"),`;
}

.p-organizationchart-node-toggle-button:hover {
    background: `).concat(n("organizationchart.node.toggle.button.hover.background"),`;
    color: `).concat(n("organizationchart.node.toggle.button.hover.color"),`;
}

.p-organizationchart-node-toggle-button:focus-visible {
    box-shadow: `).concat(n("breadcrumb.item.focus.ring.shadow"),`;
    outline: `).concat(n("breadcrumb.item.focus.ring.width")," ").concat(n("breadcrumb.item.focus.ring.style")," ").concat(n("breadcrumb.item.focus.ring.color"),`;
    outline-offset: `).concat(n("breadcrumb.item.focus.ring.offset"),`;
}

.p-organizationchart-node-toggle-button-icon {
    position: relative;
    top: 1px;
}

.p-organizationchart-connector-down {
    margin: 0 auto;
    height: `).concat(n("organizationchart.connector.height"),`;
    width: 1px;
    background: `).concat(n("organizationchart.connector.color"),`;
}

.p-organizationchart-connector-right {
    border-radius: 0;
}

.p-organizationchart-connector-left {
    border-radius: 0;
    border-right: 1px solid `).concat(n("organizationchart.connector.color"),`;
}

.p-organizationchart-connector-top {
    border-top: 1px solid `).concat(n("organizationchart.connector.color"),`;
}

.p-organizationchart-node-selectable {
    cursor: pointer;
}

.p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-left) {
    border-right: 0 none;
}

.p-organizationchart-connectors :nth-last-child(1 of .p-organizationchart-connector-left) {
    border-top-right-radius: `).concat(n("organizationchart.connector.border.radius"),`;
}

.p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-right) {
    border-left: 1px solid `).concat(n("organizationchart.connector.color"),`;
    border-top-left-radius: `).concat(n("organizationchart.connector.border.radius"),`;
}
`)},B={root:"p-organizationchart p-component",table:"p-organizationchart-table",node:function(o){var n=o.instance;return["p-organizationchart-node",{"p-organizationchart-node-selectable":n.selectable,"p-organizationchart-node-selected":n.selected}]},nodeToggleButton:"p-organizationchart-node-toggle-button",nodeToggleButtonIcon:"p-organizationchart-node-toggle-button-icon",connectors:"p-organizationchart-connectors",connectorDown:"p-organizationchart-connector-down",connectorLeft:function(o){var n=o.index;return["p-organizationchart-connector-left",{"p-organizationchart-connector-top":n!==0}]},connectorRight:function(o){var n=o.props,a=o.index;return["p-organizationchart-connector-right",{"p-organizationchart-connector-top":a!==n.node.children.length-1}]},nodeChildren:"p-organizationchart-node-children"},D=T.extend({name:"organizationchart",theme:j,classes:B}),M={name:"BaseOrganizationChart",extends:N,props:{value:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},collapsible:{type:Boolean,default:!1},collapsedKeys:{type:null,default:null}},style:D,provide:function(){return{$pcOrganizationChart:this,$parentInstance:this}}},w={name:"OrganizationChartNode",hostName:"OrganizationChart",extends:N,emits:["node-click","node-toggle"],props:{node:{type:null,default:null},templates:{type:null,default:null},collapsible:{type:Boolean,default:!1},collapsedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null}},methods:{getPTOptions:function(o){return this.ptm(o,{context:{expanded:this.expanded,selectable:this.selectable,selected:this.selected,toggleable:this.toggleable,active:this.selected}})},getNodeOptions:function(o,n){return this.ptm(n,{context:{lineTop:o}})},onNodeClick:function(o){m(o.target,"data-pc-section","nodetogglebutton")||m(o.target,"data-pc-section","nodetogglebuttonicon")||this.selectionMode&&this.$emit("node-click",this.node)},onChildNodeClick:function(o){this.$emit("node-click",o)},toggleNode:function(){this.$emit("node-toggle",this.node)},onChildNodeToggle:function(o){this.$emit("node-toggle",o)},onKeydown:function(o){(o.code==="Enter"||o.code==="NumpadEnter"||o.code==="Space")&&(this.toggleNode(),o.preventDefault())}},computed:{leaf:function(){return this.node.leaf===!1?!1:!(this.node.children&&this.node.children.length)},colspan:function(){return this.node.children&&this.node.children.length?this.node.children.length*2:null},childStyle:function(){return{visibility:!this.leaf&&this.expanded?"inherit":"hidden"}},expanded:function(){return this.collapsedKeys[this.node.key]===void 0},selectable:function(){return this.selectionMode&&this.node.selectable!==!1},selected:function(){return this.selectable&&this.selectionKeys&&this.selectionKeys[this.node.key]===!0},toggleable:function(){return this.collapsible&&this.node.collapsible!==!1&&!this.leaf}},components:{ChevronDownIcon:P,ChevronUpIcon:S}},I=["colspan"],E=["colspan"],L=["colspan"];function R(e,o,n,a,s,t){var p=K("OrganizationChartNode",!0);return i(),l("table",r({class:e.cx("table")},e.ptm("table")),[c("tbody",z(x(e.ptm("body"))),[n.node?(i(),l("tr",z(r({key:0},e.ptm("row"))),[c("td",r({colspan:t.colspan},e.ptm("cell")),[c("div",r({class:[e.cx("node"),n.node.styleClass],onClick:o[2]||(o[2]=function(){return t.onNodeClick&&t.onNodeClick.apply(t,arguments)})},t.getPTOptions("node")),[(i(),b(f(n.templates[n.node.type]||n.templates.default),{node:n.node},null,8,["node"])),t.toggleable?(i(),l("a",r({key:0,tabindex:"0",class:e.cx("nodeToggleButton"),onClick:o[0]||(o[0]=function(){return t.toggleNode&&t.toggleNode.apply(t,arguments)}),onKeydown:o[1]||(o[1]=function(){return t.onKeydown&&t.onKeydown.apply(t,arguments)})},t.getPTOptions("nodeToggleButton")),[n.templates.toggleicon||n.templates.togglericon?(i(),b(f(n.templates.toggleicon||n.templates.togglericon),r({key:0,expanded:t.expanded,class:e.cx("nodeToggleButtonIcon")},t.getPTOptions("nodeToggleButtonIcon")),null,16,["expanded","class"])):(i(),b(f(t.expanded?"ChevronDownIcon":"ChevronUpIcon"),r({key:1,class:e.cx("nodeToggleButtonIcon")},t.getPTOptions("nodeToggleButtonIcon")),null,16,["class"]))],16)):h("",!0)],16)],16,I)],16)):h("",!0),c("tr",r({style:t.childStyle,class:e.cx("connectors")},e.ptm("connectors")),[c("td",r({colspan:t.colspan},e.ptm("lineCell")),[c("div",r({class:e.cx("connectorDown")},e.ptm("connectorDown")),null,16)],16,E)],16),c("tr",r({style:t.childStyle,class:e.cx("connectors")},e.ptm("connectors")),[n.node.children&&n.node.children.length===1?(i(),l("td",r({key:0,colspan:t.colspan},e.ptm("lineCell")),[c("div",r({class:e.cx("connectorDown")},e.ptm("connectorDown")),null,16)],16,L)):h("",!0),n.node.children&&n.node.children.length>1?(i(!0),l(y,{key:1},v(n.node.children,function(g,u){return i(),l(y,{key:g.key},[c("td",r({class:e.cx("connectorLeft",{index:u}),ref_for:!0},t.getNodeOptions(u!==0,"connectorLeft"))," ",16),c("td",r({class:e.cx("connectorRight",{index:u}),ref_for:!0},t.getNodeOptions(u!==n.node.children.length-1,"connectorRight"))," ",16)],64)}),128)):h("",!0)],16),c("tr",r({style:t.childStyle,class:e.cx("nodeChildren")},e.ptm("nodeChildren")),[(i(!0),l(y,null,v(n.node.children,function(g){return i(),l("td",r({key:g.key,colspan:"2",ref_for:!0},e.ptm("nodeCell")),[O(p,{node:g,templates:n.templates,collapsedKeys:n.collapsedKeys,onNodeToggle:t.onChildNodeToggle,collapsible:n.collapsible,selectionMode:n.selectionMode,selectionKeys:n.selectionKeys,onNodeClick:t.onChildNodeClick,pt:e.pt,unstyled:e.unstyled},null,8,["node","templates","collapsedKeys","onNodeToggle","collapsible","selectionMode","selectionKeys","onNodeClick","pt","unstyled"])],16)}),128))],16)],16)],16)}w.render=R;function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},d(e)}function k(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,a)}return n}function C(e){for(var o=1;o<arguments.length;o++){var n=arguments[o]!=null?arguments[o]:{};o%2?k(Object(n),!0).forEach(function(a){V(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function V(e,o,n){return(o=q(o))in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function q(e){var o=A(e,"string");return d(o)=="symbol"?o:o+""}function A(e,o){if(d(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,o||"default");if(d(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(e)}var F={name:"OrganizationChart",extends:M,inheritAttrs:!1,emits:["node-unselect","node-select","update:selectionKeys","node-expand","node-collapse","update:collapsedKeys"],data:function(){return{d_collapsedKeys:this.collapsedKeys||{}}},watch:{collapsedKeys:function(o){this.d_collapsedKeys=o}},methods:{onNodeClick:function(o){var n=o.key;if(this.selectionMode){var a=this.selectionKeys?C({},this.selectionKeys):{};a[n]?(delete a[n],this.$emit("node-unselect",o)):(this.selectionMode==="single"&&(a={}),a[n]=!0,this.$emit("node-select",o)),this.$emit("update:selectionKeys",a)}},onNodeToggle:function(o){var n=o.key;this.d_collapsedKeys[n]?(delete this.d_collapsedKeys[n],this.$emit("node-expand",o)):(this.d_collapsedKeys[n]=!0,this.$emit("node-collapse",o)),this.d_collapsedKeys=C({},this.d_collapsedKeys),this.$emit("update:collapsedKeys",this.d_collapsedKeys)}},components:{OrganizationChartNode:w}};function U(e,o,n,a,s,t){var p=K("OrganizationChartNode");return i(),l("div",r({class:e.cx("root")},e.ptmi("root")),[O(p,{node:e.value,templates:e.$slots,onNodeToggle:t.onNodeToggle,collapsedKeys:s.d_collapsedKeys,collapsible:e.collapsible,onNodeClick:t.onNodeClick,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,pt:e.pt,unstyled:e.unstyled},null,8,["node","templates","onNodeToggle","collapsedKeys","collapsible","onNodeClick","selectionMode","selectionKeys","pt","unstyled"])],16)}F.render=U;export{F as s};

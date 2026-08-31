import{$c as C,Bc as E,Cb as s,Cc as X,Da as g,Dc as B,Ea as ie,Fb as k,Ga as M,Gb as J,Ha as _,I as x,Ia as D,J as ne,K as oe,M as N,Na as b,O as r,Oa as ae,Pa as re,Qa as z,Qc as ge,Ra as Q,Sa as c,Ta as p,Ua as m,Uc as L,V as w,Va as F,Wb as me,Xc as he,Ya as ce,Yb as fe,Yc as q,Za as G,Zb as S,Zc as K,_ as U,_a as W,_c as l,a as I,ad as ve,bd as be,cb as Z,cd as ye,da as te,db as u,dd as _e,eb as H,fb as O,fd as Ae,ga as v,gb as de,ib as se,id as j,jb as le,lb as pe,ob as f,pb as A,qb as V,sa as d,vb as T,xb as ue}from"./chunk-WMBT4374.js";var Fe=["data-p-icon","chevron-up"],xe=(()=>{class n extends ve{static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(n)))(o||n)}})();static \u0275cmp=g({type:n,selectors:[["","data-p-icon","chevron-up"]],features:[_],attrs:Fe,decls:1,vars:0,consts:[["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(t,o){t&1&&(w(),ce(0,"path",0))},encapsulation:2})}return n})();var De=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`;var R=["*"],He=["toggleicon"],Oe=n=>({active:n});function Te(n,a){}function ke(n,a){n&1&&D(0,Te,0,0,"ng-template")}function Se(n,a){if(n&1&&D(0,ke,1,0,null,0),n&2){let e=u();c("ngTemplateOutlet",e.toggleicon)("ngTemplateOutletContext",ue(2,Oe,e.active()))}}function Be(n,a){if(n&1&&F(0,"span",4),n&2){let e=u(3);f(e.cn(e.cx("toggleicon"),e.pcAccordion.collapseIcon)),c("pBind",e.ptm("toggleicon")),b("aria-hidden",!0)}}function qe(n,a){if(n&1&&(w(),F(0,"svg",5)),n&2){let e=u(3);f(e.cx("toggleicon")),c("pBind",e.ptm("toggleicon")),b("aria-hidden",!0)}}function Ke(n,a){if(n&1&&(G(0),D(1,Be,1,4,"span",2)(2,qe,1,4,"svg",3),W()),n&2){let e=u(2);d(),c("ngIf",e.pcAccordion.collapseIcon),d(),c("ngIf",!e.pcAccordion.collapseIcon)}}function $e(n,a){if(n&1&&F(0,"span",4),n&2){let e=u(3);f(e.cn(e.cx("toggleicon"),e.pcAccordion.expandIcon)),c("pBind",e.ptm("toggleicon")),b("aria-hidden",!0)}}function Ve(n,a){if(n&1&&(w(),F(0,"svg",7)),n&2){let e=u(3);c("pBind",e.ptm("toggleicon")),b("aria-hidden",!0)}}function Le(n,a){if(n&1&&(G(0),D(1,$e,1,4,"span",2)(2,Ve,1,2,"svg",6),W()),n&2){let e=u(2);d(),c("ngIf",e.pcAccordion.expandIcon),d(),c("ngIf",!e.pcAccordion.expandIcon)}}function je(n,a){if(n&1&&D(0,Ke,3,2,"ng-container",1)(1,Le,3,2,"ng-container",1),n&2){let e=u();c("ngIf",e.active()),d(),c("ngIf",!e.active())}}var Re=`
${De}

/* For PrimeNG */
.p-accordionheader-toggle-icon.icon-start {
    order: -1;
}

.p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
    justify-content: flex-start;
    gap: dt('accordion.header.padding');
}

.p-accordionheader.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-accordioncontent .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`,Ue={root:"p-accordion p-component",panel:({instance:n})=>["p-accordionpanel",{"p-accordionpanel-active":n.active(),"p-disabled":n.disabled()}],header:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon",contentContainer:"p-accordioncontent",contentWrapper:"p-accordioncontent-wrapper",content:"p-accordioncontent-content"},y=(()=>{class n extends he{name="accordion";style=Re;classes=Ue;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(n)))(o||n)}})();static \u0275prov=ne({token:n,factory:n.\u0275fac})}return n})();var Ee=new N("ACCORDION_PANEL_INSTANCE"),Pe=new N("ACCORDION_HEADER_INSTANCE"),Ie=new N("ACCORDION_CONTENT_INSTANCE"),Ne=new N("ACCORDION_INSTANCE"),$=(()=>{class n extends K{$pcAccordionPanel=r(Ee,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(l,{self:!0});componentName="AccordionPanel";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=r(x(()=>P));value=J(void 0);disabled=k(!1,{transform:e=>j(e)});active=s(()=>this.pcAccordion.multiple()?this.valueEquals(this.pcAccordion.value(),this.value()):this.pcAccordion.value()===this.value());valueEquals(e,t){return Array.isArray(e)?e.includes(t):e===t}_componentStyle=r(y);static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(n)))(o||n)}})();static \u0275cmp=g({type:n,selectors:[["p-accordion-panel"],["p-accordionpanel"]],hostVars:4,hostBindings:function(t,o){t&2&&(b("data-p-disabled",o.disabled())("data-p-active",o.active()),f(o.cx("panel")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[T([y,{provide:Ee,useExisting:n},{provide:q,useExisting:n}]),M([l]),_],ngContentSelectors:R,decls:1,vars:0,template:function(t,o){t&1&&(H(),O(0))},dependencies:[S,C],encapsulation:2,changeDetection:0})}return n})(),Y=(()=>{class n extends K{$pcAccordionHeader=r(Pe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(l,{self:!0});componentName="AccordionHeader";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=r(x(()=>P));pcAccordionPanel=r(x(()=>$));id=s(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);active=s(()=>this.pcAccordionPanel.active());disabled=s(()=>this.pcAccordionPanel.disabled());ariaControls=s(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);toggleicon;onClick(e){if(this.disabled())return;let t=this.active();this.changeActiveValue();let o=this.active(),i=this.pcAccordionPanel.value();!t&&o?this.pcAccordion.onOpen.emit({originalEvent:e,index:i}):t&&!o&&this.pcAccordion.onClose.emit({originalEvent:e,index:i})}onFocus(){!this.disabled()&&this.pcAccordion.selectOnFocus()&&this.changeActiveValue()}onKeydown(e){switch(e.code){case"ArrowDown":this.arrowDownKey(e);break;case"ArrowUp":this.arrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"Space":case"NumpadEnter":this.onEnterKey(e);break;default:break}}_componentStyle=r(y);changeActiveValue(){this.pcAccordion.updateValue(this.pcAccordionPanel.value())}findPanel(e){return e?.closest('[data-pc-name="accordionpanel"]')}findHeader(e){return E(e,'[data-pc-name="accordionheader"]')}findNextPanel(e,t=!1){let o=t?e:e.nextElementSibling;return o?B(o,"data-p-disabled")?this.findNextPanel(o):this.findHeader(o):null}findPrevPanel(e,t=!1){let o=t?e:e.previousElementSibling;return o?B(o,"data-p-disabled")?this.findPrevPanel(o):this.findHeader(o):null}findFirstPanel(){return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild,!0)}findLastPanel(){return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild,!0)}changeFocusedPanel(e,t){X(t)}arrowDownKey(e){let t=this.findNextPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onHomeKey(e),e.preventDefault()}arrowUpKey(e){let t=this.findPrevPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let t=this.findFirstPanel();this.changeFocusedPanel(e,t),e.preventDefault()}onEndKey(e){let t=this.findLastPanel();this.changeFocusedPanel(e,t),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}get dataP(){return this.cn({active:this.active()})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(n)))(o||n)}})();static \u0275cmp=g({type:n,selectors:[["p-accordion-header"],["p-accordionheader"]],contentQueries:function(t,o,i){if(t&1&&de(i,He,5),t&2){let h;se(h=le())&&(o.toggleicon=h.first)}},hostVars:13,hostBindings:function(t,o){t&1&&Z("click",function(h){return o.onClick(h)})("focus",function(){return o.onFocus()})("keydown",function(h){return o.onKeydown(h)}),t&2&&(b("id",o.id())("aria-expanded",o.active())("aria-controls",o.ariaControls())("aria-disabled",o.disabled())("role","button")("tabindex",o.disabled()?"-1":"0")("data-p-active",o.active())("data-p-disabled",o.disabled())("data-p",o.dataP),f(o.cx("header")),pe("user-select","none"))},features:[T([y,{provide:Pe,useExisting:n},{provide:q,useExisting:n}]),M([ye,l]),_],ngContentSelectors:R,decls:3,vars:1,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],["data-p-icon","chevron-up",3,"class","pBind",4,"ngIf"],[3,"pBind"],["data-p-icon","chevron-up",3,"pBind"],["data-p-icon","chevron-down",3,"pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"pBind"]],template:function(t,o){t&1&&(H(),O(0),ae(1,Se,1,4)(2,je,2,2)),t&2&&(d(),re(o.toggleicon?1:2))},dependencies:[S,me,fe,be,xe,C,l],encapsulation:2,changeDetection:0})}return n})(),ee=(()=>{class n extends K{$pcAccordionContent=r(Ie,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(l,{self:!0});componentName="AccordionContent";onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}pcAccordion=r(x(()=>P));pcAccordionPanel=r(x(()=>$));active=s(()=>this.pcAccordionPanel.active());ariaLabelledby=s(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);id=s(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);_componentStyle=r(y);ptParams=s(()=>({context:this.active()}));computedMotionOptions=s(()=>I(I({},this.ptm("motion",this.ptParams())),this.pcAccordion.computedMotionOptions()));static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(n)))(o||n)}})();static \u0275cmp=g({type:n,selectors:[["p-accordion-content"],["p-accordioncontent"]],hostVars:6,hostBindings:function(t,o){t&2&&(b("id",o.id())("role","region")("data-p-active",o.active())("aria-labelledby",o.ariaLabelledby()),f(o.cx("contentContainer")))},features:[T([y,{provide:Ie,useExisting:n},{provide:q,useExisting:n}]),M([l]),_],ngContentSelectors:R,decls:4,vars:10,consts:[["name","p-collapsible","hideStrategy","visibility",3,"visible","mountOnEnter","unmountOnLeave","options"],[3,"pBind"]],template:function(t,o){t&1&&(H(),p(0,"p-motion",0)(1,"div",1)(2,"div",1),O(3),m()()()),t&2&&(c("visible",o.active())("mountOnEnter",!1)("unmountOnLeave",!1)("options",o.computedMotionOptions()),d(),f(o.cx("contentWrapper")),c("pBind",o.ptm("contentWrapper",o.ptParams())),d(),f(o.cx("content")),c("pBind",o.ptm("content",o.ptParams())))},dependencies:[S,C,l,Ae,_e],encapsulation:2,changeDetection:0})}return n})(),P=(()=>{class n extends K{componentName="Accordion";$pcAccordion=r(Ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(l,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}value=J(void 0);multiple=k(!1,{transform:e=>j(e)});styleClass;expandIcon;collapseIcon;selectOnFocus=k(!1,{transform:e=>j(e)});transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";motionOptions=k(void 0);computedMotionOptions=s(()=>I(I({},this.ptm("motion")),this.motionOptions()));onClose=new U;onOpen=new U;id=te(ge("pn_id_"));_componentStyle=r(y);onKeydown(e){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":e.shiftKey||this.onTabHomeKey(e);break;case"End":e.shiftKey||this.onTabEndKey(e);break}}onTabArrowDownKey(e){let t=this.findNextHeaderAction(e.target.parentElement);t?this.changeFocusedTab(t):this.onTabHomeKey(e),e.preventDefault()}onTabArrowUpKey(e){let t=this.findPrevHeaderAction(e.target.parentElement);t?this.changeFocusedTab(t):this.onTabEndKey(e),e.preventDefault()}onTabHomeKey(e){let t=this.findFirstHeaderAction();this.changeFocusedTab(t),e.preventDefault()}changeFocusedTab(e){e&&X(e)}findNextHeaderAction(e,t=!1){let o=t?e:e.nextElementSibling,i=E(o,'[data-pc-section="accordionheader"]');return i?B(i,"data-p-disabled")?this.findNextHeaderAction(i.parentElement):E(i.parentElement,'[data-pc-section="accordionheader"]'):null}findPrevHeaderAction(e,t=!1){let o=t?e:e.previousElementSibling,i=E(o,'[data-pc-section="accordionheader"]');return i?B(i,"data-p-disabled")?this.findPrevHeaderAction(i.parentElement):E(i.parentElement,'[data-pc-section="accordionheader"]'):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild;return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.lastElementChild;return this.findPrevHeaderAction(e,!0)}onTabEndKey(e){let t=this.findLastHeaderAction();this.changeFocusedTab(t),e.preventDefault()}getBlockableElement(){return this.el.nativeElement.children[0]}updateValue(e){let t=this.value();if(this.multiple()){let o=Array.isArray(t)?[...t]:[],i=o.indexOf(e);i!==-1?o.splice(i,1):o.push(e),this.value.set(o)}else t===e?this.value.set(void 0):this.value.set(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(n)))(o||n)}})();static \u0275cmp=g({type:n,selectors:[["p-accordion"]],hostVars:2,hostBindings:function(t,o){t&1&&Z("keydown",function(h){return o.onKeydown(h)}),t&2&&f(o.cn(o.cx("root"),o.styleClass))},inputs:{value:[1,"value"],multiple:[1,"multiple"],styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",selectOnFocus:[1,"selectOnFocus"],transitionOptions:"transitionOptions",motionOptions:[1,"motionOptions"]},outputs:{value:"valueChange",onClose:"onClose",onOpen:"onOpen"},features:[T([y,{provide:Ne,useExisting:n},{provide:q,useExisting:n}]),M([l]),_],ngContentSelectors:R,decls:1,vars:0,template:function(t,o){t&1&&(H(),O(0))},dependencies:[S,L,C],encapsulation:2,changeDetection:0})}return n})(),we=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ie({type:n});static \u0275inj=oe({imports:[P,L,$,Y,ee,C,L,C]})}return n})();var Qe=(n,a)=>a.title,Ge=(n,a)=>a.q;function We(n,a){if(n&1&&(p(0,"p-accordion-panel",5)(1,"p-accordion-header"),A(2),m(),p(3,"p-accordion-content")(4,"p"),A(5),m()()()),n&2){let e=a.$implicit,t=a.$index,o=u().$index;c("value",o+"-"+t),d(2),V(e.q),d(3),V(e.a)}}function Ze(n,a){if(n&1&&(p(0,"div",3)(1,"h2"),A(2),m(),p(3,"p-accordion",4),z(4,We,6,3,"p-accordion-panel",5,Ge),m()()),n&2){let e=a.$implicit;d(2),V(e.title),d(),c("multiple",!0),d(),Q(e.items)}}var Me=class n{faqCategories=[{title:"Para Inquilinos (Funcionarios)",items:[{q:"\xBFQu\xE9 documentaci\xF3n necesito para alquilar?",a:"\xDAnicamente tu DNI y el documento de nombramiento oficial o toma de posesi\xF3n de la plaza en la localidad de destino."},{q:"\xBFCu\xE1nto dura el contrato?",a:"Se firman contratos de arrendamiento de temporada (Ley de Arrendamientos Urbanos), adaptados exactamente a la duraci\xF3n de tu curso escolar, residencia m\xE9dica o nombramiento temporal (generalmente de 9 a 11 meses)."},{q:"\xBFTengo que pagar comisiones de agencia?",a:"No. Nuestra plataforma cobra una tarifa de gesti\xF3n operativa plana e inferior a una mensualidad, transparente desde el primer momento."}]},{title:"Para Propietarios",items:[{q:"\xBFQu\xE9 garant\xEDas de cobro tengo?",a:"Total. Al tratarse de funcionarios p\xFAblicos, el riesgo de impago es pr\xE1cticamente nulo. Aun as\xED, todos los contratos incluyen un seguro de impago y actos vand\xE1licos sin coste adicional para ti."},{q:"\xBFTengo que ense\xF1ar el piso yo mismo?",a:"No es necesario. Puedes subir fotos y v\xEDdeos detallados. El perfil del funcionario desplazado suele alquilar de forma remota antes de llegar a la ciudad."},{q:"\xBFQu\xE9 pasa si el inquilino se va antes de tiempo?",a:"El contrato de temporada estipula penalizaciones por incumplimiento anticipado, protegiendo tu rentabilidad acordada."}]}];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-faqs"]],decls:11,vars:0,consts:[[1,"page-layout"],[1,"page-header"],[1,"faq-container"],[1,"faq-category"],[3,"multiple"],[3,"value"]],template:function(e,t){e&1&&(p(0,"main",0)(1,"header",1)(2,"h1"),A(3,"Preguntas "),p(4,"span"),A(5,"frecuentes"),m()(),p(6,"p"),A(7,"Resolvemos tus dudas sobre el alquiler temporal para empleados p\xFAblicos."),m()(),p(8,"div",2),z(9,Ze,6,2,"div",3,Qe),m()()),e&2&&(d(9),Q(t.faqCategories))},dependencies:[we,P,$,Y,ee],styles:[".page-layout[_ngcontent-%COMP%]{max-width:800px;margin:0 auto;padding:4rem 2rem}.page-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:4rem}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;color:var(--c-text-main);margin-bottom:1rem}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--dusty-taupe)}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;color:var(--c-text-muted)}.faq-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3rem}.faq-category[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem;color:var(--c-primary);margin-bottom:1.5rem;padding-bottom:.5rem;border-bottom:2px solid var(--almond-cream)}  .p-accordionpanel{margin-bottom:.75rem;border:1px solid var(--c-border-light)!important;border-radius:8px!important;overflow:hidden;background-color:var(--snow)!important}  .p-accordionheader{background-color:var(--snow)!important;color:var(--c-text-main)!important;font-weight:600;padding:1.25rem!important;transition:background-color .2s ease}  .p-accordionheader:hover{background-color:var(--almond-cream)!important}  .p-accordionpanel-active .p-accordionheader{background-color:var(--almond-cream)!important;color:var(--c-primary)!important}  .p-accordioncontent-content{background-color:var(--snow)!important;color:var(--c-text-muted)!important;line-height:1.6;padding:1.25rem!important;border-top:1px solid var(--c-border-light)}  .p-accordioncontent-content p{margin:0}"]})};export{Me as Faqs};

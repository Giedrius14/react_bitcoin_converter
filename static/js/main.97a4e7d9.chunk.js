(this.webpackJsonpreact_bitcoin_converter=this.webpackJsonpreact_bitcoin_converter||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(11),i=n.n(a),o=(n(96),n(76)),s=n(63),u=n.n(s),l=n(69),d=n(59),j=n(45),C=n.n(j),v=n(147),b=n(152),p=n(154),m=n(150),f=n(155),_=n(70),x=n(46),O=n.n(x),h=n(141),y=n(151),P=n(145),g=n(146),B=n(75),N=n.n(B),S=n(62),A=n(77),k=n(8),w=function(e){var t=e.currency,n=e.onClick,c=e.value;return Object(k.jsxs)(h.a,{className:O.a.PriceCardComponent,"data-testid":"PriceCardComponent",children:[Object(k.jsx)(y.a,{avatar:Object(k.jsxs)("div",{className:O.a.cardAvatar,children:[Object(k.jsx)("img",{src:"https://static.coindesk.com/static/svgs/".concat(t.toLowerCase(),".svg"),className:O.a.flag,alt:"flag"}),Object(k.jsx)("div",{className:O.a.cardTitle,children:t})]}),action:Object(k.jsx)(P.a,{"aria-label":"Remove currency","data-testid":"remove-currency-btn",onClick:n,children:Object(k.jsx)(N.a,{})})}),Object(k.jsx)(g.a,{children:Object(k.jsx)("div",{className:O.a.currencyValue,children:Object(k.jsx)(S.a,{locale:"en",children:Object(k.jsx)(A.a,{value:c,style:"currency",currency:t})})})})]})},T=function(){var e=Object(c.useState)(1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),i=Object(d.a)(a,2),s=i[0],j=i[1],x=Object(c.useState)(["USD","EUR","GBP"]),O=Object(d.a)(x,2),h=O[0],y=O[1],P=isNaN(n),g=3!==h.length;Object(c.useEffect)((function(){var e;function t(){return n.apply(this,arguments)}function n(){return(n=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coindesk.com/v1/bpi/currentprice.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,j(n.bpi);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return t(),e=Object(_.setInterval)((function(){t()}),6e4),function(){return clearInterval(e)}}),[]);var B=function(e){return P?0:s[e].rate_float*n};return Object(k.jsxs)("div",{className:C.a.BitcoinConverterComponent,"data-testid":"BitcoinConverterComponent",children:[Object(k.jsxs)("div",{className:C.a.inputContainer,children:[Object(k.jsx)(v.a,{className:C.a.bitcoinAmount,children:Object(k.jsx)(b.a,{id:"bitcoin-input-field",label:"Bitcoin amount",value:n,onChange:function(e){r(e.target.value)},error:P,helperText:P&&"Please enter numeric values only"})}),g&&Object(k.jsxs)(v.a,{className:C.a.currencySelector,children:[Object(k.jsx)(p.a,{id:"currency-select-label",children:"Add Currency"}),Object(k.jsx)(m.a,{onChange:function(e){y([].concat(Object(o.a)(h),[e.target.value]))},inputProps:{"data-testid":"currency-select-dropdown"},defaultValue:"",children:[{value:"USD",text:"USD"},{value:"EUR",text:"EUR"},{value:"GBP",text:"GPB"}].map((function(e,t){return Object(k.jsx)(f.a,{value:e.value,disabled:h.includes(e.value),children:e.text},t)}))})]})]}),Object(k.jsx)("div",{className:C.a.currencyCardContainer,children:s&&h.map((function(e,t){return Object(k.jsx)(w,{currency:e,onClick:function(){return t=e,void y(h.filter((function(e){return e!==t})));var t},value:B(e)},t)}))})]})};var U=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(T,{})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,156)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(U,{})}),document.getElementById("root")),E()},45:function(e,t,n){e.exports={BitcoinConverterComponent:"BitcoinConverterComponent_BitcoinConverterComponent__2HPPF",inputContainer:"BitcoinConverterComponent_inputContainer__2H_Q1",bitcoinAmount:"BitcoinConverterComponent_bitcoinAmount__3syJZ",currencySelector:"BitcoinConverterComponent_currencySelector__1fTR4",currencyCardContainer:"BitcoinConverterComponent_currencyCardContainer__2wAUy"}},46:function(e,t,n){e.exports={PriceCardComponent:"PriceCardComponent_PriceCardComponent__1w0ue",cardAvatar:"PriceCardComponent_cardAvatar__3aqMz",cardTitle:"PriceCardComponent_cardTitle__6-am3",currencyValue:"PriceCardComponent_currencyValue__1PfTS",flag:"PriceCardComponent_flag__1JtYp"}},96:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.97a4e7d9.chunk.js.map
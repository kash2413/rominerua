(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Tgq0:function(e,t,n){"use strict";var a=n("pneb"),i=n("ysci"),r=n.n(i),s=n("ERkP"),c=n.n(s),o=n("O94r"),u=n.n(o),d=c.a.createElement;var m=function(e){var t=e.heading;return d("div",{className:"feed__heading"},d("div",{className:"feed__heading-title"},t))},p=n("dc6l"),l=(n("Cw0b"),c.a.createElement);t.a=function(e){var t=e.className,n=e.items,i=e.heading,s=e.mediaSizes,o=e.dataSourceAlgorithm,d=e.dataSourceAlgorithmVersion,f=e.dataSourceName,h=e.subunitName,g=void 0===h?"":h,x=e.unitName,_=e.unitType,b={mediaSizes:s,dataSourceAlgorithm:o,dataSourceAlgorithmVersion:d,dataSourceName:f,subunitName:g,unitName:x,unitType:_},v=n&&r()(n)?l(c.a.Fragment,null,n.map(function(e){return l(p.a,Object(a.a)({key:e.id,item:e},b,{positionInUnit:g?0:e.position,positionInSubunit:g?e.position:null}))})):null;return l("section",{className:u()(t,"feed")},i&&l(m,{heading:i}),l("div",{className:"feed__items"},v))}},VfPa:function(e,t){e.exports="https://tasty.co/static-assets/tasty-ui/_next/static/img/tasty_loading_donut.ce38764e36a59e88a443e14a4af07a87.gif"},cMU6:function(e,t,n){"use strict";n.r(t);var a=n("TPw6"),i=n.n(a),r=n("k9sC"),s=n.n(r),c=n("yP/C"),o=n("CLPb"),u=n("ERkP"),d=n.n(u),m=n("5YEC"),p=n("jvFD"),l=n.n(p),f=n("AmVM"),h=n("JoBU"),g=n("K2uR"),x=(n("ICOJ"),n("Cw0b"),d.a.createElement);var _=function(e){var t=e.item,n=Object(u.useContext)(f.b),a={item_name:"".concat(t.id),item_type:"splash",position_in_subunit:null,position_in_unit:0,subunit_name:"",subunit_type:"",target_content_id:"".concat(t.id),target_content_type:t.type,unit_type:"feed",unit_name:"main"};return x(l.a,{as:"/".concat(t.type,"/").concat(t.slug),href:"/".concat(t.type,"/[slug]"),prefetch:!1},x("a",{className:"featured-item xs-block",onClick:function(){h.a.trackInternalLink({eventInfo:a,pageInfo:n})}},x("div",{className:"featured-item__header sm-hide extra-bold xs-text-2"},"What We're Loving Now"),x("div",{className:"sm-mb2 xs-px2"},x("div",{className:"xs-col-12 xs-mx-auto md-mt0 sm-pb4 xs-flex xs-flex-align-end sm-flex-align-center"},x("div",{className:"featured-item__title-wrapper xs-py2 xs-col-11 sm-col-7 xs-absolute"},x("p",{className:"featured-item__header xs-hide sm-inline-block xs-text-2 extra-bold"},"What We're Loving Now"),x("h1",{className:"featured-item__title extra-bold xs-mx2"},x("span",{className:"highlight"},t.name)),t.brand_id&&x("h4",{className:"branded--title highlight extra-bold xs-inline-block xs-py1 xs-mt1 xs-ml2 xs-text-5 sm-text-4"},"Presented by ",t.brand_name)),x("div",{className:"featured-item__img-wrapper xs-col-12 sm-col-6 md-col-6 lg-col-5 xs-overflow-hidden"},x("div",{className:"featured-item__aspect-ratio-wrapper ".concat("16:9"===t.aspect_ratio?"image-16-9":""," xs-relative")},x(g.a,{alt:t.name,className:"featured-item__img",src:t.thumb_standard,srcSet:"".concat(t.thumb_standard," 300w, ").concat(t.thumb_big," 600w, ").concat(t.thumb_dblbig," 900w"),sizes:"(min-width: 52rem) 480px, (min-width: 40rem) 392px, 100vw"})))))))},b=n("Tgq0"),v=n("wDhe"),y=n("2Oi3"),w=n("nchL"),N=n("+HLP"),k=n("VfPa"),O=n.n(k),j=n("iplb"),E=n("v0uu");n("kxKB");n.d(t,"Home",function(){return C});var F=d.a.createElement,S=20;function C(e){var t=Object(u.useState)(0),n=t[0],a=t[1],i=Object(u.useState)([]),r=i[0],p=i[1],l=Object(u.useState)(!1),f=l[0],h=l[1],g=e.recentFeed,x=e.trendingFeed,N=e.featuredItem,k=F(_,{item:N}),E=[],C=[].concat(Object(o.a)(x),Object(o.a)(g),Object(o.a)(r));Object(j.a)({feedLength:C.length,pageType:"home"}).forEach(function(e,t){if("feed"===e.type){var n="recent_recipes",a="",i="";0===t&&(a=x.length>0?"Trending Recipes":"Recent Recipes"),x.length>0&&(0!==t&&2!==t||(n="trending_recipes"),3===t&&(a="Recent Recipes",i="feed__container--secondary")),E.push(F("div",{className:"feed__container ".concat(i),key:"feed-".concat(t)},F(b.a,{items:C.slice(e.start,e.end),heading:a,subunitName:n,unitName:"main",unitType:"feed"})))}else"ad"===e.type&&(E.push(F(y.a,{type:e.xs,key:"".concat(e.xs,"-").concat(t)})),E.push(F(y.a,{type:e.md,key:"".concat(e.md,"-").concat(t)})),E.push(F(y.a,{type:e.lg,key:"".concat(e.lg,"-").concat(t)})))});var I=function(){var e=Object(c.a)(s.a.mark(function e(){var t,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=(n+1)*S-x.length,e.prev=1,e.next=4,m.a.fetchRecentFoodFeed({from:t,includeFeatured:!1,size:S});case 4:i=e.sent,p([].concat(Object(o.a)(r),Object(o.a)(i.items))),a(n+1);case 7:return e.prev=7,h(!1),e.finish(7);case 10:case"end":return e.stop()}},e,null,[[1,,7,10]])}));return function(){return e.apply(this,arguments)}}();return F(d.a.Fragment,null,F("div",{className:"home-page content-wrap content-container xs-flex-grow-1 clearfix xs-mx-auto xs-col-12",id:"content"},F(w.a,null),k,F(y.a,{type:"promo1-bp",targeting:{},className:"md-hide"}),E,f&&F("div",{className:"feed-loading loading-donut xs-text-center"},F("img",{alt:"loading...",src:O.a})),!f&&F("div",{className:"xs-pb2 xs-px2 xs-mt2"},F(v.a,{action:function(){h(!0),I()}}))))}C.getInitialProps=Object(c.a)(s.a.mark(function e(){var t,n,a,r,c,o,u,d,p;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],a=E.CDN_MAX_AGE_SECONDS.short,e.prev=2,e.next=5,m.a.fetchTrendingRecipes({count:9,from:0,includeFeatured:!0,recipeId:null});case 5:r=e.sent,n=r.items,t=S-8+1,e.next=16;break;case 10:e.prev=10,e.t0=e.catch(2),console.error("Home page - fetching trending recipes errored"),t=S+1,n=[],a=60;case 16:return e.prev=16,e.next=19,m.a.fetchFeaturedItem();case 19:c=e.sent,e.next=27;break;case 22:e.prev=22,e.t1=e.catch(16),console.error("Home page - fetching featured item errored"),c={},a=60;case 27:return o=[],e.prev=28,e.next=31,m.a.fetchRecentFoodFeed({from:0,includeFeatured:!0,size:t});case 31:u=e.sent,o=u.items,e.next=39;break;case 35:return e.prev=35,e.t2=e.catch(28),d=e.t2.status?e.t2.status:500,e.abrupt("return",{error:"Error Fetching Home Page Recent Feed: ".concat(e.t2.message),statusCode:d});case 39:return 0===i()(c).length&&c.constructor===Object&&(n.length>0?(c=n[0],n.shift(),n.forEach(function(e){e.position--})):o.length>0&&(c=o[0],o.shift(),o.forEach(function(e){e.position--}))),n=n.slice(0,8),o=o.slice(0,t-1),p=Object(N.a)("home",{context_page_id:"home"}),e.abrupt("return",{pageType:"home",maxAge:a,analyticsInfo:p,recentFeed:o,trendingFeed:n,featuredItem:c});case 44:case"end":return e.stop()}},e,null,[[2,10],[16,22],[28,35]])}));t.default=C},d75D:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("cMU6");return{page:e.default||e}}])},iplb:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e){var t=e.feedLength,n=e.pageType,a=void 0===n?"search":n,i=[];if(0===t)return i;if(!(t>4))return i.push({type:"feed",start:0,end:t}),i;if(i.push({type:"feed",start:0,end:4}),i.push({type:"ad",xs:"promo2-bp",md:"promo-inline1",lg:"promo1-wide"}),"home"===a){if(!(t>8))return i.push({type:"feed",start:4,end:t}),i;i.push({type:"feed",start:4,end:8})}if(!(t>12))return i.push({type:"feed",start:"home"===a?8:4,end:t}),i;if(i.push({type:"feed",start:"home"===a?8:4,end:12}),i.push({type:"ad",xs:"promo3-bp",md:"promo-inline2",lg:"promo2-wide"}),!(t>20))return i.push({type:"feed",start:12,end:t}),i;i.push({type:"feed",start:12,end:20}),i.push({type:"ad",xs:"promo-infinite-bp",md:"promo-inline-infinite",lg:"promo-wide-infinite"});for(var r=20;r<t;r+=20){if(!(t>r+20))return i.push({type:"feed",start:r,end:t}),i;i.push({type:"feed",start:r,end:r+20}),i.push({type:"ad",xs:"promo-infinite-bp",md:"promo-inline-infinite",lg:"promo-wide-infinite"})}return i}},wDhe:function(e,t,n){"use strict";var a=n("ERkP"),i=n.n(a),r=n("AmVM"),s=n("JoBU"),c=i.a.createElement;t.a=function(e){var t=e.action,n=Object(a.useContext)(r.b);return c("button",{className:"button--tasty bold xs-block xs-mx-auto xs-col-12 md-width-auto",onClick:function(){s.a.trackContentAction({eventInfo:{action_type:"show",action_value:"more_content",item_name:"load_more",item_type:"button",position_in_unit:0,unit_name:"main",unit_type:"feed"},pageInfo:n}),t()}},"Show more")}}},[["d75D",1,0,2]]]);
//# sourceMappingURL=index.js.map
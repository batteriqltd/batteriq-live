"use strict";(()=>{var e={};e.id=6153,e.ids=[6153,9064],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},61212:e=>{e.exports=require("async_hooks")},78893:e=>{e.exports=require("buffer")},84770:e=>{e.exports=require("crypto")},17702:e=>{e.exports=require("events")},32615:e=>{e.exports=require("http")},35240:e=>{e.exports=require("https")},98216:e=>{e.exports=require("net")},68621:e=>{e.exports=require("punycode")},76162:e=>{e.exports=require("stream")},82452:e=>{e.exports=require("tls")},17360:e=>{e.exports=require("url")},21764:e=>{e.exports=require("util")},71568:e=>{e.exports=require("zlib")},63757:e=>{e.exports=import("prettier/plugins/html")},45747:e=>{e.exports=import("prettier/standalone")},84492:e=>{e.exports=require("node:stream")},77597:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>h,patchFetch:()=>b,requestAsyncStorage:()=>g,routeModule:()=>f,serverHooks:()=>y,staticGenerationAsyncStorage:()=>m});var a={};r.r(a),r.d(a,{GET:()=>u,POST:()=>p});var n=r(49303),o=r(88716),s=r(60670),i=r(87070),l=r(99064),d=r(64363),c=r(41606);async function p(e){if(!(0,d.yK)())return i.NextResponse.json({error:"Unauthorized"},{status:401});try{let{subject:t,introText:a,footerNote:n,productIds:o,customImages:s,testEmail:d}=await e.json();if(!t||!a||!o?.length)return i.NextResponse.json({error:"subject, introText and productIds are required"},{status:400});let p=(0,l.createAdminClient)(),{data:u}=await p.from("products").select("id, name, brand, slug, price_kes, images, specs, description").in("id",o);if(!u?.length)return i.NextResponse.json({error:"No products found"},{status:400});let f=u.map(e=>({...e,customImage:s?.[e.id]||void 0})),g=function(e,t,r,a){let n=e=>"KES "+Number(e).toLocaleString("en-KE"),o=e.map(e=>{let t=e.customImage||(e.images?.[0]?`https://batteriq.com/products/${e.images[0]}`:"https://batteriq.com/logo.png"),r=`https://batteriq.com/${(0,c.$K)(e.brand)}/${e.slug}`,a=Object.entries(e.specs??{}).slice(0,5);return`
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;border-bottom:1px solid #f0f0f0;padding-bottom:32px;">
        <tr>
          <td width="160" valign="top" style="padding-right:28px;">
            <img src="${t}" alt="${e.name}" width="140" height="140"
              style="border-radius:12px;object-fit:contain;background:#f7f8fc;border:1px solid #eaecf4;display:block;" />
          </td>
          <td valign="top">
            <p style="margin:0 0 4px 0;font-size:10px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.12em;font-family:system-ui,sans-serif;">${e.brand}</p>
            <h2 style="margin:0 0 12px 0;font-size:20px;font-weight:800;color:#0a0a23;line-height:1.25;font-family:system-ui,sans-serif;">${e.name}</h2>
            <table cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
              <tr>
                ${a.map(([,e])=>`
                  <td style="padding-right:6px;padding-bottom:6px;">
                    <span style="display:inline-block;background:#f0f2ff;border:1px solid #dde1ff;border-radius:6px;padding:4px 10px;font-size:11px;font-weight:700;color:#3730a3;font-family:system-ui,sans-serif;">${e}</span>
                  </td>
                `).join("")}
              </tr>
            </table>
            ${e.description?`<p style="margin:0 0 14px 0;font-size:13px;color:#6b7280;line-height:1.6;font-family:system-ui,sans-serif;">${e.description.slice(0,140)}${e.description.length>140?"...":""}</p>`:""}
            <p style="margin:0 0 16px 0;font-size:26px;font-weight:900;color:#0000cc;font-family:system-ui,sans-serif;letter-spacing:-0.02em;">${n(e.price_kes)}</p>
            <a href="${r}"
              style="display:inline-block;background:#0000ff;color:#ffffff;font-weight:700;font-size:13px;padding:12px 28px;border-radius:8px;text-decoration:none;font-family:system-ui,sans-serif;letter-spacing:0.02em;">
              View Product
            </a>
          </td>
        </tr>
      </table>
    `}).join("");return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${t}</title>
</head>
<body style="margin:0;padding:0;background:#f4f5f9;font-family:system-ui,-apple-system,sans-serif;">
  <div style="max-width:620px;margin:0 auto;padding:40px 20px;">

    <!-- Logo bar -->
    <div style="text-align:center;margin-bottom:28px;">
      <img src="https://batteriq.com/logo.png" alt="Batteriq" height="36"
        style="display:inline-block;" />
    </div>

    <!-- Hero card -->
    <div style="background:#0a0a23;border-radius:16px;padding:40px 36px;margin-bottom:24px;text-align:center;">
      <p style="margin:0 0 10px 0;font-size:11px;font-weight:700;color:#6366f1;text-transform:uppercase;letter-spacing:0.14em;">Batteriq Kenya — New Arrival</p>
      <h1 style="margin:0 0 16px 0;font-size:28px;font-weight:900;color:#ffffff;line-height:1.2;letter-spacing:-0.02em;">${t}</h1>
      <p style="margin:0;font-size:15px;color:#94a3b8;line-height:1.6;">${r}</p>
    </div>

    <!-- Products -->
    <div style="background:#ffffff;border-radius:16px;padding:36px;margin-bottom:20px;">
      <p style="margin:0 0 28px 0;font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.12em;border-bottom:1px solid #f0f0f0;padding-bottom:16px;">Featured Products</p>
      ${o}
    </div>

    <!-- CTA -->
    <div style="background:#ffffff;border-radius:16px;padding:32px;text-align:center;margin-bottom:20px;">
      <p style="margin:0 0 20px 0;font-size:16px;font-weight:700;color:#0a0a23;">Browse our full range at batteriq.com</p>
      <a href="https://batteriq.com"
        style="display:inline-block;background:#0000ff;color:#ffffff;font-weight:700;font-size:14px;padding:14px 40px;border-radius:8px;text-decoration:none;font-family:system-ui,sans-serif;">
        Shop All Products
      </a>
    </div>

    <!-- Trust bar -->
    <div style="background:#ffffff;border-radius:16px;padding:20px 24px;margin-bottom:28px;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="text-align:center;border-right:1px solid #f0f0f0;padding:8px;">
            <p style="margin:0;font-size:11px;font-weight:700;color:#374151;">Authorised Dealer</p>
            <p style="margin:2px 0 0 0;font-size:10px;color:#9ca3af;">EcoFlow &amp; BLUETTI</p>
          </td>
          <td style="text-align:center;border-right:1px solid #f0f0f0;padding:8px;">
            <p style="margin:0;font-size:11px;font-weight:700;color:#374151;">M-Pesa Accepted</p>
            <p style="margin:2px 0 0 0;font-size:10px;color:#9ca3af;">Instant STK Push</p>
          </td>
          <td style="text-align:center;border-right:1px solid #f0f0f0;padding:8px;">
            <p style="margin:0;font-size:11px;font-weight:700;color:#374151;">Same-Day Delivery</p>
            <p style="margin:2px 0 0 0;font-size:10px;color:#9ca3af;">Nairobi orders</p>
          </td>
          <td style="text-align:center;padding:8px;">
            <p style="margin:0;font-size:11px;font-weight:700;color:#374151;">24-Month Warranty</p>
            <p style="margin:2px 0 0 0;font-size:10px;color:#9ca3af;">Manufacturer backed</p>
          </td>
        </tr>
      </table>
    </div>

    <!-- Footer -->
    <div style="text-align:center;">
      ${a?`<p style="margin:0 0 10px 0;font-size:13px;color:#6b7280;">${a}</p>`:""}
      <p style="margin:0;font-size:11px;color:#9ca3af;line-height:1.8;">
        Batteriq Solutions Ltd, Nairobi, Kenya<br>
        <a href="https://batteriq.com" style="color:#9ca3af;">batteriq.com</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://batteriq.com/unsubscribe" style="color:#9ca3af;">Unsubscribe</a>
      </p>
    </div>

  </div>
</body>
</html>`}(f,t,a,n),{Resend:m}=await r.e(2723).then(r.bind(r,2723)),y=new m(process.env.RESEND_API_KEY??"re_placeholder"),h=process.env.RESEND_FROM_EMAIL??"sales@batteriq.com";if(d)return await y.emails.send({from:`Batteriq Kenya <${h}>`,to:d,subject:t,html:g}),i.NextResponse.json({sent:1,mode:"test"});let{data:b}=await p.from("newsletter_subscribers").select("email, name").eq("status","active");if(!b?.length)return i.NextResponse.json({error:"No active subscribers found"},{status:400});let x=0;for(let e=0;e<b.length;e+=50){let r=b.slice(e,e+50);await Promise.all(r.map(e=>y.emails.send({from:`Batteriq Kenya <${h}>`,to:e.email,subject:t,html:g}).catch(()=>{}))),x+=r.length}return await p.from("newsletter_broadcasts").insert({subject:t,intro_text:a,product_ids:o,sent_count:x}).catch(()=>{}),i.NextResponse.json({sent:x,total:b.length})}catch(e){return console.error("[Newsletter Broadcast]",e),i.NextResponse.json({error:"Broadcast failed"},{status:500})}}async function u(){if(!(0,d.yK)())return i.NextResponse.json({error:"Unauthorized"},{status:401});let e=(0,l.createAdminClient)(),{data:t}=await e.from("newsletter_subscribers").select("id, email, name, created_at, status").order("created_at",{ascending:!1}),{data:r}=await e.from("newsletter_broadcasts").select("*").order("created_at",{ascending:!1}).limit(20).catch(()=>({data:[]}));return i.NextResponse.json({subscribers:t??[],broadcasts:r??[]})}let f=new n.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/admin/newsletter/route",pathname:"/api/admin/newsletter",filename:"route",bundlePath:"app/api/admin/newsletter/route"},resolvedPagePath:"/srv/batteriq\\app\\api\\admin\\newsletter\\route.ts",nextConfigOutput:"standalone",userland:a}),{requestAsyncStorage:g,staticGenerationAsyncStorage:m,serverHooks:y}=f,h="/api/admin/newsletter/route";function b(){return(0,s.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:m})}},64363:(e,t,r)=>{r.d(t,{kt:()=>s,yK:()=>i});var a=r(71615),n=r(84770),o=r.n(n);function s(e){let t=process.env.ADMIN_SESSION_SECRET;if(!t)throw Error("ADMIN_SESSION_SECRET is not configured");let r=Buffer.from(JSON.stringify(e)).toString("base64"),a=o().createHmac("sha256",t).update(r).digest("base64url");return`${r}.${a}`}function i(){try{let e=(0,a.cookies)(),t=e.get("batteriq_admin_session")?.value;if(!t)return null;return function(e){let t=process.env.ADMIN_SESSION_SECRET;if(!t)return null;try{let r=e.lastIndexOf(".");if(-1===r)return null;let a=e.slice(0,r),n=e.slice(r+1),s=o().createHmac("sha256",t).update(a).digest("base64url");if(n!==s)return null;let i=JSON.parse(Buffer.from(a,"base64").toString());if(Date.now()>i.exp)return null;return i}catch{return null}}(t)}catch{return null}}},41606:(e,t,r)=>{r.d(t,{$K:()=>l,DM:()=>f,Hp:()=>u,JF:()=>c,UE:()=>g,is:()=>m,w:()=>p});var a=r(32417),n=r(58205);let o=`${a._O}/#organization`,s=`${a._O}/#website`,i={"@id":o};function l(e){return"EcoFlow"===e?"ecoflow":"Bluetti"===e?"bluetti":"accessories"}function d(){return a.aL.openingHours.map(e=>({"@type":"OpeningHoursSpecification",dayOfWeek:e.days,opens:e.opens,closes:e.closes}))}function c(e={}){let t=a.aL.publicShowroom;return{"@context":"https://schema.org","@type":t?"ElectronicsStore":"OnlineStore","@id":o,name:a.aL.name,legalName:a.aL.legalName,alternateName:a.aL.alternateNames,url:a.aL.url,logo:{"@type":"ImageObject",...a.aL.logo},image:a.aL.image,description:a.aL.description,email:a.aL.email,telephone:a.aL.phone.e164,address:{"@type":"PostalAddress",addressLocality:a.aL.address.locality,addressRegion:a.aL.address.region,addressCountry:a.aL.address.country},areaServed:{"@type":"Country",name:"Kenya",identifier:"KE"},sameAs:a.mK,contactPoint:{"@type":"ContactPoint",contactType:"customer service",telephone:a.aL.phone.e164,email:a.aL.email,areaServed:"KE",availableLanguage:a.aL.languages,hoursAvailable:d()},...t?{geo:{"@type":"GeoCoordinates",...a.aL.geo},openingHoursSpecification:d(),...e.priceRange?{priceRange:e.priceRange}:{}}:{}}}function p(){return{"@context":"https://schema.org","@type":"WebSite","@id":s,name:a.aL.name,url:a._O,inLanguage:"en-KE",publisher:i}}function u(e){return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:e.map((e,t)=>({"@type":"ListItem",position:t+1,name:e.name,item:(0,n.HR)(e.path)}))}}function f(e){let t=(0,n.HR)(e.path),r=new Set,a=e.products.map(e=>(0,n.wE)(l(e.brand),e.slug)).filter(e=>!r.has(e)&&(r.add(e),!0));return{"@context":"https://schema.org","@type":"CollectionPage","@id":`${t}#collection`,name:e.name,url:t,description:e.description,inLanguage:"en-KE",isPartOf:{"@id":s},mainEntity:{"@type":"ItemList",numberOfItems:a.length,itemListElement:a.map((e,t)=>({"@type":"ListItem",position:t+1,url:e}))}}}function g(e){let t=(0,n.HR)(e.path);return{"@context":"https://schema.org","@type":"Article","@id":`${t}#article`,mainEntityOfPage:t,url:t,headline:e.headline,description:e.description,image:[e.image??a.aL.image],datePublished:e.datePublished,dateModified:e.dateModified,inLanguage:"en-KE",author:{"@type":"Organization","@id":o,name:a.aL.name,url:a._O},publisher:i}}function m(e){return{__html:JSON.stringify(e).replace(/</g,"\\u003c")}}},99064:(e,t,r)=>{r.d(t,{createAdminClient:()=>n});var a=r(12814);function n(){return(0,a.eI)("https://ueagjjdbbukdkktviyrv.supabase.co",process.env.SUPABASE_SERVICE_ROLE_KEY,{auth:{autoRefreshToken:!1,persistSession:!1}})}},71615:(e,t,r)=>{var a=r(88757);r.o(a,"cookies")&&r.d(t,{cookies:function(){return a.cookies}})},33085:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraftMode",{enumerable:!0,get:function(){return o}});let a=r(45869),n=r(6278);class o{get isEnabled(){return this._provider.isEnabled}enable(){let e=a.staticGenerationAsyncStorage.getStore();return e&&(0,n.trackDynamicDataAccessed)(e,"draftMode().enable()"),this._provider.enable()}disable(){let e=a.staticGenerationAsyncStorage.getStore();return e&&(0,n.trackDynamicDataAccessed)(e,"draftMode().disable()"),this._provider.disable()}constructor(e){this._provider=e}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},88757:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cookies:function(){return u},draftMode:function(){return f},headers:function(){return p}});let a=r(68996),n=r(53047),o=r(92044),s=r(72934),i=r(33085),l=r(6278),d=r(45869),c=r(54580);function p(){let e="headers",t=d.staticGenerationAsyncStorage.getStore();if(t){if(t.forceStatic)return n.HeadersAdapter.seal(new Headers({}));(0,l.trackDynamicDataAccessed)(t,e)}return(0,c.getExpectedRequestStore)(e).headers}function u(){let e="cookies",t=d.staticGenerationAsyncStorage.getStore();if(t){if(t.forceStatic)return a.RequestCookiesAdapter.seal(new o.RequestCookies(new Headers({})));(0,l.trackDynamicDataAccessed)(t,e)}let r=(0,c.getExpectedRequestStore)(e),n=s.actionAsyncStorage.getStore();return(null==n?void 0:n.isAction)||(null==n?void 0:n.isAppRoute)?r.mutableCookies:r.cookies}function f(){let e=(0,c.getExpectedRequestStore)("draftMode");return new i.DraftMode(e.draftMode)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},53047:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{HeadersAdapter:function(){return o},ReadonlyHeadersError:function(){return n}});let a=r(38238);class n extends Error{constructor(){super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers")}static callable(){throw new n}}class o extends Headers{constructor(e){super(),this.headers=new Proxy(e,{get(t,r,n){if("symbol"==typeof r)return a.ReflectAdapter.get(t,r,n);let o=r.toLowerCase(),s=Object.keys(e).find(e=>e.toLowerCase()===o);if(void 0!==s)return a.ReflectAdapter.get(t,s,n)},set(t,r,n,o){if("symbol"==typeof r)return a.ReflectAdapter.set(t,r,n,o);let s=r.toLowerCase(),i=Object.keys(e).find(e=>e.toLowerCase()===s);return a.ReflectAdapter.set(t,i??r,n,o)},has(t,r){if("symbol"==typeof r)return a.ReflectAdapter.has(t,r);let n=r.toLowerCase(),o=Object.keys(e).find(e=>e.toLowerCase()===n);return void 0!==o&&a.ReflectAdapter.has(t,o)},deleteProperty(t,r){if("symbol"==typeof r)return a.ReflectAdapter.deleteProperty(t,r);let n=r.toLowerCase(),o=Object.keys(e).find(e=>e.toLowerCase()===n);return void 0===o||a.ReflectAdapter.deleteProperty(t,o)}})}static seal(e){return new Proxy(e,{get(e,t,r){switch(t){case"append":case"delete":case"set":return n.callable;default:return a.ReflectAdapter.get(e,t,r)}}})}merge(e){return Array.isArray(e)?e.join(", "):e}static from(e){return e instanceof Headers?e:new o(e)}append(e,t){let r=this.headers[e];"string"==typeof r?this.headers[e]=[r,t]:Array.isArray(r)?r.push(t):this.headers[e]=t}delete(e){delete this.headers[e]}get(e){let t=this.headers[e];return void 0!==t?this.merge(t):null}has(e){return void 0!==this.headers[e]}set(e,t){this.headers[e]=t}forEach(e,t){for(let[r,a]of this.entries())e.call(t,a,r,this)}*entries(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase(),r=this.get(t);yield[t,r]}}*keys(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase();yield t}}*values(){for(let e of Object.keys(this.headers)){let t=this.get(e);yield t}}[Symbol.iterator](){return this.entries()}}},68996:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{MutableRequestCookiesAdapter:function(){return p},ReadonlyRequestCookiesError:function(){return s},RequestCookiesAdapter:function(){return i},appendMutableCookies:function(){return c},getModifiedCookieValues:function(){return d}});let a=r(92044),n=r(38238),o=r(45869);class s extends Error{constructor(){super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options")}static callable(){throw new s}}class i{static seal(e){return new Proxy(e,{get(e,t,r){switch(t){case"clear":case"delete":case"set":return s.callable;default:return n.ReflectAdapter.get(e,t,r)}}})}}let l=Symbol.for("next.mutated.cookies");function d(e){let t=e[l];return t&&Array.isArray(t)&&0!==t.length?t:[]}function c(e,t){let r=d(t);if(0===r.length)return!1;let n=new a.ResponseCookies(e),o=n.getAll();for(let e of r)n.set(e);for(let e of o)n.set(e);return!0}class p{static wrap(e,t){let r=new a.ResponseCookies(new Headers);for(let t of e.getAll())r.set(t);let s=[],i=new Set,d=()=>{let e=o.staticGenerationAsyncStorage.getStore();if(e&&(e.pathWasRevalidated=!0),s=r.getAll().filter(e=>i.has(e.name)),t){let e=[];for(let t of s){let r=new a.ResponseCookies(new Headers);r.set(t),e.push(r.toString())}t(e)}};return new Proxy(r,{get(e,t,r){switch(t){case l:return s;case"delete":return function(...t){i.add("string"==typeof t[0]?t[0]:t[0].name);try{e.delete(...t)}finally{d()}};case"set":return function(...t){i.add("string"==typeof t[0]?t[0]:t[0].name);try{return e.set(...t)}finally{d()}};default:return n.ReflectAdapter.get(e,t,r)}}})}}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[8948,2814,5972,4943],()=>r(77597));module.exports=a})();
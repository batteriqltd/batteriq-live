"use strict";exports.id=506,exports.ids=[506,9064],exports.modules={34972:(e,t,o)=>{o.d(t,{$m:()=>l,J0:()=>a,Kj:()=>r,Lg:()=>n,My:()=>d,lU:()=>s,pc:()=>c});let i=function(e){let t=Number(e);return!Number.isFinite(t)||t<0||t>.2?.02:t}("0.02"),a="pesapal_card";function r(e){return e===a}let s=10,n=1e6;function d(e){if("number"!=typeof e&&"string"!=typeof e||""===e)return null;let t=Number(e);return!Number.isInteger(t)||t<s||t>n?null:t}function l(e,t=i){let o=Number(e),a=Math.round(100*(Number.isFinite(o)&&o>0?o:0)),r=Math.round(a*t);return{subtotalKes:a/100,feeKes:r/100,totalChargedKes:(a+r)/100,rate:t,ratePercentLabel:`${Number((100*t).toFixed(2))}%`}}function c(e){let t=Number(e),o=Number.isFinite(t)?t:0;return`KES ${o.toLocaleString("en-KE",{minimumFractionDigits:2,maximumFractionDigits:2})}`}},11946:(e,t,o)=>{o.d(t,{__:()=>u,Qw:()=>h,$d:()=>g,g_:()=>x,C1:()=>y});var i=o(2723),a=o(34972);function r(e){return`KES ${Number(e||0).toLocaleString("en-KE")}`}async function s(e){var t;let{jsPDF:i}=await o.e(7817).then(o.bind(o,17817)),a=new i({orientation:"portrait",unit:"mm",format:"a4"}),s=0;a.setFillColor(0,0,77),a.rect(0,0,210,42,"F"),a.setTextColor(255,255,255),a.setFontSize(22),a.setFont("helvetica","bold"),a.text("BATTERIQ",18,17),a.setFontSize(8),a.setFont("helvetica","normal"),a.setTextColor(180,200,255),a.text("Guarantee your Uptime  \xb7  Kenya's Official EcoFlow Dealer",18,24),a.text("batteriq.com  \xb7  info@batteriq.com  \xb7  Nairobi, Kenya",18,30),a.setTextColor(255,255,255),a.setFontSize(10),a.setFont("helvetica","bold");let n="paid"===e.paymentStatus?"OFFICIAL PAID RECEIPT":"ORDER RECEIPT — PENDING PAYMENT";return(a.text(n,192,17,{align:"right"}),a.setFontSize(8),a.setFont("helvetica","normal"),a.setTextColor(180,200,255),a.text(new Date(e.createdAt).toLocaleDateString("en-KE",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),192,23,{align:"right"}),s=50,a.setFillColor(239,246,255),a.roundedRect(18,s,174,18,3,3,"F"),a.setTextColor(0,0,255),a.setFontSize(9),a.setFont("helvetica","bold"),a.text("ORDER NUMBER",24,s+6),a.setFontSize(14),a.text(e.orderNumber,24,s+13),"paid"===e.paymentStatus?(a.setFillColor(220,252,231),a.roundedRect(162,s+3,28,10,3,3,"F"),a.setTextColor(22,101,52),a.setFontSize(8),a.setFont("helvetica","bold"),a.text("PAID",176,s+10,{align:"center"})):(a.setFillColor(254,243,199),a.roundedRect(162,s+3,28,10,3,3,"F"),a.setTextColor(146,64,14),a.setFontSize(8),a.setFont("helvetica","bold"),a.text("PENDING",176,s+10,{align:"center"})),s+=26,a.setFillColor(248,250,255),a.roundedRect(18,s,84,38,2,2,"F"),a.setTextColor(153,153,153),a.setFontSize(7),a.setFont("helvetica","bold"),a.text("CUSTOMER",22,s+6),a.setTextColor(17,17,17),a.setFontSize(9),a.setFont("helvetica","bold"),a.text(e.customerName,22,s+12),a.setFont("helvetica","normal"),a.setFontSize(8),a.setTextColor(85,85,85),a.text(e.customerEmail,22,s+18),a.text(e.customerPhone,22,s+24),e.deliveryAddress?.city&&a.text(`${e.deliveryAddress.city}, ${e.deliveryAddress.county??""}`,22,s+30)),a.setFillColor(248,250,255),a.roundedRect(108,s,84,38,2,2,"F"),a.setTextColor(153,153,153),a.setFontSize(7),a.setFont("helvetica","bold"),a.text("PAYMENT",112,s+6),a.setTextColor(17,17,17),a.setFontSize(9),a.setFont("helvetica","bold"),a.text({mpesa_now:"M-Pesa STK Push",cod_cash:"Cash on Delivery",cod_mpesa:"M-Pesa at Doorstep",sales_confirmation:"Reserve Order — Pay After Confirmation",pesapal_card:"Visa / Mastercard",mpesa:"M-Pesa",cash:"Cash"}[t=e.paymentMethod]??t,112,s+12),a.setFont("helvetica","normal"),a.setFontSize(8),a.setTextColor(85,85,85),a.text(`Status: ${"paid"===e.paymentStatus?"Confirmed":"Pending"}`,112,s+18),e.mpesaRef&&a.text(`${e.refLabel??"M-Pesa Ref"}: ${e.mpesaRef}`,112,s+24),s+=46,a.setFillColor(0,0,77),a.rect(18,s,174,9,"F"),a.setTextColor(255,255,255),a.setFontSize(7.5),a.setFont("helvetica","bold"),a.text("PRODUCT",21,s+6),a.text("QTY",146,s+6,{align:"right"}),a.text("UNIT PRICE",168,s+6,{align:"right"}),a.text("TOTAL",190,s+6,{align:"right"}),s+=9,e.items.forEach((e,t)=>{let o=a.splitTextToSize(e.name,92),i=Math.max(14,10+4.2*Math.max(1,o.length)+(e.brand?2.5:0));t%2==0&&(a.setFillColor(248,250,255),a.rect(18,s,174,i,"F")),a.setTextColor(0,0,255),a.setFontSize(7),a.setFont("helvetica","bold"),a.text((e.brand??"").toUpperCase(),21,s+5),a.setTextColor(17,17,17),a.setFontSize(8),a.setFont("helvetica","normal"),a.text(o,21,s+10);let n=s+i/2+2;a.setFontSize(8),a.setFont("helvetica","bold"),a.setTextColor(85,85,85),a.text(String(e.quantity),146,n,{align:"right"}),a.setTextColor(85,85,85),a.text(r(e.price_kes),168,n,{align:"right"}),a.setTextColor(0,0,77),a.setFontSize(8.5),a.text(r(Number(e.price_kes)*e.quantity),190,n,{align:"right"}),s+=i}),a.setDrawColor(224,231,255),a.line(18,s+2,192,s+2),s+=6,a.setFillColor(239,246,255),a.roundedRect(122,s,68,22,2,2,"F"),a.setTextColor(85,85,85),a.setFontSize(8),a.setFont("helvetica","normal"),a.text("Subtotal",128,s+7),a.setFont("helvetica","bold"),a.text(r(e.totalKes),188,s+7,{align:"right"}),a.setFont("helvetica","normal"),a.setTextColor(5,150,105),a.text("Delivery",128,s+14),a.text("Calculated on delivery",188,s+14,{align:"right"}),s+=26,a.setFillColor(0,0,77),a.roundedRect(122,s,68,14,2,2,"F"),a.setTextColor(255,255,255),a.setFontSize(8),a.setFont("helvetica","bold"),a.text("TOTAL",128,s+9),a.setFontSize(10),a.text(r(e.totalKes),188,s+9,{align:"right"}),s+=22,e.deliveryAddress?.street&&(a.setFillColor(248,250,255),a.roundedRect(18,s,174,24,2,2,"F"),a.setTextColor(153,153,153),a.setFontSize(7),a.setFont("helvetica","bold"),a.text("DELIVERY ADDRESS",22,s+6),a.setTextColor(17,17,17),a.setFontSize(8),a.setFont("helvetica","normal"),a.text(e.deliveryAddress.street,22,s+12),a.text(`${e.deliveryAddress.city??""}, ${e.deliveryAddress.county??""}`,22,s+18),s+=28),s<257&&(a.setFillColor(245,243,255),a.roundedRect(18,s,174,18,2,2,"F"),a.setTextColor(124,58,237),a.setFontSize(7),a.setFont("helvetica","bold"),a.text("eTIMS KRA INVOICE:",22,s+7),a.setFont("helvetica","normal"),a.setTextColor(109,40,217),a.text("Official eTIMS KRA invoice issued separately upon payment confirmation.",22,s+13),s+=22),a.setFillColor(0,0,77),a.rect(0,275,210,22,"F"),a.setTextColor(180,200,255),a.setFontSize(7.5),a.setFont("helvetica","normal"),a.text("\xa9 2025 Batteriq Solutions Ltd.  \xb7  Kenya's Official Authorised EcoFlow Distributor",105,284,{align:"center"}),a.text("batteriq.com  \xb7  info@batteriq.com  \xb7  Nairobi, Kenya",105,290,{align:"center"}),a.setFillColor(239,246,255),a.roundedRect(18,259,174,12,2,2,"F"),a.setTextColor(0,0,255),a.setFontSize(7.5),a.setFont("helvetica","bold"),a.text(`Track your order at batteriq.com/track-order using: ${e.orderNumber}`,105,267,{align:"center"}),a.output("datauristring").split(",")[1]}let n=new i.Resend(process.env.RESEND_API_KEY??"re_placeholder"),d="Batteriq Orders <sales@batteriq.com>",l="Batteriq Support <info@batteriq.com>",c=["sales@batteriq.com","info@batteriq.com"],p=["info@batteriq.com","sales@batteriq.com"];function f(e){return`KES ${Number(e||0).toLocaleString("en-KE")}`}function m(e){return({mpesa_now:"M-Pesa STK Push",cod_cash:"Cash on Delivery",cod_mpesa:"M-Pesa at Doorstep",sales_confirmation:"Reserve Order — Pay After Confirmation",pesapal_card:"Visa / Mastercard",mpesa:"M-Pesa",cash:"Cash"})[e]??e}function v(e){return new Date(e).toLocaleDateString("en-KE",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}function b(e,t,o,i="#00004d"){return`<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t}</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:#f0f4f8;font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;color:#333}
  .wrap{max-width:600px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.10)}
  .hdr{background:${i};padding:28px 36px}
  .hdr h1{color:#fff;font-size:20px;font-weight:800;margin:0;letter-spacing:-.3px}
  .hdr p{color:rgba(255,255,255,.7);font-size:12px;margin:4px 0 0}
  .body{padding:28px 36px}
  .section-title{font-size:13px;font-weight:800;color:#111;text-transform:uppercase;letter-spacing:.08em;margin:20px 0 10px}
  .info-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0}
  .info-box{background:#f8f9ff;border:1px solid #e0e7ff;border-radius:10px;padding:12px 14px}
  .info-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#999;margin-bottom:4px}
  .info-val{font-size:13px;font-weight:600;color:#111}
  .order-num-box{background:#eff6ff;border:2px solid #0000ff;border-radius:12px;padding:16px 20px;margin:16px 0}
  .order-num{font-size:26px;font-weight:900;color:#0000ff;font-family:monospace;letter-spacing:1px}
  .items-table{width:100%;border-collapse:collapse;margin:12px 0}
  .items-table th{background:#f8f9ff;padding:9px 10px;text-align:left;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#666;border-bottom:2px solid #e0e7ff}
  .items-table td{padding:10px;font-size:13px;color:#333;border-bottom:1px solid #f5f5f5;vertical-align:top}
  .brand{font-size:10px;font-weight:800;color:#0000ff;text-transform:uppercase;letter-spacing:.08em;display:block;margin-bottom:2px}
  .totals-box{background:#f8f9ff;border-radius:10px;padding:14px 16px;margin:14px 0}
  .t-row{display:flex;justify-content:space-between;padding:4px 0;font-size:13px;color:#666}
  .t-total{display:flex;justify-content:space-between;padding:10px 0 0;margin-top:8px;border-top:2px solid #e0e7ff;font-size:18px;font-weight:900;color:#0000ff}
  .badge{display:inline-block;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em}
  .badge-paid{background:#dcfce7;color:#166534}
  .badge-pending{background:#fef3c7;color:#92400e}
  .badge-shipped{background:#dbeafe;color:#1e40af}
  .badge-delivered{background:#dcfce7;color:#065f46}
  .cta{display:inline-block;background:linear-gradient(135deg,#0000ff,#00004d);color:#fff;text-decoration:none;padding:13px 28px;border-radius:10px;font-weight:800;font-size:14px;margin:16px 0}
  .tip-box{background:#fffbeb;border:1px solid #fcd34d;border-radius:10px;padding:12px 16px;margin:16px 0;font-size:12px;color:#92400e}
  .footer-bar{background:#00004d;padding:16px 36px}
  .footer-bar p{color:rgba(255,255,255,.55);font-size:11px;margin:2px 0}
  .divider{border:none;border-top:1px solid #f0f0f0;margin:20px 0}
  .track-bar{background:#eff6ff;border-radius:10px;padding:10px 16px;margin:16px 0;text-align:center;font-size:12px;color:#0000ff;font-weight:700}
  @media(max-width:600px){.info-grid{grid-template-columns:1fr}.body{padding:20px 18px}}
</style></head>
<body><div class="wrap">
  <div class="hdr"><h1>${t}</h1><p>${o}</p></div>
  <div class="body">${e}</div>
  <div class="footer-bar">
    <p>\xa9 2025 Batteriq Solutions Ltd. \xb7 Kenya's Official Authorised EcoFlow Distributor</p>
    <p>batteriq.com \xb7 info@batteriq.com \xb7 Nairobi, Kenya</p>
  </div>
</div></body></html>`}async function g(e){let t="paid"===e.payment_status,o=Number(e.total_kes)||0,i=e.items.map(e=>`
  <tr>
    <td style="padding:12px 10px;border-bottom:1px solid #f5f5f5;vertical-align:top">
      <span style="font-size:10px;font-weight:800;color:#0000ff;text-transform:uppercase;letter-spacing:.08em;display:block;margin-bottom:3px">${e.brand??""}</span>
      <span style="font-size:14px;font-weight:700;color:#111">${e.name}</span>
    </td>
    <td style="text-align:center;padding:12px 10px;border-bottom:1px solid #f5f5f5;font-size:14px;font-weight:700;color:#333;vertical-align:top">${e.quantity}</td>
    <td style="text-align:right;padding:12px 10px;border-bottom:1px solid #f5f5f5;font-family:monospace;font-size:13px;color:#666;vertical-align:top">${f(e.price_kes)}</td>
    <td style="text-align:right;padding:12px 10px;border-bottom:1px solid #f5f5f5;font-family:monospace;font-size:14px;font-weight:800;color:#0000ff;vertical-align:top">${f(Number(e.price_kes)*e.quantity)}</td>
  </tr>`).join(""),a=`<div style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:10px;padding:12px 16px;margin:16px 0">
  <div style="font-size:11px;font-weight:800;color:#7c3aed;text-transform:uppercase;letter-spacing:.1em;margin-bottom:4px">eTIMS KRA Invoice</div>
  <div style="font-size:12px;color:#6d28d9;line-height:1.5">An official eTIMS KRA invoice will be issued and sent to your email within 24 hours of payment confirmation. This receipt serves as your proof of purchase in the meantime.</div>
</div>`,r=`
    <p style="font-size:17px;font-weight:700;color:#111;margin-bottom:6px">Hi ${e.guest_name}!</p>
    <p style="color:#555;line-height:1.6;margin-bottom:8px">
      ${t?"Your payment is confirmed and your order is being prepared. Find your PDF receipt attached.":"Your order has been placed! We'll confirm payment and begin processing shortly. Your PDF receipt is attached."}
    </p>

    <div class="order-num-box">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#666;margin-bottom:4px">Your Order Number</div>
      <div class="order-num">${e.order_number}</div>
      <div style="font-size:12px;color:#666;margin-top:6px">Use this to track at <strong>batteriq.com/track-order</strong></div>
    </div>

    <div class="info-grid">
      <div class="info-box"><div class="info-label">Date</div><div class="info-val">${v(e.created_at)}</div></div>
      <div class="info-box"><div class="info-label">Payment</div><div class="info-val">${m(e.payment_method)}</div></div>
      <div class="info-box"><div class="info-label">Status</div><div class="info-val"><span class="badge ${t?"badge-paid":"badge-pending"}">${t?"Paid":"Pending"}</span></div></div>
      <div class="info-box"><div class="info-label">Delivery</div><div class="info-val">${e.delivery_address?.city??"Nairobi"}, ${e.delivery_address?.county??""}</div></div>
    </div>

    <div class="section-title">Items Ordered</div>
    <table class="items-table">
      <thead><tr><th>Product</th><th style="text-align:center">Qty</th><th style="text-align:right">Unit</th><th style="text-align:right">Total</th></tr></thead>
      <tbody>${i}</tbody>
    </table>

    <div class="totals-box">
      <div class="t-row"><span>Subtotal</span><span style="font-family:monospace;font-weight:700">${f(o)}</span></div>
      <div class="t-row"><span>Delivery</span><span style="color:#059669;font-weight:600">Calculated on delivery</span></div>
      <div class="t-total"><span>Total</span><span style="font-family:monospace">${f(o)}</span></div>
    </div>

    <div class="track-bar">Track your order: batteriq.com/track-order \xb7 Order No: ${e.order_number}</div>

    <p style="color:#555;font-size:13px;line-height:1.6;margin-top:16px">
      Questions? Email <a href="mailto:sales@batteriq.com" style="color:#0000ff">sales@batteriq.com</a>
    </p>
    ${a}
    <a href="https://batteriq.com/track-order" class="cta">Track My Order</a>
  `,l={orderNumber:e.order_number,customerName:e.guest_name,customerEmail:e.guest_email,customerPhone:e.guest_phone,items:e.items,totalKes:o,paymentMethod:e.payment_method,paymentStatus:e.payment_status,deliveryAddress:e.delivery_address??{},createdAt:e.created_at},c="";try{c=await s(l)}catch(e){console.error("PDF generation failed:",e)}let p={from:d,to:e.guest_email,subject:`Order Received — ${e.order_number} | Batteriq Kenya`,html:b(r,"BATTERIQ™ — Order Received",`Order ${e.order_number} \xb7 Awaiting Payment Confirmation`)};c&&(p.attachments=[{filename:`Batteriq-Receipt-${e.order_number}.pdf`,content:c,type:"application/pdf",disposition:"attachment"}]);let g=await n.emails.send(p);return console.log("✅ Customer order email sent:",g),g}async function u(e){let t=Number(e.total_kes)||0,o="paid"===e.payment_status,i=e.items.reduce((e,t)=>e+t.quantity,0),a=e.items.map(e=>`
    <tr>
      <td><span class="brand">${e.brand??""}</span>${e.name}</td>
      <td style="text-align:center">${e.quantity}</td>
      <td style="text-align:right;font-family:monospace">${f(e.price_kes)}</td>
      <td style="text-align:right;font-family:monospace;font-weight:700;color:#0000ff">${f(Number(e.price_kes)*e.quantity)}</td>
    </tr>`).join(""),r=`
    <div style="background:#fff8f0;border:2px solid #fed7aa;border-radius:12px;padding:16px 20px;margin-bottom:20px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px">
        <div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:#999;letter-spacing:.1em">Order Number</div>
          <div style="font-size:24px;font-weight:900;color:#ea580c;font-family:monospace">${e.order_number}</div>
          <div style="font-size:12px;color:#666;margin-top:4px">${v(e.created_at)}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:#999;letter-spacing:.1em">Order Total</div>
          <div style="font-size:30px;font-weight:900;color:#0000ff;font-family:monospace">${f(t)}</div>
          <span class="badge ${o?"badge-paid":"badge-pending"}">${o?"PAID":"PENDING PAYMENT"}</span>
        </div>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-box"><div class="info-label">Customer Name</div><div class="info-val">${e.guest_name}</div></div>
      <div class="info-box"><div class="info-label">Phone (M-Pesa)</div><div class="info-val" style="font-family:monospace">${e.guest_phone}</div></div>
      <div class="info-box"><div class="info-label">Email</div><div class="info-val" style="word-break:break-all;font-size:12px">${e.guest_email}</div></div>
      <div class="info-box"><div class="info-label">Payment Method</div><div class="info-val">${m(e.payment_method)}</div></div>
      <div class="info-box"><div class="info-label">Delivery To</div><div class="info-val">${e.delivery_address?.city??"Nairobi"}, ${e.delivery_address?.county??""}</div></div>
      <div class="info-box"><div class="info-label">Items</div><div class="info-val">${i} item${1!==i?"s":""}</div></div>
    </div>

    <div class="section-title">Items Ordered</div>
    <table class="items-table">
      <thead><tr><th>Product</th><th style="text-align:center">Qty</th><th style="text-align:right">Unit</th><th style="text-align:right">Total</th></tr></thead>
      <tbody>${a}</tbody>
    </table>
    <div class="totals-box">
      <div class="t-total"><span>Order Total</span><span style="font-family:monospace">${f(t)}</span></div>
    </div>

    <div class="section-title">Delivery Address</div>
    <div class="info-box">
      <div class="info-val">${e.delivery_address?.street??"Not provided"}</div>
      <div style="font-size:12px;color:#666;margin-top:4px">${e.delivery_address?.city??""}, ${e.delivery_address?.county??""}</div>
      ${e.delivery_address?.instructions?`<div style="font-size:12px;color:#888;margin-top:4px;font-style:italic">Note: ${e.delivery_address.instructions}</div>`:""}
    </div>

    ${"cod_mpesa"===e.payment_method?`
      <div class="tip-box">⚡ <strong>M-Pesa on Delivery order</strong> — Remember to trigger the STK push from the admin dashboard when you arrive at the customer's door.</div>
    `:""}
    ${"cod_cash"===e.payment_method?`
      <div class="tip-box">💵 <strong>Cash on Delivery order</strong> — Collect ${f(t)} in cash upon delivery.</div>
    `:""}

    <a href="https://batteriq.com/admin/orders" class="cta" style="background:linear-gradient(135deg,#00004d,#000080)">View in Admin Dashboard</a>
  `;await Promise.allSettled(c.map(i=>n.emails.send({from:d,to:i,subject:`New Order ${e.order_number} — ${f(t)} | Batteriq Admin`,html:b(r,`New Order — ${e.order_number}`,`${o?"PAYMENT CONFIRMED":"Awaiting Payment"} \xb7 ${f(t)}`,"#1e3a5f")}))),console.log("✅ Admin order alerts sent")}async function x(e){let t=Number(e.total_kes)||0,o=(0,a.Kj)(e.payment_method),i=Number(e.card_fee_kes)||0,r=Number(e.total_charged_kes)||t,l=o?"Card Payment Reference":"M-Pesa Reference",p=i>0?`
      <div class="t-row" style="display:flex;justify-content:space-between;padding:4px 0">
        <span>Order subtotal</span>
        <span style="font-family:monospace">${f(t)}</span>
      </div>
      <div class="t-row" style="display:flex;justify-content:space-between;padding:4px 0;color:#666">
        <span>Card processing fee</span>
        <span style="font-family:monospace">${f(i)}</span>
      </div>`:"",m=e.items.map(e=>`
  <tr>
    <td style="padding:10px;border-bottom:1px solid #f0fdf4;vertical-align:top">
      <span style="font-size:10px;font-weight:800;color:#059669;text-transform:uppercase;display:block;margin-bottom:2px">${e.brand??""}</span>
      <span style="font-size:13px;font-weight:700;color:#111">${e.name}</span>
    </td>
    <td style="text-align:center;padding:10px;border-bottom:1px solid #f0fdf4;font-weight:700;color:#333">${e.quantity}</td>
    <td style="text-align:right;padding:10px;border-bottom:1px solid #f0fdf4;font-family:monospace;font-weight:800;color:#059669">${f(Number(e.price_kes)*e.quantity)}</td>
  </tr>`).join(""),v=`
    <p style="font-size:17px;font-weight:700;color:#111;margin-bottom:6px">Hi ${e.guest_name}!</p>
    <p style="color:#555;line-height:1.6">${o?"Your card payment has been verified and confirmed. Your order is now being prepared!":"Your M-Pesa payment has been automatically verified and confirmed. Your order is now being prepared!"}</p>

    <div style="background:#f0fdf4;border:2px solid #86efac;border-radius:12px;padding:16px 20px;margin:16px 0">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:#666;letter-spacing:.1em;margin-bottom:4px">Payment Confirmed</div>
      <div style="font-size:24px;font-weight:900;color:#059669;font-family:monospace">${e.order_number}</div>
      ${e.mpesa_transaction_code?`
        <div style="margin-top:10px">
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;color:#666;letter-spacing:.1em">${l}</div>
          <div style="font-family:monospace;font-size:15px;font-weight:700;color:#065f46;margin-top:3px">${e.mpesa_transaction_code}</div>
        </div>`:""}
      <div style="margin-top:10px">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;color:#666;letter-spacing:.1em">Amount Paid</div>
        <div style="font-size:22px;font-weight:900;color:#059669;font-family:monospace;margin-top:3px">${f(r)}</div>
      </div>
    </div>

    <div class="track-bar">Track your order: batteriq.com/track-order \xb7 Order No: ${e.order_number}</div>

    <div class="section-title">Items You Paid For</div>
    <table class="items-table">
      <thead><tr><th>Product</th><th style="text-align:center">Qty</th><th style="text-align:right">Total</th></tr></thead>
      <tbody>${m}</tbody>
    </table>
    <div class="totals-box">
      ${p}
      <div class="t-total">
        <span>Total Paid</span>
        <span style="font-family:monospace;color:#059669">${f(r)}</span>
      </div>
    </div>
    <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:10px;padding:12px 16px;margin:16px 0">
      <div style="font-size:11px;font-weight:800;color:#059669;text-transform:uppercase;letter-spacing:.1em;margin-bottom:4px">eTIMS KRA Invoice</div>
      <div style="font-size:12px;color:#166534;line-height:1.5">An official eTIMS KRA invoice will be issued and sent to your email within 24 hours. ${o?"Your card payment reference above serves as payment proof.":"Your M-Pesa receipt above serves as payment proof."}</div>
    </div>
    <a href="https://batteriq.com/track-order" class="cta" style="background:linear-gradient(135deg,#059669,#065f46)">Track My Order</a>
  `,g={orderNumber:e.order_number,customerName:e.guest_name,customerEmail:e.guest_email,customerPhone:e.guest_phone,items:e.items,totalKes:r,paymentMethod:e.payment_method,paymentStatus:"paid",mpesaRef:e.mpesa_transaction_code,refLabel:o?"Card Ref":"M-Pesa Ref",deliveryAddress:e.delivery_address??{},createdAt:e.created_at},u="";try{u=await s(g)}catch(e){console.error("PDF generation failed:",e)}let x=u?[{filename:`Batteriq-PaidReceipt-${e.order_number}.pdf`,content:u,type:"application/pdf",disposition:"attachment"}]:[];await Promise.allSettled([n.emails.send({from:d,to:e.guest_email,subject:`Payment Confirmed ✅ — ${e.order_number} | Batteriq Kenya`,html:b(v,"Payment Confirmed!",`${o?"Card":"M-Pesa"} payment verified for Order ${e.order_number}`,"#065f46"),...x.length?{attachments:x}:{}}),...c.map(a=>n.emails.send({from:d,to:a,subject:`Payment Received — ${e.order_number} | ${f(r)}`,html:b(`
          <p style="font-size:16px;font-weight:700">${o?"Card":"M-Pesa"} payment auto-verified for order <strong>${e.order_number}</strong></p>
          <div class="info-grid">
            <div class="info-box"><div class="info-label">Customer</div><div class="info-val">${e.guest_name}</div></div>
            <div class="info-box"><div class="info-label">Amount</div><div class="info-val" style="color:#0000ff;font-size:18px;font-weight:900">${f(r)}</div></div>
            <div class="info-box"><div class="info-label">${l}</div><div class="info-val" style="font-family:monospace">${e.mpesa_transaction_code??"N/A"}</div></div>
            <div class="info-box"><div class="info-label">Phone</div><div class="info-val" style="font-family:monospace">${e.guest_phone}</div></div>
          </div>
          ${i>0?`<div class="tip-box">💳 Card order — customer paid ${f(r)} (${f(t)} order value + ${f(i)} pass-through card fee). The processor settles this after deducting its own fee.</div>`:""}
          <a href="https://batteriq.com/admin/orders" class="cta" style="background:linear-gradient(135deg,#00004d,#000080)">View in Admin</a>
        `,`Payment Received — ${e.order_number}`,`${f(r)} via ${o?"Visa / Mastercard":"M-Pesa"} \xb7 Auto-verified`,"#065f46")}))]),console.log("✅ Payment confirmed emails sent")}async function y(e){let t={processing:{title:"Your order is being processed",subtitle:"We're preparing your items for dispatch",body:"Great news! Your order is now being processed. Our team is preparing your items and will have them ready for dispatch soon.",color:"#1e40af",badge:"badge-shipped"},shipped:{title:"Your order is on its way!",subtitle:"Out for delivery to you",body:"Exciting news — your order has been dispatched and is on its way to you! Our delivery team will contact you shortly to confirm the delivery time.",color:"#0369a1",badge:"badge-shipped"},delivered:{title:"Order Delivered!",subtitle:"Your order has been successfully delivered",body:"Your order has been delivered! We hope you love your new EcoFlow product. Please register your warranty at batteriq.com/support/warranty to activate your official coverage.",color:"#065f46",badge:"badge-delivered"}}[e.fulfillment_status]??{title:`Order Update — ${e.fulfillment_status}`,subtitle:"Your order status has been updated",body:`Your order ${e.order_number} status has been updated to: ${e.fulfillment_status}`,color:"#00004d",badge:"badge-pending"},o=`
    <p style="font-size:17px;font-weight:700;color:#111;margin-bottom:6px">Hi ${e.guest_name}!</p>
    <p style="color:#555;line-height:1.6;margin-bottom:16px">${t.body}</p>

    <div class="order-num-box" style="border-color:${t.color}">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:#666;letter-spacing:.1em;margin-bottom:4px">Order Number</div>
      <div class="order-num" style="color:${t.color}">${e.order_number}</div>
      <div style="margin-top:8px">
        <span class="badge ${t.badge}">${e.fulfillment_status.toUpperCase()}</span>
      </div>
    </div>

    ${"delivered"===e.fulfillment_status?`
      <div class="tip-box" style="background:#eff6ff;border-color:#bfdbfe;color:#1e40af">
        Register your warranty at batteriq.com/support/warranty to activate your 24-month EcoFlow warranty.
      </div>
    `:""}

    <div class="track-bar">Track your order: batteriq.com/track-order \xb7 Order No: ${e.order_number}</div>
    <a href="https://batteriq.com/track-order" class="cta" style="background:linear-gradient(135deg,${t.color},#00004d)">Track My Order</a>

    <p style="color:#555;font-size:13px;margin-top:16px">
      Questions? Email <a href="mailto:sales@batteriq.com" style="color:#0000ff">sales@batteriq.com</a>
    </p>
  `;await n.emails.send({from:d,to:e.guest_email,subject:`${t.title} — Order ${e.order_number} | Batteriq`,html:b(o,t.title,t.subtitle,t.color)}),console.log(`✅ Status update email sent: ${e.fulfillment_status}`)}async function h(e){let t=`${e.firstName} ${e.lastName}`.trim(),o=`
    <div class="order-num-box" style="border-color:#ea580c">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:#666;letter-spacing:.1em">New Contact Inquiry</div>
      <div style="font-size:18px;font-weight:900;color:#ea580c;margin-top:4px">${e.inquiryType??"General Inquiry"}</div>
    </div>

    <div class="info-grid">
      <div class="info-box"><div class="info-label">Name</div><div class="info-val">${t}</div></div>
      <div class="info-box"><div class="info-label">Email</div><div class="info-val" style="word-break:break-all">${e.email}</div></div>
      ${e.phone?`<div class="info-box"><div class="info-label">Phone</div><div class="info-val" style="font-family:monospace">${e.phone}</div></div>`:""}
      <div class="info-box"><div class="info-label">Inquiry Type</div><div class="info-val">${e.inquiryType??"General"}</div></div>
    </div>

    <div class="section-title">Message</div>
    <div style="background:#f8f9ff;border:1px solid #e0e7ff;border-radius:10px;padding:16px;white-space:pre-wrap;font-size:14px;line-height:1.6;color:#333">${e.message}</div>

    <p style="margin-top:20px;color:#555;font-size:13px">
      Reply directly to this email to respond to <strong>${t}</strong> at <strong>${e.email}</strong>
    </p>
    <a href="mailto:${e.email}?subject=Re: Your inquiry to Batteriq" class="cta" style="background:linear-gradient(135deg,#00004d,#0000ff)">Reply to ${t}</a>
  `,i=`
    <p style="font-size:17px;font-weight:700;color:#111;margin-bottom:6px">Hi ${e.firstName}!</p>
    <p style="color:#555;line-height:1.6">Thank you for reaching out to Batteriq. We've received your message and our team will get back to you within <strong>2 business hours</strong>.</p>

    <div style="background:#f8f9ff;border:1px solid #e0e7ff;border-radius:10px;padding:16px 20px;margin:16px 0">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:#666;letter-spacing:.1em;margin-bottom:8px">Your Message</div>
      <div style="font-size:13px;color:#555;line-height:1.6;white-space:pre-wrap">${e.message}</div>
    </div>

    <div class="info-grid">
      <div class="info-box"><div class="info-label">Email</div><div class="info-val">info@batteriq.com</div></div>
      <div class="info-box"><div class="info-label">Hours</div><div class="info-val">Mon–Sat, 8AM–6PM</div></div>
    </div>

    <a href="https://batteriq.com" class="cta">Browse Products</a>
  `;await Promise.allSettled([...p.map(i=>n.emails.send({from:l,to:i,replyTo:e.email,subject:`New Contact: ${e.inquiryType??"General"} from ${t}`,html:b(o,"New Contact Form Submission",`${t} \xb7 ${e.email}`,"#1e3a5f")})),n.emails.send({from:l,to:e.email,subject:`We received your message — Batteriq Kenya`,html:b(i,"Thank you for contacting Batteriq!","We'll be in touch within 2 hours")})]),console.log("✅ Contact form emails sent")}},99064:(e,t,o)=>{o.d(t,{createAdminClient:()=>a});var i=o(12814);function a(){return(0,i.eI)("https://ueagjjdbbukdkktviyrv.supabase.co",process.env.SUPABASE_SERVICE_ROLE_KEY,{auth:{autoRefreshToken:!1,persistSession:!1}})}}};
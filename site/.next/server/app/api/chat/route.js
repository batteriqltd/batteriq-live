"use strict";(()=>{var e={};e.id=744,e.ids=[744],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},33402:(e,t,a)=>{a.r(t),a.d(t,{originalPathname:()=>g,patchFetch:()=>w,requestAsyncStorage:()=>h,routeModule:()=>d,serverHooks:()=>y,staticGenerationAsyncStorage:()=>m});var o={};a.r(o),a.d(o,{POST:()=>p});var i=a(49303),r=a(88716),s=a(60670),n=a(87070);let u=[{id:"delta-3-classic",brand:"EcoFlow",name:"DELTA 3 Classic",category:"Power Station",price:84379,specs:{capacity:"1024Wh",output:"1800W (surge 3600W)",chemistry:"LFP",weight:"12.1kg",ports:5},slug:"ecoflow/delta-3-classic",inStock:!0},{id:"delta-3-ultra",brand:"EcoFlow",name:"DELTA 3 Ultra",category:"Power Station",price:250799,specs:{capacity:"3072Wh",output:"3600W (surge 7200W)",chemistry:"LFP",weight:"33.7kg",ports:12},slug:"ecoflow/delta-3-ultra",inStock:!0},{id:"delta-3-max",brand:"EcoFlow",name:"DELTA 3 Max",category:"Power Station",price:148199,specs:{capacity:"2048Wh",output:"2400W (surge 5000W)",chemistry:"LFP",weight:"22kg",ports:12},slug:"ecoflow/delta-3-max",inStock:!0},{id:"delta-pro",brand:"EcoFlow",name:"DELTA Pro",category:"Power Station",price:291399,specs:{capacity:"3600Wh",output:"3600W (surge 7200W)",chemistry:"LFP",weight:"45kg",ports:13},slug:"ecoflow/delta-pro",inStock:!0},{id:"delta-pro-3",brand:"EcoFlow",name:"DELTA Pro 3",category:"Power Station",price:461799,specs:{capacity:"4096Wh",output:"4000W (surge 8000W)",chemistry:"LFP",weight:"51.5kg",ports:12},slug:"ecoflow/delta-pro-3",inStock:!0},{id:"bluetti-ac200pl",brand:"Bluetti",name:"AC200PL",category:"Power Station",price:127500,specs:{capacity:"High capacity",output:"AC Output"},slug:"bluetti/ac200pl",inStock:!0},{id:"bluetti-ac500",brand:"Bluetti",name:"AC500",category:"Power Station",price:84499,specs:{capacity:"High capacity",output:"AC Output"},slug:"bluetti/ac500",inStock:!0},{id:"bluetti-ac300",brand:"Bluetti",name:"AC300",category:"Power Station",price:68499,specs:{capacity:"High capacity",output:"AC Output"},slug:"bluetti/ac300",inStock:!0},{id:"bluetti-eb3a",brand:"Bluetti",name:"EB3A",category:"Power Station",price:24999,specs:{capacity:"Compact",output:"AC Output"},slug:"bluetti/eb3a",inStock:!0},{id:"bluetti-ac70p",brand:"Bluetti",name:"AC70P",category:"Power Station",price:55e3,specs:{capacity:"Mid range",output:"AC Output"},slug:"bluetti/bluetti-ac70p",inStock:!0},{id:"bluetti-ac180p",brand:"Bluetti",name:"AC180P",category:"Power Station",price:72150,specs:{capacity:"High capacity",output:"AC Output"},slug:"bluetti/bluetti-ac180p",inStock:!0}];function l(e){return`KES ${e.toLocaleString("en-KE")}`}function c(e){let t=e.toLowerCase();return u.filter(e=>e.name.toLowerCase().includes(t)||e.brand.toLowerCase().includes(t)||e.category.toLowerCase().includes(t)||e.id.includes(t.replace(/\s/g,"-")))}async function p(e){try{let{message:t,history:a=[]}=await e.json();if(!t?.trim())return n.NextResponse.json({message:"Please type a message.",type:"text",quickReplies:[]});let o=function(e,t){let a=e.toLowerCase().trim(),o=function(e){let t=e.toLowerCase();return["habari","hujambo","jambo","sema","niaje","mambo","poa","sawa","asante","karibu","ndiyo","hapana","bei","ngapi","tafadhali","naomba","nataka","unataka","nina","una","gani","lini","wapi","vipi","kama","lakini","pia","sana"].filter(e=>t.includes(e)).length>=1?"sw":"en"}(a),i=t.filter(e=>"assistant"===e.role).slice(-1)[0]?.content??"";if(/^(hi|hello|hey|good morning|good afternoon|good evening|howdy|what'?s up|sup|yo|hiya)/.test(a)){let e=new Date().getHours();return{message:`${e<12?"Good morning":e<17?"Good afternoon":"Good evening"}! 😊 Welcome to Batteriq.

I'm Amira — I'm here to help you find the right power backup or solar solution. Whether you're dealing with KPLC outages at home or need power on the go, we've got you covered.

What brings you here today?`,type:"text",quickReplies:["I need home backup power","Looking for a portable station","Tell me about solar panels","What are your prices?"]}}if(/^(habari|hujambo|jambo|sema|niaje|mambo|sasa|vipi|h[ae]e)/.test(a))return{message:`Habari! 😊 Karibu Batteriq.

Mimi ni Amira — niko hapa kukusaidia kupata suluhisho bora la nguvu au solar. Tuna EcoFlow na Bluetti power stations — zinauzwa Kenya na tunalipa na M-Pesa!

Unataka nikusaidie na nini leo?`,type:"text",quickReplies:["Nataka power station ya nyumbani","Niambie kuhusu bei","Solar panels zinauzwa?","Delivery inafikia wapi?"]};if("sw"===o&&/nataka|niambie|nipe|show|onyesha|ninahitaji|nahitaji/.test(a)){if(a.includes("power")||a.includes("nguvu")||a.includes("backup")||a.includes("betri"))return{message:`Vizuri sana! 💪 Hizi ndizo power stations zetu maarufu zaidi kwa nyumba Kenya:

Zote zinauzwa na **M-Pesa** na tunapeleka **Nairobi** siku moja na **countis zote** ndani ya siku 2-5.`,type:"products",products:u.filter(e=>"Power Station"===e.category&&"EcoFlow"===e.brand).slice(0,4),quickReplies:["DELTA Pro ni ngapi?","DELTA 3 Classic ni ngapi?","Delivery inagharimu ngapi?"]};if(a.includes("solar")||a.includes("jua"))return{message:`Nzuri! ☀️ Hizi ni solar panels zetu — zote ni za EcoFlow, zinafanya kazi Kenya vizuri sana (tutajua jua ni nyingi hapa! 😄)`,type:"products",products:u.filter(e=>"Solar Panel"===e.category).slice(0,4),quickReplies:["Ipi inafaa nyumbani?","Bei ya 400W?","Inafanya kazi na nini?"]}}if("sw"===o&&/bei|ngapi|gharama|pesa ngapi|inauzwa/.test(a)){let e=c(a);if(1===e.length){let t=e[0];return{message:`${t.brand} **${t.name}** inauzwa **${l(t.price)}** Kenya.

${t.inStock?"✅ Iko stock — tayari kutumwa.":"⚠️ Hivi sasa imekwisha."}

Unataka niongeze kwenye cart yako? 🛒`,type:"product_detail",product:t,action:{type:"add_to_cart",productId:t.id,productName:`${t.brand} ${t.name}`,price:t.price,slug:t.slug},quickReplies:["Ndiyo, ongeza cart","Niambie zaidi","Onyesha kitu kingine"]}}return{message:`Sawa! Bei zinaanza KES 7,599 (solar panel ndogo) hadi KES 461,799 (DELTA Pro 3).

Unataka bei ya bidhaa gani hasa?`,type:"text",quickReplies:["Bei ya DELTA Pro","Bei ya DELTA 3 Classic","Bei ya solar panels"]}}if(/^(yes|yeah|yep|sure|ok|okay|add it|add to cart|order|buy it|i want it|ndiyo|sawa|ongeza)$/.test(a)){let e=i.match(/productId['":\s]+([a-z0-9-]+)/i)??i.match(/\[ADD_TO_CART:([^\]]+)\]/),t=e?u.find(t=>t.id===e[1]):null;if(t)return{message:`Perfect! 🛒 I've added the **${t.brand} ${t.name}** to your cart.

You can checkout now with **M-Pesa** — super quick, just enter your number and confirm the push on your phone. Anything else you'd like to add?`,type:"order_action",action:{type:"add_to_cart",productId:t.id,productName:`${t.brand} ${t.name}`,price:t.price,slug:t.slug},quickReplies:["Go to checkout","Add a solar panel too","That's all, thanks"]}}if(/how are you|how r u|are you (ok|good|fine|well)|uko sawa|habari yako/.test(a))return{message:`I'm doing great, thanks for asking! 😄 Ready to help you find the perfect power solution.

What can I do for you today?`,type:"text",quickReplies:["Show me power stations","Solar panel prices","How does M-Pesa work?"]};if(/who are you|what is your name|your name|jina lako|wewe ni nani/.test(a))return{message:`I'm **Amira**, Batteriq's virtual assistant! 😊

Think of me as your personal energy expert — I know every product we stock, all the prices, and I can help you figure out exactly what you need for your home, office, or outdoor adventures.

I'm not a robot, I promise! 😄 Well, technically I am... but I try not to act like one.

What can I help you with?`,type:"text",quickReplies:["Help me choose a power station","What's the best for home?","Show me prices"]};if(/show.*(all|everything|products)|browse|what do you (have|sell|stock)|full range|catalog/.test(a))return{message:`Here's everything we carry at Batteriq! 🏪

**EcoFlow** (our flagship brand — we're the official Kenya distributor):
• Power Stations — DELTA & RIVER series
• Solar Panels — 45W to 400W
• Extra Batteries & Accessories

**Bluetti:**
• Power Stations — AC & EB series

All products come with warranty and we accept **M-Pesa**! What catches your eye?`,type:"text",quickReplies:["EcoFlow Power Stations","Solar Panels","Bluetti options","What's most popular?"]};if(/popular|best seller|most sold|recommend|suggest|which one|what should i|help me choose/.test(a))return{message:`Great question! Here are the approved EcoFlow models we keep in stock right now 🔥

**Recommended for homes:**
🥇 EcoFlow DELTA Pro 3 — KES 461,799 (top tier whole-home backup)
🥈 EcoFlow DELTA Pro — KES 291,399 (heavy-duty home use)

**Compact-to-mid size options:**
🥇 EcoFlow DELTA 3 Ultra — KES 250,799
🥈 EcoFlow DELTA 3 Classic — KES 84,379

The **DELTA Pro 3** is the premium choice for bigger homes and business backup. Want to see the best fit for your load?`,type:"text",quickReplies:["Tell me about DELTA Pro 3","I need something bigger","Show DELTA 3 Classic"]};if(/power station|portable power|backup power|battery backup|load shedding|blackout|outage|kplc/.test(a)&&!a.includes("delta")&&!a.includes("river"))return{message:`You've come to the right place! Power cuts are a real struggle in Kenya 😤 — we hear this from customers every day.

Our power stations are different from normal inverters — they're portable, silent, and charge from solar or a wall socket. No fuel, no fumes, no noise.

To recommend the right one, quick question: **what do you mainly need to power?**`,type:"text",quickReplies:["Fridge + lights + TV at home","Just phones, laptops, router","Whole house / business","I'm not sure, help me"]};if(/fridge|lights.*tv|tv.*lights|home appliance|whole house|nyumba|jokofu/.test(a))return{message:`Perfect — for fridge, lights, and TV the **approved DELTA range** is what you want. These are our home heroes 🏠

Here's what each one can handle:
• **DELTA 3 Classic** (KES 84K) — compact backup for essentials
• **DELTA 3 Ultra** (KES 250K) — bigger home / business backup
• **DELTA Pro** (KES 291K) — heavy-duty whole-home support
• **DELTA Pro 3** (KES 462K) — premium all-round backup

Which budget range works for you?`,type:"products",products:u.filter(e=>["delta-3-classic","delta-3-ultra","delta-pro","delta-pro-3"].includes(e.id)),quickReplies:["Tell me more about DELTA 3 Classic","Is DELTA Pro enough for my fridge?","I want the DELTA Pro 3"]};if(/just.*phone|just.*laptop|phone.*laptop|laptop.*phone|router|light use|travel|camping|outdoor|safari|ndogo/.test(a))return{message:"Nice! For phones, laptops, and a home router, the **DELTA 3 Classic** and **DELTA Pro** are the smart EcoFlow choices in Kenya right now. They offer strong backup without the extra bulky kit.",type:"products",products:u.filter(e=>["delta-3-classic","delta-pro"].includes(e.id)),quickReplies:["Tell me about DELTA 3 Classic","Can it charge a laptop?","I need more than this"]};if(a.includes("delta pro 3")||a.includes("delta pro3")){let e=u.find(e=>"delta-pro-3"===e.id);return{message:`The **EcoFlow DELTA Pro 3** is our absolute top of the range — this thing is a beast! 💪

💰 **${l(e.price)}**
⚡ Output: ${e.specs.output}
🔋 Capacity: ${e.specs.capacity}
🧪 Battery: ${e.specs.chemistry} — 10-year lifespan
⚖️ Weight: ${e.specs.weight}

This can power an entire home or business. Pairs beautifully with our 400W solar panels for full off-grid living.

Shall I add it to your cart?`,type:"product_detail",product:e,action:{type:"add_to_cart",productId:e.id,productName:`${e.brand} ${e.name}`,price:e.price,slug:e.slug},quickReplies:["Yes! Add to cart","Compare with DELTA Pro","What solar panel pairs with this?"]}}if(a.includes("delta pro")&&!a.includes("ultra")&&!a.includes("3")||a.includes("delta-pro")){let e=u.find(e=>"delta-pro"===e.id);return{message:`The **EcoFlow DELTA Pro** is Kenya's best-selling power station — and honestly, it's earned that title! ⭐

💰 **${l(e.price)}**
⚡ ${e.specs.output}
🔋 ${e.specs.capacity}
🧪 LFP chemistry — lasts 10 years with 3,500+ charge cycles
⚖️ ${e.specs.weight}

Customers love this one. It handles everything — fridge, TV, lights, CPAP machine, power tools. The 7200W surge means it won't struggle with motors.

Want to add it to your cart?`,type:"product_detail",product:e,action:{type:"add_to_cart",productId:e.id,productName:`${e.brand} ${e.name}`,price:e.price,slug:e.slug},quickReplies:["Yes, add to cart","Show DELTA Pro 3","Can I pair it with solar?"]}}if(a.includes("delta 3 classic")||a.includes("delta-3-classic")){let e=u.find(e=>"delta-3-classic"===e.id);return{message:`**EcoFlow DELTA 3 Classic** — compact, efficient home backup for the essentials 🏠

💰 **${l(e.price)}**
⚡ ${e.specs.output}
🔋 ${e.specs.capacity}
⚖️ ${e.specs.weight}

This is the value-minded EcoFlow option for lights, Wi‑Fi, TVs, and key appliances during outages.

Add to cart?`,type:"product_detail",product:e,action:{type:"add_to_cart",productId:e.id,productName:`${e.brand} ${e.name}`,price:e.price,slug:e.slug},quickReplies:["Yes, add to cart","Compare with DELTA 3 Ultra","Show DELTA Pro"]}}if(a.includes("delta 3 ultra")||a.includes("delta-3-ultra")){let e=u.find(e=>"delta-3-ultra"===e.id);return{message:`**EcoFlow DELTA 3 Ultra** — bigger backup for homes and business loads ⚡

💰 **${l(e.price)}**
⚡ ${e.specs.output}
🔋 ${e.specs.capacity}
⚖️ ${e.specs.weight}

This is the stronger EcoFlow option when you need more runtime and more power for the main loads on your property.

Add to cart?`,type:"product_detail",product:e,action:{type:"add_to_cart",productId:e.id,productName:`${e.brand} ${e.name}`,price:e.price,slug:e.slug},quickReplies:["Yes, add to cart","Compare with DELTA Pro","Show DELTA Pro 3"]}}if(/solar|panel|jua|photovoltaic|pv/.test(a)&&!a.includes("station")&&!a.includes("power station"))return{message:`Solar panels! ☀️ Great choice — Kenya has incredible sunshine, so solar makes a lot of sense here.

All our EcoFlow panels are **monocrystalline** (most efficient), **foldable**, and pair perfectly with any EcoFlow power station.

Our range goes from a tiny 45W panel (KES 7,599) all the way to a 400W beast (KES 71,240).

What are you trying to do with solar?`,type:"text",quickReplies:["Charge my power station faster","I want to go off-grid","Camping/outdoor use","Show all panels with prices"]};if(a.includes("bluetti")){let e=u.filter(e=>"Bluetti"===e.brand);return{message:`We also stock **Bluetti power stations** in Kenya 🔋

${e.map(e=>`• **Bluetti ${e.name}** — ${l(e.price)}`).join("\n")}

Which model interests you?`,type:"text",quickReplies:["Tell me about AC200PL","Tell me about EB3A","Compare EcoFlow vs Bluetti"]}}if(/compare|difference|\bvs\b|versus|better|which is|ecoflow vs bluetti/.test(a))return{message:`Good thinking — let me break it down honestly! 🤔

**EcoFlow** ✅
• We're the **official Kenya distributor** — means full local warranty
• Faster charging (their X-Stream tech is genuinely impressive)
• Better software & app
• Wider range of products

**Bluetti** ✅
• Also excellent quality
• Some models offer more raw capacity per shilling
• Solid choice for home use

My honest recommendation? Go EcoFlow — especially because we can handle your warranty here in Kenya without any hassle.

What's your budget? I'll pick the best one for you!`,type:"text",quickReplies:["Under KES 50,000","KES 50K–150K","Over KES 150,000","Tell me about Bluetti"]};if(/under.*50|cheap|affordable|bei.*nafuu|cheapest/.test(a))return{message:`Under KES 50,000 — here's what we have for you! All great quality 👇`,type:"products",products:u.filter(e=>e.price<5e4).sort((e,t)=>e.price-t.price).slice(0,4),quickReplies:["Tell me about DELTA 3 Classic","Tell me about DELTA Pro","I have more budget actually"]};if(/50.?000.*150.?000|50k.*150k|mid.?range|between 50/.test(a))return{message:`KES 50K–160K range — this is honestly the sweet spot for most Kenyan homes 🎯`,type:"products",products:u.filter(e=>e.price>=5e4&&e.price<=16e4).sort((e,t)=>e.price-t.price).slice(0,4),quickReplies:["Tell me about DELTA 3 Classic","Tell me about DELTA Pro","Help me choose between these"]};if(/over.*150|above.*150|premium|high.?end|\bbest\b|\btop\b|biggest|largest/.test(a))return{message:`Our premium range — for serious power needs! These are the heavy hitters 💪`,type:"products",products:u.filter(e=>e.price>15e4).slice(0,4),quickReplies:["Tell me about DELTA Pro","Tell me about DELTA Pro 3","What about Solar Home Systems?"]};if(/mpesa|m-pesa|m pesa|lipa|malipo|how to pay/.test(a))return{message:`M-Pesa payment is our most popular option — Kenyan customers love it! 📱

Here's exactly how it works:
1️⃣ Add items to your cart
2️⃣ Go to checkout
3️⃣ Choose "Pay Now with M-Pesa"
4️⃣ Enter your M-Pesa number
5️⃣ You get an STK Push on your phone
6️⃣ Enter your PIN — order confirmed! ✅

No manual codes, no screenshots, no WhatsApp-ing us — it's all automatic.

We also have:
💵 Cash on Delivery
📱 M-Pesa at the doorstep`,type:"text",quickReplies:["Let me start shopping!","What if the push doesn't come?","Delivery details"]};if(/deliver|shipping|nairobi|send|courier|how long|peleka|usafirishaji/.test(a))return{message:`Delivery is something we take seriously at Batteriq 🚚

**Nairobi:**
• Before 12PM → same day ⚡
• After 12PM → next day
• Weekends available by arrangement

**Rest of Kenya:**
• Major towns (Mombasa, Kisumu, Nakuru) — 1-2 days
• All other counties — 2-5 days
• We cover all 47 counties!

Once your order is dispatched, you'll get a WhatsApp message with tracking info. 📩`,type:"text",quickReplies:["How much is delivery?","Do you deliver to my county?","Start shopping"]};if(/track|order status|where is my|my order/.test(a))return{message:`🔍 **Track Your Order**

1. Go to **batteriq.com/track-order**
2. Enter your order number (e.g. BQ-20250520-001)
3. Enter the email used at checkout

No account needed! You also receive WhatsApp updates automatically when your order moves.`,type:"text",quickReplies:["I lost my order number","Contact support"]};if(/warrant|guarantee|return|broken|repair|dhamana/.test(a))return{message:`Great question — warranty is actually one of our biggest selling points! 🛡️

Because we're Kenya's **official authorised EcoFlow distributor**, you don't have to send anything abroad if something goes wrong. We handle it all here.

**Our warranty periods:**
• ⚡ Power Stations — **24 months**
• ☀️ Solar Panels — **24 months** + 5yr power output
• 🔋 Extra Batteries — **24 months**
• 🔌 Accessories — **24 months**

To make a claim: just WhatsApp us with a photo or video of the issue. We sort it out! 🤝`,type:"text",quickReplies:["Register my warranty","How to make a claim","Back to shopping"]};if(/who are you|what is batteriq|about batteriq|authorised|official|genuine|real/.test(a))return{message:`🏢 **About Batteriq**

Batteriq is **Kenya's #1 officially authorised EcoFlow distributor** and a leading Bluetti stockist.

Based in **Nairobi, Kenya**, we provide:
✅ 100% genuine EcoFlow products
✅ Official EcoFlow warranty (honoured locally)
✅ M-Pesa & Cash on Delivery
✅ Same-day Nairobi delivery
✅ Nationwide shipping across all 47 counties

Tagline: *"Guarantee your Uptime"* ⚡`,type:"text",quickReplies:["Shop EcoFlow","Contact us","Warranty policy"]};if(/contact|call|whatsapp|email|reach|speak|human|talk to someone|real person|agent|mtu/.test(a))return{message:`Want to talk to someone directly? Totally understand! 😊

📱 **WhatsApp** (fastest!): 0716822014
📞 **Call us**: 0716822014
📧 **Email**: info@batteriq.com

We're available **Monday to Saturday, 8AM–6PM**.

Honestly, WhatsApp is the quickest — our team usually replies within a few minutes. 🙂`,type:"text",quickReplies:["Open WhatsApp","Send email","Keep chatting here"]};if(/homestar|ep2000|solar home|whole.?home|solar system|full system|off.?grid/.test(a))return{message:`🏠 **Bluetti Residential Home Systems**

For installed home and small-business backup:

• **Bluetti Homestar 3** (2kW \xb7 3kWh) — KES 111,500
• **Bluetti Homestar 5** (3.68kW \xb7 5kWh) — KES 161,500
• **Bluetti EP2000 10kW** (14.6kWh) — Price on request
• **Bluetti EP2000 15kW** (21.9kWh) — Price on request
• **Bluetti EP2000 20kW** (29–51kWh) — Price on request

Send us your load list on WhatsApp (0716 822 014) for a tailored quote!`,type:"text",quickReplies:["Contact for a Solar Home System quote","Tell me about DELTA Pro","Back to portable stations"]};if(/\bups\b|uninterruptible|protect sensitive|router.*power|cctv|nas drive/.test(a))return{message:`⚡ **UPS Function**

Yes! EcoFlow power stations double as UPS systems:

🏆 **Best UPS models:**
• **DELTA 3 Classic** — 10ms switchover
• **DELTA 3 Ultra** — whole-home backup with UPS support
• **DELTA Pro / DELTA Pro 3** — high-power continuity for major loads

10ms means connected devices experience **zero interruption** during a power cut — faster than most dedicated UPS units.

Perfect for: WiFi routers, NAS drives, CCTV, medical devices, and office computers.`,type:"text",quickReplies:["Show DELTA 3 Classic price","Show DELTA Pro price","I need more capacity"]};if(/thank|thanks|asante|bye|goodbye|done|finished|okay bye|later/.test(a))return{message:`Thank you so much! 😊 It was a pleasure chatting with you.

Remember, if you have any questions or need help after your purchase, just come back here or WhatsApp us.

*Guarantee your Uptime* ⚡
**— Amira, Team Batteriq**`,type:"text",quickReplies:["Continue shopping","Contact the team"]};let r=c(a);return r.length>0&&r.length<=3?{message:`I found this for "${e}" — let me know if this is what you're looking for! 😊`,type:"products",products:r,quickReplies:r.map(e=>`Tell me about ${e.name}`)}:r.length>3?{message:`I found a few options matching "${e}"! Here are the top ones:`,type:"products",products:r.slice(0,4),quickReplies:["Narrow it down for me","Show all results"]}:{message:`Hmm, I'm not sure I caught that — sorry! 😊 Let me give you some options:

You can ask me about:
• 🔋 Any specific product (e.g. "DELTA Pro price")
• 💡 What's best for your situation
• 💳 How M-Pesa payment works
• 🚚 Delivery to your area
• 🛡️ Warranty information

Or if you'd prefer to talk to a real person, just say "contact" and I'll give you our WhatsApp! 😄`,type:"text",quickReplies:["Show me power stations","Solar panel prices","Talk to a person","How does M-Pesa work?"]}}(t.trim(),a);return n.NextResponse.json(o)}catch{return n.NextResponse.json({message:"Sorry, I had a hiccup. Please try again!",type:"text",quickReplies:["Try again","Contact us"]})}}let d=new i.AppRouteRouteModule({definition:{kind:r.x.APP_ROUTE,page:"/api/chat/route",pathname:"/api/chat",filename:"route",bundlePath:"app/api/chat/route"},resolvedPagePath:"/srv/batteriq\\app\\api\\chat\\route.ts",nextConfigOutput:"standalone",userland:o}),{requestAsyncStorage:h,staticGenerationAsyncStorage:m,serverHooks:y}=d,g="/api/chat/route";function w(){return(0,s.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:m})}}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),o=t.X(0,[8948,5972],()=>a(33402));module.exports=o})();
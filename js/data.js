/* Hisaab Desk — content data (sample/demo only) */

const DESKS = [
  {
    id: "daily", name: "Daily Hisaab Desk", short: "Daily Hisaab", tag: "Personal", icon: "i-daily", color: "#C6FF3D", tint: "rgba(255,255,255,.06)",
    line: "Apna paisa, apni nazar mein.",
    hook: "See where your salary goes.",
    bullets: [
      "Income, kharcha aur budget — sab ek screen pe",
      "Cash ho ya card — 2 second mein likhein, ya Billu ko chat mein likh dein",
      "Budget khatam hone se pehle Billu bata dega"
    ],
    mock: `
      <div class="m-head"><b>Is mahine</b><span class="m-pill">Personal</span></div>
      <div class="m-ring-row">
        <div class="m-ring" style="--p:64;--c:#C6FF3D"><div><b>64%</b><small>budget</small></div></div>
        <div class="m-ring-meta">
          <div><small>Income</small><b>Rs 1,85,000</b></div>
          <div><small>Kharcha</small><b>Rs 1,18,400</b></div>
          <div><small>Baqi</small><b class="pos">Rs 66,600</b></div>
        </div>
      </div>
      <div class="m-cats">
        <div class="m-cat"><span>🛒 Rashan</span><em>Rs 42,300</em><div class="m-bar"><i style="width:78%;--c:#C6FF3D"></i></div></div>
        <div class="m-cat"><span>⛽ Petrol</span><em>Rs 24,800</em><div class="m-bar"><i style="width:62%;--c:#C9B6FF"></i></div></div>
        <div class="m-cat"><span>⚡ Bijli / Gas</span><em>Rs 15,200</em><div class="m-bar"><i style="width:48%;--c:#FFD43B"></i></div></div>
        <div class="m-cat"><span>🍔 Bahar khana</span><em>Rs 12,900</em><div class="m-bar"><i style="width:86%;--c:#FF4F9A"></i></div></div>
      </div>
      <div class="m-goal"><span>🎯 Umrah fund</span><b>62%</b><div class="m-bar"><i style="width:62%;--c:#7CC8FF"></i></div></div>`
  },
  {
    id: "business", name: "Business Desk", short: "Business", tag: "Business", icon: "i-business", color: "#7CC8FF", tint: "rgba(255,255,255,.06)",
    line: "Poora business, ek nazar mein.",
    hook: "Sales, expenses and udhaar for your dukaan.",
    bullets: [
      "Income, kharcha aur profit — har waqt up to date",
      "Sales tax return ki date ka reminder, udhaar aur aane wale bills nazar mein",
      "Invoices aur zaroori kaghaz ek folder mein"
    ],
    mock: `
      <div class="m-head"><b>Ahmed Traders</b><span class="m-pill v">This month</span></div>
      <div class="m-kpis">
        <div><small>Sales</small><b>Rs 18.4L</b><em class="pos">▲ 12%</em></div>
        <div><small>Expenses</small><b>Rs 11.1L</b><em class="neg">▲ 4%</em></div>
        <div class="hl"><small>Profit</small><b>Rs 7.3L</b><em class="pos">▲ 26%</em></div>
      </div>
      <div class="m-chart">${[42,55,48,70,62,84,76].map((h,i)=>`<i style="height:${h}%"><span>${["M","T","W","T","F","S","S"][i]}</span></i>`).join("")}</div>
      <div class="m-rows">
        <div class="m-rowi"><span>💸 Udhaar lena hai</span><b>Rs 3.2L · 5 customers</b></div>
        <div class="m-rowi"><span>🧾 Sales tax return</span><b class="warn">12 din mein due</b></div>
        <div class="m-rowi"><span>📁 Documents</span><b>24 files</b></div>
      </div>`
  },
  {
    id: "scan", name: "Bill Scan Desk", short: "Bill Scan", tag: "Smart scan", icon: "i-scan", color: "#FF4F9A", tint: "rgba(255,255,255,.06)",
    line: "Bill ki photo. Kaam khatam.",
    hook: "Snap a bill, Billu fills the details.",
    bullets: [
      "Bijli, gas, internet, school fees — koi bhi bill",
      "Billu amount aur due date parh kar dikhata hai, aap check kar lein",
      "Due date se pehle Billu yaad dila dega"
    ],
    mock: `
      <div class="m-scan">
        <div class="m-paper">
          <b>BIJLI KA BILL</b><small>Ref: 04 1234 5678 900</small>
          <div class="pl"><span>Units</span><span>412</span></div>
          <div class="pl"><span>Bill month</span><span>Pichla mahina</span></div>
          <div class="pl hl-amt"><span>Payable</span><span>Rs 7,850</span></div>
          <div class="pl hl-due"><span>Due</span><span>5 din mein</span></div>
          <i class="scanline"></i>
        </div>
      </div>
      <div class="m-detect">
        <span class="chip c1">💰 Rs 7,850</span>
        <span class="chip c2">📅 5 din mein due</span>
      </div>
      <div class="m-ok"><svg><use href="#i-check"/></svg><div><b>Reminder set</b><small>Due se 2 din pehle · app reminder</small></div></div>`
  },
  {
    id: "tameer", name: "Ghar Ki Tameer Desk", short: "Ghar Ki Tameer", tag: "Construction", icon: "i-home", color: "#FFD43B", tint: "rgba(255,255,255,.06)",
    line: "Eent eent ka hisaab.",
    hook: "Track every material and contractor payment.",
    bullets: [
      "Contractor ke bills seedha app mein — aap haan ya na karein",
      "Har stage ka alag budget: foundation, structure, finishing",
      "Material ki rasidein aur site ki photos — sab mehfooz"
    ],
    mock: `
      <div class="m-head"><b>Naya Ghar · 10 Marla</b><span class="m-pill o">Rs 85L budget</span></div>
      <div class="m-stages">
        <div class="m-stage done"><span>Foundation</span><em>Rs 12L / 12L</em><div class="m-bar"><i style="width:100%;--c:#C6FF3D"></i></div></div>
        <div class="m-stage"><span>Grey structure</span><em>Rs 28L / 36L</em><div class="m-bar"><i style="width:78%;--c:#FFD43B"></i></div></div>
        <div class="m-stage"><span>Finishing</span><em>Rs 3.7L / 37L</em><div class="m-bar"><i style="width:10%;--c:#5E5E6A"></i></div></div>
      </div>
      <div class="m-approve">
        <small>Naya bill · Contractor</small>
        <b>Steel sariya — 2.1 ton</b>
        <div class="ma-amt">Rs 4,85,000</div>
        <div class="ma-btns"><button class="rej">✕ Reject</button><button class="acc">✓ Approve</button></div>
      </div>
      <p class="m-hint">👆 Try karein — approve ya reject dabayein</p>`
  },
  {
    id: "procurement", name: "Procurement Desk", short: "Procurement", tag: "Smart buying", icon: "i-proc", color: "#7EF0C0", tint: "rgba(255,255,255,.06)",
    line: "Har supplier, har quote, ek jagah.",
    hook: "Compare supplier quotes in one place.",
    bullets: [
      "Har quote ki total qeemat — tax, delivery aur udhaar ke din mila kar",
      "Sab quotes ek table mein, side by side",
      "Ek click mein purchase order tayyar"
    ],
    mock: `
      <div class="m-head"><b>500 bags cement</b><span class="m-pill b">3 quotes</span></div>
      <table class="m-table">
        <thead><tr><th></th><th>Supplier A</th><th>Supplier B</th><th class="win">Supplier C</th></tr></thead>
        <tbody>
          <tr><td>Rate</td><td>4.10L</td><td>3.98L</td><td class="win">4.05L</td></tr>
          <tr><td>Tax 18%</td><td>0.74L</td><td>0.72L</td><td class="win">0.73L</td></tr>
          <tr><td>Delivery</td><td>12K</td><td>25K</td><td class="win">Free</td></tr>
          <tr><td>Udhaar</td><td>0 din</td><td>30 din</td><td class="win">15 din</td></tr>
          <tr class="tot"><td>Total</td><td>4.96L</td><td>4.95L</td><td class="win">4.78L</td></tr>
        </tbody>
      </table>
      <div class="m-best"><span>📋 Aap ne chuna: <b>Supplier C</b></span><button>Order banayein →</button></div>`
  },
  {
    id: "sheet", name: "Sheet Se Hisaab Desk", short: "Sheet Se Hisaab", tag: "Import", icon: "i-sheet", color: "#C9B6FF", tint: "rgba(255,255,255,.06)",
    line: "Purani Excel, naya hisaab.",
    hook: "Bring your old Excel records in.",
    bullets: [
      "Excel ya CSV daalein — Billu columns khud samajh leta hai",
      "Purana data categories mein, charts foran tayyar",
      "Do baar likhi entries Billu khud pakar leta hai"
    ],
    mock: `
      <div class="m-file"><span class="xl">XLS</span><div><b>ghar_kharcha.xlsx</b><small>3 sheets · 1,284 rows</small></div></div>
      <div class="m-map">
        <div><span>Tareekh</span><i>→</i><b>Date</b><svg><use href="#i-check"/></svg></div>
        <div><span>Tafseel</span><i>→</i><b>Description</b><svg><use href="#i-check"/></svg></div>
        <div><span>Raqam</span><i>→</i><b>Amount</b><svg><use href="#i-check"/></svg></div>
        <div><span>Kis cheez pe</span><i>→</i><b>Category</b><svg><use href="#i-check"/></svg></div>
      </div>
      <div class="m-prog"><div class="m-bar big"><i style="width:100%;--c:#7EF0C0"></i></div><small>1,284 rows import ho gayi ✓ · 12 duplicates hataye</small></div>`
  },
  {
    id: "dutch", name: "Dutch Desk", short: "Dutch", tag: "Friends", icon: "i-dutch", color: "#FFB547", tint: "rgba(255,255,255,.06)",
    line: "Maza saath. Kharcha Dutch.",
    hook: "Split costs and see who owes whom.",
    bullets: [
      "Trip, dinner, flat ka kiraya — foran split",
      "Kis ne kitna dena hai — khud hisaab",
      "Billu polite reminder bana deta hai, aap bas bhej do — paisa bhi wapas, dosti bhi qaim"
    ],
    mock: `
      <div class="m-trip"><span>🏔️</span><div><b>Hunza Trip</b><small>Rs 84,000 · 4 dost · Rs 21,000 per head</small></div></div>
      <div class="m-people">
        <div><span class="av" style="--c:#C6FF3D">A</span><b>Ali</b><em class="pos">+ Rs 15,000 lega</em></div>
        <div><span class="av" style="--c:#C9B6FF">S</span><b>Sara</b><em class="neg">Rs 6,000 degi</em></div>
        <div><span class="av" style="--c:#FF4F9A">H</span><b>Hamza</b><em class="neg">Rs 9,000 dega</em></div>
        <div><span class="av" style="--c:#7CC8FF">Z</span><b>Zoya</b><em class="ok">Settled ✓</em></div>
      </div>
      <button class="m-cta">Reminder draft karo 🔔</button>
      <p class="m-hint">👆 Kisi dost pe tap = settled</p>`
  },
  {
    id: "shaadi", name: "Shaadi ka Hisaab Desk", short: "Shaadi", tag: "Wedding", icon: "i-shaadi", color: "#FF7AB2", tint: "rgba(255,255,255,.06)",
    line: "Shaadi dhoom se. Budget hosh se.",
    hook: "Plan every function's budget and vendor payments.",
    bullets: [
      "Har cheez ka alag budget: venue, khana, jora, zevar, photography",
      "Budget se upar jaane se pehle alert",
      "Vendor payments aur salami ka record"
    ],
    mock: `
      <div class="m-head"><b>Hira weds Usman 💍</b><span class="m-pill p">Rs 35L budget</span></div>
      <div class="m-wed-total"><div><small>Kharch ho chuka</small><b>Rs 22.4L</b></div><div class="m-ring sm" style="--p:64;--c:#FF7AB2"><div><b>64%</b></div></div></div>
      <div class="m-cats">
        <div class="m-cat"><span>🏛️ Venue & catering</span><em>9.8L / 14L</em><div class="m-bar"><i style="width:70%;--c:#FF7AB2"></i></div></div>
        <div class="m-cat"><span>👗 Bridal jora</span><em>3.1L / 4L</em><div class="m-bar"><i style="width:78%;--c:#C9B6FF"></i></div></div>
        <div class="m-cat"><span>💎 Jewellery</span><em>5.6L / 10L</em><div class="m-bar"><i style="width:56%;--c:#FFD43B"></i></div></div>
        <div class="m-cat"><span>📸 Photography</span><em>1.4L / 3L</em><div class="m-bar"><i style="width:47%;--c:#7CC8FF"></i></div></div>
        <div class="m-cat"><span>🌸 Decor</span><em>2.5L / 2.7L</em><div class="m-bar"><i style="width:92%;--c:#FF4F9A"></i></div></div>
      </div>
      <div class="m-alert">⚠️ Decor budget 92% — thoda hosh se!</div>`
  },
  {
    id: "committee", name: "Committee Desk", short: "Committee", tag: "ROSCA", icon: "i-committee", color: "#9AF0FF", tint: "rgba(255,255,255,.06)",
    line: "Har qist ka record.",
    hook: "Every member, every baari, in one place.",
    bullets: [
      "Members, qistein aur baariyan — sab record mein",
      "Due date pe reminder draft tayyar, aap bas bhej dein",
      "Kis ne diya, kis ka baqi hai — ek nazar mein"
    ],
    mock: `
      <div class="m-head"><b>Office Committee</b><span class="m-pill c">Rs 10,000 / mahina</span></div>
      <div class="m-turn"><small>Is mahine ki baari</small><b>🎉 Nadia · Rs 1,00,000</b><span>Turn 6 of 10</span></div>
      <div class="m-members">
        <div><span class="av" style="--c:#C6FF3D">N</span><b>Nadia</b><em class="ok">Paid ✓</em></div>
        <div><span class="av" style="--c:#C9B6FF">F</span><b>Faisal</b><em class="ok">Paid ✓</em></div>
        <div><span class="av" style="--c:#FFD43B">R</span><b>Rabia</b><em class="ok">Paid ✓</em></div>
        <div><span class="av" style="--c:#FF4F9A">K</span><b>Kamran</b><em class="neg">Baqi · reminder draft tayyar</em></div>
        <div><span class="av" style="--c:#7CC8FF">M</span><b>Mehwish</b><em class="ok">Paid ✓</em></div>
      </div>
      <p class="m-hint">👆 Kamran pe tap karke qist mark karein</p>
      <div class="m-progress-dots">${Array.from({length:10},(_,i)=>`<i class="${i<5?'d':i===5?'n':''}"></i>`).join("")}</div>`
  }
];

/* old DASH (v12) removed in v15d — see DASH9 */



/* v15d: dashboard sample views, one per desk (sample data only; no dates, no savings claims) */
const DASH9 = {
  daily: { group:"personal", hello:"Salam, Ayesha 👋", title:"Is mahine ka hisaab", tip:"Bahar khane ka budget 86% ho gaya. Hafte ke aakhir mein yaad dila doon?",
    kpis:[{l:"Income",v:"Rs 1,85,000",d:"Salary + freelance",c:"#C6FF3D"},{l:"Kharcha",v:"Rs 1,18,400",d:"64% of budget",c:"#C9B6FF"},{l:"Baqi",v:"Rs 66,600",d:"Is mahine",c:"#7CC8FF"},{l:"Bills due",v:"3",d:"Agla: 3 din mein",c:"#FF4F9A"}],
    chartTitle:"Haftay ka kharcha", chartSub:"Rs hazaar mein", bars:[["Hafta 1",28],["Hafta 2",34],["Hafta 3",22],["Hafta 4",31],["Abhi",14]],
    donutTitle:"Kahan gaya paisa", donutLbl:"Total", donutVal:"1.18L", legend:[["Rashan",36,"#C6FF3D"],["Petrol",21,"#C9B6FF"],["Bijli/Gas",13,"#FFD43B"],["Bahar khana",11,"#FF4F9A"],["Baqi",19,"#3A3A46"]],
    duesTitle:"Aane wale bills", dues:[["⚡","Bijli ka bill","3 din mein","Rs 7,850","#FFD43B"],["🔥","Gas ka bill","6 din mein","Rs 3,420","#FF4F9A"],["↻","Committee qist","12 din mein","Rs 10,000","#7CC8FF"],["📶","Internet","2 hafte mein","Rs 3,499","#C9B6FF"]] },
  dutch: { group:"personal", hello:"Salam, Ayesha 👋", title:"Dutch · dost aur trips", tip:"Sara aur Hamza ka hisaab baqi hai. Polite reminder draft kar doon? Bhejna aap ne hai.",
    kpis:[{l:"Aap ko milna hai",v:"Rs 15,000",d:"2 dost",c:"#C6FF3D"},{l:"Aap ne dena hai",v:"Rs 0",d:"Sab clear",c:"#7CC8FF"},{l:"Open splits",v:"3",d:"Trip, dinner, kiraya",c:"#FFB547"},{l:"Settled",v:"7",d:"Is mahine",c:"#C9B6FF"}],
    chartTitle:"Splits per hafta", chartSub:"Rs hazaar mein", bars:[["Hafta 1",6],["Hafta 2",21],["Hafta 3",9],["Hafta 4",12],["Abhi",4]],
    donutTitle:"Kis cheez pe", donutLbl:"Total", donutVal:"84K", legend:[["Trip",55,"#FFB547"],["Dinner",20,"#FF4F9A"],["Flat kiraya",18,"#7CC8FF"],["Baqi",7,"#3A3A46"]],
    duesTitle:"Kis ne kitna dena hai", dues:[["S","Sara","Hunza trip","Rs 6,000","#C9B6FF"],["H","Hamza","Hunza trip","Rs 9,000","#FF4F9A"],["Z","Zoya","Dinner","Settled ✓","#7CC8FF"],["A","Ali","Flat kiraya","Settled ✓","#C6FF3D"]] },
  committee: { group:"personal", hello:"Salam, Ayesha 👋", title:"Office Committee", tip:"Kamran ki qist baqi hai. Reminder draft tayyar hai, bhejna aap ne hai.",
    kpis:[{l:"Qist / mahina",v:"Rs 10,000",d:"10 members",c:"#9AF0FF"},{l:"Is baari",v:"Rs 1,00,000",d:"Nadia ki baari",c:"#C6FF3D"},{l:"Paid",v:"9 / 10",d:"Is mahine",c:"#7CC8FF"},{l:"Aap ki baari",v:"Turn 8",d:"10 mein se",c:"#FF4F9A"}],
    chartTitle:"Qistein aayi", chartSub:"members per mahina", bars:[["Turn 2",10],["Turn 3",10],["Turn 4",9],["Turn 5",10],["Abhi",9]],
    donutTitle:"Committee progress", donutLbl:"Turns", donutVal:"6/10", legend:[["Ho chuki",60,"#9AF0FF"],["Baqi",40,"#3A3A46"]],
    duesTitle:"Members", dues:[["N","Nadia","Is baari","Paid ✓","#C6FF3D"],["F","Faisal","Qist","Paid ✓","#C9B6FF"],["K","Kamran","Qist baqi","Rs 10,000","#FF4F9A"],["M","Mehwish","Qist","Paid ✓","#7CC8FF"]] },
  scan: { group:"personal", hello:"Salam, Ayesha 👋", title:"Bill Scan · is mahine ke bills", tip:"Bijli ka bill 3 din mein due hai. Ek din pehle phir yaad dila dunga.",
    kpis:[{l:"Bills saved",v:"6",d:"Is mahine",c:"#FF4F9A"},{l:"Total",v:"Rs 31,269",d:"6 bills",c:"#C6FF3D"},{l:"Due soon",v:"2",d:"Agla: 3 din mein",c:"#FFD43B"},{l:"Paid",v:"4",d:"✓ marked",c:"#7CC8FF"}],
    chartTitle:"Bills per mahina", chartSub:"Rs hazaar mein", bars:[["4 mahine pehle",24],["3",27],["2",33],["Pichla",29],["Abhi",31]],
    donutTitle:"Bills by type", donutLbl:"Total", donutVal:"31K", legend:[["Bijli",25,"#FFD43B"],["School fees",40,"#FF4F9A"],["Gas",11,"#7CC8FF"],["Internet",11,"#C9B6FF"],["Baqi",13,"#3A3A46"]],
    duesTitle:"Aane wale bills", dues:[["⚡","Bijli ka bill","3 din mein","Rs 7,850","#FFD43B"],["🔥","Gas ka bill","6 din mein","Rs 3,420","#FF4F9A"],["🎒","School fees","2 hafte mein","Rs 12,500","#7CC8FF"],["📶","Internet","Paid ✓","Rs 3,499","#C9B6FF"]] },
  shaadi: { group:"personal", hello:"Salam, Hira 👋", title:"Hira weds Usman 💍", tip:"Decor budget 92% ho gaya. Vendor se baat karne se pehle ek nazar dekh lein.",
    kpis:[{l:"Budget",v:"Rs 35L",d:"3 functions",c:"#FF7AB2"},{l:"Kharch ho chuka",v:"Rs 22.4L",d:"64%",c:"#C6FF3D"},{l:"Vendors",v:"8",d:"3 payments baqi",c:"#C9B6FF"},{l:"Salami record",v:"42",d:"Entries",c:"#FFD43B"}],
    chartTitle:"Function-wise kharcha", chartSub:"Rs lakh mein", bars:[["Mehndi",5.2],["Baraat",11.4],["Walima",5.8]],
    donutTitle:"Kahan ja raha hai", donutLbl:"Total", donutVal:"22.4L", legend:[["Venue & khana",44,"#FF7AB2"],["Jewellery",25,"#FFD43B"],["Jora",14,"#C9B6FF"],["Decor",11,"#FF4F9A"],["Baqi",6,"#3A3A46"]],
    duesTitle:"Vendor payments", dues:[["🏛️","Caterer","Baqi","Rs 4.2L","#FF7AB2"],["🌸","Decor","Baqi","Rs 20,000","#FF4F9A"],["📸","Photography","Advance diya","Rs 1.6L","#7CC8FF"],["👗","Jora","Paid ✓","Rs 3.1L","#C9B6FF"]] },
  tameer: { group:"personal", hello:"Salam, Usman 👋", title:"Naya Ghar · 10 Marla", tip:"Contractor ka naya bill aaya hai: steel 2.1 ton. Check kar ke approve karein.",
    kpis:[{l:"Budget",v:"Rs 85L",d:"3 stages",c:"#FFD43B"},{l:"Kharch ho chuka",v:"Rs 43.7L",d:"51%",c:"#C6FF3D"},{l:"Pending bills",v:"2",d:"Contractor",c:"#FF4F9A"},{l:"Rasidein",v:"64",d:"Saved",c:"#7CC8FF"}],
    chartTitle:"Stage-wise kharcha", chartSub:"Rs lakh mein", bars:[["Foundation",12],["Structure",28],["Finishing",3.7]],
    donutTitle:"Material vs labour", donutLbl:"Total", donutVal:"43.7L", legend:[["Steel",30,"#FFD43B"],["Cement",22,"#C9B6FF"],["Labour",28,"#C6FF3D"],["Eent",12,"#FF4F9A"],["Baqi",8,"#3A3A46"]],
    duesTitle:"Contractor bills", dues:[["🧱","Steel sariya 2.1 ton","Approval baqi","Rs 4.85L","#FFD43B"],["🏗️","Labour (hafta)","Approval baqi","Rs 1.2L","#FF4F9A"],["🪨","Cement 120 bags","Paid ✓","Rs 1.62L","#C9B6FF"],["🧱","Eent 20,000","Paid ✓","Rs 3.4L","#7CC8FF"]] },
  sheet: { group:"personal", hello:"Salam, Ayesha 👋", title:"Sheet Se Hisaab · purana data", tip:"1,284 rows import ho gayi. 12 duplicate entries hata di, check kar lein.",
    kpis:[{l:"Rows imported",v:"1,284",d:"3 sheets",c:"#C9B6FF"},{l:"Categories",v:"14",d:"Match ho gayi",c:"#C6FF3D"},{l:"Duplicates",v:"12",d:"Hata di",c:"#FF4F9A"},{l:"Files",v:"2",d:"Sheet + diary",c:"#7CC8FF"}],
    chartTitle:"Purana kharcha", chartSub:"Rs hazaar per quarter", bars:[["Q1",310],["Q2",295],["Q3",342],["Q4",360]],
    donutTitle:"Purane data mein", donutLbl:"Rows", donutVal:"1,284", legend:[["Rashan",34,"#C6FF3D"],["Bills",22,"#FFD43B"],["Fees",16,"#FF4F9A"],["Petrol",14,"#C9B6FF"],["Baqi",14,"#3A3A46"]],
    duesTitle:"Imported files", dues:[["📄","ghar_kharcha.xlsx","3 sheets","1,284 rows","#C9B6FF"],["📒","Diary pages","Photos","436 entries","#FFD43B"],["✓","Columns matched","Date, amount, category","4 / 4","#C6FF3D"],["⧉","Duplicates","Removed","12","#FF4F9A"]] },
  business: { group:"business", hello:"Salam, Ahmed Traders 👋", title:"Business overview", tip:"5 customers se Rs 3.2L udhaar baqi hai. Polite reminders draft kar doon? Bhejna aap ne hai 🔔",
    kpis:[{l:"Sales",v:"Rs 18.4L",d:"▲ 12% vs pichla mahina",c:"#C6FF3D"},{l:"Expenses",v:"Rs 11.1L",d:"▲ 4% vs pichla mahina",c:"#C9B6FF"},{l:"Profit",v:"Rs 7.3L",d:"Margin 40%",c:"#7CC8FF"},{l:"Udhaar lena",v:"Rs 3.2L",d:"5 customers",c:"#FF4F9A"}],
    chartTitle:"Monthly sales", chartSub:"Rs lakh mein", bars:[["5 m",13],["4 m",14.5],["3 m",15.2],["2 m",16.1],["Pichla",16.4],["Abhi",18.4]],
    donutTitle:"Expenses breakdown", donutLbl:"Total", donutVal:"11.1L", legend:[["Stock",48,"#C9B6FF"],["Salaries",22,"#C6FF3D"],["Rent",12,"#FFD43B"],["Utilities",8,"#FF4F9A"],["Baqi",10,"#3A3A46"]],
    duesTitle:"Due & payable", dues:[["🧾","Sales tax return","12 din mein","Rs 1.1L","#FF4F9A"],["🏬","Dukaan ka rent","10 din mein","Rs 1.3L","#FFD43B"],["📦","Supplier C payment","3 hafte mein","Rs 4.78L","#C9B6FF"],["⚡","Bijli ka bill","4 din mein","Rs 38,200","#7CC8FF"]] },
  procurement: { group:"business", hello:"Salam, Ahmed Traders 👋", title:"Procurement · orders aur quotes", tip:"Cement ke 3 quotes aaye hain. Tax, delivery aur udhaar ke din mila kar teeno ek table mein dekh lein.",
    kpis:[{l:"Open orders",v:"4",d:"Rs 9.6L",c:"#7EF0C0"},{l:"Quotes",v:"7",d:"3 items",c:"#C6FF3D"},{l:"Received",v:"2",d:"Is hafte",c:"#7CC8FF"},{l:"Payable",v:"Rs 4.78L",d:"3 hafte mein",c:"#FF4F9A"}],
    chartTitle:"Purchases per mahina", chartSub:"Rs lakh mein", bars:[["4 m",6.1],["3 m",7.4],["2 m",5.9],["Pichla",8.2],["Abhi",9.6]],
    donutTitle:"Kis cheez pe", donutLbl:"Total", donutVal:"9.6L", legend:[["Cement",50,"#7EF0C0"],["Steel",28,"#C9B6FF"],["Packing",12,"#FFD43B"],["Baqi",10,"#3A3A46"]],
    duesTitle:"Purchase orders", dues:[["📦","PO-118 · Cement 500 bags","Supplier C","Rs 4.78L","#7EF0C0"],["📦","PO-117 · Steel","Supplier A","Rs 3.1L","#C9B6FF"],["📦","PO-116 · Packing","Received ✓","Rs 62,000","#FFD43B"],["📦","PO-115 · Rice 50 bags","Received ✓","Rs 1.1L","#7CC8FF"]] }
};

const risks=[
 {id:"phishing",name:"Phishing & social engineering",help:"Exposure to malicious emails, links, impersonation and credential theft.",default:4},
 {id:"ransomware",name:"Ransomware / malware",help:"Potential for malicious software to disrupt operations or encrypt data.",default:3},
 {id:"access",name:"Weak access control",help:"Shared passwords, excessive privileges, or missing MFA.",default:3},
 {id:"patching",name:"Unpatched systems",help:"Outdated operating systems, applications, firmware, or browsers.",default:3},
 {id:"backup",name:"Backup & recovery gaps",help:"Limited, untested, or connected backups for critical data.",default:3},
 {id:"insider",name:"Insider / human error",help:"Accidental or intentional misuse by staff or trusted users.",default:2}
];
const threatData=[
 ["Phishing","Credential theft, fraud and malware commonly begin with deceptive messages.","High"],
 ["Ransomware","Malware can interrupt operations and make business data unavailable.","High"],
 ["Weak passwords / missing MFA","Compromised credentials can give attackers direct account access.","High"],
 ["Unpatched software","Known vulnerabilities may expose endpoints and servers.","Medium"],
 ["Insider threats","Employees or contractors can accidentally or deliberately expose information.","Medium"],
 ["Third-party risk","Suppliers and cloud services can introduce security dependencies.","Medium"]
];
const mitigations=[
 ["Multi-factor authentication","Protect email, admin, finance and cloud accounts.","Quick win"],
 ["Security awareness","Run short phishing and social-engineering training regularly.","Quick win"],
 ["Backups","Maintain separate, protected backups and test restoration.","Priority"],
 ["Endpoint protection","Use reputable endpoint security and centralized updates.","Priority"],
 ["Patch management","Set a routine for OS, app, browser and firmware updates.","Priority"],
 ["Least privilege","Give users only the access needed for their role.","Core control"],
 ["Firewall & secure Wi-Fi","Separate guest networks and secure business network access.","Core control"],
 ["Incident response plan","Define contacts, containment steps and recovery procedures.","Core control"]
];
const cases=[
 ["Retail / E-commerce",62,["High phishing exposure","Customer account risk","Payment-system dependency"],["MFA + staff training","Web application updates","Backups and monitoring"]],
 ["Professional Services",47,["Cloud account dependency","Sensitive client documents","Small IT team"],["MFA + least privilege","Secure file sharing","Incident response plan"]],
 ["Small Manufacturer",71,["Legacy systems","Operational downtime","Third-party access"],["Network segmentation","Patch/asset inventory","Offline backups"]]
];
const riskInputs=document.getElementById("riskInputs");
risks.forEach((r,i)=>{
 riskInputs.innerHTML+=`<div class="risk-item"><div class="risk-item-top"><span>${r.name}</span><span id="${r.id}Val">${r.default}</span></div><input id="${r.id}" type="range" min="1" max="5" value="${r.default}"><div class="risk-help">${r.help}</div></div>`;
});
risks.forEach(r=>document.getElementById(r.id).addEventListener("input",e=>document.getElementById(r.id+"Val").textContent=e.target.value));
document.getElementById("threatGrid").innerHTML=threatData.map(x=>`<article class="threat-card"><span class="tag">${x[2]} priority</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("");
document.getElementById("mitigationGrid").innerHTML=mitigations.map(x=>`<article class="mit-card"><span class="effort">${x[2]}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("");
document.getElementById("caseGrid").innerHTML=cases.map(x=>`<article class="case-card"><span class="tag">${x[0]}</span><div class="case-score">${x[1]}<small>/100</small></div><p>Illustrative assessment profile</p><ul>${x[2].map(a=>`<li>${a}</li>`).join("")}</ul><hr style="border-color:#242424;border-width:1px 0 0"><p><b>Suggested controls</b></p><ul>${x[3].map(a=>`<li>${a}</li>`).join("")}</ul></article>`).join("");

function calculate(){
 let sum=0; risks.forEach(r=>sum+=Number(document.getElementById(r.id).value));
 let score=Math.round(((sum-risks.length)/(risks.length*4))*100);
 const level=score>=70?"Critical":score>=50?"High":score>=30?"Moderate":"Low";
 const color=score>=70?"#ff304f":score>=50?"#ff6b35":score>=30?"#ffb000":"#42d392";
 document.getElementById("resultScore").textContent=score;
 document.getElementById("scoreValue").textContent=score+" / 100";
 document.getElementById("riskLevel").textContent=level;
 document.getElementById("resultLevel").textContent=level+" Risk";
 document.getElementById("resultLevel").style.color=color;
 document.getElementById("heroScore").textContent=score;
 document.getElementById("riskBar").querySelector("i").style.width=score+"%";
 document.getElementById("scoreRing").style.borderColor=color;
 const controls = score>=70?6:score>=50?5:score>=30?3:2;
 document.getElementById("controlCount").textContent=controls;
 const sorted=risks.map(r=>({name:r.name,v:Number(document.getElementById(r.id).value)})).sort((a,b)=>b.v-a.v).slice(0,3);
 document.getElementById("recommendations").innerHTML=sorted.map(r=>`<div class="recommendation"><b>${r.name}</b><br><span>Priority ${r.v}/5 — review and apply an appropriate control.</span></div>`).join("");
 document.getElementById("resultText").textContent=level==="Low"?"Maintain the baseline and review controls periodically.":level==="Moderate"?"Address the highest-scoring areas and establish a repeatable security routine.":level==="High"?"Prioritize immediate controls for identity, backup, patching and employee awareness.":"Treat the highest-risk areas as urgent and activate incident preparedness and recovery measures.";
}
document.getElementById("calculate").addEventListener("click",calculate);
document.getElementById("reset").addEventListener("click",()=>{risks.forEach(r=>{document.getElementById(r.id).value=r.default;document.getElementById(r.id+"Val").textContent=r.default});calculate()});
document.querySelectorAll(".checklist input").forEach(x=>x.addEventListener("change",()=>{
 const done=[...document.querySelectorAll(".checklist input:checked")].length;
 document.getElementById("checkProgress").textContent=`${done} / 8 completed`;
 document.getElementById("progressBar").style.width=(done/8*100)+"%";
}));
document.querySelector(".menu").addEventListener("click",()=>{const nav=document.querySelector(".topbar nav");nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.top="72px";nav.style.left="0";nav.style.right="0";nav.style.background="#080808";nav.style.padding="20px 5%";nav.style.flexDirection="column"});
calculate();

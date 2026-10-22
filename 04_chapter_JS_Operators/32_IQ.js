let responseTime = 2000;
let sla =1000;
let slaStatus = responseTime <= sla ? "within SLA" : "SLA breached";
console.log('SLA Response:', `${responseTime}`, `${slaStatus}`);//template Literal

// Template literal
console.log(`what is the sla time? ${sla}`)
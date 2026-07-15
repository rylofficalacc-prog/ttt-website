export const kits=[
{slug:"brokemace",name:"BrokeMace Kit",icon:"🔨",description:"Fast mace combat with limited resources and precise movement."},
{slug:"opmanhunt",name:"OPManhunt",icon:"🧭",description:"High-powered manhunt combat built around survival, tracking, and pressure."},
{slug:"bowboostmace",name:"BowBoostMace",icon:"🏹",description:"Momentum-heavy mace combat using bow boosts and advanced movement."}
];
export const tiers=["S+","S","A+","A","B","C","D","E","F"];
export const players=[
{username:"SteelNova",region:"NA",ranks:{brokemace:"S+",opmanhunt:"S",bowboostmace:"A+"},peak:"S+",tests:18,wins:15},
{username:"VoidMace",region:"EU",ranks:{brokemace:"S",opmanhunt:"A+",bowboostmace:"S+"},peak:"S+",tests:16,wins:12},
{username:"NightPulse",region:"NA",ranks:{brokemace:"A+",opmanhunt:"S+",bowboostmace:"S"},peak:"S+",tests:20,wins:16},
{username:"BlueVortex",region:"AS",ranks:{brokemace:"A",opmanhunt:"A+",bowboostmace:"A+"},peak:"A+",tests:11,wins:7},
{username:"PurpleRush",region:"EU",ranks:{brokemace:"B",opmanhunt:"A",bowboostmace:"A"},peak:"A",tests:9,wins:5},
{username:"BlackSteel",region:"NA",ranks:{brokemace:"C",opmanhunt:"B",bowboostmace:"B"},peak:"B",tests:8,wins:4}
];
export const results=[
{player:"SteelNova",kit:"BrokeMace Kit",old:"S",now:"S+",tester:"snot2",score:"7-3"},
{player:"NightPulse",kit:"OPManhunt",old:"S",now:"S+",tester:"TTT Tester",score:"6-4"},
{player:"VoidMace",kit:"BowBoostMace",old:"S",now:"S+",tester:"snot2",score:"8-2"}
];
export const getKit=s=>kits.find(k=>k.slug===s); export const getPlayer=u=>players.find(p=>p.username.toLowerCase()===u.toLowerCase());

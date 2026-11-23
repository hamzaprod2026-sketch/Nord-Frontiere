
window.NF_DEMO={
 clients:[
 {id:1,first:"Salma",last:"El Amrani",email:"salma@example.ma",phone:"+212 6 12 34 56 78",city:"Casablanca",country:"Maroc",status:"Actif"},
 {id:2,first:"Youssef",last:"Bennani",email:"y.bennani@example.ma",phone:"+212 6 22 11 09 87",city:"Rabat",country:"Maroc",status:"Actif"},
 {id:3,first:"Nadia",last:"Tazi",email:"nadia.t@example.ma",phone:"+212 6 45 33 21 10",city:"Marrakech",country:"Maroc",status:"Prospect"},
 {id:4,first:"Omar",last:"Idrissi",email:"omar.i@example.ma",phone:"+212 6 88 21 43 10",city:"Tanger",country:"Maroc",status:"Actif"}
 ],
 prospects:[
 {id:1,name:"Imane Alaoui",phone:"+212 6 10 20 30 40",destination:"Turquie",budget:"15 000 MAD",date:"2026-12-15",source:"Site web",owner:"Amine",status:"Nouveau"},
 {id:2,name:"Karim Fassi",phone:"+212 6 50 60 70 80",destination:"Égypte",budget:"12 000 MAD",date:"2027-01-10",source:"WhatsApp",owner:"Sara",status:"Devis envoyé"},
 {id:3,name:"Lina Saidi",phone:"+212 6 77 88 99 00",destination:"Maroc",budget:"6 000 MAD",date:"2026-12-02",source:"Téléphone",owner:"Amine",status:"Contacté"}
 ],
 trips:[
 {id:1,name:"Villes impériales",destination:"Maroc",date:"2026-12-10",duration:"8 jours",price:8900,seats:18,status:"Publié"},
 {id:2,name:"Évasion Sahara",destination:"Merzouga",date:"2027-01-05",duration:"4 jours",price:4500,seats:12,status:"Publié"},
 {id:3,name:"Escapade bleue",destination:"Chefchaouen",date:"2027-02-14",duration:"3 jours",price:2900,seats:20,status:"Brouillon"}
 ],
 bookings:[
 {id:1,ref:"NF-2026-001",client:"Salma El Amrani",trip:"Villes impériales",destination:"Maroc",date:"2026-12-10",people:2,total:17800,paid:10000,status:"Confirmée"},
 {id:2,ref:"NF-2026-002",client:"Youssef Bennani",trip:"Évasion Sahara",destination:"Merzouga",date:"2027-01-05",people:3,total:13500,paid:4500,status:"En attente"},
 {id:3,ref:"NF-2026-003",client:"Nadia Tazi",trip:"Escapade bleue",destination:"Chefchaouen",date:"2027-02-14",people:2,total:5800,paid:0,status:"Devis"}
 ],
 payments:[
 {id:1,ref:"PAY-001",client:"Salma El Amrani",booking:"NF-2026-001",amount:10000,date:"2026-11-18",method:"Virement",status:"Reçu"},
 {id:2,ref:"PAY-002",client:"Youssef Bennani",booking:"NF-2026-002",amount:4500,date:"2026-11-20",method:"Carte",status:"Reçu"},
 {id:3,ref:"PAY-003",client:"Nadia Tazi",booking:"NF-2026-003",amount:1000,date:"2026-11-22",method:"Espèces",status:"En attente"}
 ],
 employees:[
 {id:1,name:"Amine Berrada",email:"amine@nordfrontiere.demo",phone:"+212 6 11 22 33 44",role:"Conseiller voyages",status:"Actif"},
 {id:2,name:"Sara Lahlou",email:"sara@nordfrontiere.demo",phone:"+212 6 55 66 77 88",role:"Responsable commerciale",status:"Actif"}
 ],
 documents:[{id:1,name:"Passeport_Salma.pdf",client:"Salma El Amrani",type:"Passeport",date:"2026-11-18",category:"Identité"},{id:2,name:"Devis_NF-002.pdf",client:"Youssef Bennani",type:"Devis",date:"2026-11-20",category:"Commercial"}]
};

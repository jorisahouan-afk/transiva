const transivaLocations={
  "France métropolitaine":["Paris","Lyon","Marseille","Lille","Bordeaux","Nantes","Toulouse","Le Havre","Rouen","Autre ville / commune"],
  "La Réunion":["Saint-Denis","Saint-Paul","Saint-Pierre","Le Port","Le Tampon","Saint-André","Saint-Louis","Saint-Benoît","Autre ville / commune"],
  "Martinique":["Fort-de-France","Le Lamentin","Schoelcher","Le Robert","Le François","Ducos","Autre ville / commune"],
  "Guadeloupe":["Pointe-à-Pitre","Les Abymes","Baie-Mahault","Le Gosier","Sainte-Anne","Basse-Terre","Autre ville / commune"],
  "Guyane":["Cayenne","Matoury","Rémire-Montjoly","Kourou","Saint-Laurent-du-Maroni","Autre ville / commune"],
  "Mayotte":["Mamoudzou","Dzaoudzi","Koungou","Dembéni","Pamandzi","Autre ville / commune"],
  "Bénin":["Cotonou","Porto-Novo","Abomey-Calavi","Parakou","Ouidah","Autre ville / commune"],
  "Cameroun":["Douala","Yaoundé","Bafoussam","Garoua","Kribi","Autre ville / commune"],
  "Gabon":["Libreville","Port-Gentil","Franceville","Oyem","Autre ville / commune"],
  "Côte d’Ivoire":["Abidjan","Bouaké","San-Pédro","Yamoussoukro","Autre ville / commune"],
  "Sénégal":["Dakar","Thiès","Saint-Louis","Kaolack","Ziguinchor","Autre ville / commune"],
  "Autre pays / territoire":["Autre ville / commune"]
};
document.querySelectorAll("[data-location-group]").forEach(group=>{
  const country=group.querySelector("[data-country]");
  const city=group.querySelector("[data-city]");
  const other=group.querySelector("[data-other-city]");
  if(!country||!city||!other)return;
  const updateCities=()=>{
    const cities=transivaLocations[country.value]||[];
    city.innerHTML='<option value="">Sélectionner une ville ou commune</option>';
    cities.forEach(name=>city.add(new Option(name,name)));
    city.disabled=!country.value;
    other.hidden=true;other.required=false;other.value="";
  };
  country.addEventListener("change",updateCities);
  city.addEventListener("change",()=>{
    const custom=city.value==="Autre ville / commune";
    other.hidden=!custom;other.required=custom;
    if(custom)other.focus();
  });
  updateCities();
});

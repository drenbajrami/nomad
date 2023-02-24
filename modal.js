window.onload = function() {
    let paths = document.querySelectorAll("#map path");
for (let i = 0; i < paths.length; i++) {
    paths[i].addEventListener("click", function(event) {
        let country = this.getAttribute("name");
        setModalContent(country);
    });
} 

function setModalContent(country) {
    let modal = document.getElementById("modal");
    let modalTitle = document.getElementById("modal-title");
    let modalInfo = document.getElementById("modal-info");
    let modalFlag = document.getElementById("modal-flag");
    modalTitle.innerHTML = country;
    modalInfo.innerHTML = countryInfo[country].information;
    modalFlag.src = countryFlags[country].image;
    modal.style.display = "block";
}

let closeModal = document.getElementById("close-modal");
closeModal.addEventListener("click", function(event) {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
});

const countryInfo = {

    Afghanistan: {
        information: "Afghanistan is a landlocked country located in South Asia and Central Asia. It has been in a state of political and economic turmoil for decades, with the Soviet-Afghan War and the ongoing War in Afghanistan being the most notable conflicts. Kabul is the capital and largest city of Afghanistan.",
        image: "https://cdn.britannica.com/40/5340-004-B25ED5CF/Flag-Afghanistan.jpg"
    },
    Albania: {
        information: "Albania is a country located in the Balkans region of Europe. It declared independence from the Ottoman Empire in 1912, and has a long history of political turmoil and economic struggles. Tirana is the capital and largest city of Albania.",
        image: "./albania.png"
    },
    Algeria: {
        information: "Algeria is a country located in North Africa. It declared independence from France in 1962, after a long and bloody war. Algeria is a major producer of oil and natural gas. Algiers is the capital and largest city of Algeria.",
        image: ""
    },
    
    Angola: {
        information: "Angola is a country located in Southern Africa. It declared independence from Portugal in 1975, after a long and bloody war. Angola is a major producer of oil. Luanda is the capital and largest city of Angola.",
        image: ""
    },
    AntiguaDeps: {
        information: "Antigua and Barbuda is a country located in the Caribbean. It is an independent Commonwealth realm. The country is made up of two major inhabited islands, Antigua and Barbuda, and a number of smaller islands. Saint John's is the capital and largest city of Antigua and Barbuda.",
        image: ""
    },
    Argentina: {
        information: "Argentina is a country located in South America. It declared independence from Spain in 1816, and has a diverse culture and history. Buenos Aires is the capital and largest city of Argentina.",
        image: ""
    },
    Armenia: {
        information: "Armenia is a country located in the Caucasus region of Eurasia. It was the first country to adopt Christianity as a state religion in 301 AD. Armenia has a complex history, having been ruled by various empires throughout its history. Yerevan is the capital and largest city of Armenia.",
        image: ""
    },
    Australia: {
        information: "Australia is a country located in the southern hemisphere, comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. It is the world's sixth-largest country by total area and has a diverse population. Canberra is the capital and Sydney is the largest city of Australia.",
        image: ""
    },
    Austria: {
        information: "Austria is a country located in Central Europe. It has a rich cultural heritage and has been a center of European music, art, and architecture. Vienna is the capital and largest city of Austria.",
        image: ""
    },
    Azerbaijan: {
        information: "Azerbaijan is a country located in the Caucasus region of Eurasia. It gained independence from the Soviet Union in 1991, and has been a unitary semi-presidential republic since then. The current president is Ilham Aliyev and the capital and largest city is Baku.",
        image: ""
    },
    Bahamas: {
        information: "The Bahamas is a country located in the Caribbean, consisting of more than 700 islands, cays, and islets. It was a British colony until 1973 and gained independence. The Bahamas is known for its tourism and offshore banking industries. Nassau is the capital and largest city of the Bahamas.",
        image: ""
    },
    Bahrain: {
        information: "Bahrain is an island country located in the Persian Gulf. It has been ruled by the Al Khalifa family since the late 18th century, and was a British protectorate until 1971. Bahrain is a major center for the oil and banking industries. Manama is the capital and largest city of Bahrain.",
        image: ""
    },
    Bangladesh: {
        information: "Bangladesh is a country located in South Asia, bordered by India and Myanmar. It declared independence from Pakistan in 1971 and has a population of over 160 million people. Bangladesh is known for its large garment industry and is one of the world's most densely populated countries. Dhaka is the capital and largest city of Bangladesh.",
        image: ""
    },
    Barbados: {
        information: "Barbados is an island country located in the Caribbean. It was a British colony until 1966 and gained independence. Barbados is known for its tourism and rum production industries. Bridgetown is the capital and largest city of Barbados.",
        image: ""
    },
    Belarus: {
        information: "Belarus is a country located in Eastern Europe, bordered by Russia, Latvia, Lithuania, Poland, and Ukraine. It was a republic of the Soviet Union until 1991 and has a population of over 9 million people. Belarus has a command economy and is led by an authoritarian government. Minsk is the capital and largest city of Belarus.",
        image: ""
    },
    Belgium: {
        information: "Belgium is a country located in Western Europe, bordered by the Netherlands, Germany, Luxembourg, and France. It has a population of over 11 million people and is known for its chocolate, beer, and waffles. Brussels is the capital and largest city of Belgium, it is also the headquarters of the European Union and NATO.",
        image: ""
    },
    Belize: {
        information: "Belize is a country located in Central America, bordered by Mexico and Guatemala. It was a British colony until 1981 and gained independence. Belize is known for its diverse culture, wildlife and Barrier reef. Belmopan is the capital and largest city of Belize.",
        image: ""
    },
    Benin: {
        information: "Benin is a country located in West Africa, bordered by Togo, Burkina Faso, Niger, and Nigeria. It was a French colony until 1960 and gained independence. Benin is known for its rich history and culture, particularly the Kingdom of Dahomey. Porto-Novo is the official capital of Benin, but Cotonou is the largest city and de facto capital.",
        image: ""
    },
    Bhutan: {
        information: "Bhutan is a landlocked country located in South Asia, bordered by China and India. It is known for its unique culture, traditional Buddhism and commitment to Gross National Happiness. Bhutan has been a monarchy since 1907. Thimphu is the capital and largest city of Bhutan.",
        image: ""
    },
    Bolivia: {
    information: "Bolivia is a landlocked country located in South America. It is known for its diverse culture, with a large indigenous population and a mix of Spanish and indigenous influences. La Paz is the administrative capital and largest city of Bolivia, while Sucre is the constitutional capital.",
    image: ""
    },
    Bosnia: {
    information: "Bosnia and Herzegovina is a country located in the Balkans region of Europe. It is a federal country made up of two entities, the Federation of Bosnia and Herzegovina and Republika Srpska. Sarajevo is the capital and largest city of Bosnia and Herzegovina.",
    image: ""
    },
    Botswana: {
    information: "Botswana is a country located in Southern Africa. It is known for its wildlife and national parks, and has a stable economy based on diamond mining. Gaborone is the capital and largest city of Botswana.",
    image: ""
    },
    Brazil: {
    information: "Brazil is the largest country in South America and the fifth largest country in the world by both area and population. It is known for its diverse culture, with Portuguese influences, and its major economic industries of agriculture, mining, and manufacturing. Brazil's capital is Brasília, and its largest city is São Paulo.",
    image: ""
    },
    Brunei: {
    information: "Brunei is a small country located on the island of Borneo, in Southeast Asia. It is a monarchy with a rich culture and history, and its economy is heavily dependent on its oil and natural gas reserves. Bandar Seri Begawan is the capital and largest city of Brunei.",
    image: ""
    },
    Bulgaria: {
    information: "Bulgaria is a country located in the Balkans region of Europe. It has a rich history and culture, with influences from both the Eastern Orthodox Church and Ottoman Empire. Sofia is the capital and largest city of Bulgaria.",
    image: ""
    },
    BurkinaFaso: {
    information: "Burkina Faso is a country located in West Africa. It gained independence from France in 1960 and has a history of political instability. Ouagadougou is the capital and largest city of Burkina Faso.",
    image: ""
    },
    Burundi: {
    information: "Burundi is a landlocked country located in East Africa. It gained independence from Belgium in 1962 and has a history of political turmoil and ethnic conflict. Bujumbura is the capital and largest city of Burundi.",
    image: ""
    },
    Cambodia: {
    information: "Cambodia is a country located in Southeast Asia. It has a rich history and culture, with the famous temple complex of Angkor Wat located in the country. Phnom Penh is the capital and largest city of Cambodia.",
    image: ""
    },
    Cameroon: {
    information: "Cameroon is a country located in Central Africa. It gained independence from France and the UK in 1960 and has a diverse culture and economy. Yaoundé is the capital and largest city of Cameroon.",
    image: ""
    },
    Canada: {
    information: "Canada is a country in North America, and it is the second-largest country in the world by total area. Canada is a federal parliamentary constitutional monarchy and has a diverse population. The official languages are English and French. Ottawa is the capital and Toronto is the largest city of Canada.",
    image: ""
    }, 
    Cape_Verde: {
    information: "Cape Verde is a country located in the Central Atlantic Ocean. It is an island country, and it was uninhabited when the Portuguese arrived in the 15th century. Cape Verde is a parliamentary representative democratic republic and Praia is its capital and largest city.",
    image: ""
    },
    CentralAfricanRepublic: {
    information: "The Central African Republic is a landlocked country located in Central Africa. It gained independence from France in 1960. The Central African Republic is a semi-presidential republic and Bangui is its capital and largest city.",
    image: ""
    },
    Chad: {
    information: "Chad is a country located in North Central Africa. It gained independence from France in 1960. Chad is a federal semi-presidential republic and N'Djamena is its capital and largest city.",
    image: ""
    },
    Chile: {
    information: "Chile is a country located in South America. It stretches from the Andes mountains in the east, to the Pacific Ocean on the west coast. Chile is a presidential representative democratic republic and Santiago is its capital and largest city.",
    image: ""
    },
    China: {
    information: "China is a country located in East Asia. It is the most populous country in the world, with over 1.4 billion people. China is a one-party socialist republic and Beijing is its capital and largest city.",
    image: ""
    },
    Colombia: {
    information: "Colombia is a country located in South America. It is the fourth most populous country in Latin America and has a diverse culture. Colombia is a unitary constitutional republic and Bogotá is its capital and largest city.",
    image: ""
    },
    Comoros: {
    information: "The Union of the Comoros is an island country located in the Indian Ocean. It is the third smallest African country by area. Comoros is a federal presidential republic and Moroni is its capital and largest city.",
    image: ""
    },
    Congo: {
    information: "The Republic of the Congo is a country located in Central Africa. It gained independence from France in 1960. Congo is a unitary semi-presidential republic and Brazzaville is its capital and largest city.",
    image: ""
    },
    CostaRica: {
    information: "Costa Rica is a country located in Central America. It is known for its biodiversity, and ecotourism is a major source of income. Costa Rica is a unitary presidential constitutional republic and San José is its capital and largest city.",
    image: ""
    },
    Croatia: {
    information: "Croatia is a country located in Central Europe and Southeast Europe. It gained independence from Yugoslavia in 1991. Croatia is known for its beautiful coastal towns and historic cities, such as Dubrovnik and Split. Zagreb is the capital and largest city of Croatia.",
    image: ""
    },
    Cuba: {
        information: "Cuba is an island country located in the Caribbean Sea. It was ruled by Fidel Castro for decades until his retirement in 2008. Cuba is known for its revolutionary history, vibrant culture, and beautiful beaches. Havana is the capital and largest city of Cuba.",
        image: ""
    },
    Cyprus: {
        information: "Cyprus is an island country located in the Eastern Mediterranean. It has been divided into a Greek-speaking south and a Turkish-speaking north since the 1970s. Cyprus is known for its rich history, beautiful beaches, and ancient ruins. Nicosia is the capital of Cyprus.",
        image: ""
    },
    Czechia: {
        information: "The Czech Republic is a country located in Central Europe. It was formed in 1993 after the split of Czechoslovakia. The Czech Republic is known for its historic cities, such as Prague, and its beautiful landscapes. Prague is the capital and largest city of the Czech Republic.",
        image: ""
    },
    Denmark: {
    information: "Denmark is a country located in Northern Europe. It is a unitary parliamentary constitutional monarchy and Copenhagen is its capital and largest city. Denmark is known for its welfare state and high standard of living.",
    image: ""
    },
    Djibouti: {
    information: "Djibouti is a country located in the Horn of Africa. It gained independence from France in 1977. Djibouti is a semi-presidential republic and Djibouti City is its capital and largest city.",
    image: ""
    },
    Dominica: {
    information: "Dominica is a country located in the Caribbean. It gained independence from the United Kingdom in 1978. Dominica is a parliamentary democracy and Roseau is its capital and largest city.",
    image: ""
    },
    DominicanRepublic: {
    information: "The Dominican Republic is a country located in the Caribbean. It gained independence from Spain in 1844. The Dominican Republic is a unitary presidential constitutional republic and Santo Domingo is its capital and largest city.",
    image: ""
    },
    TimorLeste: {
    information: "East Timor, also known as Timor-Leste, is a country located in Southeast Asia. It gained independence from Portugal in 1975 and from Indonesia in 2002. East Timor is a semi-presidential representative democratic republic and Dili is its capital and largest city.",
    image: ""
    },
    Ecuador: {
    information: "Ecuador is a country located in South America. It is a unitary presidential constitutional republic and Quito is its capital and largest city. Ecuador is known for its diverse culture and rich history.",
    image: ""
    },
    Egypt: {
    information: "Egypt is a country located in North Africa and Southwest Asia. It is a unitary semi-presidential republic and Cairo is its capital and largest city. Egypt is known for its ancient civilization and landmarks such as the Great Sphinx and the pyramids.",
    image: ""
    },
    ElSalvador: {
    information: "El Salvador is a country located in Central America. It gained independence from Spain in 1821. El Salvador is a presidential representative democratic republic and San Salvador is its capital and largest city.",
    image: ""
    },
    EquatorialGuinea: {
    information: "Equatorial Guinea is a country located in Central Africa. It gained independence from Spain in 1968. Equatorial Guinea is a presidential representative democratic republic and Malabo is its capital and largest city.",
    image: ""
    },
    Eritrea: {
    information: "Eritrea is a country located in the Horn of Africa. It gained independence from Ethiopia in 1993. Eritrea is a federal parliamentary republic and Asmara is its capital and largest city.",
    image: ""
    },
    Estonia: {
    information: "Estonia is a country located in Northern Europe. It gained independence from the Soviet Union in 1991. Estonia is a parliamentary republic and Tallinn is its capital and largest city.",
    image: ""
    },
    Ethiopia: {
    information: "Ethiopia is a country located in the Horn of Africa. It is a federal semi-presidential republic and Addis Ababa is its capital and largest city. Ethiopia is known for its ancient history and diverse culture.",
    image: ""
    },
    Fiji: {
    information: "Fiji is a country located in the Pacific Ocean. It is an archipelago made up of over 300 islands. Fiji is a parliamentary republic and Suva is its capital and largest city.",
    image: ""
    },
    Finland: {
    information: "Finland is a country located in Northern Europe. It is known for its vast forests, thousands of lakes and the Northern Lights. Finland is a parliamentary republic and its capital and largest city is Helsinki.",
    image: ""
    },
    France: {
    information: "France is a country located in Western Europe. It is known for its rich culture, history and landmarks such as the Eiffel Tower and the Louvre. France is a unitary semi-presidential constitutional republic and its capital and largest city is Paris.",
    image: ""
    },
    FrenchGuiana: {
    information: "French Guiana is an overseas department of France on the northeast coast of South America, composed mainly of tropical rainforest. ",
    image: ""
    },
    Gabon: {
    information: "Gabon is a country located in Central Africa. It gained independence from France in 1960. Gabon is a presidential republic and its capital and largest city is Libreville.",
    image: ""
    },
    TheGambia: {
    information: "The Gambia is a country located in West Africa. It is a small country surrounded by Senegal. The Gambia is a presidential republic and Banjul is its capital and largest city.",
    image: ""
    },
    Georgia: {
    information: "Georgia is a country located in the Caucasus region of Eurasia. It is known for its diverse landscapes, rich culture and history. Georgia is a unitary parliamentary semi-presidential republic and its capital and largest city is Tbilisi.",
    image: ""
    },
    Germany: {
    information: "Germany is a country located in Central Europe. It is known for its rich culture, history and landmarks such as the Berlin Wall and Neuschwanstein Castle. Germany is a federal parliamentary republic and its capital and largest city is Berlin.",
    image: ""
    },
    Ghana: {
    information: "Ghana is a country located in West Africa. It gained independence from the UK in 1957. Ghana is a unitary presidential constitutional republic and its capital and largest city is Accra.",
    image: ""
    },
    Greece: {
    information: "Greece is a country located in Southeast Europe. It is known for its rich history and landmarks such as the Acropolis and the Parthenon. Greece is a unitary parliamentary semi-presidential republic and its capital and largest city is Athens.",
    image: ""
    },
    Grenada: {
    information: "Grenada is a country located in the Caribbean. It is an island country made up of Grenada, Carriacou and Petite Martinique. Grenada is a parliamentary constitutional monarchy and its capital and largest city is St. George's.",
    image: ""
    },
    Guatemala: {
    information: "Guatemala is a country located in Central America. It is known for its rich culture, history and landmarks such as the Tikal National Park. Guatemala is a presidential representative democratic republic and its capital and largest city is Guatemala City.",
    image: ""
    },
    Guinea: {
    information: "Guinea is a country located in West Africa. It gained independence from France in 1958. Guinea is a presidential republic and its capital and largest city is Conakry.",
    image: ""
    },
    GuineaBissau: {
    information: "Guinea-Bissau is a country located in West Africa. It gained independence from Portugal in 1973. Guinea-Bissau is a semi-presidential representative democratic republic and Bissau is its capital and largest city.",
    image: ""
    },
    Guyana: {
    information: "Guyana is a country located in South America. It gained independence from the United Kingdom in 1966. Guyana is a presidential representative democratic republic and Georgetown is its capital and largest city.",
    image: ""
    },
    Haiti: {
    information: "Haiti is a country located on the island of Hispaniola in the Caribbean. It gained independence from France in 1804. Haiti is a unitary semi-presidential constitutional republic and Port-au-Prince is its capital and largest city.",
    image: ""
    },
    Honduras: {
    information: "Honduras is a country located in Central America. It gained independence from Spain in 1821. Honduras is a unitary presidential constitutional republic and Tegucigalpa is its capital and largest city.",
    image: ""
    },
    Hungary: {
    information: "Hungary is a country located in Central Europe. It gained independence from the Austro-Hungarian Empire in 1918. Hungary is a parliamentary representative democratic republic and Budapest is its capital and largest city.",
    image: ""
    },
    Iceland: {
    information: "Iceland is a country located in Northern Europe. It is known for its volcanic activity and geothermal power. Iceland is a unitary parliamentary constitutional republic and Reykjavik is its capital and largest city.",
    image: ""
    },
    India: {
    information: "India is a country located in South Asia. It gained independence from the British Empire in 1947. India is a federal parliamentary republic and New Delhi is its capital and largest city.",
    image: ""
    },
    Indonesia: {
    information: "Indonesia is a country located in Southeast Asia. It gained independence from the Netherlands in 1945. Indonesia is a presidential unitary constitutional republic and Jakarta is its capital and largest city.",
    image: ""
    },
    Iran: {
    information: "Iran is a country located in Western Asia. It gained independence from the Qajar dynasty in 1925. Iran is an Islamic republic and Tehran is its capital and largest city.",
    image: ""
    },
    Iraq: {
    information: "Iraq is a country located in Western Asia. It gained independence from the British Empire in 1932. Iraq is a federal parliamentary republic and Baghdad is its capital and largest city.",
    image: ""
    },
    Ireland: {
    information: "The Republic of Ireland is a country located in Western Europe. It gained independence from the United Kingdom in 1922. The Republic of Ireland is a parliamentary democracy and Dublin is its capital and largest city.",
    image: ""
    },
    Israel: {
    information: "Israel is a country located in Western Asia. It gained independence in 1948. Israel is a parliamentary democracy and Jerusalem is its capital and largest city.",
    image: ""
    },
    Italy: {
    information: "Italy is a country located in Southern Europe. It is known for its art, architecture, and fashion. Italy is a parliamentary constitutional republic and Rome is its capital and largest city.",
    image: ""
    },
    CôtedIvoire: {
    information: "Ivory Coast, officially the Republic of Côte d'Ivoire, is a country located in West Africa. It gained independence from France in 1960. It is a unitary semi-presidential constitutional republic, and Yamoussoukro is its administrative capital and Abidjan is its economic capital and largest city.",
    image: ""
    },
    Jamaica: {
    information: "Jamaica is an island country located in the Caribbean Sea. It gained independence from the United Kingdom in 1962. Jamaica is a constitutional parliamentary democracy and a Commonwealth realm, and Kingston is its capital and largest city.",
    image: ""
    },
    Japan: {
    information: "Japan is an island country located in East Asia. It is a constitutional monarchy with an emperor and a parliamentary government. Japan is one of the world's most technologically advanced countries and is known for its automobiles, electronics, and animation. Tokyo is its capital and largest city.",
    image: ""
    },
    Jordan: {
    information: "Jordan is a country located in Western Asia. It gained independence from the United Kingdom in 1946. Jordan is a constitutional monarchy and a parliamentary democracy, and Amman is its capital and largest city.",
    image: ""
    },
    Kazakhstan: {
    information: "Kazakhstan is a country located in Central Asia. It gained independence from the Soviet Union in 1991. Kazakhstan is a presidential republic and Astana is its capital and largest city.",
    image: ""
    },
    Kenya: {
    information: "Kenya is a country located in East Africa. It gained independence from the United Kingdom in 1963. Kenya is a presidential representative democratic republic and Nairobi is its capital and largest city.",
    image: ""
    },
    Kiribati: {
    information: "Kiribati is an island country located in the Pacific Ocean. It gained independence from the United Kingdom in 1979. Kiribati is a presidential representative democratic republic and Tarawa is its capital.",
    image: ""
    },
    NorthKorea: {
    information: "North Korea, officially the Democratic People's Republic of Korea, is a country located in East Asia. It is a one-party state under a communist government and is often referred to as the Hermit Kingdom. Pyongyang is its capital and largest city.",
    image: ""
    },
    SouthKorea: {
    information: "South Korea, officially the Republic of Korea, is a country located in East Asia. It is a parliamentary democracy and is known for its technology, pop culture and K-pop. Seoul is its capital and largest city.",
    image: ""
    },
    Kosovo: {
    information: "Kosovo is a partially recognized state in Southeastern Europe. It declared independence from Serbia in 2008. Kosovo is a parliamentary democracy, and Pristina is its capital and largest city.",
    image: ""
    },
    Kuwait: {
    information: "Kuwait is a country located in Western Asia. It gained independence from the United Kingdom in 1961. Kuwait is a constitutional emirate and a parliamentary democracy, and Kuwait City is its capital and largest city.",
    image: ""
    },
    Kyrgyzstan: {
    information: "Kyrgyzstan is a country located in Central Asia. It gained independence from the Soviet Union in 1991. Kyrgyzstan is a presidential representative democratic republic, and Bishkek is its capital and largest city.",
    image: ""
    },
    Laos: {
    information: "Laos is a country located in Southeast Asia. It is known for its mountainous terrain, French colonial architecture and Buddhist monasteries. Laos is a unitary socialist one-party socialist republic and Vientiane is its capital and largest city.",
    image: ""
    },
    Latvia: {
    information: "Latvia is a country located in Northern Europe. It gained independence from the Soviet Union in 1991. Latvia is a parliamentary democracy and republic and Riga is its capital and largest city.",
    image: ""
    },
    Lebanon: {
    information: "Lebanon is a country located in Western Asia. It is known for its diverse religious communities, Mediterranean coastline and rich history. Lebanon is a parliamentary democratic republic and Beirut is its capital and largest city.",
    image: ""
    },
    Lesotho: {
    information: "Lesotho is a country located in Southern Africa. It is an enclave, completely surrounded by South Africa. Lesotho is a constitutional monarchy and Maseru is its capital and largest city.",
    image: ""
    },
    Liberia: {
    information: "Liberia is a country located in West Africa. It was founded by freed American slaves in 1822. Liberia is a unitary presidential constitutional republic and Monrovia is its capital and largest city.",
    image: ""
    },
    Libya: {
    information: "Libya is a country located in North Africa. It is known for its Mediterranean coastline and desert landscapes. Libya is a federal semi-presidential constitutional republic and Tripoli is its capital and largest city.",
    image: ""
    },
    Liechtenstein: {
    information: "Liechtenstein is a country located in Western Europe. It is a small, alpine country, bordered by Switzerland and Austria. Liechtenstein is a constitutional monarchy and Vaduz is its capital and largest city.",
    image: ""
    },
    Lithuania: {
    information: "Lithuania is a country located in Northern Europe. It gained independence from the Soviet Union in 1990. Lithuania is a parliamentary democratic republic and Vilnius is its capital and largest city.",
    image: ""
    },
    Luxembourg: {
    information: "Luxembourg is a country located in Western Europe. It is known for its medieval castles, picturesque countryside and financial center. Luxembourg is a parliamentary constitutional monarchy and Luxembourg City is its capital and largest city.",
    image: ""
    },
    Macedonia: {
    information: "Macedonia is a country located in the Balkans. It gained independence from Yugoslavia in 1991. Macedonia is a unitary parliamentary constitutional republic and Skopje is its capital and largest city.",
    image: ""
    },
    Madagascar: {
    information: "Madagascar is an island country located in the Indian Ocean. It is known for its biodiversity and unique wildlife. Madagascar is a semi-presidential republic and Antananarivo is its capital and largest city.",
    image: ""
    },
    Malawi: {
    information: "Malawi is a country located in Southeast Africa. It is known for its large freshwater lake, Lake Malawi. Malawi is a unitary presidential constitutional republic and Lilongwe is its capital and largest city.",
    image: ""
    },
    Malaysia: {
    information: "Malaysia is a country located in Southeast Asia. It is made up of two regions separated by the South China Sea: Peninsular Malaysia and East Malaysia. Malaysia is a federal constitutional monarchy and Kuala Lumpur is its capital and largest city.",
    image: ""
    },
    Maldives: {
    information: "The Maldives is a country located in South Asia and consists of a chain of 26 atolls. The Maldives is known for its beaches, blue lagoons, and extensive reefs. The Maldives is a presidential republic and Malé is its capital and largest city.",
    image: ""
    },
    Mali: {
    information: "Mali is a country located in West Africa. It is known for its desert landscapes, such as the Sahara and the Adrar des Ifoghas massif. Mali is a unitary semi-presidential constitutional republic and Bamako is its capital and largest city.",
    image: ""
    },
    Malta: {
    information: "Malta is an island country located in the Mediterranean Sea. It is known for its historic sites, such as the Megalithic Temples of Malta, and its coastal cities. Malta is a parliamentary republic and Valletta is its capital and largest city.",
    image: ""
    },
    Marshall_Islands: {
    information: "The Marshall Islands is a country located in the Pacific Ocean. It is made up of two chains of islands, the Ratak Chain and the Ralik Chain. The Marshall Islands is a presidential republic and Majuro is its capital and largest city.",
    image: ""
    },
    Mauritania: {
    information: "Mauritania is a country located in West Africa. It is known for its desert landscapes, such as the Sahara, and its historic cities, such as Chinguetti. Mauritania is an Islamic republic and Nouakchott is its capital and largest city.",
    image: ""
    },
    Mauritius: {
    information: "Mauritius is an island country located in the Indian Ocean. It is known for its beaches, coral reefs, and diverse culture. Mauritius is a parliamentary republic and Port Louis is its capital and largest city.",
    image: ""
    },
    Mexico: {
    information: "Mexico is a country located in North America. It is known for its ancient civilizations, such as the Aztecs and the Maya, and its diverse landscapes, such as deserts, rainforests, and beaches. Mexico is a federal presidential constitutional republic and Mexico City is its capital and largest city.",
    image: "https://cdn.britannica.com/73/2573-004-29818847/Flag-Mexico.jpg"
    },
    Micronesia: {
    information: "Micronesia is a country located in the Pacific Ocean. It is made up of four island states: Kosrae, Pohnpei, Chuuk, and Yap. Micronesia is a federal semi-presidential republic and Palikir is its capital and largest city.",
    image: ""
    },
    Moldova: {
    information: "Moldova is a country located in Eastern Europe. It is known for its wine, and its historic cities, such as Chișinău. Moldova is a unitary parliamentary constitutional republic and Chișinău is its capital and largest city.",
    image: ""
    },
    Monaco: {
    information: "Monaco is a sovereign city-state and microstate on the French Riviera in Western Europe. It is known for its luxurious lifestyle and as a tax haven. Monaco is a constitutional monarchy and Monte Carlo is a famous district in Monaco.",
    image: ""
    },
    Mongolia: {
    information: "Mongolia is a country located in East Asia. It is known for its nomadic culture and vast grasslands. Mongolia is a unitary parliamentary constitutional monarchy and Ulaanbaatar is its capital and largest city.",
    image: ""
    },
    Montenegro: {
    information: "Montenegro is a country located in Southeastern Europe. It is known for its mountains, beaches, and medieval villages. Montenegro is a unitary parliamentary constitutional republic and Podgorica is its capital and largest city.",
    image: ""
    },
    Morocco: {
    information: "Morocco is a country located in North Africa. It is known for its culture, history and landmarks such as the Hassan II Mosque, the Bahia Palace and the Kasbah of the Udayas. Morocco is a unitary parliamentary constitutional monarchy and Rabat is its capital and largest city.",
    image: ""
    },
    Mozambique: {
    information: "Mozambique is a country located in Southeast Africa. It is known for its long Indian Ocean coastline, diverse culture and beautiful beaches. Mozambique is a unitary presidential constitutional republic and Maputo is its capital and largest city.",
    image: ""
    },
    Myanmar: {
    information: "Myanmar, also known as Burma, is a country located in Southeast Asia. It is known for its ancient temples and pagodas, such as the Shwedagon Pagoda, and for its diverse ethnic groups. Myanmar is a unitary presidential constitutional republic and Naypyidaw is its capital and largest city.",
    image: ""
    },
    Namibia: {
    information: "Namibia is a country located in Southern Africa. It is known for its deserts, wildlife, and national parks, such as Etosha National Park. Namibia is a unitary parliamentary constitutional republic and Windhoek is its capital and largest city.",
    image: ""
    },
    Nauru: {
    information: "Nauru is a small island country located in Micronesia in the Pacific Ocean. It is the third smallest country by area in the world and is known for its phosphate mining. Nauru is a unitary parliamentary republic with no official capital.",
    image: ""
    },
    Nepal: {
    information: "Nepal is a country located in South Asia. It is known for its diverse geography, including the Himalayas, and for being the birthplace of Lord Buddha. Nepal is a federal parliamentary constitutional monarchy and Kathmandu is its capital and largest city.",
    image: ""
    },
    Netherlands: {
    information: "The Netherlands is a country located in Northwestern Europe. It is known for its flat landscapes, windmills, cheese, and tulips. The Netherlands is a parliamentary constitutional monarchy and Amsterdam is its capital and largest city.",
    image: ""
    },
    NewZealand: {
    information: "New Zealand is a sovereign island country located in the southwestern Pacific Ocean. It is known for its diverse landscapes and is a popular destination for eco-tourism. New Zealand is a parliamentary constitutional monarchy and Wellington is its capital and largest city.",
    image: ""
    },
    Nicaragua: {
    information: "Nicaragua is a country located in Central America. It is known for its diverse culture and history. Nicaragua is a unitary presidential constitutional republic and Managua is its capital and largest city.",
    image: ""
    },
    Niger: {
    information: "Niger is a landlocked country located in West Africa. It gained independence from France in 1960. Niger is a semi-presidential republic and Niamey is its capital and largest city.",
    image: ""
    },
    Nigeria: {
    information: "Nigeria is a country located in West Africa. It is known for its diverse culture, population and oil reserves. Nigeria is a federal presidential constitutional republic and Abuja is its capital and largest city.",
    image: ""
    },
    Norway: {
    information: "Norway is a sovereign country located in Northern Europe. It is known for its natural beauty and high standard of living. Norway is a unitary parliamentary constitutional monarchy and Oslo is its capital and largest city.",
    image: ""
    },
    Oman: {
    information: "Oman is a country located in Western Asia. It is known for its rich history and culture. Oman is an absolute monarchy and Muscat is its capital and largest city.",
    image: ""
    },
    Pakistan: {
    information: "Pakistan is a country located in South Asia. It was created in 1947 as a homeland for Indian Muslims. Pakistan is a federal parliamentary republic and Islamabad is its capital and largest city.",
    image: ""
    },
    Palau: {
    information: "Palau is an island country located in the Pacific Ocean. It is an independent nation but has a Compact of Free Association with the United States. Palau is a presidential republic and Melekeok is its capital.",
    image: ""
    },
    Panama: {
    information: "Panama is a country located in Central America. It is known for the Panama Canal, which connects the Atlantic and Pacific Oceans. Panama is a unitary presidential constitutional republic and Panama City is its capital and largest city.",
    image: ""
    },
    PapuaNewGuinea: {
    information: "Papua New Guinea is a country located in the southwestern Pacific Ocean. It is the easternmost country in Oceania. Papua New Guinea is a unitary parliamentary constitutional monarchy and Port Moresby is its capital and largest city.",
    image: ""
    },
    Paraguay: {
    information: "Paraguay is a country located in South America. It is bordered by Brazil, Argentina, and Bolivia. Paraguay is a unitary presidential constitutional republic and Asunción is its capital and largest city.",
    image: ""
    },
    Peru: {
    information: "Peru is a country located in Western South America. It is bordered by Ecuador, Colombia, Brazil, Bolivia, Chile, and the Pacific Ocean. Peru is a unitary presidential constitutional republic and Lima is its capital and largest city.",
    image: ""
    },
    Philippines: {
    information: "The Philippines is a country located in Southeast Asia. It is an archipelago made up of 7,641 islands. The Philippines is a unitary presidential constitutional republic and Manila is its capital and largest city.",
    image: ""
    },
    Poland: {
    information: "Poland is a country located in Central Europe. It has a long history as a nation-state, with the 10th century Piast dynasty considered the first ruling dynasty of the Polish people. Poland is a unitary semi-presidential constitutional republic and Warsaw is its capital and largest city.",
    image: ""
    },
    Portugal: {
    information: "Portugal is a country located in southwestern Europe on the Iberian Peninsula. It was one of the world's major economic, political, and cultural powers during the 15th and 16th centuries. Portugal is a unitary semi-presidential constitutional republic and Lisbon is its capital and largest city.",
    image: ""
    },
    Qatar: {
    information: "Qatar is a country located in Western Asia. It is a sovereign Arab emirate, known for its oil and natural gas reserves. Qatar is an absolute monarchy and Doha is its capital and largest city.",
    image: ""
    },
    Romania: {
    information: "Romania is a country located in southeastern Europe. It has a rich culture, influenced by its historical connections to the Roman Empire and the Ottoman Empire. Romania is a unitary semi-presidential constitutional republic and Bucharest is its capital and largest city.",
    image: ""
    },
    Russia: {
    information: "The Russian Federation is a country located in Eastern Europe and Northern Asia. It is the largest country in the world by land area, and Moscow is its capital and largest city. The official language is Russian and the government is a federal semi-presidential republic.",
    image: ""
    },
    Rwanda: {
    information: "Rwanda is a country located in Central Africa. It is known for the 1994 genocide that resulted in the deaths of approximately 800,000 Tutsi and moderate Hutu people. The official languages are Kinyarwanda, French and English, and the government is a semi-presidential republic.",
    image: ""
    },
    StKittsNevis: {
    information: "Saint Kitts and Nevis is a country located in the Caribbean. It is a federal two-island nation and Basseterre is its capital. The official language is English and the government is a federal parliamentary constitutional monarchy.",
    image: ""
    },
    StLucia: {
    information: "Saint Lucia is a country located in the Caribbean. It gained independence from the United Kingdom in 1979. The official language is English and the government is a unitary parliamentary constitutional monarchy with a monarch and prime minister.",
    image: ""
    },
    Saint_Vincentthe_Grenadines: {
    information: "Saint Vincent and the Grenadines is a country located in the Caribbean. It is an island nation and Kingstown is its capital. The official language is English and the government is a unitary parliamentary constitutional monarchy with a monarch and prime minister.",
    image: ""
    },
    Samoa: {
    information: "Samoa is a country located in Oceania. It gained independence from New Zealand in 1962. The official language is Samoan and the government is a unitary parliamentary democracy with a head of state and prime minister.",
    image: ""
    },
    SanMarino: {
    information: "San Marino is a country located in Southern Europe. It is the oldest sovereign state and the smallest country in Europe by area. The official language is Italian and the government is a federal parliamentary republic.",
    image: ""
    },
    Sao_Tome_Principe: {
    information: "Sao Tome and Principe is a country located in Central Africa. It gained independence from Portugal in 1975. The official language is Portuguese and the government is a unitary semi-presidential republic.",
    image: ""
    },
    Saudi_Arabia: {
    information: "Saudi Arabia is a country located in Western Asia. It is the largest country in the Middle East and the capital and largest city is Riyadh. The official language is Arabic and the government is an absolute monarchy.",
    image: ""
    },
    Senegal: {
    information: "Senegal is a country located in Western Africa. It gained independence from France in 1960. The official language is French and the government is a semi-presidential republic.",
    image: ""
    },
    Serbia: {
    information: "Serbia is a country located in Southeastern Europe. The official language is Serbian and the government is a unitary parliamentary constitutional republic.",
    image: ""
    },
    Seychelles: {
    information: "Seychelles is a country located in the Indian Ocean. It is an archipelago of 115 islands. The Seychelles is a unitary semi-presidential constitutional republic and Victoria is its capital and largest city.",
    image: ""
    },
    SierraLeone: {
    information: "Sierra Leone is a country located in West Africa. It gained independence from the United Kingdom in 1961. Sierra Leone is a unitary parliamentary constitutional republic and Freetown is its capital and largest city.",
    image: ""
    },
    Singapore: {
    information: "Singapore is a sovereign island city-state and country in Southeast Asia. It is a unitary parliamentary constitutional republic and its capital and largest city is Singapore City.",
    image: ""
    },
    Slovakia: {
    information: "Slovakia is a country located in Central Europe. It gained independence from Czechoslovakia in 1993. Slovakia is a unitary parliamentary constitutional republic and Bratislava is its capital and largest city.",
    image: ""
    },
    Slovenia: {
    information: "Slovenia is a country located in Central Europe. It gained independence from Yugoslavia in 1991. Slovenia is a unitary parliamentary constitutional republic and Ljubljana is its capital and largest city.",
    image: ""
    },
    Solomon_Islands: {
    information: "The Solomon Islands is a country located in the Pacific Ocean. It is an archipelago of 992 islands. The Solomon Islands is a parliamentary constitutional monarchy and Honiara is its capital and largest city.",
    image: ""
    },
    Somalia: {
    information: "Somalia is a country located in the Horn of Africa. It is known for its long-standing civil war and ongoing conflict. Somalia is a federal parliamentary republic and Mogadishu is its capital and largest city.",
    image: ""
    },
    SouthAfrica: {
    information: "South Africa is a country located in Southern Africa. It gained independence from the United Kingdom in 1910. South Africa is a unitary parliamentary constitutional republic and Pretoria (executive), Cape Town (legislative), Bloemfontein (judicial) are its three capital cities.",
    image: ""
    },
    SouthSudan: {
    information: "South Sudan is a country located in East-Central Africa. It gained independence from Sudan in 2011. South Sudan is a federal presidential representative democratic republic and Juba is its capital and largest city.",
    image: ""
    },
    Spain: {
    information: "Spain is a country located in Southwestern Europe. Spain is a parliamentary constitutional monarchy and Madrid is its capital and largest city.",
    image: ""
    },
    SriLanka: {
    information: "Sri Lanka is a country located in South Asia. It is an island nation in the Indian Ocean. Sri Lanka is a unitary semi-presidential constitutional republic and Sri Jayawardenepura Kotte (administrative) and Colombo (commercial) are its two capital cities.",
    image: ""
    },
    Sudan: {
    information: "Sudan is a country located in North-East Africa. It is the third largest country in Africa. Sudan is a federal presidential representative democratic republic and Khartoum is its capital and largest city.",
    image: ""
    },
    Swaziland: {
    information: "Swaziland is a country located in Southern Africa. It is a unitary absolute monarchy and Mbabane is its capital and largest city.",
    image: ""
    },
    Sweden: {
    information: "Sweden is a country located in Northern Europe. It is a constitutional monarchy and parliamentary democracy and Stockholm is its capital and largest city.",
    image: ""
    },
    Switzerland: {
    information: "Switzerland is a country located in Western Europe. It is a federal parliamentary republic and Bern is its capital and largest city.",
    image: ""
    },
    Syria: {
    information: "Syria is a country located in Western Asia. It is a unitary presidential republic and Damascus is its capital and largest city.",
    image: ""
    },
    Suriname: {
    information: "Suriname is a small country on the northeastern coast of South America. It's defined by vast swaths of tropical rainforest, Dutch colonial architecture and a melting-pot culture. On its Atlantic coast is the capital, Paramaribo",
    image: ""
    },
    Taiwan: {
    information: "Taiwan is a territory located in East Asia. It is officially known as the Republic of China and Taipei is its capital and largest city.",
    image: ""
    },
    Tajikistan: {
    information: "Tajikistan is a country located in Central Asia. It is a presidential republic and Dushanbe is its capital and largest city.",
    image: ""
    },
    Tanzania: {
    information: "Tanzania is a country located in Eastern Africa. It is a presidential constitutional republic and Dodoma is its capital city and Dar es Salaam is its largest city.",
    image: ""
    },
    Thailand: {
    information: "Thailand is a country located in Southeast Asia. It is a unitary constitutional monarchy and Bangkok is its capital and largest city.",
    image: ""
    },
    Togo: {
    information: "Togo is a country located in Western Africa. It is a unitary semi-presidential republic and Lomé is its capital and largest city.",
    image: ""
    },
    Tonga: {
    information: "Tonga is a country located in the Pacific Ocean. It is a constitutional monarchy and Nuku'alofa is its capital and largest city.",
    image: ""
    },
    Trinidad_Tobago: {
    information: "Trinidad and Tobago is a country located in the Caribbean. It is a unitary parliamentary constitutional republic and Port of Spain is its capital and largest city.",
    image: ""
    },
    Tunisia: {
    information: "Tunisia is a country located in North Africa. It is a unitary semi-presidential republic and Tunis is its capital and largest city.",
    image: ""
    },
    Turkey: {
    information: "Turkey is a country located in Southeastern Europe and Southwestern Asia. It is a unitary parliamentary constitutional republic and Ankara is its capital and Istanbul is its largest city.",
    image: ""
    },
    Turkmenistan: {
    information: "Turkmenistan is a country located in Central Asia. It is a presidential republic and Ashgabat is its capital and largest city.",
    image: ""
    },
    Tuvalu: {
    information: "Tuvalu is a country located in the Pacific Ocean. It is a parliamentary constitutional monarchy and Funafuti is its capital and largest city.",
    image: ""
    },
    Uganda: {
    information: "Uganda is a country located in East Africa. It gained independence from the United Kingdom in 1962. Uganda is a presidential constitutional republic and Kampala is its capital and largest city.",
    image: ""
    },
    Ukraine: {
    information: "Ukraine is a country located in Eastern Europe. It gained independence from the Soviet Union in 1991. Ukraine is a unitary parliamentary republic and Kiev is its capital and largest city.",
    image: ""
    },
    United_Arab_Emirates: {
    information: "The United Arab Emirates is a country located in the Southeast end of the Arabian Peninsula on the Persian Gulf, bordering Oman to the east and Saudi Arabia to the south, as well as sharing sea borders with Qatar and Iran. It is a federal absolute monarchy and Abu Dhabi is its capital and largest city.",
    image: ""
    },
    UnitedKingdom: {
    information: "The United Kingdom is a country located in Europe. It is a sovereign state made up of four countries: England, Scotland, Wales, and Northern Ireland. The UK is a unitary parliamentary constitutional monarchy and London is its capital and largest city.",
    image: ""
    },
    USA: {
    information: "The United States of America is a country located in North America. It gained independence from the British Empire in 1776. The US is a federal presidential constitutional republic and Washington, D.C. is its capital.",
    image: ""
    },
    Uruguay: {
    information: "Uruguay is a country located in South America. It gained independence from Brazil and Argentina in 1828. Uruguay is a presidential constitutional republic and Montevideo is its capital and largest city.",
    image: ""
    },
    Uzbekistan: {
    information: "Uzbekistan is a country located in Central Asia. It gained independence from the Soviet Union in 1991. Uzbekistan is a presidential constitutional republic and Tashkent is its capital and largest city.",
    image: ""
    },
    Vanuatu: {
    information: "Vanuatu is a country located in the South Pacific. It gained independence from France and the United Kingdom in 1980. Vanuatu is a parliamentary republic and Port Vila is its capital and largest city.",
    image: ""
    },
    Vatican_City: {
    information: "Vatican City is the smallest country in the world. It is an independent city-state surrounded by Rome, Italy. It is an ecclesiastical or sacerdotal-monarchical state and the Pope is its head of state and government.",
    image: ""
    },
    Venezuela: {
    information: "Venezuela is a country located in South America. It gained independence from Spain in 1811. Venezuela is a federal presidential constitutional republic and Caracas is its capital and largest city.",
    image: ""
    },
    Vietnam: {
    information: "Vietnam is a country located in Southeast Asia. It gained independence from France in 1954. Vietnam is a socialist republic and Hanoi is its capital and largest city.",
    image: ""
    },
    Yemen: {
    information: "Yemen is a country located in Western Asia. It is a unitary parliamentary constitutional republic and Sana'a is its capital and largest city.",
    image: ""
    },
    Zambia: {
    information: "Zambia is a country located in Southern Africa. It gained independence from the United Kingdom in 1964. Zambia is a unitary presidential constitutional republic and Lusaka is its capital and largest city.",
    image: ""
    },
    Zimbabwe: {
    information: "Zimbabwe is a country located in Southern Africa. It gained independence from the United Kingdom in 1980. Zimbabwe is a unitary presidential constitutional republic and Harare is its capital and largest city.",
    image: ""
    },
    Greenland: {
    information: "Greenland is an island country in North America that is part of the Kingdom of Denmark. It is located between the Arctic and Atlantic oceans, east of the Canadian Arctic Archipelago. Greenland is the world's largest island.",
    image: ""
    },
    Palestine: {
    information: "Palestine, officially the State of Palestine, is a state located in Western Asia. Officially governed by the Palestine Liberation Organization, it claims the West Bank, including East Jerusalem",
    image: ""
    },
    WesternSahara: {
    information: "Western Sahara is a disputed territory on the northwest coast and in the Maghreb region of North and West Africa. About 20% of the territory is controlled by the self-proclaimed Sahrawi Arab Democratic Republic, while the remaining 80% of the territory is occupied and administered by neighboring Morocco.",
    image: ""
    }

    }
}
// Albania: {
//     information: "Albania is a small country located in Southeast Europe. It has a population of around 2.9 million people and its capital and largest city is Tirana. Albania has a diverse culture and history, with influences from both the Ottoman and Byzantine empires. The country is known for its beautiful beaches, mountainous terrain, and historic sites such as the ancient city of Berat.",
//     image: "https://cdn.britannica.com/00/6200-050-2E25CE97/Flag-Albania.jpg"
// },
// Kosovo: {
//     information: "Kosovo is a small country located in the Balkans region of Europe. It declared independence from Serbia in 2008, but it is not recognized as an independent state by all countries. It has a population of around 1.8 million people, and its capital and largest city is Pristina. Kosovo has a rich cultural heritage and history, with influences from both the Ottoman and Byzantine empires.",
//     image: "https://cdn.britannica.com/18/114418-004-2A12F087/Flag-Kosovo.jpg"

// },
// Macedonia: {
//     information: "North Macedonia is a country located in the Balkans region of Europe. It declared independence from Yugoslavia in 1991, and changed its name from the Former Yugoslav Republic of Macedonia (FYROM) to North Macedonia in 2019. Skopje is the capital and largest city of North Macedonia.",
//     image: "https://cdn.britannica.com/08/6208-050-930F76BA/Flag-North-Macedonia.jpg"

// },
// Greece: {
//     information: "Greece is a country located in Southeast Europe, on the southern end of the Balkan Peninsula. It has a population of around 10.7 million people, and its capital and largest city is Athens. Greece is known for its ancient civilization and historic sites such as the Acropolis and the Parthenon. It is also famous for its beaches, islands and delicious Mediterranean cuisine..",
//     image: "https://cdn.britannica.com/49/1049-004-AE4BAD3E/Flag-Greece.jpg"

// },
// Greece: {
//     information: "",
//     image: "https://www.example.com/albania.jpg"

// },







// CODE TO USE IN THE FUTURE
//     let map = document.getElementById("map");

// // Add class to the map when modal is open
// modal.addEventListener("click", function() {
//   map.classList.add("darken-map");
// });

// // Remove class from the map when modal is closed
// closeModal.addEventListener("click", function() {
//   map.classList.remove("darken-map");
// });


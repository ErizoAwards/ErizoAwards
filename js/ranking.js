// js/ranking.js

// --- BASE DE DATOS DE PREMIOS COMPLETA (2018-2025) ---
const awardsDB = [
    // ==========================================
    //                 AÑO 2025
    // ==========================================
    { year: 2025, name: "WING", cat: "Mejor Integrante" },
    { year: 2025, name: "MACA", cat: "Mejor Integrante" },
    { year: 2025, name: "WING", cat: "Mejor Spam" },
    { year: 2025, name: "WING", cat: "Mufasa del año" },
    { year: 2025, name: "WING", cat: "Más Odiado" },
    { year: 2025, name: "JULIETA", cat: "Mejor integrante nuevo" },
    { year: 2025, name: "JULIETA", cat: "Mejor Pareja" },
    { year: 2025, name: "COREANITO", cat: "Mejor Pareja" },
    { year: 2025, name: "JULIETA", cat: "Pajeraza" },
    { year: 2025, name: "JRR", cat: "Pajerazo" },
    { year: 2025, name: "JULIETA", cat: "Más Linda" },
    { year: 2025, name: "AYOVI", cat: "Mejor Jugador PES 6" },
    { year: 2025, name: "AYOVI", cat: "Mejor Hincha NO Bover" },
    { year: 2025, name: "AYOVI", cat: "F Moment" },
    { year: 2025, name: "CARO", cat: "Mejor Rivalidad" },
    { year: 2025, name: "NAHIR", cat: "Mejor Rivalidad" },
    { year: 2025, name: "CARO", cat: "Más Autista" },
    { year: 2025, name: "MORRO", cat: "Más Autista" },
    { year: 2025, name: "CARO", cat: "Más Odiada" },
    { year: 2025, name: "NAHIR", cat: "Mensaje Random" },
    { year: 2025, name: "NAHIR", cat: "Más Depresiva" },
    { year: 2025, name: "MACA", cat: "Más Graciosa" },
    { year: 2025, name: "MORRO", cat: "Más Gracioso" },
    { year: 2025, name: "COREANITO", cat: "Mejor Streamer" },
    { year: 2025, name: "JRR", cat: "Mejor Jugador Haxball" },
    { year: 2025, name: "ANANÁ", cat: "Prime del año" }, 
    { year: 2025, name: "ANANÁ", cat: "Momento Random" },
    { year: 2025, name: "ANANÁ", cat: "Mejor Mascota (Hanna)" }, 
    { year: 2025, name: "KEV", cat: "Mejor Respuesta" },
    { year: 2025, name: "HECTOR", cat: "Mejor Gordo" },
    { year: 2025, name: "BRUNI", cat: "Erizo Nobel de la Paz" },
    { year: 2025, name: "AGUATERO", cat: "Peor Jugador Haxball" },
    { year: 2025, name: "CAMIPAS", cat: "Erizo del Futuro" },
    { year: 2025, name: "RETORIKO", cat: "Mejor Extranjero" },
    { year: 2025, name: "MAURIPAL", cat: "Momento Incomodo" },
    { year: 2025, name: "REXONA", cat: "Más fantasma" },
    { year: 2025, name: "NAZA", cat: "Erizo SEH al Más Homosexual" },
    { year: 2025, name: "AUGUSTO", cat: "Más Lindo" },
    { year: 2025, name: "RUSITO ASSAD", cat: "Erizo Consuelo" },
    { year: 2025, name: "PATO", cat: "Más Fisura" },
    { year: 2025, name: "CANDE", cat: "Más Fisura" },
    { year: 2025, name: "ESCOPETA", cat: "Mejor Evento" },
    { year: 2025, name: "JAVIERA", cat: "Visita del Año" },
    { year: 2025, name: "SEGUNDO CASTILLO", cat: "Mejor Negro" },
    { year: 2025, name: "ROJAS WALEN", cat: "Más odiado (No grupo)" },
    { year: 2025, name: "WINGSITO ASSAD", cat: "Más querido (No grupo)" },
    { year: 2025, name: "PLATO", cat: "Mejor Juego" },
    { year: 2025, name: "BOCA JUNIORS", cat: "Mejor Hatewatch" },
    { year: 2025, name: "ALIANZA LIMA", cat: "Mejor Hatewatch" },
    { year: 2025, name: "MILANESAS", cat: "Mejor Comida" },

    // ==========================================
    //                 AÑO 2024
    // ==========================================
    { year: 2024, name: "MORRO", cat: "Mejor Integrante" },
    { year: 2024, name: "MORRO", cat: "Mejor jugador de PES 6" },
    { year: 2024, name: "NAZA", cat: "Gasto boludo del año" },
    { year: 2024, name: "HALA", cat: "Mejor visita" },
    { year: 2024, name: "PES 6", cat: "Mejor juego" },
    { year: 2024, name: "NEUER", cat: "Mejor arquero" },
    { year: 2024, name: "EL PERRO DE NIKHO", cat: "Mejor spam" },
    { year: 2024, name: "WING", cat: "Mejor hincha no bover" },
    { year: 2024, name: "ICARDI", cat: "Erizo SEH al más homosexual" },
    { year: 2024, name: "MORRO", cat: "Mejor pareja" },
    { year: 2024, name: "AYOVI", cat: "Mejor pareja" },
    { year: 2024, name: "AUGUSTO", cat: "Más lindo" },
    { year: 2024, name: "REXONA", cat: "Más fantasma" },
    { year: 2024, name: "AUGUSTO", cat: "Momento random" },
    { year: 2024, name: "LUCIANA", cat: "Más linda" },
    { year: 2024, name: "RODRI", cat: "Mejor rivalidad" },
    { year: 2024, name: "TEFA", cat: "Mejor rivalidad" },
    { year: 2024, name: "SANTA KROOS", cat: "Peor jugador de haxball" },
    { year: 2024, name: "ANANÁ", cat: "Mejor integrante nuevo" },
    { year: 2024, name: "PES UNITED", cat: "F Moment" },
    { year: 2024, name: "CANDROXZ", cat: "Mejor streamer" },
    { year: 2024, name: "MÁGICO", cat: "Mejor jugador de Haxball" },
    { year: 2024, name: "WING", cat: "Más odiado" },
    { year: 2024, name: "RUSITO ASSAD", cat: "Mejor clip (Preso)" },
    { year: 2024, name: "RETORIKO", cat: "Mejor extranjero" },
    { year: 2024, name: "RUSITO ASSAD", cat: "Mejor personaje SAMP" },
    { year: 2024, name: "SANTA KROOS", cat: "Pajerazo" },
    { year: 2024, name: "SANTA KROOS", cat: "Más depresivo" },
    { year: 2024, name: "LIGA RS BOLIVIA", cat: "Peor evento" },
    { year: 2024, name: "MÁGICO", cat: "Mejor fichaje" },
    { year: 2024, name: "PEDRINHO", cat: "Más querido (No grupo)" },
    { year: 2024, name: "NESTORVIVE", cat: "Más querido (No grupo)" },
    { year: 2024, name: "LANZINI", cat: "Más odiado (No grupo)" },
    { year: 2024, name: "ESCOPETA", cat: "Mejor artista" },
    { year: 2024, name: "KEV", cat: "Mufasa" },
    { year: 2024, name: "SANGUCHE", cat: "Mejor comida" },
    { year: 2024, name: "JRR", cat: "Erizo consuelo" },

    // ==========================================
    //                 AÑO 2023
    // ==========================================
    { year: 2023, name: "KEV", cat: "Mejor Integrante" },
    { year: 2023, name: "ICARDI", cat: "Gasto más boludo" },
    { year: 2023, name: "MORRO", cat: "Mejor Jugador PES" },
    { year: 2023, name: "PACHANO", cat: "Visita del año" },
    { year: 2023, name: "PES 6", cat: "Juego ajeno a Haxball" },
    { year: 2023, name: "RUSITO ASSAD", cat: "Evento del año (Mundialitos)" },
    { year: 2023, name: "GONZALO CRAIG", cat: "Spam" },
    { year: 2023, name: "WING", cat: "Hincha No Bover" },
    { year: 2023, name: "RUSITO ASSAD", cat: "Erizo SEH del año" },
    { year: 2023, name: "MORRO", cat: "Pareja del año" },
    { year: 2023, name: "AYOVI", cat: "Pareja del año" },
    { year: 2023, name: "HECTOR", cat: "Más Lindo" },
    { year: 2023, name: "REXONA", cat: "Más fantasma" },
    { year: 2023, name: "QUARTA", cat: "Momento Random" },
    { year: 2023, name: "SANTA KROOS", cat: "Peor Jugador Haxball" },
    { year: 2023, name: "GISE LA DEL EMOJI", cat: "Más Linda" },
    { year: 2023, name: "OTRA GISE", cat: "Rivalidad del año" },
    { year: 2023, name: "AILEN", cat: "Rivalidad del año" },
    { year: 2023, name: "COREANITO", cat: "Mejor Integrante Nuevo" },
    { year: 2023, name: "UVITA", cat: "Más Depresivo" },
    { year: 2023, name: "BRUNI", cat: "Mufasa del año" },
    { year: 2023, name: "MARTIN ASSAD", cat: "Peor Nick" },
    { year: 2023, name: "CANADA", cat: "Más Odiado (No grupo)" },
    { year: 2023, name: "ESE EKIS", cat: "Más Querido (No grupo)" },
    { year: 2023, name: "AILEN", cat: "Deportista del año" },
    { year: 2023, name: "HECTOR", cat: "Mejor Extranjero" },
    { year: 2023, name: "ZETA", cat: "F Moment" },
    { year: 2023, name: "SANTA KROOS", cat: "Más Odiado del grupo" },
    { year: 2023, name: "MAGGIE GREENE", cat: "Personaje Histórico" },
    { year: 2023, name: "BOCA JUNIORS", cat: "Domado del año" },
    { year: 2023, name: "JRR", cat: "Mejor Jugador de Hax" },
    { year: 2023, name: "LUCIANA", cat: "Erizo Especial" },
    { year: 2023, name: "PIZZA", cat: "Comida del año" },
    { year: 2023, name: "DELPO", cat: "Erizo Consuelo" },

    // ==========================================
    //                 AÑO 2022
    // ==========================================
    { year: 2022, name: "HAMBURGUESA", cat: "Mejor Comida" },
    { year: 2022, name: "RUSITO ASSAD", cat: "Mejor mapa de Hax (Mundialito)" },
    { year: 2022, name: "MORRO", cat: "Mejor DT OSM" },
    { year: 2022, name: "JRR", cat: "Mejor jugador de PES 6" },
    { year: 2022, name: "UNA ANGOLEÑA", cat: "Mejor visita" },
    { year: 2022, name: "RUSITO ASSAD", cat: "F Moment" },
    { year: 2022, name: "PLATO", cat: "Mejor juego" },
    { year: 2022, name: "LEO GODOY", cat: "Gasto boludo" },
    { year: 2022, name: "BRUNI", cat: "Peor jugador de Hax" },
    { year: 2022, name: "PICLES", cat: "Mejor hincha no bover" },
    { year: 2022, name: "ICARDI", cat: "Más homosexual" },
    { year: 2022, name: "MORRO", cat: "Pareja del año" },
    { year: 2022, name: "AYOVI", cat: "Pareja del año" },
    { year: 2022, name: "REXONA", cat: "Más fantasma" },
    { year: 2022, name: "AUGUSTO", cat: "Momento random" },
    { year: 2022, name: "BARQUITO", cat: "Personalidad del año" },
    { year: 2022, name: "MACA", cat: "Más linda" },
    { year: 2022, name: "HUEVO ACUÑA", cat: "Mejor sticker" },
    { year: 2022, name: "AUGUSTO", cat: "Mejor Rivalidad" },
    { year: 2022, name: "LEO GODOY", cat: "Mejor Rivalidad" },
    { year: 2022, name: "LEO GODOY", cat: "Mejor integrante nuevo" },
    { year: 2022, name: "RAMMA", cat: "Domado del año" },
    { year: 2022, name: "BEN PENETRON", cat: "Más querido (No grupo)" },
    { year: 2022, name: "KEV", cat: "Mejor alter ego" },
    { year: 2022, name: "LOMELINO", cat: "Más odiado (No grupo)" },
    { year: 2022, name: "JRR", cat: "Mejor jugador de Hax" },
    { year: 2022, name: "REXONA", cat: "Más odiado" },
    { year: 2022, name: "JRR", cat: "Mejor Integrante" },

    // ==========================================
    //                 AÑO 2021
    // ==========================================
    { year: 2021, name: "RUSITO ASSAD", cat: "Mejor creador de mapas" },
    { year: 2021, name: "SAVANT", cat: "Más odiado (No grupo)" },
    { year: 2021, name: "LOMELINO", cat: "Más odiado (Grupo)" },
    { year: 2021, name: "ICARDI", cat: "F Moment" },
    { year: 2021, name: "AYOVI", cat: "Más lindo del grupo" },
    { year: 2021, name: "RUSITO ASSAD", cat: "Más depresivo" },
    { year: 2021, name: "MORRO", cat: "Mejor jugador de PES 6" },
    { year: 2021, name: "KWEENOFLOSERS", cat: "Respuesta del año" },
    { year: 2021, name: "AYOVI", cat: "Mejor pareja" },
    { year: 2021, name: "MORRO", cat: "Mejor pareja" },
    { year: 2021, name: "PICLES", cat: "Mejor integrante nuevo" },
    { year: 2021, name: "AYOVI", cat: "Mensaje random del año" },
    { year: 2021, name: "KEV", cat: "Mejor rivalidad" },
    { year: 2021, name: "LOS BRAZUCAS", cat: "Mejor rivalidad" },
    { year: 2021, name: "AILEN", cat: "Más fantasma" },
    { year: 2021, name: "KAKA", cat: "Mejor jugador de Haxball" },
    { year: 2021, name: "KEV", cat: "Mejor Integrante" },

    // ==========================================
    //                 AÑO 2020
    // ==========================================
    { year: 2020, name: "FOOTBALL TEAM GAME", cat: "Mejor juego/app externa" },
    { year: 2020, name: "MATEROS", cat: "Domado del año" },
    { year: 2020, name: "ZETA", cat: "Ojalá no vuelvas más" },
    { year: 2020, name: "RUSITO ASSAD", cat: "Mejor Host (Canchas raras)" },
    { year: 2020, name: "PES UNITED", cat: "Mejor equipo del año" },
    { year: 2020, name: "PHYWHY", cat: "Mejor visita del año" },
    { year: 2020, name: "AUGUSTO", cat: "Mensaje Random" },
    { year: 2020, name: "ENZO PEREZ", cat: "Peor fichaje" },
    { year: 2020, name: "EL CHOLO", cat: "Mejor fichaje" },
    { year: 2020, name: "RUSITO ASSAD", cat: "Mejor Rivalidad" },
    { year: 2020, name: "EL RUSITO", cat: "Mejor Rivalidad" },
    { year: 2020, name: "USU", cat: "F Moment" },
    { year: 2020, name: "LOMELINO", cat: "Más lindo" },
    { year: 2020, name: "EL CHOLO", cat: "Más querido (No grupo)" },
    { year: 2020, name: "RETORIKO", cat: "Mejor miembro nuevo" },
    { year: 2020, name: "KAKA", cat: "Mejor respuesta" },
    { year: 2020, name: "PATO", cat: "Más fantasma" },
    { year: 2020, name: "KAKA", cat: "Mejor jugador Futsal x7" },
    { year: 2020, name: "KEV", cat: "Mejor jugador de RS" },
    { year: 2020, name: "KEV", cat: "Pareja del año" },
    { year: 2020, name: "AUGUSTO", cat: "Pareja del año" },
    { year: 2020, name: "LOMELINO", cat: "Más odiado" },
    { year: 2020, name: "JRR", cat: "Mejor Integrante" },

    // ==========================================
    //                 AÑO 2019
    // ==========================================
    { year: 2019, name: "ICARDI", cat: "Gasto más boludo" },
    { year: 2019, name: "PLATO", cat: "Juego/App del año" },
    { year: 2019, name: "JRR", cat: "Mejor diseñador" },
    { year: 2019, name: "ZETA", cat: "Mejor Faceapp" },
    { year: 2019, name: "PODOLSKI", cat: "Más lindo" },
    { year: 2019, name: "ICARDI", cat: "Mejor pareja" },
    { year: 2019, name: "RUSITO ASSAD", cat: "Mejor pareja" },
    { year: 2019, name: "PATO", cat: "F Moment" },
    { year: 2019, name: "JRR", cat: "Mejor rivalidad" },
    { year: 2019, name: "ZETA", cat: "Mejor rivalidad" },
    { year: 2019, name: "MAGGIE GREENE", cat: "Agresión liviana" },
    { year: 2019, name: "RUSITO ASSAD", cat: "Mejor jugador Brawl Stars" },
    { year: 2019, name: "COCO LAMELA", cat: "Spamero del año" },
    { year: 2019, name: "REXONA", cat: "Más fantasma" },
    { year: 2019, name: "LA NOVIA DE PODO", cat: "Más querido (No grupo)" },
    { year: 2019, name: "ELECCIONES PRESIDENCIALES", cat: "Debate del año" },
    
    // CORRECCIÓN APLICADA AQUÍ:
    { year: 2019, name: "ZETA", cat: "Momento bizarro" }, 
    { year: 2019, name: "ALTO GUISO", cat: "Momento bizarro" },

    { year: 2019, name: "MORRO", cat: "Mejor jugador PES 6" },
    { year: 2019, name: "LA FIESTA DE DISFRACES", cat: "Mejor invasión" },
    { year: 2019, name: "PATO", cat: "Domado del año" },
    { year: 2019, name: "KAKA", cat: "Fichaje del año" },
    { year: 2019, name: "MAGGIE GREENE", cat: "Mejor ex miembro" },
    { year: 2019, name: "SEXO ENTRE HOMBRES", cat: "Equipo del año" },
    { year: 2019, name: "JRR", cat: "Mejor jugador de futsal" },
    { year: 2019, name: "AYOVI", cat: "Mejor jugador retirado de RS" },
    { year: 2019, name: "KEV", cat: "Mejor jugador activo de RS" },
    { year: 2019, name: "ZETA", cat: "Más odiado" },
    { year: 2019, name: "PODOLSKI", cat: "Mejor Integrante" },
    { year: 2019, name: "MORRO", cat: "Mejor Integrante" },

    // ==========================================
    //                 AÑO 2018
    // ==========================================
    { year: 2018, name: "RUSITO ASSAD", cat: "Mejor Erizo" },
    { year: 2018, name: "PODOLSKI", cat: "Más lindo" },
    { year: 2018, name: "KEV", cat: "Más Fantasma" },
    { year: 2018, name: "MORRO", cat: "Mejor Pareja" },
    { year: 2018, name: "AYOVI", cat: "Mejor Pareja" },
    { year: 2018, name: "PES 6", cat: "Mejor Juego" },
    { year: 2018, name: "MORRO", cat: "Mejor Paternidad" },
    { year: 2018, name: "ZETA", cat: "Mejor Rivalidad" },
    { year: 2018, name: "MAGGIE GREENE", cat: "Mejor Rivalidad" },
    { year: 2018, name: "ZETA", cat: "Mejor anécdota" },
    { year: 2018, name: "PATO", cat: "Más bizarro" },
    { year: 2018, name: "ZETA", cat: "Más odiado" },
    { year: 2018, name: "BAILEY", cat: "Más querido (No grupo)" },
    { year: 2018, name: "MAGGIE GREENE", cat: "Peor jugador de Haxball" },
    { year: 2018, name: "WILLIAN", cat: "Más depresivo" },
    { year: 2018, name: "MORRO", cat: "Mejor jugador de PES 6" },
    { year: 2018, name: "BOCA JUNIORS", cat: "Mejor debate" },
    { year: 2018, name: "RIVER PLATE", cat: "Mejor debate" },
    { year: 2018, name: "RUSITO ASSAD", cat: "Mejor sticker" },
    { year: 2018, name: "SI BUENO QUIEN TIENE HAMBRE", cat: "Mejor meme" },
    { year: 2018, name: "SEÑOR X", cat: "Mejor spamero" },
    { year: 2018, name: "KEV", cat: "Mejor jugador de Haxball (RS)" },
    { year: 2018, name: "MORRO", cat: "Mejor Integrante" }
];

// =====================================================================
//  RANKING (la lógica lee awardsDB: para sumar premios solo hay que
//  agregar líneas arriba; los botones de año se generan solos)
// =====================================================================
const LIMIT = 15;                       // filas visibles antes de "Mostrar todos"
const state = { year: "all", query: "", showAll: false };

const $ = (id) => document.getElementById(id);
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const norm = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const plural = (n, uno, varios) => `${n} ${n === 1 ? uno : varios}`;

const years = [...new Set(awardsDB.map((i) => i.year))].sort((a, b) => b - a);

// Agrupa por nombre y calcula la posición (los empates comparten lugar)
function buildRanking(year) {
    const map = new Map();
    awardsDB.forEach((item) => {
        if (year !== "all" && String(item.year) !== year) return;
        const name = item.name.toUpperCase();
        if (!map.has(name)) map.set(name, { name, total: 0, byYear: new Map() });
        const e = map.get(name);
        e.total++;
        if (!e.byYear.has(item.year)) e.byYear.set(item.year, []);
        e.byYear.get(item.year).push(item.cat);
    });
    const list = [...map.values()].sort((a, b) => b.total - a.total || a.name.localeCompare(b.name, "es"));
    let rank = 1;
    list.forEach((e, i) => {
        if (i > 0 && e.total < list[i - 1].total) rank = i + 1;
        e.rank = rank;
    });
    return list;
}

function detailHtml(e) {
    const single = state.year !== "all";
    return [...e.byYear.keys()].sort((a, b) => b - a).map((y) =>
        `<div class="rk-year${single ? " single" : ""}">` +
        (single ? "" : `<p class="rk-year-label">${y}</p>`) +
        `<ul>${e.byYear.get(y).map((c) => `<li>${esc(c)}</li>`).join("")}</ul></div>`
    ).join("");
}

function leaderHtml(e) {
    const n = e.byYear.size;
    const sub = state.year === "all" ? `<small>en ${plural(n, "edición", "ediciones")}</small>` : "";
    return `<details class="rk-lead"><summary>
        <span class="rk-lead-name">${esc(e.name)}</span>
        <span class="rk-lead-count"><b>${e.total}</b>${e.total === 1 ? "erizo" : "erizos"}${sub}</span>
        <span class="rk-toggle"></span>
    </summary><div class="rk-detail">${detailHtml(e)}</div></details>`;
}

function rowHtml(e, max) {
    const w = Math.max(4, Math.round((e.total / max) * 100));
    const medal = e.rank <= 3 ? ` rank-${e.rank}` : "";
    return `<li class="rk-row${medal}" style="--w:${w}%"><details><summary>
        <span class="rk-pos">${e.rank}º</span>
        <span class="rk-name">${esc(e.name)}</span>
        <span class="rk-count">${e.total}</span>
    </summary><div class="rk-detail">${detailHtml(e)}</div></details></li>`;
}

function render() {
    const ranked = buildRanking(state.year);
    const max = ranked[0].total;
    const q = norm(state.query.trim());
    const leadersBox = $("leaders"), list = $("rankingList"), more = $("moreBtn");

    document.querySelectorAll(".rk-pill").forEach((b) =>
        b.setAttribute("aria-pressed", String(b.dataset.year === state.year)));

    const totalAwards = ranked.reduce((s, e) => s + e.total, 0);
    const where = state.year === "all" ? `en ${plural(years.length, "edición", "ediciones")}` : `en ${state.year}`;

    if (q) {   // búsqueda: lista plana con la posición real de cada uno
        const found = ranked.filter((e) => norm(e.name).includes(q));
        leadersBox.innerHTML = "";
        more.hidden = true;
        $("summary").textContent = found.length
            ? `${plural(found.length, "resultado", "resultados")} para «${state.query.trim()}».`
            : "";
        list.innerHTML = found.length
            ? found.map((e) => rowHtml(e, max)).join("")
            : `<li class="rk-empty">Nadie coincide con «${esc(state.query.trim())}». Probá con otro nombre o revisá el filtro de año.</li>`;
        return;
    }

    $("summary").textContent = `Se entregaron ${plural(totalAwards, "premio", "premios")} entre ${plural(ranked.length, "ganador", "ganadores")} ${where}.`;

    const leaders = ranked.filter((e) => e.rank === 1);
    const rest = ranked.filter((e) => e.rank > 1);
    const titulo = (leaders.length > 1 ? "Líderes" : "Líder") + (state.year === "all" ? " de todos los tiempos" : ` de ${state.year}`);
    leadersBox.innerHTML = `<h2>${titulo}${leaders.length > 1 ? " (empatados)" : ""}</h2>` + leaders.map(leaderHtml).join("");

    const visible = state.showAll ? rest : rest.slice(0, LIMIT);
    list.innerHTML = visible.map((e) => rowHtml(e, max)).join("");
    more.hidden = rest.length <= LIMIT;
    more.textContent = state.showAll ? "Mostrar menos" : `Mostrar los ${rest.length - LIMIT} restantes`;
}

// ---- inicio ----
$("yearFilters").innerHTML = ["all", ...years].map((y) =>
    `<button type="button" class="rk-pill" data-year="${y}">${y === "all" ? "Todos los tiempos" : y}</button>`).join("");

$("yearFilters").addEventListener("click", (ev) => {
    const b = ev.target.closest(".rk-pill");
    if (!b) return;
    state.year = b.dataset.year;
    state.showAll = false;
    render();
});
$("searchBox").addEventListener("input", (ev) => { state.query = ev.target.value; render(); });
$("moreBtn").addEventListener("click", () => { state.showAll = !state.showAll; render(); });

render();   // el script se carga con defer: el DOM ya está listo

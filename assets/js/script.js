/* ============================================================
   LEND — Portfólio interativo
   ------------------------------------------------------------
   PARA TROCAR AS IMAGENS: edite o campo `image` de cada item
   abaixo e coloque seu arquivo na pasta assets/img/.
   ============================================================ */

const portfolioData = {
  texturas: {
    categories: [
      { id: "todos",    label: "Todos" },
      { id: "moderno",  label: "Moderno" },
      { id: "medieval", label: "Medieval" },
      { id: "icones",   label: "Ícones" },
      { id: "natureza", label: "Natureza" },
      { id: "gui",      label: "GUI & Menus" },
      { id: "fantasia", label: "Fantasia & Runas" },
      { id: "packs",    label: "Packs Completos" },
      { id: "animadas", label: "Texturas Animadas" },
      { id: "scifi",    label: "Sci-Fi" }
    ],
    items: [
      {
        title: "Concreto Clean", category: "moderno", categoryLabel: "Moderno",
        image: "assets/img/tex-moderno-1.svg",
        description: "Blocos de concreto com mapeamento UV limpo e 12 variações de tile.",
        detail: "Conjunto de 12 texturas 32x com variações de desgaste e polimento. Entregas em PNG, prontas para substituir os blocos de concreto em resource packs. Compatível com Java e Bedrock.",
        tags: ["32x", "12 tiles", "PNG"]
      },
      {
        title: "Interior Minimalista", category: "moderno", categoryLabel: "Moderno",
        image: "assets/img/tex-moderno-2.svg",
        description: "Pisos, painéis e estofados em paleta neutra, com contraste calibrado.",
        detail: "Pack de 16 texturas 32x para pisos, paredes e móveis. Tonalidades neutras e contraste controlado para manter legibilidade sob diferentes níveis de iluminação. Atlas organizado por categoria.",
        tags: ["32x", "16 texturas", "Atlas"]
      },
      {
        title: "Vidro & Neon", category: "moderno", categoryLabel: "Moderno",
        image: "assets/img/tex-moderno-3.svg",
        description: "Texturas de vidro translúcido e painéis emissivos em quatro cores.",
        detail: "Arquivos PNG 32x com canal alpha para vidro e quatro variações de neon. As versões luminosas utilizam a camada de emissão padrão do jogo. Testado em Java 1.20+.",
        tags: ["32x", "Alpha", "Emissão"]
      },
      {
        title: "Pedra Ancestral", category: "medieval", categoryLabel: "Medieval",
        image: "assets/img/tex-medieval-1.svg",
        description: "Texturas de pedra com seis níveis de desgaste e variantes de musgo/neve.",
        detail: "Seis tiles 16x com variações de erosão, rachaduras e cobertura. Segue o mapeamento dos blocos vanilla para substituição direta em packs.",
        tags: ["16x", "6 variações", "Vanilla-ready"]
      },
      {
        title: "Madeira Rugida", category: "medieval", categoryLabel: "Medieval",
        image: "assets/img/tex-medieval-2.svg",
        description: "Tábuas e vigas com padrão de grão, nós e ferragens em relevo.",
        detail: "Conjunto 16x com variações de tábuas, vigas e portas. Elementos de ferragem com contraste elevado para leitura em baixa resolução. Inclui atlas e arquivos separados.",
        tags: ["16x", "Atlas", "Portas & vigas"]
      },
      {
        title: "Tapetes & Bandeiras", category: "medieval", categoryLabel: "Medieval",
        image: "assets/img/tex-medieval-3.svg",
        description: "Tecidos heráldicos com padrões vetoriais convertidos para 32x.",
        detail: "Modelos de banner e tapete em 32x com brasões customizáveis. Entrega em PNG e .json para banner patterns, com cores configuráveis por canal.",
        tags: ["32x", ".json", "Customizável"]
      },
      {
        title: "Ícones de Interface", category: "icones", categoryLabel: "Ícones",
        image: "assets/img/tex-icones-1.svg",
        description: "Biblioteca de 40+ ícones 16x para HUD, hotbar e GUIs de servidor.",
        detail: "Sprites 16x padronizados em grade de 16 px, com transparência e contorno consistente. Inclui ícones de status, moeda, armadura e experiência. Pronto para mapeamento em GUI.",
        tags: ["16x", "40+ ícones", "GUI"]
      },
      {
        title: "Gemas & Minérios", category: "icones", categoryLabel: "Ícones",
        image: "assets/img/tex-icones-2.svg",
        description: "Ícones de recursos com camada de brilho para lojas e menus.",
        detail: "Conjunto de 12 ícones 16x para gemas, lingotes e minérios. Cada item acompanha versão com emissão suave para GUIs de shop e telas de recompensa.",
        tags: ["16x", "12 ícones", "Emissão"]
      },
      {
        title: "Emojis Pixel", category: "icones", categoryLabel: "Ícones",
        image: "assets/img/tex-icones-3.svg",
        description: "Símbolos 16x para chat e placas, desenhados na grade do jogo.",
        detail: "24 glifos em 16x com transparência, prontos para fontes de resource pack e mapeamento de caracteres em chat e placas.",
        tags: ["16x", "24 glifos", "Font"]
      },
      {
        title: "Folhagem Vibrante", category: "natureza", categoryLabel: "Natureza",
        image: "assets/img/tex-natureza-1.svg",
        description: "18 variações de folhagem, grama e flores em 32x.",
        detail: "Pack botânico com tiles 32x e paleta saturada. Inclui versões de folha com e sem transparência, além de atlas para plantas.",
        tags: ["32x", "18 variações", "Atlas"]
      },
      {
        title: "Terras & Caminhos", category: "natureza", categoryLabel: "Natureza",
        image: "assets/img/tex-natureza-2.svg",
        description: "Solos, areia e cascalho com blocos de transição entre biomas.",
        detail: "Conjunto 16x com variações de umidade e texturas de transição entre terra, grama e cascalho. Segue o mapeamento vanilla para substituição direta.",
        tags: ["16x", "Transições", "Vanilla-ready"]
      },
      {
        title: "Céu & Clima", category: "natureza", categoryLabel: "Natureza",
        image: "assets/img/tex-natureza-3.svg",
        description: "Texturas de céu, nuvens e partículas em 64x.",
        detail: "Arquivos 64x para camada de céu, nuvens e partículas de chuva/neve. Inclui versões diurnas e noturnas com gradiente contínuo.",
        tags: ["64x", "Partículas", "Céu"]
      },
      {
        title: "Painéis de Servidor", category: "gui", categoryLabel: "GUI & Menus",
        image: "assets/img/tex-gui-1.svg",
        description: "Painéis de GUI 32x com moldura, botões e estados de hover.",
        detail: "Conjunto de 8 painéis 32x para menus de servidor, com estados normal, hover e desabilitado. Entrega em PNG e mapeamento de slots pronto para GUI.",
        tags: ["32x", "8 painéis", "GUI"]
      },
      {
        title: "Botões & Slots", category: "gui", categoryLabel: "GUI & Menus",
        image: "assets/img/tex-gui-2.svg",
        description: "Elementos de interface 16x com estados visuais para hotbars e menus.",
        detail: "Sprites 16x de botões, slots e barras com três estados (normal, selecionado, bloqueado). Grade padronizada para mapeamento direto em GUI.",
        tags: ["16x", "3 estados", "Slots"]
      },
      {
        title: "Runas Luminosas", category: "fantasia", categoryLabel: "Fantasia & Runas",
        image: "assets/img/tex-fantasia-1.svg",
        description: "Glifos 32x com camada de emissão para magia e encantamentos.",
        detail: "12 runas em 32x com versão emissiva separada. Prontas para aplicar em blocos, itens e partículas de efeitos mágicos.",
        tags: ["32x", "12 glifos", "Emissão"]
      },
      {
        title: "Cristais & Arcana", category: "fantasia", categoryLabel: "Fantasia & Runas",
        image: "assets/img/tex-fantasia-2.svg",
        description: "Cristais facetados com transparência e reflexo em 32x.",
        detail: "Conjunto de 8 cristais 32x com canal alpha e variações de cor. Adequado para itens de magia, poções e decoração de templos.",
        tags: ["32x", "Alpha", "8 variações"]
      },
      {
        title: "Pack Medieval Completo", category: "packs", categoryLabel: "Packs Completos",
        image: "assets/img/tex-packs-1.svg",
        description: "Coleção unificada de blocos, itens e GUI em 32x.",
        detail: "Pack pronto para instalar com mais de 120 arquivos organizados por categoria. Inclui blocos, itens, GUI e sons de referência. Compatível com Java e Bedrock.",
        tags: ["32x", "120+ arquivos", "Completo"]
      },
      {
        title: "Pack Minimalista 16x", category: "packs", categoryLabel: "Packs Completos",
        image: "assets/img/tex-packs-2.svg",
        description: "Pack enxuto 16x com paleta consistente e estilo limpo.",
        detail: "Conjunto completo em 16x com blocos e itens essenciais, pensado para servidores que precisam de leitura rápida e baixo custo de textura.",
        tags: ["16x", "Vanilla-ready", "Completo"]
      },
      {
        title: "Água & Lava", category: "animadas", categoryLabel: "Texturas Animadas",
        image: "assets/img/tex-animadas-1.svg",
        description: "Texturas animadas com 16 quadros e transição contínua.",
        detail: "Sequências de 16 quadros em 32x para água e lava, com loop suave e variações de cor. Entrega em PNG sequencial e metadados de tick rate.",
        tags: ["32x", "16 frames", "Loop"]
      },
      {
        title: "Fogo & Partículas", category: "animadas", categoryLabel: "Texturas Animadas",
        image: "assets/img/tex-animadas-2.svg",
        description: "Sprites animados de fogo, fumaça e faíscas.",
        detail: "Conjunto de 12 quadros em 16x com transparência e diferentes intensidades. Pronto para mapeamento em partículas e efeitos de blocos.",
        tags: ["16x", "12 frames", "Alpha"]
      },
      {
        title: "Painéis Tecnológicos", category: "scifi", categoryLabel: "Sci-Fi",
        image: "assets/img/tex-scifi-1.svg",
        description: "Metais, painéis luminosos e circuitos em 32x.",
        detail: "Texturas 32x para estruturas futuristas com linhas de circuito e indicadores. Inclui versões emissivas e atlas organizado.",
        tags: ["32x", "Emissão", "Atlas"]
      },
      {
        title: "Naves & Cascas", category: "scifi", categoryLabel: "Sci-Fi",
        image: "assets/img/tex-scifi-2.svg",
        description: "Texturas de casco metálico com painéis e marcas de uso.",
        detail: "Conjunto 64x para cascos de naves e estações, com variações de desgaste e decalques. Adequado para mapas sci-fi e modelos 3D.",
        tags: ["64x", "Decalques", "Sci-fi"]
      }
    ]
  },

  modelos: {
    categories: [
      { id: "todos",     label: "Todos" },
      { id: "moderno",   label: "Moderno" },
      { id: "medieval",  label: "Medieval" },
      { id: "decoracao", label: "Decoração" },
      { id: "mobs",      label: "Mobs & Criaturas" },
      { id: "ferramentas", label: "Ferramentas & Armas" },
      { id: "armaduras",   label: "Armaduras & Cosméticos" },
      { id: "veiculos",    label: "Veículos" },
      { id: "maquinas",    label: "Estruturas & Máquinas" },
      { id: "plantas",     label: "Natureza & Plantas" }
    ],
    items: [
      {
        title: "Mesa de Trabalho Moderna", category: "moderno", categoryLabel: "Moderno",
        image: "assets/img/mod-moderno-1.svg",
        description: "Modelo Blockbench com tampo de vidro, gavetas animadas e textura 32x.",
        detail: "Modelo 3D exportado em .json e .bbmodel com animação de abertura das gavetas. Geometria otimizada e UV mapeado para textura 32x. Pronto para resource pack.",
        tags: ["Blockbench", "32x", "Animado"]
      },
      {
        title: "Estação de Energia", category: "moderno", categoryLabel: "Moderno",
        image: "assets/img/mod-moderno-2.svg",
        description: "Gerador modular com painéis solares e emissores de luz configuráveis.",
        detail: "Modelo Blockbench com partes separadas por elemento (chassi, painel, indicadores). Emissores de luz configuráveis e UV mapeado em 32x.",
        tags: ["Blockbench", "32x", "Emissão"]
      },
      {
        title: "Cadeira de Escritório", category: "moderno", categoryLabel: "Moderno",
        image: "assets/img/mod-moderno-3.svg",
        description: "Modelo low-poly com quatro variantes de cor e peças reutilizáveis.",
        detail: "Geometria com encosto, assento e base separados. Quatro variantes de cor por troca de textura 32x. Exportado em .json para resource pack.",
        tags: ["Blockbench", "4 variantes", ".json"]
      },
      {
        title: "Espada Encantada", category: "medieval", categoryLabel: "Medieval",
        image: "assets/img/mod-medieval-1.svg",
        description: "Modelo de primeira pessoa e sprite de item com partículas de encantamento.",
        detail: "Geometria em Blockbench com versões com e sem brilho para diferentes tiers. Inclui sprite 32x e camada de emissão configurável.",
        tags: ["1ª pessoa", "32x", "Emissão"]
      },
      {
        title: "Cadeira de Carvalho", category: "medieval", categoryLabel: "Medieval",
        image: "assets/img/mod-medieval-2.svg",
        description: "Modelo 16x com talhes em relevo e materiais separados por textura.",
        detail: "Peças separadas por material (madeira, couro, metal) para troca de textura. UV mapeado em 16x e exportado em .bbmodel e .json.",
        tags: ["16x", "Materiais", ".bbmodel"]
      },
      {
        title: "Baú de Tesouro", category: "medieval", categoryLabel: "Medieval",
        image: "assets/img/mod-medieval-3.svg",
        description: "Modelo com tampa animada, fechadura em destaque e interior mapeado.",
        detail: "Animação de abertura pronta para integração com datapack. Geometria otimizada e UV 32x, com versões de baú normal e reforçado.",
        tags: ["Animado", "32x", "Datapack"]
      },
      {
        title: "Lanterna de Ferro", category: "decoracao", categoryLabel: "Decoração",
        image: "assets/img/mod-decoracao-1.svg",
        description: "Três variantes de instalação (chão, parede, teto) com luz configurável.",
        detail: "Modelo Blockbench com vidro em canal alpha e emissão configurável. Três geometrias derivadas da mesma base, exportadas em .json.",
        tags: ["Blockbench", "3 variantes", "Alpha"]
      },
      {
        title: "Vaso de Cerâmica", category: "decoracao", categoryLabel: "Decoração",
        image: "assets/img/mod-decoracao-2.svg",
        description: "Modelo low-poly com quatro padrões de textura e duas alturas.",
        detail: "Geometria com UV 32x e quatro variantes de pintura por arquivo de textura. Acompanha versão com slot para flor.",
        tags: ["32x", "4 variantes", ".json"]
      },
      {
        title: "Relógio de Parede", category: "decoracao", categoryLabel: "Decoração",
        image: "assets/img/mod-decoracao-3.svg",
        description: "Modelo com ponteiros animados por resource pack.",
        detail: "Ponteiros em camadas separadas com animação de rotação contínua. Moldura em madeira 16x e exportação em .json.",
        tags: ["16x", "Animado", ".json"]
      },
      {
        title: "Dragão Compacto", category: "mobs", categoryLabel: "Mobs & Criaturas",
        image: "assets/img/mod-mob-1.svg",
        description: "Mob com seis animações e estrutura pronta para behaviors.",
        detail: "Modelo Blockbench com esqueleto de asas, cabeça e cauda. Seis animações exportadas, prontas para vinculação a arquivos de behavior e som.",
        tags: ["Mob", "6 animações", "Behavior"]
      },
      {
        title: "Golem de Jardim", category: "mobs", categoryLabel: "Mobs & Criaturas",
        image: "assets/img/mod-mob-2.svg",
        description: "Mob pacífico com animações de colheita e expressão.",
        detail: "Geometria modular em 16x com peças separadas para pedra, musgo e olhos. Animações de interação prontas para servidores de roleplay.",
        tags: ["16x", "Animado", "Roleplay"]
      },
      {
        title: "Lobo de Cristal", category: "mobs", categoryLabel: "Mobs & Criaturas",
        image: "assets/img/mod-mob-3.svg",
        description: "Mob companheiro com textura translúcida e emissão configurável.",
        detail: "Modelo com canal alpha e camada de brilho configurável. Partículas e olhos emissivos mapeados em textura separada. Exportado em .bbmodel.",
        tags: ["Mob", "Alpha", ".bbmodel"]
      },
      {
        title: "Picareta Modular", category: "ferramentas", categoryLabel: "Ferramentas & Armas",
        image: "assets/img/mod-ferramentas-1.svg",
        description: "Ferramenta 3D com cabeça intercambiável e textura 32x.",
        detail: "Modelo Blockbench com partes separadas (cabo, cabeça, encaixe). Quatro tipos de cabeça por troca de textura, exportado em .json.",
        tags: ["32x", "4 cabeças", ".json"]
      },
      {
        title: "Arco Composto", category: "ferramentas", categoryLabel: "Ferramentas & Armas",
        image: "assets/img/mod-ferramentas-2.svg",
        description: "Arma com arco tensionado e seta encaixada.",
        detail: "Geometria low-poly com arco, corda e flecha em peças separadas. Animação de puxar pronta para primeira pessoa.",
        tags: ["1ª pessoa", "Animado", "32x"]
      },
      {
        title: "Capacete Rúnico", category: "armaduras", categoryLabel: "Armaduras & Cosméticos",
        image: "assets/img/mod-armaduras-1.svg",
        description: "Armadura de cabeça com runas emissivas e viseira translúcida.",
        detail: "Modelo 3D com camada de emissão e viseira em alpha. Exportado em .json para o slot de capacete, com textura 32x.",
        tags: ["32x", "Emissão", "Armadura"]
      },
      {
        title: "Capa de Tecido", category: "armaduras", categoryLabel: "Armaduras & Cosméticos",
        image: "assets/img/mod-armaduras-2.svg",
        description: "Capa com dobras modeladas e quatro variantes de cor.",
        detail: "Geometria low-poly com dobras e textura 32x. Quatro variantes de cor, pronta para o slot de capa.",
        tags: ["32x", "4 variantes", "Capa"]
      },
      {
        title: "Carruagem Medieval", category: "veiculos", categoryLabel: "Veículos",
        image: "assets/img/mod-veiculos-1.svg",
        description: "Veículo com rodas, baú e animação de rodagem.",
        detail: "Modelo Blockbench com rodas separadas e animação de rotação. Textura 32x, exportado em .bbmodel e .json.",
        tags: ["32x", "Animado", ".bbmodel"]
      },
      {
        title: "Barco de Madeira", category: "veiculos", categoryLabel: "Veículos",
        image: "assets/img/mod-veiculos-2.svg",
        description: "Embarcação low-poly com remos e casco detalhado.",
        detail: "Geometria com casco, remos e mastro em peças separadas. Textura 32x e versão com vela dobrada.",
        tags: ["32x", "Remos", ".json"]
      },
      {
        title: "Gerador Redstone", category: "maquinas", categoryLabel: "Estruturas & Máquinas",
        image: "assets/img/mod-maquinas-1.svg",
        description: "Máquina com engrenagens e indicadores luminosos.",
        detail: "Modelo modular com engrenagens separadas e animação de rotação. Emissão configurável e textura 32x.",
        tags: ["32x", "Animado", "Redstone"]
      },
      {
        title: "Portão Mecanizado", category: "maquinas", categoryLabel: "Estruturas & Máquinas",
        image: "assets/img/mod-maquinas-2.svg",
        description: "Estrutura com folhas articuladas e sistema de tranca.",
        detail: "Modelo com duas folhas e animação de abertura sincronizada. Geometria otimizada e UV 32x, pronta para datapack.",
        tags: ["32x", "Animado", "Datapack"]
      },
      {
        title: "Árvore Estilizada", category: "plantas", categoryLabel: "Natureza & Plantas",
        image: "assets/img/mod-plantas-1.svg",
        description: "Árvore low-poly com tronco, galhos e copa em camadas.",
        detail: "Modelo 3D com copa em três camadas e textura 32x. Duas variações de folhagem, exportado em .json.",
        tags: ["32x", "2 variações", ".json"]
      },
      {
        title: "Cogumelos Gigantes", category: "plantas", categoryLabel: "Natureza & Plantas",
        image: "assets/img/mod-plantas-2.svg",
        description: "Conjunto de cogumelos com chapéu texturizado e caule separado.",
        detail: "Três tamanhos de cogumelo com chapéu e caule em peças separadas. Textura 32x e versões com emissão suave.",
        tags: ["32x", "3 tamanhos", "Emissão"]
      }
    ]
  }
};

/* ---------- Estado ---------- */
let activeTab = "texturas";
let activeCategory = "todos";

/* ---------- Elementos ---------- */
const grid = document.getElementById("cards-grid");
const filtersEl = document.getElementById("filters");
const emptyState = document.getElementById("empty-state");
const modal = document.getElementById("modal");

/* ---------- Renderização ---------- */
function renderFilters() {
  const cats = portfolioData[activeTab].categories;
  filtersEl.innerHTML = cats.map(cat => `
    <button class="filter-chip ${cat.id === activeCategory ? "active" : ""}"
            data-category="${cat.id}" aria-pressed="${cat.id === activeCategory}">
      <span class="chip-dot" aria-hidden="true"></span>${cat.label}
    </button>
  `).join("");

  filtersEl.querySelectorAll(".filter-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderFilters();
      renderCards();
    });
  });
}

function renderCards() {
  const data = portfolioData[activeTab];
  const items = activeCategory === "todos"
    ? data.items
    : data.items.filter(item => item.category === activeCategory);

  emptyState.hidden = items.length > 0;

  grid.innerHTML = items.map(item => `
    <article class="card">
      <div class="card-image">
        <img src="${item.image}" alt="Ilustração de ${item.title}" loading="lazy">
        <span class="card-category">${item.categoryLabel}</span>
      </div>
      <div class="card-body">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        <button class="card-link" data-title="${item.title}">Ver detalhes <span aria-hidden="true">→</span></button>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".card-link").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.title));
  });
}

function updateCounts() {
  document.getElementById("count-texturas").textContent = String(portfolioData.texturas.items.length).padStart(2, "0");
  document.getElementById("count-modelos").textContent = String(portfolioData.modelos.items.length).padStart(2, "0");
}

/* ---------- Tabs ---------- */
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    activeTab = tab.dataset.tab;
    activeCategory = "todos";

    document.querySelectorAll(".tab").forEach(t => {
      const isActive = t === tab;
      t.classList.toggle("active", isActive);
      t.setAttribute("aria-selected", String(isActive));
    });

    const panel = document.getElementById("painel-portfolio");
    panel.setAttribute("aria-labelledby", tab.id);

    renderFilters();
    renderCards();
  });
});

/* ---------- Modal ---------- */
function findItem(title) {
  return portfolioData[activeTab].items.find(i => i.title === title);
}

function openModal(title) {
  const item = findItem(title);
  if (!item) return;

  document.getElementById("modal-image").src = item.image;
  document.getElementById("modal-image").alt = `Ilustração de ${item.title}`;
  document.getElementById("modal-category").textContent = item.categoryLabel;
  document.getElementById("modal-title").textContent = item.title;
  document.getElementById("modal-description").textContent = item.detail;
  document.getElementById("modal-tags").innerHTML = item.tags.map(t => `<span class="tag">${t}</span>`).join("");

  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

modal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});

/* ---------- Menu mobile ---------- */
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

/* ---------- Contadores ---------- */
function animateCounters() {
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = Number(el.dataset.count);
    const duration = 1100;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.floor(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = String(target);
    }
    requestAnimationFrame(tick);
  });
}

/* Links com placeholder (troque pelo seu contato real) */
document.querySelectorAll("[data-placeholder]").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    alert("Troque este link pelo seu " + el.dataset.placeholder + " real em index.html.");
  });
});

/* ---------- Init ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
updateCounts();
renderFilters();
renderCards();
animateCounters();

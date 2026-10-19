(() => {
  "use strict";

  const cases = window.SHOWCASE_CASES;
  const main = document.querySelector("main");
  const storageKey = "wei-showcase-language";
  const messages = {
    en: {
      skip: "Skip to content",
      siteTitle: "Physical AI Showcase",
      intro:
        "Engineering solutions I developed for clients, using robotics, reinforcement learning and particle simulation to address their technical challenges.",
      eyebrow: "CLIENT ENGINEERING SOLUTIONS",
      caseStat: "simulation cases",
      demoStat: "video demonstrations",
      cases: "Simulation Cases",
      solvers: "Solvers",
      papers: "Papers",
      casesDescription:
        "Client requirements, the engineering solutions I developed and demonstrations of their capabilities.",
      solversDescription: "Simulation engines and numerical methods.",
      papersDescription: "Research papers and technical publications.",
      all: "All",
      robotics: "Robotics",
      mobility: "Mobility",
      multiphysics: "Particle simulation",
      filterLabel: "Filter cases by field",
      sortLabel: "Sort by",
      newestFirst: "Date added: newest first",
      oldestFirst: "Date added: oldest first",
      dateAdded: "Added",
      viewCase: "View case",
      demos: (n) => `${n} ${n === 1 ? "demonstration" : "demonstrations"}`,
      results: (n, total) => `${n} of ${total} cases`,
      back: "Back to cases",
      videos: "Video demonstrations",
      videoNote: "Select a video to play. No autoplay.",
      videoLanguage: "Video language",
      enVideo: "English video",
      jaVideo: "Japanese video",
      neutralVideo: "Language-neutral video",
      openVideo: "Open video",
      emptyTitle: "No items added yet",
      emptyDescription: "This section is currently empty.",
      footer: "Physical AI · Engineering Solutions",
      meta: "Engineering solutions developed by WEI for clients, applying robotics, reinforcement learning and DEM/SPH simulation to their technical challenges. Available in English and Japanese.",
    },
    ja: {
      skip: "コンテンツへスキップ",
      siteTitle: "Physical AI ショーケース",
      intro:
        "顧客の技術課題に対して、私が開発したエンジニアリングソリューションの実績。ロボティクス・強化学習・粒子シミュレーションを活用した案件を紹介します。",
      eyebrow: "顧客向けエンジニアリングソリューション",
      caseStat: "シミュレーション事例",
      demoStat: "デモ映像",
      cases: "シミュレーション事例",
      solvers: "ソルバー",
      papers: "論文",
      casesDescription:
        "顧客の要求に対して開発したソリューションと、その機能・技術的な成果を紹介します。",
      solversDescription: "シミュレーションエンジンと数値計算手法。",
      papersDescription: "研究論文と技術文献。",
      all: "すべて",
      robotics: "ロボティクス",
      mobility: "モビリティ",
      multiphysics: "粒子シミュレーション",
      filterLabel: "分野で事例を絞り込む",
      sortLabel: "並び順",
      newestFirst: "追加日：新しい順",
      oldestFirst: "追加日：古い順",
      dateAdded: "追加日",
      viewCase: "事例を見る",
      demos: (n) => `${n} 本のデモ`,
      results: (n, total) => `全${total}件中 ${n}件を表示`,
      back: "事例一覧へ戻る",
      videos: "デモ映像",
      videoNote: "映像を選択して再生できます。",
      videoLanguage: "映像の言語",
      enVideo: "英語映像",
      jaVideo: "日本語映像",
      neutralVideo: "言語共通の映像",
      openVideo: "映像を開く",
      emptyTitle: "まだ項目がありません",
      emptyDescription: "この欄は現在空です。",
      footer: "Physical AI · エンジニアリングソリューション",
      meta: "崔 煒（WEI）が顧客向けに開発したエンジニアリングソリューションの実績。ロボティクス、強化学習、DEM・SPHによるシミュレーションの開発事例を紹介。",
    },
  };
  const icons = {
    arrow:
      '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6"/></svg>',
    external:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M14 4h6v6m0-6L10 14M10 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5"/></svg>',
  };

  const escape = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char],
    );
  const url = new URL(window.location.href);
  let savedLanguage;
  try {
    savedLanguage = localStorage.getItem(storageKey);
  } catch {
    /* Local files may block storage. */
  }
  const queryLanguage = url.searchParams.get("lang");
  let language =
    [queryLanguage, savedLanguage].find((value) =>
      ["en", "ja"].includes(value),
    ) || (navigator.language.toLowerCase().startsWith("ja") ? "ja" : "en");
  let filter = "all";
  let sortOrder = "newest";
  let renderedUrl = "";
  const text = (key) => messages[language][key];

  function route() {
    const hash = window.location.hash.slice(1);
    const legacy = cases.find((item) => item.id === hash);
    if (legacy) {
      history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}#cases/${legacy.id}`,
      );
      return { section: "cases", item: legacy };
    }
    const [section, id] = hash.split("/");
    if (section === "solvers" || section === "papers") return { section };
    return { section: "cases", item: cases.find((item) => item.id === id) };
  }

  function stopVideos() {
    main.querySelectorAll("video").forEach((video) => {
      video.pause();
      video.removeAttribute("src");
      video.load();
    });
  }

  function card(item) {
    return `<a class="case-card" href="#cases/${item.id}">
      <div class="card-image"><img src="${preferredVideo(item.clips[item.previewClip]).poster}" alt="" width="960" height="540" loading="lazy"><span class="card-number">CASE ${item.number}</span></div>
      <div class="card-body">
        <div class="card-eyebrow"><span>${escape(item.engine)}</span><span class="separator">/</span><span>${escape(text(item.category))}</span></div>
        <h3>${escape(item.shortTitle[language])}</h3>
        <p class="card-summary">${escape(item.summary[language])}</p>
        <div class="card-bottom"><div class="card-facts"><span>${text("dateAdded")} <time datetime="${item.addedAt}">${item.addedAt.slice(0, 10)}</time></span><span>${text("demos")(item.clips.length)}</span></div><span class="card-action">${text("viewCase")}${icons.arrow}</span></div>
      </div>
    </a>`;
  }

  function renderCards() {
    const visible = cases
      .filter((item) => filter === "all" || item.category === filter)
      .sort((a, b) => {
        // Cases added together follow the existing curated timeline.
        const chronological =
          Date.parse(a.addedAt) - Date.parse(b.addedAt) ||
          Number(a.number) - Number(b.number);
        return sortOrder === "newest" ? -chronological : chronological;
      });
    main.querySelector(".case-grid").innerHTML = visible.map(card).join("");
    main.querySelector(".results-status").textContent = text("results")(
      visible.length,
      cases.length,
    );
    main.querySelectorAll("[data-filter]").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.filter === filter),
      );
    });
  }

  function renderCases() {
    main.innerHTML = `<div class="section-heading"><div><h2>${text("cases")}</h2><p>${text("casesDescription")}</p></div>
      <div class="filters" role="group" aria-label="${text("filterLabel")}">
        ${["all", "robotics", "mobility", "multiphysics"].map((key) => `<button type="button" class="filter" data-filter="${key}" aria-pressed="${key === filter}">${text(key)}</button>`).join("")}
      </div></div>
      <div class="list-toolbar">
        <p class="results-status" role="status" aria-live="polite"></p>
        <div class="sort-control"><label for="case-sort">${text("sortLabel")}</label>
          <select id="case-sort" data-sort>
            <option value="newest"${sortOrder === "newest" ? " selected" : ""}>${text("newestFirst")}</option>
            <option value="oldest"${sortOrder === "oldest" ? " selected" : ""}>${text("oldestFirst")}</option>
          </select>
        </div>
      </div><div class="case-grid"></div>`;
    renderCards();
  }

  function languageLabel(value) {
    return text(value === "neutral" ? "neutralVideo" : `${value}Video`);
  }

  function preferredVideo(clip) {
    return (
      clip.videos.find((video) => video.lang === language) ||
      clip.videos.find((video) => video.lang === "neutral") ||
      clip.videos[0]
    );
  }

  function videoCard(clip, index) {
    const selected = preferredVideo(clip);
    const id = `clip-${index}`;
    const languageControl =
      clip.videos.length > 1
        ? `<select data-video-language="${index}" aria-label="${text("videoLanguage")}: ${escape(clip.title[language])}">${clip.videos.map((video) => `<option value="${video.lang}"${video === selected ? " selected" : ""}>${languageLabel(video.lang)}</option>`).join("")}</select>`
        : `<span class="video-language">${languageLabel(selected.lang)}</span>`;
    return `<article class="video-card">
      <video controls playsinline preload="none" src="${escape(selected.src)}" poster="${selected.poster}" aria-labelledby="${id}-title" data-clip="${index}"></video>
      <div class="video-info"><div class="clip-number">${String(index + 1).padStart(2, "0")}</div>
        <h4 id="${id}-title">${escape(clip.title[language])}</h4>
        <div class="video-tools">${languageControl}<a class="video-link" data-video-link="${index}" href="${escape(selected.src)}" target="_blank" rel="noopener">${text("openVideo")}${icons.external}</a></div>
      </div></article>`;
  }

  function renderDetail(item) {
    main.innerHTML = `<a class="back-link" href="#cases">${icons.back}${text("back")}</a>
      <section class="detail-intro" aria-labelledby="detail-title">
        <div class="detail-meta"><span class="case-label">CASE ${item.number}</span><span>${escape(item.engine)}</span><span>·</span><span>${escape(item.tags.join(" / "))}</span></div>
        <h2 id="detail-title">${escape(item.title[language])}</h2>
        <p class="detail-story">${escape(item.description[language])}</p>
      </section>
      <div class="detail-video-heading"><h3>${text("videos")} <span>(${item.clips.length})</span></h3><span>${text("videoNote")}</span></div>
      <div class="video-grid">${item.clips.map(videoCard).join("")}</div>`;
    // Playing one clip pauses the others, so audio never overlaps.
    main.querySelectorAll("video").forEach((video) =>
      video.addEventListener("play", () => {
        main.querySelectorAll("video").forEach((other) => {
          if (other !== video) other.pause();
        });
      }),
    );
  }

  function renderEmpty(section) {
    const icon = document.querySelector(
      `[data-section="${section}"] svg`,
    ).outerHTML;
    main.innerHTML = `<div class="section-heading"><div><h2>${text(section)}</h2><p>${text(`${section}Description`)}</p></div></div>
      <div class="empty-state"><div class="empty-icon">${icon}</div><h3>${text("emptyTitle")}</h3><p>${text("emptyDescription")}</p></div>`;
  }

  function render() {
    stopVideos();
    const current = route();
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = text(node.dataset.i18n);
    });
    document.querySelector(".eyebrow").innerHTML =
      `<span class="status-dot"></span>${text("eyebrow")}`;
    document.querySelector('meta[name="description"]').content = text("meta");
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.language === language),
      );
    });
    document.querySelectorAll("[data-section]").forEach((link) => {
      if (link.dataset.section === current.section)
        link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    document.querySelector("#case-count").textContent = cases.length;
    document.querySelector("#demo-count").textContent = cases.reduce(
      (n, item) => n + item.clips.length,
      0,
    );
    document.querySelector("#nav-case-count").textContent = String(
      cases.length,
    ).padStart(2, "0");
    document.title = `${current.item ? current.item.shortTitle[language] : text(current.section)} · ${text("siteTitle")} · WEI`;
    if (current.item) renderDetail(current.item);
    else if (current.section === "cases") renderCases();
    else renderEmpty(current.section);
    renderedUrl = window.location.href;
  }

  document.querySelectorAll("[data-language]").forEach((button) =>
    button.addEventListener("click", () => {
      if (button.dataset.language === language) return;
      language = button.dataset.language;
      try {
        localStorage.setItem(storageKey, language);
      } catch {
        /* Browsing without storage still works. */
      }
      const nextUrl = new URL(window.location.href);
      nextUrl.searchParams.set("lang", language);
      history.replaceState(null, "", nextUrl);
      render();
    }),
  );

  document.querySelector(".skip-link").addEventListener("click", (event) => {
    event.preventDefault();
    main.focus({ preventScroll: true });
    main.scrollIntoView({ block: "start" });
  });

  main.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    filter = button.dataset.filter;
    renderCards();
  });

  main.addEventListener("change", (event) => {
    if (event.target.matches("[data-sort]")) {
      sortOrder = event.target.value;
      renderCards();
      return;
    }
    const select = event.target.closest("[data-video-language]");
    if (!select) return;
    const item = route().item;
    const clip = item.clips[Number(select.dataset.videoLanguage)];
    const selected = clip.videos.find((video) => video.lang === select.value);
    const card = select.closest(".video-card");
    const video = card.querySelector("video");
    video.pause();
    video.src = selected.src;
    video.poster = selected.poster;
    video.load();
    card.querySelector(".video-link").href = selected.src;
  });

  function handleNavigation() {
    if (
      window.location.href === renderedUrl ||
      window.location.hash === "#main-content"
    )
      return;
    const requestedLanguage = new URL(window.location.href).searchParams.get(
      "lang",
    );
    if (["en", "ja"].includes(requestedLanguage)) language = requestedLanguage;
    render();
    main.focus({ preventScroll: true });
    document.querySelector(".section-nav").scrollIntoView({ block: "start" });
  }
  window.addEventListener("hashchange", handleNavigation);
  window.addEventListener("popstate", handleNavigation);
  render();
})();

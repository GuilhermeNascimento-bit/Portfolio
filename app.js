(() => {
  'use strict';

  /* ---------- Copy ---------- */
  const I18N = {
    en: {
      'meta.title': 'Guilherme Bezerra, junior developer',
      'meta.desc': 'IT professional turning developer. I build web apps with React and Firebase, and backend APIs with Python and FastAPI. Open to junior and remote roles.',
      skip: 'Skip to content',
      'nav.projects': 'Projects',
      'nav.repos': 'Repositories',
      'nav.stack': 'Stack',
      'nav.contact': 'Contact',
      'lang.label': 'Language',
      'theme.toLight': 'Switch to light theme',
      'theme.toDark': 'Switch to dark theme',
      'menu.open': 'Open menu',
      'menu.close': 'Close menu',
      'hero.lead': 'IT professional turning developer. I build web apps with React and Firebase, and backend APIs with Python and FastAPI.',
      'hero.sub': 'Computer Science student, fluent in English (C1), open to junior and remote roles.',
      'cta.projects': 'See projects',
      'cta.email': 'Email me',
      'photo.alt': 'Guilherme smiling on a coastal trail, with a lighthouse and the sea behind him',
      'panel.title': 'Live from my API',
      'panel.note': 'This page just called my own FastAPI backend. It runs on a free plan that sleeps when idle, so the first request can take up to a minute.',
      'state.connecting': 'Connecting',
      'state.waking': 'Waking up the server',
      'state.up': 'Online',
      'state.down': 'Unreachable right now',
      'm.rtt': 'Round trip',
      'm.req': 'Requests, 24 h',
      'm.avg': 'Avg server time',
      'm.repos': 'Public repos',
      'log.label': 'Requests made by this page',
      'projects.title': 'Projects',
      'projects.intro': 'Two projects that show how I work end to end, from the data model to the deploy.',
      'p1.title': 'Personal Finance App',
      'p1.live': 'Open the app',
      'p1.desc': 'Track income and expenses with per-user data in Firestore, interactive charts, bill reminders, cash-flow reports and automatic financial diagnostics. The core logic started as a Python script I wrote for myself.',
      'p2.docs': 'API docs',
      'p2.desc': 'The backend behind this site. A FastAPI service that serves my GitHub data with Redis caching, records request metrics through custom middleware, and is covered by 13 automated tests. Deployed on Render.',
      'p2.proof': "It's the API answering in the panel at the top of this page.",
      'link.source': 'Source code',
      'tech.label': 'Technologies',
      'repos.title': 'Repositories',
      'repos.intro': 'Pulled from GitHub through the same API, most recently updated first.',
      'repos.noDesc': 'No description yet',
      'repos.stars': 'stars',
      'repos.error': "The API didn't answer in time, so the list can't load right now.",
      'repos.errorLink': 'See every repository on GitHub',
      'stack.title': 'What I work with',
      'stack.intro': 'Before writing software full time I worked in IT support, so I care about the parts that keep running after the deploy.',
      'stack.backend': 'Backend and cloud',
      'stack.it': 'IT and security',
      'it.support': 'Technical support',
      'it.automation': 'Automation scripts',
      'it.endpoint': 'Endpoint security',
      'it.access': 'Access control',
      'it.troubleshooting': 'Troubleshooting',
      'contact.title': 'Get in touch',
      'contact.intro': 'Open to junior and remote roles in software development and IT. Email is the fastest way to reach me.',
      'footer.built': 'Built with HTML, CSS and JavaScript, hosted on GitHub Pages.',
      'f1.label': 'How data moves through the app',
      'f1.you': 'You',
      'f1.youSub': 'add a transaction',
      'f1.appSub': 'validates and saves',
      'f1.dbSub': 'only your data',
      'f1.out': 'Charts and reports',
      'f1.outSub': 'reminders, diagnostics',
      'f2.label': 'How this page gets its data',
      'f2.page': 'This page',
      'f2.pageSub': 'fetch on load',
      'f2.apiSub': 'on Render',
      'f2.ghSub': 'on a cache miss',
      'contact.copy': 'Copy email',
      'contact.copied': 'Copied',
    },
    pt: {
      'meta.title': 'Guilherme Bezerra, desenvolvedor júnior',
      'meta.desc': 'Profissional de TI virando desenvolvedor. Crio apps web com React e Firebase e APIs com Python e FastAPI. Aberto a vagas júnior e remotas.',
      skip: 'Pular para o conteúdo',
      'nav.projects': 'Projetos',
      'nav.repos': 'Repositórios',
      'nav.stack': 'Stack',
      'nav.contact': 'Contato',
      'lang.label': 'Idioma',
      'theme.toLight': 'Mudar para o tema claro',
      'theme.toDark': 'Mudar para o tema escuro',
      'menu.open': 'Abrir menu',
      'menu.close': 'Fechar menu',
      'hero.lead': 'Profissional de TI virando desenvolvedor. Crio apps web com React e Firebase e APIs com Python e FastAPI.',
      'hero.sub': 'Estudante de Ciência da Computação, inglês fluente (C1), aberto a vagas júnior e remotas.',
      'cta.projects': 'Ver projetos',
      'cta.email': 'Enviar email',
      'photo.alt': 'Guilherme sorrindo numa trilha à beira-mar, com um farol e o mar ao fundo',
      'panel.title': 'Ao vivo da minha API',
      'panel.note': 'Esta página acabou de chamar meu próprio backend em FastAPI. Ele roda num plano gratuito que hiberna quando fica ocioso, então a primeira requisição pode levar até um minuto.',
      'state.connecting': 'Conectando',
      'state.waking': 'Acordando o servidor',
      'state.up': 'No ar',
      'state.down': 'Fora do ar agora',
      'm.rtt': 'Ida e volta',
      'm.req': 'Requisições, 24 h',
      'm.avg': 'Tempo médio no servidor',
      'm.repos': 'Repos públicos',
      'log.label': 'Requisições feitas por esta página',
      'projects.title': 'Projetos',
      'projects.intro': 'Dois projetos que mostram como trabalho de ponta a ponta, do modelo de dados ao deploy.',
      'p1.title': 'App de Finanças Pessoais',
      'p1.live': 'Abrir o app',
      'p1.desc': 'Controle de receitas e despesas com dados por usuário no Firestore, gráficos interativos, lembretes de contas, relatórios de fluxo de caixa e diagnóstico financeiro automático. A lógica principal nasceu de um script em Python que escrevi para mim mesmo.',
      'p2.docs': 'Documentação da API',
      'p2.desc': 'O backend deste site. Um serviço em FastAPI que entrega meus dados do GitHub com cache em Redis, registra métricas de requisições com um middleware próprio e é coberto por 13 testes automatizados. Hospedado no Render.',
      'p2.proof': 'É a API que está respondendo no painel do topo desta página.',
      'link.source': 'Código-fonte',
      'tech.label': 'Tecnologias',
      'repos.title': 'Repositórios',
      'repos.intro': 'Puxados do GitHub pela mesma API, dos atualizados mais recentemente para os mais antigos.',
      'repos.noDesc': 'Ainda sem descrição',
      'repos.stars': 'estrelas',
      'repos.error': 'A API não respondeu a tempo, então a lista não pode carregar agora.',
      'repos.errorLink': 'Ver todos os repositórios no GitHub',
      'stack.title': 'Com o que trabalho',
      'stack.intro': 'Antes de programar em tempo integral trabalhei com suporte de TI, então me importo com o que continua rodando depois do deploy.',
      'stack.backend': 'Backend e nuvem',
      'stack.it': 'TI e segurança',
      'it.support': 'Suporte técnico',
      'it.automation': 'Scripts de automação',
      'it.endpoint': 'Segurança de endpoints',
      'it.access': 'Controle de acesso',
      'it.troubleshooting': 'Resolução de problemas',
      'contact.title': 'Vamos conversar',
      'contact.intro': 'Aberto a vagas júnior e remotas em desenvolvimento de software e TI. Email é o jeito mais rápido de falar comigo.',
      'footer.built': 'Feito com HTML, CSS e JavaScript, hospedado no GitHub Pages.',
      'f1.label': 'Como os dados passam pelo app',
      'f1.you': 'Você',
      'f1.youSub': 'lança uma transação',
      'f1.appSub': 'valida e salva',
      'f1.dbSub': 'só os seus dados',
      'f1.out': 'Gráficos e relatórios',
      'f1.outSub': 'lembretes, diagnóstico',
      'f2.label': 'Como esta página busca os dados',
      'f2.page': 'Esta página',
      'f2.pageSub': 'fetch ao carregar',
      'f2.apiSub': 'no Render',
      'f2.ghSub': 'se faltar no cache',
      'contact.copy': 'Copiar email',
      'contact.copied': 'Copiado',
    },
  };

  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  let lang = root.lang === 'pt-BR' ? 'pt' : 'en';
  const t = (key) => I18N[lang][key] ?? I18N.en[key] ?? key;
  const locale = () => (lang === 'pt' ? 'pt-BR' : 'en-US');

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* private mode */ }
  }

  /* ---------- Language ---------- */
  function applyAttrs(scope = document) {
    $$('[data-i18n-attr]', scope).forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':');
        el.setAttribute(attr, t(key));
      });
    });
    document.title = t('meta.title');
    $('meta[name="description"]').setAttribute('content', t('meta.desc'));
    $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    syncThemeButton();
    syncMenuButton();
  }

  function applyText(scope = document) {
    $$('[data-i18n]', scope).forEach((el) => { el.textContent = t(el.dataset.i18n); });
  }

  function isOnScreen(el) {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.bottom > 0 && r.top < window.innerHeight;
  }

  // Blur out, swap the words, blur back in.
  function swapFade(el, delay) {
    const id = (el._swap = (el._swap || 0) + 1);
    const out = el.animate(
      [
        { opacity: 1, filter: 'blur(0)', transform: 'translateY(0)' },
        { opacity: 0, filter: 'blur(6px)', transform: 'translateY(-.2em)' },
      ],
      { duration: 170, delay, easing: 'cubic-bezier(.4,0,1,1)', fill: 'forwards' }
    );
    out.finished
      .then(() => {
        out.cancel();
        if (el._swap !== id) return;
        el.textContent = t(el.dataset.i18n);
        el.animate(
          [
            { opacity: 0, filter: 'blur(6px)', transform: 'translateY(.2em)' },
            { opacity: 1, filter: 'blur(0)', transform: 'translateY(0)' },
          ],
          { duration: 320, easing: 'cubic-bezier(.2,.7,.2,1)' }
        );
      })
      .catch(() => {});
  }

  // Headings decode letter by letter into the new language.
  const GLYPHS = 'abcdefghijklmnopqrstuvwxyzáãçéêíóõú';
  function scramble(el, delay, fromText) {
    const id = (el._swap = (el._swap || 0) + 1);
    const from = fromText ?? el.textContent;
    const to = t(el.dataset.i18n);
    const len = Math.max(from.length, to.length);
    const duration = 560;
    let start = null;

    function frame(now) {
      if (el._swap !== id) return;
      if (start === null) start = now + delay;
      const p = (now - start) / duration;
      if (p >= 1) {
        el.textContent = t(el.dataset.i18n);
        el.classList.remove('pending');
        el.removeAttribute('aria-label');
        return;
      }
      if (p > 0) {
        let out = '';
        for (let i = 0; i < len; i++) {
          const at = i / len;
          const target = to[i] ?? '';
          if (p > at + 0.2) out += target;
          else if (p > at - 0.15) out += target === ' ' || target === '' ? target : GLYPHS[(Math.random() * GLYPHS.length) | 0];
          else out += from[i] ?? '';
        }
        el.textContent = out;
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function setLang(next) {
    if (next === lang) return;
    const els = $$('[data-i18n]');
    const animate = !reduceMotion.matches;
    const visible = animate ? els.filter(isOnScreen) : [];

    lang = next;
    root.lang = lang === 'pt' ? 'pt-BR' : 'en';
    store('lang', lang);
    applyAttrs();

    els.forEach((el) => {
      if (visible.includes(el)) return;
      el.textContent = t(el.dataset.i18n);
      if (el.classList.contains('pending')) el.setAttribute('aria-label', el.textContent);
    });
    visible.forEach((el, i) => {
      const delay = Math.min(i, 16) * 28;
      if (el.hasAttribute('data-scramble')) scramble(el, delay);
      else swapFade(el, delay);
    });

    renderMetrics();
    renderRepos(animate);
  }

  $$('.lang button').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

  /* ---------- Theme ---------- */
  const themeBtn = $('.theme-btn');
  const themeColor = $('meta[name="theme-color"]');

  function syncThemeButton() {
    const light = root.dataset.theme === 'light';
    themeBtn.setAttribute('aria-label', t(light ? 'theme.toDark' : 'theme.toLight'));
    themeColor.setAttribute('content', light ? '#EEF0EC' : '#15191D');
  }

  function setTheme(next, x, y) {
    const apply = () => {
      root.dataset.theme = next;
      store('theme', next);
      syncThemeButton();
    };

    if (reduceMotion.matches) { apply(); return; }

    if (!document.startViewTransition) {
      root.classList.add('theme-fading');
      apply();
      setTimeout(() => root.classList.remove('theme-fading'), 450);
      return;
    }

    // Grow the new theme as a circle from the toggle.
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const transition = document.startViewTransition(apply);
    transition.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 700, easing: 'cubic-bezier(.65,0,.35,1)', pseudoElement: '::view-transition-new(root)' }
      );
    }).catch(() => {});
  }

  themeBtn.addEventListener('click', () => {
    const r = themeBtn.getBoundingClientRect();
    setTheme(root.dataset.theme === 'light' ? 'dark' : 'light', r.left + r.width / 2, r.top + r.height / 2);
  });

  /* ---------- Mobile menu ---------- */
  const nav = $('#site-nav');
  const menuBtn = $('.menu-btn');

  function syncMenuButton() {
    const open = nav.hasAttribute('data-open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', t(open ? 'menu.close' : 'menu.open'));
  }

  function setMenu(open) {
    nav.toggleAttribute('data-open', open);
    syncMenuButton();
  }

  menuBtn.addEventListener('click', () => setMenu(!nav.hasAttribute('data-open')));
  $$('a', nav).forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.hasAttribute('data-open')) { setMenu(false); menuBtn.focus(); }
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* ---------- Live API ---------- */
  const API_URL = 'https://portfolio-api-1t2s.onrender.com';
  const HIDDEN_REPOS = ['GuilhermeNascimento-bit', 'roleta-site', 'Etiquetas_site', 'Di-Lione-site'];
  const LANG_COLORS = {
    Python: '#3572A5', JavaScript: '#F1E05A', TypeScript: '#3178C6',
    HTML: '#E34C26', CSS: '#663399', Shell: '#89E051',
  };

  const panel = $('#status');
  const stateText = $('.state-text', panel);
  const elapsedEl = $('.elapsed', panel);
  const logEl = $('.log', panel);
  const reposEl = $('.repos');

  const live = { state: 'connecting', rtt: null, stats: null, gh: null, repos: null, failed: false };

  const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function fmtMs(ms) {
    if (ms < 1000) return `${ms} ms`;
    return `${new Intl.NumberFormat(locale(), { maximumFractionDigits: 1 }).format(ms / 1000)} s`;
  }

  function setState(state) {
    live.state = state;
    panel.dataset.state = state;
    stateText.dataset.i18n = `state.${state}`;
    stateText.textContent = t(stateText.dataset.i18n);
  }

  function logRequest(path) {
    const li = document.createElement('li');
    li.innerHTML = `<span>GET ${escapeHtml(path)}</span><span class="code">···</span><span class="ms"></span>`;
    logEl.append(li);
    return (code, ms, ok) => {
      const codeEl = $('.code', li);
      codeEl.textContent = code;
      codeEl.className = `code ${ok ? 'ok' : 'err'}`;
      if (ms != null) $('.ms', li).textContent = fmtMs(ms);
    };
  }

  function fetchWithTimeout(url, ms) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), ms);
    return fetch(url, { signal: ctrl.signal }).finally(() => clearTimeout(timer));
  }

  async function request(path) {
    const done = logRequest(path);
    const t0 = performance.now();
    let res;
    try {
      res = await fetchWithTimeout(API_URL + path, 70000);
    } catch (e) {
      done(e.name === 'AbortError' ? 'timeout' : 'error', null, false);
      throw e;
    }
    const ms = Math.round(performance.now() - t0);
    done(String(res.status), ms, res.ok);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { data: await res.json(), ms };
  }

  function setMetric(name, value) {
    const dd = $(`[data-metric="${name}"]`, panel);
    if (dd.textContent === value) return;
    dd.textContent = value;
    if (!reduceMotion.matches) {
      dd.classList.remove('fresh');
      void dd.offsetWidth;
      dd.classList.add('fresh');
    }
  }

  function renderMetrics() {
    const nf = new Intl.NumberFormat(locale());
    const hasTraffic = live.stats && live.stats.requests_24h > 0;
    setMetric('rtt', live.rtt != null ? fmtMs(live.rtt) : '—');
    setMetric('req', hasTraffic ? nf.format(live.stats.requests_24h) : '—');
    setMetric('avg', hasTraffic ? `${nf.format(live.stats.avg_response_ms)} ms` : '—');
    setMetric('repos', live.gh ? nf.format(live.gh.public_repos) : '—');
  }

  function relativeDate(iso) {
    const diff = (new Date(iso) - Date.now()) / 1000;
    const rtf = new Intl.RelativeTimeFormat(locale(), { numeric: 'auto' });
    const units = [['year', 31536000], ['month', 2592000], ['week', 604800], ['day', 86400], ['hour', 3600], ['minute', 60]];
    for (const [unit, secs] of units) {
      if (Math.abs(diff) >= secs) return rtf.format(Math.round(diff / secs), unit);
    }
    return rtf.format(0, 'minute');
  }

  const STAR = '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 .25a.75.75 0 0 1 .67.42l1.89 3.81 4.2.62a.75.75 0 0 1 .42 1.28l-3.05 2.97.72 4.19a.75.75 0 0 1-1.09.79L8 12.35l-3.76 1.98a.75.75 0 0 1-1.09-.79l.72-4.19L.82 6.38a.75.75 0 0 1 .42-1.28l4.2-.62L7.33.67A.75.75 0 0 1 8 .25Z"/></svg>';

  function renderRepos(animate = false) {
    if (live.failed) {
      reposEl.innerHTML = `<li class="repos-msg"><span data-i18n="repos.error"></span>
        <a href="https://github.com/GuilhermeNascimento-bit" target="_blank" rel="noopener" data-i18n="repos.errorLink"></a></li>`;
      applyText(reposEl);
      reposEl.removeAttribute('aria-busy');
      return;
    }
    if (!live.repos) return;

    const enter = !live.reposShown && !reduceMotion.matches;
    live.reposShown = true;
    reposEl.innerHTML = live.repos.map((r, i) => `
      <li class="repo${enter ? ' enter' : ''}" style="--i:${i}">
        <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener" style="--c:${LANG_COLORS[r.language] || 'var(--link)'}">
          <span class="repo-name">${escapeHtml(r.name)}</span>
          <span class="repo-desc">${escapeHtml(r.description || t('repos.noDesc'))}</span>
          <span class="repo-meta">
            ${r.language ? `<span><i class="lang-dot" style="--c:${LANG_COLORS[r.language] || '#8B949E'}"></i>${escapeHtml(r.language)}</span>` : ''}
            <span aria-label="${r.stars} ${t('repos.stars')}">${STAR}${r.stars}</span>
            ${r.updated_at ? `<span>${relativeDate(r.updated_at)}</span>` : ''}
          </span>
        </a>
      </li>`).join('');
    reposEl.removeAttribute('aria-busy');

    if (animate && !enter && isOnScreen(reposEl)) {
      reposEl.animate([{ opacity: 0.25, filter: 'blur(3px)' }, { opacity: 1, filter: 'blur(0)' }], { duration: 380, easing: 'ease-out' });
    }
  }

  async function loadLive() {
    setState('connecting');
    const t0 = performance.now();
    let tick = null;

    const showElapsed = () => {
      elapsedEl.textContent = `${Math.round((performance.now() - t0) / 1000)} s`;
    };
    const wakeTimer = setTimeout(() => {
      setState('waking');
      elapsedEl.hidden = false;
      showElapsed();
      tick = setInterval(showElapsed, 1000);
    }, 2500);
    const stopWaking = () => {
      clearTimeout(wakeTimer);
      clearInterval(tick);
      elapsedEl.hidden = true;
    };

    try {
      const [gh, stats] = await Promise.all([request('/github'), request('/stats')]);
      stopWaking();
      setState('up');

      live.gh = gh.data;
      live.stats = stats.data;
      live.repos = (gh.data.repos || []).filter((r) => !HIDDEN_REPOS.includes(r.name));
      live.rtt = gh.ms;
      renderMetrics();
      renderRepos(true);
      if (isOnScreen(apiFlow)) runFlow(apiFlow);

      // Now that the server is awake, measure a warm round trip.
      try {
        live.rtt = (await request('/')).ms;
        renderMetrics();
      } catch (e) { /* keep the first measurement */ }
    } catch (e) {
      stopWaking();
      setState('down');
      live.failed = true;
      renderRepos();
    }
  }

  // Apply the saved language before headings are prepared for their reveal.
  if (lang !== 'en') applyText();

  /* ---------- Data-flow diagrams ---------- */
  const apiFlow = $('#api-flow');

  function runFlow(flow) {
    if (reduceMotion.matches) return;
    const now = performance.now();
    if (flow._ranAt && now - flow._ranAt < 2000) return;
    flow._ranAt = now;
    flow.classList.remove('run');
    void flow.offsetWidth;
    flow.classList.add('run');
  }

  $$('.flow').forEach((flow) => {
    // node i is reached after wire i-1, so they share a delay index
    $$('.node', flow).forEach((n, i) => n.style.setProperty('--i', i));
    $$('.wire', flow).forEach((w, i) => w.style.setProperty('--i', i));
    flow.closest('.project').addEventListener('pointerenter', () => runFlow(flow));
  });

  /* ---------- Reveal on first view ---------- */
  const headings = $$('h2[data-scramble]');
  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    const seen = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        seen.unobserve(el);
        if (el.matches('.flow')) runFlow(el);
        else if (el.classList.contains('pending')) scramble(el, 0, '');
      });
    }, { threshold: 0.6 });

    headings.forEach((h) => {
      if (isOnScreen(h)) return;
      h.setAttribute('aria-label', h.textContent);
      h.classList.add('pending');
      h.textContent = ' ';
      seen.observe(h);
    });
    $$('.flow').forEach((f) => seen.observe(f));
  }

  /* ---------- Copy email ---------- */
  const copyBtn = $('.copy-btn');
  copyBtn.addEventListener('click', async () => {
    const label = $('span', copyBtn);
    try {
      await navigator.clipboard.writeText('guilhermenascimentobz@gmail.com');
    } catch (e) {
      window.location.href = 'mailto:guilhermenascimentobz@gmail.com';
      return;
    }
    copyBtn.classList.add('copied');
    label.dataset.i18n = 'contact.copied';
    label.textContent = t('contact.copied');
    clearTimeout(copyBtn._timer);
    copyBtn._timer = setTimeout(() => {
      copyBtn.classList.remove('copied');
      label.dataset.i18n = 'contact.copy';
      label.textContent = t('contact.copy');
    }, 2200);
  });

  /* ---------- Start ---------- */
  applyAttrs();
  loadLive();
})();

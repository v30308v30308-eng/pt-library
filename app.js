const state = { category: 'all', subtype: 'all', level: 'all', joint: 'all', page: 1 };
const ITEMS_PER_PAGE = 15;
const evOrder    = { A: 4, B: 3, C: 2, D: 1 };
const levelOrder = { beginner: 1, intermediate: 2, advanced: 3 };

const typeLabel  = { stretch: '伸展運動', training: '訓練運動', arom: '自主關節活動', mwm: '主動關節鬆動 MWM', neurodynamic: '神經動態鬆動' };
const levelLabel = { beginner: '初階', intermediate: '中階', advanced: '進階' };
const evLabel    = { A: '證據力 A', B: '證據力 B', C: '證據力 C', D: '證據力 D' };
const evDesc     = {
    A: '系統性回顧 / 高品質 Meta-analysis',
    B: '至少一篇良好設計之 RCT 或 Cohort 研究',
    C: '專家共識、病例報告、臨床指引',
    D: '學派原則 / 臨床教科書（非正式研究）'
};

// ── Joint map (id → joint category) ─────────────────────────
const jointMap = {
     1:'核心',  2:'核心',  3:'核心',  4:'胸椎',  5:'髖',
     6:'腰椎',  7:'腰椎',  8:'腰椎',  9:'髖',   10:'胸椎',
    11:'核心', 12:'全身', 13:'全身', 14:'核心', 15:'全身',
    16:'髖',   17:'髖',   18:'肩',   19:'腰椎', 20:'膝',
    21:'頸椎', 22:'胸椎', 23:'髖',   24:'全身', 25:'全身',
    26:'頸椎', 27:'踝',   28:'腰椎', 29:'肩',   30:'膝',
    31:'髖',   32:'肩',   33:'髖',   34:'全身', 35:'腰椎',
    36:'腰椎', 37:'頸椎', 38:'頸椎', 39:'胸椎', 40:'腰椎',
    41:'肩',   42:'肘',   43:'腕',   44:'踝',   45:'胸椎',
    46:'肘',   47:'腕',   48:'膝',              50:'肘',
    51:'腕',   52:'膝',   53:'踝',   54:'胸椎', 55:'肘',
    56:'腕',   57:'髖',
    58:'肩',   59:'肩',   60:'肩',
    61:'肩',   62:'肩',   63:'肩',
    64:'肩',   65:'肩',   66:'肩',
    67:'肩',   68:'肩',   69:'肩',
    70:'髖',   71:'髖',   72:'髖',
    73:'踝',   74:'踝',   75:'踝',   87:'踝',
    77:'頸椎', 78:'胸椎', 79:'腰椎', 80:'核心',
    81:'肩',   82:'肘',   83:'腕',   84:'髖',
    85:'膝',   86:'踝',
    88:'頸椎', 89:'肘',   90:'肘',
    91:'踝',   92:'踝',   93:'踝',
    94:'肩',   95:'肩',   96:'肩',   97:'肩',
    98:'肘',   99:'肘',  100:'肘',  101:'肘',
   102:'肩',  103:'肩',  104:'膝',  105:'膝',
   106:'髖',  107:'髖'
};

// ── SVG placeholder ─────────────────────────────────────────
// 不嵌入 HTML 屬性，只用在 img.src 的 JS 賦值
function makePlaceholder(ex, w, h) {
    const pal = {
        stretch:       { a: '#FFF7ED', b: '#FED7AA', ink: '#EA580C' },
        training:      { a: '#F5F3FF', b: '#DDD6FE', ink: '#7C3AED' },
        arom:          { a: '#ECFEFF', b: '#A5F3FC', ink: '#0891B2' },
        mwm:           { a: '#FFFBEB', b: '#FDE68A', ink: '#B45309' },
        neurodynamic:  { a: '#F0FDF4', b: '#86EFAC', ink: '#15803D' }
    };
    const c = pal[ex.type] || { a: '#F8FAFC', b: '#E2E8F0', ink: '#64748B' };
    const x = s => String(s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    const lv = levelLabel[ex.level] || ex.level;
    const svg =
        `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">` +
        `<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">` +
        `<stop offset="0%" stop-color="${c.a}"/>` +
        `<stop offset="100%" stop-color="${c.b}"/>` +
        `</linearGradient></defs>` +
        `<rect width="${w}" height="${h}" fill="url(#bg)"/>` +
        `<text x="${w/2}" y="${h*0.47}" text-anchor="middle" dominant-baseline="middle" ` +
        `font-size="${Math.round(h*0.3)}" ` +
        `font-family="Segoe UI Emoji,Apple Color Emoji,Noto Color Emoji,sans-serif">${x(ex.icon)}</text>` +
        `<text x="${w/2}" y="${h*0.74}" text-anchor="middle" dominant-baseline="middle" ` +
        `font-size="${Math.min(Math.round(h*0.09), 15)}" font-weight="700" fill="${c.ink}" ` +
        `font-family="Segoe UI,system-ui,sans-serif">${x(ex.name)}</text>` +
        `<text x="${w/2}" y="${h*0.88}" text-anchor="middle" dominant-baseline="middle" ` +
        `font-size="${Math.min(Math.round(h*0.07), 11)}" fill="${c.ink}" opacity="0.6" ` +
        `font-family="Segoe UI,system-ui,sans-serif">${x(ex.school)} ${x(lv)}</text>` +
        `</svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// ── YouTube helpers ──────────────────────────────────────────
function youtubeId(url) {
    if (!url) return null;
    const m = url.match(/(?:youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : (url.length === 11 ? url : null);
}

function ytThumb(vid) {
    return `https://img.youtube.com/vi/${vid}/mqdefault.jpg`;
}

// ── Category helpers ─────────────────────────────────────────
function getCategory(ex) {
    if (ex.school === 'KC') return { category: 'control', subtype: null };
    if (ex.type === 'training') return { category: 'strength', subtype: null };
    if (ex.type === 'stretch') return { category: 'mobility', subtype: 'stretching' };
    if (ex.type === 'arom') return { category: 'mobility', subtype: 'rom' };
    if (ex.type === 'mwm') return { category: 'mobility', subtype: 'jointplay' };
    if (ex.type === 'neurodynamic') return { category: 'mobility', subtype: 'rom' };
    return { category: 'strength', subtype: null };
}

// ── Filter & Render ──────────────────────────────────────────
function getFiltered() {
    return exercises.filter(ex => {
        const cat = getCategory(ex);
        if (state.category !== 'all' && cat.category !== state.category) return false;
        if (state.category === 'mobility' && state.subtype !== 'all' && cat.subtype !== state.subtype) return false;
        if (state.level !== 'all' && ex.level !== state.level) return false;
        if (state.joint !== 'all' && jointMap[ex.id] !== state.joint) return false;
        return true;
    }).sort((a, b) => {
        const lvDiff = (levelOrder[a.level] || 0) - (levelOrder[b.level] || 0);
        if (lvDiff !== 0) return lvDiff;
        return (evOrder[b.evidence.level] || 0) - (evOrder[a.evidence.level] || 0);
    });
}

function render() {
    const all        = getFiltered();
    const totalPages = Math.max(1, Math.ceil(all.length / ITEMS_PER_PAGE));
    if (state.page > totalPages) state.page = totalPages;
    const list       = all.slice((state.page - 1) * ITEMS_PER_PAGE, state.page * ITEMS_PER_PAGE);

    const grid       = document.getElementById('exercise-grid');
    const empty      = document.getElementById('empty-state');
    const pagination = document.getElementById('pagination');

    document.getElementById('result-count').textContent = `顯示 ${all.length} 個動作`;

    if (all.length === 0) {
        grid.style.display = 'none';
        empty.classList.add('visible');
        pagination.style.display = 'none';
        return;
    }

    grid.style.display = 'grid';
    empty.classList.remove('visible');

    // Build card HTML — NO data URIs in attributes, use data-exid for fallback
    grid.innerHTML = list.map(ex => {
        const vid = youtubeId(ex.video);
        // decide src: real image > youtube thumb > placeholder
        const usesThumb = !ex.image && vid;
        const imgSrc = ex.image ? ex.image
                     : vid      ? ytThumb(vid)
                     :            makePlaceholder(ex, 280, 155);
        // only add data-exid when we used a YouTube thumb (may fail to load)
        const fallbackAttr = usesThumb ? ` data-exid="${ex.id}"` : '';
        const videoBadge   = vid ? `<span class="video-badge">▶ 影片</span>` : '';

        return `<div class="exercise-card" data-id="${ex.id}" role="button" tabindex="0">
  <div class="card-img">
    <img src="${imgSrc}" alt="${ex.name}" loading="lazy"${fallbackAttr}>
  </div>
  <div class="card-body">
    <div class="card-name">${ex.name}</div>
    <div class="card-en">${ex.en} · ${ex.target}</div>
    <div class="card-desc">${ex.desc}</div>
    <div class="card-tags">
      <span class="tag tag-school-${ex.school}">${ex.school}</span>
      <span class="tag tag-${ex.type}">${typeLabel[ex.type]}</span>
      <span class="tag tag-${ex.level}">${levelLabel[ex.level]}</span>
      <span class="tag tag-ev-${ex.evidence.level}">證據 ${ex.evidence.level}</span>
      ${videoBadge}
    </div>
  </div>
</div>`;
    }).join('');

    // Attach fallback via addEventListener (not onerror attribute)
    grid.querySelectorAll('img[data-exid]').forEach(img => {
        img.addEventListener('error', function onErr() {
            img.removeEventListener('error', onErr);
            const ex = exercises.find(e => e.id === +img.dataset.exid);
            if (ex) img.src = makePlaceholder(ex, 280, 155);
        });
    });

    // Click handlers
    grid.querySelectorAll('.exercise-card').forEach(el =>
        el.addEventListener('click', () => openModal(+el.dataset.id))
    );

    // Pagination
    if (totalPages > 1) {
        pagination.style.display = 'flex';
        pagination.innerHTML = `
            <button class="page-btn" id="prev-btn"${state.page === 1 ? ' disabled' : ''}>← 上一頁</button>
            <span class="page-info">第 ${state.page} 頁，共 ${totalPages} 頁</span>
            <button class="page-btn" id="next-btn"${state.page === totalPages ? ' disabled' : ''}>下一頁 →</button>
        `;
        document.getElementById('prev-btn').addEventListener('click', () => {
            state.page--; render(); window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        document.getElementById('next-btn').addEventListener('click', () => {
            state.page++; render(); window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    } else {
        pagination.style.display = 'none';
    }
}

// ── Modal ────────────────────────────────────────────────────
function openModal(id) {
    const ex = exercises.find(e => e.id === id);
    if (!ex) return;

    const vid = youtubeId(ex.video);

    // Video embed
    const videoSection = vid ? `
<div class="modal-section">
  <h3>示範影片</h3>
  <a href="https://www.youtube.com/watch?v=${vid}" target="_blank" rel="noopener noreferrer" class="yt-link">▶ 在 YouTube 觀看示範影片</a>
</div>` : '';

    const refsHTML = ex.evidence.refs.map(r => `<li>${r}</li>`).join('');

    document.getElementById('modal-body').innerHTML = `
<div class="modal-hero type-${ex.type}">
  <img class="modal-hero-img" src="" alt="${ex.name}">
</div>
<div class="modal-body">
  <div class="modal-title">${ex.name}</div>
  <div class="modal-en">${ex.en}</div>
  <div class="modal-tags">
    <span class="tag tag-school-${ex.school}">${ex.school}</span>
    <span class="tag tag-${ex.type}">${typeLabel[ex.type]}</span>
    <span class="tag tag-${ex.level}">${levelLabel[ex.level]}</span>
  </div>
  <div class="modal-section"><h3>動作說明</h3><p>${ex.desc}</p></div>
  ${videoSection}
  <div class="modal-section">
    <h3>目標肌群</h3>
    <div class="muscles-list">${ex.muscles.map(m => `<span class="muscle-tag">${m}</span>`).join('')}</div>
  </div>
  <div class="modal-section">
    <h3>訓練提示 Cues</h3>
    <ul class="cue-list">${ex.cues.map(c => `<li>${c}</li>`).join('')}</ul>
  </div>
  <div class="modal-section">
    <h3>建議劑量</h3>
    <span class="reps-badge">${ex.dose}</span>
  </div>
  <div class="modal-section"><h3>臨床備註</h3><p>${ex.notes}</p></div>
  <div class="modal-section">
    <h3>證據力與文獻</h3>
    <div class="ev-badge ev-${ex.evidence.level}" style="margin-bottom:.5rem">
      等級 ${ex.evidence.level} — ${evLabel[ex.evidence.level]}
    </div>
    <div class="ev-desc">${evDesc[ex.evidence.level]}</div>
    <p style="font-size:.82rem;color:#64748B;margin:.6rem 0 .4rem">${ex.evidence.summary}</p>
    <ul class="ref-list">${refsHTML}</ul>
  </div>
</div>`;

    // Set hero image via JS to allow fallback
    const heroImg = document.querySelector('.modal-hero-img');
    const heroSrc = ex.image ? ex.image
                  : vid      ? `https://img.youtube.com/vi/${vid}/hqdefault.jpg`
                  :            makePlaceholder(ex, 620, 190);
    heroImg.src = heroSrc;
    if (!ex.image) {
        heroImg.addEventListener('error', function onErr() {
            heroImg.removeEventListener('error', onErr);
            heroImg.src = makePlaceholder(ex, 620, 190);
        });
    }

    // Make hero image clickable to open lightbox (only for real images)
    if (ex.image) {
        heroImg.classList.add('zoomable');
        heroImg.addEventListener('click', () => openLightbox(heroSrc));
    }

    document.getElementById('modal-overlay').classList.add('open');
    document.querySelector('.modal').scrollTop = 0;
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
}

// ── Lightbox ─────────────────────────────────────────────────
function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('open');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.getElementById('lightbox-img').src = '';
}

// ── Event binding ────────────────────────────────────────────
document.querySelectorAll('.filter-buttons').forEach(group => {
    const key = group.dataset.filterGroup;
    group.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state[key] = btn.dataset.value;
            state.page = 1;
            if (key === 'category') {
                const subtypeGroup = document.getElementById('subtype-group');
                if (btn.dataset.value === 'mobility') {
                    subtypeGroup.classList.add('visible');
                } else {
                    subtypeGroup.classList.remove('visible');
                    state.subtype = 'all';
                    subtypeGroup.querySelectorAll('.filter-btn').forEach(b =>
                        b.classList.toggle('active', b.dataset.value === 'all')
                    );
                }
            }
            render();
        });
    });
});

document.getElementById('reset-btn').addEventListener('click', () => {
    state.category = 'all'; state.subtype = 'all'; state.level = 'all'; state.joint = 'all'; state.page = 1;
    document.getElementById('subtype-group').classList.remove('visible');
    document.querySelectorAll('.filter-buttons').forEach(group =>
        group.querySelectorAll('.filter-btn').forEach(btn =>
            btn.classList.toggle('active', btn.dataset.value === 'all')
        )
    );
    render();
});

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target.id === 'modal-overlay') closeModal();
});

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target.id === 'lightbox' || e.target.id === 'lightbox-img') closeLightbox();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        if (document.getElementById('lightbox').classList.contains('open')) closeLightbox();
        else closeModal();
    }
});

document.getElementById('exercise-grid').addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('.exercise-card');
        if (card) { e.preventDefault(); openModal(+card.dataset.id); }
    }
});

render();

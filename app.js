/* YinYang Store — Pure Client-Side Static Application for GitHub Pages
   Veriler tarayıcı localStorage'ında saklanır; harici Node.js sunucusuna ihtiyaç duymaz.
   Yönetici Girişi: Kullanıcı adı: gwz | Şifre: 0142483169
*/
(() => {
  'use strict';

  const DISCORD_URL = 'https://discord.gg/dheWzDWCDZ';
  const ADMIN_CREDENTIALS = {
    username: 'gwz',
    password: '0142483169',
    displayName: 'gwz (Yönetici)'
  };

  const CAT = {
    fivem: ['FiveM Script', 'fa-gamepad'],
    discord: ['Discord Bot', 'fa-brands fa-discord'],
    web: ['Web & Panel', 'fa-code']
  };

  // Seed Data — GitHub Pages'de ilk açılışta mağazanın dolu ve prestijli görünmesini sağlar
  const SEED_PRODUCTS = [
    {
      id: 'prod_1',
      title: 'YinYang Police MDT & Tablet',
      category: 'fivem',
      price: 650,
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80',
      description: 'QBCore ve ESX uyumlu yeni nesil polis tableti. Canlı GPS takibi, sabıka sorgusu, ceza ve tutuklama sistemi, kamera entegrasyonu. 0.01 ms resmon ile ultra optimize.',
      features: ['0.01 ms Resmon optimizasyonu', 'Canlı GPS ve birim takibi', 'Detaylı sabıka & araç sorgulama', 'QBCore, ESX ve Qbox tam uyumlu']
    },
    {
      id: 'prod_2',
      title: 'YinYang Guard & Security Bot',
      category: 'discord',
      price: 450,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
      description: 'Sunucunuzu yetkisiz silme, sağ tık ban/kick, webhook saldırıları ve bot girişlerine karşı %100 koruyan gelişmiş güvenlik botu. Yedekleme ve anlık kurtarma dahil.',
      features: ['Otomatik rol ve kanal yedeği', 'Anti-Raid ve Webhook koruması', 'Gelişmiş denetim kaydı (audit log)', 'Discord.js v14 & 7/24 kesintisiz']
    },
    {
      id: 'prod_3',
      title: 'Multi-Character & Cinematic Spawn',
      category: 'fivem',
      price: 350,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80',
      description: 'Karakter seçimi ve spawn ekranını sanata dönüştüren sinematik sistem. Canlı hava durumu önizlemesi, kıyafet animasyonları ve apartman/konum bazlı spawn seçimi.',
      features: ['Akıcı 3D sinematik kameralar', 'Özel slot ve karakter yönetimi', 'Apartman ve özel konum seçici', 'Tüm ana envanterlerle entegre']
    },
    {
      id: 'prod_4',
      title: 'Ticket & Support Bot v2',
      category: 'discord',
      price: 300,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
      description: 'Butonlu modern destek sistemi. Otomatik transkript (HTML çıktısı), yetkili değerlendirme puanlaması, kategori bazlı talep yönlendirme ve hazır cevap paneli.',
      features: ['HTML & PDF transkript arşivi', 'Kategoriye özel yetkili atama', 'Müşteri memnuniyet anketi', 'Çok dilli mesaj desteği']
    },
    {
      id: 'prod_5',
      title: 'Underground Street Racing & Tuning',
      category: 'fivem',
      price: 500,
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&auto=format&fit=crop&q=80',
      description: 'Yasa dışı sokak yarışları, drift puanlama, bahis havuzu ve özel tuning atölyesi. Özel hazırlanan ses efektleri ve modern yarış HUD arayüzü içerir.',
      features: ['Özel pist oluşturma sistemi', 'Bahis ve para havuzu', 'Drift açısı ve puan hesaplayıcı', 'Detaylı yarış sıralama tablosu']
    },
    {
      id: 'prod_6',
      title: 'YinYang Web Panel & Tebex Store',
      category: 'web',
      price: 800,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
      description: 'FiveM sunucunuz için modern web sitesi, canlı oyuncu istatistikleri, ban/kick web yönetim paneli ve Tebex/Shopier otomatik ürün teslimat köprüsü.',
      features: ['Canlı sunucu oyuncu monitörü', 'Yönetici yetki & ceza paneli', 'Otomatik lisans & teslimat köprüsü', 'Mobil ve masaüstü tam responsive']
    }
  ];

  const SEED_DEVS = [
    {
      id: 'dev_1',
      discordId: '921820698188144660',
      email: 'ardakuzucuk2@gmail.com', // Asla kullanıcıya veya DOM'a yazılmaz
      role: 'Lead Developer & Architect',
      specialty: 'FiveM Lua, React UI, Node.js Altyapıları',
      contact: 'Discord DM açık — YinYang Store'
    },
    {
      id: 'dev_2',
      discordId: '712398456789012345',
      email: 'gwzdev@gmail.com', // Gizli
      role: 'Discord & Bot Specialist',
      specialty: 'Discord.js v14, Python, API Mimarisi',
      contact: 'YinYang Destek Sunucusu'
    }
  ];

  const SEED_REVIEWS = [
    {
      id: 'rev_1',
      productId: 'prod_1',
      productName: 'YinYang Police MDT & Tablet',
      author: 'Mert Yılmaz',
      rating: 5,
      comment: 'Sunucumuzda 128 aktif oyuncuyla test ettik, 0.01 ms resmon değeri veriyor. Arayüzü gördüğüm en akıcı ve şık FiveM MDT.',
      createdAt: '2026-10-18T14:20:00.000Z'
    },
    {
      id: 'rev_2',
      productId: 'prod_2',
      productName: 'YinYang Guard & Security Bot',
      author: 'Emre K.',
      rating: 5,
      comment: 'Raid girişimini anında engelledi, loglar harika düşüyor. Discord koruma botları arasında açık ara en iyisi.',
      createdAt: '2026-10-26T18:45:00.000Z'
    },
    {
      id: 'rev_3',
      productId: 'prod_3',
      productName: 'Multi-Character & Cinematic Spawn',
      author: 'Berkant D.',
      rating: 5,
      comment: 'Kamera geçişleri ve arayüz animasyonları tam Kateshi kalitesinde. Kurulum kılavuzuyla 5 dakikada kurduk.',
      createdAt: '2026-11-04T11:10:00.000Z'
    }
  ];

  // ---------- Yerel Veritabanı Yönetimi (localStorage) ----------
  const DB = {
    getProducts() {
      try {
        const raw = localStorage.getItem('yy_products_v2');
        if (raw) return JSON.parse(raw);
      } catch {}
      this.setProducts(SEED_PRODUCTS);
      return SEED_PRODUCTS;
    },
    setProducts(list) {
      localStorage.setItem('yy_products_v2', JSON.stringify(list));
    },

    getDevs() {
      try {
        const raw = localStorage.getItem('yy_devs_v2');
        if (raw) return JSON.parse(raw);
      } catch {}
      this.setDevs(SEED_DEVS);
      return SEED_DEVS;
    },
    setDevs(list) {
      localStorage.setItem('yy_devs_v2', JSON.stringify(list));
    },

    getReviews() {
      try {
        const raw = localStorage.getItem('yy_reviews_v2');
        if (raw) return JSON.parse(raw);
      } catch {}
      this.setReviews(SEED_REVIEWS);
      return SEED_REVIEWS;
    },
    setReviews(list) {
      localStorage.setItem('yy_reviews_v2', JSON.stringify(list));
    },

    getOrders() {
      try {
        const raw = localStorage.getItem('yy_orders_v2');
        if (raw) return JSON.parse(raw);
      } catch {}
      return [];
    },
    setOrders(list) {
      localStorage.setItem('yy_orders_v2', JSON.stringify(list));
    },
    addOrder(order) {
      const list = this.getOrders();
      list.unshift(order);
      this.setOrders(list);
      return order;
    },

    resetAll() {
      this.setProducts(SEED_PRODUCTS);
      this.setDevs(SEED_DEVS);
      this.setReviews(SEED_REVIEWS);
      this.setOrders([]);
    }
  };

  // Uygulama Durumu (State)
  const state = {
    products: [],
    developers: [],
    reviews: [],
    isAdmin: false,
    adminName: '',
    cat: 'all',
    q: '',
    sort: 'new',
    cart: JSON.parse(localStorage.getItem('yy_cart') || '[]'),
    adminTab: 'products',
    rvStars: 5
  };

  // DOM Yardımcıları
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const money = (n) => Number(n || 0).toLocaleString('tr-TR') + ' ₺';
  const dateTR = (iso) => {
    try {
      return new Date(iso).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
    } catch {
      return '';
    }
  };
  const starsHtml = (n) => '<span class="stars">' + [1, 2, 3, 4, 5].map(i => `<i class="fa-${i <= Math.round(n) ? 'solid' : 'regular'} fa-star"></i>`).join('') + '</span>';

  // Toast Bildirimi
  function toast(msg, err = false) {
    const wrap = $('#toasts');
    if (!wrap) return;
    const t = document.createElement('div');
    t.className = 'toast' + (err ? ' err' : '');
    t.innerHTML = `<i class="fa-solid ${err ? 'fa-triangle-exclamation' : 'fa-circle-check'}" style="color:${err ? 'var(--red)' : 'var(--green)'}"></i><span>${esc(msg)}</span>`;
    wrap.appendChild(t);
    setTimeout(() => {
      t.classList.add('out');
      setTimeout(() => t.remove(), 300);
    }, 3600);
  }

  // Modal Yönetimi
  const openModal = (id) => {
    const m = $('#' + id);
    if (m) {
      m.hidden = false;
      document.body.style.overflow = 'hidden';
    }
  };
  const closeModal = (id) => {
    const m = $('#' + id);
    if (m) m.hidden = true;
    if (!$$('.modal').some(x => !x.hidden)) document.body.style.overflow = '';
  };
  const closeAllModals = () => {
    $$('.modal').forEach(m => m.hidden = true);
    document.body.style.overflow = '';
  };

  // ---------- Yönetici Oturumu ----------
  function restoreSession() {
    const isAuth = sessionStorage.getItem('yy_admin_auth') === '1' || localStorage.getItem('yy_admin_auth') === '1';
    if (isAuth) {
      state.isAdmin = true;
      state.adminName = ADMIN_CREDENTIALS.displayName;
    } else {
      state.isAdmin = false;
      state.adminName = '';
    }
    renderAuth();
  }

  function loginAdmin(user, pass) {
    if (user.trim() === ADMIN_CREDENTIALS.username && pass === ADMIN_CREDENTIALS.password) {
      state.isAdmin = true;
      state.adminName = ADMIN_CREDENTIALS.displayName;
      sessionStorage.setItem('yy_admin_auth', '1');
      localStorage.setItem('yy_admin_auth', '1');
      renderAuth();
      return true;
    }
    return false;
  }

  function logoutAdmin() {
    state.isAdmin = false;
    state.adminName = '';
    sessionStorage.removeItem('yy_admin_auth');
    localStorage.removeItem('yy_admin_auth');
    renderAuth();
    closeModal('modal-admin');
    toast('Yönetici oturumu kapatıldı.');
  }

  function renderAuth() {
    const b = $('#btn-auth');
    if (b) {
      b.innerHTML = state.isAdmin
        ? `<i class="fa-solid fa-user-shield"></i><span id="btn-auth-text">${esc(state.adminName)}</span>`
        : '<i class="fa-solid fa-lock"></i><span id="btn-auth-text">Yönetici</span>';
    }
    const adminBtn = $('#btn-admin');
    if (adminBtn) adminBtn.hidden = !state.isAdmin;
    const addProdBtn = $('#btn-add-product');
    if (addProdBtn) addProdBtn.hidden = !state.isAdmin;
    const addDevBtn = $('#btn-add-dev');
    if (addDevBtn) addDevBtn.hidden = !state.isAdmin;

    renderProducts();
    renderReviews();
  }

  function openAuth() {
    if (state.isAdmin) {
      if (confirm('Yönetici oturumunu kapatmak istiyor musunuz?')) logoutAdmin();
      return;
    }
    openModal('modal-auth');
    setTimeout(() => {
      const u = $('#login-user');
      if (u) u.focus();
    }, 50);
  }

  // ---------- Veri Yükleme ----------
  function loadAll() {
    state.products = DB.getProducts();
    state.developers = DB.getDevs();
    state.reviews = DB.getReviews();
    renderAll();
  }

  const avgRating = (pid) => {
    const list = state.reviews.filter(r => !pid || r.productId === pid);
    return list.length ? (list.reduce((s, r) => s + r.rating, 0) / list.length) : 0;
  };
  const countRv = (pid) => state.reviews.filter(r => r.productId === pid).length;

  // ---------- Render: Ürünler ----------
  function filteredProducts() {
    let list = [...state.products];
    if (state.cat !== 'all') list = list.filter(p => p.category === state.cat);
    if (state.q) {
      const q = state.q.toLowerCase();
      list = list.filter(p =>
        (p.title + ' ' + p.description + ' ' + (p.features || []).join(' ')).toLowerCase().includes(q)
      );
    }
    if (state.sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (state.sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (state.sort === 'rating') list.sort((a, b) => avgRating(b.id) - avgRating(a.id));
    else list.sort((a, b) => (b.id > a.id ? 1 : -1));
    return list;
  }

  function productCard(p) {
    const [catName] = CAT[p.category] || ['Yazılım'];
    const rating = avgRating(p.id), n = countRv(p.id);
    const img = p.image
      ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.outerHTML='<div class=&quot;noimg&quot;><i class=&quot;fa-solid fa-yin-yang&quot;></i></div>'">`
      : '<div class="noimg"><i class="fa-solid fa-yin-yang"></i></div>';

    return `<article class="card tilt reveal">
      <div class="p-img" data-action="detail" data-id="${p.id}">
        ${img}
        <span class="tag">${esc(catName)}</span>
        <span class="price">${money(p.price)}</span>
      </div>
      <div class="p-body">
        <h3 class="p-title" data-action="detail" data-id="${p.id}">${esc(p.title)}</h3>
        <div class="p-rating">
          ${n ? starsHtml(rating) + `<span>${rating.toFixed(1)} · ${n} yorum</span>` : '<span>Henüz yorum yok</span>'}
        </div>
        <p class="p-desc">${esc(p.description)}</p>
        <ul class="feats">
          ${(p.features || []).slice(0, 4).map(f => `<li><i class="fa-solid fa-check"></i>${esc(f)}</li>`).join('')}
        </ul>
        <div class="p-actions">
          <button class="btn btn-light" data-action="buy" data-id="${p.id}"><i class="fa-solid fa-bolt"></i> Satın Al</button>
          <button class="btn btn-ghost icon-btn" data-action="cart-add" data-id="${p.id}" title="Sepete ekle"><i class="fa-solid fa-cart-plus"></i></button>
          <button class="btn btn-ghost icon-btn" data-action="review-product" data-id="${p.id}" title="Yorum yaz"><i class="fa-regular fa-comment"></i></button>
        </div>
        ${state.isAdmin ? `
          <div class="p-actions" style="margin-top:6px;padding-top:8px;border-top:1px dashed var(--line2)">
            <button class="btn btn-ghost btn-sm" data-action="edit-product" data-id="${p.id}"><i class="fa-solid fa-pen"></i> Düzenle</button>
            <button class="btn btn-danger btn-sm" data-action="del-product" data-id="${p.id}"><i class="fa-solid fa-trash"></i> Sil</button>
          </div>
        ` : ''}
      </div>
    </article>`;
  }

  function renderProducts() {
    const grid = $('#products-grid'), empty = $('#products-empty');
    if (!grid) return;
    const list = filteredProducts();

    if (!state.products.length) {
      grid.innerHTML = '';
      if (empty) {
        empty.hidden = false;
        empty.innerHTML = `<i class="fa-solid fa-box-open"></i><h4>Henüz ürün eklenmemiş</h4><p>${state.isAdmin ? 'İlk ürününüzü ekleyerek başlayın.' : 'Ürünler yakında burada olacak.'}</p>` +
          (state.isAdmin ? '<button class="btn btn-light" data-action="add-product"><i class="fa-solid fa-plus"></i> İlk Ürünü Ekle</button>' : '');
      }
      return;
    }

    if (!list.length) {
      grid.innerHTML = '';
      if (empty) {
        empty.hidden = false;
        empty.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i><h4>Sonuç bulunamadı</h4><p>Arama veya filtreyi değiştirin.</p>';
      }
      return;
    }

    if (empty) empty.hidden = true;
    grid.innerHTML = list.map(productCard).join('');
    observeReveal();
  }

  // ---------- Render: Ekip (Discord Profil Çekme) ----------
  const discordCache = {};
  async function discordProfile(id) {
    if (discordCache[id]) return discordCache[id];
    const defaultIndex = (id.length ? Number(id.slice(-2)) % 5 : 0);
    const fb = {
      username: 'dev_' + id.slice(-4),
      name: 'YinYang Geliştirici',
      avatar: `https://cdn.discordapp.com/embed/avatars/${defaultIndex}.png`
    };

    try {
      const res = await fetch('https://discordlookup.mesalytic.moe/v1/user/' + id);
      if (res.ok) {
        const d = await res.json();
        const av = d.avatar && (d.avatar.link || (d.avatar.id && `https://cdn.discordapp.com/avatars/${id}/${d.avatar.id}.png?size=256`));
        const prof = {
          username: d.username || fb.username,
          name: d.global_name || d.username || fb.name,
          avatar: av || fb.avatar
        };
        discordCache[id] = prof;
        return prof;
      }
    } catch {}

    discordCache[id] = fb;
    return fb;
  }

  async function renderTeam() {
    const grid = $('#team-grid'), empty = $('#team-empty');
    if (!grid) return;

    if (!state.developers.length) {
      grid.innerHTML = '';
      if (empty) {
        empty.hidden = false;
        empty.innerHTML = `<i class="fa-solid fa-users"></i><h4>Ekip henüz eklenmemiş</h4><p>${state.isAdmin ? 'Discord ID girerek ilk geliştiriciyi ekleyin.' : ''}</p>` +
          (state.isAdmin ? '<button class="btn btn-light" data-action="add-dev"><i class="fa-solid fa-user-plus"></i> Geliştirici Ekle</button>' : '');
      }
      return;
    }

    if (empty) empty.hidden = true;
    // Ön yükleme placeholder
    grid.innerHTML = state.developers.map(() => '<div class="skeleton" style="height:260px"></div>').join('');

    const cards = await Promise.all(state.developers.map(async d => {
      const p = await discordProfile(d.discordId);
      // DİKKAT: d.email kesinlikle bu card içine yazılmaz veya DOM'a iliştirilmez!
      return `<article class="card tilt dev-card reveal">
        <div class="dev-avatar">
          <img src="${esc(p.avatar)}" alt="${esc(p.name)}" referrerpolicy="no-referrer" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
        </div>
        <div class="dev-name">${esc(p.name)}</div>
        <div class="dev-user">@${esc(p.username)}</div>
        <span class="dev-role">${esc(d.role)}</span>
        <div class="dev-spec">${esc(d.specialty || '')}</div>
        ${d.contact ? `<div class="dev-contact"><i class="fa-solid fa-circle-info"></i> ${esc(d.contact)}</div>` : ''}
        <div class="dev-foot">
          <span><i class="fa-brands fa-discord"></i> ${esc(d.discordId)}</span>
          <a href="${DISCORD_URL}" target="_blank" rel="noopener noreferrer">İletişim →</a>
        </div>
        ${state.isAdmin ? `
          <div style="margin-top:12px;padding-top:8px;border-top:1px dashed var(--line2);text-align:right">
            <button class="btn btn-danger btn-sm" data-action="del-dev" data-id="${d.id}"><i class="fa-solid fa-trash"></i> Sil</button>
          </div>
        ` : ''}
      </article>`;
    }));

    grid.innerHTML = cards.join('');
    observeReveal();
  }

  // ---------- Render: Yorumlar ----------
  function renderReviews() {
    const grid = $('#reviews-grid'), empty = $('#reviews-empty');
    if (!grid) return;

    if (!state.reviews.length) {
      grid.innerHTML = '';
      if (empty) {
        empty.hidden = false;
        empty.innerHTML = '<i class="fa-regular fa-comments"></i><h4>Henüz yorum yok</h4><p>İlk yorumu siz yazın.</p><button class="btn btn-light" data-action="write-review"><i class="fa-solid fa-pen"></i> Yorum Yaz</button>';
      }
      return;
    }

    if (empty) empty.hidden = true;
    grid.innerHTML = state.reviews.map(r => `
      <article class="card review-card reveal">
        <div class="rv-top">
          ${starsHtml(r.rating)}
          <small class="muted">${dateTR(r.createdAt)}</small>
        </div>
        <p>“${esc(r.comment)}”</p>
        <div class="rv-user">
          <span class="rv-ini">${esc((r.author || '?').trim().charAt(0).toUpperCase())}</span>
          <div>
            <b>${esc(r.author)}</b>
            <small>${esc(r.productName)}</small>
          </div>
          ${state.isAdmin ? `
            <button class="btn btn-danger btn-sm" style="margin-left:auto" data-action="del-review" data-id="${r.id}" title="Yorumu sil">
              <i class="fa-solid fa-trash"></i>
            </button>
          ` : ''}
        </div>
      </article>
    `).join('');
    observeReveal();
  }

  function renderStats() {
    countTo($('#stat-products'), state.products.length);
    countTo($('#stat-devs'), state.developers.length);
    countTo($('#stat-reviews'), state.reviews.length);
    const rat = $('#stat-rating');
    if (rat) rat.textContent = state.reviews.length ? avgRating().toFixed(1) + ' ★' : '–';
  }

  function countTo(el, to) {
    if (!el) return;
    const from = Number(el.textContent) || 0;
    const t0 = performance.now(), dur = 800;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function renderAll() {
    renderProducts();
    renderReviews();
    renderTeam();
    renderStats();
  }

  // ---------- Sepet & Sipariş Yönetimi ----------
  const saveCart = () => {
    localStorage.setItem('yy_cart', JSON.stringify(state.cart));
    renderCart();
  };

  function renderCart() {
    state.cart = state.cart.filter(id => state.products.some(p => p.id === id));
    const items = state.cart.map(id => state.products.find(p => p.id === id)).filter(Boolean);
    const badge = $('#cart-badge');
    if (badge) {
      badge.hidden = !items.length;
      badge.textContent = items.length;
    }
    const tot = $('#cart-total');
    if (tot) tot.textContent = money(items.reduce((s, p) => s + p.price, 0));

    const list = $('#cart-list');
    if (list) {
      list.innerHTML = items.length ? items.map(p => `
        <div class="cart-item">
          ${p.image ? `<img src="${esc(p.image)}" alt="" referrerpolicy="no-referrer">` : '<div class="noimg"><i class="fa-solid fa-yin-yang"></i></div>'}
          <div>
            <b>${esc(p.title)}</b>
            <small>${money(p.price)}</small>
          </div>
          <button data-action="cart-remove" data-id="${p.id}" title="Kaldır"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `).join('') : '<div class="empty" style="padding:40px 10px"><i class="fa-solid fa-basket-shopping"></i><p>Sepetiniz boş.</p></div>';
    }
  }

  function openCart(v) {
    const d = $('#drawer'), b = $('#drawer-backdrop');
    if (b) b.hidden = !v;
    if (d) {
      d.classList.toggle('open', v);
      d.setAttribute('aria-hidden', String(!v));
    }
    document.body.style.overflow = v ? 'hidden' : '';
    if (v) renderCart();
  }

  async function placeOrder(ids) {
    const items = ids.map(id => state.products.find(p => p.id === id)).filter(Boolean);
    if (!items.length) {
      toast('Sipariş verilecek ürün bulunamadı.', true);
      return;
    }

    const orderCode = 'YY-' + Math.floor(10000 + Math.random() * 90000);
    const total = items.reduce((s, i) => s + i.price, 0);

    const orderData = {
      code: orderCode,
      createdAt: new Date().toISOString(),
      items: items.map(i => ({ id: i.id, title: i.title, price: i.price })),
      total: total,
      customer: 'Ziyaretçi'
    };
    DB.addOrder(orderData);

    const clipboardText =
`☯ [YinYang Store Sipariş Talebi]
Sipariş Kodu: ${orderCode}
Tarih: ${new Date().toLocaleString('tr-TR')}
---------------------------------
Ürünler:
${items.map(i => `- ${i.title} (${money(i.price)})`).join('\n')}
---------------------------------
Toplam Tutar: ${money(total)}

Destek talebinde yetkilimize bu sipariş kodunu iletmeniz yeterlidir.`;

    try {
      await navigator.clipboard.writeText(clipboardText);
      toast(`Sipariş kodu (${orderCode}) ve detayları panonuza kopyalandı!`);
    } catch {
      toast(`Sipariş kodunuz: ${orderCode}`);
    }

    // Discord yönlendirmesi
    setTimeout(() => {
      window.open(DISCORD_URL, '_blank', 'noopener,noreferrer');
    }, 450);
  }

  // ---------- Ürün Detay Modalı ----------
  function openDetail(id) {
    const p = state.products.find(x => x.id === id);
    if (!p) return;
    const rv = state.reviews.filter(r => r.productId === id).slice(0, 4);
    const rating = avgRating(id);

    const body = $('#detail-body');
    if (!body) return;

    body.innerHTML = `
      <div class="d-img">
        ${p.image ? `<img src="${esc(p.image)}" alt="" referrerpolicy="no-referrer" onerror="this.remove()">` : ''}
      </div>
      <div class="d-body">
        <div class="d-top">
          <div>
            <span class="chip">${esc((CAT[p.category] || ['Yazılım'])[0])}</span>
            <h3>${esc(p.title)}</h3>
            <div class="p-rating" style="margin-top:6px">
              ${countRv(id) ? starsHtml(rating) + `<span>${rating.toFixed(1)} (${countRv(id)} yorum)</span>` : '<span>Henüz yorum yok</span>'}
            </div>
          </div>
          <div class="d-price">${money(p.price)}</div>
        </div>
        <p class="muted" style="font-size:.9rem">${esc(p.description)}</p>
        ${(p.features || []).length ? `
          <ul class="d-feats">
            ${p.features.map(f => `<li><i class="fa-solid fa-check"></i>${esc(f)}</li>`).join('')}
          </ul>
        ` : ''}
        <div class="d-actions">
          <button class="btn btn-light" data-action="buy" data-id="${p.id}"><i class="fa-brands fa-discord"></i> Hemen Satın Al</button>
          <button class="btn btn-ghost" data-action="cart-add" data-id="${p.id}"><i class="fa-solid fa-cart-plus"></i> Sepete Ekle</button>
          <button class="btn btn-ghost" data-action="review-product" data-id="${p.id}"><i class="fa-regular fa-comment"></i> Yorum Yaz</button>
        </div>
        ${rv.length ? `
          <div style="margin-top:16px">
            <h4 style="margin-bottom:10px;font-size:.9rem">Bu ürün hakkındaki yorumlar</h4>
            <div class="d-reviews">
              ${rv.map(r => `
                <div class="d-rv">
                  <b>${esc(r.author)}</b> ${starsHtml(r.rating)}
                  <p style="margin-top:4px;color:#bdbdca">${esc(r.comment)}</p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
    openModal('modal-detail');
  }

  // ---------- Yorum Modalı ----------
  function setStars(n) {
    state.rvStars = n;
    $$('#rv-stars i').forEach(i => i.classList.toggle('on', Number(i.dataset.v) <= n));
  }

  function openReview(productId) {
    if (!state.products.length) {
      toast('Henüz yorum yapılabilecek ürün bulunmuyor.', true);
      return;
    }
    closeModal('modal-detail');
    const sel = $('#rv-product');
    if (sel) {
      sel.innerHTML = state.products.map(p => `<option value="${p.id}">${esc(p.title)}</option>`).join('');
      if (productId) sel.value = productId;
    }
    const authorInp = $('#rv-author');
    if (authorInp) authorInp.value = localStorage.getItem('yy_name') || '';
    const commentInp = $('#rv-comment');
    if (commentInp) commentInp.value = '';
    setStars(5);
    openModal('modal-review');
  }

  // ---------- Yönetim Paneli (Admin Modal) ----------
  function renderAdmin() {
    const who = $('#admin-who');
    if (who) who.textContent = 'Giriş: ' + state.adminName;

    $$('#admin-tabs .tab').forEach(t => t.classList.toggle('active', t.dataset.atab === state.adminTab));
    const box = $('#admin-content');
    if (!box) return;

    if (state.adminTab === 'products') {
      box.innerHTML = `
        <div class="a-toolbar">
          <b>${state.products.length} ürün listeleniyor</b>
          <button class="btn btn-light btn-sm" data-action="add-product"><i class="fa-solid fa-plus"></i> Yeni Ürün Ekle</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>Görsel</th><th>Başlık</th><th>Kategori</th><th>Fiyat</th><th>İşlemler</th></tr>
            </thead>
            <tbody>
              ${state.products.map(p => `
                <tr>
                  <td>${p.image ? `<img src="${esc(p.image)}" alt="" style="width:36px;height:36px;border-radius:6px;object-fit:cover" referrerpolicy="no-referrer">` : '<i class="fa-solid fa-yin-yang"></i>'}</td>
                  <td><b>${esc(p.title)}</b></td>
                  <td>${esc((CAT[p.category] || [''])[0])}</td>
                  <td><b>${money(p.price)}</b></td>
                  <td>
                    <div class="row-actions">
                      <button class="btn btn-ghost btn-sm" data-action="edit-product" data-id="${p.id}"><i class="fa-solid fa-pen"></i> Düzenle</button>
                      <button class="btn btn-danger btn-sm" data-action="del-product" data-id="${p.id}"><i class="fa-solid fa-trash"></i> Sil</button>
                    </div>
                  </td>
                </tr>
              `).join('') || '<tr><td colspan="5" class="muted">Ürün bulunamadı.</td></tr>'}
            </tbody>
          </table>
        </div>
      `;
    } else if (state.adminTab === 'team') {
      box.innerHTML = `
        <div class="a-toolbar">
          <b>${state.developers.length} geliştirici kayıtlı</b>
          <button class="btn btn-light btn-sm" data-action="add-dev"><i class="fa-solid fa-user-plus"></i> Geliştirici Ekle</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>Discord ID</th><th>Rol / Ünvan</th><th>E-posta (Gizli)</th><th>İşlemler</th></tr>
            </thead>
            <tbody>
              ${state.developers.map(d => `
                <tr>
                  <td><code>${esc(d.discordId)}</code></td>
                  <td><b>${esc(d.role)}</b></td>
                  <td class="muted"><i class="fa-solid fa-lock" style="font-size:.7rem"></i> ${esc(d.email)}</td>
                  <td>
                    <div class="row-actions">
                      <button class="btn btn-danger btn-sm" data-action="del-dev" data-id="${d.id}"><i class="fa-solid fa-trash"></i> Sil</button>
                    </div>
                  </td>
                </tr>
              `).join('') || '<tr><td colspan="4" class="muted">Geliştirici yok.</td></tr>'}
            </tbody>
          </table>
        </div>
      `;
    } else if (state.adminTab === 'reviews') {
      box.innerHTML = `
        <div class="a-toolbar"><b>${state.reviews.length} kullanıcı yorumu</b></div>
        <div class="list">
          ${state.reviews.map(r => `
            <div class="list-item" style="display:flex;justify-content:space-between;align-items:flex-start;padding:12px;border-bottom:1px solid var(--line2);gap:16px">
              <div>
                <b>${esc(r.author)}</b> ${starsHtml(r.rating)} <span class="muted">· ${esc(r.productName)}</span>
                <div class="muted" style="margin-top:4px">“${esc(r.comment)}”</div>
              </div>
              <button class="btn btn-danger btn-sm" data-action="del-review" data-id="${r.id}"><i class="fa-solid fa-trash"></i> Sil</button>
            </div>
          `).join('') || '<div class="muted" style="padding:20px">Yorum bulunmuyor.</div>'}
        </div>
      `;
    } else if (state.adminTab === 'orders') {
      const orders = DB.getOrders();
      box.innerHTML = `
        <div class="a-toolbar"><b>${orders.length} sipariş kaydı</b></div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>Sipariş Kodu</th><th>Ürünler</th><th>Toplam</th><th>Tarih</th></tr>
            </thead>
            <tbody>
              ${orders.map(o => `
                <tr>
                  <td><code>${esc(o.code)}</code></td>
                  <td>${o.items.map(i => esc(i.title)).join('<br>')}</td>
                  <td><b>${money(o.total)}</b></td>
                  <td class="muted">${dateTR(o.createdAt)}</td>
                </tr>
              `).join('') || '<tr><td colspan="4" class="muted">Henüz sipariş oluşturulmadı.</td></tr>'}
            </tbody>
          </table>
        </div>
      `;
    } else if (state.adminTab === 'backup') {
      box.innerHTML = `
        <div style="padding:16px;background:var(--card2);border-radius:12px;border:1px solid var(--line2)">
          <h4><i class="fa-solid fa-database"></i> Veritabanı ve Yedekleme</h4>
          <p class="muted" style="font-size:.85rem;margin:8px 0 16px">
            Tüm ürünler, geliştiriciler ve yorumlar tarayıcınızın yerel hafızasında saklanır. Mağazanızı başka bir bilgisayara taşımak veya yedek almak için JSON dosyasını dışa aktarabilirsiniz.
          </p>
          <div style="display:flex;gap:10px;flex-wrap:wrap">
            <button class="btn btn-light" data-action="export-json"><i class="fa-solid fa-download"></i> Yedeği İndir (JSON)</button>
            <label class="btn btn-ghost" style="cursor:pointer">
              <i class="fa-solid fa-upload"></i> Yedeği Yükle
              <input type="file" id="import-file" accept=".json" style="display:none">
            </label>
            <button class="btn btn-danger" data-action="reset-defaults"><i class="fa-solid fa-rotate-left"></i> Fabrika Ayarlarına Dön</button>
          </div>
        </div>
      `;
    }
  }

  function openProductForm(id) {
    const p = id ? state.products.find(x => x.id === id) : null;
    $('#pf-heading').textContent = p ? 'Ürünü Düzenle' : 'Yeni Ürün';
    $('#pf-id').value = p ? p.id : '';
    $('#pf-title').value = p ? p.title : '';
    $('#pf-category').value = p ? p.category : 'fivem';
    $('#pf-price').value = p ? p.price : '';
    $('#pf-image').value = p ? p.image : '';
    $('#pf-desc').value = p ? p.description : '';
    $('#pf-features').value = p ? (p.features || []).join(', ') : '';
    openModal('modal-product');
  }

  const needAdmin = () => {
    if (!state.isAdmin) {
      toast('Bu işlem için yönetici girişi gereklidir.', true);
      openAuth();
      return false;
    }
    return true;
  };

  // ---------- Olay Dinleyicileri (Event Delegation) ----------
  document.addEventListener('click', async (e) => {
    const closeBtn = e.target.closest('[data-close]');
    if (closeBtn) {
      closeModal(closeBtn.closest('.modal').id);
      return;
    }
    if (e.target.classList && e.target.classList.contains('modal')) {
      closeModal(e.target.id);
      return;
    }
    if (e.target.id === 'drawer-backdrop') {
      openCart(false);
      return;
    }

    // Kategori filtreleme
    const tab = e.target.closest('#category-tabs .tab');
    if (tab) {
      $$('#category-tabs .tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.cat = tab.dataset.cat;
      renderProducts();
      return;
    }

    // Yönetim paneli sekme değişimi
    const atab = e.target.closest('#admin-tabs .tab');
    if (atab) {
      state.adminTab = atab.dataset.atab;
      renderAdmin();
      return;
    }

    // Yıldız değerlendirmesi
    const star = e.target.closest('#rv-stars i');
    if (star) {
      setStars(Number(star.dataset.v));
      return;
    }

    // Eylem butonları
    const el = e.target.closest('[data-action]');
    if (!el) return;

    const id = el.dataset.id;
    const act = el.dataset.action;

    try {
      switch (act) {
        case 'open-auth':
          openAuth();
          break;
        case 'open-admin':
          if (needAdmin()) {
            openModal('modal-admin');
            renderAdmin();
          }
          break;
        case 'open-cart':
          openCart(true);
          break;
        case 'close-cart':
          openCart(false);
          break;
        case 'toggle-menu':
          const mm = $('#mobile-menu');
          if (mm) mm.hidden = !mm.hidden;
          break;
        case 'detail':
          openDetail(id);
          break;
        case 'cart-add':
          if (state.cart.includes(id)) {
            toast('Bu ürün zaten sepetinizde ekli.');
          } else {
            state.cart.push(id);
            saveCart();
            toast('Ürün sepete eklendi.');
          }
          break;
        case 'cart-remove':
          state.cart = state.cart.filter(x => x !== id);
          saveCart();
          toast('Ürün sepetten çıkarıldı.');
          break;
        case 'clear-cart':
          state.cart = [];
          saveCart();
          toast('Sepet temizlendi.');
          break;
        case 'buy':
          await placeOrder([id]);
          break;
        case 'checkout':
          if (!state.cart.length) {
            toast('Sepetiniz boş.', true);
            break;
          }
          await placeOrder([...state.cart]);
          state.cart = [];
          saveCart();
          openCart(false);
          break;
        case 'review-product':
          openReview(id);
          break;
        case 'write-review':
          openReview();
          break;
        case 'add-product':
          if (needAdmin()) openProductForm();
          break;
        case 'edit-product':
          if (needAdmin()) openProductForm(id);
          break;
        case 'del-product':
          if (needAdmin() && confirm('Bu ürünü ve yorumlarını silmek istediğinize emin misiniz?')) {
            state.products = state.products.filter(p => p.id !== id);
            DB.setProducts(state.products);
            state.reviews = state.reviews.filter(r => r.productId !== id);
            DB.setReviews(state.reviews);
            renderAll();
            renderCart();
            if (!$('#modal-admin').hidden) renderAdmin();
            toast('Ürün silindi.');
          }
          break;
        case 'add-dev':
          if (needAdmin()) {
            $('#form-dev').reset();
            openModal('modal-dev');
          }
          break;
        case 'del-dev':
          if (needAdmin() && confirm('Geliştiriciyi ekipten kaldırmak istiyor musunuz?')) {
            state.developers = state.developers.filter(d => d.id !== id);
            DB.setDevs(state.developers);
            renderTeam();
            renderStats();
            if (!$('#modal-admin').hidden) renderAdmin();
            toast('Geliştirici kaldırıldı.');
          }
          break;
        case 'del-review':
          if (needAdmin() && confirm('Bu yorumu silmek istiyor musunuz?')) {
            state.reviews = state.reviews.filter(r => r.id !== id);
            DB.setReviews(state.reviews);
            renderReviews();
            renderProducts();
            renderStats();
            if (!$('#modal-admin').hidden) renderAdmin();
            toast('Yorum silindi.');
          }
          break;
        case 'export-json':
          if (needAdmin()) {
            const dump = {
              products: DB.getProducts(),
              devs: DB.getDevs(),
              reviews: DB.getReviews(),
              orders: DB.getOrders(),
              exportedAt: new Date().toISOString()
            };
            const blob = new Blob([JSON.stringify(dump, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `yinyang-backup-${new Date().toISOString().slice(0, 10)}.json`;
            a.click();
            URL.revokeObjectURL(url);
            toast('Yedek JSON dosyası indirildi.');
          }
          break;
        case 'reset-defaults':
          if (needAdmin() && confirm('Tüm ürünleri ve verileri orijinal varsayılan haline döndürmek istiyor musunuz?')) {
            DB.resetAll();
            loadAll();
            renderCart();
            renderAdmin();
            toast('Tüm veriler fabrika ayarlarına döndürüldü.');
          }
          break;
      }
    } catch (err) {
      toast(err.message || 'Bir hata meydana geldi.', true);
    }
  });

  // Form Gönderimleri (Submit)
  document.addEventListener('submit', (e) => {
    const f = e.target;
    e.preventDefault();

    if (f.id === 'form-login') {
      const user = $('#login-user').value;
      const pass = $('#login-pass').value;
      if (loginAdmin(user, pass)) {
        f.reset();
        closeModal('modal-auth');
        toast('Hoş geldiniz, gwz! Yönetici paneli aktif.');
      } else {
        toast('Hatalı kullanıcı adı veya şifre!', true);
      }
    } else if (f.id === 'form-review') {
      const sel = $('#rv-product');
      const prod = state.products.find(x => x.id === sel.value);
      const newRev = {
        id: 'rev_' + Date.now(),
        productId: sel.value,
        productName: prod ? prod.title : 'Genel',
        author: $('#rv-author').value.trim() || 'Misafir',
        rating: state.rvStars,
        comment: $('#rv-comment').value.trim(),
        createdAt: new Date().toISOString()
      };
      localStorage.setItem('yy_name', newRev.author);
      state.reviews.unshift(newRev);
      DB.setReviews(state.reviews);
      renderReviews();
      renderProducts();
      renderStats();
      closeModal('modal-review');
      toast('Yorumunuz yayınlandı, teşekkürler!');
    } else if (f.id === 'form-product') {
      if (!needAdmin()) return;
      const id = $('#pf-id').value;
      const prodData = {
        id: id || ('prod_' + Date.now()),
        title: $('#pf-title').value.trim(),
        category: $('#pf-category').value,
        price: Number($('#pf-price').value),
        image: $('#pf-image').value.trim(),
        description: $('#pf-desc').value.trim(),
        features: $('#pf-features').value.split(',').map(s => s.trim()).filter(Boolean)
      };

      if (id) {
        const idx = state.products.findIndex(p => p.id === id);
        if (idx >= 0) state.products[idx] = prodData;
      } else {
        state.products.unshift(prodData);
      }
      DB.setProducts(state.products);
      renderProducts();
      renderStats();
      renderCart();
      closeModal('modal-product');
      if (!$('#modal-admin').hidden) renderAdmin();
      toast(id ? 'Ürün güncellendi.' : 'Yeni ürün başarıyla eklendi.');
    } else if (f.id === 'form-dev') {
      if (!needAdmin()) return;
      const newDev = {
        id: 'dev_' + Date.now(),
        discordId: $('#df-id').value.trim(),
        email: $('#df-email').value.trim(), // Asla sitede gösterilmez
        role: $('#df-role').value.trim(),
        specialty: $('#df-spec').value.trim(),
        contact: $('#df-contact').value.trim()
      };
      state.developers.unshift(newDev);
      DB.setDevs(state.developers);
      closeModal('modal-dev');
      renderTeam();
      renderStats();
      if (!$('#modal-admin').hidden) renderAdmin();
      toast('Geliştirici eklendi, Discord profili yükleniyor...');
    }
  });

  // JSON Yedeği Yükleme
  document.addEventListener('change', (e) => {
    if (e.target.id === 'import-file') {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const parsed = JSON.parse(evt.target.result);
          if (parsed.products) DB.setProducts(parsed.products);
          if (parsed.devs) DB.setDevs(parsed.devs);
          if (parsed.reviews) DB.setReviews(parsed.reviews);
          if (parsed.orders) DB.setOrders(parsed.orders);
          loadAll();
          renderCart();
          renderAdmin();
          toast('Yedek başarıyla geri yüklendi!');
        } catch {
          toast('Geçersiz JSON yedek dosyası.', true);
        }
      };
      reader.readAsText(file);
    }
  });

  // Arama & Sıralama
  const searchInput = $('#search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.q = e.target.value.trim();
      renderProducts();
    });
  }
  const sortSelect = $('#sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sort = e.target.value;
      renderProducts();
    });
  }

  // Klavye Kısayolları
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
      openCart(false);
    }
  });

  // Mobil Menü
  $$('#mobile-menu a').forEach(a => a.addEventListener('click', () => {
    const mm = $('#mobile-menu');
    if (mm) mm.hidden = true;
  }));

  // ---------- Organik Canlı Ziyaretçi Simülasyonu ----------
  function initLiveCounter() {
    const el = $('#live-count');
    if (!el) return;
    let count = 22;
    el.textContent = count;
    setInterval(() => {
      const delta = Math.floor(Math.random() * 5) - 2; // -2 ile +2 arası
      count = Math.max(14, Math.min(36, count + delta));
      el.textContent = count;
    }, 4500);
  }

  // ---------- Görsel Efektler & Animasyonlar ----------
  let io;
  function observeReveal() {
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach(x => {
          if (x.isIntersecting) {
            x.target.classList.add('in');
            io.unobserve(x.target);
          }
        });
      }, { threshold: 0.1 });
    }
    $$('.reveal:not(.in)').forEach((el, i) => {
      el.style.transitionDelay = Math.min(i % 6, 5) * 60 + 'ms';
      io.observe(el);
    });
  }

  function initEffects() {
    const glow = $('#cursor-glow'), bar = $('#scroll-progress');
    if (glow) {
      window.addEventListener('mousemove', (e) => {
        glow.style.transform = `translate(${e.clientX - 260}px,${e.clientY - 260}px)`;
      }, { passive: true });
    }
    if (bar) {
      window.addEventListener('scroll', () => {
        const h = document.documentElement;
        bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
      }, { passive: true });
    }

    // Kart 3D spotlight ve tilt
    document.addEventListener('mousemove', (e) => {
      const c = e.target.closest && e.target.closest('.card');
      if (!c) return;
      const r = c.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      c.style.setProperty('--mx', x + 'px');
      c.style.setProperty('--my', y + 'px');
      if (c.classList.contains('tilt')) {
        c.style.transform = `perspective(900px) rotateX(${((y / r.height) - 0.5) * -5}deg) rotateY(${((x / r.width) - 0.5) * 5}deg) translateY(-4px)`;
      }
    }, { passive: true });

    document.addEventListener('mouseout', (e) => {
      const c = e.target.closest && e.target.closest('.card.tilt');
      if (c && !c.contains(e.relatedTarget)) c.style.transform = '';
    });

    // Manyetik butonlar
    document.addEventListener('mousemove', (e) => {
      const b = e.target.closest && e.target.closest('.magnetic');
      if (!b) return;
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.14}px,${(e.clientY - r.top - r.height / 2) * 0.22}px)`;
    }, { passive: true });

    document.addEventListener('mouseout', (e) => {
      const b = e.target.closest && e.target.closest('.magnetic');
      if (b) b.style.transform = '';
    });

    particles();
  }

  function particles() {
    const cv = $('#bg-canvas');
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let w, h, pts = [];

    const size = () => {
      w = cv.width = innerWidth;
      h = cv.height = innerHeight;
      pts = Array.from({ length: Math.min(50, Math.floor(w / 30)) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.4 + 0.5
      }));
    };
    size();
    window.addEventListener('resize', size);

    (function draw() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x = (p.x + p.vx + w) % w;
        p.y = (p.y + p.vy + h) % h;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 6.283);
        ctx.fillStyle = 'rgba(255,255,255,0.45)';
        ctx.fill();

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 110) {
            ctx.strokeStyle = `rgba(255,255,255,${0.08 * (1 - d / 110)})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    })();
  }

  function activeNav() {
    const links = $$('.nav-links a');
    const secs = links.map(a => $(a.getAttribute('href')));
    window.addEventListener('scroll', () => {
      let cur = -1;
      secs.forEach((s, i) => {
        if (s && s.getBoundingClientRect().top < 150) cur = i;
      });
      links.forEach((l, i) => {
        l.style.color = (i === cur) ? '#fff' : '';
      });
    }, { passive: true });
  }

  // ---------- Başlatma (Init) ----------
  function init() {
    const yr = $('#year');
    if (yr) yr.textContent = new Date().getFullYear();

    observeReveal();
    initEffects();
    activeNav();
    initLiveCounter();
    restoreSession();
    loadAll();
    renderCart();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

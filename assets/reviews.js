// Real customer chats from Instagram, drawn as Instagram DMs (names and photos blurred).
// Shared by the home page and /link/. Only paying customers, word for word, with their OK.
// Each message: [who, text, heart?]  who: 'i' = the customer, 'o' = us, 'd' = a date line.
window.RASAEL_REVIEWS = [
  { what: 'طلب رسالة لحبيبتو', hue: 200, msgs: [
    ['o', 'شوفه اتعدل؟'], ['o', 'كلشي تمام؟'],
    ['i', 'لك شو هاااد'], ['i', 'لك كتير بجننن'], ['i', 'عنجد ولله بياخد العقل'], ['i', 'مابعرف كيف بدي اشكرك والله'], ['i', '😊😊😊'],
    ['d', '12 NOV, 12:53 AM'],
    ['i', 'مشي الحال زبط والله'], ['i', 'وكتير فرحت وقت شافتو😂😊'], ['i', 'سجلت فويس وهيك', 1],
  ] },
  { what: 'طلب صفحة عيد ميلاد', hue: 25, msgs: [
    ['i', 'لك الله يطعمك الحج 😍😂❤️'], ['i', 'والله للأمانة شي دهب و بجنن'], ['i', 'و فعلاً موقع فكرتو كتير حلوة مع انو ما بعرف اذا موجودة هيك فكرة من قبل'], ['i', 'بس انت غير 😂❤️', 1],
    ['o', 'دخيل قلبك الحمدالله انو عجبتك ❤️❤️❤️'],
    ['i', 'والله انا أول المشجعين إلك و بالتوفيق انشالله 🤍'], ['i', 'و جهزلي حالك عرس أخوي بعد كم شهر بدي بطاقة 😂'],
  ] },
  { what: 'طلب رسالة عيد ميلاد', hue: 280, msgs: [
    ['i', 'بجنن طالع'], ['i', 'كتير كتير حلو'],
    ['o', 'تسلم يا غالي هاد ذوقك🤍'],
    ['i', 'وصل الباقي؟'],
    ['o', 'اي وصلوا الله يجزاك الخير🤍'],
    ['i', 'يسلم هالايدين اخي لا تنسالي الرابط شكرا الك'],
  ] },
];

window.renderReviews = function (el) {
  const R = window.RASAEL_REVIEWS;
  if (!el || !R.length) return false;
  if (!document.getElementById('dm-css')) {
    const st = document.createElement('style'); st.id = 'dm-css';
    st.textContent = `
  .dm { background: #000; border-radius: 26px; overflow: hidden; direction: ltr; font-family: -apple-system, "Segoe UI", Roboto, "IBM Plex Sans Arabic", sans-serif; box-shadow: 0 20px 40px -26px rgba(0,0,0,.6); }
  .dm .bar { display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-bottom: 1px solid #1c1c1c; }
  .dm .bar svg { width: 22px; height: 22px; flex: none; }
  .dm .av { width: 38px; height: 38px; border-radius: 50%; flex: none; padding: 2px; background: conic-gradient(#feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5, #feda75); }
  .dm .av span { display: block; width: 100%; height: 100%; border-radius: 50%; border: 2px solid #000; filter: blur(3px); }
  .dm .nm { flex: 1; min-width: 0; }
  .dm .nm b, .dm .nm small { display: block; width: fit-content; color: #fff; filter: blur(5px); user-select: none; line-height: 1.35; }
  .dm .nm b { font-size: 15px; } .dm .nm small { font-size: 12px; color: #a8a8a8; }
  .dm .icons { display: flex; gap: 14px; }
  .dm .body { padding: 12px 10px 14px; display: flex; flex-direction: column; gap: 3px; }
  .dm .date { align-self: center; color: #8e8e8e; font-size: 11px; font-weight: 600; margin: 8px 0; }
  .dm .row { display: flex; align-items: flex-end; gap: 8px; }
  .dm .row.out { justify-content: flex-end; }
  .dm .mini { width: 28px; height: 28px; border-radius: 50%; flex: none; filter: blur(2.5px); }
  .dm .row .sp { width: 28px; flex: none; }
  .dm .b { position: relative; max-width: 76%; padding: 8px 14px; border-radius: 22px; font-size: 15.5px; line-height: 1.5; direction: rtl; text-align: right; color: #fff; overflow-wrap: anywhere; }
  .dm .in .b { background: #262626; }
  .dm .out .b { background: linear-gradient(135deg, #a033ff, #6b4bff 70%, #5a5cff); }
  .dm .in.gs .b { border-bottom-left-radius: 6px; } .dm .in.gm .b { border-radius: 6px 22px 22px 6px; } .dm .in.ge .b { border-top-left-radius: 6px; }
  .dm .out.gs .b { border-bottom-right-radius: 6px; } .dm .out.gm .b { border-radius: 22px 6px 6px 22px; } .dm .out.ge .b { border-top-right-radius: 6px; }
  .dm .b.h { margin-bottom: 16px; }
  .dm .b .rx { position: absolute; bottom: -16px; left: 10px; background: #262626; border: 2px solid #000; border-radius: 14px; font-size: 12px; padding: 1px 5px; line-height: 1.4; }
  .dm .seen { align-self: flex-end; color: #8e8e8e; font-size: 11px; margin-top: 2px; }
  .dm .foot { margin: 0 10px 12px; height: 42px; border-radius: 22px; background: #262626; display: flex; align-items: center; padding: 0 6px; gap: 10px; color: #8e8e8e; font-size: 14px; }
  .dm .foot i { width: 32px; height: 32px; border-radius: 50%; background: #3797f0; display: grid; place-items: center; }
  .dm .foot i svg { width: 17px; height: 17px; }
  .rev-what { text-align: center; color: #7B5C63; font-size: 14px; font-weight: 700; margin: 4px 0 6px; }`;
    document.head.appendChild(st);
  }
  const ICON = {
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M20 12H4M10 6l-6 6 6 6"/></svg>',
    call: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><rect x="2" y="6" width="14" height="12" rx="3"/><path d="M16 10l6-3v10l-6-3z"/></svg>',
    cam: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M4 8h3l2-2h6l2 2h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>',
  };
  const fake = n => 'abcdefghijklmnopqrstuvwxyz'.split('').sort(() => .5 - Math.random()).slice(0, n).join('');
  const face = h => `background: radial-gradient(circle at 50% 38%, hsl(${h} 25% 70%) 0 22%, transparent 23%), radial-gradient(ellipse at 50% 100%, hsl(${h} 30% 45%) 0 45%, hsl(${h} 15% 25%) 46%)`;
  el.innerHTML = R.map(r => {
    const m = r.msgs;
    const rows = m.map((x, i) => {
      const [w, t, h] = x;
      if (w === 'd') return `<div class="date">${t}</div>`;
      const same = j => m[j] && m[j][0] === w;
      const g = same(i - 1) && same(i + 1) ? 'gm' : same(i + 1) ? 'gs' : same(i - 1) ? 'ge' : '';
      const av = w === 'i' ? (!same(i + 1) ? `<span class="mini" style="${face(r.hue)}"></span>` : '<span class="sp"></span>') : '';
      return `<div class="row ${w === 'i' ? 'in' : 'out'} ${g}">${av}<div class="b${h ? ' h' : ''}">${t}${h ? '<span class="rx">❤️</span>' : ''}</div></div>`;
    }).join('');
    return `<div><p class="rev-what">${r.what}</p><div class="dm">
      <div class="bar">${ICON.back}<span class="av"><span style="${face(r.hue)}"></span></span>
        <span class="nm"><b>${fake(9)}</b><small>${fake(6)}_.${fake(3)}</small></span>
        <span class="icons">${ICON.call}${ICON.video}</span></div>
      <div class="body">${rows}<span class="seen">Seen</span></div>
      <div class="foot"><i>${ICON.cam}</i>Message...</div>
    </div></div>`;
  }).join('');
  return true;
};

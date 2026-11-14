// Rasael business settings, shared by the home page and the order form.
// Change a price or the WhatsApp number here and it updates everywhere.
window.RASAEL = {
  whatsapp: '963983896568',        // orders arrive here: international format, no + or spaces
  instagram: 'rasael.studio',
  prices: {
    gift: [                        // love letter / proposal / birthday / Eid pages
      { id: 'popular', name: 'الأكثر طلباً', price: 1000, desc: 'الأسماء ورسالتك + موسيقى + صور + مفاجأة تفاعلية', best: true },
      { id: 'premium', name: 'مميز', price: 1000, was: 1500, desc: '+ نكتبلك الرسالة + كلمة سر + أولوية بالتسليم' },   // Black Friday: 1000 instead of 1500 until offer.until
    ],
    wrapped: [                     // «ملخّص حبّنا»: one complete package
      { id: 'wrapped', name: 'ملخّص حبّنا', price: 1500, desc: 'ستوري كاملة: السما ليلة ما التقيتو، صوركن، كويز، كرت خدش فيه وعد، موسيقى خاصة وكلمة سر… ونحنا منكتب كل شي', best: true },
    ],
    wedding: [
      { id: 'basic', name: 'أساسي', price: 1000, desc: 'الأسماء، الآية، التاريخ هجري وميلادي، الموقع' },
      { id: 'popular', name: 'الأكثر طلباً', price: 2000, desc: '+ تأكيد الحضور عبر واتساب + موسيقى + عدّاد', best: true },
      { id: 'premium', name: 'مميز', price: 3500, desc: '+ رابط باسم كل ضيف + ألوان حسب طلبك + ستوري مطابقة' },
    ],
  },
};
// Black Friday offer: shown on the home page and the order form; after 'until' every price goes back to 'was' by itself
window.RASAEL.offer = { text: 'بلاك فرايدي: الباقة الكاملة بـ١٠٠٠ ل.س بدل ١٥٠٠', sub: 'لآخر تشرين التاني', until: '2026-11-30T23:59:59+03:00' };
window.RASAEL.offerOn = Date.now() < new Date(window.RASAEL.offer.until).getTime();
if (!window.RASAEL.offerOn) Object.values(window.RASAEL.prices).forEach(ts => ts.forEach(p => { if (p.was) { p.price = p.was; delete p.was; } }));
window.RASAEL.fmt = n => new Intl.NumberFormat('ar-SY-u-nu-arab').format(n) + ' ل.س';

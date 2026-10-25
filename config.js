// Rasael business settings, shared by the home page and the order form.
// Change a price or the WhatsApp number here and it updates everywhere.
window.RASAEL = {
  whatsapp: '963983896568',        // orders arrive here: international format, no + or spaces
  instagram: 'rasael.studio',
  prices: {
    gift: [                        // love letter / proposal / birthday / Eid pages
      { id: 'basic', name: 'أساسي', price: 500, desc: 'الأسماء ورسالتك بتصميم جاهز' },
      { id: 'popular', name: 'الأكثر طلباً', price: 1000, desc: '+ موسيقى + صور + مفاجأة تفاعلية', best: true },
      { id: 'premium', name: 'مميز', price: 1500, desc: '+ نكتبلك الرسالة + كلمة سر + أولوية بالتسليم' },
    ],
    wedding: [
      { id: 'basic', name: 'أساسي', price: 1000, desc: 'الأسماء، الآية، التاريخ هجري وميلادي، الموقع' },
      { id: 'popular', name: 'الأكثر طلباً', price: 2000, desc: '+ تأكيد الحضور عبر واتساب + موسيقى + عدّاد', best: true },
      { id: 'premium', name: 'مميز', price: 3500, desc: '+ رابط باسم كل ضيف + ألوان حسب طلبك + ستوري مطابقة' },
    ],
  },
};
window.RASAEL.fmt = n => new Intl.NumberFormat('ar-SY-u-nu-arab').format(n) + ' ل.س';

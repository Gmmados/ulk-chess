'use strict';
const arabic = {
  skip:'انتقل إلى المحتوى',navAbout:'عن النادي',navMoments:'لحظاتنا',navJoin:'انضم للنادي على Chess.com',eyebrow:'جامعة كيغالي المستقلة',hero1:'عقول تلتقي.',hero2:'ونقلات تُلهم.',heroDescription:'رقعة شطرنج، حديث ممتع، وصداقة جديدة. اكتشف مجتمعك في نادي الشطرنج بجامعة ULK، نقلة بعد نقلة.',joinWhatsapp:'انضم إلينا عبر واتساب',seeMoments:'تعرّف على مجتمعنا',welcome:'مباراتك الأولى أو بطولتك القادمة، مكانك بيننا.',photoLabel:'مباريات حقيقية. صداقات حقيقية.',inset:'أكثر من مجرد لعبة.',location:'ULK · كيغالي، رواندا',openToAll:'كل المستويات. مجتمع واحد.',aboutEyebrow:'مكانك حول الرقعة',aboutTitle:'تعال من أجل الشطرنج.<br>وابقَ من أجل الأصدقاء.',aboutDescription:'نحن مجتمع متنامٍ من محبّي الشطرنج في جامعة ULK. من بطولاتنا الأولى إلى الصداقات التي بدأت حول الرقعة، يجمعنا شغف اللعبة، ونتطلع إلى استقبال لاعبين جدد.',aboutExtra:'تتعلّم حركة القطع لأول مرة؟ أم تفكّر في نقلتك الخامسة القادمة؟ خذ مكانك، ولنكتب الفصل القادم من حكاية نادينا معًا.',value1:'العب.',value1Text:'استمتع بالتحدّي الودّي وحماس مباراة جميلة.',value2:'تعلّم.',value2Text:'تبادل الأفكار، واكتشف نقلات جديدة، وتطوّر معنا.',value3:'تواصل.',value3Text:'تعرّف على طلاب يشاركونك الفضول والشغف بالشطرنج.',momentsEyebrow:'من بطولات النادي السابقة',momentsTitle:'نقلات ولحظات لا تُنسى.',momentsDescription:'قليل من المنافسة.<br>وكثير من الألفة.',caption5:'شغف يجمعنا',caption4:'لحظات تستحق الاحتفال',caption1:'لكل نقلة قيمتها',caption2:'هدوء يسبق النقلة',caption3:'على جانبي الرقعة',caption6:'من أجل حب الشطرنج',quote:'الشطرنج هو كل شيء:<br>فنّ وعلم ورياضة.',quoteName:'أناتولي كاربوف',quoteRole:'بطل العالم في الشطرنج',joinEyebrow:'ابدأ بنقلتك الأولى',joinTitle:'لك مكان بيننا.',joinDescription:'كن جزءًا من خطوتنا القادمة. تواصل مع محمد عبر واتساب للتعبير عن اهتمامك ومعرفة كيفية الانضمام.',joinNote:'كل المستويات مرحّب بها. أحضر فضولك فقط.',footerLine:'نقلتك القادمة تبدأ هنا.',university:'جامعة كيغالي المستقلة<br>كيغالي، رواندا',studentCommunity:'مجتمع طلابي متنامٍ لمحبّي الشطرنج.'
};
const nodes = [...document.querySelectorAll('[data-i18n]')];
const english = Object.fromEntries(nodes.map(node => [node.dataset.i18n, node.innerHTML]));
const languageButton = document.querySelector('.language');
const photoAlts = [
 'طلاب يلعبون الشطرنج وكأس البطولة في مقدمة الصورة', 'مشاركان يحتفلان بكأس بطولة الشطرنج',
 'أربعة مشاركين في البطولة يلتقطون صورة مع الكأس', 'مشاركان يحتفلان بكأس البطولة',
 'لاعبون يتأملون الوضع على رقعة شطرنج خشبية', 'طلاب يركّزون أثناء مباراة شطرنج في قاعة بالجامعة',
 'مباراة شطرنج على رقعة خشبية', 'مباراة في البطولة وكأس ذهبي بجانب الرقعة'
];
const photos = [...document.querySelectorAll('.hero-visual img, .gallery img')];
const originalAlts = photos.map(img => img.alt);
function setLanguage(lang) {
  const isArabic = lang === 'ar';
  document.documentElement.lang = isArabic ? 'ar' : 'en';
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  nodes.forEach(node => { node.innerHTML = (isArabic ? arabic : english)[node.dataset.i18n]; });
  languageButton.innerHTML = isArabic ? 'English <span aria-hidden="true">◎</span>' : 'العربية <span aria-hidden="true">◎</span>';
  languageButton.lang = isArabic ? 'en' : 'ar';
  languageButton.setAttribute('aria-label', isArabic ? 'Switch to English' : 'التبديل إلى العربية');
  document.querySelector('nav').setAttribute('aria-label', isArabic ? 'التنقّل الرئيسي' : 'Main navigation');
  document.querySelector('.brand').setAttribute('aria-label', isArabic ? 'الصفحة الرئيسية لنادي ULK للشطرنج' : 'ULK Chess Club home');
  document.querySelector('.hero-bottom a').setAttribute('aria-label', isArabic ? 'اكتشف النادي' : 'Discover the club');
  document.querySelector('.corner-note').innerHTML = isArabic ? '٦٤ مربعًا.<br>وإمكانيات بلا حدود.' : '64 SQUARES.<br>ENDLESS POSSIBILITIES.';
  photos.forEach((img, index) => { img.alt = isArabic ? photoAlts[index] : originalAlts[index]; });
  const message = isArabic ? 'مرحبًا محمد، أرغب في الانضمام إلى نادي الشطرنج بجامعة ULK.' : 'Hi Mohamed! I would like to join the ULK Chess Club.';
  document.querySelectorAll('.whatsapp').forEach(link => { link.href = 'https://wa.me/250796883243?text=' + encodeURIComponent(message); });
  document.title = isArabic ? 'نادي ULK للشطرنج — نقلتك القادمة تبدأ هنا' : 'ULK Chess Club — Your next move starts here';
  document.querySelector('meta[name="description"]').content = isArabic ? 'تعرّف على نادي الشطرنج بجامعة ULK في كيغالي. العب وتعلّم وتواصل مع زملائك. نرحّب بكل المستويات. انضم إلينا عبر واتساب.' : 'Meet the ULK Chess Club in Kigali. Play, learn and connect with fellow students. Beginners and experienced players are welcome. Join us through WhatsApp.';
  try { localStorage.setItem('ulk-chess-language', lang); } catch { /* Language switching also works when storage is unavailable. */ }
}
languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'ar' : 'en'));
let initialLanguage = 'en';
try { initialLanguage = localStorage.getItem('ulk-chess-language') === 'ar' ? 'ar' : 'en'; } catch { /* Use English by default. */ }
setLanguage(initialLanguage);

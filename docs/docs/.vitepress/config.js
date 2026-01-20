import { defineConfig } from 'vitepress'

// Shared sidebar configuration
const modelSidebar = (lang = '') => [
  {
    text: lang === 'es' ? 'El Modelo Soteria' : lang === 'so' ? 'Qaabka Soteria' : lang === 'ar' ? 'نموذج سوتيريا' : 'The Soteria Model',
    items: [
      { text: lang === 'es' ? 'Resumen' : lang === 'so' ? 'Guud mar' : lang === 'ar' ? 'نظرة عامة' : 'Overview', link: `${lang ? '/' + lang : ''}/model/` },
      { text: lang === 'es' ? 'Principios Fundamentales' : lang === 'so' ? 'Mabaadi\'da Aasaasiga' : lang === 'ar' ? 'المبادئ الأساسية' : 'Core Principles', link: `${lang ? '/' + lang : ''}/model/principles` },
      { text: lang === 'es' ? 'Estructura Celular' : lang === 'so' ? 'Qaab-dhismeedka Unugyada' : lang === 'ar' ? 'هيكل الخلية' : 'Cell Structure', link: `${lang ? '/' + lang : ''}/model/cells` },
      { text: lang === 'es' ? 'Segmentos' : lang === 'so' ? 'Qaybaha' : lang === 'ar' ? 'الأقسام' : 'Segments', link: `${lang ? '/' + lang : ''}/model/segments` },
      { text: lang === 'es' ? 'Roles de Coordinación' : lang === 'so' ? 'Doorarka Isuduwaha' : lang === 'ar' ? 'أدوار المنسقين' : 'Steward Roles', link: `${lang ? '/' + lang : ''}/model/stewards` },
      { text: lang === 'es' ? 'Confianza y Aval' : lang === 'so' ? 'Kalsooni & Dammaanad' : lang === 'ar' ? 'الثقة والتزكية' : 'Trust & Vouching', link: `${lang ? '/' + lang : ''}/model/trust` },
      { text: lang === 'es' ? 'Escalamiento' : lang === 'so' ? 'Kobcin' : lang === 'ar' ? 'التوسع' : 'Scaling', link: `${lang ? '/' + lang : ''}/model/scaling` },
    ],
  },
]

const rightsSidebar = (lang = '') => [
  {
    text: lang === 'es' ? 'Conoce Tus Derechos' : lang === 'so' ? 'Ogow Xuquuqdaada' : lang === 'ar' ? 'اعرف حقوقك' : 'Know Your Rights',
    items: [
      { text: lang === 'es' ? 'Resumen' : lang === 'so' ? 'Guud mar' : lang === 'ar' ? 'نظرة عامة' : 'Overview', link: `${lang ? '/' + lang : ''}/rights/` },
      { text: lang === 'es' ? 'En Casa' : lang === 'so' ? 'Guriga' : lang === 'ar' ? 'في المنزل' : 'At Home', link: `${lang ? '/' + lang : ''}/rights/at-home` },
      { text: lang === 'es' ? 'En Público' : lang === 'so' ? 'Meel Dadweyne' : lang === 'ar' ? 'في الأماكن العامة' : 'In Public', link: `${lang ? '/' + lang : ''}/rights/in-public` },
      { text: lang === 'es' ? 'En el Trabajo' : lang === 'so' ? 'Shaqada' : lang === 'ar' ? 'في العمل' : 'At Work', link: `${lang ? '/' + lang : ''}/rights/at-work` },
      { text: lang === 'es' ? 'Durante una Parada de Tráfico' : lang === 'so' ? 'Joojinta Taraafikada' : lang === 'ar' ? 'عند إيقاف السيارة' : 'During a Traffic Stop', link: `${lang ? '/' + lang : ''}/rights/traffic-stop` },
      { text: lang === 'es' ? 'Si Es Detenido' : lang === 'so' ? 'Haddii Lagu Xidho' : lang === 'ar' ? 'إذا تم احتجازك' : 'If Detained', link: `${lang ? '/' + lang : ''}/rights/if-detained` },
      { text: lang === 'es' ? 'Tarjetas para Imprimir' : lang === 'so' ? 'Kaadhadhka Daabacaadda' : lang === 'ar' ? 'بطاقات للطباعة' : 'Printable Cards', link: `${lang ? '/' + lang : ''}/rights/print-cards` },
    ],
  },
]

const startCellSidebar = (lang = '') => [
  {
    text: lang === 'es' ? 'Iniciar una Célula' : lang === 'so' ? 'Bilaw Unug' : lang === 'ar' ? 'ابدأ خلية' : 'Start a Cell',
    items: [
      { text: lang === 'es' ? 'Resumen' : lang === 'so' ? 'Guud mar' : lang === 'ar' ? 'نظرة عامة' : 'Overview', link: `${lang ? '/' + lang : ''}/start-a-cell/` },
      { text: lang === 'es' ? 'Equipo Fundador' : lang === 'so' ? 'Kooxda Aasaasiga' : lang === 'ar' ? 'الفريق المؤسس' : 'Founding Team', link: `${lang ? '/' + lang : ''}/start-a-cell/founding-team` },
      { text: lang === 'es' ? 'Configurar Signal' : lang === 'so' ? 'Dejinta Signal' : lang === 'ar' ? 'إعداد Signal' : 'Setting Up Signal', link: `${lang ? '/' + lang : ''}/start-a-cell/signal-setup` },
      { text: lang === 'es' ? 'Proceso de Incorporación' : lang === 'so' ? 'Habka Soo-dhoweynta' : lang === 'ar' ? 'عملية الانضمام' : 'Onboarding Process', link: `${lang ? '/' + lang : ''}/start-a-cell/onboarding` },
      { text: lang === 'es' ? 'Plantillas' : lang === 'so' ? 'Qaabayn' : lang === 'ar' ? 'النماذج' : 'Templates', link: `${lang ? '/' + lang : ''}/start-a-cell/templates` },
    ],
  },
]

const securitySidebar = (lang = '') => [
  {
    text: lang === 'es' ? 'Manual de Seguridad' : lang === 'so' ? 'Buugga Amniga' : lang === 'ar' ? 'دليل الأمان' : 'Security Handbook',
    items: [
      { text: lang === 'es' ? 'Resumen' : lang === 'so' ? 'Guud mar' : lang === 'ar' ? 'نظرة عامة' : 'Overview', link: `${lang ? '/' + lang : ''}/security/` },
      { text: lang === 'es' ? 'Seguridad del Dispositivo' : lang === 'so' ? 'Amniga Qalabka' : lang === 'ar' ? 'أمان الجهاز' : 'Device Security', link: `${lang ? '/' + lang : ''}/security/devices` },
      { text: lang === 'es' ? 'Seguridad en Comunicaciones' : lang === 'so' ? 'Amniga Isgaarsiinta' : lang === 'ar' ? 'أمان الاتصالات' : 'Communication OpSec', link: `${lang ? '/' + lang : ''}/security/communication` },
      { text: lang === 'es' ? 'Seguridad Física' : lang === 'so' ? 'Amniga Jirka' : lang === 'ar' ? 'الأمان المادي' : 'Physical Security', link: `${lang ? '/' + lang : ''}/security/physical` },
      { text: lang === 'es' ? 'Si Hay Compromiso' : lang === 'so' ? 'Haddii La Khalkhalgeliyo' : lang === 'ar' ? 'إذا تم الاختراق' : 'If Compromised', link: `${lang ? '/' + lang : ''}/security/compromise` },
    ],
  },
]

export default defineConfig({
  title: 'Soteria Model',
  description: 'A community safety and mutual aid blueprint for protecting vulnerable populations',

  // For custom domain (soteriamodel.com), base should be '/'
  // If deploying to github.io/soteria-model, change to '/soteria-model/'
  base: '/',

  head: [
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'theme-color', content: '#4a7c59' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    es: {
      label: 'Español',
      lang: 'es',
      title: 'Modelo Soteria',
      description: 'Un modelo replicable de seguridad comunitaria y ayuda mutua para proteger poblaciones vulnerables',
    },
    so: {
      label: 'Soomaali',
      lang: 'so',
      title: 'Qaabka Soteria',
      description: 'Qorshe la nuqul karo oo ah badbaadada bulshada iyo kaalmada labada dhinac ee ilaalinta dadka nugul',
    },
    ar: {
      label: 'العربية',
      lang: 'ar',
      dir: 'rtl',
      title: 'نموذج سوتيريا',
      description: 'نموذج قابل للتكرار لسلامة المجتمع والمساعدة المتبادلة لحماية الفئات الضعيفة',
    },
  },

  themeConfig: {
    siteTitle: 'Soteria Model',
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'The Model', link: '/model/' },
      { text: 'Know Your Rights', link: '/rights/' },
      { text: 'Get Support', link: '/get-support/' },
      { text: 'Support Businesses', link: '/business-support/' },
      { text: 'Start a Cell', link: '/start-a-cell/' },
      { text: 'Security', link: '/security/' },
    ],

    sidebar: {
      '/model/': modelSidebar(),
      '/rights/': rightsSidebar(),
      '/start-a-cell/': startCellSidebar(),
      '/security/': securitySidebar(),
      '/es/model/': modelSidebar('es'),
      '/es/rights/': rightsSidebar('es'),
      '/es/start-a-cell/': startCellSidebar('es'),
      '/es/security/': securitySidebar('es'),
      '/so/model/': modelSidebar('so'),
      '/so/rights/': rightsSidebar('so'),
      '/so/start-a-cell/': startCellSidebar('so'),
      '/so/security/': securitySidebar('so'),
      '/ar/model/': modelSidebar('ar'),
      '/ar/rights/': rightsSidebar('ar'),
      '/ar/start-a-cell/': startCellSidebar('ar'),
      '/ar/security/': securitySidebar('ar'),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mkokes/soteria-model' },
    ],

    footer: {
      message: 'A replicable blueprint for community safety. Fork it. Adapt it. Protect each other.',
      copyright: 'Released under CC BY-SA 4.0 | No tracking. No data collection.',
    },

    search: {
      provider: 'local',
    },
  },
})


// Simple dictionary for English and Traditional Chinese
export const dictionary = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      contact: "Contact",
      quote: "Get a Quote",
    },
    hero: {
      title_prefix: "Connecting Global Markets with",
      title_highlight: "Hong Kong Efficiency",
      subtitle: "Your trusted partner in import/export solutions since 2010. We bridge the gap between Eastern manufacturing and Western markets.",
      cta_services: "Explore Services",
      cta_contact: "Contact Us",
    },
    trust: {
      label: "Trusted by industry leaders globally",
    },
    services: {
      title: "Comprehensive Trade Solutions",
      subtitle: "End-to-end services designed to streamline your supply chain and ensure quality.",
      sourcing: {
        title: "Sourcing & Procurement",
        desc: "Leveraging our vast network in Greater Bay Area to find the best suppliers for your needs.",
      },
      logistics: {
        title: "Logistics & Shipping",
        desc: "Seamless freight forwarding and customs clearance solutions to get your goods delivered on time.",
      },
      qc: {
        title: "Quality Inspection",
        desc: "Rigorous on-site quality control to ensure your products meet international standards.",
      },
      learn_more: "Learn more",
    },
    why_us: {
      title: "Why Partner with Harbour Trade?",
      subtitle: "We combine local expertise with international standards to deliver a seamless trading experience.",
      points: [
        "Hong Kong Based, Global Reach",
        "10+ Years of Industry Experience",
        "Multilingual Team (English, Mandarin, Cantonese)",
        "Verified Supplier Network",
      ],
      cta: "More About Us",
      stats_title: "500+",
      stats_desc: "Successful Shipments This Year",
    },
    cta_section: {
      title: "Ready to Streamline Your Sourcing?",
      subtitle: "Stop worrying about logistics and quality control. Let us handle the complexities while you focus on growing your business.",
      button: "Request a Free Quote",
    },
    booking: {
      title: "Schedule a Visit",
      desc: "Select a time that works for you to visit our office or discuss your needs.",
      btn: "Book Visit",
    },
    social: {
      wechat_scan: "Scan to add WeChat",
    },
  },
  zh: {
    nav: {
      home: "首頁",
      about: "關於我們",
      services: "服務介紹",
      contact: "聯繫我們",
      quote: "獲取報價",
    },
    hero: {
      title_prefix: "連接全球市場，展現",
      title_highlight: "香港效率",
      subtitle: "自2010年起，我們是您值得信賴的進出口合作夥伴。我們致力於搭建東方製造與西方市場之間的橋樑。",
      cta_services: "探索服務",
      cta_contact: "聯繫我們",
    },
    trust: {
      label: "深受全球行業領袖信賴",
    },
    services: {
      title: "全方位貿易解決方案",
      subtitle: "端到端的服務設計，旨在優化您的供應鏈並確保產品質量。",
      sourcing: {
        title: "採購與供應鏈",
        desc: "利用我們在大灣區的龐大網絡，為您尋找最合適的供應商。",
      },
      logistics: {
        title: "物流與航運",
        desc: "無縫的貨運代理和清關解決方案，確保您的貨物按時送達。",
      },
      qc: {
        title: "質量檢驗",
        desc: "嚴格的現場質量控制，確保您的產品符合國際標準。",
      },
      learn_more: "了解更多",
    },
    why_us: {
      title: "為什麼選擇 Harbour Trade？",
      subtitle: "我們結合本地專業知識與國際標準，提供無縫的貿易體驗。",
      points: [
        "立足香港，放眼全球",
        "10年以上行業經驗",
        "多語言團隊（英語、普通話、粵語）",
        "經認證的供應商網絡",
      ],
      cta: "更多關於我們",
      stats_title: "500+",
      stats_desc: "本年度成功出貨",
    },
    cta_section: {
      title: "準備好優化您的採購流程了嗎？",
      subtitle: "不再為物流和質量控制煩惱。讓我們處理複雜事務，您專注於業務增長。",
      button: "免費獲取報價",
    },
    booking: {
      title: "預約參觀",
      desc: "選擇適合您的時間來訪我們的辦公室或討論您的需求。",
      btn: "預約參觀",
    },
    social: {
      wechat_scan: "掃描二維碼添加微信",
    },
  },
};

export type Language = "en" | "zh";
export type Dictionary = typeof dictionary.en;

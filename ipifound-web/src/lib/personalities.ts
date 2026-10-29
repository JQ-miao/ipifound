export type Personality = {
  id: string;
  name: string;
  title: string;
  tags: string[];
  description: string;
  brandBox: string;
  quote: string;
  luckyColor: string;
  luckyColorName: string;
};

export const PERSONALITIES: Personality[] = [
  {
    id: "rat",
    name: "鼠",
    title: "不解释只沉淀的 隐形操盘手",
    tags: ["#安静的力量", "#认同感"],
    description:
      "鼠型品牌像一位隐形操盘手：低调、稳当，不追热点、不抢风头，却总能在关键处落子。它相信积累的力量，用细节和时间换取信任，让真正懂的人留下来。",
    brandBox:
      "适合决策周期较长、不需要高流量曝光、靠口碑与复购沉淀的品牌；例如精工小众消费品、社区型服务、内容驱动的长期品牌。",
    quote: "安静，但没人敢忽略 ——王向钱",
    luckyColor: "#7c5cff",
    luckyColorName: "沉淀紫",
  },
  {
    id: "ox",
    name: "牛",
    title: "一步一个脚印的 务实建造者",
    tags: ["#稳", "#可靠"],
    description:
      "牛型品牌讲究踏实与可靠，不投机、不取巧，把每一件事做到位。它用厚实的品质和长期主义赢得市场，是那种越用越放心的存在。",
    brandBox:
      "适合强调品质、工艺、长期承诺的品牌；例如制造、建材、农业、本地服务类需要建立信任的品牌。",
    quote: "慢一点，但每一步都算数 ——牛实",
    luckyColor: "#2e7d32",
    luckyColorName: "踏实绿",
  },
  {
    id: "tiger",
    name: "虎",
    title: "敢为人先的 破局者",
    tags: ["#魄力", "#引领"],
    description:
      "虎型品牌天生带着气场，敢做别人不敢做的事。它喜欢打破常规、重新定义赛道，用强势与自信吸引同频的追随者。",
    brandBox:
      "适合需要强差异化、引领品类、抢占心智的新锐品牌；例如潮流运动、科技新品类、态度型消费品牌。",
    quote: "先出手，再说话 ——虎跃",
    luckyColor: "#ff5722",
    luckyColorName: "破局橙",
  },
  {
    id: "rabbit",
    name: "兔",
    title: "温柔有分寸的 陪伴者",
    tags: ["#治愈", "#细腻"],
    description:
      "兔型品牌柔软、细腻、有分寸感，擅长用温度打动人。它不喧哗，却让人在细节里感到被照顾，是生活里那一抹让人安心的存在。",
    brandBox:
      "适合注重体验、情感连接、生活美学的品牌；例如母婴、护肤、家居、轻餐饮等需要温度的品牌。",
    quote: "把温柔，做成习惯 ——兔柔",
    luckyColor: "#ec407a",
    luckyColorName: "温柔粉",
  },
  {
    id: "dragon",
    name: "龙",
    title: "自带光环的 领航者",
    tags: ["#气场", "#格局"],
    description:
      "龙型品牌天生自带光环，格局大、目标远。它追求成为标杆而非跟随者，用愿景与实力凝聚团队和市场，是行业里被仰望的存在。",
    brandBox:
      "适合有行业野心、要做品类标杆、需要强品牌势能的品牌；例如集团品牌、高端品类、平台型品牌。",
    quote: "要做，就做被仰望的那个 ——龙远",
    luckyColor: "#f9a825",
    luckyColorName: "领航金",
  },
  {
    id: "snake",
    name: "蛇",
    title: "洞察先机的 隐智者",
    tags: ["#敏锐", "#策略"],
    description:
      "蛇型品牌敏锐、冷静、有策略感，擅长在变化中找到先机。它不轻易出手，但一旦出手就精准，用洞察和节奏掌控局面。",
    brandBox:
      "适合需要差异化策略、精准定位、轻资产高毛利的品牌；例如咨询、设计、金融、精品内容品牌。",
    quote: "看准了，才出手 ——蛇知",
    luckyColor: "#00897b",
    luckyColorName: "洞察青",
  },
  {
    id: "horse",
    name: "马",
    title: "一路向前的 奔跑者",
    tags: ["#速度", "#自由"],
    description:
      "马型品牌追求速度与自由，行动力强、反应快。它喜欢在奔跑中调整姿态，用效率和活力抢占市场，是停不下来的进取者。",
    brandBox:
      "适合节奏快、需要快速扩张、强执行力的品牌；例如电商、连锁、快消、活动型品牌。",
    quote: "跑起来，风自然会来 ——马驰",
    luckyColor: "#1976d2",
    luckyColorName: "奔跑蓝",
  },
  {
    id: "goat",
    name: "羊",
    title: "温和有韧性的 守艺人",
    tags: ["#匠心", "#温度"],
    description:
      "羊型品牌温和、有韧性，讲究匠心与温度。它不争不抢，却把工艺和细节打磨到极致，用时间和耐心换来不可替代的质感。",
    brandBox:
      "适合强调手作、工艺、文化传承的品牌；例如文创、手作食品、独立设计、在地文化品牌。",
    quote: "慢工，才出细活 ——羊守",
    luckyColor: "#8d6e63",
    luckyColorName: "守艺棕",
  },
  {
    id: "monkey",
    name: "猴",
    title: "灵动机变的 创新者",
    tags: ["#创意", "#灵动"],
    description:
      "猴型品牌灵动、机变、点子多，最擅长在规则边缘玩出新花样。它用创意和趣味吸引注意力，让品牌始终保有新鲜感和话题度。",
    brandBox:
      "适合需要持续创新、强内容、强互动的品牌；例如潮玩、娱乐、社交产品、营销型品牌。",
    quote: "好玩，也是一种实力 ——猴灵",
    luckyColor: "#fbc02d",
    luckyColorName: "灵动黄",
  },
  {
    id: "rooster",
    name: "鸡",
    title: "准时又精致的 表达者",
    tags: ["#精致", "#表达"],
    description:
      "鸡型品牌注重形象与表达，准时、精致、有仪式感。它懂得把好东西好好讲出来，用审美和节奏让品牌被看见、被记住。",
    brandBox:
      "适合注重形象表达、视觉与传播的品牌；例如时尚、美妆、媒体内容、活动策划类品牌。",
    quote: "把好东西，好好讲出来 ——鸡鸣",
    luckyColor: "#c62828",
    luckyColorName: "表达红",
  },
  {
    id: "dog",
    name: "狗",
    title: "忠诚有担当的 守护者",
    tags: ["#信任", "#担当"],
    description:
      "狗型品牌忠诚、可靠、有担当，把信任看得最重。它用长期一致的服务和承诺建立关系，是用户愿意托付和长期相伴的存在。",
    brandBox:
      "适合强调服务、保障、长期关系的品牌；例如保险、家政、宠物、社区服务类品牌。",
    quote: "被信任，是最长情的告白 ——狗守",
    luckyColor: "#5d4037",
    luckyColorName: "守护棕",
  },
  {
    id: "pig",
    name: "猪",
    title: "富足又松弛的 享乐者",
    tags: ["#丰盛", "#松弛"],
    description:
      "猪型品牌带着富足与松弛感，讲究把日子过好、把体验做足。它用舒适和满足打动人，让品牌成为生活里被期待的小确幸。",
    brandBox:
      "适合强调体验、享受、生活方式的品牌；例如餐饮、休闲、礼品、生活方式类品牌。",
    quote: "把好日子，过成日常 ——猪乐",
    luckyColor: "#6a1b9a",
    luckyColorName: "丰盛紫",
  },
];

export function getPersonality(id: string | undefined): Personality {
  return (
    PERSONALITIES.find((personality) => personality.id === id) ?? PERSONALITIES[0]
  );
}

import { SiteHeader } from "@/components/home/SiteHeader";
import { TrackingEyes } from "@/components/service/TrackingEyes";

const STAGE_HEIGHT = 5876;

type Art = {
  src: string;
  x: number;
  y: number;
  w: number;
  h: number;
  alt?: string;
};

function ArtLayer({ src, x, y, w, h, alt = "" }: Art) {
  return (
    <img
      src={src}
      alt={alt}
      width={Math.round(w)}
      height={Math.round(h)}
      className="pointer-events-none absolute max-w-none"
      style={{ left: x, top: y, width: w, height: h }}
    />
  );
}

const FLOW: Art[] = [
  { src: "/figma/service/flow-1527.png", x: 618.35, y: 616.52, w: 446.29, h: 229.1 },
  { src: "/figma/service/flow-1600.png", x: 804.79, y: 659.76, w: 283.48, h: 235.79 },
  { src: "/figma/service/flow-1789.png", x: 578, y: 978, w: 399, h: 271 },
  { src: "/figma/service/flow-1964.png", x: 233, y: 1052, w: 181, h: 212 },
  { src: "/figma/service/flow-1886.png", x: 245, y: 1113, w: 583, h: 263 },
  { src: "/figma/service/flow-1998.png", x: 319, y: 1388, w: 213, h: 170 },
  { src: "/figma/service/flow-2069.png", x: 825, y: 1248, w: 361, h: 242 },
  { src: "/figma/service/flow-2255.png", x: 498, y: 1564, w: 177, h: 153 },
  { src: "/figma/service/flow-2189.png", x: 532, y: 1606, w: 290, h: 208 },
  { src: "/figma/service/flow-2294.png", x: 769, y: 1643, w: 389, h: 224 },
];

const CARDS: Art[] = [
  { src: "/figma/service/card-1.png", x: 365.84, y: 3534.63, w: 244.61, h: 233.47 },
  { src: "/figma/service/card-2.png", x: 625.29, y: 3534.63, w: 244.61, h: 233.47 },
  { src: "/figma/service/card-3.png", x: 891.03, y: 3534.63, w: 244.61, h: 233.47 },
  { src: "/figma/service/card-4.png", x: 365.84, y: 3783.1, w: 244.61, h: 233.47 },
  { src: "/figma/service/card-5.png", x: 625.29, y: 3783.1, w: 244.61, h: 233.47 },
  { src: "/figma/service/card-6.png", x: 891.03, y: 3783.1, w: 244.61, h: 233.47 },
];

const CARD_ART: Art[] = [
  { src: "/figma/service/illu-2.png", x: 661.2, y: 3548.5, w: 173.4, h: 117.27 },
  { src: "/figma/service/illu-3.png", x: 954.64, y: 3554.29, w: 139.05, h: 123.12 },
  { src: "/figma/service/illu-4.png", x: 435.47, y: 3805.68, w: 119.02, h: 106.87 },
  { src: "/figma/service/illu-5.png", x: 686.85, y: 3817.99, w: 160.14, h: 105.76 },
  { src: "/figma/service/illu-6.png", x: 964.91, y: 3808.68, w: 104.66, h: 103.44 },
];

const CARD_COPY = [
  {
    title: "丰富的灵感现货库",
    titleBox: [406.74, 3676.39, 165],
    lines: [
      ["我们有丰富的灵感现货库", 405.71, 3711.28],
      ["减少从0开始的时间", 420.08, 3731.8],
    ],
  },
  {
    title: "个性化筛选",
    titleBox: [700.04, 3675.37, 103],
    lines: [
      ["主理人可以个性化匹配", 667.21, 3711.28],
      ["快速找到最适合自己的", 670.29, 3731.8],
    ],
  },
  {
    title: "智能匹配方案",
    titleBox: [954.5, 3675.37, 124],
    lines: [
      ["系统结合匹配信息", 952.45, 3711.28],
      ["从灵感库里筛选出适合的方案", 916.68, 3731.8],
    ],
  },
  {
    title: "匹配后直接优化",
    titleBox: [418.03, 3923.84, 144],
    lines: [
      ["从结果出发，只需简单优化", 396.71, 3959.75],
      ["更快定稿", 461.08, 3980.27],
    ],
  },
  {
    title: "前置知产+落地保护",
    titleBox: [663.11, 3923.84, 175],
    lines: [
      ["鲲图智权提前做好初步检索工作", 642, 3960],
      ["加快推进注册流程", 689, 3980.52],
    ],
  },
  {
    title: "一站式更省心",
    titleBox: [954.5, 3923.84, 124],
    lines: [
      ["设计+知产有效协同", 950.45, 3959.75],
      ["减少沟通、提高效率、落地更快", 908.68, 3980.27],
    ],
  },
] as const;

function SvgMark({
  src,
  x,
  y,
  w,
  h,
}: {
  src: string;
  x: number;
  y: number;
  w: number;
  h: number;
}) {
  return (
    <img
      src={src}
      alt=""
      width={w}
      height={h}
      className="pointer-events-none absolute max-w-none"
      style={{ left: x, top: y, width: w, height: h }}
    />
  );
}

export function ServiceContent() {
  return (
    <div className="relative w-[1440px] text-ink" style={{ height: STAGE_HEIGHT }}>
      <ArtLayer
        src="/figma/service/origami.png"
        x={334.12}
        y={2968.2}
        w={776.48}
        h={617.95}
      />
      <ArtLayer src="/figma/service/about-bg.png" x={77} y={4229} w={1287} h={888} />
      <ArtLayer src="/figma/service/bg-process.png" x={0} y={144} w={1440} h={1890} />
      <ArtLayer src="/figma/service/wave.png" x={0} y={2492} w={1440} h={212} />
      <TrackingEyes />
      <ArtLayer src="/figma/service/hanger.png" x={640} y={-1} w={167} h={210.83} />

      <div id="process" className="absolute scroll-mt-[120px]" style={{ left: 220, top: 510 }} />
      {FLOW.map((layer) => (
        <ArtLayer key={layer.src} {...layer} />
      ))}
      <ArtLayer
        src="/figma/service/flow-title.png"
        alt="全服务流程"
        x={222.7}
        y={576.2}
        w={369}
        h={134}
      />
      <ArtLayer src="/figma/service/step-1.png" alt="1 主理人提出品牌名" x={623} y={535} w={225} h={46} />
      <ArtLayer src="/figma/service/step-2.png" alt="2 知识产权合伙人" x={1022} y={592} w={168} h={47} />
      <ArtLayer src="/figma/service/step-3.png" alt="3 主理人继续想名字" x={354} y={786} w={225} h={66} />
      <ArtLayer src="/figma/service/step-4.png" alt="4 在灵感现货中匹配方案" x={795} y={977} w={242} h={46} />
      <ArtLayer src="/figma/service/step-6.png" alt="6 知识产权合伙人" x={220} y={1288} w={251} h={109} />
      <ArtLayer src="/figma/service/step-7.png" alt="7 设计方案调整优化" x={903} y={1174} w={243} h={104} />
      <ArtLayer src="/figma/service/step-8.png" alt="8 方案成稿交付" x={494} y={1490} w={217} h={105} />
      <ArtLayer src="/figma/service/step-9.png" alt="9 品牌中涉及的相关保护上线" x={908} y={1556} w={264} h={47} />

      <div
        className="absolute w-[336px] text-[16px] leading-[1.5] font-medium"
        style={{ left: 935, top: 2076 }}
      >
        <p>你明明是老板，</p>
        <p>最后却活成了项目群里的“传话筒”。</p>
        <p>
          设计说好看，知产说有风险，供应商说做不了。
          <br />
          你每天都在：“好的，我再同步一下。”
        </p>
        <p>别同步了！</p>
        <p>我们把品牌设计、知识产权、</p>
        <p>IP内容、品牌落地放在一起协同。</p>
        <p>
          好看，有人管。
          <br />
          风险，有人看。
          <br />
          版权，有人护。
          <br />
          周边，有人做。
        </p>
        <p>少开几个群，少来回沟通，少一点</p>
        <p>“我再问问另外一边”。</p>
        <p>
          我们不是把服务做得更多，
          <br />
          而是让你做品牌的时候——
        </p>
        <p>少操点心，多像个老板。</p>
      </div>

      <ArtLayer
        src="/figma/service/advantage-panel.png"
        alt="我们的优势"
        x={220.96}
        y={1873.5}
        w={678.76}
        h={415.02}
      />
      <ArtLayer
        src="/figma/service/wave-character.png"
        x={577}
        y={2382}
        w={322.5}
        h={241.04}
      />

      <div id="advantages" className="absolute scroll-mt-[120px]" style={{ left: 504, top: 3125 }} />
      <ArtLayer
        src="/figma/service/title-advantage.png"
        alt="品牌建立服务优势"
        x={508.21}
        y={3126.41}
        w={444}
        h={54}
      />
      <ArtLayer
        src="/figma/service/logo-advantage.png"
        alt="iPiFound × 鲲图智权"
        x={612.97}
        y={3189.93}
        w={222.85}
        h={64.83}
      />
      <ArtLayer
        src="/figma/service/subtitle-advantage.png"
        alt="设计公司 × 知识产权公司联合，让品牌从灵感到保护更高效，更安心。"
        x={506.87}
        y={3281.26}
        w={456}
        h={60}
      />
      <a href="/inventory" className="absolute block" style={{ left: 564.05, top: 3402.04 }}>
        <img
          src="/figma/service/btn-advantage.png"
          alt="把复杂的工作提前备好"
          width={341}
          height={64}
          className="block max-w-none"
        />
      </a>

      <ArtLayer src="/figma/service/bubble-left.png" alt="好创意，更要被保护" x={307.21} y={2794} w={266} h={111} />
      <ArtLayer src="/figma/service/pal-left.png" x={349.28} y={2901.73} w={216.58} h={220.94} />
      <ArtLayer src="/figma/service/pal-right.png" x={891.03} y={2958.17} w={213.24} h={181.64} />
      <ArtLayer src="/figma/service/bubble-bl.png" alt="好品牌，从这里开始！" x={220} y={3425} w={222.26} h={169.33} />
      <ArtLayer src="/figma/service/bubble-br.png" alt="从结果出发，更高效！" x={997.74} y={3359.35} w={222.26} h={93.9} />

      {CARDS.map((card) => (
        <ArtLayer key={`${card.x}-${card.y}`} {...card} />
      ))}
      <ArtLayer src="/figma/service/illu-1a.png" x={466.25} y={3569.72} w={48.1} h={52.86} />
      <ArtLayer src="/figma/service/illu-1b.png" x={526.93} y={3601.49} w={47.12} h={44.43} />
      {CARD_ART.map((art) => (
        <ArtLayer key={art.src} {...art} />
      ))}
      {CARD_COPY.map((card) => (
        <div key={card.title}>
          <p
            className="font-hand absolute text-center text-[20.521px] leading-[21px] text-ink"
            style={{
              left: card.titleBox[0],
              top: card.titleBox[1],
              width: card.titleBox[2],
            }}
          >
            {card.title}
          </p>
          {card.lines.map(([text, x, y]) => (
            <p
              key={text}
              className="absolute text-[15.391px] leading-[23px] font-medium whitespace-nowrap"
              style={{ left: x, top: y }}
            >
              {text}
            </p>
          ))}
        </div>
      ))}

      <div id="about" className="absolute scroll-mt-[120px]" style={{ left: 551, top: 4117 }} />
      <ArtLayer
        src="/figma/service/title-about.png"
        alt="联合品牌介绍"
        x={553.5}
        y={4118.07}
        w={334}
        h={53}
      />
      <ArtLayer
        src="/figma/service/logo-about.png"
        alt="iPiFound × 鲲图智权"
        x={580.58}
        y={4309.15}
        w={278}
        h={86}
      />
      <SvgMark src="/figma/service/about/logo-left.svg" x={360} y={4477} w={105.335} h={19.171} />
      <SvgMark src="/figma/service/about/logo-right.svg" x={811.75} y={4477.75} w={94.942} h={23.789} />

      <div
        className="absolute w-[372px] text-[16px] leading-[1.6] font-medium"
        style={{ left: 357, top: 4522 }}
      >
        <p>我们是一家喜欢「发现」的公司。</p>
        <p>
          发现有趣的人，
          <br />
          发现新的审美，
          <br />
          发现没被认真对待的想法，
          <br />
          发现这个世界正在发生的一点点变化。
        </p>
        <p>把它们做成产品、设计、内容和体验。</p>
        <p>我们不太相信“所有事情本来就应该这样”。</p>
        <p>所以总喜欢多问一句：</p>
        <p>还有没有另一种可能？</p>
        <p>我们也不太想成为一家“正确”的公司。</p>
        <p>我们更想成为一家 有趣、有判断、有好奇心的公司。</p>
        <p>不因为大家都在做，就跟着做。</p>
        <p>不因为以前没人做，就不去做。</p>
        <p>IPIFOUND 不只是一个品牌。</p>
        <p>它是一种保持好奇的方法。</p>
        <p>
          Find something.
          <br />
          Make something.
          <br />
          Become something.
        </p>
      </div>
      <div
        className="absolute w-[368px] text-[16px] leading-[1.6] font-medium"
        style={{ left: 809, top: 4522 }}
      >
        <p>是一家让创意真正“属于你”的公司。</p>
        <p>我们相信，一个好名字、一套好设计、一个好想法，</p>
        <p>不应该只停留在“看起来不错”,</p>
        <p>更应该被确认、被保护，</p>
        <p>最终成为企业真正拥有的资产。</p>
        <p>所以，我们不只做商标、版权和知识产权服务，</p>
        <p>也和设计团队一起，</p>
        <p>从品牌诞生的第一步开始思考：它够不够独特？</p>
        <p>能不能被保护？未来能不能成为品牌的底气？</p>
        <p>我们不太想成为一家只帮客户递交材料、</p>
        <p>办理手续的公司，更希望成为一家懂设计、</p>
        <p>懂品牌，也懂知识产权的长期伙伴。</p>
        <p>让创意被看见，让品牌被记住，</p>
        <p>也让每一份认真创造的价值，都有清晰的归属。</p>
        <p className="h-[1.6em]" />
        <p>设计负责让品牌发生，</p>
        <p>我们负责让它真正属于你。</p>
      </div>

      <SvgMark src="/figma/service/about/ul-1.svg" x={475.53} y={4544.72} w={51.163} h={6.19} />
      <SvgMark src="/figma/service/about/ul-5.svg" x={942.82} y={4544.12} w={66.982} h={7.063} />
      <SvgMark src="/figma/service/about/ul-2.svg" x={350.96} y={4932.47} w={138.282} h={9.885} />
      <SvgMark src="/figma/service/about/ul-6.svg" x={806.31} y={4933.37} w={157.381} h={7.9} />
      <SvgMark src="/figma/service/about/ul-3.svg" x={352.51} y={4958.73} w={134.743} h={10.421} />
      <SvgMark src="/figma/service/about/ul-4.svg" x={351.12} y={4988.62} w={161.154} h={7.879} />
      <SvgMark src="/figma/service/about/ul-7.svg" x={804.4} y={4963.72} w={193.089} h={6.229} />

      <ArtLayer src="/figma/service/mascot-about.png" x={857.18} y={5034.12} w={106} h={145} />

      <div id="clients" className="absolute scroll-mt-[120px]" style={{ left: 220, top: 5247 }} />
      <ArtLayer src="/figma/service/mascot-clients.png" x={353} y={5222.5} w={160} h={105} />
      <ArtLayer
        src="/figma/service/title-clients.png"
        alt="服务过的上帝们"
        x={525.5}
        y={5248}
        w={390}
        h={54}
      />
      <ArtLayer
        src="/figma/service/clients-wall.png"
        alt="服务过的企业"
        x={220}
        y={5363}
        w={1001}
        h={436}
      />

      <div className="absolute inset-x-0 top-0 z-30">
        <SiteHeader active="service" />
      </div>
    </div>
  );
}

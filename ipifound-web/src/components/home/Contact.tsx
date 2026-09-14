export function Contact() {
  return (
    <section
      id="contact"
      className="flex items-start justify-center gap-6 bg-white py-[80px] pl-[120px] pr-[60px]"
    >
      <div className="font-contact w-[540px] shrink-0 text-ink">
        <p className="text-[24px] font-normal leading-[36px]">Contact Us</p>
        <h2 className="mt-[24px] text-[56px] font-bold leading-[1.3]">
          更多定制需求
          <br />
          欢迎扫码联系我们
        </h2>
      </div>

      <div className="flex items-start gap-9">
        <ContactCard
          title="微信客服"
          qrSrc="/figma/qr-wechat.png"
          qrAlt="微信客服二维码"
        />
        <ContactCard
          title="小红书"
          qrSrc="/figma/qr-xhs.png"
          qrAlt="小红书二维码"
        />
      </div>
    </section>
  );
}

function ContactCard({
  title,
  qrSrc,
  qrAlt,
}: {
  title: string;
  qrSrc: string;
  qrAlt: string;
}) {
  return (
    <div className="font-contact flex w-[268px] flex-col items-start gap-[27px] px-5 py-5 text-ink">
      <div className="flex flex-col items-start gap-[25px]">
        <p className="text-[22px] font-semibold leading-none">{title}</p>
        <div className="h-[3px] w-[27px] bg-ink" />
      </div>
      <img
        src={qrSrc}
        alt={qrAlt}
        className="h-[125px] w-[120px] rounded-[5px] object-cover"
        width={120}
        height={125}
      />
      <p className="w-[248px] text-[20px] leading-[32px]">
        在线时段 :
        <br />
        周一至周五9：00 - 20：00
      </p>
    </div>
  );
}

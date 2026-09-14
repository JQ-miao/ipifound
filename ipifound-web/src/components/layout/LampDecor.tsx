export function LampDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1440px]">
      <img
        src="/figma/lamp.svg"
        alt=""
        className="absolute left-[600px] top-0 h-[76px] w-[240px] max-w-none"
      />
      <img
        src="/figma/bulb.svg"
        alt=""
        className="absolute left-[677.5px] top-[39.5px] h-[61px] w-[85px] max-w-none"
      />
    </div>
  );
}

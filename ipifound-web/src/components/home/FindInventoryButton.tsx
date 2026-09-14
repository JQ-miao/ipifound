export function FindInventoryButton({ className }: { className?: string }) {
  return (
    <button
      type="submit"
      className={`font-display flex h-[81px] w-[261px] items-center justify-center rounded-[90px] bg-button text-[30px] leading-[0.9] text-white transition-opacity hover:opacity-90 ${className ?? ""}`}
    >
      查找库存
    </button>
  );
}

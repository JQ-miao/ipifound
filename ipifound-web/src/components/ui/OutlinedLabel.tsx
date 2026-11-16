import { asset } from "@/lib/asset";
import labels from "@/lib/design/outlined-labels.json";

export type OutlinedLabelId = keyof typeof labels;

/** Figma's original glyph outlines; the mask inherits hover/pressed text colors. */
export function OutlinedLabel({ name }: { name: OutlinedLabelId }) {
  const label = labels[name];
  const mask = `url("${asset(`/design/text/${name}.svg`)}")`;

  return (
    <span className="inline-flex shrink-0 items-center">
      <span className="sr-only">{label.text}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block shrink-0 bg-current"
        style={{
          width: label.width,
          height: label.height,
          maskImage: mask,
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskImage: mask,
          WebkitMaskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
        }}
      />
    </span>
  );
}

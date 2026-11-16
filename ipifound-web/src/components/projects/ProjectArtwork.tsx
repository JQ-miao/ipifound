import { asset } from "@/lib/asset";
import type { CSSProperties, ReactNode } from "react";

export type ArtworkNode = string | {
  tag: string;
  className?: string;
  src?: string;
  style?: CSSProperties;
  children?: ArtworkNode[];
};
export type ArtworkLayer = { x: number; y: number; w: number; h: number; content: ArtworkNode };

/** Render the exported Figma artwork layers in their original coordinate space. */
function Artwork({ node }: { node: ArtworkNode }): ReactNode {
  if (typeof node === "string") return node;
  const children = node.children?.map((child, i) => <Artwork key={i} node={child} />);
  if (node.tag === "img") return <img loading="lazy" decoding="async" src={asset(node.src!)} alt="" className={node.className} style={node.style} />;
  if (node.tag === "p") return <p className={node.className} style={node.style}>{children}</p>;
  if (node.tag === "span") return <span className={node.className} style={node.style}>{children}</span>;
  return <div className={node.className} style={node.style}>{children}</div>;
}
export function ProjectArtwork({ layers }: { layers: ArtworkLayer[] }) {
  return <div aria-hidden className="pointer-events-none absolute top-0 left-0 h-[3409px] w-[1440px]">
    {layers.map((layer, i) => <div key={i} className="absolute" style={{ left: layer.x, top: layer.y, width: layer.w, height: layer.h }}><Artwork node={layer.content} /></div>)}
  </div>;
}

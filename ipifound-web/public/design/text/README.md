Original outlined lettering copied as SVG from the Figma desktop application.
These files contain vector paths, not live font references or embedded bitmaps.

Source: https://www.figma.com/design/VlEGOK4hbegYGLXG2nQUlG/ipifound-copy-

- title-advantage: 201:2723
- subtitle-advantage: 201:2704
- service-cta: text override inside 201:2722
- search-label / back-label: shared button text components (201:8728 / 201:8817)
- category labels: shared 24 px case-navigation labels, also represented at
  201:10148, 201:10150, 201:10152, 201:10154, 201:10156, 201:10158

Button lettering is used as an alpha mask with currentColor, so the same asset
serves default, hover, pressed and selected states. The DOM retains accessible
text. Do not rasterize these assets in optimize-assets.mjs.

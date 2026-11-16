"""Generate WOFF2 delivery copies; requires fonttools[woff] (pip install fonttools brotli)."""
from pathlib import Path
from fontTools.ttLib import TTFont

root = Path(__file__).resolve().parent.parent / 'public/fonts'
before = after = 0
for source in sorted(root.glob('*.ttf')):
    font = TTFont(source)
    font.flavor = 'woff2'
    output = source.with_suffix('.woff2')
    font.save(output)
    before += source.stat().st_size
    after += output.stat().st_size
print(f'Fonts: {before / 1000:.0f} KB → {after / 1000:.0f} KB')

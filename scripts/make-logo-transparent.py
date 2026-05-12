"""
Removes the dark-teal background from arise-logo.png and writes
arise-logo-transparent.png with an alpha channel. Pixels close to the
sampled background color become fully transparent; everything else is
preserved, with a soft alpha falloff at the edges to avoid jaggies.
"""

from PIL import Image
import os

SRC = os.path.join(
    os.path.dirname(__file__),
    "..",
    "public",
    "images",
    "logo",
    "arise-logo.png",
)
DST = os.path.join(
    os.path.dirname(__file__),
    "..",
    "public",
    "images",
    "logo",
    "arise-logo-transparent.png",
)


def color_distance(p, q):
    return (
        (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2 + (p[2] - q[2]) ** 2
    ) ** 0.5


def main():
    img = Image.open(SRC).convert("RGBA")
    px = img.load()
    w, h = img.size

    # Sample background color from the corners (average them)
    samples = [px[0, 0], px[w - 1, 0], px[0, h - 1], px[w - 1, h - 1]]
    bg = tuple(int(sum(s[i] for s in samples) / len(samples)) for i in range(3))
    print(f"Sampled background color: RGB{bg}")

    # Color distance thresholds. Inside `hard`, fully transparent.
    # Between `hard` and `soft`, alpha fades to preserve anti-aliased edges.
    hard = 55
    soft = 100

    transparent_count = 0
    edge_count = 0

    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            d = color_distance((r, g, b), bg)
            if d <= hard:
                px[x, y] = (r, g, b, 0)
                transparent_count += 1
            elif d <= soft:
                ratio = (d - hard) / (soft - hard)
                px[x, y] = (r, g, b, int(a * ratio))
                edge_count += 1

    img.save(DST, "PNG")
    print(
        f"Wrote {DST} — {transparent_count} transparent, {edge_count} edge pixels"
    )


if __name__ == "__main__":
    main()

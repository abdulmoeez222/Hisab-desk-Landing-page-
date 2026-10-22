# Hisaab Desk logo set (for Market Thrive)

Prepared 22 Oct 2026 (PKT, UTC+5) by Hisaab IT for Ahmad Azim. Nothing here has been sent or published.

## Summary

| Item | Status |
|---|---|
| Master logo (vector SVG) | **Real vector.** `svg/hisaab-desk-logo-lockup_on-dark.svg` = icon + wordmark. The wordmark is the outlined "hisaab desk." from the trademark pack (Unbounded 900, glyphs turned into paths, checked against the live site). The icon is the site's own favicon SVG. |
| PNG 4096px, transparent and on #000 | **Generated today** from those vectors in headless Chrome. Not upscaled. Sharp at any size. |
| Favicon set (.ico 16/32/48, 16, 32, 180, 192, 512, manifest) | **Generated today** from the icon vector. |
| OG image 1200x630 | **Real.** `social/og-card_1200x630.jpg`, the same file the live preview uses (`og-card-v17j.jpg`). |
| Billu the mascot | **Raster only. No vector Billu exists.** Largest file is 1675x2728, AI-upscaled 4x. **Hisaab Design must supply a true vector (or a 4096px+ re-render) if MT needs Billu bigger than about 1700px wide.** |

**Brand colours:** black `#000000`, off-white text `#F6F6EE`, lime `#C6FF3D`, pink dot `#FF4F9A`, ink `#14141A`. **Font:** Unbounded 900 (SIL OFL), letter-spacing -0.03em. The wordmark is lowercase with a pink full stop. Don't retype it in another font; use the SVG.

## Rules for MT

- Use the SVGs as masters. Use the PNGs only where SVG isn't accepted.
- Don't recolour, stretch, add effects or redraw. Keep clear space of at least the height of the "h" around the logo.
- On light backgrounds use the `_ink` files; on dark use `_on-dark`.
- Copy everything in `favicon/` to the site root and paste `favicon/head-snippet.html` into every page `<head>`. The site today only has an inline SVG favicon and no manifest or apple-touch icon, so this adds them.
- The OG image URL in the snippet assumes `og-card_1200x630.jpg` is served at the site root of `https://hisaabdesk.co/`. Change the path if MT puts it elsewhere. Use an absolute https URL.

## Files

Folders `wordmark-svg/`, `wordmark-png/`, `app-icon-favicon/` and `social/` were placed here from the trademark pack and the site (same files, copied). Folders `svg/`, `png-4096/`, `favicon/` and `billu/` were added by Hisaab IT. Sizes are file sizes on disk.

| File | Pixels | Size | Real or generated | What it's for |
|---|---|---|---|---|
| `app-icon-favicon/favicon_DERIVED.ico` | 16, 32, 48 | 15.7 KB | Real (copied) | App icon PNG/ICO/SVG set from the trademark pack (16 to 2048px). |
| `app-icon-favicon/hisaab-desk-app-icon_1024px.png` | 1024x1024 | 24.8 KB | Real (copied) | App icon PNG/ICO/SVG set from the trademark pack (16 to 2048px). |
| `app-icon-favicon/hisaab-desk-app-icon_128px.png` | 128x128 | 2.6 KB | Real (copied) | App icon PNG/ICO/SVG set from the trademark pack (16 to 2048px). |
| `app-icon-favicon/hisaab-desk-app-icon_16px.png` | 16x16 | 0.4 KB | Real (copied) | App icon PNG/ICO/SVG set from the trademark pack (16 to 2048px). |
| `app-icon-favicon/hisaab-desk-app-icon_180px.png` | 180x180 | 4.7 KB | Real (copied) | App icon PNG/ICO/SVG set from the trademark pack (16 to 2048px). |
| `app-icon-favicon/hisaab-desk-app-icon_192px.png` | 192x192 | 3.9 KB | Real (copied) | App icon PNG/ICO/SVG set from the trademark pack (16 to 2048px). |
| `app-icon-favicon/hisaab-desk-app-icon_2048px.png` | 2048x2048 | 58.1 KB | Real (copied) | App icon PNG/ICO/SVG set from the trademark pack (16 to 2048px). |
| `app-icon-favicon/hisaab-desk-app-icon_256px.png` | 256x256 | 5.5 KB | Real (copied) | App icon PNG/ICO/SVG set from the trademark pack (16 to 2048px). |
| `app-icon-favicon/hisaab-desk-app-icon_32px.png` | 32x32 | 0.7 KB | Real (copied) | App icon PNG/ICO/SVG set from the trademark pack (16 to 2048px). |
| `app-icon-favicon/hisaab-desk-app-icon_48px.png` | 48x48 | 1.2 KB | Real (copied) | App icon PNG/ICO/SVG set from the trademark pack (16 to 2048px). |
| `app-icon-favicon/hisaab-desk-app-icon_512px.png` | 512x512 | 11.8 KB | Real (copied) | App icon PNG/ICO/SVG set from the trademark pack (16 to 2048px). |
| `app-icon-favicon/hisaab-desk-app-icon_64px.png` | 64x64 | 1.4 KB | Real (copied) | App icon PNG/ICO/SVG set from the trademark pack (16 to 2048px). |
| `app-icon-favicon/hisaab-desk-app-icon_mono-black-white_DERIVED.svg` | vector | 0.4 KB | Real (copied) | App icon PNG/ICO/SVG set from the trademark pack (16 to 2048px). |
| `app-icon-favicon/hisaab-desk-app-icon_mono-black-white_DERIVED_2048px.png` | 2048x2048 | 53.5 KB | Real (copied) | App icon PNG/ICO/SVG set from the trademark pack (16 to 2048px). |
| `app-icon-favicon/hisaab-desk-app-icon_mono-black-white_DERIVED_512px.png` | 512x512 | 10.4 KB | Real (copied) | App icon PNG/ICO/SVG set from the trademark pack (16 to 2048px). |
| `app-icon-favicon/hisaab-desk-favicon_original-from-site.svg` | vector | 0.4 KB | Real (copied) | App icon PNG/ICO/SVG set from the trademark pack (16 to 2048px). |
| `billu/billu-cap-avatar_512_transparent.png` | 512x512 | 279.1 KB | Real (copied) | Billu avatar (head), as used on the site. |
| `billu/billu-cap-master_1675x2728_transparent_ESRGAN-UPSCALED.png` | 1675x2728 | 3084.9 KB | Real, AI-UPSCALED | Billu (current lime-cap master), largest available. AI-upscaled 4x (Real-ESRGAN) from a 1280x720 render. NOT a vector. |
| `billu/billu-cap-peace_native_transparent.png` | 553x900 | 409.7 KB | Real (copied) | Billu peace-sign pose at native size, as used in the OG card. |
| `favicon/apple-touch-icon.png` | 180x180 | 3.3 KB | Generated today from the vector (exact paths) | iPhone/iPad home-screen icon (180, full-bleed black; iOS rounds the corners). Site root. |
| `favicon/favicon-16x16.png` | 16x16 | 0.4 KB | Generated today from the vector (exact paths) | Favicon PNG 16. Site root. |
| `favicon/favicon-32x32.png` | 32x32 | 0.7 KB | Generated today from the vector (exact paths) | Favicon PNG 32. Site root. |
| `favicon/favicon-48x48.png` | 48x48 | 1.2 KB | Generated today from the vector (exact paths) | Favicon PNG 48 (source for .ico). |
| `favicon/favicon.ico` | 16, 32, 48 | 2.2 KB | Generated today from the vector (exact paths) | Browser favicon (16/32/48 in one file). Site root. |
| `favicon/favicon.svg` | vector | 0.5 KB | Generated today from the vector (exact paths) | Modern browsers' vector favicon. Site root. |
| `favicon/head-snippet.html` |  | 0.6 KB | Generated today from the vector (exact paths) | The <head> tags to paste into every page. |
| `favicon/icon-192.png` | 192x192 | 3.9 KB | Generated today from the vector (exact paths) | Web app manifest icon 192 (Android). Site root. |
| `favicon/icon-512-maskable.png` | 512x512 | 7.9 KB | Generated today from the vector (exact paths) | Manifest maskable icon 512 (full-bleed, Android adaptive icons). Site root. |
| `favicon/icon-512.png` | 512x512 | 11.8 KB | Generated today from the vector (exact paths) | Web app manifest icon 512. Site root. |
| `favicon/site.webmanifest` |  | 0.4 KB | Generated today from the vector (exact paths) | Manifest file, ready to drop in the site root. |
| `png-4096/hisaab-desk-logo-lockup_ink_transparent_4096w.png` | 4096x442 | 94.0 KB | Generated today from the vector (exact paths) | Logo PNG, transparent, for light backgrounds. |
| `png-4096/hisaab-desk-logo-lockup_on-black_4096w.png` | 4096x442 | 90.2 KB | Generated today from the vector (exact paths) | Logo PNG on solid #000. |
| `png-4096/hisaab-desk-logo-lockup_on-dark_transparent_4096w.png` | 4096x442 | 93.2 KB | Generated today from the vector (exact paths) | Logo PNG, transparent, for dark backgrounds. |
| `png-4096/hisaab-desk-wordmark_on-black_4096w.png` | 4096x510 | 93.3 KB | Generated today from the vector (exact paths) | Wordmark PNG on solid #000. |
| `png-4096/hisaab-desk-wordmark_on-dark_transparent_4096w.png` | 4096x510 | 92.7 KB | Generated today from the vector (exact paths) | Wordmark PNG, transparent, for dark backgrounds. |
| `social/billu-whatsapp-profile-photo_1080.jpg` | 1080x1080 | 81.5 KB | Real (copied) | Billu WhatsApp profile photo (1080). For the Billu number's profile. |
| `social/og-card_1200x630.jpg` | 1200x630 | 98.3 KB | Real (copied) | OG / social share image (1200x630). Same file as the live preview og-card-v17j.jpg. |
| `svg/hisaab-desk-icon.svg` | vector | 0.5 KB | Generated today from the vector (exact paths) | App icon / favicon master (lime bill face on black rounded tile). |
| `svg/hisaab-desk-logo-lockup_ink.svg` | vector | 5.5 KB | Generated today from the vector (exact paths) | Logo (icon + wordmark), ink text for light backgrounds. |
| `svg/hisaab-desk-logo-lockup_on-dark.svg` | vector | 5.5 KB | Generated today from the vector (exact paths) | MASTER logo (icon + wordmark), light text for dark/black backgrounds. Use this first. |
| `svg/hisaab-desk-wordmark_ink.svg` | vector | 5.1 KB | Real (copied, outlined vector) | Wordmark only, for light backgrounds. |
| `svg/hisaab-desk-wordmark_on-dark.svg` | vector | 5.1 KB | Real (copied, outlined vector) | Wordmark only, for dark backgrounds (as in the site top bar). |
| `wordmark-png/hisaab-desk-wordmark_ink-colors_on-lime_4000w.png` | 4000x499 | 88.1 KB | Real (copied) | Wordmark PNG 4000px colourways from the trademark pack. |
| `wordmark-png/hisaab-desk-wordmark_ink-colors_on-white_4000w.png` | 4000x499 | 90.0 KB | Real (copied) | Wordmark PNG 4000px colourways from the trademark pack. |
| `wordmark-png/hisaab-desk-wordmark_ink-colors_transparent_4000w.png` | 4000x499 | 90.9 KB | Real (copied) | Wordmark PNG 4000px colourways from the trademark pack. |
| `wordmark-png/hisaab-desk-wordmark_mono-black_on-white_DERIVED_4000w.png` | 4000x499 | 85.6 KB | Real (copied) | Wordmark PNG 4000px colourways from the trademark pack. |
| `wordmark-png/hisaab-desk-wordmark_mono-black_transparent_DERIVED_4000w.png` | 4000x499 | 61.1 KB | Real (copied) | Wordmark PNG 4000px colourways from the trademark pack. |
| `wordmark-png/hisaab-desk-wordmark_mono-white_on-black_DERIVED_4000w.png` | 4000x499 | 86.4 KB | Real (copied) | Wordmark PNG 4000px colourways from the trademark pack. |
| `wordmark-png/hisaab-desk-wordmark_mono-white_transparent_DERIVED_4000w.png` | 4000x499 | 68.1 KB | Real (copied) | Wordmark PNG 4000px colourways from the trademark pack. |
| `wordmark-png/hisaab-desk-wordmark_site-dark-colors_on-black_4000w.png` | 4000x499 | 90.8 KB | Real (copied) | Wordmark PNG 4000px colourways from the trademark pack. |
| `wordmark-png/hisaab-desk-wordmark_site-dark-colors_transparent_4000w.png` | 4000x499 | 89.6 KB | Real (copied) | Wordmark PNG 4000px colourways from the trademark pack. |
| `wordmark-svg/hisaab-desk-wordmark_ink-colors_on-lime.svg` | vector | 5.1 KB | Real (copied) | Wordmark SVG colourways from the trademark pack (DERIVED = mono recolour). |
| `wordmark-svg/hisaab-desk-wordmark_ink-colors_on-white.svg` | vector | 5.1 KB | Real (copied) | Wordmark SVG colourways from the trademark pack (DERIVED = mono recolour). |
| `wordmark-svg/hisaab-desk-wordmark_ink-colors_transparent.svg` | vector | 5.1 KB | Real (copied) | Wordmark SVG colourways from the trademark pack (DERIVED = mono recolour). |
| `wordmark-svg/hisaab-desk-wordmark_mono-black_on-white_DERIVED.svg` | vector | 5.1 KB | Real (copied) | Wordmark SVG colourways from the trademark pack (DERIVED = mono recolour). |
| `wordmark-svg/hisaab-desk-wordmark_mono-black_transparent_DERIVED.svg` | vector | 5.1 KB | Real (copied) | Wordmark SVG colourways from the trademark pack (DERIVED = mono recolour). |
| `wordmark-svg/hisaab-desk-wordmark_mono-white_on-black_DERIVED.svg` | vector | 5.1 KB | Real (copied) | Wordmark SVG colourways from the trademark pack (DERIVED = mono recolour). |
| `wordmark-svg/hisaab-desk-wordmark_mono-white_transparent_DERIVED.svg` | vector | 5.1 KB | Real (copied) | Wordmark SVG colourways from the trademark pack (DERIVED = mono recolour). |
| `wordmark-svg/hisaab-desk-wordmark_site-dark-colors_on-black.svg` | vector | 5.1 KB | Real (copied) | Wordmark SVG colourways from the trademark pack (DERIVED = mono recolour). |
| `wordmark-svg/hisaab-desk-wordmark_site-dark-colors_transparent.svg` | vector | 5.1 KB | Real (copied) | Wordmark SVG colourways from the trademark pack (DERIVED = mono recolour). |

## Sources and how files were made

- Wordmark vector: `/workspace/hisaab-trademark/hisaab-desk/svg/` (made 18 Oct 2026 from the site's font with HarfBuzz + fontTools; see that folder's README).
- Icon vector: the inline `data:image/svg+xml` favicon on every page of the site (`/workspace/hisaabdesk-v12-preview/index.html`). `apple-touch-icon.png` and `icon-512-maskable.png` use the same art on a full-bleed square (no rounded corners), because iOS and Android add their own mask.
- Lockup: icon and wordmark side by side at the same height, with a gap of about a quarter of the height. This lockup is new (the site shows the wordmark alone in the top bar). **Ask Hisaab Design to approve the lockup**; if they don't, use the wordmark-only files.
- Billu master: `/workspace/hisaab-design/billu-trademark/` (cap master, Real-ESRGAN x4 upscale + cutout on 19 Oct 2026; see its GENERATION-RECORD.txt). It is an AI-generated 3D-style render. It is honestly upscaled, not a vector.
- Tools: headless Google Chrome for SVG to PNG, Python Pillow for .ico. Inkscape, rsvg-convert and ImageMagick aren't installable on this box (no package candidate), so Chrome was used instead.

## Gaps (for Hisaab Design)

1. No vector Billu. Needed for print, large banners or app-store art.
2. Approve the icon + wordmark lockup, or say "wordmark only".
3. No light-background OG image; the current one is on black, which is fine for WhatsApp, X and Facebook previews.

# AI 통화 분석 · Call Coach — Design System

A design system for a **Korean mobile app that records and analyzes phone calls with AI**, then coaches the user toward better conversations. The target user is a sales rep / counselor / 상담원 ("agent") who wants feedback on tone, emotion, speech delivery and conversation flow. The product personality is warm, encouraging and a little playful — anchored by a cute 3D **tomato-with-a-headset mascot**.

> **Source of truth:** reverse-built from the attached Figma file `디자인.fig` (page "Page-1", 23 frames — onboarding, splash, login, home, in-call, and a 4-tab AI report: 종합/감정/표현/흐름). All tokens, components and screens here were extracted from that file. There is no public brand; the Figma file is canonical.

---

## What the product does

- **Records & analyzes calls.** After a call, an AI report breaks the conversation into four lenses: 종합 (Overall), 감정 (Emotion), 표현 (Expression), 흐름 (Flow).
- **Scores speech quality** — 침묵 (silence), 말빠르기 (speech rate), 떨림 (voice tremor), 흐름 (flow) — on simple red progress bars.
- **Tracks emotion over time** with a line chart (상담원 vs 고객 / agent vs customer) and a distribution (친절함/차분함/불안함).
- **Coaches** with "잘한 점 / 개선할 점" cards, timeline highlights (부정적 기류 / 긍정적 전환), and practice suggestions.
- **Home** surfaces a daily summary, an AI tip, and recent calls. A floating red **call FAB** sits in the center of the bottom nav.

---

## CONTENT FUNDAMENTALS — how copy is written

- **Language:** Korean first. English appears only as parenthetical glosses on data labels (`친절함 (Friendly)`) or as established UI words (`LOGIN`, `AI`).
- **Voice:** polite formal Korean — the **-습니다 / -세요** register throughout ("좋은 하루 되세요!", "분석하고 더 나은 대화를 도와드립니다."). Encouraging, never scolding. Improvements are framed as gentle suggestions ("연습이 필요합니다", "권장합니다").
- **Person:** the app speaks *to* the user (당신/2nd person implied) and *about* the analysis in neutral third person.
- **Headlines** are short noun phrases (`오늘의 요약`, `최근 통화 목록`, `감정 분포 분석`). **Body** is one or two full polite sentences.
- **Numbers** are concrete and Korean-counted: `12통`, `05분 12초`, `00:00 – 02:45`, `외 124명이 연습 중`. Percentages are bold and right-aligned (`70%`).
- **Casing:** Korean has no case; the rare Latin UI word is UPPERCASE for emphasis (`LOGIN`) or Title/AS-IS (`AI`).
- **Emoji:** none. Personality comes from the **mascot illustration**, not emoji. (The thumbs-up / warning glyphs in report cards are line icons, not emoji.)
- **Tone example — AI tip:** *"대화 팁: 신뢰도를 높이는 마무리 — 통화 마무리 시 다음 일정을 한 번 더 확인하면 상대방의 기억에 명확히 남고 신뢰도를 크게 높일 수 있습니다."*

---

## VISUAL FOUNDATIONS

**Color.** One brand hue: a vivid red **`#FF3639`** (`--color-primary`). There is **no secondary color** — hierarchy comes from red vs. a cool neutral gray ramp on white. A lighter red `#FF6363` (`--red-400`) fills nested panels that sit *on* a red surface (the stat tiles inside the hero). Soft reds (`#FFD5D5`, `#FFB4B4`) back tinted callouts and the mascot halo. Text is the Tailwind-style gray ramp: `#111827` strong → `#4B5563` body → `#9CA3AF` muted. See `tokens/colors.css`.

**Type.** **Inter** for Latin/numerals + **Pretendard** for Hangul, unified in one `--font-sans` stack so mixed KO/EN lines stay consistent (Roboto in the source folds into the fallback). Weights 400/500/600/700; headings are 700-bold and tight. Mobile scale runs 24 → 10px (`tokens/typography.css`). Small UI text gets `-0.5%` tracking.

**Backgrounds.** Flat **white** pages. No photography, no patterns, no full-bleed imagery. The only "image" is the mascot PNG. The single gradient is the brand red CTA/hero gradient (`--gradient-brand`, a subtle 157° red-on-red). Use gradients *only* for primary buttons, the hero card, the call FAB and the login canvas — never as a decorative page wash.

**Cards.** Rounded, soft, shadow-light. Resting cards are white with a **1px gray hairline drawn as an inset ring** + a very soft drop shadow (`--shadow-card-hairline`). Radii: chips/buttons-sm 8–12px, standard cards 16–20px, the hero card 24px, pills 9999px. No hard 1px borders except table-like dividers (`--border-subtle`).

**Elevation.** Two real lifts: a resting card (barely there) and a **floating** element — stat tiles, the bottom sheet, and especially the **call FAB**, which carries a red glow (`--shadow-fab`, `0 6px 20px rgba(255,54,57,.45)`). The FAB overhangs the nav bar's top edge by ~22px with a 4px white ring.

**Shape language.** Friendly and round: pill buttons, circular avatars/halos, 12px icon tiles, 24px hero corners. Nothing sharp.

**Motion.** Restrained. Screen entrances fade-up (~320ms, `--ease-out`). Progress bars animate their width on mount. Buttons **press-shrink to 0.97**. The in-call avatar emits a soft ping ring. Easing standard is `cubic-bezier(.4,0,.2,1)`; expressive entrances use `cubic-bezier(.16,1,.3,1)`.

**States.** Hover/press on buttons = the press-scale + the existing glow (this is a touch app first). Disabled = 45% opacity. Active nav/tab items switch from `--text-muted` gray to brand red, tabs gaining a 3px red underline.

**Layout.** 393×852 iPhone frame. Screen gutter ~20–22px. Sections stack with ~24px gaps. The bottom nav is fixed (4 labelled tabs + center FAB); report screens use a fixed header + underline tab strip, then a scroll region.

---

## ICONOGRAPHY

- **UI icons** are simple **2px-stroke line icons on a 24px grid** (Lucide-compatible: phone, mic, share, settings, sparkles, chevrons, call-in/out). They inherit `currentColor` — brand red on light surfaces, white on red. Active bottom-nav icons get a faint fill. The system ships these inline in the UI-kit and `BottomNav` component; for new work, use **Lucide** (CDN) to match stroke weight — this is a documented substitution since the Figma used a custom but Lucide-equivalent set.
- **No emoji, no unicode glyphs as icons.** Personality lives in the mascot.
- **Social marks** (login): Naver, Google, Kakao — in `assets/icons/` (Naver path extracted from the Figma; Google/Kakao are standard brand marks).
- **Mascot** is the hero asset — see Brand below. Use it instead of decorative spot illustrations.

---

## BRAND — the mascot

A glossy 3D **tomato wearing a call-center headset** (red body, green stem, black headset + boom mic). Four poses in `assets/`:

| File | Pose | Use |
|---|---|---|
| `mascot-head-happy.png` | head, smiling | avatars, AI-tip, onboarding, success — the default |
| `mascot-happy.png` | full body, smiling | login hero, celebrations |
| `mascot-head-sad.png` | head, frowning | inline error/empty hints |
| `mascot-sad.png` | full body, frowning | empty states, errors |

Present the happy head inside a soft pink halo (`--red-50`) for friendly moments. Keep the mascot on white or red; don't recolor it.

---

## INDEX / manifest

```
styles.css                 ← global entry (consumers link this; @imports only)
tokens/
  fonts.css                ← Inter + Pretendard (CDN @import)
  colors.css               ← brand red scale, gray ramp, semantic aliases, gradients
  typography.css           ← font stack, type scale, weights
  spacing.css              ← spacing rhythm, radii, hit targets
  effects.css              ← shadows, rings, motion tokens
components/
  forms/        Button, Input
  feedback/     Badge, MetricBar
  layout/       Card, SectionHeader, IconTile
  data/         ListItem, StatTile
  navigation/   Tabs, AppHeader, BottomNav
  brand/        Mascot
  (each dir: <Name>.jsx + <Name>.d.ts + <Name>.prompt.md + one *.card.html)
guidelines/                ← foundation specimen cards (Type / Colors / Spacing / Brand)
ui_kits/call-coach/        ← interactive click-through of the real app (index.html + README)
assets/                    ← mascot PNGs, icons/ (naver, google, kakao)
SKILL.md                   ← Agent-Skills entry point
```

### Caveats / substitutions
- **Fonts** load from CDN (Google Fonts Inter, jsDelivr Pretendard). Swap for self-hosted `.woff2` if you need offline/locked builds.
- **Icons:** the source's custom line icons are reproduced as Lucide-equivalent inline SVGs; use Lucide for anything new.
- Component **showcase cards** render the component visuals with the real tokens (self-contained) rather than mounting the compiled bundle, so they preview reliably.

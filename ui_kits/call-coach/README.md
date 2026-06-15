# Call Coach — UI Kit

An interactive, single-file recreation of the core app flow, built on the design system tokens (`../../styles.css`) and the mascot/icon assets.

**Flow:** Onboarding → Login → Home → (tap a call / FAB) → in-call → AI report (감정 + 종합 tabs). The bottom nav switches between Home, 감정 기록, 자막, 돌아보기; the center red FAB starts a (fake) live-analysis call.

Open `index.html` directly, or use it as a **starting point** from a consuming project. React + Babel are loaded from CDN; everything else is inline and self-contained.

Screens recreated: `Onboarding`, `Login`, `Home`, `Report` (with `EmotionTab` + `SummaryTab`), `Calling`, plus `Placeholder` tabs. These mirror the Figma frames 온보딩/로그인/디자인 홈화면/감정 페이지/종합 페이지/AI 통화 리포트.

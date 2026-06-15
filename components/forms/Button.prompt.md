Brand call-to-action button — a red gradient pill for the primary action on a screen, with quieter `secondary`/`soft`/`ghost` variants.

```jsx
<Button block onClick={next}>다음</Button>
<Button variant="secondary" size="sm">요약 보기</Button>
<Button variant="soft" size="md" icon={<MicIcon/>}>부족한 표현 연습하기</Button>
```

Variants: `primary` (gradient + glow), `secondary` (hairline gray), `soft` (tinted red chip), `ghost` (text). Sizes: `lg` (56px, default full-width CTA), `md` (46px), `sm` (36px). Use `block` for the dominant screen CTA; `sm` for inline row actions.

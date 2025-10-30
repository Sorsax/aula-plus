# Aula+

This project uses the Liquid Glass React library for glassmorphism effects.

## Liquid Glass usage

All panels go through `src/components/GlassPanel.tsx`, which wraps the `liquid-glass-react` component so you can keep using `<GlassPanel>` across the app.

Tunable props (example):

```tsx
<GlassPanel cornerRadius={16} style={{ height: '10vh' }}>
  Content
</GlassPanel>
```

Under the hood, `GlassPanel` forwards these defaults:
- displacementScale: 70
- blurAmount: 0.0625
- saturation: 140
- aberrationIntensity: 2
- elasticity: 0.15

You can also pass `padding` and `cornerRadius`. For a pill/circle, set `cornerRadius={999}`.

## Layout tokens (matching the mock)
- Search bar: width `55vw`, height `5.5vh`, top spacer `18vh` (edit in `src/pages/Index.tsx` and `src/components/SearchBar.tsx`).
- Apps module: width `65vw`, min-height `23vh` (edit in `src/components/AppGrid.tsx`).
- Links module: width `46vw`, min-height `18vh` (edit in `src/components/InfoLinks.tsx`).

## Dev
- `npm run dev` — Vite on port 8080
- `npm run build` — production build


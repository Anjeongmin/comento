Labelled progress meter for analysis scores and emotion breakdowns. Red fill on a gray pill track, with optional right-aligned value.

```jsx
<MetricBar label="침묵" value={62} showValue={false} />
<MetricBar label="친절함 (Friendly)" value={70} />
```

Use `showValue={false}` for the four speech-quality bars (침묵/말빠르기/떨림/흐름); keep the value for percentage breakdowns.

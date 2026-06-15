import React from "react";

/**
 * Brand mascot frame — the headset tomato. Renders the provided mascot image,
 * optionally inside a soft circular halo. The image itself carries the mood
 * (happy / sad, head / full-body); pass its path via `src`.
 *
 * Assets live in the design system under:
 *   assets/mascot-head-happy.png   assets/mascot-happy.png
 *   assets/mascot-head-sad.png     assets/mascot-sad.png
 */
export function Mascot({ src, size = 120, halo = false, haloColor = "var(--red-50)", alt = "mascot", style, ...rest }) {
  const img = (
    <img
      src={src}
      alt={alt}
      style={{
        width: halo ? "72%" : "100%",
        height: halo ? "72%" : "100%",
        objectFit: "contain",
        display: "block",
      }}
    />
  );
  if (!halo) {
    return <div style={{ width: size, height: size, ...style }} {...rest}>{img}</div>;
  }
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: haloColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      {...rest}
    >
      {img}
    </div>
  );
}

"use client";

import { useIsDark } from "@/lib/useIsDark";
import {
  MovingGradientButton,
  type GradientPalette,
  type MovingGradientButtonProps,
} from "./fx/MovingGradientButton";

// Palettes built from #E3F2FD · #90CAF9 · #2196F3 · #0D47A1. The light trails
// travelling around each pill are sky blue (#90CAF9) with an ice-white head.
const NAVY: GradientPalette = {
  fill: "#0D47A1",
  hoverFill: "#0A2A66",
  textColor: "#FFFFFF",
  hoverTextColor: "#FFFFFF",
  borderColor: "#0D47A1",
  strokeColor: "#2196F3",
  headColor: "#E3F2FD",
};

const SKY: GradientPalette = {
  fill: "#90CAF9",
  hoverFill: "#E3F2FD",
  textColor: "#051530",
  hoverTextColor: "#0D47A1",
  borderColor: "#90CAF9",
  strokeColor: "#2196F3",
  headColor: "#FFFFFF",
};

const OUTLINE_LIGHT: GradientPalette = {
  fill: "rgba(227, 242, 253, 0)",
  hoverFill: "rgba(227, 242, 253, 1)",
  textColor: "#0A1F44",
  hoverTextColor: "#0D47A1",
  borderColor: "rgba(13, 71, 161, 0.16)",
  strokeColor: "rgba(33, 150, 243, 0.55)",
  headColor: "#0D47A1",
};

const OUTLINE_DARK: GradientPalette = {
  fill: "rgba(10, 33, 71, 0)",
  hoverFill: "rgba(10, 33, 71, 1)",
  textColor: "#E3F2FD",
  hoverTextColor: "#FFFFFF",
  borderColor: "rgba(144, 202, 249, 0.2)",
  strokeColor: "rgba(144, 202, 249, 0.55)",
  headColor: "#E3F2FD",
};

export type BrandVariant = "primary" | "outline";

type Props = Omit<MovingGradientButtonProps, "palette"> & { variant?: BrandVariant };

export function BrandButton({ variant = "primary", ...props }: Props) {
  const dark = useIsDark();
  const palette = variant === "outline" ? (dark ? OUTLINE_DARK : OUTLINE_LIGHT) : dark ? SKY : NAVY;
  return <MovingGradientButton palette={palette} {...props} />;
}

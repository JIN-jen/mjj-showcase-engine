import type { CSSProperties } from "react";
import type { RailDepthTier, RailOffsetTier, RailPreset, RailRatioTier, RailWidthTier } from "@/components/pages/obys-lab-data";

export const railWidthMap = {
  xs: "10rem",
  sm: "13rem",
  md: "16rem",
  lg: "20rem",
  xl: "24rem",
} satisfies Record<RailWidthTier, string>;

export const railRatioMap = {
  square: "1 / 1",
  portrait: "4 / 5",
  landscape: "5 / 4",
  wide: "16 / 9",
} satisfies Record<RailRatioTier, string>;

export const railOffsetMap = {
  "far-left": "-6rem",
  left: "-3rem",
  center: "0rem",
  right: "3rem",
  "far-right": "6rem",
} satisfies Record<RailOffsetTier, string>;

export const railDepthMap = {
  near: "1",
  mid: "0.66",
  far: "0.33",
} satisfies Record<RailDepthTier, string>;

export type RailPresetStyle = CSSProperties & {
  "--rail-depth": string;
  "--rail-offset": string;
  "--rail-ratio": string;
  "--rail-width": string;
};

export function getRailPresetStyle(preset: RailPreset): RailPresetStyle {
  return {
    "--rail-width": railWidthMap[preset.widthTier],
    "--rail-ratio": railRatioMap[preset.ratioTier],
    "--rail-offset": railOffsetMap[preset.offsetTier],
    "--rail-depth": railDepthMap[preset.depthTier],
  };
}

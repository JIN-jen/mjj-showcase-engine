import { existsSync } from "node:fs";
import path from "node:path";

export type ShowcaseImageSourceStatus = "client" | "default" | "placeholder";

export type ShowcaseImageParams = {
  clientSlug?: string;
  imageName: string;
  industry: string;
  template: string;
};

export type ShowcaseImageResult = {
  imageSourceStatus: ShowcaseImageSourceStatus;
  src: string;
};

const assetRoot = "/template-assets";
const publicAssetRoot = path.join(process.cwd(), "public", "template-assets");

function cleanAssetSegment(segment: string) {
  return segment
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .replaceAll("..", "");
}

function publicFileExists(publicPath: string) {
  const localPath = path.join(process.cwd(), "public", publicPath);

  return existsSync(localPath);
}

function makeAssetPath(parts: string[]) {
  return path.posix.join(assetRoot, ...parts.map(cleanAssetSegment));
}

export function getShowcaseImage({
  clientSlug,
  imageName,
  industry,
  template,
}: ShowcaseImageParams): ShowcaseImageResult {
  const cleanImageName = cleanAssetSegment(imageName);
  const cleanIndustry = cleanAssetSegment(industry);
  const cleanTemplate = cleanAssetSegment(template);
  const cleanClientSlug = clientSlug ? cleanAssetSegment(clientSlug) : "";

  if (cleanClientSlug) {
    const clientPath = makeAssetPath([cleanIndustry, cleanTemplate, "clients", cleanClientSlug, cleanImageName]);

    if (publicFileExists(clientPath)) {
      return {
        imageSourceStatus: "client",
        src: clientPath,
      };
    }
  }

  const defaultPath = makeAssetPath([cleanIndustry, cleanTemplate, "default", cleanImageName]);

  if (publicFileExists(defaultPath)) {
    return {
      imageSourceStatus: "default",
      src: defaultPath,
    };
  }

  return {
    imageSourceStatus: "placeholder",
    src: makeAssetPath(["_placeholder", cleanImageName]),
  };
}

export function hasShowcaseAssetDirectory() {
  return existsSync(publicAssetRoot);
}

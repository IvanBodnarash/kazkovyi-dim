import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export default function processImage(img) {
  const { projectId, dataset } = client.config();
  const urlFor = (source) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  return img ? urlFor(img).quality(90).dpr(2).auto("format").url() : null;
}

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "frsc0f2q",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

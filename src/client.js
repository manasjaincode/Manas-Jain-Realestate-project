import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "emylnppk",
  dataset: "production",
  useCdn: false, // Write operation ke liye CDN false hona chahiye
  apiVersion: "2023-01-01",
  token: "sktVMhMUwv18bgmC8shQvkL0FjIK419PI3xnZtOaSVPsTwKSWflZ9APLfXHsXEoUmCHR0Av9vUh0VVVUs0OUWVd6ADLQFxWPlDM8GohI6CqcXzSVI7biIiwPXsiSvdCqKz8oetWaj0QT9hycum5Rnd88rNK2ZSM7wvAcj2xVwcZnDKTH8Wen", // Jo abhi generate kiya
});
const builder = imageUrlBuilder(client);

// Yeh function assignment ke $450x350 crop ke liye hai
export const urlFor = (source) => builder.image(source);






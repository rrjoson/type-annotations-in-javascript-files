export { nightOwlFull as theme } from "code-surfer";

import { slides as intro } from "./intro.mdx";
import { slides as main } from "./main.mdx";
import { slides as outro } from "./outro.mdx";

export const slides = [
  ...intro,
  ...main,
  ...outro,
];

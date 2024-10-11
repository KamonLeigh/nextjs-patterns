import NoSsr from "./NoSSr";
import { BrowserRender } from "./Browser-Render";

export function BrowserRenderSSr() {
  return (
    <NoSsr>
      <BrowserRender />
    </NoSsr>
  );
}

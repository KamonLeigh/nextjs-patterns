import { LeafletMapDynamic } from "./components/LeafletMapDynamics";
import { BodyWidthDynamic } from "./components/BodyWidthDynamics";
// import { BrowserRender } from "./components/Browser-Render";
// import { BrowserRenderSSr } from "./components/Browser-RenderNoSS";
import { D3Demo } from "./components/D3Demo";
import { DateTime } from "./components/DateTime";

export default function Home() {
  return (
    <div>
      <LeafletMapDynamic />
      <BodyWidthDynamic />
      <D3Demo />
      <DateTime />
    </div>
  );
}

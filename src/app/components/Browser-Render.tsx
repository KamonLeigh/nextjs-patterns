// "use client";
// import { useMount } from "../hooks/useMount";
// export function BrowserRender() {
//   const mount = useMount();

//   if (!mount) return null;

//   return (
//     <p>
//       Your browser is using the following language: {window.navigator.language}
//     </p>
//   );
// }

export function BrowserRender() {
  return (
    <p>
      Your browser is using the following language: {window.navigator.language}
    </p>
  );
}

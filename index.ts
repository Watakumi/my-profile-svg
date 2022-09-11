import { fetchOption } from "./src/options.ts";

export const hundler = (req: Request): Response => {
  const url = new URL(req.url);
  console.log(url.searchParams);
  const params = url.searchParams;

  const size = fetchOption(params.get("size") || "base");

  const offsetX = 20;

  const svg = `
  <svg
    width="${size.width}"
    height="${size.height}"
    viewBox="0 0 ${size.width} ${size.height}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
        <style>
            <![CDATA[@import url("https://fonts.googleapis.com/css2?family=Rampart+One&display=swap");]]>
            .cls-1{font-family: "Rampart One", cursive;}
        </style>
    </defs>
    <rect width="${size.width}" height="${size.height}" fill="white"/>
    <text x="${offsetX}" y="${size.lineHeight}" fill="black" font-size="${
    size.fontSize
  }" class="cls-1">えんじにあの</text>
    <text x="${offsetX}" y="${size.lineHeight * 2}" fill="black" font-size="${
    size.fontSize
  }" class="cls-1">わたくみ</text>
  </svg>`;

  // Success Response
  return new Response(svg, {
    headers: new Headers({
      "Content-Type": "image/svg+xml",
    }),
  });
};

import { html } from "hono/html";
import Footer from "./Footer";

const Layout = ({ children }: { children: any }) => html`<!DOCTYPE html>
  <html lang="en" class="bg-slate-900">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
        rel="stylesheet"
      />
      <title>Advent Of Code 2024 | Base42</title>
      <link rel="icon" href="/favicon.svg">
      <link rel="stylesheet" crossorigin href="/style.css" />
    </head>
    <body class="font-mono prose prose-slate prose-invert">
    <div class="bg-slate-900 w-screen h-full p-4 lg:p-10 overflow-autoauto">
      <div class="container max-w-4xl mx-auto">
        ${children}
        ${<Footer />}
      </div>
    </div>
    </body>
  </html>`;

export default Layout;

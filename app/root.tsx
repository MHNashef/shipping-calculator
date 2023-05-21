import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import navbarStyles from "~/styles/Navbar.css";
import footerStyles from "~/styles/Footer.css";
import rootStyles from "~/styles/root.css";

// export const links: LinksFunction = () => [
//   ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
// ];

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: navbarStyles,
    },
    {
      rel: "stylesheet",
      href: footerStyles,
    },
    {
      rel: "stylesheet",
      href: rootStyles,
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </main>
        <Footer />
      </body>
    </html>
  );
}

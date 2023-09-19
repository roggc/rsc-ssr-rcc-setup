import React from "react";
import RSC from "./rsc.js";
import Link from "./link.js";
import { useNavigation } from "../hooks/index.js";

export default function Layout({ title }) {
  const page = useNavigation();

  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        <div>
          <Link page={{ name: "home" }}>home</Link>
          <Link
            page={{
              name: "about",
              props: { author: "Roger Gomez Castells" },
            }}
          >
            about
          </Link>
        </div>
        <RSC key={page.name} componentName={page.name} {...page.props}>
          loading {page.name} page...
        </RSC>
      </body>
    </html>
  );
}

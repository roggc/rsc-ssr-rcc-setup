import React, { useState } from "react";
import RSC from "./rsc.js";

const LoadingPage = ({ page }) => <>loading {page} page...</>;

export default function Layout({ title }) {
  const [page, setPage] = useState({ name: "home" });

  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        <div>
          <a href="#" onClick={() => setPage({ name: "home" })}>
            home
          </a>
          <a
            href="#"
            onClick={() =>
              setPage({
                name: "about",
                props: { author: "Roger Gomez Castells" },
              })
            }
          >
            about
          </a>
        </div>
        <RSC key={page.name} componentName={page.name} {...page.props}>
          <LoadingPage page={page.name} />
        </RSC>
      </body>
    </html>
  );
}

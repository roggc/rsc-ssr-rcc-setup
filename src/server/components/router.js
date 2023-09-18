import React from "react";
import HomeRSC from "./home-rsc.js";
import AboutRSC from "./about-rsc.js";
import MoreInfoRSC from "./more-info-rsc.js";
import Provider from "../../client/slices.js";
import Layout from "../../client/components/layout.js";

const title = "My incredible app";

export default async function Router({ url }) {
  const props = JSON.parse(url.searchParams.get("props"));

  switch (url.pathname) {
    case "/":
      return (
        <Provider __isClient__="../slices.js">
          <Layout __isClient__="../components/layout.js" title={title} />
        </Provider>
      );
    case "/home":
      return <HomeRSC {...props} />;
    case "/about":
      return <AboutRSC {...props} />;
    case "/more-info":
      return <MoreInfoRSC {...props} />;
    default:
      return <HomeRSC {...props} />;
  }
}

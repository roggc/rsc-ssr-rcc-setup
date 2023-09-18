import React from "react";
import MoreInfo from "../../client/components/more-info.js";

export default async function MoreInfoRSC({ name }) {
  const data = await new Promise((r) =>
    setTimeout(() => {
      switch (name) {
        case "Roger Gomez Castells":
          return r({
            likes: "eating pizza",
            other: "supporter for fcBarcelona",
          });
        default:
          return r({ likes: "...", other: "..." });
      }
    }, 1000)
  );
  return <MoreInfo __isClient__="../components/more-info.js" data={data} />;
}

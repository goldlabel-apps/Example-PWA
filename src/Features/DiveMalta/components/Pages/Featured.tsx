import * as React from 'react';
import {
  ABCDiving,
  SOHO,
  Octopus,
} from "../../";

export default function Featured() {
  const ran = Math.floor(Math.random() * 3);
  let ad = <React.Fragment></React.Fragment>;
  switch (ran) {
    case 0:
      ad = <ABCDiving />;
      break;
    case 1:
      ad = <SOHO />;
      break;
    case 2:
      ad = <Octopus />;
      break;
  };
  return (<React.Fragment>
            {ad}
          </React.Fragment>
  );
}
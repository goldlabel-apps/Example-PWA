import * as React from 'react';
import {
  useFeatureDispatch,
} from "../../../Shared/store/hooks";
import {
  ABCDiving,
  SOHO,
} from "../../";

export default function Featured() {
  const dispatch = useFeatureDispatch();
  const pathABC = "/diveshops/abc-diving";
  const pathOctopus = "/diveshops/octopus";
  const pathSoho = "/hikes/soho-hike";
  return (<React.Fragment>
            <SOHO />
          </React.Fragment>
  );
}

/*
<ABCDiving />
*/
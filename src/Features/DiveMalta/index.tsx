import DiveMalta from "./DiveMalta";
import {
  selectDiveMalta,
  increaseShowNumber,
  setDiveMaltaKey,
} from "./store/slice";
import {next} from "./store/actions/next";
import {goTo} from "./store/actions/goTo";
import {share} from "./store/actions/share";
import InfiniteMenu from "./components/Navigation/InfiniteMenu";
import Bottombar from "./components/Navigation/Bottombar";
import MenuItems from "./components/Navigation/MenuItems";
import Topbar from "./components/Navigation/Topbar";
import MenuListItem from "./components/Navigation/MenuListItem";
import Home from "./components/Pages/Home";
import ItemCard from "./components/Pages/ItemCard";
import Single from "./components/Pages/Single";
import Featured from "./components/Pages/Featured";

import ABCDiving from "./components/FeaturedCards/ABCDiving";
import Octopus from "./components/FeaturedCards/Octopus";
import SOHO from "./components/FeaturedCards/SOHO";

export {
  DiveMalta,
  ABCDiving,
  Octopus,
  SOHO,
  Home,
  ItemCard,
  MenuListItem,
  InfiniteMenu,
  Single,
  Featured,
  Bottombar,
  Topbar,
  MenuItems,
  selectDiveMalta,
  next,
  share,
  goTo,
  increaseShowNumber,
  setDiveMaltaKey,
};
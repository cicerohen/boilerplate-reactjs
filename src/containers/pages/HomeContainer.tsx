import Screen from "../../components/Screen";

import { routes } from "../../router.settings";

const HomeContainer = () => {
  return <Screen title={routes.HOME.name}>Home page content</Screen>;
};

export default HomeContainer;

import Screen from "../../components/Screen";

import { routes } from "../../router.settings";

const CharactersPageContainer = (props: any) => {
  return (
    <Screen title={routes.CHARACTERS.name}>Characters page content</Screen>
  );
};

export default CharactersPageContainer;

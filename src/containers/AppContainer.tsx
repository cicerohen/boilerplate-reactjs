import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HomeViewContainer } from "./views/HomeViewContainer";
import { CharactersViewContainer } from "./views/CharactersViewContainer";
import { ComicsViewContainer } from "./views/ComicsViewContainer";
import { EventsViewContainer } from "./views/EventsViewContainer";
import { SeriesViewContainer } from "./views/SeriesViewContainer";
import { StoriesViewContainer } from "./views/StoriesViewContainer";

import { routes } from "../router.settings";

const AppContainer = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeViewContainer />
        </Route>
        <Route exact path={routes.CHARACTERS.path}>
          <CharactersViewContainer />
        </Route>
        <Route exact path={routes.COMICS.path}>
          <ComicsViewContainer />
        </Route>
        <Route exact path={routes.EVENTS.path}>
          <EventsViewContainer />
        </Route>
        <Route exact path={routes.SERIES.path}>
          <SeriesViewContainer />
        </Route>
        <Route exact path={routes.STORIES.path}>
          <StoriesViewContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppContainer;

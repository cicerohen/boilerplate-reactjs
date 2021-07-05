import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeContainer from "./pages/HomeContainer";
import CharactersPageContainer from "./pages/CharactersPageContainer";
import ComicsPageContainer from "./pages/ComicsPageContainer";
import CreatorsPageContainer from "./pages/CreatorsPageContainer";
import EventsPageContainer from "./pages/EventsPageContainer";
import SeriesPageContainer from "./pages/SeriesPageContainer";
import StoriesPageContainer from "./pages/StoriesPageContainer";

import ThemeProvider from "../contexts/Theme/ThemeProvider";

import { routes } from "../router.settings";

const AppContainer = () => {
  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>
          <Route path={routes.CHARACTERS.path}>
            <CharactersPageContainer />
          </Route>
          <Route path={routes.COMICS.path}>
            <ComicsPageContainer />
          </Route>
          <Route path={routes.CREATORS.path}>
            <CreatorsPageContainer />
          </Route>
          <Route path={routes.EVENTS.path}>
            <EventsPageContainer />
          </Route>
          <Route path={routes.SERIES.path}>
            <SeriesPageContainer />
          </Route>
          <Route path={routes.STORIES.path}>
            <StoriesPageContainer />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppContainer;

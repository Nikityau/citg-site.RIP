import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import TeamMemberPage from "../../Pages/TeamMemberPage/TeamMemberPage";

const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));
const ProjectsPage = lazy(() => import("../../Pages/ProjectsPage/ProjectsPage"));
const TeamPage = lazy(() => import("../../Pages/TeamPage/TeamPage"));
const ProjectPage = lazy(() => import('../../Pages/ProjectPage/ProjectPage'))

const AppRouters = () => {
  return (
    <Switch>
        <Route exact path={"/home"}>
            <HomePage />
        </Route>
        <Route exact path={"/projects"}>
            <ProjectsPage />
        </Route>
        <Route exact path={"/projects/:id/:name"}>
            <ProjectPage />
        </Route>
        <Route exact path={"/team"}>
            <TeamPage />
        </Route>
        <Route exact path={"/t"}>
            <TeamMemberPage />
        </Route>

      <Route exact path={"/"}>
        <Redirect to={"/home"} />
      </Route>

      <Route path='/*'>
        <div>error 404</div>
      </Route>
    </Switch>
  );
};

export default AppRouters;

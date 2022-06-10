import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Error404 from "../../Pages/Eror.404/Error.404";

const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));
const ProjectsPage = lazy(() => import("../../Pages/ProjectsPage/ProjectsPage"));
const TeamPage = lazy(() => import("../../Pages/TeamPage/TeamPage"));
const ProjectPage = lazy(() => import('../../Pages/ProjectPage/ProjectPage'))
const TeamMemberPage = lazy(() => import('../../Pages/TeamMemberPage/TeamMemberPage'))

const AppRouters = () => {
  return (
    <Switch>
        <Route exact path={"/home"}>
            <HomePage />
        </Route>
        <Route exact path={"/projects"}>
            <ProjectsPage />
        </Route>
        <Route exact path={"/projects/:id"}>
            <ProjectPage />
        </Route>
        <Route exact path={"/team"}>
            <TeamPage />
        </Route>
        <Route exact path={"/team/:id"}>
            <TeamMemberPage />
        </Route>

      <Route exact path={"/"}>
        <Redirect to={"/home"} />
      </Route>

      <Route path='/*'>
        <Error404/>
      </Route>
    </Switch>
  );
};

export default AppRouters;

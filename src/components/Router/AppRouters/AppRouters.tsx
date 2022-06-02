import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProjectPage from "../../Pages/ProjectPage/ProjectPage";
import TeamMemberPage from "../../Pages/TeamMemberPage/TeamMemberPage";

const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));
const ProjectsPage = lazy(() => import("../../Pages/ProjectsPage/ProjectsPage"));
const TeamsPage = lazy(() => import("../../Pages/TeamsPage/TeamsPage"));

const AppRouters = () => {
  return (
    <Switch>
        <Route exact path={"/home"}>
            <HomePage />
        </Route>
        <Route exact path={"/projects"}>
            <ProjectsPage />
        </Route>
        <Route path={"/projects/:name"}>
            <ProjectPage />
        </Route>
        <Route exact path={"/team"}>
            <TeamsPage />
        </Route>
        <Route path={"/team/:name"}>
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

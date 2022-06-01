import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProjectPage from "../../Pages/ProjectPage/ProjectPage";
import TeamMemberPage from "../../Pages/TeamMemberPage/TeamMemberPage";

const HomePage = React.lazy(() => import("../../Pages/HomePage/HomePage"));
const ProjectsPage = React.lazy(() => import("../../Pages/ProjectsPage/ProjectsPage"));
const TeamsPage = React.lazy(() => import("../../Pages/TeamsPage/TeamsPage"));

const AppRouters = () => {
  return (
    <Switch>
      <Route exact path={"/home"} children={<HomePage />} />
      <Route exact path={"/projects"} children={<ProjectsPage />} />
      <Route path={"/projects/:name"} children={<ProjectPage />} />
      <Route exact path={"/team"} children={<TeamsPage />} />
      <Route path={"/team/:name"} children={<TeamMemberPage />} />

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

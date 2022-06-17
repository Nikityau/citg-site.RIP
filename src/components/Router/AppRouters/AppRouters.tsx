import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Error404 from "../../Pages/Eror.404/Error.404";

const Home_page = lazy(() => import("../../Pages/HomePage/HomePage"));
const Projects_page = lazy(() => import("../../Pages/ProjectsPage/ProjectsPage"));
const Team_page = lazy(() => import("../../Pages/TeamPage/TeamPage"));
const Project_page = lazy(() => import('../../Pages/ProjectPage/ProjectPage'))
const TeamMember_page = lazy(() => import('../../Pages/TeamMemberPage/TeamMemberPage'))
const MyWorks_page = lazy(() => import('../../Pages/TeamMember.MyWorks.page/MyWorks.page'))

const AppRouters = () => {
  return (
    <Switch>
        <Route exact path={"/home"}>
            <Home_page />
        </Route>
        <Route exact path={"/projects"}>
            <Projects_page />
        </Route>
        <Route exact path={"/projects/:id"}>
            <Project_page />
        </Route>
        <Route exact path={"/team"}>
            <Team_page />
        </Route>
        <Route exact path={"/team/:id"}>
            <TeamMember_page />
        </Route>
        <Route exact path={'/team/:man_id/my-works/:work_id'}>
            <MyWorks_page/>
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

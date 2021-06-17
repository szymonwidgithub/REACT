import React, { FC, useEffect } from "react";

import { TopBar } from "../TopBar/TopBar";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { ResumeYourWork } from "../ResumeYourWork/ResumeYourWork";
import { LatestPublications } from "../LatestPublications.tsx/LatestPublications";
import SuperSlider from "../Slider/Slider";
import { Workspace } from "../Workspace/Workspace";
import {Entity} from "../EntitiesComponent/Entities";
import {Profile} from "../Profile/Profile"
import {Resume} from "../Workspace/ResumeTest"
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound"
import { getUsers } from "../../actions/actionTypes/userActions";
import { getPhotos } from "../../actions/actionTypes/photoActions";
import { getTodos } from "../../actions/actionTypes/todoActions";
import { getPosts } from "../../actions/actionTypes/postActions";


type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetTodos = ReturnType<typeof getTodos>;
type GetPosts = ReturnType<typeof getPosts>;
const Wrapper = styled.div`
  background-color: ghostwhite;
`;
const EntityMargin = styled.div`
max-width:100px;`;
const Content = styled.div`
  width: 100%;
  max-width:1000px;
  height: 100%;
  display: flex;
`;
const Margin = styled.div`
  margin-left: 210px;
`;
const WorkspaceMargin = styled.div`
  margin-top:40px;
  margin-left:-15px;
`;

const MainPage: FC = () => {
  const dispath = useDispatch();
  useEffect(() => {
    dispath<GetUsers>(getUsers());
    dispath<GetPhotos>(getPhotos());
    dispath<GetTodos>(getTodos());
    dispath<GetPosts>(getPosts());
  }, []);
  return (
    <Router>
      <Wrapper>
        <TopBar />
        <Content>
          <LeftMenu />
          <Switch>
            <Route path="/MainPage">
              <Margin>
                <LatestPublications />
                <SuperSlider />
                <ResumeYourWork />
              </Margin>
            </Route>
            <Route path="/YourNetwork">

              </Route>
            <Route path="/Profile">
            <Profile/>
            </Route>
            <Route path="/publications">
              <Margin>
                <div >
                  <Workspace /> 
                  <WorkspaceMargin><Resume/></WorkspaceMargin>
                </div>
              </Margin>
            </Route>
            <Route path="/PageNotFound">
            <PageNotFound/>
            </Route>
            <Route path="/Workspace">
            <Margin>
                <div >
                  <Workspace /> 
                  <WorkspaceMargin><Resume/></WorkspaceMargin>
                </div>
              </Margin>
            </Route>
            <Route path="/entities">
            <EntityMargin>
              <Entity/>
              </EntityMargin>
            </Route>
          </Switch>
        </Content>
      </Wrapper>
    </Router>
  );
};
export default MainPage;

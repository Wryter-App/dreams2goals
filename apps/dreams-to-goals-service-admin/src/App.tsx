import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GoalList } from "./goal/GoalList";
import { GoalCreate } from "./goal/GoalCreate";
import { GoalEdit } from "./goal/GoalEdit";
import { GoalShow } from "./goal/GoalShow";
import { DreamList } from "./dream/DreamList";
import { DreamCreate } from "./dream/DreamCreate";
import { DreamEdit } from "./dream/DreamEdit";
import { DreamShow } from "./dream/DreamShow";
import { MotivationalContentList } from "./motivationalContent/MotivationalContentList";
import { MotivationalContentCreate } from "./motivationalContent/MotivationalContentCreate";
import { MotivationalContentEdit } from "./motivationalContent/MotivationalContentEdit";
import { MotivationalContentShow } from "./motivationalContent/MotivationalContentShow";
import { MilestoneList } from "./milestone/MilestoneList";
import { MilestoneCreate } from "./milestone/MilestoneCreate";
import { MilestoneEdit } from "./milestone/MilestoneEdit";
import { MilestoneShow } from "./milestone/MilestoneShow";
import { ProgressTrackingList } from "./progressTracking/ProgressTrackingList";
import { ProgressTrackingCreate } from "./progressTracking/ProgressTrackingCreate";
import { ProgressTrackingEdit } from "./progressTracking/ProgressTrackingEdit";
import { ProgressTrackingShow } from "./progressTracking/ProgressTrackingShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"DreamsToGoalsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Goal"
          list={GoalList}
          edit={GoalEdit}
          create={GoalCreate}
          show={GoalShow}
        />
        <Resource
          name="Dream"
          list={DreamList}
          edit={DreamEdit}
          create={DreamCreate}
          show={DreamShow}
        />
        <Resource
          name="MotivationalContent"
          list={MotivationalContentList}
          edit={MotivationalContentEdit}
          create={MotivationalContentCreate}
          show={MotivationalContentShow}
        />
        <Resource
          name="Milestone"
          list={MilestoneList}
          edit={MilestoneEdit}
          create={MilestoneCreate}
          show={MilestoneShow}
        />
        <Resource
          name="ProgressTracking"
          list={ProgressTrackingList}
          edit={ProgressTrackingEdit}
          create={ProgressTrackingCreate}
          show={ProgressTrackingShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

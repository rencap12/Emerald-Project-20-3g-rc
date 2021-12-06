import React from 'react';
import { Route, withRouter, Switch, useHistory } from 'react-router-dom';
import PrivateRoute from './Utils/PrivateRoute';

import Home from './views/Home/Home';
import About from './views/About/About';
import Workspace from './views/Workspace/Workspace';
import Dashboard from './views/Mentor/Dashboard/Dashboard';
import Student from './views/Student/Student';
import NotFound from './views/NotFound';
import StudentLogin from './views/StudentLogin/StudentLogin';
import Sandbox from './views/Sandbox/Sandbox';
import Day from './views/Day/Day';
import Classroom from './views/Mentor/Classroom/Classroom';
import TeacherLogin from './views/TeacherLogin/TeacherLogin';
import ContentCreator from './views/ContentCreator/ContentCreator';
import UnitCreator from './views/ContentCreator/UnitCreator/UnitCreator';
import UploadBlocks from './views/UploadBlocks/UploadBlocks';
import ForgetPassword from './views/TeacherLogin/ForgetPassword';
import ResetPassword from './views/TeacherLogin/ResetPassword';
import BugReport from './views/BugReport/BugReport';

const App = () => {
  let history = useHistory();

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/teacherlogin'>
          <TeacherLogin history={history} />
        </Route>
        <Route exact path='/forgot-password'>
          <ForgetPassword />
        </Route>
        <Route exact path='/reset-password'>
          <ResetPassword />
        </Route>
        <Route exact path='/login'>
          <StudentLogin history={history} />
        </Route>
        <PrivateRoute
          exact
          path='/dashboard'
          render={() => <Dashboard history={history} />}
        />
        <PrivateRoute
          exact
          path='/student'
          render={() => <Student history={history} />}
        />
        <Route path='/workspace'>
          <Workspace history={history} />
        </Route>
        <Route path='/sandbox'>
          <Sandbox history={history} />
        </Route>
        <PrivateRoute
          exact
          path='/day'
          render={() => <Day history={history} />}
        />
        <PrivateRoute
          path='/classroom/:id'
          render={() => <Classroom history={history} />}
        />
        <Route exact path='/ccdashboard'>
          <ContentCreator history={history} />
        </Route>
        <Route exact path='/unitcreator'>
          <UnitCreator history={history} />
        </Route>
        <Route exact path='/addblocks'>
          <UploadBlocks history={history} />
        </Route>
        <Route exact path='/bugreport'>
          <BugReport history={history} />
        </Route>

        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default withRouter(App);

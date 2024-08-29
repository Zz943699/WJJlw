import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat';
import Dashboard from './components/Dashboard';
import TaskManager from './components/TaskManager';
import FileManager from './components/FileManager';
import Schedule from './components/Schedule';
import Contacts from './components/Contacts';
import Groups from './components/Groups';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/chat" component={Chat} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/tasks" component={TaskManager} />
                <Route path="/files" component={FileManager} />
                <Route path="/schedule" component={Schedule} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/groups" component={Groups} />
            </Switch>
        </Router>
    );
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DetailView, TableView } from 'Components';
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={TableView} />
                <Route path="/user/:id" component={DetailView} />
                <Route path="*" component={() => <div>Not Found</div>} />
            </Switch>
        </Router>
    )
}

export default App

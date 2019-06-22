import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DetailView, TableView } from 'Components';
import { DataProvider } from './context/DataProvider'
const App = () => {
    {/* Added Provider so that we do not need to hit api more than once
     i.e it hold apiData until app is mounted and 
    do not need to make another api call */ }
    return (

        <Router>
            <DataProvider>
                <Switch>
                    <Route path="/" exact component={TableView} />
                    <Route path="/user/:id" component={DetailView} />
                    <Route path="*" component={() => <div>Not Found</div>} />

                </Switch>
            </DataProvider>
        </Router >

    )

}

export default App

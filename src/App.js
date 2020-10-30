import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DetailsView, TableView } from './components';
import { DataProvider } from './context/DataProvider';
//Added Provider so that we do not need to hit api more than once i.e it hold apiData until app is mounted and do not need to make another api call
const App = () => {

    return (

        <Router>
            <DataProvider>
                <Switch>
                    <Route path="/" exact component={TableView} />
                    <Route path="/user/:id" component={DetailsView} />
                    <Route path="*" component={() => <div>Not Found</div>} />

                </Switch>
            </DataProvider>
        </Router >

    )

}

export default App

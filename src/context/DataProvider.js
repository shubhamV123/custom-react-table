import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
const DataContext = React.createContext();

class DataProvider extends Component {
    state = {
        loading: true,
        apiData: []
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        try {
            let apiResult = await axios.get('http://demo9197058.mockable.io/users');
            let { data } = apiResult;
            this.setState({ apiData: data, loading: false });
        }
        catch (e) {
            console.log(e);
            this.setState({ loading: false });
        }
    }

    render() {
        if (this.state.loading) return null;
        let { apiData, loading } = this.state;
        return (
            <DataContext.Provider
                value={{
                    apiData: apiData,
                    loading: loading,
                }
                }
            >
                {this.props.children}
            </DataContext.Provider >
        )
    }
}
const DataConsumer = DataContext.Consumer;
const UpdateDataProvider = withRouter(DataProvider)
export { DataConsumer, UpdateDataProvider as DataProvider }

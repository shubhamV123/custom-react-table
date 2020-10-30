import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
const DataContext = React.createContext();
//A Provider to fetch api data once when app is load;

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
            let apiResult = await axios.get('https://raw.githubusercontent.com/shubhamV123/custom-react-table/master/data.json');
            let { data } = apiResult;
            this.setState({ apiData: data, loading: false });
        }
        catch (e) {
            console.log(e);
            this.setState({ loading: false });
        }
    }

    render() {
        if (this.state.loading) return <div>Loading...</div>;
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

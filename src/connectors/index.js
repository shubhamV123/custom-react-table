import React from 'react';
import { DataConsumer } from '../context/DataProvider'

const connectData = (ConnectedComponent) => {
    return (props) => (<DataConsumer>
        {({ apiData }) =>
            <ConnectedComponent apiData={apiData} {...props} />
        }
    </DataConsumer>)
}

export { connectData }
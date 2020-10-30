import React from 'react';
import { Button } from 'reactstrap';
import { connectData } from '../../connectors';
import { formatKeyValues } from '../../formatter'
const DetailsView = ({ match, apiData, history }) => {
    const filteredIdData = apiData.find(data => data.id === Number(match.params.id))
    const renderFilteredData = () => Object.keys(filteredIdData).map(key => {
        return (
            <div className="detail block-center" key={key + "details"}>
                <div className="detail__title">{formatKeyValues(key)}</div>
                <div className="detail__value">{filteredIdData[key]}</div>
            </div>
        )
    });
    return (
        <div>
            {renderFilteredData()}
            <Button className="block-center" onClick={() => history.push("/")}>
                Go Back
            </Button>
        </div>
    )

};

export default connectData(DetailsView);
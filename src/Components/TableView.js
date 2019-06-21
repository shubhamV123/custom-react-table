import React, { Component } from 'react';
import { Input, Row, Col } from 'reactstrap';
import axios from 'axios';
import TableData from './TableData';
import TableHeading from './TableHeading';
import CustomPagination from './CustomPagination';
import { pagination, sortColumn } from '../methods/';
class TableView extends Component {
    state = {
        pageCount: 1,
        totalPage: 0,
        dataPerPage: 5,
        data: [],
        columFilteredData: [],
        currentPage: 1,
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

            this.setState({ data, apiData: data, totalPage: data.length, loading: false });
        }
        catch (e) {
            console.log(e);
            this.setState({ loading: false });
        }
    }
    setPaginationData = () => {
        let paginationData = {
            currentPage,
            totalItems: totalPage,
            maxPages: 5,
            pageSize: 5
        }
        return paginationData;
    }
    handleColumnClick = (field, startIndex, lastIndex) => {
        let sortedData = this.state.data.slice(startIndex, lastIndex).sort(sortColumn("asc", field));
        this.setState({ data: sortedData });
        console.log(sortedData);
        console.log(field, startIndex, lastIndex);
    }
    handlePaginationClick = (page) => {
        this.setState({ currentPage: page, data: this.state.apiData });
    }
    handleChange = (e) => {

        let filteredData = this.state.apiData.filter((data) => {
            return data.first_name.toLowerCase().startsWith(e.target.value.trim().toLowerCase());
        });

        this.setState({ data: filteredData, totalPage: filteredData.length })
        console.log(filteredData);
    }
    render() {
        let { data, totalPage, currentPage } = this.state;
        if (this.state.loading) return null;

        let paginationData = {
            currentPage,
            totalItems: totalPage,
            maxPages: 5,
            pageSize: 5
        }
        console.log("THIS", this.state.data);
        let { totalPages, currentPage: activePage, startIndex, lastIndex, pagesToDisplay } = pagination(paginationData);
        const tableHeading = (
            <TableHeading handleColumnClick={this.handleColumnClick} startIndex={startIndex} lastIndex={lastIndex} />
        );
        return (
            <div>
                <Row className="mt-2 mb-2">
                    <Col md="3"><Input type="email" name="email" id="exampleEmail" placeholder="Search with first name" onChange={this.handleChange} /></Col>
                </Row>
                <TableData tableData={data.slice(startIndex, lastIndex)} tableHeading={tableHeading} />
                <CustomPagination page={pagesToDisplay} totalPages={totalPages} currentPage={activePage} handlePaginationClick={this.handlePaginationClick} />
            </div>
        )
    }
}
export default TableView;
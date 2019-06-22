import React, { Component } from 'react';
import { Input, Row, Col } from 'reactstrap';
import GenerateTable from './GenerateTable';
import { connectData } from '../../connectors';

import TableHeading from './TableHeading';
import CustomPagination from './CustomPagination';
import { pagination, sortColumn } from '../../methods';
//A table view with pagination and search functionality
class TableView extends Component {
    state = {
        pageCount: 1,
        totalPage: 0,
        dataPerPage: 5,
        data: [],
        columFilteredData: [],
        currentPage: 1,
        loading: true,
        apiData: [],
        activeColumn: {
            type: null,
            field: null
        }

    }
    componentDidMount() {
        this.setInitialPageData();
    }
    setInitialPageData() {
        let data = this.props.apiData;
        let { currentPage } = this.state;
        let paginationData = this.setPaginationData(currentPage, data.length);
        let { startIndex, lastIndex } = pagination(paginationData);
        this.setState({ data: data.slice(startIndex, lastIndex), apiData: data, totalPage: data.length, loading: false });
    }

    setPaginationData = (currentPage, totalPage) => {
        let paginationData = {
            currentPage,
            totalItems: totalPage,
            maxPages: 5,
            pageSize: 5
        }
        return paginationData;
    }
    handleColumnClick = (field, startIndex, lastIndex) => {
        //Return if no data found
        if (this.state.data.length === 0) return null;
        let { activeColumn: { type } } = this.state;
        type = type === "asc" ? "desc" : "asc";
        this.setState({ activeColumn: { field, type } });
        let sortedData = this.state.apiData.slice(startIndex, lastIndex).sort(sortColumn(type, field));
        this.setState({ data: sortedData });

    }
    handlePaginationClick = (page) => {
        let paginationData = this.setPaginationData(page + 1, this.state.totalPage);
        let { startIndex, lastIndex } = pagination(paginationData);
        this.setState({
            currentPage: page, data: this.state.apiData.slice(startIndex, lastIndex), activeColumn: {
                type: null,
                field: null
            }
        });
    }
    handleChange = (e) => {

        let filteredData = this.state.apiData.filter((data) => {
            return data.first_name.toLowerCase().startsWith(e.target.value.trim().toLowerCase());
        });
        let paginationData = this.setPaginationData(1, filteredData.length);
        let { startIndex, lastIndex } = pagination(paginationData);

        this.setState({
            data: filteredData.slice(startIndex, lastIndex), currentPage: 1, totalPage: filteredData.length, activeColumn: {
                type: null,
                field: null
            }
        })
    }
    render() {
        let { data, totalPage, currentPage, activeColumn } = this.state;
        if (this.props.loading) return null;

        let paginationData = {
            currentPage,
            totalItems: totalPage,
            maxPages: 5,
            pageSize: 5
        }
        let { totalPages, currentPage: activePage, startIndex, lastIndex, pagesToDisplay } = pagination(paginationData);
        const tableHeading = (
            <TableHeading handleColumnClick={this.handleColumnClick} startIndex={startIndex} lastIndex={lastIndex} activeColumn={activeColumn} />
        );
        return (
            <div>
                <Row className="mt-2 mb-2">
                    <Col md="3"><Input type="email" name="email" id="exampleEmail" placeholder="Search with first name" onChange={this.handleChange} /></Col>
                </Row>
                <GenerateTable tableData={data} tableHeading={tableHeading} />
                <CustomPagination page={pagesToDisplay} totalPages={totalPages}
                    currentPage={activePage}
                    handlePaginationClick={this.handlePaginationClick} />
            </div>
        )
    }
}
export default connectData(TableView);
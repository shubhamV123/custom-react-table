import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import axios from 'axios';
import TableData from './TableData';
import TableHeading from './TableHeading';
import CustomPagination from './CustomPagination';
import { pagination } from '../methods/';
class TableView extends Component {
    state = {
        pageCount: 1,
        totalPage: 0,
        dataPerPage: 5,
        data: [],
        currentPage: 1
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        try {
            let apiResult = await axios.get('http://demo9197058.mockable.io/users');
            let { data } = apiResult;
            this.setState({ data, totalPage: data.length });
        }
        catch (e) {
            console.log(e)
        }
    }
    handleColumnClick = (data) => {
        console.log(data);
    }
    handlePaginationClick = (page) => {
        this.setState({ currentPage: page })
    }
    render() {
        let { data, totalPage, currentPage } = this.state;
        if (data.length === 0) return null;
        const tableHeading = (
            <TableHeading handleColumnClick={this.handleColumnClick} />
        );
        let paginationData = {
            currentPage,
            totalItems: totalPage,
            maxPages: 5,
            pageSize: 5
        }
        let { totalPages, currentPage: activePage, startIndex, lastIndex, pagesToDisplay } = pagination(paginationData);
        console.log(pagesToDisplay)
        return (
            <div>
                TableViews
                <TableData tableData={data.slice(startIndex, lastIndex)} tableHeading={tableHeading} />
                <CustomPagination page={pagesToDisplay} totalPages={totalPages} currentPage={currentPage} handlePaginationClick={this.handlePaginationClick} />
            </div>
        )
    }
}
export default TableView;
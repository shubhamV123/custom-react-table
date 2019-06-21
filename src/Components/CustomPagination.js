import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import '../index.css';
const CustomPagination = ({ page, currentPage, handlePaginationClick, totalPages }) => {
    let prevButtonDisabled = currentPage === 1;
    let nextButtonDisabled = currentPage === totalPages;
    return (
        <Pagination size="lg" aria-label="Page navigation example" style={{ justifyContent: "center" }}>
            <PaginationItem onClick={() => handlePaginationClick(1)} disabled={prevButtonDisabled} className={"cursor-disabled"}>
                <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem disabled={prevButtonDisabled} className={"cursor-disabled"}>
                <PaginationLink previous href="#" />
            </PaginationItem>
            {page.map(data => {
                return (
                    <PaginationItem onClick={() => handlePaginationClick(data)} active={data === currentPage}>
                        <PaginationLink href="#">
                            {data}
                        </PaginationLink>
                    </PaginationItem>
                )
            })}

            <PaginationItem disabled={nextButtonDisabled} className={"cursor-disabled"} >
                <PaginationLink next href="#" />
            </PaginationItem>
            <PaginationItem onClick={() => handlePaginationClick(totalPages)} disabled={nextButtonDisabled} className={"cursor-disabled"}>
                <PaginationLink last href="#" />
            </PaginationItem>
        </Pagination>
    )
}

export default CustomPagination

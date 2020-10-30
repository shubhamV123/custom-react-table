import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
const CustomPagination = ({ page, currentPage, handlePaginationClick, totalPages }) => {
    if (totalPages === 0) return null;
    let prevButtonDisabled = currentPage === 1;
    let nextButtonDisabled = currentPage === totalPages;
    return (
        <Pagination size="lg" aria-label="Page navigation example" style={{ justifyContent: "center" }}>
            {/*Check if current page is first then disabled onCLick functionality */}
            <PaginationItem onClick={prevButtonDisabled ? null : () => handlePaginationClick(1)} disabled={prevButtonDisabled} className={"cursor-disabled"}>
                <PaginationLink first href="#" />
            </PaginationItem>
            {/*Check if current page is first then disabled onCLick functionality */}
            <PaginationItem disabled={prevButtonDisabled} className={"cursor-disabled"} onClick={prevButtonDisabled ? null : () => handlePaginationClick(currentPage - 1)}>
                <PaginationLink previous href="#" />
            </PaginationItem>
            {page.map(data => {
                return (
                    <PaginationItem key={data + "pagination"} onClick={() => handlePaginationClick(data)} active={data === currentPage}>
                        <PaginationLink href="#">
                            {data}
                        </PaginationLink>
                    </PaginationItem>
                )
            })}
            {/*Check if current page is last then disabled onCLick functionality */}
            <PaginationItem disabled={nextButtonDisabled} onClick={nextButtonDisabled ? null : () => handlePaginationClick(currentPage + 1)} className={"cursor-disabled"} >
                <PaginationLink next href="#" />
            </PaginationItem>
            {/*Check if current page is last then disabled onCLick functionality */}
            <PaginationItem onClick={nextButtonDisabled ? null : () => handlePaginationClick(totalPages)} disabled={nextButtonDisabled} className={"cursor-disabled"}>
                <PaginationLink last href="#" />
            </PaginationItem>
        </Pagination>
    )
}

export default CustomPagination

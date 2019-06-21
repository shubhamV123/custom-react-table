function pagination({ currentPage, totalItems, pageSize = 5, maxPages = 5 }) {
    // Calculate total number of page
    let totalPages = Math.ceil(totalItems / pageSize);
    //If currentPage is less than 1 than current page is first page
    if (currentPage < 1) {
        currentPage = 1
    }
    //CurrentPage is greater than totalPages than currentpage is totalPages
    if (currentPage > totalPages) {
        currentPage = totalPages
    }
    let startPage, endPage;

    let maxPagesBeforeCurrentPage, maxPagesAfterCurrentPage;
    maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
    // If totalPages is less than max pages show all pages
    if (totalPages < maxPages) {
        startPage = 1;
        endPage = totalPages;
    }

    //Page nearby startpage
    else if (currentPage <= maxPagesBeforeCurrentPage) {
        startPage = 1;
        endPage = maxPages
    }
    //Page nearby endpage
    else if (currentPage + maxPagesBeforeCurrentPage >= totalPages) {
        startPage = totalPages - maxPages + 1;
        endPage = totalPages
    }
    //page somewhere in middle
    else {
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage
    }
    let pagesToDisplay = Array.from(Array(((endPage + 1) - startPage)), (_, index) => startPage + index);

    let startIndex = (currentPage - 1) * maxPages;
    let lastIndex = currentPage * maxPages;
    return {
        startPage,
        endPage,
        currentPage,
        pagesToDisplay,
        totalPages,
        startIndex,
        lastIndex
    }
}
export default pagination;
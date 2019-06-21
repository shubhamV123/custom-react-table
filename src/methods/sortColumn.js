const sortColumn = (type, property) => {
    let sortOrder = 1; //ascending
    if (type === "desc") {
        sortOrder = -1;
    }
    return function (a, b) {
        if (sortOrder === -1) {//descending
            if (typeof b[property] === "number") {
                return b[property] - a[property];
            }
            else {
                return b[property].localeCompare(a[property]);
            }

        }
        else {
            if (typeof b[property] === "number") {
                return a[property] - b[property];
            }
            else {
                return a[property].localeCompare(b[property])
            }
        }
    }
}

export default sortColumn;
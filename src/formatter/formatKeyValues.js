const DATA_HEADING = {
    "first_name": "First Name",
    "last_name": "Last Name",
    "company_name": "Company Name"

}


const formatKeysValue = (key) => {
    if (key in DATA_HEADING) {
        return DATA_HEADING[key]
    }
    return key.charAt(0).toUpperCase() + key.slice(1);;
}

export default formatKeysValue;
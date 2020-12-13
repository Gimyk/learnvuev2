const url = 'http://localhost:8000'

async function get_data(endpoint) {
    const requestOptions = {
        method: "GET",
    };
    const response = await fetch(
        `${url}/${endpoint}`,
        requestOptions
    ).then(async(response) => {
        let rr = await response.json();
        rr['code'] = response.status
        return rr;
    }).catch((error) => {
        console.log(error)
    });
    return await response;
}

async function post_data(endpoint, data, header = '') {
    const requestOptions = {
        method: "POST",
        headers: header || { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };
    const response = await fetch(
        `${url}/${endpoint}`,
        requestOptions
    ).then(async(response) => {
        let rr = await response.json();
        rr['code'] = response.status
        return rr;
    }).catch((error) => {
        console.log(error)
    });
    return await response;
}

module.exports = {
    http_post: post_data,
    http_get: get_data,
};
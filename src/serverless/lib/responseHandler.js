
const responseHandler = ( status, body) => {

return {
    headers : {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credential" : true //Required for cookies, authorization headers with https   
    },
    status,
    body:JSON.stringify(body)
};
}

module.exports ={
    responseHandler
}
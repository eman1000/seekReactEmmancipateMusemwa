import request from 'superagent';
const defaultAjaxTimeout = 3000;
request.Request.prototype.finish = function (callback) {
    // this replaces superagent's .end() function to include our custom error handling (see above)
    this.end((err,res)=>{
        callback(err,res);
    });
};

var requestWrapper = function(method) {
    // this is here so that we can append the .timeout call to all of our ajax requests with the default value.
    return function(url) {
        return request[method](url)
            .timeout(defaultAjaxTimeout);
    };
};
export default {
    get: requestWrapper('get'),
    put: requestWrapper('put'),
    post: requestWrapper('post'),
    del: requestWrapper('del'),
};

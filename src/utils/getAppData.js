export const getAppData = async (url) => {
    let path;
    if(window.location.href.indexOf('localhost') !== -1){
        path = process.env.REACT_APP_API_PROD;
    } else {
        path = process.env.REACT_APP_API_PROD;
    }
    let response = await fetch(`${path}/?rest_route=/wp/v2/${url}`);
    // let response = await fetch(`${path}/?rest_route=/wp/v2/av02_1&_embed`);
    const res = await response.json();
    return res;
};

export const getAppData = async (url) => {
    let path;
    if(window.location.href.indexOf('localhost') !== -1){
        path = process.env.REACT_APP_API_PROD;
    } else {
        path = process.env.REACT_APP_API_PROD;
    }
    let response = await fetch(`${path}/?rest_route=/wp/v2/${url}&per_page=100`);


    const res = await response.json();
    return res;
};
export const getPeople = async () => {
    let path;
    if(window.location.href.indexOf('localhost') !== -1){
        path = process.env.REACT_APP_API_PROD;
    } else {
        path = process.env.REACT_APP_API_PROD;
    }
    let response = await fetch(`${path}/wp-json/aka/site`);

    const res = await response.json();
    return res;
};

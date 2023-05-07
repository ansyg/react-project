import axios from "axios";
// import handlers from "./successErrorHandlers";
//set current users headers and token
// console.log('the Handlers', handlers);
axios.defaults.headers.common["Accept"] = `application/json`;
axios.defaults.headers.common["Content-Type"] = `application/json`;
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
const errorHandler = (error) => {
    //console.log('errors kk ',error.response.data.errors);

    const errorCodes = [500, 400, 401, 403, 404, 405, 409, 422];

    if (errorCodes.includes(error.response)) {
        console.log("show errors here", error.response);
    }

    return Promise.reject({ ...error });
};

const successHandler = (response) => {
    console.log('success -response', response)

    switch (response.config.method) {
        case "put":
        case "post":
        case "delete":
            // //sweetAlerts Segment
            // sweetAlert.icon = 'success';
            // sweetAlert.title = 'Successful...';
            // sweetAlert.html = `<h3 style="color:green">${response?.data?.message} .</h3>`;

            // if (response.data.message) {
            //     store.state.SweetAlert.sweetAlerts = {};//resets keys of Sweet alerts
            //     store.state.SweetAlert.sweetAlerts = sweetAlert;//sets keys after reset

            // }
            console.log("success", response.data.message);
            break
        default:
            return response
    }

    //store.state.SweetAlert.sweetAlerts = {};

    return response;
};

const requestHandler = request => {
    return request;
};
// Add interceptors
axios.interceptors.request.use(request => {
    //set current users headers and token
    // console.log(request)



    // request.headers["Authorization"] = currentUser ? `Bearer ${currentUser.token}` : null


    return requestHandler(request)
},

    (error) => {

        return Promise.reject(error);
    }
);
axios.interceptors.response.use(

    response => {


        return successHandler(response)
    },

    error => {

        console.log('error -response', error)

        return errorHandler(error)
    }
);

axios.interceptors.response.use((response) => {

    return response;
}, (error) => {

    console.log('error,', error);

    if (error?.response?.status === 429) {
        // If the error has status code 429, retry the request
        //  const currentUser = store.getters.currentUser;

        // const token = currentUser.token;
        // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return axios.request(error.config);

    }
    return Promise.reject(error);
});


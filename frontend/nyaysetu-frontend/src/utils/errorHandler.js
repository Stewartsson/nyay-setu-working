export const getErrorMessage = (error) => {
        if (error.code === "ECONNABORTED") {
        return "Request timed out. The server took too long to respond. Please try again.";
    }

    if (!error.response) {
        console.error("Request failed:", error);
        return "AI service is currently unavailable. Please try again later.";
    }

    switch (error.response.status) {
        case 400:
            return error.response.data?.message || "Bad request.";
        case 401:
            return "Session expired. Please login again.";
        case 403:
            return "You are not authorized to perform this action.";
        case 404:
            return "Requested resource not found.";
        case 500:
            return "Internal server error. Please try again later.";
        default:
            return error.response.data?.message || "Something went wrong.";
    }
};
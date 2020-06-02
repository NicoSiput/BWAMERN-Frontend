import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function errorResponseHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      message = error.response.data.message;
      toast(message);
      return Promise.reject(error);
    }
  }
}

export default errorResponseHandler;

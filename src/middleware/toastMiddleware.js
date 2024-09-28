import { toast } from "react-toastify";

const toastMiddleware = (store) => {
  return (next) => (action) => {
    switch (action.type) {
      case "auth/loginSuccess":
        toast.success("Logged in successfully.");
          toast.success(`Welcome to your dashboard, ${action.payload.user.name}`);
        break;
      case "auth/loginFailure":
        toast.error(action.payload);
        break;
      case "auth/signupSuccess":
        toast.success("Signup successful");
        break;
      case "auth/sigupFailure":
        toast.error(action.payload);
        break;
      case "auth/logout":
        toast.info("Logged out successfully.");
        break;
      default:
        break;
    }

    return next(action);
  };
};

export default toastMiddleware;

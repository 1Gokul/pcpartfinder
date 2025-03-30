import toast from "react-hot-toast";

export const handleQueryError = (error: unknown) => {
  toast.error(`Something went wrong. Query hash - ${String(error)}`);
};

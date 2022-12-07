import { Query } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const handleQueryError = (error: unknown) => {
  toast.error(`Something went wrong. Query hash - ${error}`);
};

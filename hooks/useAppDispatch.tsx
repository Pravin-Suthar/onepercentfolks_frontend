import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store"; // Adjust the path as needed

export const useAppDispatch = () => useDispatch<AppDispatch>();

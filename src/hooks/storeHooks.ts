import type { RootState, AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

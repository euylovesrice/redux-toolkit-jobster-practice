import customFetch from "../../utils/axios";
import { checkForUnauthorizedResponse } from "../../utils/axios";

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const { data } = await customFetch.get("/jobs/stats");
    return data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const getAllJobsThunk = async (_, thunkAPI) => {
  const { searchStatus, searchType, sort, page, search } =
    thunkAPI.getState().allJobs;

  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;

  if (search) {
    url = url + `&search=${search}`;
  }

  try {
    const { data } = await customFetch.get(url);
    return data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

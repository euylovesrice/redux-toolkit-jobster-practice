import { FormRow, FormRowSelect } from "./";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useSelector, useDispatch } from "react-redux";
import { handleChange, clearFilters } from "../features/allJobs/allJobsSlice";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  const handleSearchInput = (e) => {
    // if (isLoading) return;
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearchInput}
          />
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearchInput}
            list={["all", ...statusOptions]}
          />
          <FormRowSelect
            labelText="job type"
            name="searchType"
            value={searchType}
            handleChange={handleSearchInput}
            list={["all", ...jobTypeOptions]}
          />
          <FormRowSelect
            labelText="sort by"
            name="sort"
            value={sort}
            handleChange={handleSearchInput}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            type="button"
            onClick={() => dispatch(clearFilters())}
            disabled={isLoading}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;

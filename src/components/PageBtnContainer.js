import Wrapper from "../assets/wrappers/PageBtnContainer";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { goToPage } from "../features/allJobs/allJobsSlice";

const PageBtnContainer = () => {
  const dispatch = useDispatch();
  const { page, numOfPages } = useSelector((store) => store.allJobs);

  const pages = Array.from({ length: numOfPages }, (_, i) => i + 1);

  const handlePageNavigation = (value) => {
    let newPage;
    if (value === "prev") {
      newPage = page - 1;
      if (newPage < 1) newPage = numOfPages;
    }
    if (value === "next") {
      newPage = page + 1;
      if (newPage > numOfPages) newPage = 1;
    }
    dispatch(goToPage(newPage));
  };

  return (
    <Wrapper>
      <button
        className="prev-btn"
        type="button"
        onClick={() => handlePageNavigation("prev")}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((currentPage, i) => {
          return (
            <button
              key={i}
              className={currentPage === page ? "pageBtn active" : "pageBtn"}
              type="button"
              onClick={() => dispatch(goToPage(currentPage))}
            >
              {currentPage}
            </button>
          );
        })}
      </div>
      <button
        className="next-btn"
        type="button"
        onClick={() => handlePageNavigation("next")}
      >
        <HiChevronDoubleRight />
        next
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;

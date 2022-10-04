import { useState, useRef, useEffect } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSidebar,
  logoutUser,
  clearStore,
} from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const {
    user: { user },
  } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const hideDropdown = (e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      !buttonRef.current.contains(e.target)
    ) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", hideDropdown);
    return () => document.removeEventListener("click", hideDropdown);
  }, []);

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-btn"
          type="button"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            type="button"
            onClick={() => setDropdown(!dropdown)}
            ref={buttonRef}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div
            className={dropdown ? "dropdown show-dropdown" : "dropdown"}
            ref={dropdownRef}
          >
            <button
              className="dropdown-btn"
              type="button"
              onClick={() => {
                dispatch(clearStore("Logout successful! See you soon."));
                navigate("/landing");
              }}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;

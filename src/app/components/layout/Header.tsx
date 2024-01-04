import { useEffect } from "react";
import { sideBarShowReducer } from "../../reducers/layoutSlice";
import { getUserInfo } from "../../reducers/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import Account from "./comp/Account";
import MutilLanguage from "./comp/MutilLanguage";

export default function Header() {
  const dispatch = useAppDispatch();
  const sideBarShow = useAppSelector((state) => state.layout.sideBarShow);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  useEffect(() => {
    // const script = document.createElement('script');
    // script.src = process.env.PUBLIC_URL + "/assets/js/app.js";
    // script.async = true;
    // document.body.appendChild(script);
    // return () => {
    //     document.body.removeChild(script);
    // }
  }, []);

  return (
    // style={!sideBarShow ? {left: 70} : {}}
    <header
      id="page-topbar"
      className={`${!sideBarShow ? "class-sidebar-left" : ""}`}
    >
      <div className="layout-width">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="d-flex">
              <button
                type="button"
                className="btn btn-sm px-3 fs-16 vertical-menu-btn topnav-hamburger shadow-none"
                onClick={() => {
                  var innerWidth = window.innerWidth;
                  if (innerWidth > 1200) {
                    dispatch(sideBarShowReducer(!sideBarShow));
                  } else if (innerWidth < 768) {
                    document.getElementById("trigger_menus")?.click();
                  }
                }}
                id="topnav-hamburger-icon"
              >
                <span
                  className={`hamburger-icon${!sideBarShow ? " open" : ""}`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
            <div className="d-flex">
              <input
                type="text"
                className="form-control search_menu"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <MutilLanguage />
            <Account />
          </div>
        </div>
      </div>
      <button className="btn btn-danger btn-icon" id="back-to-top">
        <i className="ri-arrow-up-line"></i>
      </button>
    </header>
  );
}

import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import Breadcrumbs from "./comp/Breadcrumbs";

import Header from "./Header";
import Sidebar from "./Sidebar";
import SidebarSmall from "./SidebarSmall";
import { useEffect, useState } from "react"
import { sideBarShowReducer, sideBarShowReducerSmall } from "../../reducers/layoutSlice";
import Nav from "./Nav/Nav";

export default function Layout() {

    const spinner = useAppSelector(state => state.spinner.loading)
    const sideBarShow = useAppSelector(state => state.layout.sideBarShow)
    const sideBarShowSmall = useAppSelector(state => state.layout.sideBarShowSmall)
    const dispatch = useAppDispatch();
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {

        if (width > 768 && width < 1200) {
            dispatch(sideBarShowReducer(false))
        } else if (width < 768) {
            dispatch(sideBarShowReducerSmall(true))
        }

        const resizeListener = () => {
            // change width from the state object
            var innerWidth = window.innerWidth;
            if (innerWidth < 768) {
                dispatch(sideBarShowReducer(true))
            } else if (innerWidth < 1200) {
                dispatch(sideBarShowReducer(false))
            } else {
                dispatch(sideBarShowReducer(true))
            }

            if (innerWidth < 768) {
                dispatch(sideBarShowReducerSmall(true))
            } else {
                dispatch(sideBarShowReducerSmall(false))
            }
        };

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, [])

    return (
        <>
            {
                spinner && (
                    <div className="progress-spinner text-center">
                        <div className="lds-spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                )
            }
            <div id="layout-wrapper">
                <Nav />
                <Outlet />
                {/* <Header />
                {
                    !sideBarShowSmall ? <Sidebar /> : <SidebarSmall />
                }
                <div className={`main-content ${!sideBarShow ? 'class-sidebar-m-left' : ''}`} >
                    <div className="page-content">
                        <div className="container-fluid">
                            <Breadcrumbs />
                            <div className="row">
                                <div className="col-lg-12">
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}
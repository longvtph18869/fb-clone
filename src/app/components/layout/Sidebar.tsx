
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { HeadersUtil } from '../../utils/headersUtil';

// import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
// import QueryStatsIcon from '@mui/icons-material/QueryStats';
// import ApiIcon from '@mui/icons-material/Api';
// import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
// import ForestIcon from '@mui/icons-material/Forest';
import NavGroup from './comp/NavGroup';
import { setMenus } from '../../reducers/sidebarSlice';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { useNavigate } from 'react-router';

export const icons: any = {
    // "MNU_01": <SettingsApplicationsIcon />,
    // "MNU_02": <ForestIcon />,
    // "MNU_03": <WorkspacePremiumIcon />,
    // "MNU_04": <QueryStatsIcon />,
    // "MNU_05": <ApiIcon />
}

export default function Sidebar() {

    const navagite = useNavigate();
    const [menus, setMenu] = useState<any>([])
    const dispatch = useAppDispatch();
    const sideBarShow = useAppSelector(state => state.layout.sideBarShow)

    useEffect(() => {
        function convertMenu(menus: any) {
            var map: any = {};
            var roots: any[] = [];
            var node;
            for (let i = 0; i < menus.length; i++) {
                map[menus[i].menuId] = i;
            }

            for (let i = 0; i < menus.length; i++) {
                node = menus[i];
                if (node.tsstMenu != null || node.tsstMenu != undefined) {
                    menus[map[node.tsstMenu.menuId]].tsstMenuDtos.push(node);
                } else {
                    roots.push(node);
                }
            }
            return roots;
        }

        axios.get(process.env.REACT_APP_API_URL + "/sys/sys0101/getMenuByUser.exclude", {
            headers: HeadersUtil.getHeadersAuth()
        }).then((resp) => {
            const data = resp.data
            if (data.status) {
                const temp = convertMenu(data.responseData)
                setMenu(temp)
                dispatch(setMenus(resp.data.responseData))
            }
        }).catch((error) => {
            toast.error(error)
        })
    }, [])

    return (
        // style={!sideBarShow ? { width: "70px" } : {}
        <div className={`app-menu navbar-menu ${!sideBarShow ? 'class-sidebar-width' : ''}`}>
            <div className="navbar-brand-box" style={{ padding: 0 }}>
                <a onClick={() => navagite("/dashboard")} className="logo logo-dark">
                    {
                        sideBarShow ? (
                            <>
                                <span className="logo-lg">
                                    <img src="/assets/images/logo-green.png" alt="" height="40" />
                                </span>
                            </>
                        ) : (
                            <>
                                <span className="logo-lg">
                                    <img src="/assets/images/logo-green.png" alt="" height="16" />
                                </span>
                            </>
                        )
                    }
                </a>
                <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                    <i className="ri-record-circle-line"></i>
                </button>
            </div>
            <div id="scrollbar">
                <div className="container-fluid">
                    <div id="two-column-menu">
                    </div>
                    <ul className="navbar-nav" id="navbar-nav">
                        <NavGroup items={menus} showIcon={true} />
                    </ul >
                </div >
            </div >
            <div className="sidebar-background"></div>
        </div >
    )
}

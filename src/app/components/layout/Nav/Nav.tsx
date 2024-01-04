import { useEffect, useState } from "react";
import "./Nav.style.css"
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../../../assets/images/icons/home.svg"
import { ReactComponent as WatchIcon } from "../../../../assets/images/icons/watch.svg"
import { ReactComponent as MarketIcon } from "../../../../assets/images/icons/market.svg"
import { ReactComponent as GroupIcon } from "../../../../assets/images/icons/group.svg"
import { ReactComponent as GameIcon } from "../../../../assets/images/icons/game.svg"
import { ReactComponent as MenuIcon } from "../../../../assets/images/icons/menu.svg"
import { ReactComponent as MessengerIcon } from "../../../../assets/images/icons/messenger.svg"
import { ReactComponent as NotiIcon } from "../../../../assets/images/icons/noti.svg"
import { ReactComponent as LogoutIcon } from "../../../../assets/images/icons/logout.svg"
import Cookies from "universal-cookie";
import { AuthConstant } from "../../../constants/authConstant";
export default function Nav() {
    const [isOpen, setIsOpen] = useState<any>(false)
    const cookies = new Cookies()
    useEffect(() => {

    }, []);

    const handleLogout = () => {
        cookies.remove(AuthConstant.ACCESS_TOKEN)
        let doamin = window.location.origin;
        
        window.location.href = process.env.REACT_APP_AUTH_URL + "/login?pre_action=logout&redirect_uri=" + doamin|| "";
    }
    return (
        <>
            <div className="nav-container">
                <div className="nav">
                    <div className="slide-nav">
                        <NavLink
                            to="/"><img className="image-circle"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
                                alt="Odinbook"
                            /></NavLink>
                    </div>
                    <div className="center-nav">
                        <NavLink
                            to="/">
                            <HomeIcon />
                        </NavLink>
                        <NavLink
                            to="/">
                            <WatchIcon />
                        </NavLink>
                        <NavLink
                            to="/">
                            <MarketIcon />
                        </NavLink>
                        <NavLink
                            to="/">
                            <GroupIcon />
                        </NavLink>
                        <NavLink
                            to="/">
                            <GameIcon />
                        </NavLink>
                    </div>
                    <div className="slide-nav">
                        <div className="nav-button">
                            <div className="button-icon">
                                <MenuIcon />
                            </div>
                        </div>
                        <div className="nav-button">
                            <div className="button-icon">
                                <MessengerIcon />
                            </div>
                        </div>
                        <div className="nav-button">
                            <div className="button-icon">
                                <NotiIcon />
                            </div>
                        </div>
                        <div className="nav-dropdown">
                            <img onClick={() => setIsOpen(!isOpen)} className="image-circle"
                                src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/404692249_1772094026567926_3059343560678453621_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=r2ua7iPcyrQAX_shWUm&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAr8gYaYdMA3tSUocRFx1lK_QRqFOG694MqHOqmp8IQvg&oe=6597BE7A"
                                alt="Odinbook"
                            />
                            {isOpen && (
                                <div className="nav-dropdown-dialog">
                                    <div onClick={handleLogout} className="dropdown-link">
                                        <div className="nav-button">
                                            <div className="button-icon">
                                                <LogoutIcon />
                                            </div>
                                        </div>
                                        <span>Đăng xuất</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

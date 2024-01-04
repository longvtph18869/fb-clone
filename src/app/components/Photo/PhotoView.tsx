import { useCallback, useEffect, useState } from "react"
import "./PhotoView.style.css"
import { NavLink, useNavigate } from "react-router-dom"
import { ReactComponent as NextIcon } from "../../../assets/images/icons/next.svg"
import { ReactComponent as PreviousIcon } from "../../../assets/images/icons/previous.svg"
import { ReactComponent as PublicIcon } from "../../../assets/images/icons/public.svg"
import { ReactComponent as LikeIcon } from "../../../assets/images/icons/like.svg"
import { ReactComponent as LoveIcon } from "../../../assets/images/icons/love.svg"
import likeImage from "../../../assets/images/icons/like.gif";
import loveImage from "../../../assets/images/icons/love.gif";
import hahaImage from "../../../assets/images/icons/haha.gif";
import wowImage from "../../../assets/images/icons/wow.gif";
import sadImage from "../../../assets/images/icons/sad.gif";
import angryImage from "../../../assets/images/icons/angry.gif";
export default function PhotoView() {
    const navigate = useNavigate();
    const goBack = useCallback(() => navigate(-1), [navigate]);
    useEffect(() => {
    }, [])


    return (
        <><div className="photo-container">
            <div className="photo-view-container col-9">
                <div className="home-back">
                    <button onClick={goBack}>
                        <i className="home-back-icon"></i>
                    </button>
                    <NavLink
                        to="/"><img className="image-circle"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
                            alt="Odinbook"
                        /></NavLink>
                </div>
                <div className="slide-button">
                    <button className="previous-button">
                        <PreviousIcon />
                    </button>
                    <button className="previous-button">
                        <NextIcon />
                    </button>
                </div>
                <img className="display-image" src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="photo-post-content col-3">
                <div className="post-container">
                    <div className="post-detail">
                        <div className="post-first-row">
                            <span>
                                <NavLink
                                    to="/"><img className="image-circle"
                                        src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/404822845_1287569742643909_2748016673575366657_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=3naMeQfdV-oAX8Cqi02&_nc_ht=scontent.fhan5-10.fna&oh=00_AfDkPTj0aIPvIhiGLVEsN1bOQhVSahUX-JAoKxohAV1exQ&oe=659A0857"
                                        alt="Odinbook"
                                    /></NavLink>
                            </span>
                            <div className="post-first-row-middle">
                                <span className="post-title">
                                    <NavLink
                                        to="/">Nguyễn Linh</NavLink>
                                </span>
                                <div className="post-date">
                                    <span>4 giờ</span>
                                    <span>·</span><PublicIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post-content mb-2">
                        <span className="post-body-text">
                            Phải duyên ta lại thắm nồng cùng nhau
                        </span>
                        <span className="hashtag">
                            #photo
                        </span>
                    </div>
                    <div className="post-social-display">
                        <div className="reaction-container">
                            <div className="reaction-emoji">
                                <span className="first-element"><LikeIcon /></span>
                                <span className="second-element"><LoveIcon /></span>
                            </div>
                            <div className="reaction-text">
                                <span>180</span>
                            </div>
                        </div>
                        <div className="comment-share-container">
                            <button>
                                <span>25 bình luận</span>
                            </button>
                            <button>
                                <span>7 lượt chia sẻ</span>
                            </button>
                        </div>
                    </div>
                    <div className="post-social">
                        <div className="button-reaction-container">
                            <button className="social-option-button">
                                <figure>
                                    <img src={likeImage} alt="Like emoji" />
                                    <img src={loveImage} alt="Love emoji" />
                                    <img src={hahaImage} alt="Haha emoji" />
                                    <img src={wowImage} alt="Wow emoji" />
                                    <img src={sadImage} alt="Sad emoji" />
                                    <img src={angryImage} alt="Angry emoji" />
                                </figure>
                                <span><i className="like"></i>Thích</span>
                            </button>
                            <button className="social-option-button"><i className="comment"></i>Bình luận</button>
                            <button className="social-option-button"><i className="share"></i>Chia sẻ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
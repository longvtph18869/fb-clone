import { useEffect, useState } from "react"
import "./PostView.style.css"
import { NavLink } from "react-router-dom"
import { ReactComponent as PublicIcon } from "../../../assets/images/icons/public.svg"
import { ReactComponent as LikeIcon } from "../../../assets/images/icons/like.svg"
import { ReactComponent as LoveIcon } from "../../../assets/images/icons/love.svg"
import User1 from "../../../assets/images/users/user-1.jpg";
import User2 from "../../../assets/images/users/user-2.jpg";
import likeImage from "../../../assets/images/icons/like.gif";
import loveImage from "../../../assets/images/icons/love.gif";
import hahaImage from "../../../assets/images/icons/haha.gif";
import wowImage from "../../../assets/images/icons/wow.gif";
import sadImage from "../../../assets/images/icons/sad.gif";
import angryImage from "../../../assets/images/icons/angry.gif";
import AppDialog from "../commons/AppDialog"
import PostDetail from "./PostDetail"
export default function PostView() {
    const [selectedImages, setSelectedImages] = useState<string[]>([
        "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2453551/pexels-photo-2453551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1626334/pexels-photo-1626334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        // "https://images.pexels.com/photos/1653631/pexels-photo-1653631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        // "https://images.pexels.com/photos/1033922/pexels-photo-1033922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        // "https://images.pexels.com/photos/216662/pexels-photo-216662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ]);
    const [openDialog, setOpen] = useState(false);
    useEffect(() => {
    }, [])
    const closeDialog = (data?: any) => {
        setOpen(false);

    };


    return (
        <>
            <AppDialog
                open={openDialog}
                className={"dialog"}
                width={{ maxWidth: "md", fullWidth: true }}
                onClose={closeDialog}
                title="Bài viết của Linh"
            >
                <PostDetail />
            </AppDialog>
            <div className="post-container">
                <div className="post-first-row">
                    <span>
                        <NavLink
                            to="/"><img className="image-circle"
                                src={User1}
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
                <div className="post-content mb-2">
                    <span className="post-body-text">
                        Phải duyên ta lại thắm nồng cùng nhau
                    </span>
                    <span className="hashtag">
                        #photo
                    </span>
                </div>
                <div className={'photo-preview  ' + (selectedImages.length === 1 ? "photo-preview-1" : (selectedImages.length === 2 ? "photo-preview-2" : (selectedImages.length == 3 ? "photo-preview-3" : (selectedImages.length == 4 ? "photo-preview-4" : (selectedImages.length >= 5 ? "photo-preview-5" : "")))))}>
                    {selectedImages?.slice(0, 5).map((image, index) => {
                        const isLastPhoto = index === 4;
                        return (
                            <NavLink key={index} className="image-container"
                                to={`/post/215452684/photo?id=1440192576532700`}>
                                <img src={image} alt="preview" />
                                {selectedImages.length > 5 && isLastPhoto && (
                                    <div className="hidden-overlay">
                                        +{selectedImages.length - 5}
                                    </div>
                                )}
                            </NavLink>
                        );
                    })}
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
                        <button onClick={() => setOpen(true)}>
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
                <div className="comment-input">
                    <div className="comment-container">
                        <span>
                            <NavLink
                                to="/"><img className="image-circle-32"
                                    src={User2}
                                    alt="Odinbook"
                                /></NavLink>
                        </span>
                        <form className="comment-form">
                            <label className="comment-lable">
                                <input
                                    type="text"
                                    placeholder="Viết bình luận công khai..."
                                />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
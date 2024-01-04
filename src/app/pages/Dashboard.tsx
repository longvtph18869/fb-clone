import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import "./Dashboard.style.css"
import { NavLink } from "react-router-dom";
import { ReactComponent as ImageIcon } from "../../assets/images/icons/image.svg"
import { ReactComponent as EmojiIcon } from "../../assets/images/icons/emoji.svg"
import { ReactComponent as CheckinIcon } from "../../assets/images/icons/checkin.svg"
import User2 from "../../assets/images/users/user-2.jpg";
import PostForm from "../components/Post/PostForm";
import AppDialog from "../components/commons/AppDialog";
import PostView from "../components/Post/PostView";
export default function Dashboard() {
    const { t } = useTranslation()
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
                className={"dialog dialog-post-form"}
                width={{ maxWidth: "sm", fullWidth: true }}
                onClose={closeDialog}
                title="Tạo bài viết"
            >
                <PostForm />
            </AppDialog>
            <div className="container-center">
                <div className="container-center-content">
                    <div className="container-post">
                        <div className="create-post-button">
                            <div className="first-row-create-post">
                                <NavLink
                                    to="/"><img className="image-circle"
                                        src={User2}
                                        alt="Odinbook"
                                    /></NavLink>
                                <button className="input-create-post" onClick={() => setOpen(true)}><span>Long ơi, bạn đang nghĩ gì thế?</span></button>
                            </div>
                            <div className="last-row-create-post">
                                <button className="create-type-button standard-button" onClick={() => setOpen(true)}>
                                    <ImageIcon />
                                    <span>Ảnh/video</span>
                                </button>
                                <button className="create-type-button standard-button" onClick={() => setOpen(true)}>
                                    <EmojiIcon />
                                    <span>Cảm xúc/Hoạt động</span>
                                </button>
                                <button className="create-type-button standard-button" onClick={() => setOpen(true)}>
                                    <CheckinIcon />
                                    <span>Check In</span>
                                </button>
                            </div>
                        </div>
                        <PostView />
                        <PostView />
                    </div>
                </div>
            </div>
        </>
    )
}
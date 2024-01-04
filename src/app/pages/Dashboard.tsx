import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import "./Dashboard.style.css"
import { NavLink } from "react-router-dom";
import { ReactComponent as ImageIcon } from "../../assets/images/icons/image.svg"
import { ReactComponent as EmojiIcon } from "../../assets/images/icons/emoji.svg"
import { ReactComponent as CheckinIcon } from "../../assets/images/icons/checkin.svg"
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
                                        src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/404692249_1772094026567926_3059343560678453621_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=r2ua7iPcyrQAX_shWUm&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAr8gYaYdMA3tSUocRFx1lK_QRqFOG694MqHOqmp8IQvg&oe=6597BE7A"
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
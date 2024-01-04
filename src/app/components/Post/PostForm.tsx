import { useEffect, useState } from "react"
import "./PostForm.style.css"
import { NavLink } from "react-router-dom"
import { ReactComponent as PublicIcon } from "../../../assets/images/icons/public.svg"
import { ReactComponent as CloseIcon } from "../../../assets/images/icons/close.svg"
import { ReactComponent as AddPhotoIcon } from "../../../assets/images/icons/add-photo.svg"
import { ReactComponent as CheckinIcon } from "../../../assets/images/icons/checkin.svg"
import User1 from "../../../assets/images/users/user-1.jpg";
import User2 from "../../../assets/images/users/user-2.jpg";
import ImageIcon from "../../../assets/images/icons/image.png";
import TagIcon from "../../../assets/images/icons/tag.png";
import EmojiIcon from "../../../assets/images/icons/emoji.png";
import LocationIcon from "../../../assets/images/icons/location.png";
export default function PostForm() {
    const [value, setValue] = useState('');
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    useEffect(() => {
    }, [])

    const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const selectedImagesArray = Array.from(files) as File[];
            setSelectedImages((prevSelectedImages) => [...prevSelectedImages, ...selectedImagesArray]);
        }
    };

    return (
        <>
            <form className="base-post-form">
                <div className="user-info">
                    <NavLink
                        to="/"><img className="image-circle"
                            src={User2}
                            alt="Odinbook"
                        /></NavLink>
                    <div>
                        <span className="full-name">Anh Long</span>
                        <div>
                            <button className="radio-form-button"><PublicIcon /><span>Công khai</span> <i className="arrow-down"></i></button>
                        </div>
                    </div>
                </div>
                <div className="base-form-scroll">
                    <div>
                        <textarea className="post-text-area" onChange={handleChange}
                            rows={value.split('\n').length} placeholder="Long ơi, bạn đang nghĩ gì thế?"></textarea>
                    </div>
                    <div className="photo-container">
                        <button onClick={() => setSelectedImages([])} className="photo-close-button">
                            <CloseIcon />
                        </button>
                        <div>
                            <label className={selectedImages?.length == 0 ? "add-photo" : 'add-photo-more'} htmlFor="add-photo-post">
                                <input
                                    id="add-photo-post"
                                    hidden
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={handleImageSelect}
                                />
                                {selectedImages?.length == 0 && (
                                    <> <AddPhotoIcon />
                                        <p style={{ fontWeight: "600", paddingTop: "0.375rem", fontSize: "1.125rem", marginBottom: "0" }}>Thêm ảnh/video</p>
                                        <p style={{ fontWeight: "400", color: "rgb(101, 103, 107)", fontSize: "0.7rem", marginBottom: "0" }}>hoặc kéo và thả</p></>
                                )}
                                {selectedImages?.length > 0 && (
                                    <>
                                        <button className="standard-button" >
                                            <span>Thêm ảnh/video</span>
                                        </button>
                                    </>
                                )}
                            </label>
                            <div className={'photo-preview ' + (selectedImages.length === 1 ? "photo-preview-1" : (selectedImages.length === 2 ? "photo-preview-2" : (selectedImages.length == 3 ? "photo-preview-3" : (selectedImages.length == 4 ? "photo-preview-4" : (selectedImages.length >= 5 ? "photo-preview-5" : "")))))}>
                                {selectedImages?.slice(0, 5).map((image, index) => {
                                    const isLastPhoto = index === 4;
                                    return (
                                        <div key={index} className="image-container">
                                            <img src={URL.createObjectURL(image)} alt="preview" />
                                            {selectedImages.length > 5 && isLastPhoto && (
                                                <div className="hidden-overlay">
                                                    +{selectedImages.length - 5}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-button">
                    <span className="post-button-text">
                        Thêm vào bài viết của bạn
                    </span>
                    <div className="post-button-icon">
                        <button className="add-post-button">
                            <img src={ImageIcon} alt="button" />
                        </button>
                        <button className="add-post-button">
                            <img src={TagIcon} alt="button" />
                        </button>
                        <button className="add-post-button">
                            <img src={EmojiIcon} alt="button" />
                        </button>
                        <button className="add-post-button">
                        <img src={LocationIcon} alt="button" />
                        </button>
                    </div>
                </div>
                <button className="standard-button full-width" disabled>
                    <span>Tiếp</span>
                </button>
            </form>
        </>
    )
}
import React, {useCallback, useState} from "react";
import './image.scss';
import Loader from "../Loader";

const Image = ({ src, alt, containerClassName = "", className = "" }) => {
    const [isLoadingImage, setIsLoadingImage] = useState(true);

    const handleSetImageStatus = useCallback(() => {
        setIsLoadingImage(prevState => !prevState);
    }, [setIsLoadingImage])

    return (
        <div className={`img-container ${containerClassName}`}>
            {isLoadingImage && <Loader hasWrapper />}
            <img
                src={src}
                className={`img ${className}`}
                alt={alt || className}
                onLoad={handleSetImageStatus}
            />
        </div>
    );
}

export default Image;

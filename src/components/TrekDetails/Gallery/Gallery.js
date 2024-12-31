import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({ images }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="gallery-container">
            <h3>Gallery</h3>
            <div className="gallery">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => openModal(image)}
                    >
                        <img src={require(`../../../assets/trek-details/${image}`)} alt={image.alt} />
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div>
                            <img src={require(`../../../assets/trek-details/${selectedImage}`)} alt={selectedImage} className="modal-image" />
                        </div>
                        <button className="close-modal" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;

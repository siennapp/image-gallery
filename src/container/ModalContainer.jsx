import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import ImageModal from '../component/ImageModal';

function ModalContainer() {
  const { modalVisible, src, alt } = useSelector(state => ({
    modalVisible: state.imageModal.modalVisible,
    src: state.imageModal.src,
    alt: state.imageModal.alt,
  }),
  shallowEqual);

  return (
    <ImageModal
      modalVisible={modalVisible}
      src={src}
      alt={alt}
    />
  );
}

export default ModalContainer;

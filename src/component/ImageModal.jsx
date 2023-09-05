import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { hideModal } from "../redux/imageModal";
import { keyframes } from "@emotion/react";

function ImageModal({modalVisible,src,alt}){
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(hideModal());
      };
    return(
        <>
        {modalVisible ? (
            <>
                <ModalWrap onClick={closeModal} >
                    <ModalContent>
                        <FullImage src={`${src}`} alt={alt} />
                    </ModalContent>
                </ModalWrap>
            </>
        ) : null}
        </>
    )
}
const fadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }

`
const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.9);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: sw-resize;
  animation: ${fadeIn} 200ms ease-in;
`;

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  height: 100%;
  position: relative; 
`;

const FullImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.3);
`;

export default ImageModal;
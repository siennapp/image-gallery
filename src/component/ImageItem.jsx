import { useEffect, useRef } from "react";
import { ITEM_WIDTH } from "../constants/constants";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import useIntersectionObserver from "../util/observer";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/imageModal";

function ImageItem({item}){
   const imgRef = useRef(null);
   const [observe, unobserve] = useIntersectionObserver((entry) => {
        entry.target.src = entry.target.dataset.src;
        unobserve(imgRef.current)
    });
   useEffect(()=>{
    if(imgRef.current) observe(imgRef.current);
   })
   const dispatch = useDispatch();

   const openModal = () => {
     dispatch(showModal({ 
            src: srcGenerator(4) ,
            alt: `by ${item.author}`,
        }));
    
    };
    const srcGenerator = (multiple = 1) => {
        return `https://picsum.photos/id/${item.id}/${Width*multiple}/${Height*multiple}`
    }
    const Width = ITEM_WIDTH
    const Height = Math.round( ITEM_WIDTH * (item.height / item.width))
   
    return (
       <Item 
            key={item.id}
            className='loading'
            width={Width}
            height={Height}
            onClick={openModal} 
        >
            <img
                ref={imgRef}
                width={Width}
                height={Height}
                src={srcGenerator(1)+`?blur=10`}
                data-src={srcGenerator(2)}
                alt={`by ${item.author}`} 
            />
        </Item>
    )
}


const spin = keyframes`
    0% {transform:rotate(90deg); }
    50% {
      
      transform:rotate(135deg);
    }
    100% {
      transform:rotate(450deg);
    }

` 
const Item = styled.div`
    position: relative;
    img{
        display: block;
        position: relative; 
        z-index: 2;
    }
    margin-bottom: 15px;
    background-repeat: no-repeat;
    &.loading::before{
        content:'';
        width: 30px; 
        height: 30px; 
        border-radius: 50%;
        border: 5px solid rgba(0,0,0,0.2);
        border-right-color: transparent;
        position: absolute; 
        left: 50%; top: 50%;
        margin-left: -15px; 
        margin-top: -15px;
        animation: ${spin} .7s ease-in infinite;
        z-index: 1;
    }

    &::after{
        content:'⊕';
        width: 100%;
        height: 100%; 
        position: absolute;
        left:0; top: 0; 
        background: rgba(0,0,0,1);
        color: gray;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 58px; 
        opacity: 0; 
        transition: .12s ease-in;
        z-index: 3;

    }
    &:hover{
        cursor: pointer;
        &::after{
            opacity: .6;
        }
    }
`
export default ImageItem;
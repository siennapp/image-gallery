import { DEFAULT_PAGE,LIST_COLUMN } from "../constants/constants"
import { useEffect, useState, useRef } from "react"
import styled from "@emotion/styled"
import { useDispatch, useSelector } from 'react-redux'
import { fetchImages } from "../redux/images"
import useIntersectionObserver from "../util/observer"
import ListColumn from "../component/ListColumn"


function ListContainer (){
    const [page, setPage ] = useState(DEFAULT_PAGE)
    const target = useRef(null)
    const dispatch = useDispatch()
    const [observe, unobserve] = useIntersectionObserver(() => {
        setPage((page) => page + 1)
    });
    /** masonry 레이아웃을 위한 컬럼레이아웃 **/
    const Columns = Array(LIST_COLUMN).fill().map((v,i)=> i)
    const { images } = useSelector(state => ({
        images: state.images.data,
    }));
  
    /** 최초 한 번만 data fetch **/
    useEffect(() => {
        dispatch(fetchImages(page));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        if( page === DEFAULT_PAGE) return;
        dispatch(fetchImages(page))
    }, [page,dispatch])

    useEffect(()=>{
        if (page === DEFAULT_PAGE) {
            observe(target.current)
        }
        const N = images.length;
        const totalCount = images.totalCount;
        
        if (0 === N || totalCount <= N) {
            unobserve(target.current)
        }
    },[images,observe,unobserve,page])
   
    return (
        <Container>
            <List>
                {Columns.map((item)=>  <ListColumn key={item} images={images} idx={item} />)}
                <Target ref={target} />
            </List>
        </Container>
       
    )
}

const Container = styled.div`
    background: rgba(0,0,0,0.2);
    width: 100%;
    height: auto; 
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 100px 0;
    position: relative; 
    overflow-x: hidden;
    overflow-y: hidden;
`
const List = styled.div`
    display: flex;
    align-items: flex-start;
    width: 945px;
    grid-gap: 15px;
    position: relative;
`
const Target = styled.div`
    width: 100%; 
    height: 30px; 
    position:absolute;
    bottom: 30vh;
`
export default ListContainer; 
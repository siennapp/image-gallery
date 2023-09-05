import ImageItem from "./ImageItem";

function ListColumn ({images, idx}) {
    return (
        <div>
            {images?  (
                images.filter((item, index)=> (index % 3 === idx)).map((item) => 
                    <ImageItem key={item.id} item={item}/>
            )):null}
        </div>
    )
}

export default ListColumn
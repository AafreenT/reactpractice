import { useState } from "react";

export function ImageCarasoul(){
    const images= [
        "https://www.w3schools.com/howto/img_nature_wide.jpg",
        "https://www.w3schools.com/howto/img_snow_wide.jpg",
        "https://www.w3schools.com/howto/img_lights_wide.jpg",
        "https://www.w3schools.com/howto/img_mountains_wide.jpg",
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_19083af0eb7%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_19083af0eb7%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22217.76000022888184%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"

    ]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const onNext = () => {
        const nextIndex = currentImageIndex + 1;
        setCurrentImageIndex(nextIndex == images.length ? 0 : nextIndex)
    }
    const onPrev = () => {
        const nextIndex = currentImageIndex - 1;
        setCurrentImageIndex(nextIndex == -1 ? images.length-1 : nextIndex)
    }

    return <div>
        <h1>Image Carasoul</h1>
        <a className="prev" onClick={onPrev}>❮</a>
        <img src={images[currentImageIndex]} ></img> 
        <a className="next" onClick={onNext}>❯</a>    
    </div>
}
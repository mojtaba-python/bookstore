const SliderShow = () => {

    const imgSrcArray = [
        { url: '../img/book.webp', caption: 'aaa' },
        { url: '../img/book2.webp', caption: 'bbb' },
        { url: '../img/book3.webp', caption: 'ccc' },
        { url: '../img/book4.webp', caption: 'ddd' },
    ];
    let imgIndex = 0;

    return (
        <div>
            <button onClick={() => {
                imgIndex--;
                if (imgIndex < 0) {
                    imgIndex = imgSrcArray.length - 1;
                }
            }}>perv</button>
            {   
                imgSrcArray.find((pic) => (
                    <div>
                         
                         <img src={pic.url} alt="" />
                    </div>
                   
                ))
            }
            <button onClick={() => {
                imgIndex++;
                if (imgIndex > 3) {
                    imgIndex = 0;
                }
            }}>next</button>
        </div>
    )
}
export default SliderShow;
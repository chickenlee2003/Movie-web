import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp1.jpeg";
import IconPlay from "../assets/play-button.png";
const Banner = () => {
  return <div className="w-full h-[600px] bg-banner  bg-center bg-no-repeat bg-cover relative">
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-10" />
        <div className=" w-full h-full flex items-center justify-center space-x-[30px] p-4 z-20">
            <div className="flex flex-col space-y-5  items-baseline w-[50%]">
                <p className="text-white bg-gradient-to-r 
                from-red-600 to-red-300 text-md py-2 px-3">
                TV Show
                </p>
                <div className="flex flex-col space-y-4">
                 <h1 className="text-[40px] font-bold text-white">Nghe nói em thích tôi </h1>
                 <div className="flex items-center space-x-3">
                  <img src={IconRating} alt="rating" className="w-8 h-8" />
                 <img src={IconRating} alt="rating" className="w-8 h-8" />
                 <img src={IconRating} alt="rating" className="w-8 h-8" />
                 <img src={IconRating} alt="rating" className="w-8 h-8" />
                 <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
                  </div>
                    
                
                <p className="text-white">là thể loại phim tâm lý tình cảm theo chủ đề tổng tài bá đạo. Phim xoay quanh nội dung về câu chuyện tình yêu được sắp đặt trước của tổng tài giàu nhất Cảng Đông – Lăng Dị Châu và cô diễn viên mới nổi – Hạ Lâm. Tiếp nối thành công ở phần 1, phần 2 là những câu chuyện ngọt ngào trong cuộc sống hôn nhân của cặp đôi</p>
                </div>
                <div className="flex space-x-4">
                    <button className="p-3 bg-red-700 text-white rounded-lg">Watch Now</button>
                    <button className="p-3 bg-white text-black rounded-lg">More Info</button>
                </div>

            </div>
            <div className="w-[50%] flex items-center justify-center">
                <div className="w-[300px] h-[400px] relative group  cursor-pointer">
                    <img src={ImgTemp}
                     alt = "temp"
                     className="w-full h-full object-cover rounded-s"   
                    />
                    <div className="w-full h-full absolute
                        top-0 left-0 flex items-center justify-center backdrop-blur-sm
                        opacity-0 group-hover:opacity-100 transition-all duration-500
                        ease-in-out bg-black bg-opacity-50   
                    ">
                        <img src={IconPlay} alt="play" 
                        className="w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div> 

                </div>
            </div>
        </div>
    </div>;
};

export default Banner;

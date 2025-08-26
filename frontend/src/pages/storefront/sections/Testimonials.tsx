import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"; 
import Card from '../../../shared/components/Card';


const reviewCards = [
    {rating: "5", title: "Jacob", text: "I enjoyed the service."},
    {rating: "5", title: "Alice", text: "Working with the company was quick and easy."},
    {rating: "5", title: "Alex", text: "They go above and beyond."},
    {rating: "5", title: "Max", text: "Always good work."},
    {rating: "5", title: "Helen", text: "The best company that performs this service."}
];


function SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      className={`border rounded-xl p-1 absolute bottom-0 left-10 cursor-pointer`}
      style={{ ...style, display: "block"}}
      onClick={onClick}
      icon={faArrowRight}
    />
  );
}
  
function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      className={`border rounded-xl p-1 absolute bottom-0 cursor-pointer`}
      style={{ ...style, display: "block"}}
      onClick={onClick}
      icon={faArrowLeft}
    />
  );
}
  

const Testimonials = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <section>
      <h2 className="container mx-auto">Reviews</h2>
      <Slider {...settings} className="container mx-auto pb-10">
        {reviewCards.map((card, index) =>
          <Card key={index} className="border size-60 p-10 gap-2 text-start rounded-xl place-self-center">            
            <div>
              <p>{card.title}</p>
              <p className="line-clamp-4">{card.text}</p>
            </div>
        </Card>
        )}
      </Slider>
    </section>
  );
};

export default Testimonials;
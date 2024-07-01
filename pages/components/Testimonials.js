import Container from 'react-bootstrap/Container'
import Slider from "react-slick";

const Testimonials = () => {

    var Testimonials_sl = {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    }

    return (



        <div className="testimonials-sec">
            <Container>
                <div className="ftv-title">
                    <p><i className="fa fa-star"></i><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>  Trusted by 50,000+ travelers. </p>
                    <h2>What People Say About Us </h2>

                </div>
                <Slider {...Testimonials_sl}>
                    <div className="testi-box">
                        <div className="testi-desc">
                            <h3>An Unfororgettable Experience</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                            </p>
                        </div>
                        <div className="testi-info">
                            <img src="/img/testi1.png" />
                            <div>
                                <h4>Becca Ward</h4>
                                <p>Lorem Ipsum </p>
                            </div>
                        </div>

                    </div>
                    <div className="testi-box">
                        <div className="testi-desc">
                            <h3>An Unfororgettable Experience</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                            </p>
                        </div>
                        <div className="testi-info">
                            <img src="/img/testi2.png" />
                            <div>
                                <h4>Becca Ward</h4>
                                <p>Lorem Ipsum </p>
                            </div>
                        </div>

                    </div>

                    <div className="testi-box">
                        <div className="testi-desc">
                            <h3>An Unfororgettable Experience</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                            </p>
                        </div>
                        <div className="testi-info">
                            <img src="/img/testi1.png" />
                            <div>
                                <h4>Becca Ward</h4>
                                <p>Lorem Ipsum </p>
                            </div>
                        </div>

                    </div>

                </Slider>
            </Container>
        </div>

    );

}
export default Testimonials;

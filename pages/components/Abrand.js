
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Slider from "react-slick";


const Abrand = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        responsive: [

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    }


    return (



        <div className="a-brand-sec">
            <Container>
                <div className="ftv-title">
                    <h2>A brand you can trust</h2>
                    <p>Helping Global Travelers move across borders with Ease </p>
                </div>
                <Slider {...settings}>
                    <div className="st-box">
                        <figure>
                            <Image fill="true" alt="eVisas Issued" src={'/img/abrand-1.png'} width={174} height={130} />
                        </figure>
                        <h4>200,000</h4>

                        <p>eVisas Issued</p>

                    </div>
                    <div className="st-box">
                        <figure>
                            <Image fill="true" alt="eVisas Countries Covered" src={'/img/abrand-2.png'} width={117} height={114} />
                        </figure>
                        <h4>40+</h4>

                        <p> eVisa Countries Covered</p>

                    </div>
                    <div className="st-box">
                        <figure>
                            <Image fill="true" alt="Visa Success Ratio" src={'/img/abrand-3.png'} width={119} height={128} />
                        </figure>
                        <h4>99%</h4>

                        <p>Visa Success Ratio</p>

                    </div>
                    <div className="st-box">
                        <figure>
                            <Image fill="true" alt="Nationalities Served" src={'/img/abrand-4.png'} width={131} height={125} />
                        </figure>
                        <h4>72</h4>

                        <p>Nationalities Served </p>

                    </div>


                </Slider>
            </Container>
        </div>
    );

}

export default Abrand;

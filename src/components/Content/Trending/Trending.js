import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Trending = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
            <h4 className="title">Trending today</h4>
            <div className="trending">

                <Carousel
                    className="trending_slider"
                    focusOnSelect={true}
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={false} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={false}
                    customTransition="transform 500ms linear"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className="item">
                        <img src="https://external-preview.redd.it/7bN4mwskb7xZr0Cj59npWyJB7CPx3QHCqy_vyD19BEs.jpg?auto=webp&v=enabled&s=0af3af81a1636555137c99cbdbc5d411fe534e4b" className="item_img" />
                        <div className="trend-info">
                            <h5>No-Confidence Vote in France1</h5>
                            <p>Macron survives no-confidence votes over French pension reforma aaaa aaaaaa aa</p>
                            <div className="owner">
                                <img src="https://styles.redditmedia.com/t5_2n4vyh/styles/communityIcon_5h39ry24bx651.png?width=256&v=enabled&s=5d14f774183ef251b9a1376880a47c1ed5a23013"
                                    className="owner_img"
                                />
                                <span className="detail">r/anime_titties and more</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://external-preview.redd.it/qx4ZOKWsEFh4f0ClgGKDbP0RiQQY6yKGFZulc5YlCPA.jpg?auto=webp&v=enabled&s=0f40f36b31bfa7cfd4c712a00834ca609e1d9a32" className="item_img" />
                        <div className="trend-info">
                            <h5>Twitch Layoff 2</h5>
                            <p>Twitch Ceo lays off 400 employees</p>
                            <div className="owner">
                                <img src="https://styles.redditmedia.com/t5_2qs0q/styles/communityIcon_kxcmzy9bt1381.jpg?width=256&v=enabled&s=ff4500c35f659689f09e6df7c9fcd7538b462644"
                                    className="owner_img"
                                />
                                <span className="detail">r/LivestreamFail and more</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://external-preview.redd.it/gLwo__j3WWx2kx9jLiiSGaNliryZQ9YYwUYI1shyBTo.jpg?auto=webp&v=enabled&s=09dd991eae887a1d851cc39e88555e6841763999" className="item_img" />
                        <div className="trend-info">
                            <h5>Oath Keepers Convicted</h5>
                            <p>Six Oath Keepers convicted in connection with January 6 US Capitol riot</p>
                            <div className="owner">
                                <img src="https://styles.redditmedia.com/t5_2qh3s/styles/communityIcon_yq9ah8eniar81.jpg?format=pjpg&s=6b1c89349dfd155ccc867879871911db55c86760"
                                    className="owner_img"
                                />
                                <span className="detail">r/news and more</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/mV4YRxHlrJjR9Pupg_QATbDDAs4=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/ZLPZBKETQBGNHE4ADFGCQXYM3E.jpg" className="item_img" />
                        <div className="trend-info">
                            <h5>Andy Kaufman</h5>
                            <p>Andy Kaufman to Be Inducted Into WWE Hall of Fame</p>
                            <div className="owner">
                                <img src="https://styles.redditmedia.com/t5_2n4vyh/styles/communityIcon_5h39ry24bx651.png?width=256&v=enabled&s=5d14f774183ef251b9a1376880a47c1ed5a23013"
                                    className="owner_img"
                                />
                                <span className="detail">r/anime_titties and more</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img.pravda.com/images/doc/e/3/e384069-zaes690.jpg" className="item_img" />
                        <div className="trend-info">
                            <h5>State Nuclear Regulatory Inspectorate</h5>
                            <p> Russian invaders have placed military equipment and explosives in the turbine compartment of power unit No. 4 at the Zaporizhzhia Nuclear Power Plant (ZNPP).</p>
                            <div className="owner">
                                <img src="https://b.thumbs.redditmedia.com/t622Aw3Yrn8EWLcC5tECrHEV-pvBAZDTJBFVBBFqUaI.png"
                                    className="owner_img"
                                />
                                <span className="detail">r/anime_titties and more</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/dc/cdcd3d0c-d1fa-11ed-84cf-dbe49657e9bb/642a907345b30.image.jpg?resize=1000%2C667" className="item_img" />
                        <div className="trend-info">
                            <h5>Louisville McDonald's</h5>
                            <p>Two 10-year-old children were found working unpaid at a McDonald's restaurant in Louisville,</p>
                            <div className="owner">
                                <img src="https://styles.redditmedia.com/t5_39ne7/styles/communityIcon_k0dgce7sy1721.png"
                                    className="owner_img"
                                />
                                <span className="detail">r/LivestreamFail and more</span>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Trending
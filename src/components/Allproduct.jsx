import "./Allproduct.css"

import { catogoriyaAll, DataProduct } from "../Dataproduct.jsx"
import { FaCartPlus } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";


const Allproduct = () => {
    return (
        <div className="allproduct">
            <div className="allprofuct_sarlavha">
                <p>Discover / Electronics</p>
                <h1>Best Selling Electronics Products - Weekly Update.</h1>
            </div>
            <div className="allproduct_catogoriya">
                {catogoriyaAll.map((item) => (
                    <div className="catogoriya_item" key={item.id}>
                        <p>{item.cotogoriya}</p>
                    </div>
                ))}
            </div>
            {
                <div className="allproduct_items">
                    {DataProduct.map((item) => (
                        <div className="allproduct_item" key={item.id}>
                            <div className="cards_img">
                                <div className="img_icons">
                                    <div className="cards_love">
                                    <GiSelfLove />
                                    </div>
                                <div className="cards_malumot">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.7299 1.66667C15.297 1.66667 14.9486 2.015 14.9486 2.44796V3.48968H13.9069C13.474 3.48968 13.1256 3.838 13.1256 4.27097C13.1256 4.70393 13.474 5.05225 13.9069 5.05225H14.9486V6.09397C14.9486 6.52694 15.297 6.87526 15.7299 6.87526C16.1629 6.87526 16.5112 6.52694 16.5112 6.09397V5.05225H17.5529C17.9859 5.05225 18.3342 4.70393 18.3342 4.27097C18.3342 3.838 17.9859 3.48968 17.5529 3.48968H16.5112V2.44796C16.5112 2.015 16.1629 1.66667 15.7299 1.66667ZM10.7655 6.00282C10.2805 5.7782 9.72053 5.7782 9.23548 6.00282L2.11924 9.29074C1.84254 9.4177 1.66675 9.69441 1.66675 10.0004C1.66675 10.3064 1.84254 10.5831 2.11924 10.7101L9.23548 13.998C9.72053 14.2226 10.2805 14.2226 10.7655 13.998L17.8817 10.7101C18.1584 10.5831 18.3342 10.3064 18.3342 10.0004C18.3342 9.69441 18.1584 9.4177 17.8817 9.29074L10.7655 6.00282ZM11.2017 14.9453C10.44 15.2969 9.56101 15.2969 8.79926 14.9453L3.8511 12.66L2.11924 13.4576C1.84254 13.5846 1.66675 13.8613 1.66675 14.1673C1.66675 14.4733 1.84254 14.75 2.11924 14.877L9.23548 18.1649C9.72053 18.3895 10.2805 18.3895 10.7655 18.1649L17.8817 14.877C18.1584 14.75 18.3342 14.4733 18.3342 14.1673C18.3342 13.8613 18.1584 13.5846 17.8817 13.4576L16.1499 12.6568L11.2017 14.9421V14.9453Z" fill="#637381" />
                                    </svg>
                                </div>
                                </div>
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="cards_info">
                                <img width={28} height={28} src="../../public/avatar.jpg" alt="avatar" />
                                <div className="cards_info_text">
                                    <div className="cards_top">
                                        <h3>{item.name}</h3>
                                        <p>{item.manzil}</p>
                                    </div>
                                    <div className="cards_bottom">
                                        <div className="cards_left">
                                            <div className="cards_price">
                                                <span className="narxi">${item.narxi}</span>
                                                <span className="esliNarxi">${item.esliNarxi}</span>

                                            </div>
                                            <div className="cards_sotilgan">
                                                <span>{item.sotilgan} sales</span>
                                                <span>{item.boholash} (10)</span>
                                            </div>
                                        </div>
                                        <div className="cards_savat">
                                            <FaCartPlus className="card_savat" />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Allproduct
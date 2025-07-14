import "./Allproduct.css"

import { catogoriyaAll, DataProduct } from "../Dataproduct.jsx"
import { FaCartPlus } from "react-icons/fa6";


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
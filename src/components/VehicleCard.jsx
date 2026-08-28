import { useState } from "react";

const VehicleCard = ({ vehicle }) => {
    const [detailsViewed, setDetailsViewed] = useState(false)
    const [reserve , setReserved] = useState(false)

    const handleDetails = () => {
        if (!detailsViewed) {
            setDetailsViewed(true)
        } else {
            setDetailsViewed(false)
        }
    }

    const handlePurchase = () => {
        console.log("pressed")
        if (!reserve) {
           setReserved(true)
        } else {
            setReserved(false)
        }
    }

    return (
        <div className="vehicleCard">
            <img className="vehicleImage" src={vehicle.Image} />
            <h3>{vehicle.Carname}</h3>
            <p>{vehicle.Year}</p>
            <p>{vehicle.Price}</p>
            <button onClick={handleDetails}>{!detailsViewed ? "View details" : "Close details"}</button>

            <ul> {detailsViewed ? vehicle.features.map((feature, index) => {
                return (
                    <li key={index}>{feature}</li>
                )
            }) : ""}
            </ul>
            <div>
                <button className="purchaseButton" onClick={handlePurchase}>{!reserve ? "Reserve vehicle" : "Proceed to next step"}</button>

                <p>{reserve ? "Scroll down and fill Contactform" : ""}</p>
            </div>
        </div>
    );
};

export default VehicleCard;
import VehiclesArray from "../../Data/vehicles"
import VehicleCard from "./VehicleCard";

const Vehicles = () => {
    return (
        <section>
            <h2 className="featuredCars">Featured Vehicles</h2>

            <div className="vehicleAlign">
                {VehiclesArray.map((vehicle, index) => (<div className="vehicleCard" key={index}>
                    <VehicleCard key={index} vehicle={vehicle} />
                    </div>
                )
                )}
            </div>
        </section>
    )
}

export default Vehicles;
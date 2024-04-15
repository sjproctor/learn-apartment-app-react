import NavButton from "../components/NavButton"
import { useParams } from "react-router-dom"
import { FaBed } from "react-icons/fa"
import { FaDog } from "react-icons/fa6"
import { FaHouse } from "react-icons/fa6"
import { ImLocation2 } from "react-icons/im"

const ApartmentShow = ({ apartments }) => {
  const { id } = useParams()
  const apartment = apartments.find((item) => item.id === +id)

  return (
    <>
      <h3 className="title-header center-content">Apartment Details</h3>
      <div className="show-apartment">
        <div>
          <img
            src={apartment.image}
            alt="apartment"
            className="show-apartment-image"
          />
        </div>
        <div className="apartment-details">
          <h5>${apartment.price}</h5>
          <p>
            <span className="icon">
              <ImLocation2 />
            </span>
            {apartment.street}, {apartment.unit}, {apartment.city},{" "}
            {apartment.state}
          </p>
          <p>
            <span className="icon">
              <FaBed />
            </span>
            {apartment.bedrooms} bedrooms | {apartment.bathrooms} bathrooms
          </p>
          <p>
            <span className="icon">
              <FaHouse />
            </span>
            {apartment.square_footage} square feet
          </p>
          <p>
            <span className="icon">
              <FaDog />
            </span>
            Pet policy: {apartment.pets}
          </p>
        </div>
      </div>
      <br />
      <div className="center-content">
        <NavButton url="/apartments" buttonContent="Back to All Apartments" />
      </div>
    </>
  )
}

export default ApartmentShow

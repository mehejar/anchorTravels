import useBookings from "../../Hooks/useBookings"
import Booking from "./Booking"

const ManageBookings = () =>{
    const [bookings] = useBookings()
    console.log(bookings)
    
    return(
        <div className="flex flex-col gap-5 lg:w-2/3 mx-auto">
            {
                bookings.map(booking => <Booking booking={booking}></Booking>)
            }

        </div>
    )
}

export default ManageBookings
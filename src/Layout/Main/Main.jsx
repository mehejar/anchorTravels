import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import { useContext, useEffect } from "react";
import { AuthContex } from "../../Pages/AuthProvider/AuthProvider";
import { messaging } from "../../../firebase.config";
import { getToken } from "firebase/messaging";

const Main = () => {

  // const {messaging} = useContext(AuthContex)



  const reqPermission = async () => {
    const permission = await Notification.requestPermission()
    if (permission === "granted") {
      // create token
      const token = await getToken(messaging, {
        vapidKey: "BKMN0v5-IxAR-1PgmIJj42NiqVhPu-CZj-8B3jYEGlQMPrmKwhWCFdK8ORqvJ1O5TLQFXgpTZI_MVV1SBmzMN4w"

      })
      console.log(" MY token", token)

    }
    else if (permission === "denied") {
      alert('You denied for notification')
    }
  }

  useEffect(() => {
    reqPermission()
  }, [])

  return (
    <div className="bg-blue-50">
      <div className="pt-2 bg-blue-700">
        <div className="lg:w-3/4 mx-auto">
          <Navbar></Navbar>
        </div>
      </div>


      <Outlet></Outlet>
      <div className="bg-blue-900">
        <Footer></Footer>
      </div>


    </div>
  )
}

export default Main;
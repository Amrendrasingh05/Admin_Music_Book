import { useState } from 'react'
import bell from '../Images/bell.png'
import img1 from '../Images/Vector (1).png'
import img2 from '../Images/Vector (2).png'
import img3 from '../Images/Vector (3).png'
import img4 from '../Images/Vector (4).png'
import img5 from '../Images/Vector (5).png'
import driverDP from '../Images/driverDP.png'
import eye from '../Images/eye.png'
import call from '../Images/call.png'

import Header from './Header.component'
import Popup from './ManageRidePopup.component'

function Dashboard() {
    const [show, setShow] = useState(false)
    return (

        <div className='display-flex'>
            <Header />
            <div className='vendor-primary-bg' style={{ width: "100%" }}>

                <div className="display-flex" style={{ justifyContent: "space-between" }}>
                    <h4>All Notifications</h4>
                    <img src={bell} alt="" className='bell' />
                </div>

                

                <br />

               
                <Popup show={show} onClose={() => setShow(false)} />

                <div className='column-boxes'>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                    <div className="column-box-notification">hello,Good News Now You Can Buy Visiting Cards only @200/-</div>
                </div>


            </div>


        </div>
    )
}
export default Dashboard;
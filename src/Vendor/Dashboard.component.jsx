import bell from '../Images/bell.png'
import img1 from '../Images/Vector (1).png'
import img2 from '../Images/Vector (2).png'
import img3 from '../Images/Vector (3).png'
import img4 from '../Images/Vector (4).png'
import img5 from '../Images/Vector (5).png'
import profile from '../Images/profile.png'

import Header from './Header.component'

function Dashboard() {
    return (

        <div className='display-flex'>
            <Header />
            <div className='vendor-primary-bg' style={{ width: "95%" }}>

                <div className="display-flex" style={{ justifyContent: "space-between" }}>
                    <h4>Dashboard</h4>
                    <img src={bell} alt="" className='bell'/>
                </div>

                <div className="display-flex" style={{ justifyContent: "space-between", marginTop: "2%" }}>
                    <button className="blue-bg">
                        <img src={profile} alt="" /> &nbsp; &nbsp; 55,356,23
                    </button>
                    <button className="red-bg">
                        <img src={img3} alt="" /> &nbsp; &nbsp; 25,356
                    </button>
                    <button className="green-bg">
                        <img src={img1} alt="" /> &nbsp; &nbsp; 25,356,23
                    </button>
                </div><br />
                 <h5>Top 10 Creators</h5>
                 <br />
                 <div className="column-boxes">
                    <div className="column-box"></div>
                    <div className="column-box"></div>
                    <div className="column-box"></div>
                    <div className="column-box"></div>
                    <div className="column-box"></div>
                    <div className="column-box"></div>
                    <div className="column-box"></div>
                    <div className="column-box"></div>
                    <div className="column-box"></div>
                    <div className="column-box"></div>
                 </div>

            </div>
        </div>
    )
}
export default Dashboard;
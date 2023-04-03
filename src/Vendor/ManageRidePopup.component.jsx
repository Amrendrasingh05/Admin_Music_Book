import send from '../Images/send.png'
import call from '../Images/call.png'
import profile from '../Images/profile.png'
import map2 from '../Images/map2.png'
import profileDP from '../Images/profileDP.png'
import driverDP from '../Images/driverDP.png'
function Popup({ show, onClose }) {
    if (!show) {
        return null;
    }
    else
        return (
            <div className="chat-popup vendor-primary-bg">
                <div className="vendor-primary-bg">
                    <button className="close-popup" onClick={onClose}>X</button>
                    <h3>User Info</h3> <br />
                    <img src={map2} alt="" style={{ height: "130px" }} />
                    <div className="column-box display-flex" style={{ justifyContent: "space-between", alignItems: "center" }}>
                        <div className="display-flex justifyalign">
                            <img src={profileDP} alt="" className='column-img' /> &nbsp; &nbsp;
                            <div>
                                <p className="text-small">Name</p>
                                <div style={{ marginTop: "-10%" }}>Amrendra Singh</div>
                            </div>
                        </div>
                        <button className='green-btn'>Online</button>
                    </div>


                        <h5 className='mt-2 text-secondary'>All Posts</h5>

                        </div>
            </div>
        );
}
export default Popup;
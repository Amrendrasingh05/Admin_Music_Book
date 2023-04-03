import img from '../Images/Vector.png'
import bell from '../Images/bell.png'
import img1 from '../Images/Vector (1).png'
import img2 from '../Images/Vector (2).png'
import img3 from '../Images/Vector (3).png'
import img4 from '../Images/Vector (4).png'
import img5 from '../Images/Vector (5).png'
import profileDp from '../Images/profileDP.png'
import profile from '../Images/profile.png'


function Header(){
    return(

<div className="nav">
<div><img src={profileDp} className="profile-img-side-bar" alt="" /></div>
<div onClick={() => window.open("/","_self")}><img src={img} alt="" /></div>
<div onClick={() => window.open("/ManageRide","_self")}><img src={profile} alt="" /></div>
{/* <div><img src={img2} alt="" /></div> */}
<div><img src={img3} alt="" /></div>
<div onClick={() => window.open("/bidding","_self")}><img src={bell} alt="" /></div>
<div><img src={img5} alt="" /></div>
</div>
    )
}
export default Header;

import "./topbar.css"
import { Search,Person ,Chat ,Notifications } from '@mui/icons-material'


 function Topbar() {
  return (
    <div className="topbarContainer" >
    <div className='topbarLeft'>
        <span className="logo">MiniMedia</span>
    </div>

    <div className='topbarCenter'>
        <div className="searchbar">
            <Search />
            <input placeholder="Search for friend, post or video" className="searchInput" />
        </div>
    </div>

    <div className='topbarRight'>
        <div className="topbarLink">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconIteam">
                <Person/>
                <span className="topbarIconBadge1">1</span>
            </div>
            <div className="topbarIconIteam">
                <Chat/>
                <span className="topbarIconBadge2">2</span>
            </div>
            <div className="topbarIconIteam">
                <Notifications/>
                <span className="topbarIconBadge3">3</span>
            </div>
        </div>

        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
    </div>
    </div>
    
  )
}

export default Topbar;

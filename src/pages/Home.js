import '../styles/pages.css';
import WorkTile from '../components/WorkTile';
import PantryPalImg from '../images/pantry-pal.svg';
import NetworkDashBoardImg from '../images/network-dashboard.svg';
import TransitKitImg from '../images/transitkit.svg'
import CircleGradient from '../images/circle-gradient-blue.svg';
 
function Home() {

    const workTiles = [
        {
            key: 0,
            img: PantryPalImg,
            title: 'PantryPal',
            info: 'Development • Product Management',
            desc: 'How a team of exchange students at Technische Universität Berlin, Germany created a product to improve students daily lives.'
        },
        {
            key: 1,
            img: NetworkDashBoardImg,
            title: 'Network Dashboard',
            info: 'Development • Product Management',
            desc: 'How a team of University of Technology students created a React web app for a UTS Startup to assist the company track and analyse Sydney\'s pipe leaks..'
        },
        {
            key: 2,
            img: TransitKitImg,
            title: 'Network Dashboard',
            info: 'Development • Product Management',
            desc: 'Improving student\'s experience of commuting to and from university by integrating the features of Google Maps and TripView  into a single unified app.'
        },
    ];

    return (
        <div>
            <div>
                <img className='circle' src={CircleGradient}></img>
            </div>
            <div className='introduction'>
                <div className='introduction-text'>
                    <h1>Hi. I'm Caitlin.</h1>
                    <h1>A developer.</h1>
                    <div className='introduction-sub-text'>
                        <h4>I'm passionate about creating engaging, human-<br/>centered web experiences.</h4>
                    </div>
                </div>
            </div>
            <div className='projects'>     
                {workTiles.map((workTile, index) => (
                    <WorkTile
                        key={workTile.key}
                        index={index}
                        img={workTile.img}
                        title={workTile.title}
                        info={workTile.info}
                        desc={workTile.desc}
                    /> 
                ))}
            </div>
        </div>
    )
}

export default Home;
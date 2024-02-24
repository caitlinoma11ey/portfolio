import './pages.css';
import WorkTile from '../components/WorkTile';
import PantryPalImg from '../images/pantry-pal.svg';

 
function Home() {

    const workTiles = [
        {
            key: 0,
            img: PantryPalImg,
            title: 'PantryPal',
            info: 'Development • Product Management',
            desc: 'How a team of exchange students at Technische Universität Berlin, Germany created a product to improve students daily lives.'
        },
    ];

    return (
        <div>
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
                {workTiles.map(workTile => (
                    <WorkTile
                        key={workTile.key}
                        index={workTile.key}
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
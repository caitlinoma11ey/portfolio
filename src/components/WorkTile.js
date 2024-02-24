import { Button } from './Button';

function WorkTile({ img, title, info, desc }) {

    return (
        <div className="tile">
            <div className="tile-img">
                <img src={img} />
            </div>
            <div className="tile-text">
                <h2>{title}</h2>
                <h4>{info}</h4>
                <p>{desc}</p>
                <Button type="primary" text="Learn more"/>
            </div>
        </div>
    )
}

export default WorkTile;
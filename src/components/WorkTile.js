import { Button } from './Button';

function WorkTile({ index, img, title, info, desc }) {

    const orientation = () => {
        if (index % 2 === 0) 
            return "right";

        return "left";
    }

    return (
        <div className={`tile-${orientation()}`}>
            <div className="tile-img">
                <img src={img} />
            </div>
            <div className={`tile-text-${orientation()}`}>
                <h2>{title}</h2>
                <h4>{info}</h4>
                <p>{desc}</p>
                <Button type="primary" text="Learn more"/>
            </div>
        </div>
    )
}

export default WorkTile;
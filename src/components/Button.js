
export const Button = ({ type, text }) => {
    return (
        <button className={`button-${type}`}>{text}</button>
    )
}
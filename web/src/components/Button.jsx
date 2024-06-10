import '../styles/Button.scss';
import postData from '../services/postData';

const Button = ({data, setCardURL}) => {

    const handleClick = (ev) => {
        ev.preventDefault();
        postData(data).then((response) => {
            setCardURL(response.url)
            console.log(response);
        });
    }

    return (
        <button className="button--large" onClick={handleClick}>Save Project</button>
    )
}

export default Button
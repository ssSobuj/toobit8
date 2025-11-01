import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ErrorAlert = ({errorTxt}) => {
    return (
        <div className="error_alert">
            {/* <FontAwesomeIcon icon={faExclamationTriangle} /> */}
            <p>{errorTxt}</p>
        </div>
    );
};

export default ErrorAlert;
import {Link} from "react-router-dom";

function listItem({adres, title}) {

    return (
    <li>
        <Link to={adres}>
            {title}
        </Link>
    </li>

    )
}

export default listItem;
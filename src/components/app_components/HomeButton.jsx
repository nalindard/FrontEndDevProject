import { Link } from 'react-router-dom';

function HomeButton() {
    
    return (
        <span className='px-7 py-4 text-2xl uppercase font-semibold bg-primary mt-7 rounded text-white'>
            <Link to="/">Back To Home</Link>
        </span>
    )
}

export default HomeButton
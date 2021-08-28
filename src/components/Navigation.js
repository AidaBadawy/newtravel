import Social from "./Social"

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Tours</a></li>
                <li><a href='#'>Attractions</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            <div>
                <Social/>
            </div>
        </div>
    )
}

export default Navigation

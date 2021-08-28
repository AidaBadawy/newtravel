import imagebg from "../images/bg.jpg"
import Navigation from "./Navigation"
function Header() {
    
function toggleMenu(){
    var menuToggle = document.querySelector('.menuToggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')

}      
    return (
        <div>
            <section>
                <div className='logo'>TravelKenya</div>
                <img src={imagebg} alt='background-img' className='bg'/>
                <div className='content'>
                    <h2>We'll show you Kenya,<br></br> Better than anyone else </h2>
                    {/* <p>WE'LL SHOW YOU KENYA, BETTER THAN ANYONE ELSE</p> */}
                    <a href='#'>Explore</a>
                </div>
                <p className='copyrighttext'>&copy;2021 Travel Kenya</p>
            </section>
            <div className='menuToggle' onClick={toggleMenu}>
            </div>
            <div>
                <Navigation/>
            </div>
            
        </div>
    )
}

export default Header

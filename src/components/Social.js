import imagefacebook from '../images/facebook.png'
import imagetwitter from '../images/twitter.png'
import imageinstagram from '../images/instagram.png'
import imageemail from '../images/email.png'

const Social = () => {
    return (
        <div className='socialBar'>
            <ul>
                <li><a href='https://www.facebook.com' target='_blank' rel="noopener noreferrer"><img src={imagefacebook} alt='facebook-icon'/></a></li>
                <li><a href='https://www.twitter.com' target='_blank' rel="noopener noreferrer"><img src={imagetwitter}  alt='twitter-icon'/></a></li>
                <li><a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer"><img src={imageinstagram}  alt='instagram-icon'/></a></li>
            </ul>
            <a href='mailto:aidarusbadawy@gmail.com' className='emailBx'><img src={imageemail}  alt='email-icon'/></a>
        </div>
    )
}

export default Social

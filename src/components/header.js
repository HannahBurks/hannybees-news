import '../App.css';
import ActiveUser from './user.js';
export default function Header(){

    

return (
    <div className='header-cotainer'>
<div className = 'image-box'>
<img src={ require('../images/hannybee-news-logo.jpg')} alt="Hannybees news logo of a bee" width='110px' className='logo'/>
 </div>
<ActiveUser />
    </div>

)}
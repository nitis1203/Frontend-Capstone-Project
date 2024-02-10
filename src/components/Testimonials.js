import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "./Testimonials.css"


function TestiMonials() {
    return(
        <div className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonial-container">
                <div className="testimonial-card">
                    <h3>Rating</h3>
                    <div className="name">
                        <FontAwesomeIcon icon={faUser} size='3x' className='user'/>
                        <p>name</p>
                    </div>
                    <p>Review</p>
                </div>
                <div className="testimonial-card">
                    <h3>Rating</h3>
                    <div className="name">
                        <FontAwesomeIcon icon={faUser} size='3x' className='user'/>
                        <p>name</p>
                    </div>
                    <p>Review</p>
                </div>
                <div className="testimonial-card">
                    <h3>Rating</h3>
                    <div className="name">
                        <FontAwesomeIcon icon={faUser} size='3x' className='user'/>
                        <p>name</p>
                    </div>
                    <p>Review</p>
                </div>
                <div className="testimonial-card">
                    <h3>Rating</h3>
                    <div className="name">
                        <FontAwesomeIcon icon={faUser} size='3x' className='user'/>
                        <p>name</p>
                    </div>
                    <p>Review</p>
                </div>
            </div>
        </div>
    );
}

export default TestiMonials;
import { useState, useEffect } from "react";
import user from "./assets/user.svg";

function Card() {
  const targetDate = new Date("2024-05-01T00:00:00").getTime();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      const remainingDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const remainingHours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const remainingMinutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const remainingSeconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
  
      setDays(remainingDays);
      setHours(remainingHours);
      setMinutes(remainingMinutes);
      setSeconds(remainingSeconds);
  
      if (distance < 0) {
        clearInterval(interval);
        setDays(0);
        setHours('00');
        setMinutes('00');
        setSeconds('00');
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <main>
      <div className="notice-section">
        <h1>Bage Wines</h1>
        <h3>Coming Soon !</h3>
        <div>
          <p>Subscribe to enter the waitlist</p>
          <form>
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
          </form>
          <p>
            By subscribing, you agree to our <a href="#">Terms & conditions</a>
          </p>
        </div>
        <div className="user-details">
          <img src={user} alt="User" />
          <p>- lilian@bagewines.com | +254 706 799 643</p>
        </div>
      </div>
      <div className="reminder-counter">
        <div className="countdown">
        <p>{days} :</p>
        <span>Days</span>
        </div>
        <div className="countdown">
          <p>{hours} :</p>
          <span>Hours</span>
        </div>
        <div className="countdown">
          <p>{minutes} :</p>
          <span>Minutes</span>
        </div>
        <div className="countdown">
          <p>{seconds}</p>
          <span>Seconds</span>
        </div>
      </div>
    </main>
  );
}

export default Card;

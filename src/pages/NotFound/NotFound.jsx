import { useEffect } from 'react';

import { Typewriter } from 'react-simple-typewriter'

import "./notFound.scss";
import "../../scss/global.scss"

const NotFound = () => {
    
    useEffect(() => {
        document.title = 'bombel.top - 404';
      })

    setTimeout(() => {
        window.location.href = "https://bombel.top"
    }, 3000);

  return (
    <div className="container">
        <div className="container__content">
            <h1>
                <Typewriter
                    words={[
                        "404, page not found",
                    ]}
                    loop={true}
                    cursor
                    typeSpeed={100}
                    deleteSpeed={50}
                />
            </h1>
        </div>
    </div>
  );
}

export default NotFound;
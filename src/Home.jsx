import { Typewriter } from 'react-simple-typewriter';
import toast, { Toaster } from 'react-hot-toast';

import "./scss/partials/home.scss";

const App = () => {

  const notify = () => {
    toast('08.08.23', {
      icon: '🤨',
    });
  }

  return (
    <div className="container">
      <h2 className='glitch'>
        <Typewriter
          words = {[
          "coming soon",
          "new",
          "fresh",
          "webpage",
          ]}
          loop={true}
          cursor
          typeSpeed={30}
          deleteSpeed={40}
        />
      </h2>
      <Toaster />
      <button className="glitch" onClick={notify}>???</button>
    </div>
  );
}

export default App;

import './App.css';
import { Resumeimage } from './image';
import { ContactInformation } from './Contact';
import { LearningExperience } from './Learning';

const imagePath = './photo.jpg';

function App() {
  return (
      <div>
        <h1 class="Fullname">Yaroslav <span>Livachov</span></h1>
        <Resumeimage imagePath={imagePath} />
        <div class="contact">
          <div>
            <ContactInformation />
          </div>
        </div>
        <div>
        <LearningExperience />
        </div>
      </div>
  );
}

export default App;

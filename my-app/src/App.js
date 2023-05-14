import './App.css';
import { Resumeimage } from './image';
import { ContactInformation } from './Contact';
import { Studies } from './StudyExperience';
import { CounterExperience} from './Counter';

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
        <Studies />
        </div>
        <div>
          <CounterExperience />
        </div>
      </div>
  );
}

export default App;

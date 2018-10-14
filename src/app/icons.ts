import { library } from '@fortawesome/fontawesome-svg-core';
import { faGripHorizontal, faHome, faMale } from '@fortawesome/free-solid-svg-icons';

export default class Icons {
  doInit = () => {
    library.add(faGripHorizontal, faHome, faMale);
  };
}

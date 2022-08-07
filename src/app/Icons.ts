import { library } from '@fortawesome/fontawesome-svg-core';
import { faGripHorizontal, faHome, faListUl, faMale, faTrophy, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export default class Icons {
  initialize = () => {
    library.add(faGripHorizontal, faHome, faListUl, faMale, faTrophy, faUser);
    library.add(faGoogle as any); // TODO: figure out why this fails
  };
}

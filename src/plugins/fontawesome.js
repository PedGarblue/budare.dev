import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowUp,
  faCertificate,
  faClipboardCheck,
  faCode,
  faCube,
  faEnvelope,
  faGlobeAmericas,
  faPhoneSquare,
  faProjectDiagram,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faJs,
  faLinkedin,
  faNodeJs,
  faPhp,
  faTelegram,
  faVuejs,
  faPython,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Solid Icons
library.add([
  faArrowUp,
  faGlobeAmericas,
  faPhoneSquare,
  faEnvelope,
  faCode,
  faProjectDiagram,
  faCertificate,
  faUsers,
  faCube,
  faClipboardCheck,
]);

// Regular Icons
library.add([faUser]);

// Brands Icons
library.add([
  faGithub,
  faLinkedin,
  faTelegram,
  faVuejs,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faJs,
  faPhp,
  faPython,
]);

export default {
  install(app) {
    app.component('FontAwesomeIcon', FontAwesomeIcon);
  },
};

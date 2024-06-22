import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowUp,
  faCertificate,
  faClipboardCheck,
  faCode,
  faCube,
  faGlobeAmericas,
  faPhoneSquare,
  faProjectDiagram,
  faUsers,
  faCopy,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { faUser, faFilePdf, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faJs,
  faLinkedin,
  faNodeJs,
  faPhp,
  faTelegram,
  faTelegramPlane,
  faVuejs,
  faPython,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Solid Icons
library.add([
  faArrowUp,
  faGlobeAmericas,
  faPhoneSquare,
  faCode,
  faProjectDiagram,
  faCertificate,
  faUsers,
  faCube,
  faClipboardCheck,
  faCopy,
  faLink,
]);

// Regular Icons
library.add([
  faUser,
  faFilePdf,
  faEnvelope,
]);

// Brands Icons
library.add([
  faGithub,
  faLinkedin,
  faTelegram,
  faTelegramPlane,
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

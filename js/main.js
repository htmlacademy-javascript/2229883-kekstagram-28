import './util.js';
import './functions.js';
import './users-pictures.js';
import './welcome-picture.js';
import './form.js';
import './load.js';
import './upload-picture.js';
import './pictures-filter.js';
import {createLoader} from './load.js';
// eslint-disable-next-line no-console
const loadPicturesFromServer = createLoader(console.log, console.error);
loadPicturesFromServer();


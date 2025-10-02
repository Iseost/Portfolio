import { renderHeader } from './components/header.mjs';
import { renderFooter } from './components/footer.mjs';
import { renderProjectsOverview } from './components/projects.mjs';
import { setupSchoolButton, setupPrivateButton } from './components/buttons.mjs';

renderHeader();
renderFooter();
renderProjectsOverview();
setupSchoolButton();
setupPrivateButton();

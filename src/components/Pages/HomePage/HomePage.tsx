import React, { Profiler } from 'react';

import EnterBlock from './EnterBlock/EnterBlock';
import AdvantagesBlock from './AdvantagesBlock/AdvantagesBlock';
import SkillsBlock from './SkillsBlock/SkillsBlock';
import ProjectsBlock from './ProjectsBlock/ProjectsBlock';
import AboutBlock from './AboutBlock/AboutBlock';

import homepage from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={homepage.container} data-testid="home-page">
      <EnterBlock />
      <AdvantagesBlock />
      <SkillsBlock />
      <ProjectsBlock />
      <AboutBlock />
    </div>
  );
}

export default HomePage;

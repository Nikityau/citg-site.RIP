import React from 'react';
import PurpleBackground from '../../UI/Background/PurpleBackground/PurpleBackground';

function ProjectsPage() {
  return (
    <div
      data-testid="projects-page"
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}
    >
      <PurpleBackground />
    </div>
  );
}

export default ProjectsPage;

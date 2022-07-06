import React from 'react';

import Party from '../../../UI/Background/Party/Party';
import SkillCard from '../../../UI/SkillCard/SkillCard';
import ElementsSection from '../../../UI/ElementsSection/ElementsSection';

// styles
import skillsblock from './SkillsPage.module.scss';

function SkillsBlock() {
  return (
    <div className={skillsblock.container} data-testid="skills-block">
      <div className={skillsblock.outerContainerWrapper}>
        <div className={[skillsblock.innerContainer].join(' ')}>
          <Party />
          <div className={skillsblock.innerWrapper}>
            <div className={skillsblock.title}>
              <h3 data-mouse-focus>Мы Обучаем</h3>
            </div>
            <div className={skillsblock.skills} data-testid="skills-block-skills-section">
              <ElementsSection
                block_1={<SkillCard number="I" title="Unity 3D developer" subtitle="" />}
                block_2={<SkillCard number="II" title="3D Animation" subtitle="Maya" />}
                block_3={
                  <SkillCard number="II" title="Mobile Developer" subtitle="Android/IOS" />
                }
              />
              <ElementsSection
                block_1={<SkillCard number="III" title="VFX Developer" subtitle="Unity 3D" />}
                block_2={<SkillCard number="V" title="Photoshop" subtitle="2d Design" />}
                block_3={<SkillCard number="VI" title=".NET Developer" subtitle="" />}
              />
              <ElementsSection
                block_1={(
                  <SkillCard
                    number="VII"
                    title="Web Developer"
                    subtitle="Front/Back/Fullstack"
                  />
                )}
                block_2={<SkillCard number="VIII" title="3D Design" subtitle="Maya" />}
                block_3={<SkillCard number="IX" title="Python Developer" subtitle="Web/DataScience" />}
              />
            </div>
            <div className={skillsblock.skillMobVer}>
              <SkillCard number="I" title="Unity 3D Developer" subtitle="" />
              <SkillCard number="II" title="VFX Developer" subtitle="Unity 3D" />
              <SkillCard number="III" title="Web Developer" subtitle="Front/Back/Fullstack" />
              <SkillCard number="IV" title="3D Animation" subtitle="Maya" />
              <SkillCard number="V" title="2D Design" subtitle="Photoshop" />
              <SkillCard number="VI" title="3D Design" subtitle="Maya" />
              <SkillCard number="VII" title="Mobile Developer" subtitle="Android/IOS" />
              <SkillCard number="VIII" title=".NET Developer" subtitle="" />
              <SkillCard number="IX" title="Python Developer" subtitle="Web/DataScience" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsBlock;

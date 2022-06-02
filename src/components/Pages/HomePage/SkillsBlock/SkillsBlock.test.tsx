import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SkillsBlock from './SkillsBlock';

describe('SKILLS PAGE TEST', () => {
  test('Loaded', () => {
    render(<SkillsBlock />);

    expect(screen.getByTestId('skills-block')).toBeInTheDocument();
  });
  test('Title Loaded', () => {
    render(<SkillsBlock />);

    expect(screen.getByTestId('skills-block')).toContainHTML('Мы Обучаем');
  });
  test('Skills Loaded', () => {
    render(<SkillsBlock />);

    const skills = screen.getByTestId('skills-block-skills-section');

    expect(skills).toBeInTheDocument();
    expect(skills.children.length).toBe(3);
  });
});

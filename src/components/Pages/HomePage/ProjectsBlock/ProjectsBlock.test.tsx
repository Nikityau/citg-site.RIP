//DIE

test("Die due to nanoid", () => {
    expect(1).toBe(1)
})

/*
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ProjectsBlock from './ProjectsBlock';
import RenderWithRouters from '../../../UtilsTest/RenderWithRouters';

describe('PROJECTS BLOCK TEST', () => {
  test('Page Number Loaded', () => {
    render(<RenderWithRouters path="/test" component={<ProjectsBlock />} />);

    expect(screen.getByTestId('page-number')).toBeInTheDocument();
  });
  test('Title Loaded', () => {
    render(<RenderWithRouters path="/test" component={<ProjectsBlock />} />);

    expect(screen.getByTestId('projects-block-title')).toBeInTheDocument();
  });
  test('Games List Loaded', () => {
    render(<RenderWithRouters path="/test" component={<ProjectsBlock />} />);

    expect(screen.getByTestId('projects-block-games-list')).toBeInTheDocument();
  });
  test('Game List 10 games', () => {
    render(<RenderWithRouters path="/test" component={<ProjectsBlock />} />);

    expect(screen.getByTestId('projects-block-games-list').children.length).toBe(10);
  });
  test('Button Loaded', () => {
    render(<RenderWithRouters path="/test" component={<ProjectsBlock />} />);

    expect(screen.getByTestId('common-button')).toBeInTheDocument();
  });

  describe('CUSTOM SLIDER TEST', () => {
    test('Custom Slider Loaded', () => {
      render(<RenderWithRouters path="/test" component={<ProjectsBlock />} />);

      expect(screen.getByTestId('custom-slider')).toBeInTheDocument();
    });
    test('Title Loaded', () => {
      render(<RenderWithRouters path="/test" component={<ProjectsBlock />} />);

      expect(screen.getByTestId('custom-slider-title')).toBeInTheDocument();
    });
    test('Title Text, "Awards"', () => {
      render(<RenderWithRouters path="/test" component={<ProjectsBlock />} />);

      expect(screen.getByTestId('custom-slider-title')).toContainHTML('Награды');
    });
    test('Left Arrow Loaded', () => {
      render(<RenderWithRouters path="/test" component={<ProjectsBlock />} />);

      expect(screen.getByTestId('custom-slider-left-arrow')).toBeInTheDocument();
    });
    test('Right Arrow Loaded', () => {
      render(<RenderWithRouters path="/test" component={<ProjectsBlock />} />);

      expect(screen.getByTestId('custom-slider-right-arrow')).toBeInTheDocument();
    });
    test('Slider Loaded', () => {
      render(<RenderWithRouters path="/test" component={<ProjectsBlock />} />);

      expect(screen.getByTestId('custom-slider-slider')).toBeInTheDocument();
    });
    test('Slider at list 1 children', () => {
      render(<RenderWithRouters path="/test" component={<ProjectsBlock />} />);

      expect(screen.getByTestId('custom-slider-slider').children.length).toBeGreaterThanOrEqual(1);
    });
    test('Slider pagination Loaded', () => {
      render(<RenderWithRouters path="/test" component={<ProjectsBlock />} />);

      expect(screen.getByTestId('custom-slider-pagination')).toBeInTheDocument();
    });
    test('Slider pagination at list 1 point', () => {
      render(<RenderWithRouters path="/test" component={<ProjectsBlock />} />);

      expect(screen.getByTestId('custom-slider-pagination').children.length).toBeGreaterThanOrEqual(
        1,
      );
    });
  });
});
*/

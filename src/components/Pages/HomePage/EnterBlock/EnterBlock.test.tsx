import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import EnterBlock from './EnterBlock';

describe('ENTER BLOCK TEST', () => {
  describe('TITLE TEST', () => {
    test('Title Loaded', () => {
      render(<EnterBlock />);

      expect(screen.getByTestId('enter-block-title')).toBeInTheDocument();
    });
    test('Title Text', () => {
      render(<EnterBlock />);

      expect(screen.getByTestId('enter-block-title')).toContainHTML('Center IT');
      expect(screen.getByTestId('enter-block-title')).toContainHTML('Gravity');
      expect(screen.getByTestId('enter-block-title')).toContainHTML(
        'Мощная среда для твоего развития',
      );
    });
  });

  describe('ANIMATION LOGO TEST', () => {
    test('Logo Loaded', () => {
      render(<EnterBlock />);

      expect(screen.getByTestId('big-logo')).toBeInTheDocument();
    });
    test('Main Circle Loaded', () => {
      render(<EnterBlock />);

      expect(screen.getByTestId('big-logo-main')).toBeInTheDocument();
    });
    test('Medium Circle Loaded', () => {
      render(<EnterBlock />);

      expect(screen.getByTestId('big-logo-medium-circle')).toBeInTheDocument();
    });
    test('Small Circle Loaded', () => {
      render(<EnterBlock />);

      expect(screen.getByTestId('big-logo-small-circle')).toBeInTheDocument();
    });
    test('Rotating Circle Loaded', () => {
      render(<EnterBlock />);

      expect(screen.getByTestId('big-logo-small-circle')).toBeInTheDocument();
    });
  });

  describe('PAGE NUM TEST', () => {
    test('Page Num Loaded', () => {
      render(<EnterBlock />);

      expect(screen.getByTestId('page-number')).toBeInTheDocument();
    });
    test('Num 01', () => {
      render(<EnterBlock />);

      expect(screen.getByTestId('page-number')).toContainHTML('01');
    });
  });

  describe('INFO BAR TEST', () => {
    test('Info Bar Loaded', () => {
      render(<EnterBlock />);

      expect(screen.getByTestId('info-bar')).toBeInTheDocument();
    });
  });
});

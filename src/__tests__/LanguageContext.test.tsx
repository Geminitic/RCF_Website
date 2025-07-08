import { render, screen } from '@testing-library/react';
import React from 'react';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';

test('LanguageProvider defaults to English text', () => {
  function Greeting() {
    const { t } = useLanguage();
    return <span>{t('hello', 'Hello', 'مرحبا')}</span>;
  }

  render(
    <LanguageProvider>
      <Greeting />
    </LanguageProvider>
  );

  expect(screen.getByText('Hello')).toBeInTheDocument();
});

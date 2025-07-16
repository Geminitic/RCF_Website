import { render, waitFor, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import CalendarPage from '../src/pages/CalendarPage';
import { LanguageProvider } from '../src/contexts/LanguageContext';

const mockEvents = [
  { id: '1', title: 'Test Event', titleAr: 'اختبار', category: 'funding' }
];

vi.stubGlobal(
  'fetch',
  vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({ events: mockEvents, metadata: { lastUpdated: '2025-01-01T00:00:00.000Z' } }),
    })
  ) as any
);

vi.useFakeTimers();

vi.mock('framer-motion', async () => {
  const actual = await vi.importActual<any>('framer-motion');
  return {
    ...actual,
    motion: {
      div: (props: any) => <div {...props} />,
    },
  };
});

vi.useRealTimers();

describe('CalendarPage color styles', () => {
  it('renders event with hex border color', async () => {
    const { container } = render(
      <LanguageProvider>
        <CalendarPage />
      </LanguageProvider>
    );
    await waitFor(() => expect(screen.getByText('Test Event')).toBeInTheDocument());

    const eventDiv = container.querySelector('.border-l-4');
    expect(eventDiv).toHaveStyle({ borderLeftColor: '#22c55e' });
    expect(eventDiv).toMatchSnapshot();
  });
});

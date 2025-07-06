// Analytics tracking utility
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackLinkClick = (linkTitle: string, url: string) => {
  trackEvent('click', 'link', `${linkTitle} - ${url}`);
};

export const trackSocialClick = (platform: string, url: string) => {
  trackEvent('click', 'social', `${platform} - ${url}`);
};

export const trackThemeToggle = (newTheme: string) => {
  trackEvent('toggle', 'theme', newTheme);
};
// import posthog from 'posthog-js';

// // Initialize PostHog only on the client side
// const initPostHog = () => {
//   if (typeof window !== 'undefined') {
//     posthog.init(
//       process.env.NEXT_PUBLIC_POSTHOG_API_KEY || '',
//       {
//         api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
//         // Enable debug mode in development
//         loaded: (posthog) => {
//           if (process.env.NODE_ENV === 'development') posthog.debug();
//         }
//       }
//     );
//   }
// };

// // Event tracking helper functions
// export const trackPageView = (pageName: string) => {
//   posthog.capture('$pageview', { pageName });
// };

// export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
//   posthog.capture(eventName, properties);
// };

// export const identifyUser = (userId: string, traits?: Record<string, any>) => {
//   posthog.identify(userId, traits);
// };

// export { posthog, initPostHog };
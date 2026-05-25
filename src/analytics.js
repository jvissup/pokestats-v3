// Vercel Web Analytics integration
import { inject } from '@vercel/analytics';

// Initialize analytics with production mode
inject({
  mode: 'production'
});

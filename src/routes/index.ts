import { mount, route, lazy, redirect, map } from 'navi';
import authRoutes from './authRoutes';
import publicRoutes from './publicRoutes';

/**
 * Inital Routing:
 */

export const routes = mount({
  /**
   * All public routes that do not require a signin.
   */
  ...publicRoutes,
  /**
   * Auth routes for dealing with login and logout.
   */
  ...authRoutes,
  /**
   * Prefix for all Admin Routes
   */
  '/dashboard': mount({
    '*': lazy(() => import('./dashboardRoutes'))
  })
});
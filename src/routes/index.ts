import express from 'express';
import { AuthRoutes } from '../app/modules/website/Auth/auth.route';
import { UserRoutes } from '../app/modules/website/user/user.route';
import { CategoryRoutes } from '../app/modules/website/category/category.route';

const router = express.Router();

const apiRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/category',
    route: CategoryRoutes,
  },
];

apiRoutes.forEach(route => router.use(route.path, route.route));

export default router;

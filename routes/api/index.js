import { Router } from 'express';
import listRoutes from './lists';

// Book routes
Router.use("/lists", listRoutes);

module.exports = Router;

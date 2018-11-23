import path from 'path';
import { Router } from 'express';
import apiRoutes from './api';

// API Routes
Router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
Router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = Router;

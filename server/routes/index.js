const express = require('express');
const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Serve up React front-end in production
const staticFilesPath = path.join(__dirname, '../../client/build');
router.use(express.static(staticFilesPath));

// Handle requests to non-API routes by serving the React app
router.get('*', (req, res) => {
  res.sendFile(path.join(staticFilesPath, 'index.html'));
});

module.exports = router;

const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveBook,
  deleteBook,
  login,
} = require('../../controllers/user-controller');
const { authMiddleware } = require('../../utils/auth');

// Routes with middleware
router.post('/', createUser);
router.put('/', authMiddleware, saveBook);
router.get('/me', authMiddleware, getSingleUser);
router.delete('/books/:bookId', authMiddleware, deleteBook);

// Login route without middleware
router.post('/login', login);

module.exports = router;

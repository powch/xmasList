import { Router } from 'express';
import { itemController, personController } from '../../controllers';

// Matches with "/api/books"
Router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
Router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = Router;

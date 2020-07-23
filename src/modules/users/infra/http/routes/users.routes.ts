import { Router } from "express";

import UsersController from "../controllers/UsersController";

// import ensureAuthenticated from "../middlewares/ensureAuth";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post("/", usersController.create);

/*
usersRouter.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  async (request, response) => {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  }
); */

export default usersRouter;

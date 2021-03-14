import model from "../models";
import { idSchema } from "../helpers/validateForm";

export default class UploadController {
  static async uploadMultipleFile(request, response, next) {
    try {
      const { id } = request.body;
      const result = await idSchema.validateAsync({ id: id });
      let files = request.files.map((item) => {
        return {
          variantId: result.id,
          location: item.location,
        };
      });
      await model.Image.bulkCreate(files);
      return response.status(200).send("Successful");
    } catch (error) {
      console.log("error", error);
      next(error);
    }
  }
}

import model from "../models";
import {
  productSchema,
  editProductSchema,
  variantSchema,
  idSchema,
  editVariantSchema,
} from "../helpers/validateForm";
import createError from "http-errors";

export default class ProductController {
  static async createProduct(request, response, next) {
    try {
      const result = await productSchema.validateAsync(request.body);
      await model.Product.create(result);
      return response.status(200).send("Product Added!");
    } catch (error) {
      next(error);
    }
  }
  static async editProduct(request, response, next) {
    try {
      const { id } = request.params;
      const idResult = await idSchema.validateAsync({ id: id });
      const product = await model.Product.findOne({
        where: {
          productId: idResult.id,
        },
      });
      if (!product) {
        throw createError.BadRequest(`Invalid Product`);
      }
      const result = await editProductSchema.validateAsync(request.body);
      if (result.product_name === "") delete result.product_name;
      if (result.product_description === "") delete result.product_description;
      await model.Product.update(result, {
        where: {
          productId: idResult.id,
        },
      });
      return response.status(200).send("Edit Successful!");
    } catch (error) {
      next(error);
    }
  }
  static async getProductById(request, response, next) {
    try {
      const { id } = request.params;
      const idResult = await idSchema.validateAsync({ id: id });
      const product = await model.Product.findOne({
        where: {
          productId: idResult.id,
        },
      });
      if (!product) {
        throw createError.BadRequest(`Invalid Product`);
      }
      return response.status(200).send(product);
    } catch (error) {
      next(error);
    }
  }
  static async deleteProduct(request, response, next) {
    try {
      const { id } = request.params;
      const idResult = await idSchema.validateAsync({ id: id });
      const product = await model.Product.findOne({
        where: {
          productId: idResult.id,
        },
      });
      if (!product) {
        throw createError.BadRequest(`Invalid Product`);
      }
      await model.Product.destroy({
        where: {
          productId: idResult.id,
        },
      });
      return response.status(200).send("Product Deleted!");
    } catch (error) {
      next(error);
    }
  }
  static async createVariants(request, response, next) {
    try {
      const result = await variantSchema.validateAsync(request.body);
      await model.Variant.create(result);
      return response.status(200).send("Variant Added!");
    } catch (error) {
      next(error);
    }
  }
  static async editVariants(request, response, next) {
    try {
      const { id } = request.params;
      const idResult = await editVariantSchema.validateAsync({ id: id });
      const variant = await model.Variant.findOne({
        where: {
          variantId: idResult.id,
        },
      });
      if (!variant) {
        throw createError.BadRequest(`Invalid Product`);
      }
      const result = await editProductSchema.validateAsync(request.body);
      if (result.productId === "") delete result.productId;
      if (result.size === "") delete result.size;
      if (result.color === "") delete result.color;
      if (result.quantity === "") delete result.quantity;
      if (result.images === "") delete result.images;
      if (result.price === "") delete result.price;
      await model.Variant.update(result, {
        where: {
          variantId: idResult.id,
        },
      });
      return response.status(200).send("Edit Successful!");
    } catch (error) {
      next(error);
    }
  }
  static async deleteVariants(request, response, next) {
    try {
      const { id } = request.params;
      const idResult = await idSchema.validateAsync({ id: id });
      const variant = await model.Variant.findOne({
        where: {
          variantId: idResult.id,
        },
      });
      if (!variant) {
        throw createError.BadRequest(`Invalid Variant`);
      }
      await model.Variant.destroy({
        where: {
          variantId: idResult.id,
        },
      });
      return response.status(200).send("Variant Deleted!");
    } catch (error) {
      next(error);
    }
  }
  static async getAllProducts(request, response, next) {
    try {
      const investment = await model.Investment.findAll();
      return response.status(200).send(investment);
    } catch (error) {
      next(error);
    }
  }
}

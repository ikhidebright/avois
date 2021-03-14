import Joi from "joi";

const productSchema = Joi.object({
  product_name: Joi.string()
    .required()
    .trim()
    .min(2)
    .empty()
    .lowercase()
    .messages({
      "any.required": "Sorry, Product Name is required",
      "string.min": "Product Name is too short",
      "string.empty": "Sorry, Product Name cannot be an empty field",
    }),
  product_description: Joi.string().required().messages({
    "any.required": "Sorry, Product Description is required",
  }),
});

const editProductSchema = Joi.object({
  product_name: Joi.string()
    .optional()
    .allow("")
    .trim()
    .min(2)
    .empty()
    .lowercase()
    .messages({
      "any.required": "Sorry, Product Name is required",
      "string.min": "Product Name is too short",
      "string.empty": "Sorry, Product Name cannot be an empty field",
    }),
  product_description: Joi.string().optional().allow("").messages({
    "any.required": "Sorry, Product Description is required",
  }),
});

const variantSchema = Joi.object({
  size: Joi.number().required().min(1).empty().messages({
    "any.required": "Sorry, size is required",
    "any.empty": "Sorry, size cannot be an empty field",
    "number.base": "Sorry, size must be a number",
  }),
  quantity: Joi.number().required().min(1).empty().messages({
    "any.required": "Sorry, size is required",
    "any.empty": "Sorry, size cannot be an empty field",
    "number.base": "Sorry, size must be a number",
  }),
  productId: Joi.string().guid().required().messages({
    "any.required": "Sorry, Product is required",
    "string.empty": "Sorry, Product cannot be an empty field",
    "string.guid": "Sorry, Product ID must be valid",
  }),
  price: Joi.number().required().empty().messages({
    "any.required": "Sorry, size is required",
    "any.empty": "Sorry, size cannot be an empty field",
    "number.base": "Sorry, size must be a number",
  }),
  color: Joi.string().required().messages({
    "any.required": "Sorry, color is required",
  }),
});

const editVariantSchema = Joi.object({
  size: Joi.number().optional().allow("").min(1).messages({
    "any.required": "Sorry, size is required",
    "any.empty": "Sorry, size cannot be an empty field",
    "number.base": "Sorry, size must be a number",
  }),
  quantity: Joi.number().optional().allow("").min(1).messages({
    "any.required": "Sorry, size is required",
    "any.empty": "Sorry, size cannot be an empty field",
    "number.base": "Sorry, size must be a number",
  }),
  productId: Joi.string().guid().optional().allow("").messages({
    "any.required": "Sorry, Product is required",
    "string.empty": "Sorry, Product cannot be an empty field",
    "string.guid": "Sorry, Product ID must be valid",
  }),
  price: Joi.number().optional().allow("").messages({
    "any.required": "Sorry, size is required",
    "any.empty": "Sorry, size cannot be an empty field",
    "number.base": "Sorry, size must be a number",
  }),
  color: Joi.string().optional().allow("").messages({
    "any.required": "Sorry, color is required",
  }),
});

const idSchema = Joi.object({
  id: Joi.string().guid().required().messages({
    "any.required": "Sorry, ID is required",
    "string.empty": "Sorry, ID cannot be an empty field",
    "string.guid": "Sorry, ID must be valid",
  }),
});

export {
  productSchema,
  editProductSchema,
  editVariantSchema,
  variantSchema,
  idSchema,
};

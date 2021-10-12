/**
 * @api {get} /blabla 1. Route not found
 * @apiGroup Error
 * @apiVersion 1.0.0
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 (Not Found) route not found
 *     {
 *       "error": true,
 *       "message": "ressource http://localhost:7777/blabla n'existe pas"
 *     }
 */

/**
 * @api {get} /users 2. Invalid request format
 * @apiGroup Error
 * @apiVersion 1.0.0
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 (Bad request) Invalid request format
 *     {
 *       "error": true,
 *       "message": "Le body de la requete n'est pas une JSON valide"
 *     }
 */

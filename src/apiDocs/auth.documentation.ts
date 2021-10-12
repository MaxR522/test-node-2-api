/**
 * @api {post} /auth/register 1. Register
 * @apiGroup Auth
 * @apiVersion 1.0.0
 *
 * @apiParam {String} firstname User firstname
 * @apiParam {String} lastname User lastname
 * @apiParam {String} email User email
 * @apiParam {String} password User password
 * @apiParam {Date} date_naissance User date of birth
 * @apiParam {String} sexe User gender (male, female or others)
 * 
 * @apiParamExample {json} Input
 *    {
        "firstname": "Mario",
        "lastname": "ranja",
        "email": "ranjamario@gmail.com",
        "password": "MaxR522@",
        "date_naissance": "1997-04-30",
        "sexe": "male"
      }
 *
 * @apiSuccess (201) {Boolean} error true if error, false if not
 * @apiSuccess (201) {String} message message response
 * @apiSuccess (201) {Object} tokens contains tokens
 * @apiSuccess (201) {String} tokens.token the access-token
 * @apiSuccess (201) {String} tokens["refresh-token"] the refresh-token
 * @apiSuccess (201) {Date} tokens.createAt time that tokens are created
 * 
 * 
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 201 CREATED
 *    {
        "error": false,
        "message": "L'utilisateur a bien ete cree avec succes",
        "tokens": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY1OGViNDJiNDlmZDlkMDAwNTcyNWYiLCJlbWFpbCI6ImRkZEBnbWFpbC5jb20iLCJpYXQiOjE2MzQwNDU2MjEsImV4cCI6MTYzNDA0OTIyMX0.UQi9o2AUt3FBHSXj83tJcgR-xzOV5Tu50TLDSUrJ2vY",
            "refresh-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY1OGViNDJiNDlmZDlkMDAwNTcyNWYiLCJlbWFpbCI6ImRkZEBnbWFpbC5jb20iLCJpYXQiOjE2MzQwNDU2MjEsImV4cCI6MTY0MjY4NTYyMX0.xpyLhOJYbJigFuTacd6agdjQ68L2EsoyIwfQoMDRYas",
            "createdAt": "2021-10-12T13:33:41.826Z"
        }
    }

 * @apiErrorExample {json} List error
 *    HTTP/1.1 409 (conflict) Duplicated account
 *    {
 *      "error": true,
 *      "message": "Email deja utilisée"
 *    }
 *
 *    HTTP/1.1 400 (bar request) some random error, specified inside errors property
 *    {
 *      "error": true,
 *      "message": "Something went wrong"
 *      "errors": []
 *    }
 *
 *    HTTP/1.1 422 (unprocessable entity) Missing or wrong param format
 *    {
 *      "error": true,
 *      "message": "L'un ou plusieur donnees obligatoire ne sont pas conformes"
 *      "errors": []
 *    }
 *
 */

/**
 * @api {post} /auth/login 2. Login
 * @apiGroup Auth
 * @apiVersion 1.0.0
 *
 * @apiParam {String} email User email
 * @apiParam {String} password User password
 * 
 * @apiParamExample {json} Input
 *    {
        "email": "ranjamario@gmail.com",
        "password": "MaxR522@"
      }
 *
 * @apiSuccess (200) {Boolean} error true if error, false if not
 * @apiSuccess (200) {String} message message response
 * @apiSuccess (200) {Object} tokens contains tokens
 * @apiSuccess (200) {String} tokens.token the access-token
 * @apiSuccess (200) {String} tokens["refresh-token"] the refresh-token
 * @apiSuccess (200) {Date} tokens.createAt time that tokens are created
 * 
 * 
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
        "error": false,
        "message": "L'utilisateur a ete authentifie succès",
        "tokens": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY1OGViNDJiNDlmZDlkMDAwNTcyNWYiLCJlbWFpbCI6ImRkZEBnbWFpbC5jb20iLCJpYXQiOjE2MzQwNDU2MjEsImV4cCI6MTYzNDA0OTIyMX0.UQi9o2AUt3FBHSXj83tJcgR-xzOV5Tu50TLDSUrJ2vY",
            "refresh-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY1OGViNDJiNDlmZDlkMDAwNTcyNWYiLCJlbWFpbCI6ImRkZEBnbWFpbC5jb20iLCJpYXQiOjE2MzQwNDU2MjEsImV4cCI6MTY0MjY4NTYyMX0.xpyLhOJYbJigFuTacd6agdjQ68L2EsoyIwfQoMDRYas",
            "createdAt": "2021-10-12T13:33:41.826Z"
        }
    }

 * @apiErrorExample {json} List error
 *    HTTP/1.1 429 (too-many request) Too many attempt on login
 *    {
 *      "error": true,
 *      "message": "Trop de tentative sur l'email: ranjamario@gmail.com, veillez patientez 1h"
 *    }
 *
 *    HTTP/1.1 400 (bar request) some random error, specified inside errors property
 *    {
 *      "error": true,
 *      "message": "Something went wrong"
 *      "errors": []
 *    }
 *
 *    HTTP/1.1 422 (unprocessable entity) Missing or wrong param format
 *    {
 *      "error": true,
 *      "message": "L'un ou plusieurs donnees obligatoire ne sont pas conformes"
 *      "errors": []
 *    }
 *
 */

/**
 * @api {post} /auth/logout 3. Logout
 * @apiGroup Auth
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess (200) {Boolean} error true if error, false if not
 * @apiSuccess (200) {String} message message response
 * 
 * 
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
        "error": false,
        "message": "L'utilisateur a ete deconnectee succès"
        }
    }

 * @apiErrorExample {json} List error
 *    HTTP/1.1 401 (Unauthorized) Invalid token
 *    {
 *      "error": true,
 *      "message": "le token envoyé n'est pas conforme"
 *    }
 * 
        HTTP/1.1 401 (Unauthorized) Missing token
 *    {
 *      "error": true,
 *      "message": "le token envoyé n'existe pas"
 *    }
 *
 *    HTTP/1.1 401 (Unauthorized) User logged out
 *    {
 *      "error": true,
 *      "message": "Votre token n'est plus valide, veillez le reinitialiser"
 *    }
 *
 */

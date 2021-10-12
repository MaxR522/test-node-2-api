/**
 * @api {put} /users/:id 1. Update
 * @apiGroup User
 * @apiVersion 1.0.0
 * 
 * @apiHeader {String} Authorization access-token
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY1NWYxNTZjODgxNzYzZTgzZTI2ZWQiLCJlbWFpbCI6InJhbmphbWFyaW9AZ21haWwuY29tIiwiaWF0IjoxNjM0MDU4MjQ3LCJleHAiOjE2MzQwNjE4NDd9.yhNTNLEyemAM0NtjCkd4QS_3EQiCHRTaBOOBRyyoL5E"
 *     }
 *
 * @apiParam {String} firstname User firstname (optional)
 * @apiParam {String} lastname User lastname (optional)
 * @apiParam {Date} date_naissance User date of birth (optional)
 * @apiParam {String} sexe User gender (male, female or others) (optional)
 * 
 * @apiParamExample {json} Input
 *    {
        "firstname": "Mario Updated",
        "lastname": "ranja",
        "date_naissance": "1997-04-30",
        "sexe": "male"
      }
 *
 * @apiSuccess (200) {Boolean} error true if error, false if not
 * @apiSuccess (200) {String} message message response
 * 
 * 
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
        "error": false,
        "message": "L'utilisateur a ete modifies succes"
    }

 * @apiErrorExample {json} List error
 *    HTTP/1.1 403 (forbidden) When user try to update someone else info
 *    {
 *      "error": true,
 *      "message": "Vous n'avez pas le droit de modifier d'autre information utilisateur"
 *    }
 * 
 *    HTTP/1.1 401 (Unauthorized) When sending empty data
 *    {
 *      "error": true,
 *      "message": "aucune donnee n'a ete envoyée"
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

/**
 * @api {put} /users/:id/password 2. Update Password
 * @apiGroup User
 * @apiVersion 1.0.0
 * 
 * @apiHeader {String} Authorization access-token
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY1NWYxNTZjODgxNzYzZTgzZTI2ZWQiLCJlbWFpbCI6InJhbmphbWFyaW9AZ21haWwuY29tIiwiaWF0IjoxNjM0MDU4MjQ3LCJleHAiOjE2MzQwNjE4NDd9.yhNTNLEyemAM0NtjCkd4QS_3EQiCHRTaBOOBRyyoL5E"
 *     }
 *
 * @apiParam {String} currentPassword User current password (mandatory)
 * @apiParam {String} newPassword User new password (mandatory)
 * 
 * @apiParamExample {json} Input
 *    {
        "currentPassword": "MaxR522@",
        "newPassword": "newPassword123@"
      }
 *
 * @apiSuccess (200) {Boolean} error true if error, false if not
 * @apiSuccess (200) {String} message message response
 * 
 * 
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
        "error": false,
        "message": "Votre password a ete modifies avec succès"
    }

 * @apiErrorExample {json} List error
 *    HTTP/1.1 403 (forbidden) When user try to update someone else info
 *    {
 *      "error": true,
 *      "message": "Vous n'avez pas le droit de modifier d'autre information utilisateur"
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
 *     HTTP/1.1 401 (Unauthorized) Invalid token
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

/**
 * @api {get} /users 3. Get all user
 * @apiGroup User
 * @apiVersion 1.0.0
 * 
 * @apiHeader {String} Authorization access-token
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY1NWYxNTZjODgxNzYzZTgzZTI2ZWQiLCJlbWFpbCI6InJhbmphbWFyaW9AZ21haWwuY29tIiwiaWF0IjoxNjM0MDU4MjQ3LCJleHAiOjE2MzQwNjE4NDd9.yhNTNLEyemAM0NtjCkd4QS_3EQiCHRTaBOOBRyyoL5E"
 *     }
 *
 * @apiSuccess (200) {Boolean} error true if error, false if not
 * @apiSuccess (200) {Array} users Array of all users inside DB
 * 
 * 
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
          "error": false,
          "users": [
              {
                  "_id": "61655f156c881763e83e26ed",
                  "firstname": "Mario updated",
                  "lastname": "Ranja",
                  "email": "ranjamario@gmail.com",
                  "gender": "male"
              },
              {
                  "_id": "6165641decfd7d2a4984efeb",
                  "firstname": "Mario",
                  "lastname": "Ranja",
                  "email": "ranjamario2@gmail.com",
                  "gender": "male"
              },
              {
                  "_id": "61656450ecfd7d2a4984efee",
                  "firstname": "hop",
                  "lastname": "hap",
                  "email": "others@gmail.com",
                  "gender": "others"
              },
              {
                  "_id": "61658eb42b49fd9d0005725f",
                  "firstname": "hop",
                  "lastname": "hap",
                  "email": "ddd@gmail.com",
                  "gender": "others"
              },
              {
                  "_id": "6165b86ecf553a5cbe91d407",
                  "firstname": "Prenom",
                  "lastname": "nom",
                  "email": "nom@nom.com",
                  "gender": "male"
              }
          ]
      }

 * @apiErrorExample {json} List error
 *
 *    HTTP/1.1 400 (bar request) some random error, specified inside errors property
 *    {
 *      "error": true,
 *      "message": "Something went wrong"
 *      "errors": []
 *    }
 *
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
 */

/**
 * @api {get} /users/:id 4. Get one user
 * @apiGroup User
 * @apiVersion 1.0.0
 * 
 * @apiHeader {String} Authorization access-token
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY1NWYxNTZjODgxNzYzZTgzZTI2ZWQiLCJlbWFpbCI6InJhbmphbWFyaW9AZ21haWwuY29tIiwiaWF0IjoxNjM0MDU4MjQ3LCJleHAiOjE2MzQwNjE4NDd9.yhNTNLEyemAM0NtjCkd4QS_3EQiCHRTaBOOBRyyoL5E"
 *     }
 *
 * @apiSuccess (200) {Boolean} error true if error, false if not
 * @apiSuccess (200) {Object} user the user queried inside DB
 * 
 * 
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *    {
          "error": false,
          "user": {
              "firstname": "Mario updated",
              "lastname": "Ranja",
              "email": "ranjamario@gmail.com",
              "date_naissance": "1997-04-30T00:00:00.000Z",
              "sexe": "male",
              "createdAt": "2021-10-12T10:10:29.443Z"
          }
      }

 * @apiErrorExample {json} List error
 *
 *    HTTP/1.1 400 (bar request) some random error, specified inside errors property
 *    {
 *      "error": true,
 *      "message": "Something went wrong"
 *      "errors": []
 *    }
 * 
 *     HTTP/1.1 404 (not found) user not found
 *    {
 *      "error": true,
 *      "message": "user not found'"
 *      "errors": []
 *    }
 *
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
 */

define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "2. Login",
    "group": "Auth",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"email\": \"ranjamario@gmail.com\",\n     \"password\": \"MaxR522@\"\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>true if error, false if not</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message response</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "tokens",
            "description": "<p>contains tokens</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tokens.token",
            "description": "<p>the access-token</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "tokens.createAt",
            "description": "<p>time that tokens are created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"error\": false,\n     \"message\": \"L'utilisateur a ete authentifie succès\",\n     \"tokens\": {\n         \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY1OGViNDJiNDlmZDlkMDAwNTcyNWYiLCJlbWFpbCI6ImRkZEBnbWFpbC5jb20iLCJpYXQiOjE2MzQwNDU2MjEsImV4cCI6MTYzNDA0OTIyMX0.UQi9o2AUt3FBHSXj83tJcgR-xzOV5Tu50TLDSUrJ2vY\",\n         \"refresh-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY1OGViNDJiNDlmZDlkMDAwNTcyNWYiLCJlbWFpbCI6ImRkZEBnbWFpbC5jb20iLCJpYXQiOjE2MzQwNDU2MjEsImV4cCI6MTY0MjY4NTYyMX0.xpyLhOJYbJigFuTacd6agdjQ68L2EsoyIwfQoMDRYas\",\n         \"createdAt\": \"2021-10-12T13:33:41.826Z\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 429 (too-many request) Too many attempt on login\n{\n  \"error\": true,\n  \"message\": \"Trop de tentative sur l'email: ranjamario@gmail.com, veillez patientez 1h\"\n}\n\nHTTP/1.1 400 (bar request) some random error, specified inside errors property\n{\n  \"error\": true,\n  \"message\": \"Something went wrong\"\n  \"errors\": []\n}\n\nHTTP/1.1 422 (unprocessable entity) Missing or wrong param format\n{\n  \"error\": true,\n  \"message\": \"L'un ou plusieurs donnees obligatoire ne sont pas conformes\"\n  \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apiDocs/auth.documentation.ts",
    "groupTitle": "Auth",
    "name": "PostAuthLogin",
    "sampleRequest": [
      {
        "url": "http://localhost:7777/auth/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/logout",
    "title": "3. Logout",
    "group": "Auth",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>true if error, false if not</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"error\": false,\n     \"message\": \"L'utilisateur a ete deconnectee succès\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 401 (Unauthorized) Invalid token\n{\n  \"error\": true,\n  \"message\": \"le token envoyé n'est pas conforme\"\n}\n\n     HTTP/1.1 401 (Unauthorized) Missing token\n{\n  \"error\": true,\n  \"message\": \"le token envoyé n'existe pas\"\n}\n\nHTTP/1.1 401 (Unauthorized) User logged out\n{\n  \"error\": true,\n  \"message\": \"Votre token n'est plus valide, veillez le reinitialiser\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apiDocs/auth.documentation.ts",
    "groupTitle": "Auth",
    "name": "PostAuthLogout",
    "sampleRequest": [
      {
        "url": "http://localhost:7777/auth/logout"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "1. Register",
    "group": "Auth",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>User firstname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>User lastname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date_naissance",
            "description": "<p>User date of birth</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sexe",
            "description": "<p>User gender (male, female or others)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"firstname\": \"Mario\",\n     \"lastname\": \"ranja\",\n     \"email\": \"ranjamario@gmail.com\",\n     \"password\": \"MaxR522@\",\n     \"date_naissance\": \"1997-04-30\",\n     \"sexe\": \"male\"\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>true if error, false if not</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message response</p>"
          },
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "tokens",
            "description": "<p>contains tokens</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "tokens.token",
            "description": "<p>the access-token</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "tokens.createAt",
            "description": "<p>time that tokens are created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 CREATED\n{\n     \"error\": false,\n     \"message\": \"L'utilisateur a bien ete cree avec succes\",\n     \"tokens\": {\n         \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY1OGViNDJiNDlmZDlkMDAwNTcyNWYiLCJlbWFpbCI6ImRkZEBnbWFpbC5jb20iLCJpYXQiOjE2MzQwNDU2MjEsImV4cCI6MTYzNDA0OTIyMX0.UQi9o2AUt3FBHSXj83tJcgR-xzOV5Tu50TLDSUrJ2vY\",\n         \"refresh-token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY1OGViNDJiNDlmZDlkMDAwNTcyNWYiLCJlbWFpbCI6ImRkZEBnbWFpbC5jb20iLCJpYXQiOjE2MzQwNDU2MjEsImV4cCI6MTY0MjY4NTYyMX0.xpyLhOJYbJigFuTacd6agdjQ68L2EsoyIwfQoMDRYas\",\n         \"createdAt\": \"2021-10-12T13:33:41.826Z\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 409 (conflict) Duplicated account\n{\n  \"error\": true,\n  \"message\": \"Email deja utilisée\"\n}\n\nHTTP/1.1 400 (bar request) some random error, specified inside errors property\n{\n  \"error\": true,\n  \"message\": \"Something went wrong\"\n  \"errors\": []\n}\n\nHTTP/1.1 422 (unprocessable entity) Missing or wrong param format\n{\n  \"error\": true,\n  \"message\": \"L'un ou plusieur donnees obligatoire ne sont pas conformes\"\n  \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apiDocs/auth.documentation.ts",
    "groupTitle": "Auth",
    "name": "PostAuthRegister",
    "sampleRequest": [
      {
        "url": "http://localhost:7777/auth/register"
      }
    ]
  },
  {
    "type": "get",
    "url": "/blabla",
    "title": "1. Route not found",
    "group": "Error",
    "version": "1.0.0",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 (Not Found) route not found\n{\n  \"error\": true,\n  \"message\": \"ressource http://localhost:7777/blabla n'existe pas\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apiDocs/error.documentation.ts",
    "groupTitle": "Error",
    "name": "GetBlabla",
    "sampleRequest": [
      {
        "url": "http://localhost:7777/blabla"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users",
    "title": "2. Invalid request format",
    "group": "Error",
    "version": "1.0.0",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 (Bad request) Invalid request format\n{\n  \"error\": true,\n  \"message\": \"Le body de la requete n'est pas une JSON valide\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apiDocs/error.documentation.ts",
    "groupTitle": "Error",
    "name": "GetUsers",
    "sampleRequest": [
      {
        "url": "http://localhost:7777/users"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users",
    "title": "3. Get all user",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY1NWYxNTZjODgxNzYzZTgzZTI2ZWQiLCJlbWFpbCI6InJhbmphbWFyaW9AZ21haWwuY29tIiwiaWF0IjoxNjM0MDU4MjQ3LCJleHAiOjE2MzQwNjE4NDd9.yhNTNLEyemAM0NtjCkd4QS_3EQiCHRTaBOOBRyyoL5E\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>true if error, false if not</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "users",
            "description": "<p>Array of all users inside DB</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n       \"error\": false,\n       \"users\": [\n           {\n               \"_id\": \"61655f156c881763e83e26ed\",\n               \"firstname\": \"Mario updated\",\n               \"lastname\": \"Ranja\",\n               \"email\": \"ranjamario@gmail.com\",\n               \"gender\": \"male\"\n           },\n           {\n               \"_id\": \"6165641decfd7d2a4984efeb\",\n               \"firstname\": \"Mario\",\n               \"lastname\": \"Ranja\",\n               \"email\": \"ranjamario2@gmail.com\",\n               \"gender\": \"male\"\n           },\n           {\n               \"_id\": \"61656450ecfd7d2a4984efee\",\n               \"firstname\": \"hop\",\n               \"lastname\": \"hap\",\n               \"email\": \"others@gmail.com\",\n               \"gender\": \"others\"\n           },\n           {\n               \"_id\": \"61658eb42b49fd9d0005725f\",\n               \"firstname\": \"hop\",\n               \"lastname\": \"hap\",\n               \"email\": \"ddd@gmail.com\",\n               \"gender\": \"others\"\n           },\n           {\n               \"_id\": \"6165b86ecf553a5cbe91d407\",\n               \"firstname\": \"Prenom\",\n               \"lastname\": \"nom\",\n               \"email\": \"nom@nom.com\",\n               \"gender\": \"male\"\n           }\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "\nHTTP/1.1 400 (bar request) some random error, specified inside errors property\n{\n  \"error\": true,\n  \"message\": \"Something went wrong\"\n  \"errors\": []\n}\n\nHTTP/1.1 401 (Unauthorized) Invalid token\n{\n  \"error\": true,\n  \"message\": \"le token envoyé n'est pas conforme\"\n}\n\n     HTTP/1.1 401 (Unauthorized) Missing token\n{\n  \"error\": true,\n  \"message\": \"le token envoyé n'existe pas\"\n}\n\nHTTP/1.1 401 (Unauthorized) User logged out\n{\n  \"error\": true,\n  \"message\": \"Votre token n'est plus valide, veillez le reinitialiser\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apiDocs/user.documentation.ts",
    "groupTitle": "User",
    "name": "GetUsers",
    "sampleRequest": [
      {
        "url": "http://localhost:7777/users"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "4. Get one user",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY1NWYxNTZjODgxNzYzZTgzZTI2ZWQiLCJlbWFpbCI6InJhbmphbWFyaW9AZ21haWwuY29tIiwiaWF0IjoxNjM0MDU4MjQ3LCJleHAiOjE2MzQwNjE4NDd9.yhNTNLEyemAM0NtjCkd4QS_3EQiCHRTaBOOBRyyoL5E\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>true if error, false if not</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>the user queried inside DB</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n{\n       \"error\": false,\n       \"user\": {\n           \"firstname\": \"Mario updated\",\n           \"lastname\": \"Ranja\",\n           \"email\": \"ranjamario@gmail.com\",\n           \"date_naissance\": \"1997-04-30T00:00:00.000Z\",\n           \"sexe\": \"male\",\n           \"createdAt\": \"2021-10-12T10:10:29.443Z\"\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "\nHTTP/1.1 400 (bar request) some random error, specified inside errors property\n{\n  \"error\": true,\n  \"message\": \"Something went wrong\"\n  \"errors\": []\n}\n\n HTTP/1.1 404 (not found) user not found\n{\n  \"error\": true,\n  \"message\": \"user not found'\"\n  \"errors\": []\n}\n\nHTTP/1.1 401 (Unauthorized) Invalid token\n{\n  \"error\": true,\n  \"message\": \"le token envoyé n'est pas conforme\"\n}\n\n     HTTP/1.1 401 (Unauthorized) Missing token\n{\n  \"error\": true,\n  \"message\": \"le token envoyé n'existe pas\"\n}\n\nHTTP/1.1 401 (Unauthorized) User logged out\n{\n  \"error\": true,\n  \"message\": \"Votre token n'est plus valide, veillez le reinitialiser\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apiDocs/user.documentation.ts",
    "groupTitle": "User",
    "name": "GetUsersId",
    "sampleRequest": [
      {
        "url": "http://localhost:7777/users/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "1. Update",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY1NWYxNTZjODgxNzYzZTgzZTI2ZWQiLCJlbWFpbCI6InJhbmphbWFyaW9AZ21haWwuY29tIiwiaWF0IjoxNjM0MDU4MjQ3LCJleHAiOjE2MzQwNjE4NDd9.yhNTNLEyemAM0NtjCkd4QS_3EQiCHRTaBOOBRyyoL5E\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>User firstname (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>User lastname (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date_naissance",
            "description": "<p>User date of birth (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sexe",
            "description": "<p>User gender (male, female or others) (optional)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"firstname\": \"Mario Updated\",\n     \"lastname\": \"ranja\",\n     \"date_naissance\": \"1997-04-30\",\n     \"sexe\": \"male\"\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>true if error, false if not</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"error\": false,\n     \"message\": \"L'utilisateur a ete modifies succes\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 403 (forbidden) When user try to update someone else info\n{\n  \"error\": true,\n  \"message\": \"Vous n'avez pas le droit de modifier d'autre information utilisateur\"\n}\n\nHTTP/1.1 401 (Unauthorized) When sending empty data\n{\n  \"error\": true,\n  \"message\": \"aucune donnee n'a ete envoyée\"\n}\n\nHTTP/1.1 400 (bar request) some random error, specified inside errors property\n{\n  \"error\": true,\n  \"message\": \"Something went wrong\"\n  \"errors\": []\n}\n\nHTTP/1.1 422 (unprocessable entity) Missing or wrong param format\n{\n  \"error\": true,\n  \"message\": \"L'un ou plusieur donnees obligatoire ne sont pas conformes\"\n  \"errors\": []\n}\n\nHTTP/1.1 401 (Unauthorized) Invalid token\n{\n  \"error\": true,\n  \"message\": \"le token envoyé n'est pas conforme\"\n}\n\n     HTTP/1.1 401 (Unauthorized) Missing token\n{\n  \"error\": true,\n  \"message\": \"le token envoyé n'existe pas\"\n}\n\nHTTP/1.1 401 (Unauthorized) User logged out\n{\n  \"error\": true,\n  \"message\": \"Votre token n'est plus valide, veillez le reinitialiser\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apiDocs/user.documentation.ts",
    "groupTitle": "User",
    "name": "PutUsersId",
    "sampleRequest": [
      {
        "url": "http://localhost:7777/users/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/users/:id/password",
    "title": "2. Update Password",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>access-token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY1NWYxNTZjODgxNzYzZTgzZTI2ZWQiLCJlbWFpbCI6InJhbmphbWFyaW9AZ21haWwuY29tIiwiaWF0IjoxNjM0MDU4MjQ3LCJleHAiOjE2MzQwNjE4NDd9.yhNTNLEyemAM0NtjCkd4QS_3EQiCHRTaBOOBRyyoL5E\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currentPassword",
            "description": "<p>User current password (mandatory)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>User new password (mandatory)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"currentPassword\": \"MaxR522@\",\n     \"newPassword\": \"newPassword123@\"\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>true if error, false if not</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n     \"error\": false,\n     \"message\": \"Votre password a ete modifies avec succès\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 403 (forbidden) When user try to update someone else info\n{\n  \"error\": true,\n  \"message\": \"Vous n'avez pas le droit de modifier d'autre information utilisateur\"\n}\n\nHTTP/1.1 400 (bar request) some random error, specified inside errors property\n{\n  \"error\": true,\n  \"message\": \"Something went wrong\"\n  \"errors\": []\n}\n\nHTTP/1.1 422 (unprocessable entity) Missing or wrong param format\n{\n  \"error\": true,\n  \"message\": \"L'un ou plusieur donnees obligatoire ne sont pas conformes\"\n  \"errors\": []\n}\n\n HTTP/1.1 401 (Unauthorized) Invalid token\n{\n  \"error\": true,\n  \"message\": \"le token envoyé n'est pas conforme\"\n}\n\n     HTTP/1.1 401 (Unauthorized) Missing token\n{\n  \"error\": true,\n  \"message\": \"le token envoyé n'existe pas\"\n}\n\nHTTP/1.1 401 (Unauthorized) User logged out\n{\n  \"error\": true,\n  \"message\": \"Votre token n'est plus valide, veillez le reinitialiser\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/apiDocs/user.documentation.ts",
    "groupTitle": "User",
    "name": "PutUsersIdPassword",
    "sampleRequest": [
      {
        "url": "http://localhost:7777/users/:id/password"
      }
    ]
  }
] });

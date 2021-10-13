import app from '../src';
import * as request from 'supertest';
import User from '../src/models/user';
import BlacklistToken from '../src/models/blacklist_token';

// clear users collection before test
beforeAll(async () => {
  try {
    await User.deleteMany({});
    await BlacklistToken.deleteMany({});
  } catch (error: any) {
    throw new Error(error);
  }
});

describe('Test API endpoins', () => {
  let accessToken1: string; // revoked
  let accessToken2: string; // valid
  /**************************************************************
   * TEST Register
   **************************************************************/
  it('Should return 201 register success POST /auth/register', async () => {
    const registerBody: any = {
      firstname: 'testFirst',
      lastname: 'testLast',
      email: 'jest@jest.com',
      password: 'Jest@2552',
      date_naissance: '1997-02-12',
      sexe: 'others',
    };

    const res = await request(app).post('/auth/register').send(registerBody);

    // store the generated access token
    accessToken1 = res.body.tokens.token;
    expect(res.statusCode).toEqual(201);
    expect(res.body.error).toEqual(false);
    expect(res.body.tokens).toEqual(expect.any(Object));
  });

  it('Should return 422 register invalid data sent POST /auth/register', async () => {
    const badRegisterBody: any = {
      firstname: 'testFirst',
      lastname: 'testLast',
      email: 'jest', // Invalid email
      password: 'Jest@2552',
      date_naissance: '04-30-1997', // Invalid date format, need to be YYYY-MM-DD
      sexe: 'others',
    };

    const res = await request(app).post('/auth/register').send(badRegisterBody);

    expect(res.statusCode).toEqual(422);
    expect(res.body.error).toEqual(true);
    expect(res.body.tokens).toBe(undefined);
  });

  it('Should return 409 register email already exists POST /auth/register', async () => {
    const duplicateRegisterBody: any = {
      firstname: 'testFirst',
      lastname: 'testLast',
      email: 'jest@jest.com',
      password: 'Jest@2552',
      date_naissance: '1997-02-12',
      sexe: 'others',
    };

    const res = await request(app)
      .post('/auth/register')
      .send(duplicateRegisterBody);

    expect(res.statusCode).toEqual(409);
    expect(res.body.error).toEqual(true);
    expect(res.body.tokens).toBe(undefined);
  });

  /**************************************************************
   * TEST Login
   **************************************************************/

  it('Should return 200 Login success POST /auth/login', async () => {
    const loginBody: any = {
      email: 'jest@jest.com',
      password: 'Jest@2552',
    };

    const resLogin = await request(app).post('/auth/login').send(loginBody);

    // store the generated access token
    accessToken2 = resLogin.body.tokens.token;
    expect(resLogin.statusCode).toEqual(200);
    expect(resLogin.body.error).toEqual(false);
    expect(resLogin.body.tokens).toEqual(expect.any(Object));
  });

  it('Should return 401 Login wrong password POST /auth/login', async () => {
    const badLoginBody: any = {
      email: 'jest@jest.com',
      password: 'Jest@2',
    };

    const resLogin = await request(app).post('/auth/login').send(badLoginBody);

    expect(resLogin.statusCode).toEqual(401);
    expect(resLogin.body.error).toEqual(true);
    expect(resLogin.body.tokens).toBe(undefined);
  });

  /**************************************************************
   * TEST Get all users
   **************************************************************/

  it('Should return 200 Get all users success GET /users', async () => {
    const resGetAll = await request(app)
      .get('/users')
      .set({ Authorization: `Bearer ${accessToken2}` });

    expect(resGetAll.statusCode).toEqual(200);
    expect(resGetAll.body.error).toEqual(false);
    expect(resGetAll.body.users).toEqual(expect.any(Array));
  });

  it('Should return 401 Get all users on missing token GET /users', async () => {
    const resGetAll = await request(app).get('/users');

    expect(resGetAll.statusCode).toEqual(401);
    expect(resGetAll.body.error).toEqual(true);
    expect(resGetAll.body.users).toBe(undefined);
  });

  /**************************************************************
   * TEST Get one user
   **************************************************************/

  it('Should return 200 Get one user success GET /users/:id', async () => {
    let user: any;

    try {
      user = await User.findOne({ email: 'jest@jest.com' });
    } catch (error: any) {
      throw new Error(error);
    }
    console.log(`/users/${user._id}`);

    const resGetOne = await request(app)
      .get(`/users/${user._id}`)
      .set({ Authorization: `Bearer ${accessToken2}` });

    expect(resGetOne.statusCode).toEqual(200);
    expect(resGetOne.body.error).toEqual(false);
    expect(resGetOne.body.user).toEqual(expect.any(Object));
  });

  it('Should return 404 Get one user on missing user GET /users/:id', async () => {
    const resGetOne = await request(app)
      .get(`/users/61655f156c881763e83e26ed`)
      .set({ Authorization: `Bearer ${accessToken2}` });

    expect(resGetOne.statusCode).toEqual(404);
    expect(resGetOne.body.error).toEqual(true);
    expect(resGetOne.body.user).toBe(undefined);
  });

  /**************************************************************
   * TEST Update one user
   **************************************************************/

  it('Should return 200 Update one user success PUT /users/:id', async () => {
    let user: any;
    const updateBody: any = {
      firstname: 'updated',
    };

    try {
      user = await User.findOne({ email: 'jest@jest.com' });
    } catch (error: any) {
      throw new Error(error);
    }
    console.log(`/users/${user._id}`);

    const resUpdate = await request(app)
      .put(`/users/${user._id}`)
      .send(updateBody)
      .set({ Authorization: `Bearer ${accessToken2}` });

    expect(resUpdate.statusCode).toEqual(200);
    expect(resUpdate.body.error).toEqual(false);
  });

  it('Should return 403 Update one user because trying to update someone else info PUT /users/:id', async () => {
    const updateBody: any = {
      firstname: 'updated',
    };

    const resUpdate = await request(app)
      .put(`/users/61655f156c881763e83e26ed`)
      .send(updateBody)
      .set({ Authorization: `Bearer ${accessToken2}` });

    expect(resUpdate.statusCode).toEqual(403);
    expect(resUpdate.body.error).toEqual(true);
  });

  /**************************************************************
   * TEST Update password user
   **************************************************************/

  it('Should return 200 Update password user success PUT /users/:id/password', async () => {
    let user: any;
    const updatePasswordBody: any = {
      currentPassword: 'Jest@2552',
      newPassword: 'Jest@442!',
    };

    try {
      user = await User.findOne({ email: 'jest@jest.com' });
    } catch (error: any) {
      throw new Error(error);
    }
    console.log(`/users/${user._id}`);

    const resUpdate = await request(app)
      .put(`/users/${user._id}`)
      .send(updatePasswordBody)
      .set({ Authorization: `Bearer ${accessToken2}` });

    expect(resUpdate.statusCode).toEqual(200);
    expect(resUpdate.body.error).toEqual(false);
  });

  /**************************************************************
   * TEST Logout
   **************************************************************/

  it('Should return 200 Logout success POST /auth/logout', async () => {
    const resLogout = await request(app)
      .post('/auth/logout')
      .set({ Authorization: `Bearer ${accessToken1}` });

    expect(resLogout.statusCode).toEqual(200);
    expect(resLogout.body.error).toEqual(false);
  });

  it('Should return 401 Logout invalid token POST /auth/logout', async () => {
    const resLogout = await request(app)
      .post('/auth/logout')
      .set({ Authorization: `Bearer ${accessToken1}` });

    expect(resLogout.statusCode).toEqual(401);
    expect(resLogout.body.error).toEqual(true);
  });
});

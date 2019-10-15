import { call } from "redux-saga/effects";
import { authenticate } from "api/user";
import { login } from "./index";

const USER_CREDENTIALS = { username: "test", password: "user" };

it("logs in succesfully", () => {
  const iterator = login(USER_CREDENTIALS);
  expect(iterator.next("token").value).toEqual(
    call(authenticate, USER_CREDENTIALS.username, USER_CREDENTIALS.password)
  );
  console.log(iterator.next().value);
});

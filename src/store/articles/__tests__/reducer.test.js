import React from "react";
import { REQUEST_STATUS } from "../../../components/utils/constans";
import { GET_ARTICLES_PENDING } from "../actions";

import { newsReduser } from "../reducer";

describe("articles reducer", () => {
  it("hade case, returns state and request", () => {
    const expected = {
      state: null,
      request: {
        errror: null,
        status: REQUEST_STATUS.PENDING,
      },
    };

    expect(expected).toMatchSnapshot();
  });
});

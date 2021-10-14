import { expect, it, jest } from "@jest/globals";
import { URL_PUBLIC } from "../../../components/utils/constans";
import {
  getArticlesPending,
  GET_ARTICLES_PENDING,
  getArticles,
  GetArticlesSuccess,
  getArticlesFailure,
} from "../actions";

describe("articles actions", () => {
  it("getArticlesPending returns and action with type", () => {
    const expected = {
      type: GET_ARTICLES_PENDING,
    };
    const receved = getArticlesPending();

    expect(expected).toEqual(receved);
  });

  describe("getArticles", () => {
    it("calls fetch with URL_PUBLIC", async () => {
      const mockDispatch = jest.fn();
      fetchMock.mockOnce(
        JSON.stringify(
          "this next call to fetch will always return this as the body"
        )
      );

      await getArticles()(mockDispatch);

      expect(fetchMock).toHaveBeenCalledWith(URL_PUBLIC);
    });

    it("calls dispath with getArticles success with result from fetch", async () => {
      const mockDispatch = jest.fn();
      const result = ["articles"];

      fetchMock.mockOnce(
        JSON.stringify(result));

      await getArticles()(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledTimes(2);
      expect(mockDispatch).toHaveBeenLastCalledWith(GetArticlesSuccess(result));
    });
  });

/*   describe("tests errors",  () => {
    it("calls console.log when happines error", async () => {
      const mockDispatch = jest.fn();
      const e = ["error"];

      fetchMock.mockOnce(
        JSON.stringify(e));

        await getArticlesFailure(mockDispatch);

    expect(mockDispatch).toThrow(e)
  })
}) */
})

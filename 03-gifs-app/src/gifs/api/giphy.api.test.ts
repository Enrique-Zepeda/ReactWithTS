import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe("giphy.api", () => {
  test("should be configured correctly", () => {
    // console.log(giphyApi.defaults);
    const param = giphyApi.defaults.params;
    // console.log(param);
    expect(giphyApi.defaults.baseURL).toBe("https://api.giphy.com/v1/gifs");
    expect(param.lang).toBe("es");
    expect(param.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);

    expect(param).toStrictEqual({
      lang: "es",
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
    });
  });
});

import RenderComponent from "../scripts/main";
import 'whatwg-fetch';

describe("Main.js", () => {

  let mockData = [
    {
      title: "This is the title",
      mainText: "This is a paragraph",
      buttonText: "This is a button",
      buttonLink: "https://www.example.com",
      imageURL: "https://sguk-uks-mkt-web-prod-02-cdn-endpoint-assets.azureedge.net/public/images/bitmap/large/157417321.jpg?version=20200720.1",
    },
  ];

  const fetch = jest.fn(mockData);

  test("it runs", () => {
    const render = RenderComponent(fetch);

    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

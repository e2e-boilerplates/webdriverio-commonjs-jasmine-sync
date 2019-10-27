describe("google search", () => {
  beforeAll(() => {
    browser.url("https://www.google.com/");
  });

  it("should be on google search page", async () => {
    browser.waitUntil(
      () => {
        return $(".gLFyf.gsfi").isDisplayed() === true;
      },
      5000,
      "expected search bar to be displayed after 5s"
    );

    const title = await browser.getTitle();
    expect(title).toEqual("Google");
  });

  it("should search for Cheese!", () => {
    const searchBox = $(".gLFyf.gsfi");
    expect(searchBox.isDisplayed()).toBe(true);
    searchBox.addValue("Cheese!");

    const googleSearchButton = $(".gNO89b");
    googleSearchButton.waitForDisplayed(5000);
    googleSearchButton.click();
  });

  it('the page title should start with "Cheese!"', async () => {
    browser.waitUntil(
      () => {
        return $("#resultStats").isDisplayed() === true;
      },
      5000,
      "expected search result counter to be displayed after 5s"
    );

    const title = await browser.getTitle();
    const words = title.split(" ");
    expect(words[0]).toEqual("Cheese!");
  });
});

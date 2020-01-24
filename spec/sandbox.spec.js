describe("Sandbox", () => {
  beforeAll(() => {
    browser.url("https://e2e-boilerplates.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    const title = browser.getTitle();
    const header = $("h1");

    expect(title).toEqual("Sandbox");
    expect(header.getText()).toEqual("Sandbox");
  });
});

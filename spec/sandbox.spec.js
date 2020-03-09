describe("Sandbox", () => {
  beforeAll(() => {
    browser.url("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on sandbox", () => {
    const title = browser.getTitle();
    const header = $("h1");

    expect(title).toEqual("Sandbox");
    expect(header.getText()).toEqual("Sandbox");
  });
});

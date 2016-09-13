describe("a11y check", function() {
  it("has no accessbility violations (check console for errors)", function(done) {
    axe.a11yCheck($("#fixture")[0], function (results) {
        expect(results.violations.length).toBe(0);
        results.violations.length && console.error(results.violations);
        done();
    });
  });
});
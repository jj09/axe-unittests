QUnit.test("a11y check", function(assert) {
    var done = assert.async();

    axe.a11yCheck($("#qunit-fixture")[0], function (results) {
        assert.strictEqual(results.violations.length, 0, "There should be no A11y violations (check console for errors)");
        results.violations.length && console.error(results.violations);
        done();
    });
});
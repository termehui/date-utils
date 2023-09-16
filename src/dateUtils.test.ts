import { test, expect } from "vitest";
import { ago, humanize, parse } from "./dateUtils";
import moment from "moment-jalaali";

test("humanize", () => {
    expect(humanize(1000, "second", "fa")).toBe("16 دقیقه و 40 ثانیه");
});

test("parse", () => {
    expect(parse("2020-01-02").format("")).toBe("2020-01-02T00:00:00+03:30");
});

test("ago", () => {
    let d = moment();
    d = d.add(-10, "minutes");
    expect(ago(d, "en")).toBe("10 minutes ago");
});

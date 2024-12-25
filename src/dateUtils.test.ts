import { test, expect } from "vitest";
import { ago, humanize, parse, parseRFC3339Nano } from "./dateUtils";
import moment from "moment-jalaali";

test("humanize", () => {
    expect(humanize(1000, "second", "fa")).toBe("16 دقیقه و 40 ثانیه");
});

test("parse", () => {
    expect(parse("2020-01-02").format("")).toBe("2020-01-02T00:00:00+03:30");
});

test("parseRFC3339Nano", () => {
    expect(
        parseRFC3339Nano("2020-01-02T00:00:00.123000000+03:30").format(
            "YYYY-MM-DDTHH:mm:ss.SSSSSSSSSZ"
        )
    ).toBe("2020-01-02T00:00:00.123000000+03:30");
});

test("ago", () => {
    let d = moment();
    d = d.add(-10, "minutes");
    expect(ago(d, "en")).toBe("10 minutes ago");
});

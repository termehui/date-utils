import { test, expect } from "vitest";
import { humanize } from "./dateUtils";

test("humanize", () => {
    expect(humanize(1000, "second", "fa")).toBe("16 دقیقه و 40 ثانیه");
});

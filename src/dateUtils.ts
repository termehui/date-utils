import moment from "moment-jalaali";
moment.loadPersian({ dialect: "persian-modern" });
moment.locale("en");

/**
 * parse standard unformatted gregorian date string
 *
 * @param date standard gregorian date string
 * @returns Moment object
 */
export function parse(date: string): moment.Moment {
    return moment(date);
}

/**
 * parse formatted date from string
 * for parse jalali date use format params with [j] prefix
 *
 * @param date date string
 * @param format date format
 * @returns Moment object
 */
export function parseFrom(date: string, format: string): moment.Moment {
    return moment(date, format);
}

/**
 * get ago string for date
 *
 * @param date date object
 * @param locale locale
 * @returns empty string if invalid or stringify ago
 */
export function ago(date: moment.Moment, locale: "fa" | "en"): string {
    if (date.isValid()) {
        return date.locale(locale).fromNow();
    }
    return "";
}

/**
 *
 * @private
 * @param param parameter
 * @param parts part name
 * @param locale locale
 * @returns translated prefixed param or param
 */
function _trans(param: any, parts: string, locale: string) {
    const langs: any = {
        years: { en: "years", fa: "سال" },
        months: { en: "months", fa: "ماه" },
        days: { en: "days", fa: "روز" },
        hours: { en: "hours", fa: "ساعت" },
        minutes: { en: "minutes", fa: "دقیقه" },
        seconds: { en: "seconds", fa: "ثانیه" },
    };
    if (langs[parts] && langs[parts][locale]) {
        return `${param} ` + langs[parts][locale];
    }
    return `${param}`;
}

/**
 * get humanized duration string
 *
 * @param d duration
 * @param unit duration unit (default ms)
 * @param locale locale
 * @returns humanized duration
 */
export function humanize(
    d: number,
    unit: moment.DurationInputArg2 = "ms",
    locale: "fa" | "en" = "fa"
): string {
    const dur = moment.duration(d, unit);
    const years = dur.years();
    const months = dur.months();
    const days = dur.days();
    const hours = dur.hours();
    const minutes = dur.minutes();
    const seconds = dur.seconds();
    let humanized: string[] = [];

    if (years != 0) {
        humanized.push(_trans(years, "years", locale));
    }
    if (months != 0) {
        humanized.push(_trans(months, "months", locale));
    }
    if (days != 0) {
        humanized.push(_trans(days, "days", locale));
    }
    if (hours != 0) {
        humanized.push(_trans(hours, "hours", locale));
    }
    if (minutes != 0) {
        humanized.push(_trans(minutes, "minutes", locale));
    }
    if (seconds != 0) {
        humanized.push(_trans(seconds, "seconds", locale));
    }
    return humanized.filter(Boolean).join(locale == "en" ? ", " : " و ");
}

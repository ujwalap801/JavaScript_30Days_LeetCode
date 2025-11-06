function JSONStringify(value) {
    // Your implementation
    const seen = new Set();

    function stringify(val)
    {
        if (val === null) return "null";
        const type = typeof val;

        if (type === "string") return `"${val}"`;
        if (type === "number" || type === "boolean") return String(val);
            if (type === "function" || type === "undefined") return undefined;

            if(Array.isArray(val))
            {
                const res = val.map(item =>
                {
                    const str = stringify(item);
                    return str === undefined ? "null" : str;
                })
                return `[${res.join(",")}]`;
            }

        if (type === "object") {
            if (seen.has(val)) throw new TypeError("Converting circular structure to JSON");
            seen.add(val);
            const props = Object.entries(val).map(([key, val]) => {
                const strVal = stringify(val);
                if (strVal === undefined) return undefined;
                return `"${key}":${strVal}`
            }).filter(Boolean);

            seen.delete(val);
            return `{${props.join(",")}}`;
        }

        return undefined;

    }
    return stringify(value);
}

//For the purpose of user debugging.
JSONStringify("hello");

module.exports = JSONStringify
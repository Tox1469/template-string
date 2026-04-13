/**
 * template-string
 * Safe interpolation: {path.to.key}, escape with \{ and \}.
 */

function getPath(obj: unknown, path: string): unknown {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return undefined;
    }
  }
  return cur;
}

export function format(
  template: string,
  data: Record<string, unknown> = {}
): string {
  let out = "";
  let i = 0;
  while (i < template.length) {
    const ch = template[i];
    if (ch === "\\" && (template[i + 1] === "{" || template[i + 1] === "}")) {
      out += template[i + 1];
      i += 2;
      continue;
    }
    if (ch === "{") {
      const end = template.indexOf("}", i);
      if (end < 0) {
        out += template.slice(i);
        break;
      }
      const key = template.slice(i + 1, end).trim();
      const v = getPath(data, key);
      out += v === undefined || v === null ? "" : String(v);
      i = end + 1;
      continue;
    }
    out += ch;
    i++;
  }
  return out;
}

export function escape(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/\{/g, "\\{").replace(/\}/g, "\\}");
}

export default format;

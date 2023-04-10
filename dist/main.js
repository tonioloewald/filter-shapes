var $8zHUo$typebyexample = require("type-by-example");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "matchType", () => $882b6d93070905b3$re_export$matchType);
var $f923533b9081417f$exports = {};

$parcel$export($f923533b9081417f$exports, "filterArray", () => $f923533b9081417f$export$8f2c8e61d147b502);
$parcel$export($f923533b9081417f$exports, "filter", () => $f923533b9081417f$export$3dea766d36a8935f);
$parcel$export($f923533b9081417f$exports, "filterObject", () => $f923533b9081417f$export$1039dc7987464938);

const $f923533b9081417f$export$8f2c8e61d147b502 = (template, obj)=>{
    if (!Array.isArray(obj)) return undefined;
    if (template.length === 0) return [
        ...obj
    ];
    const output = [];
    for (const item of obj){
        const itemTemplate = template.find((possible)=>(0, $8zHUo$typebyexample.matchType)(possible, item).length === 0);
        if (itemTemplate !== undefined) output.push($f923533b9081417f$export$3dea766d36a8935f(itemTemplate, item));
    }
    return output;
};
const $f923533b9081417f$export$1039dc7987464938 = (template, obj)=>{
    if ((0, $8zHUo$typebyexample.matchType)(template, obj).length > 0) return undefined;
    const output = {};
    for (const key of Object.keys(template)){
        const value = $f923533b9081417f$export$3dea766d36a8935f(template[key], obj[key]);
        if (value !== undefined) output[key] = value;
    }
    return output;
};
const $f923533b9081417f$export$3dea766d36a8935f = (template, obj)=>{
    if (obj === undefined || obj === null) return undefined;
    else if (typeof obj !== "object" && (0, $8zHUo$typebyexample.matchType)(template, obj).length > 0) return undefined;
    else if (Array.isArray(template)) return $f923533b9081417f$export$8f2c8e61d147b502(template, obj);
    else if (typeof obj === "object") return $f923533b9081417f$export$1039dc7987464938(template, obj);
    else return (0, $8zHUo$typebyexample.matchType)(template, obj).length > 0 ? undefined : obj;
};



$parcel$exportWildcard(module.exports, $f923533b9081417f$exports);


//# sourceMappingURL=main.js.map

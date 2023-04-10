import {matchType as $149c1bd638913645$re_export$matchType} from "type-by-example";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $a241a7448ddcea82$exports = {};

$parcel$export($a241a7448ddcea82$exports, "filterArray", () => $a241a7448ddcea82$export$8f2c8e61d147b502);
$parcel$export($a241a7448ddcea82$exports, "filter", () => $a241a7448ddcea82$export$3dea766d36a8935f);
$parcel$export($a241a7448ddcea82$exports, "filterObject", () => $a241a7448ddcea82$export$1039dc7987464938);

const $a241a7448ddcea82$export$8f2c8e61d147b502 = (template, obj)=>{
    if (!Array.isArray(obj)) return undefined;
    if (template.length === 0) return [
        ...obj
    ];
    const output = [];
    for (const item of obj){
        const itemTemplate = template.find((possible)=>(0, $149c1bd638913645$re_export$matchType)(possible, item).length === 0);
        if (itemTemplate !== undefined) output.push($a241a7448ddcea82$export$3dea766d36a8935f(itemTemplate, item));
    }
    return output;
};
const $a241a7448ddcea82$export$1039dc7987464938 = (template, obj)=>{
    if ((0, $149c1bd638913645$re_export$matchType)(template, obj).length > 0) return undefined;
    const output = {};
    for (const key of Object.keys(template)){
        const value = $a241a7448ddcea82$export$3dea766d36a8935f(template[key], obj[key]);
        if (value !== undefined) output[key] = value;
    }
    return output;
};
const $a241a7448ddcea82$export$3dea766d36a8935f = (template, obj)=>{
    if (obj === undefined || obj === null) return undefined;
    else if (typeof obj !== "object" && (0, $149c1bd638913645$re_export$matchType)(template, obj).length > 0) return undefined;
    else if (Array.isArray(template)) return $a241a7448ddcea82$export$8f2c8e61d147b502(template, obj);
    else if (typeof obj === "object") return $a241a7448ddcea82$export$1039dc7987464938(template, obj);
    else return (0, $149c1bd638913645$re_export$matchType)(template, obj).length > 0 ? undefined : obj;
};





export {$149c1bd638913645$re_export$matchType as matchType, $a241a7448ddcea82$export$8f2c8e61d147b502 as filterArray, $a241a7448ddcea82$export$3dea766d36a8935f as filter, $a241a7448ddcea82$export$1039dc7987464938 as filterObject};
//# sourceMappingURL=module.js.map

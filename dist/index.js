import {matchType as $868a1f8af08299ab$re_export$matchType} from "type-by-example";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $4e78e060b9f0b6e2$exports = {};

$parcel$export($4e78e060b9f0b6e2$exports, "filterArray", () => $4e78e060b9f0b6e2$export$8f2c8e61d147b502);
$parcel$export($4e78e060b9f0b6e2$exports, "filter", () => $4e78e060b9f0b6e2$export$3dea766d36a8935f);
$parcel$export($4e78e060b9f0b6e2$exports, "filterObject", () => $4e78e060b9f0b6e2$export$1039dc7987464938);

const $4e78e060b9f0b6e2$export$8f2c8e61d147b502 = (template, obj)=>{
    if (!Array.isArray(obj)) return undefined;
    if (template.length === 0) return [
        ...obj
    ];
    const output = [];
    for (const item of obj){
        const itemTemplate = template.find((possible)=>(0, $868a1f8af08299ab$re_export$matchType)(possible, item).length === 0);
        if (itemTemplate !== undefined) output.push($4e78e060b9f0b6e2$export$3dea766d36a8935f(itemTemplate, item));
    }
    return output;
};
const $4e78e060b9f0b6e2$export$1039dc7987464938 = (template, obj)=>{
    if ((0, $868a1f8af08299ab$re_export$matchType)(template, obj).length > 0) return undefined;
    const output = {};
    for (const key of Object.keys(template)){
        const value = $4e78e060b9f0b6e2$export$3dea766d36a8935f(template[key], obj[key]);
        if (value !== undefined) output[key] = value;
    }
    return output;
};
const $4e78e060b9f0b6e2$export$3dea766d36a8935f = (template, obj)=>{
    if (obj === undefined || obj === null) return undefined;
    else if (typeof obj !== "object" && (0, $868a1f8af08299ab$re_export$matchType)(template, obj).length > 0) return undefined;
    else if (Array.isArray(template)) return $4e78e060b9f0b6e2$export$8f2c8e61d147b502(template, obj);
    else if (typeof obj === "object") return $4e78e060b9f0b6e2$export$1039dc7987464938(template, obj);
    else return (0, $868a1f8af08299ab$re_export$matchType)(template, obj).length > 0 ? undefined : obj;
};





export {$868a1f8af08299ab$re_export$matchType as matchType, $4e78e060b9f0b6e2$export$8f2c8e61d147b502 as filterArray, $4e78e060b9f0b6e2$export$3dea766d36a8935f as filter, $4e78e060b9f0b6e2$export$1039dc7987464938 as filterObject};
//# sourceMappingURL=index.js.map

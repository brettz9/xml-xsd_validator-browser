import { baseUri, XmlDocumentParseOption, XmlEntityNotationOption } from "../validate.js";
import { validateEntityNotation } from "../validateDtd.js";
import { validateWellForm } from "../validateFormWell.js";
import { validateXmlTowardXsd } from "../validateTowardXsd.js";
async function validating(xmlText, mainSchemaUrl = null, stopOnFailure = true) {
    return Promise.all([
        validateWellForm(xmlText),
        validateEntityNotation(xmlText, stopOnFailure),
        validateXmlTowardXsd(xmlText, mainSchemaUrl, stopOnFailure)
    ])
        .then(() => Promise.resolve([]))
        .catch((bags) => Promise.reject(bags));
}
async function run(xmlText, mainSchemaUrl = null, stopOnFailure = true, duration = 3000) {
    const timer = setTimeout(() => {
        Promise.reject([
            {
                name: "ParseTimeout",
                type: "form",
                details: {
                    message: "Parsing timeout or worker unresponsive",
                    file: "",
                    line: 1,
                    col: 1,
                },
            },
        ]);
    }, duration);
    return validating(xmlText, mainSchemaUrl, stopOnFailure)
        .then((data) => {
        clearTimeout(timer);
        return Promise.resolve(data);
    })
        .catch(bags => {
        clearTimeout(timer);
        return Promise.reject(bags);
    });
}
// console.log('[worker] globalThis on message ready');
globalThis.postMessage({
    ready: true
});
globalThis.onmessage = (e) => {
    const { id, payload } = e.data;
    // console.log('aaa fufuafa', payload.onBefore);
    if (payload.onBefore) {
        if (payload.onBefore.set_xml_docoument_parse_option) {
            XmlDocumentParseOption(payload.onBefore.set_xml_docoument_parse_option);
        }
        if (payload.onBefore.set_xml_entity_notation_option) {
            XmlEntityNotationOption(payload.onBefore.set_xml_entity_notation_option);
            // console.log('bbb', globalThis.Option_XmlEntityNotation.notations?.allowedNotation)
        }
        if (payload.onBefore.base) {
            baseUri(payload.onBefore.base);
        }
    }
    const { xmlText, mainSchemaUrl, stopOnFailure, duration } = payload;
    const errorBags = [];
    run(xmlText, mainSchemaUrl, stopOnFailure, duration)
        .then((i) => {
        errorBags.push(...i);
        const response = {
            id,
            status: true,
            bags: errorBags,
        };
        globalThis.postMessage(response);
    })
        .catch(e => {
        errorBags.push(...e);
        const response = {
            id,
            status: false,
            bags: errorBags,
        };
        globalThis.postMessage(response);
    });
};

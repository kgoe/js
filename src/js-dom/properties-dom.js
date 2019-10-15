var properties_dom_dom = (function thisModule() {

; doc = {};


doc.template =
[
  `
`
];
doc.jsdom_window_properties =
[
`
HTMLElement|function
HTMLAnchorElement|function
HTMLAreaElement|function
HTMLAudioElement|function
HTMLBaseElement|function
HTMLBodyElement|function
HTMLBRElement|function
HTMLButtonElement|function
HTMLCanvasElement|function
HTMLDataElement|function
HTMLDataListElement|function
HTMLDetailsElement|function
HTMLDialogElement|function
HTMLDirectoryElement|function
HTMLDivElement|function
HTMLDListElement|function
HTMLEmbedElement|function
HTMLFieldSetElement|function
HTMLFontElement|function
HTMLFormElement|function
HTMLFrameElement|function
HTMLFrameSetElement|function
HTMLHeadingElement|function
HTMLHeadElement|function
HTMLHRElement|function
HTMLHtmlElement|function
HTMLIFrameElement|function
HTMLImageElement|function
HTMLInputElement|function
HTMLLabelElement|function
HTMLLegendElement|function
HTMLLIElement|function
HTMLLinkElement|function
HTMLMapElement|function
HTMLMarqueeElement|function
HTMLMediaElement|function
HTMLMenuElement|function
HTMLMetaElement|function
HTMLMeterElement|function
HTMLModElement|function
HTMLObjectElement|function
HTMLOListElement|function
HTMLOptGroupElement|function
HTMLOptionElement|function
HTMLOutputElement|function
HTMLParagraphElement|function
HTMLParamElement|function
HTMLPictureElement|function
HTMLPreElement|function
HTMLProgressElement|function
HTMLQuoteElement|function
HTMLScriptElement|function
HTMLSelectElement|function
HTMLSlotElement|function
HTMLSourceElement|function
HTMLSpanElement|function
HTMLStyleElement|function
HTMLTableCaptionElement|function
HTMLTableCellElement|function
HTMLTableColElement|function
HTMLTableElement|function
HTMLTimeElement|function
HTMLTitleElement|function
HTMLTableRowElement|function
HTMLTableSectionElement|function
HTMLTemplateElement|function
HTMLTextAreaElement|function
HTMLTrackElement|function
HTMLUListElement|function
HTMLUnknownElement|function
HTMLVideoElement|function
`
];


return doc;

})();

var output = properties_dom_dom;
function main() {
  console.log('main')
}

// End
if (typeof global !== 'undefined') {
  if (typeof module !== 'undefined'
    && typeof require !== 'undefined'
    && typeof require.main !== 'undefined'
    && typeof module.exports !== 'undefined'
    && require.main === module
  ) {
    console.log('LOADED : node', __filename);
    console.log('script running itself');
    if (typeof main == 'function') {
      main();
    }
  } else {
    console.log('LOADED : node-module', __filename);
    module.exports = output;
  }
};

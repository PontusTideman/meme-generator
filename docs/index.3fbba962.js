function t(t,e,o,n){Object.defineProperty(t,e,{get:o,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=o.parcelRequire5078;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){a[t]=e},o.parcelRequire5078=i),i.register("kyEFX",(function(e,o){var n,a;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return a}),(function(t){return a=t}));var i={};n=function(t){for(var e=Object.keys(t),o=0;o<e.length;o++)i[e[o]]=t[e[o]]},a=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i("kyEFX").register(JSON.parse('{"5ZWMA":"index.3fbba962.js","9jzSS":"Anton-Regular.e58ab3fe.ttf","hr5Pp":"Oswald-Regular.89ec7d89.ttf","5TebC":"Oswald-Bold.0f6a7ca6.ttf","3ENF9":"Roboto-Regular.ca197847.ttf","5yAXK":"Roboto-Bold.fdb9b54a.ttf","k2KZ9":"RobotoCondensed-Regular.d585f5c7.ttf","4h4UX":"RobotoCondensed-Bold.e1f96d4b.ttf","8pomG":"CourierPrime-Regular.3a25a501.ttf","l2v76":"CourierPrime-Bold.3d6bf689.ttf","eKMWr":"OpenSans-Regular.edf9e01b.ttf","dXO1Z":"OpenSans-Bold.8fceb72b.ttf","9FH7D":"index.51b5f7a7.css"}'));var s;s=new URL(i("kyEFX").resolve("9jzSS"),import.meta.url).toString();var r;r=new URL(i("kyEFX").resolve("hr5Pp"),import.meta.url).toString();var l;l=new URL(i("kyEFX").resolve("5TebC"),import.meta.url).toString();var d;d=new URL(i("kyEFX").resolve("3ENF9"),import.meta.url).toString();var u;u=new URL(i("kyEFX").resolve("5yAXK"),import.meta.url).toString();var c;c=new URL(i("kyEFX").resolve("k2KZ9"),import.meta.url).toString();var h;h=new URL(i("kyEFX").resolve("4h4UX"),import.meta.url).toString();var p;p=new URL(i("kyEFX").resolve("8pomG"),import.meta.url).toString();var m;m=new URL(i("kyEFX").resolve("l2v76"),import.meta.url).toString();var g;g=new URL(i("kyEFX").resolve("eKMWr"),import.meta.url).toString();var b;function f(t={}){return t={files:null,...t},Array.isArray(t.files)?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t.files):"share"in navigator
/*!
 * @georapbox/web-share-element
 * A custom element that implements the Web Share API to share user-defined data.
 *
 * @version v2.1.4
 * @author George Raptis <georapbox@gmail.com>
 * @homepage https://github.com/georapbox/web-share-element#readme
 * @repository git+https://github.com/georapbox/web-share-element.git
 * @license MIT
 */}b=new URL(i("kyEFX").resolve("dXO1Z"),import.meta.url).toString();const v=document.createElement("template"),y=String.raw;v.innerHTML=y`
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;class E extends HTMLElement{static get observedAttributes(){return["disabled"]}connectedCallback(){this._buttonSlot&&this._buttonSlot.addEventListener("slotchange",this._onSlotChange),this.$button&&this.$button.addEventListener("click",this._onClick),this._upgradeProperty("shareUrl"),this._upgradeProperty("shareTitle"),this._upgradeProperty("shareText"),this._upgradeProperty("shareFiles"),this._upgradeProperty("disabled")}disconnectedCallback(){this._buttonSlot&&this._buttonSlot.removeEventListener("slotchange",this._onSlotChange),this.$button&&this.$button.removeEventListener("click",this._onClick)}attributeChangedCallback(t){"disabled"===t&&this.$button&&(this.$button.disabled=this.disabled,this.$button.setAttribute("aria-disabled",this.disabled),this.$button.part&&this.$button.part.contains("button")&&this.$button.part.toggle("button--disabled",this.disabled))}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get shareUrl(){return this.getAttribute("share-url")}set shareUrl(t){this.setAttribute("share-url",t)}get shareTitle(){return this.getAttribute("share-title")}set shareTitle(t){this.setAttribute("share-title",t)}get shareText(){return this.getAttribute("share-text")}set shareText(t){this.setAttribute("share-text",t)}get shareFiles(){return this._files||null}set shareFiles(t){this._files=t}async share(){if(!this.disabled)try{const t={};this.shareUrl&&(t.url=this.shareUrl),this.shareTitle&&(t.title=this.shareTitle),this.shareText&&(t.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(t.files=this.shareFiles),await navigator.share(t),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:t}}))}catch(t){if("AbortError"===t.name)return this.dispatchEvent(new Event("web-share:abort",{bubbles:!0,composed:!0}));this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}_onClick(t){t.preventDefault(),this.disabled||(this.dispatchEvent(new Event("web-share:click",{bubbles:!0,composed:!0})),this.share())}_onSlotChange(t){t.target&&"button"===t.target.name&&(this.$button&&this.$button.removeEventListener("click",this._onClick),this.$button=this._getButton(),this.$button&&(this.$button.addEventListener("click",this._onClick),"BUTTON"===this.$button.nodeName||this.$button.hasAttribute("role")||this.$button.setAttribute("role","button")))}_getButton(){return this._buttonSlot?this._buttonSlot.assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))):null}_upgradeProperty(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="web-share"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,E)}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(v.content.cloneNode(!0))),this._buttonSlot=this.shadowRoot.querySelector('slot[name="button"]'),this.$button=this._getButton(),this._onClick=this._onClick.bind(this),this._onSlotChange=this._onSlotChange.bind(this)}}
/*!
 * @georapbox/capture-photo-element
 * A custom element that implements the MediaDevices.getUserMedia() method of the MediaDevices interface to capture a photo in the browser.
 *
 * @version v1.2.4
 * @author George Raptis <georapbox@gmail.com>
 * @homepage https://github.com/georapbox/capture-photo-element#readme
 * @repository git+https://github.com/georapbox/capture-photo-element.git
 * @license MIT
 */const w=document.createElement("template"),C=String.raw;w.innerHTML=C`
  <style>
    :host {
      all: initial;
      display: block;
      box-sizing: border-box;
    }
    :host *,
    :host *::before,
    :host *::after {
      box-sizing: inherit;
    }
    :host video {
      display: block;
    }
    :host #output:empty {
      display: none;
    }
    [hidden] {
      display: none !important;
    }
  </style>
  <video part="video" playsinline></video>
  <canvas hidden></canvas>
  <div part="actions-container">
    <slot name="capture-button">
      <button part="capture-button" type="button"><slot name="capture-button-content">Capture photo</slot></button>
    </slot>
    <slot name="facing-mode-button"><button part="facing-mode-button" type="button"><slot name="facing-mode-button-content">Toggle facing mode</slot></button></slot>
  </div>
  <div part="output-container" id="output"></div>
`;class _ extends HTMLElement{connectedCallback(){if(this.$canvasElement=this.shadowRoot.querySelector("canvas"),this.$outputElement=this.shadowRoot.getElementById("output"),this.$videoElement=this.shadowRoot.querySelector("video"),this.$videoElement&&this.$videoElement.addEventListener("canplay",this._onVideoCanPlay),this._captureButtonSlot=this.shadowRoot.querySelector('slot[name="capture-button"]'),this._captureButtonSlot&&this._captureButtonSlot.addEventListener("slotchange",this._onCaptureButtonSlotChange),this.$captureButton=this._getCaptureButton(),this.$captureButton&&this.$captureButton.addEventListener("click",this._onCapturePhotoButtonClick),this._facingModeButtonSlot=this.shadowRoot.querySelector('slot[name="facing-mode-button"]'),this._facingModeButtonSlot&&this._facingModeButtonSlot.addEventListener("slotchange",this._onFacingModeButtonSlotChange),this.$facingModeButton=this._getFacingModeButton(),this.$facingModeButton&&(this._supportedConstraints.facingMode?this.$facingModeButton.addEventListener("click",this._onFacingModeButtonClick):this.$facingModeButton.hidden=!0),this._upgradeProperty("outputDisabled"),this._upgradeProperty("facingMode"),this._upgradeProperty("cameraResolution"),this._upgradeProperty("zoom"),!_.isSupported())return this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this._requestGetUserMedia()}disconnectedCallback(){this._stopVideoStreaming(),this.$facingModeButton&&this.$facingModeButton.removeEventListener("click",this._onFacingModeButtonClick),this.$captureButton&&this.$captureButton.removeEventListener("click",this._onCapturePhotoButtonClick),this.$videoElement&&this.$videoElement.removeEventListener("canplay",this._onVideoCanPlay),this._captureButtonSlot&&this._captureButtonSlot.removeEventListener("slotchange",this._onCaptureButtonSlotChange),this._facingModeButtonSlot&&this._facingModeButtonSlot.removeEventListener("slotchange",this._onFacingModeButtonSlotChange)}attributeChangedCallback(t,e,o){"output-disabled"===t&&this._emptyOutputElement(),"facing-mode"===t&&this._supportedConstraints.facingMode&&(this._stopVideoStreaming(),this._requestGetUserMedia(),this.dispatchEvent(new CustomEvent("capture-photo:facing-mode-change",{bubbles:!0,composed:!0,detail:{facingMode:o}}))),"camera-resolution"===t&&(this._stopVideoStreaming(),this._requestGetUserMedia(),this.dispatchEvent(new CustomEvent("capture-photo:camera-resolution-change",{bubbles:!0,composed:!0,detail:{cameraResolution:o}}))),"zoom"===t&&(this._applyZoom(this.zoom),this.dispatchEvent(new CustomEvent("capture-photo:zoom-change",{bubbles:!0,composed:!0,detail:{zoom:this.zoom}})))}static get observedAttributes(){return["output-disabled","facing-mode","camera-resolution","zoom"]}get outputDisabled(){return this.hasAttribute("output-disabled")}set outputDisabled(t){t?this.setAttribute("output-disabled",""):this.removeAttribute("output-disabled")}get facingMode(){return this.getAttribute("facing-mode")}set facingMode(t){this.setAttribute("facing-mode",t)}get cameraResolution(){return this.getAttribute("camera-resolution")}set cameraResolution(t){this.setAttribute("camera-resolution",t)}get zoom(){return Number(this.getAttribute("zoom"))||null}set zoom(t){const e=Number(t)||0;this.setAttribute("zoom",e>0?Math.floor(e):0)}get loading(){return this.hasAttribute("loading")}_stopVideoStreaming(){if(!this.$videoElement||!this._stream)return;const[t]=this._stream.getVideoTracks();t&&t.stop(),this.$videoElement.srcObject=null,this._stream=null}_requestGetUserMedia(){if(!_.isSupported())return;this.setAttribute("loading","");const t={video:{facingMode:{ideal:this.facingMode||"user"}},audio:!1};if("string"==typeof this.cameraResolution){const[e,o]=this.cameraResolution.split("x");t.video.width=e,t.video.height=o}navigator.mediaDevices.getUserMedia(t).then((t=>{this.$videoElement.srcObject=t,this._stream=t,this._applyZoom(this.zoom)})).catch((t=>{this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))}))}capture(){if(!this.hasAttribute("loading"))try{const t=this.$canvasElement.getContext("2d"),e=this.$videoElement.videoWidth,o=this.$videoElement.videoHeight;this.$canvasElement.width=e,this.$canvasElement.height=o,t.drawImage(this.$videoElement,0,0,e,o);const n=this.$canvasElement.toDataURL("image/png");if("string"==typeof n&&n.includes("data:image")){if(!this.outputDisabled){const t=new Image;t.src=n,t.width=e,t.height=o,t.part="output-image",this._emptyOutputElement(),this.$outputElement&&this.$outputElement.appendChild(t)}this.dispatchEvent(new CustomEvent("capture-photo:success",{bubbles:!0,composed:!0,detail:{dataURI:n,width:e,height:o}}))}}catch(t){this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}_onFacingModeButtonClick(t){t.preventDefault(),this.hasAttribute("loading")||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")}_onCapturePhotoButtonClick(t){t.preventDefault(),this.capture()}_onVideoCanPlay(t){this.removeAttribute("loading"),t.target.play().catch((t=>{this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:t}}))}))}_emptyOutputElement(){this.$outputElement&&Array.from(this.$outputElement.childNodes).forEach((t=>t.remove()))}_applyZoom(t){if(!this._stream||!t)return;const[e]=this._stream.getVideoTracks();if("function"!=typeof e.getCapabilities||"function"!=typeof e.getSettings)return;const o=e.getCapabilities();var n,a,i;"zoom"in e.getSettings()&&e.applyConstraints({advanced:[{zoom:(n=Number(t),a=o.zoom.min,i=o.zoom.max,Number.isNaN(a)&&(a=0),Number.isNaN(i)&&(i=0),Math.min(Math.max(n,Math.min(a,i)),Math.max(a,i)))}]})}_onCaptureButtonSlotChange(t){t.target&&"capture-button"===t.target.name&&(this.$captureButton&&this.$captureButton.removeEventListener("click",this._onCapturePhotoButtonClick),this.$captureButton=this._getCaptureButton(),this.$captureButton&&(this.$captureButton.addEventListener("click",this._onCapturePhotoButtonClick),"BUTTON"===this.$captureButton.nodeName||this.$captureButton.hasAttribute("role")||this.$captureButton.setAttribute("role","button")))}_onFacingModeButtonSlotChange(t){t.target&&"facing-mode-button"===t.target.name&&(this.$facingModeButton&&this.$facingModeButton.removeEventListener("click",this._onFacingModeButtonClick),this.$facingModeButton=this._getFacingModeButton(),this.$facingModeButton&&(this.$facingModeButton.addEventListener("click",this._onFacingModeButtonClick),"BUTTON"===this.$facingModeButton.nodeName||this.$facingModeButton.hasAttribute("role")||this.$facingModeButton.setAttribute("role","button")))}_getFacingModeButton(){return this._facingModeButtonSlot?this._facingModeButtonSlot.assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"facing-mode-button"===t.getAttribute("slot"))):null}_getCaptureButton(){return this._captureButtonSlot?this._captureButtonSlot.assignedElements({flatten:!0}).find((t=>"BUTTON"===t.nodeName||"capture-button"===t.getAttribute("slot"))):null}_upgradeProperty(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}static isSupported(){return Boolean(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}static defineCustomElement(t="capture-photo"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,_)}constructor(){super(),this._supportedConstraints=_.isSupported()?navigator.mediaDevices.getSupportedConstraints():{},this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(w.content.cloneNode(!0))),this._onFacingModeButtonClick=this._onFacingModeButtonClick.bind(this),this._onCapturePhotoButtonClick=this._onCapturePhotoButtonClick.bind(this),this._onVideoCanPlay=this._onVideoCanPlay.bind(this),this._onCaptureButtonSlotChange=this._onCaptureButtonSlotChange.bind(this),this._onFacingModeButtonSlotChange=this._onFacingModeButtonSlotChange.bind(this)}}E.defineCustomElement(),_.defineCustomElement();const B=document.getElementById("errorsContainer"),S=document.getElementById("videoModal"),A=document.getElementById("downloadModal"),$=document.getElementById("closeVideoModalBtn"),x=document.getElementById("canvas"),k=document.getElementById("canvasPlaceholder"),R=document.getElementById("instructions"),M=x.getContext("2d"),L=document.getElementById("imageUploadMethodSelect"),F=document.getElementById("file"),T=document.getElementById("imageUrlForm"),U=document.getElementById("addTextboxBtn"),I=document.getElementById("inputsContainer"),O=document.getElementById("generateMemeBtn"),N=document.getElementById("openVideoModalBtn"),P=document.getElementById("downloadMemeBtn"),X=document.getElementById("downloadMemePreview"),H=document.getElementById("downloadMemeModalCloseBtn"),q=document.querySelector("web-share");let z=null,D="meme.png",Y=null;const V=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"];F.accept=V.join(",");const j={text:"",fillColor:"#ffffff",shadowColor:"#000000",font:"Anton",fontSize:40,fontWeight:"normal",textAlign:"center",shadowBlur:3,offsetY:0,offsetX:0,allCaps:!0},W=[Object.assign({},j),Object.assign({},j)],G=async(t,e,o={})=>{try{const n=new FontFace(t,`url(${e})`,{...o});await n.load(),document.fonts.add(n)}catch(t){console.error(t)}},Z=(t,e)=>{e?(t.style.display="block",t.setAttribute("data-open",""),document.body.classList.add("modal-open"),t.dispatchEvent(new CustomEvent("modal-open",{bubbles:!0,detail:{modalId:t.id}}))):(t.style.display="none",t.removeAttribute("data-open"),document.body.classList.remove("modal-open"),t.dispatchEvent(new CustomEvent("modal-close",{bubbles:!0,detail:{modalId:t.id}})))},K=t=>{const e=t.currentTarget;e.removeEventListener("click",K),B.removeChild(e.parentNode)},J=(t="")=>{const e=`\n    ${t}\n    <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n      <span aria-hidden="true">&times;</span>\n    </button>\n  `,o=document.createElement("div");o.className="alert alert-danger alert-dismissible text-break mb-2 fade",o.innerHTML=e,o.querySelector("button").addEventListener("click",K),B.appendChild(o),setTimeout((()=>o.classList.add("show")),100)},Q=t=>{null!=t&&(M.clearRect(0,0,x.width,x.height),M.drawImage(t,0,0,x.width,x.height),W.forEach((function(t,e){M.font=`${t.fontWeight} ${t.fontSize}px ${t.font}`;const o=e+1,n=M.measureText("M").width+20,a="center"!==t.textAlign&&t.textAlign?"left"===t.textAlign?0:x.width:x.width/2,i=t.shadowBlur,s=!0===t.allCaps?t.text.toUpperCase():t.text;M.fillStyle=t.fillColor,M.textAlign=t.textAlign,M.save(),0!==i&&(M.shadowOffsetX=0,M.shadowOffsetY=0,M.shadowBlur=i,M.shadowColor=t.shadowColor),M.fillText(s,a+t.offsetX,1===e?x.height-20+t.offsetY:n*(o-1||1)+t.offsetY),M.restore()})))},tt=t=>{let e=t.target.width,o=t.target.height;e>o?e>800&&(o*=800/e,e=800):o>600&&(e*=600/o,o=600),x.width=e,x.height=o,Q(t.target),z=t.target,O.disabled=!1,x.classList.remove("d-none"),R&&R.remove()},et=t=>{const e=new Image,o=new FileReader;D=`${t.name.replace(/\.[^.]+$/,"")}-meme.png`,o.addEventListener("load",(function(t){const o=t.target.result;e.addEventListener("load",tt),e.src=o})),o.readAsDataURL(t)},ot=(t,e,o)=>{"checkbox"===t.type?W[e][o]=t.checked:"number"===t.type?W[e][o]=Number(t.value):W[e][o]=t.value,Q(z)},nt=t=>{const e=`\n    <div class="d-flex">\n      <input class="form-control m-2" type="text" value="${W[t].text}" data-input="text" autocomplete="off" placeholder="${0===t?"Top Text":1===t?"Bottom Text":`Text #${t+1}`}" style="min-width: 0;">\n      <div class="d-flex align-items-center pr-2">\n        <input class="form-control" type="color" value="${W[t].fillColor}" data-input="fillColor" title="Fill color">\n        <input class="form-control" type="color" value="${W[t].shadowColor}" data-input="shadowColor" title="Outline color">\n        <button class="btn btn-secondary settings-button" data-button="settings"></button>\n      </div>\n    </div>\n    <div class="p-2 d-none" data-section="settings">\n      <div class="form-row">\n        <div class="col-4 mb-3">\n          <label for="fontInput_${t}" class="mb-1 d-block text-truncate">Font: </label>\n          <select class="custom-select" data-input="font" id="fontInput_${t}">\n            <optgroup label="Web fonts">\n              <option value="Impact">Impact</option>\n              <option value="Arial">Arial</option>\n              <option value="Arial Black">Arial Black</option>\n              <option value="Helvetica">Helvetica</option>\n              <option value="Comic Sans MS">Comic Sans MS</option>\n              <option value="Times">Times</option>\n              <option value="Times New Roman">Times New Roman</option>\n              <option value="Courier New">Courier New</option>\n              <option value="Verdana">Verdana</option>\n              <option value="Georgia">Georgia</option>\n              <option value="Palatino">Palatino</option>\n              <option value="Garamond">Garamond</option>\n              <option value="Bookman">Bookman</option>\n              <option value="Trebuchet MS">Trebuchet MS</option>\n            </optgroup>\n            <optgroup label="Google fonts">\n              <option value="Anton">Anton</option>\n              <option value="Oswald-Regular">Oswald Regular</option>\n              <option value="Oswald-Bold">Oswald Bold</option>\n              <option value="Roboto-Regular">Roboto Regular</option>\n              <option value="Roboto-Bold">Roboto Bold</option>\n              <option value="RobotoCondensed-Regular">Roboto Condensed Regular</option>\n              <option value="RobotoCondensed-Bold">Roboto Condensed Bold</option>\n              <option value="CourierPrime-Regular">Courier Prime Regular</option>\n              <option value="CourierPrime-Bold">Courier Prime Bold</option>\n              <option value="OpenSans-Regular">Open Sans Regular</option>\n              <option value="OpenSans-Bold">Open Sans Bold</option>\n            </optgroup>\n          </select>\n        </div>\n        <div class="col-4 mb-3">\n          <label for="fontSizeInput_${t}" class="mb-1 d-block text-truncate">Size:</label>\n          <input class="form-control" type="number" min="1" max="100" value="${W[t].fontSize}" data-input="fontSize" id="fontSizeInput_${t}">\n        </div>\n        <div class="col-4 mb-3">\n          <label for="fontWeightInput_${t}" class="mb-1 d-block text-truncate">Weight:</label>\n          <select class="custom-select" data-input="fontWeight" id="fontWeightInput_${t}">\n            <option value="normal" selected>Normal</option>\n            <option value="bold">Bold</option>\n          </select>\n        </div>\n      </div>\n      <div class="form-row">\n        <div class="col-6 mb-3">\n          <label for="shadowWidthInput_${t}" class="mb-1 d-block text-truncate">Shadow width:</label>\n          <input class="form-control" type="number" min="0" max="10" value="${W[t].shadowBlur}" data-input="shadowBlur" id="shadowWidthInput_${t}">\n        </div>\n        <div class="col-6 mb-3">\n          <label for="textAlignInput_${t}" class="mb-1 d-block text-truncate">Text align:</label>\n          <select class="custom-select" data-input="textAlign" id="textAlignInput_${t}">\n            <option value="left">Left</option>\n            <option value="center">Center</option>\n            <option value="right">Right</option>\n          </select>\n        </div>\n      </div>\n      <div class="form-row">\n        <div class="col-6 mb-3">\n          <label class="mb-1 d-block text-truncate" for="offsetYInput_${t}">Vertical offset:</label>\n          <input class="form-control" type="number" value="${W[t].offsetY}" data-input="offsetY" id="offsetYInput_${t}">\n        </div>\n        <div class="col-6 mb-3">\n          <label class="mb-1 d-block text-truncate" for="offsetXInput_${t}">Horizontal offset:</label>\n          <input class="form-control" type="number" value="${W[t].offsetX}" data-input="offsetX" id="offsetXInput_${t}">\n        </div>\n        <div class="col-12">\n          <div class="move-text-actions mb-3">\n            <button type="button" class="btn btn-secondary" data-move="offsetY" data-sign="-" aria-label="Up"></button>\n            <button type="button" class="btn btn-secondary" data-move="offsetX" data-sign="+" aria-label="Right"></button>\n            <button type="button" class="btn btn-secondary" data-move="offsetY" data-sign="+" aria-label="Down"></button>\n            <button type="button" class="btn btn-secondary" data-move="offsetX" data-sign="-" aria-label="Left"></button>\n          </div>\n        </div>\n      </div>\n      <div class="form-row">\n        <div class="col-lg-12">\n          <div class="custom-control custom-checkbox">\n            <input type="checkbox" class="custom-control-input" id="allCapsCheckbox_${t}" data-input="allCaps">\n            <label class="custom-control-label" for="allCapsCheckbox_${t}">ALL CAPS</label>\n          </div>\n        </div>\n      </div>\n    </div>\n  `,o=document.createDocumentFragment(),n=document.createElement("div");return n.className="bg-light border shadow-sm mb-3 rounded",n.setAttribute("data-section","textBox"),n.setAttribute("data-index",t),n.innerHTML=e,setTimeout((()=>z&&n.querySelector('[data-input="text"]').focus()),100),n.querySelector('[data-input="font"]').value=W[t].font,n.querySelector('[data-input="textAlign"]').value=W[t].textAlign,n.querySelector('[data-input="allCaps"]').checked=W[t].allCaps,o.appendChild(n)},at=(t,e,o)=>()=>{const n=document.querySelectorAll('[data-section="textBox"]')[o],a=n.querySelector('[data-input="offsetY"]'),i=n.querySelector('[data-input="offsetX"]');"offsetY"===t&&("-"===e&&(W[o].offsetY-=1),"+"===e&&(W[o].offsetY+=1),a.value=W[o].offsetY),"offsetX"===t&&("-"===e&&(W[o].offsetX-=1),"+"===e&&(W[o].offsetX+=1),i.value=W[o].offsetX),Q(z),Y=requestAnimationFrame(at(t,e,o))};F.addEventListener("change",(t=>{T.imageUrl.value="",et(t.target.files[0])})),N.addEventListener("click",(()=>{const t=document.createElement("capture-photo");t.outputDisabled=!0,S.querySelector(".modal-body").appendChild(t),Z(S,!0)})),$.addEventListener("click",(()=>Z(S,!1))),U.addEventListener("click",(()=>{const t=document.querySelectorAll('[data-input="text"]').length;W.push(Object.assign({},j)),I.appendChild(nt(t))})),O.addEventListener("click",(async()=>{const t=x.toDataURL("image/png"),e=t.replace("image/png","image/octet-stream");if(P.download=D,P.href=e,X.src=e,f())try{const e=await(async(t,e,o)=>{const n=await fetch(t),a=await n.arrayBuffer();return new File([a],e,{type:o})})(t,"meme.png","image/png");q.shareFiles=[e],q.shareUrl=window.location.href,q.shareTitle=document.title,q.classList.remove("d-none")}catch(t){console.error(t)}Z(A,!0)})),P.addEventListener("click",(()=>Z(A,!1))),H.addEventListener("click",(()=>Z(A,!1))),T.addEventListener("submit",(async t=>{t.preventDefault();const e=t.target,o=e.querySelector('button[type="submit"]'),n=e.imageUrl.value;if(n.trim()){o.disabled=!0,o.querySelector(".spinner").classList.remove("d-none"),o.querySelector(".label").classList.add("d-none");try{const t=await fetch(n),e=await t.blob(),a=e.type||"";if(!V.includes(a))return J(`This is not an accepted image format. Accepted MIME types are: ${V.join(", ")}`);const i=a.split("/")[1],s=new File([e],`${n}.${i}`,e);s&&et(s),F.value=F.defaultValue}catch(t){J(`Failed to load image from "${n}".`)}finally{o.disabled=!1,o.querySelector(".spinner").classList.add("d-none"),o.querySelector(".label").classList.remove("d-none")}}})),k.addEventListener("dragover",(t=>{t.stopPropagation(),t.preventDefault(),t.dataTransfer.dropEffect="copy"})),k.addEventListener("drop",(t=>{t.stopPropagation(),t.preventDefault();const e=t.dataTransfer.files,[o]=e;V.includes(o.type)&&(F.value=F.defaultValue,T.imageUrl.value="",et(o))})),I.appendChild(nt(0)),I.appendChild(nt(1)),I.addEventListener("input",(t=>{const e=t.target,o=Number(e.closest('[data-section="textBox"]').getAttribute("data-index"));let n;e.matches('[data-input="text"]')?n="text":e.matches('[data-input="fillColor"]')?n="fillColor":e.matches('[data-input="shadowColor"]')?n="shadowColor":e.matches('[data-input="font"]')?n="font":e.matches('[data-input="fontSize"]')?n="fontSize":e.matches('[data-input="fontWeight"]')?n="fontWeight":e.matches('[data-input="textAlign"]')?n="textAlign":e.matches('[data-input="shadowBlur"]')?n="shadowBlur":e.matches('[data-input="offsetY"]')?n="offsetY":e.matches('[data-input="offsetX"]')&&(n="offsetX"),n&&ot(e,o,n)})),I.addEventListener("change",(t=>{const e=t.target,o=Number(e.closest('[data-section="textBox"]').getAttribute("data-index"));let n;e.matches('[data-input="allCaps"]')&&(n="allCaps"),n&&ot(e,o,n)})),I.addEventListener("click",(t=>{const e=t.target;if(e.matches('[data-button="settings"]')){const t=e.closest('[data-section="textBox"]').getAttribute("data-index");document.querySelectorAll('[data-section="textBox"]').forEach((e=>{const o=e.querySelector('[data-section="settings"]');e.getAttribute("data-index")===t?o.classList.toggle("d-none"):o.classList.add("d-none")}))}})),I.addEventListener("pointerdown",(t=>{const e=t.target,o=Number(e.closest('[data-section="textBox"]').getAttribute("data-index")),n=e.matches('[data-move="offsetY"]'),a=e.matches('[data-move="offsetX"]');if(!n&&!a)return;const i=e.getAttribute("data-move"),s=e.getAttribute("data-sign");Y=requestAnimationFrame(at(i,s,o))})),I.addEventListener("pointerup",(t=>{const e=t.target,o=e.matches('[data-move="offsetY"]'),n=e.matches('[data-move="offsetX"]');(o||n)&&(cancelAnimationFrame(Y),Y=null)})),I.addEventListener("pointerout",(t=>{const e=t.target,o=e.matches('[data-move="offsetY"]'),n=e.matches('[data-move="offsetX"]');(o||n)&&Y&&(cancelAnimationFrame(Y),Y=null)})),L.addEventListener("change",(t=>{document.querySelectorAll(".upload-method").forEach((e=>{e.hidden=e.id!==t.target.value}))})),document.addEventListener("web-share:error",(()=>{J("There was an error while trying to share your meme.")})),document.addEventListener("capture-photo:error",(t=>{console.error(t.detail.error),J(t.detail.error.message)})),document.addEventListener("capture-photo:success",(t=>{Z(S,!1);const e=new Image;e.addEventListener("load",tt),e.src=t.detail.dataURI,F.value&&(F.value=F.defaultValue,T.imageUrl.value="",D="meme.png")})),document.addEventListener("modal-close",(t=>{if("videoModal"===t.detail.modalId){S.querySelector("capture-photo").remove()}})),document.addEventListener("keyup",(t=>{"Escape"===t.code&&(S.hasAttribute("data-open")&&Z(S,!1),A.hasAttribute("data-open")&&Z(A,!1))})),G("Anton",e(s),{style:"normal",weight:"400"}),G("Oswald-Regular",e(r),{style:"normal",weight:"400"}),G("Oswald-Bold",e(l),{style:"normal",weight:"700"}),G("Roboto-Regular",e(d),{style:"normal",weight:"400"}),G("Roboto-Bold",e(u),{style:"normal",weight:"700"}),G("RobotoCondensed-Regular",e(c),{style:"normal",weight:"400"}),G("RobotoCondensed-Bold",e(h),{style:"normal",weight:"700"}),G("CourierPrime-Regular",e(p),{style:"normal",weight:"400"}),G("CourierPrime-Bold",e(m),{style:"normal",weight:"700"}),G("OpenSans-Regular",e(g),{style:"normal",weight:"400"}),G("OpenSans-Bold",e(b),{style:"normal",weight:"400"});
//# sourceMappingURL=index.3fbba962.js.map

import { BrowserQRCodeReader } from "@zxing/library";

export default new BrowserQRCodeReader();

//  codeReader
//   .decodeOnceFromVideoDevice(undefined, "video")
//   .then(result => {
//     console.log("ok");
//     console.log(result);
//   })
//   .catch(err => console.error(err));

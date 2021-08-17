const gambar = document.querySelector(".container img");
const sInputSlider = document.querySelectorAll(".filter input");

const upload = document.querySelector(".editgambar input[name=upload]");

// console.log(upload.value);

for (let i = 0; i < sInputSlider.length; i++) {
  // console.log(sInputSlider[i]);
  sInputSlider[i].addEventListener("input", function () {
    // console.log(sInputSlider[i]);
    const px = "px";
    const sBlur = document.querySelector(".filter input[name=sBlur]");
    const sGrayScale = document.querySelector(".filter input[name=sGrayScale]");
    const sBrightness = document.querySelector(".filter input[name=sBrightness]");
    const sContrast = document.querySelector(".filter input[name=sContrast]");
    const sSaturate = document.querySelector(".filter input[name=sSaturate]");
    const sSepia = document.querySelector(".filter input[name=sSepia]");
    const sHueRotate = document.querySelector(".filter input[name=sHue-Rotate]");
    const sOpacity = document.querySelector(".filter input[name=sOpacity]");
    const sInvert = document.querySelector(".filter input[name=sInvert]");
    // const sDropShadow = document.querySelector(".filter input[name=sDropShadow]");

    let snBlur = sBlur.value;
    let snGrayScale = sGrayScale.value;
    let snBrightness = sBrightness.value;
    let snContrast = sContrast.value;
    let snSaturate = sSaturate.value;
    let snSepia = sSepia.value;
    let snHueRotate = sHueRotate.value;
    let snOpacity = sOpacity.value;
    let snInvert = sInvert.value;
    // let snDropShadow = sDropShadow.value;

    gambar.style.filter =
      "blur(" +
      snBlur +
      "px" +
      ") brightness(" +
      snBrightness +
      "%" +
      ") contrast(" +
      snContrast +
      "%" +
      ") saturate(" +
      snSaturate +
      "%" +
      ") grayscale(" +
      snGrayScale +
      "%" +
      ") sepia(" +
      snSepia +
      "%" +
      ") hue-rotate(" +
      snHueRotate +
      "deg" +
      ") invert(" +
      snInvert +
      "%" +
      ") opacity(" +
      snOpacity / 10 +
      ")";

    // if (sInputSlider[i].value === snBlur) gambar.style.filter = "blur(" + snBlur + "px" + ")";
    // if (sInputSlider[i].value === snBrightness)
    //   gambar.style.filter = "brightness(" + snBrightness + "%" + ")";
    // if (sInputSlider[i].value === snContrast)
    //   gambar.style.filter = "contrast(" + snContrast + "%" + ")";
    // if (sInputSlider[i].value === snSaturate)
    //   gambar.style.filter = "saturate(" + snSaturate + "%" + ")";
    // if (sInputSlider[i].value === snGrayScale)
    //   gambar.style.filter = "grayscale(" + snGrayScale + "%" + ")";
    // if (sInputSlider[i].value === snSepia) gambar.style.filter = "sepia(" + snSepia + "%" + ")";
    // if (sInputSlider[i].value === snHueRotate)
    //   gambar.style.filter = "hue-rotate(" + snHueRotate + "deg" + ")";
    // if (sInputSlider[i].value === snInvert) gambar.style.filter = "invert(" + snInvert + "%" + ")";
    // if (sInputSlider[i].value === snOpacity)
    //   gambar.style.filter = "opacity(" + snOpacity / 10 + ")";
    // if (sInputSlider[i].value === snDropShadow)
    //   gambar.style.filter = "hue-rotate(" + snDropShadow + "deg" + ")";
    // gambar.style.filter = "brightness(" + snBrightness + "%" + ")";
  });
}

// console.log(snOpacity / 10);

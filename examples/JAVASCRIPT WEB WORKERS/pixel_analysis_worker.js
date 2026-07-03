self.onmessage = function(e){

    const pixels = e.data;

    let totalR = 0;
    let totalG = 0;
    let totalB = 0;

    let brightest = 0;
    let darkest = 255;

    let pixelCount = pixels.length / 4;

    for(let i = 0; i < pixels.length; i += 4){

        const r = pixels[i];
        const g = pixels[i+1];
        const b = pixels[i+2];

        totalR += r;
        totalG += g;
        totalB += b;

        const brightness = (r + g + b) / 3;

        if(brightness > brightest){
            brightest = brightness;
        }

        if(brightness < darkest){
            darkest = brightness;
        }

    }

    self.postMessage({

        avgR: (totalR / pixelCount).toFixed(2),

        avgG: (totalG / pixelCount).toFixed(2),

        avgB: (totalB / pixelCount).toFixed(2),

        brightest: brightest.toFixed(2),

        darkest: darkest.toFixed(2)

    });

};
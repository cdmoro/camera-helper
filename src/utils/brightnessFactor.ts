const brightnessFactor = (imageSrc: string): Promise<number> => {
    return new Promise((resolve, reject) => {
        const fuzzy = 0.1;
        const img = document.createElement("img");
        img.src = imageSrc;
        img.style.display = "none";
        img.crossOrigin = "anonymous";
        document.body.appendChild(img);

        img.onload = function <CanvasImageSource>() {
            const canvas = document.createElement("canvas");

            canvas.width = this.width;
            canvas.height = this.height;

            try {
                const ctx = canvas.getContext("2d");

                if (ctx === null)
                    return reject();

                ctx.drawImage(this, 0, 0);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                let r, g, b, max_rgb;
                let light = 0, dark = 0;

                for (let x = 0, len = data.length; x < len; x += 4) {
                    r = data[x];
                    g = data[x + 1];
                    b = data[x + 2];

                    max_rgb = Math.max(Math.max(r, g), b);
                    if (max_rgb < 128)
                        dark++;
                    else
                        light++;
                }

                const dl_diff = ((light - dark) / (this.width * this.height));

                resolve(dl_diff + fuzzy)
            } catch (error) {
                reject('Error loading image')
            }
        }
    })
}

export {
    brightnessFactor
}
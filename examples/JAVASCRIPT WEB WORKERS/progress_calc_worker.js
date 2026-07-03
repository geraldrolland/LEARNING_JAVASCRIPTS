self.onmessage = function () {

    const totalRecords = 1000000;
    let processed = 0;

    while (processed < totalRecords) {

        processed++;

        // Send progress every 10%
        if (processed % 100000 === 0) {

            const percent = (processed / totalRecords) * 100;

            self.postMessage({
                type: "progress",
                value: percent
            });

        }

    }

    self.postMessage({
        type: "complete"
    });

};
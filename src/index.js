(function () {
    const trackerUrl = 'https://tracker.simplaex-code-challenge.com';

    if (!window) {
        console.log('window is not defined!');
        return;
    }

    if (window.rivraddon) {
        console.log('window.rivraddon is already exist!');
        return;
    }
    window.rivraddon = {
        analytics: {
            enableAnalytics: function () {
                console.log('SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics');
            },
            trackPbjsEvent: function ({ eventType }) {
                const xmlHttp = new XMLHttpRequest();
                const body = JSON.stringify({ eventType });

                xmlHttp.open("POST", trackerUrl);
                xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xmlHttp.send(body);
            }
        }
    };
})();

export function createLogger() {
    let result = []

    function warn(text) {
        return result.push({
            message: text,
            dateTime: new Date(),
            type: 'warn',
        })
    }

    function error(text) {
        return result.push({
            message: text,
            dateTime: new Date(),
            type: 'error',
        })
    }

    function log(text) {
        return result.push({
            message: text,
            dateTime: new Date(),
            type: 'log',
        })
    }

    function getRecords(text) {
        switch (text) {
            case 'warn':
                return result
                    .filter(el => el.type === 'warn')
                    .sort((a, b) => b.dateTime - a.dateTime);

            case 'log':
                return result
                    .filter(el => el.type === 'log')
                    .sort((a, b) => b.dateTime - a.dateTime);

            case 'error':
                return result
                    .filter(el => el.type === 'error')
                    .sort((a, b) => b.dateTime - a.dateTime);

            case undefined:
                return result
                    .sort((a, b) => b.dateTime - a.dateTime);

        }
        return result;
    }
    return {
        warn,
        error,
        log,
        getRecords,
    };
}
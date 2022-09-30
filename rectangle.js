module.exports = (x, y, callbacks) => {
    if (x <= 0 || y <= 0) {
        callbacks(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`))
    } else {
        setTimeout(() =>
            callbacks(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        );
    }
};




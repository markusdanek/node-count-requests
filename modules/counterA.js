var counterA = function() {
    var count = 0;

    this.addCount = function() {
        count++
    }

    this.getCount = function() {
        return count;
    }
}

counterA.instance = null;

counterA.getInstance = function() {
    if (this.instance === null) {
        this.instance = new counterA();
    }

    return this.instance;
}

module.exports = counterA.getInstance();

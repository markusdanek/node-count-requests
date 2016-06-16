var counterB = function() {
    var count = 0;

    this.addCount = function() {
        count++
    }

    this.getCount = function() {
        return count;
    }
}

counterB.instance = null;

counterB.getInstance = function() {
    if (this.instance === null) {
        this.instance = new counterB();
    }

    return this.instance;
}

module.exports = counterB.getInstance();

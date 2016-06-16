var counterC = function() {
    var count = 0;

    this.addCount = function() {
        count++
    }

    this.getCount = function() {
        return count;
    }
}

counterC.instance = null;

counterC.getInstance = function() {
    if (this.instance === null) {
        this.instance = new counterC();
    }

    return this.instance;
}

module.exports = counterC.getInstance();

/**
 * Tamagocci
 */
function Tamagocci(goodPicture, badPicture, deadPicture) {
    var that         = this;
    var weight       = 5;
    var happiness    = 5;
    this.age         = 0;
    this.minWeight   = 1;
    this.maxWeight   = 10;
    this.isDead      = false;
    this.goodPicture = goodPicture || "pk_good.gif";
    this.badPicture  = badPicture  || "pk_bad.gif";
    this.deadPicture = deadPicture || "pk_dead.gif";

    this.eat = function() {
        weight += 2;
    };

    this.play = function() {
        weight--;
        this.happiness++;
    };

    this.becomeOlder = function() {
        this.age++;
        this.minWeight++;
        this.maxWeight++;
        this.happiness--;
    };

    this.isDeadFunction = function() {
        this.isDead = weight > this.maxWeight ||
            weight < this.minWeight ||
            happiness <= 0;

        if (this.isDead) {
            this.ondie();
        }
    };

    this.ondie = function() {};

    this.getPicture = function() {
        if (this.isDead) {
            return this.deadPicture;
        }

        if (happiness == 0) {
            return this.deadPicture;
        }

        if (happiness < 3) {
            return this.badPicture;
        }

        if (weight - 3 < this.minWeight) {
            return this.badPicture;
        }

        if (weight + 3 > this.maxWeight) {
            return this.badPicture;
        }

        return this.goodPicture;
    };

    Object.defineProperty(this, "weight", {
        get: function() { return weight; },
        set: function(newValue) {
            weight = newValue;
            that.isDeadFunction();
        }
    });

    Object.defineProperty(this, "happiness", {
        get: function() { return happiness; },
        set: function(newValue) {
            happiness = newValue;
            that.isDeadFunction();
        }
    });
}

/**
 * HelloKitty
 */
function HelloKitty() {
    Tamagocci.apply(this, ["hk_good.gif", "hk_bad.gif", "hk_dead.png"]); // call the parent constructor
}

/**
* Pikachu
*/
function Pikachu() {
    Tamagocci.apply(this);
}

// Inheritance
HelloKitty.prototype = Object.create(Tamagocci.prototype);
Pikachu.prototype = Object.create(Tamagocci.prototype);

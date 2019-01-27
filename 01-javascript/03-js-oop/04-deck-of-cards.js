
class Deck {
    constructor(){
        this.deck = []
    };

    build() {
        const suits = ["Clubs", "Spades", "Diamonds", "Hearts"]
        const values = [["Ace", 1], ["Two", 2],  ["Three", 3], ["Four", 4],  ["Five", 5], ["Six", 6], ["Seven", 7], ["Eight", 8], ["Nine", 9] , ["Ten", 10], ["Jack", 11], ["Queen", 12], ["King", 13]]

        for (const suit of suits) {
            for (const value of values) {
                this.deck.push([`${ value[0] } of ${ suit }`, value[1]]);
            }
        }
        return this;
    };

    //pulled the shuffle function from the answers, not entirely sure how this works. 
    shuffle() {
        let m = this.deck.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this;
    };

    deal() {
        return this.deck.pop()
    };
};

class Player {
    constructor(name) {
        this.name = name
        this.hand = []
    };

    draw(deck, num) {
        for (var i = 0; i <= num; i++) {
            this.hand.push(deck.deal())
        }
        return this
    };

    dicard(num) {
        if (num.toLowerCase() == "all") {
            this.hand.pop()
        }
        for (var i = 0; i <= num; i++) {
            this.hand.pop()
        }
        return this
    };

    show() {
        console.log(this.hand)
    };
}

var deck1 = new Deck()
deck1.build
deck1.shuffle

let steve = new Player("Steve")
steve.draw(deck1, 5)
steve.show()

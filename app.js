class Card {
    constructor(suit, number){
        this.suit = suit
        this.number = number
    }
}
class Token {
    constructor(value, color, top, left){
        this.value = value
        this.color = color
        this.top = top
        this.left = left
    }
}

const app = Vue.createApp({
    data(){
        return{
            fullDeck:[
                new Card('clubs', 2),
                new Card('clubs', 3),
                new Card('clubs', 4),
                new Card('clubs', 5),
                new Card('clubs', 6),
                new Card('clubs', 7),
                new Card('clubs', 8),
                new Card('clubs', 9),
                new Card('clubs', 10),
                new Card('clubs', 'J'),
                new Card('clubs', 'Q'),
                new Card('clubs', 'K'),
                new Card('clubs', 'A'),
                new Card('diamond', 2),
                new Card('diamond', 3),
                new Card('diamond', 4),
                new Card('diamond', 5),
                new Card('diamond', 6),
                new Card('diamond', 7),
                new Card('diamond', 8),
                new Card('diamond', 9),
                new Card('diamond', 10),
                new Card('diamond', 'J'),
                new Card('diamond', 'Q'),
                new Card('diamond', 'K'),
                new Card('diamond', 'A'),
                new Card('heart', 2),
                new Card('heart', 3),
                new Card('heart', 4),
                new Card('heart', 5),
                new Card('heart', 6),
                new Card('heart', 7),
                new Card('heart', 8),
                new Card('heart', 9),
                new Card('heart', 10),
                new Card('heart', 'J'),
                new Card('heart', 'Q'),
                new Card('heart', 'K'),
                new Card('heart', 'A'),
                new Card('spades', 2),
                new Card('spades', 3),
                new Card('spades', 4),
                new Card('spades', 5),
                new Card('spades', 6),
                new Card('spades', 7),
                new Card('spades', 8),
                new Card('spades', 9),
                new Card('spades', 10),
                new Card('spades', 'J'),
                new Card('spades', 'Q'),
                new Card('spades', 'K'),
                new Card('spades', 'A')
            ],
            tokens:[
                new Token(5, '#E03A3A'),
                new Token(10, '#3962DD'),
                new Token(50, '#39DB82'),
                new Token(100, '#D8A43A'),
                new Token(250, '#D61DB1'),
                new Token(500, '#781DD3')
            ],
            playerCards:[],
            opponentCards:[],
            givenTokens:[],
            money: 1000,
            given: 0,
            gameOn: false
        }
    },
    methods:{
        random(min, max){
            return Math.floor(Math.random() * (max - min)) + min
        },
        giveMoney(token){
            if(this.money>=token.value){
                this.money -= token.value
                this.given += token.value
                this.givenTokens.push(new Token(token.value, token.color, this.random(-8, 8), this.random(-8, 8)))
            }
        },
        startGame(){
            this.gameOn = true;
        },
        accept(){
            document.querySelector('#givenTokens').style.top = '-12%'
            document.querySelector('#givenTokens').classList += ' givenTokensAnimation'
            this.startGame()
        }
    }
})

app.mount('#app')
import getRandomWord from "./utils/getRamdomWord";

class Word {
    text: string
    lettersWrited: number
    length: number
    id: number
    constructor() {
        this.text = getRandomWord();
        this.length = this.text.length
        this.lettersWrited = 0
        this.id = 0
    }
    // public getLettersWrited() {

    // }
    public increaseLettersWrited() {
        this.lettersWrited += 1
    }
    public setLettersWrited(number: number) {
        this.lettersWrited = number
    }
    public getText() {
        return this.text
    }
    public setId(id: number) {
        this.id = id
    }
    public getId() {
        return this.id
    }
}

export default Word
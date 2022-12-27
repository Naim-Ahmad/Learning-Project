function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetArr = alphabet.split('')
    for(let i =0; i<string.length; i++){
        let el = string[i]
        let index = alphabetArr.indexOf(el)
        if(index !== -1){
            alphabetArr.splice(index, 1)
        }
    }
    return !alphabetArr.length
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))


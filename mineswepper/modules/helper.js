export default {
    randomIntegers(n, min, max){
        let randomNumber = null;
        const result = [];

        while(n>0) {
            randomNumber = Math.round(min + Math.random() * (max-min));
            if(result.indexOf(randomNumber) === -1) {
                result.push(randomNumber)
                n--;
            }
        }

        return result;
    }
}
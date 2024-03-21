import allWords from '../Assets/EnglishMostFrequentWords.json'

const randomIntFromRange = (min, max) => {
    const minNorm = Math.ceil(min);
    const maxNorm = Math.floor(max);
    const idx = Math.floor(Math.random() * (maxNorm - minNorm + 1) + minNorm);
    return idx;
};

const WordGenerator = () => {
    const EnglishWordList = [];
    for (let i = 0; i < 45; i++) {
        const rand = randomIntFromRange(0, 550);
        let wordCandidate = allWords[rand].val;
        EnglishWordList.push(wordCandidate);
    }
    return EnglishWordList;
}

export { WordGenerator };

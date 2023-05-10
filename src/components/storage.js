//this is straight from wawa sensei tut, not sure if it'll have any relevance

// export const generateGameLevel = ({nbStages}) => {
//     const level = []

//     for (let i = 0; i < nbStages; i++) {
//         const stage = []
//         const nbOptions = 3 + 1
//         for (let j = 0; j < nbOptions; j++) {
//             let hangeul = null;
//             while(!hangeul || stage.includes(hangeul)) {
//                 hangeul = hangeul[Math.floor(Math.random() * hangeul.length)]
//             }
//             stage.push(hangeul)
//         }
//         stage[Math.floor(Math.random() * stage.length)].correct = true
//         level.push(stage)
//     }
//     return level
// }


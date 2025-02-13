import bcrypt from 'bcrypt';

const senhaOriginal = 'abobrinha'

const senhaHash = "$2b$10$a8bmbn98zOSDaAJgUeAE7uir0gaSFekqaYq.dkXyDUTwlI6n/TfAy"

bcrypt.compare(senhaOriginal, senhaHash)
    .then(isMatch => {
        console.log("As senhas coincidem?", isMatch)
    })
    .catch(err => {
        console.error(`Erro na comparação das senhas.`)
    })
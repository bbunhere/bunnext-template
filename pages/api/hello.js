// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const helloWord = (req, res) => {
    res.status(200).json({name: '@bunheree'})
}

export default helloWord
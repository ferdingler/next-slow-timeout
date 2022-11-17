// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  return new Promise((accept) => {
    setTimeout(() => {
      res.send("Ok");
      accept();
    }, 32000);
  });
}

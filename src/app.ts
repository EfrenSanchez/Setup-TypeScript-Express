import express, { Application, Request, Response, NextFunction } from 'express';

const app: express.Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World');
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`🚀 Server running on port ${port}`));

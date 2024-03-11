import express from 'express';
import { dto } from '@dto';

import PersonRequest = dto.PersonRequest;
import PersonResponse = dto.PersonResponse;
import AuthRequest = dto.AuthRequest;
import AuthResponse = dto.AuthResponse;

const app = express();
const port = 3003;

app.use(express.raw({ type: 'application/x-protobuf' }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

app.post('/person', (req, res) => {
  const personRequest = PersonRequest.decode(req.body);

  console.log('personRequest', personRequest);

  if (personRequest.id !== 1) {
    res.status(404).send();
    return;
  }

  const personResponse = PersonResponse.encode({
    name: 'John',
    surname: 'Doe',
  }).finish();

  res.status(200).type('application/x-protobuf').send(personResponse);
});

app.post('/auth', (req, res) => {
  const authRequest = AuthRequest.decode(req.body);

  console.log('authRequest', authRequest);

  if (authRequest.login === 'admin' && authRequest.password === 'admin') {
    res
      .status(200)
      .type('application/x-protobuf')
      .send(
        AuthResponse.encode({
          result: 'Successfully authenticated',
        }).finish()
      );
  } else {
    res.status(401).send();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

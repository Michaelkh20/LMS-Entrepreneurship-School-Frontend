import express from 'express';
import { dto } from '@dto';

import AuthRequest = dto.AuthRequest;
import AuthResponse = dto.AuthResponse;
import ProfileResponse = dto.ProfileResponse;
import Role = dto.Role;
import TeamLearnerResponse = dto.TeamLearnerResponse;

const app = express();
const port = 3030;

app.use(express.raw({ type: 'application/x-protobuf' }));

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

app.get('/profile', (req, res) => {
  const { accountId } = req.query;

  if (accountId !== '1') {
    res.status(404).send();
    return;
  }

  const profileResponse = ProfileResponse.encode({
    fullName: 'John Doe',
    role: Role.LEARNER,
    email: 'someemail@gmail.com',
    team: {
      id: '1',
      number: '1',
    },
    phone: '+7 (123) 456 78 90',
    messenger: 'tg:@ivan',
    balance: 100,
  }).finish();

  res.status(200).type('application/x-protobuf').send(profileResponse);
});

app.get('/team-learner', (req, res) => {
  const { teamId } = req.query;

  if (teamId !== '1') {
    res.status(404).send();
    return;
  }

  const teamLearnerResponse = TeamLearnerResponse.encode({
    id: '1',
    teamNumber: 1,
    projectTheme: 'Some theme',
    learners: [
      {
        personId: '1',
        fullName: 'John Doe',
        email: 'someemail@gmail.com',
        messenger: 'tg:@ivan',
      },
      {
        personId: '2',
        fullName: 'Jane Smith',
        email: 'janesmith@gmail.com',
        messenger: 'tg:@jane',
      },
      {
        personId: '3',
        fullName: 'Mike Johnson',
        email: 'mikejohnson@gmail.com',
        messenger: 'tg:@mike',
      },
      {
        personId: '4',
        fullName: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
        messenger: 'tg:@sarah',
      },
    ],
    trackers: [
      {
        personId: '5',
        fullName: 'Jane Smith',
        email: 'janesmith@gmail.com',
        messenger: 'tg:@jane',
      },
      {
        personId: '6',
        fullName: 'Mike Johnson',
        email: 'mikejohnson@gmail.com',
        messenger: 'tg:@mike',
      },
      {
        personId: '7',
        fullName: 'Sarah Williams',
        email: 'sarahwilliams@gmail.com',
        messenger: 'tg:@sarah',
      },
    ],
  }).finish();

  res.status(200).type('application/x-protobuf').send(teamLearnerResponse);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

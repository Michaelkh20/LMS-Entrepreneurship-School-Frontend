export { UserRoleNamespace_Role as Role } from '@proto/users/users_api';

export { UserSexNamespace_Sex as Sex } from '@proto/users/users_api';

export {
  type Login_Response as ILoginResponse,
  type Success as ISuccessAuthResponse,
  type SetPassword_Request as ISetPasswordRequest,
  type SetPassword_Response as ISetPasswordResponse,
  Login_Response as LoginResponseTransformer,
  SetPassword_Request as SetPasswordRequestTransformer,
  SetPassword_Response as SetPasswordResponseTransformer,
} from '@proto/users/users_auth_api';

export {
  type CreateOrUpdateUser_Request as ICreateUpdateUserRequest,
  type GetUsers_Response as IUsersList,
  type GetUser_Response as IGetUserResponse,
  type GetUserBalance_Response as IUserBalanceResponse,
  type GetUserNameList_Response as IUserSnippetList,
  type TeamSnippet,
  type User,
  type CreateOrUpdateUser_Response as ICreateUpdateUserResponse,
  type DeleteUser_Response as IDeleteUserResponse,
  CreateOrUpdateUser_Request as CreateUpdateUserRequestTransformer,
  GetUsers_Response as UsersListTransformer,
  GetUser_Response as GetUserResponseTransformer,
  GetUserBalance_Response as UserBalanceResponseTransformer,
  GetUserNameList_Response as UserSnippetListTransformer,
  CreateOrUpdateUser_Response as CreateUpdateUserResponseTransformer,
  DeleteUser_Response as DeleteUserResponseTransformer,
} from '@proto/users/users_api';

export {
  type CreateOrUpdateTeam_Request as ICreateUpdateTeamRequest,
  type CreateOrUpdateTeam_Response as ICreateUpdateTeamResponse,
  type GetTeams_Response as ITeamsList,
  type GetTeam_Response as IGetTeamResponse,
  CreateOrUpdateTeam_Request as CreateUpdateTeamRequestTransformer,
  CreateOrUpdateTeam_Response as CreateUpdateTeamResponseTransformer,
  GetTeams_Response as TeamsListTransformer,
  GetTeam_Response as GetTeamResponseTransformer,
} from '@proto/teams/teams_api';

export {
  type CreateOrUpdateLesson_Request as ICreateUpdateLessonRequest,
  type CreateOrUpdateLesson_Response as ICreateUpdateLessonResponse,
  type GetLessons_Response as ILessonsList,
  type GetLesson_Response as IGetLessonResponse,
  type LessonSnippet,
  type Lesson,
  CreateOrUpdateLesson_Request as CreateUpdateLessonRequestTransformer,
  GetLessons_Response as LessonsListTransformer,
  GetLesson_Response as GetLessonResponseTransformer,
  CreateOrUpdateLesson_Response as CreateUpdateLessonResponseTransformer,
} from '@proto/lessons/lessons_api';

export {
  type CreateOrUpdateHomework_Request as ICreateUpdateHomeworkRequest,
  type GetHomeworks_Response as IHomeworksList,
  type GetHomework_Response as IGetHomeworkResponse,
  type HomeworkSnippet,
  CreateOrUpdateHomework_Request as CreateUpdateHomeworkRequestTransformer,
  GetHomeworks_Response as HomeworksListTransformer,
  GetHomework_Response as GetHomeworkResponseTransformer,
} from '@proto/assignments/homework_api';

export {
  type CreateOrUpdateTest_Request as ICreateUpdateTestRequest,
  type GetTests_Response as ITestsList,
  type GetTest_Response as IGetTestResponse,
  type TestSnippet,
  CreateOrUpdateTest_Request as CreateUpdateTestRequestTransformer,
  GetTests_Response as TestsListTransformer,
  GetTest_Response as GetTestResponseTransformer,
} from '@proto/assignments/test_api';

export {
  type CreateOrUpdateExam_Request as ICreateUpdateExamRequest,
  type GetExams_Response as IExamsList,
  type GetExam_Response as IGetExamResponse,
  type ExamSnippet,
  CreateOrUpdateExam_Request as CreateUpdateExamRequestTransformer,
  GetExams_Response as ExamsListTransformer,
  GetExam_Response as GetExamResponseTransformer,
} from '@proto/assignments/exam_api';

export {
  type CreateOrUpdateCompetition_Request as ICreateUpdateCompetitionRequest,
  type GetCompetitions_Response as ICompetitionsList,
  type GetCompetition_Response as IGetCompetitionResponse,
  type CompetitionSnippet,
  CreateOrUpdateCompetition_Request as CreateUpdateCompetitionRequestTransformer,
  GetCompetitions_Response as CompetitionsListTransformer,
  GetCompetition_Response as GetCompetitionResponseTransformer,
} from '@proto/assignments/competition_api';

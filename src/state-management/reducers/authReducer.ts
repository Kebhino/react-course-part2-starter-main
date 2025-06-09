
interface LoginAction {
    type: 'login';
    username: string;
}

interface LogoutAction {
    type: 'logout';
} 

type AuthAction = LoginAction | LogoutAction;

const authReducer = (state: string, action: AuthAction): string => {

  if (action.type === 'login') return action.username;
  if (action.type === 'logout') return '';
  return state
}

export default authReducer;
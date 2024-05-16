import { ButtonSubmit, FormRegist, Inputbox } from './FormRegistration.styled';
import { useAuth } from './useAuth';

const AuthForm = ({ showLoginForm }) => {
  const { handleSubmit } = useAuth({ showLoginForm });

  const formsInputs = [
    {
      label: 'email',
      type: 'email',
    },
    {
      label: 'password',
      type: 'password',
    },
  ];

  if (!showLoginForm) {
    formsInputs.unshift({
      label: 'name',
      type: 'text',
    });
  }

  const formType = showLoginForm ? 'Login' : 'Registration';

  return (
    <>
      <FormRegist onSubmit={handleSubmit}>
        <h2>Сreate or log in to your account.</h2>
        <ul>
          {Array.isArray(formsInputs) &&
            formsInputs.map(({ label, type }) => (
              <li key={label}>
                <Inputbox>
                  <label htmlFor={label}></label>
                  <input
                    type={type}
                    name={label}
                    id={label}
                    placeholder={`Enter your ${label}`}
                  />
                </Inputbox>
              </li>
            ))}
        </ul>
        <ButtonSubmit type="submit">{formType}</ButtonSubmit>
      </FormRegist>
    </>
  );
};

export default AuthForm;

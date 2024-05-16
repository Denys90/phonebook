import { useUsers } from 'store/hooks';

export const useAuth = ({ showLoginForm }) => {
  const { signUp, signIn } = useUsers();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (!showLoginForm) {
      const { name, email, password } = e.target.elements;

      signUp({
        name: name.value,
        email: email.value,
        password: password.value,
      });
    } else {
      const { email, password } = e.target.elements;
      signIn({ email: email.value, password: password.value });
    }
    form.reset();
  };
  return { handleSubmit };
};

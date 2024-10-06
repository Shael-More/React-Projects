import { useForm } from 'react-hook-form';

const ReactForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      throw new Error();
      console.log(data);
    } catch (error) {
      setError('root', { message: 'This email is already taken' });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
      <input
        className='border-2 m-1 p-2'
        {...register('email', {
          required: 'Email is Required',
          //   pattern: /^[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,4}$/,
          validate: (value) => {
            if (!value.includes('@')) {
              return 'Email must include @';
            }
            return true;
          },
        })}
        type='text'
        placeholder='Email'
      />
      {errors.email && (
        <div className='text-red-500'>{errors.email.message}</div>
      )}
      <input
        className='border-2 m-1 p-2'
        {...register('password', {
          required: 'Password is Required',
          minLength: {
            value: 8,
            message: 'Password must have at least 8 characters',
          },
        })}
        type='password'
        placeholder='Password'
      />
      {errors.password && (
        <div className='text-red-500'>{errors.password.message}</div>
      )}
      <button
        disabled={isSubmitting}
        className='border-2 m-1 p-2'
        type='submit'
      >
        {isSubmitting ? 'Loading...' : 'Submit'}
      </button>
      {errors.root && <div className='text-red-500'>{errors.root.message}</div>}
    </form>
  );
};

export default ReactForm;

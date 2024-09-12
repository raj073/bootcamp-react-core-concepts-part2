const User = ({ user }) => {
  const { name, email } = user;
  return (
    <div>
      <h3>User Name: {name}</h3>
      <p>User Email: {email}</p>
    </div>
  );
};

export default User;

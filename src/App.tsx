import { useProfile } from './hooks/use-profile'

function App() {
  const { data: userProfile, isLoading, isError, error } = useProfile()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error Loading Profile: {error.message}</div>
  }
  return (
    <div>
      <h1>User Profile</h1>
      {userProfile && (
        <div>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
        </div>
      )}
    </div>
  )
}
export default App

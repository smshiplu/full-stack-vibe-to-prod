import { useState } from "react";

interface UserProfile {
  firstName: string,
  lastName: string,
  role: string
}

export function StatePlayground() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [user, setUser] = useState<UserProfile>({
    firstName: "SM NASIR",
    lastName: "Uddin",
    role: "Software Engineer"
  });

  const handleFirstNameChange = (newName: string) => {
    // setUser({
    //   ...user,
    //   firstName: newName
    // })
    setUser((prev: UserProfile) => ({
      ...prev,
      firstName: newName,
    }))
  }
 

  return (
    <div className={`min-h-screen p-8 transition-colors ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <h1 className="text-xl font-bold">State Architect's Playground!</h1>
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="bg-blue-800 hover:bg-blue-900 text-gray-50 px-3 py-1 rounded mt-6">
        Toggle {isDarkMode ? "Light": "Dark"} Mode
      </button>

      <div className="mt-8 p-6 border rounded-lg max-w-md">
        <h2 className="text-xl mb-4">
          Profile: {`${user.firstName} ${user.lastName}`}
        </h2>
        <p className="text-sm text-gray-500 mb-4">Role: {user.role}</p>
        <input 
          type="text"
          className="p-2 w-full border dark:border-gray-50 border-gray-900 dark:text-gray-50 text-gray-900 placeholder:text-gray-500 rounded"
          placeholder="First Name"
          value={user.firstName}
          onChange={(e) => handleFirstNameChange(e.target.value)}
         />
      </div>
    </div>
  )
}
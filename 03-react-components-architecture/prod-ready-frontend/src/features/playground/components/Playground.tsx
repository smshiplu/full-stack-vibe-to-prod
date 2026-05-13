import Card from "../../../components/Card"
import UserProfile from "../../profile/components/UserProfile"


export function Playground() {
  return (
    <div className="p-8 flex flex-wrap gap-8">
      <UserProfile 
        name="SM Nasir Uddin"
        avatarUrl="https://avatars.githubusercontent.com/u/39733761?v=4"
        role="Software developer"
        isAdmin={true}
      />

      <UserProfile 
        name="SM Azlan Arvin"
        avatarUrl="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
        role="Junior developer"
      />
      <Card title="System Status">
        <p className="text-gray-400">All system operational!</p>
        <button className="bg-blue-700 px-4 py-1 rounded-lg mt-2 ">Run Diagnostics</button>
      </Card>
    </div>
  )
}
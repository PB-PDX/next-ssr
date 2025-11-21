import { prisma } from "@/lib/prisma";
import CreateUserForm from "./components/CreateUserForm";


export default async function ProjectsPage() {
  const user = await prisma.user.findFirst()
  
  return (
    <div>
      Hello {user?.name}!
      <CreateUserForm />
    </div>
  )
}
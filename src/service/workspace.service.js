// import { headerToken } from "@/app/api/headerToken";

import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";


export const getAllWorkspaceService = async () => {
  const session = await getServerSession(authOption);
  console.log("session ", session?.user?.token);
  const rest = await fetch(
    "http://110.74.194.123:8989/api/todo/v1/workspaces",
    {
      headers: {
        authorization: `Bearer ${session?.user?.token}`,
      },
    }
  );
  const data = await rest.json();
  return data;
  // console.log(data)
};

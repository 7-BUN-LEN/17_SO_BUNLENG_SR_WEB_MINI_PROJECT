import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "../../utils/constants";

// Get all category services
export const getAllCategoryServices = async () => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/category/get-all-category-by-current-user?asc=false&desc=false&page=1&size=10`,
    {
      headers: header,
    }
  );
  const data = await res.json();
  return data;
};

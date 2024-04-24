import { Provider } from "@/context/provider";
import "../globals.css";

export default function Layout({ children }) {
    return (
      <html lang="en">
        <body className="font-SFProDisplay">
          <Provider>{children}</Provider>
        </body>
      </html>
    );
  }
  
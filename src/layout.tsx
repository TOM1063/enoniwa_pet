
import { ClerkProvider } from "@clerk/nextjs";
// import { jaJP } from "@clerk/localizations";
import "./styles/globals.css"
import { Zen_Kaku_Gothic_New } from "next/font/google";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
      subsets: ["latin"],
      weight: ["300", "400", "500", "700", "900"],
    });
    
// const localization = {
//       ...jaJP,
//       signIn: {
//         ...jaJP.signIn,
//         start: {
//           ...jaJP.signIn!.start,
//           actionLink: "新規登録",
//         },
//       },
//     };

export default function RootLayout({
      children,
    }: Readonly<{
      children: React.ReactNode;
    }>) {
      return (
        <ClerkProvider>
          <html lang="ja">
            <body className={zenKakuGothicNew.className}>
                  {children}
            </body>
          </html>
        </ClerkProvider>
      );
    }

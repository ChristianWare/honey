import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ReactQueryProvider from "@/ReactQueryProvider";
import { Toaster } from "react-hot-toast";
import { ModalProvider } from "@/context/ModalContext";
import { ViewTransitions } from "next-view-transitions";

const RaptorMonoSemiBold = localFont({
  src: "../../public/fonts/RaptorMonoSemiBold.woff",
  variable: "--RaptorMonoSemiBold",
  display: "swap",
});

const RaptorTextSemiBold = localFont({
  src: "../../public/fonts/RaptorTextSemiBold.woff",
  variable: "--RaptorTextSemiBold",
  display: "swap",
});

const RaptorMonoMedium = localFont({
  src: "../../public/fonts/RaptorMonoMedium.woff",
  variable: "--RaptorMonoMedium",
  display: "swap",
});

const RaptorMonoRegular = localFont({
  src: "../../public/fonts/RaptorMonoRegular.woff",
  variable: "--RaptorMonoRegular",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Golden Drips Honey Inc",
  description: "We are a honey marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body
          className={`${RaptorMonoSemiBold.variable} ${RaptorTextSemiBold.variable} ${RaptorMonoMedium.variable} ${RaptorMonoRegular.variable}`}
        >
          <ReactQueryProvider>
            <Toaster
              position='bottom-right'
              toastOptions={{
                className: "toastFont",
                duration: 6000,
                style: {
                  border: "1px solid #333438",
                  borderRadius: "5px",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                },
              }}
            />
            <ModalProvider>{children}</ModalProvider>
          </ReactQueryProvider>{" "}
        </body>
      </html>
    </ViewTransitions>
  );
}

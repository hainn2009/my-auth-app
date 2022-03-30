import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  console.log(pageProps.session);
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;


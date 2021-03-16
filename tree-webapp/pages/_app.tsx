import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import primaryTheme from '@/lib/themes';
import '@/styles/tailwind.css';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:8000/graphql',
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={primaryTheme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;

import Document, { Html, Head, Main, NextScript } from 'next/document';
import Lang_dd from './components/Lang_dd';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={this.props.__NEXT_DATA__.props.pageProps.country_ext}>
        <Head />
        <body>
          <Main />
          <NextScript defer />
        </body>
        <Lang_dd country_ext={this.props.__NEXT_DATA__.props.pageProps.country_ext} />
      </Html>
    );
  }
}

export default MyDocument;

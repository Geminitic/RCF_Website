declare module 'jsdom' {
  interface Options {
    contentType?: string;
    userAgent?: string;
    referrer?: string;
    cookieJar?: unknown;
    parsingMode?: 'html' | 'xml';
    // and many more...
  }

  export class JSDOM {
    constructor(_html: string, _options?: Options);
    window: {
      document: Document;
    };
  }
}

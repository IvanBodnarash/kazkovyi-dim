export const portableTextNormalizer = {
  h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-bold mb-3">{children}</h1>,

  h2: ({ children }) => <h2 className="text-3xl md:text-4xl font-bold mb-2">{children}</h2>,

  h3: ({ children }) => <h3 className="text-2xl md:text-3xl font-semibold mb-2">{children}</h3>,

  h4: ({ children }) => <h4 className="text-xl md:text-2xl font-semibold mb-2">{children}</h4>,

  h5: ({ children }) => <h5 className="text-lg md:text-xl font-semibold mb-2">{children}</h5>,

  normal: ({ children }) => <p className="mb-3">{children}</p>,
};

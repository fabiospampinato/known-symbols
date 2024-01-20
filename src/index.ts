
/* MAIN */

class Symbols {

  /* VARIABLES */

  private name2symbol: Partial<Record<string, symbol>> = {};
  private symbol2name: Partial<Record<symbol, string>> = {};
  private names: string[] = [];
  private symbols: symbol[] = [];

  /* CONSTRUCTOR */

  constructor () {

    const descriptors = Object.getOwnPropertyDescriptors ( Symbol );

    for ( const name in descriptors ) {

      const value = descriptors[name].value;

      if ( typeof value !== 'symbol' ) continue;

      this.name2symbol[name] = value;
      this.symbol2name[value] = name;
      this.names.push ( name );
      this.symbols.push ( value );

    }

  }

  /* API */

  getNames = (): readonly string[] => {

    return this.names;

  }

  getSymbols = (): readonly symbol[] => {

    return this.symbols;

  }

  getName = ( symbol: symbol ): string | undefined => {

    return this.symbol2name[symbol];

  }

  getSymbol = ( name: string ): symbol | undefined => {

    return this.name2symbol[name];

  }

  hasName = ( name: string ): boolean => {

    return name in this.name2symbol;

  }

  hasSymbol = ( symbol: symbol ): boolean => {

    return symbol in this.symbol2name;

  }

}

/* EXPORT */

export default new Symbols ();

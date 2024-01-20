
/* IMPORT */

import {describe} from 'fava';
import Known from '../dist/index.js';

/* MAIN */

describe ( 'Known Symbols', it => {

  it ( 'it can retrieve well-known names and symbols', t => {

    /* POSITIVE */

    const names = Known.getNames ();
    const symbols = Known.getSymbols ();

    t.is ( names.length, symbols.length );

    for ( let i = 0, l = names.length; i < l; i++ ) {

      t.is ( Symbol[names[i]], symbols[i] );
      t.is ( Known.getName ( symbols[i] ), names[i] );
      t.is ( Known.getSymbol ( names[i] ), symbols[i] );
      t.is ( Known.hasName ( names[i] ), true );
      t.is ( Known.hasSymbol ( symbols[i] ), true );

    }

    /* NEGATIVE */

    t.is ( Known.getName ( Symbol ( 'foo' ) ), undefined );
    t.is ( Known.getSymbol ( 'foo' ), undefined );
    t.is ( Known.hasName ( 'foo' ), false );
    t.is ( Known.hasSymbol ( Symbol ( 'foo' ) ), false );

  });

});

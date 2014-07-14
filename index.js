/*!
 * count-lines <https://github.com/jonschlinkert/count-lines>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

(function () {
  'use strict';

  function count (str) {
    return str.split(/\r?\n/g).length;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = count;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return count;
      });
    } else {
      window.count = count;
    }
  }
})();

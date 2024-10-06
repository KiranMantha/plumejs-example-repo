import fs from 'fs';
import glob from 'glob';
import path from 'path';
const sass = require('sass');

export default function compileStyles() {
  const FILE_REGEX = /\.(sc|sa|c)ss(\?[inline])?$/;
  //   const IMPORT_REGEX = /import\s+(\w+)\s+from\s+['"]([^'"]+\.(?:scss|css|sass))['"]/gm;
  const IMPORT_REGEX =
    /^([ \t]*(?:\/\*.*)?)@(import|use)\s+["']([^"']+\*[^"']*(?:\.scss|\.sass)?)["'];?([ \t]*(?:\/[/*].*)?)$/gm;

  // Path to the directory of the file being processed
  let filePath = '';

  // Name of the file being processed
  let fileName = '';

  function transformCss(csspath) {
    let css = sass.compile(csspath).css;

    function reCompile(styles) {
      if (styles) {
        const IMPORT_REGEX =
          /@import\s+(?:(?:(?:(?:\{[^}]*\})?\s*['"])([^'"]+)(?:['"]\s*(?:as\s+[^,]+)?\s*,?\s*)?)+\s*from\s*)?['"]([^'"]+\.(?:scss|css|sass))['"];/g;

        let result = [];
        try {
          result = [...styles.matchAll(IMPORT_REGEX)];
        } catch (e) {
          result = [];
        }
        if (result.length) {
          // const [importRule, startComment, importType, globPattern, endComment] = result[0];
          console.log(result[0][0]);
          css = sass.compileString(styles);
          reCompile(css);
        }
      }
    }

    reCompile(css);
    return css;
  }

  return {
    name: 'compile-css',
    enforce: 'post',

    transform(src, id) {
      const result = {
        code: src,
        map: null // provide source map if available
      };

      if (FILE_REGEX.test(id)) {
        console.log('styles id', id);
        fileName = path.basename(id);
        filePath = path.dirname(id);

        // result.code = transformStyles(src);
        result.code = transformCss(id).toString();
        // console.log('compiled css', result.code);
      }

      return result;
    }
  };
}


# Kako instalirati node
  - https://nodejs.org/en


# Kako instalirati pakete
  - npm install


# Kako pokrenuti server iz terminala
  - npm run server (pokrece server i kreira build folder)


# Kako otvoriti sajt (pogledaj terminal log)
  - http://localhost:9191
  - local IP http://192.168.100.5:9191 (ako hoces da otvoris na telefonu, nije uvek ista IP adresa)


# Kako menjati CSS/JS/IMG (gulp je podesen da kreira build folder)
   - npm run build
   - npm run watch (u novom tabu - prati izmene na css fajlovima)


# Templejti

   - koristi se nunjucks https://mozilla.github.io/nunjucks

   - konfigurisan je u server.js


# Gulp taskovi

   - styles
        - kreira main.min.css u build/css
        - brise komentare
        - radi konkatenaciju/spajanje fajlova
        - dodaje prefikse (-webkit, -ms, -moz) po .browserslistrc konfigu

   - js
        - kopira fajlove u build/js
        - uglify radi kompresiju

   - images
        - kompresuje fajlove u build/img

   - cssLint
        - validira css i ne kreira novi fajl dok se greske ne poprave
        - pravila su definisana u .stylelintrc

   - validateHtml
   - findNotUsedCSS
   - build - pokrece 'styles', 'images', 'js'
   - watch - prati izmene na css i pokrece 'styles', 'cssLint'

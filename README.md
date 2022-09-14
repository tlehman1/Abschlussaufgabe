# Abschlussaufgabe
Abgabe des Abschlussprojektes von Tobias Krumrein (506269) & Tim Lehmann (503417) im Kurs Geosoftware 1 im SS2022.
Ziel: Gebirge in einer Karte darstellen und beliebig erweitern.
----------------------------------------------------------------------------------------------------------------------------------------------
Wie den Server starten?
- npm install
- npm start
- MongoDB connecten
----------------------------------------------------------------------------------------------------------------------------------------------
Bei der Homepage kann man über die Navbar auf die anderen Seiten navigieren. Auf der "Meine Gebirge" Seite kann man die Map sehen, wo die Gebirge eingeladen werden (leider funktioniert das nicht immer). Bei der "Neues Gebirge" Seite kann man anhand mehrerer Parameter einen Punkt speichern und dieser wird auch erfolgreich in der MongoDB angezeigt. Bei der "Gebirge löschen" Seite kann man den Punkt anhand der ID wieder löschen (das funktioniert nicht wirklich gut). Bei der "Route" Seite kann man anhand eines Klicks auf die Karte den Startpunkt und bei einem weiteren Klick den Endpunkt auswählen. Geplant war, dass der Startpunkt durch den aktuellen Standort-Button ersetzt wird, aber das klappt nicht.
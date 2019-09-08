# User Stories für BookMonkey

## Story - Listenansicht

Als Leser möchte ich einen Überblick über alle vorhandenen Bücher erhalten, um
mir den nächsten Lesetitel heraussuchen zu können.

*   Ein Buch soll durch ein Vorschaubild dargestellt werden.
*   Es sollen sowohl der Titel, der Untertitel als auch die Autoren des Buchs
    dargestellt werden.

## Refactoring - Property Bindings

Um die Komplexität der Listenansicht zu verringern, soll eine Komponente
geschaffen werden, die ein einzelnes Buch repräsentiert.

*   Jeder Listeneintrag der Bücherliste soll durch eine eigene Komponente
    repräsentiert werden.
*   Jedem Listenelement sollen die Daten eines Buches übermittelt werden.

## Story - Events Bindings

Als Leser möchte ich Details eines Buchs abrufen können, um zu entscheiden, ob
der Inhalt für mich von Interesse ist.

*   Bei Auswahl eines Listeneintrags soll die Bücherliste ausgeblendet und
    stattdessen eine Detailansicht mit Büchern angezeigt werden.
*   Es soll ein Button in der Detailansicht existieren, der dafür sorgt, dass
    die Detailansicht ausgeblendet wird und die Liste der Bücher wieder
    eingeblendet wird.

## Refactoring - Codekapselung mit Service

Um die Komplexität der `BookListComponent` zu verringern, soll die
Bereitstellung der Daten ausgelagert werden. Dadurch erreichen wir Code, der
besser lesbar und wartbar ist. Außerdem sind wir künftig in der Lage, die
Datenbereitstellung auszutauschen, ohne dass in der `BookListComponent` eine
Änderung vorgenommen werden muss.

*   Daten eines Buchs sollen aus einer zentralen Quelle geladen werden.
*   Buchinformationen, die an unterschiedlichen Stellen in der
    Benutzeroberfläche dargestellt werden, sollen stets konsistent zueinander
    sein.

## Story - Navigation

Als leser möchte ich mithilfe eines Menüs durch die Anwendung geleitet werden,
um zwischen Inhalten wechseln zu können.

*   Es soll ein Menü im oberen Bereich der Anwendung existieren.
*   Es soll eine Startseite existieren, die beim Aufruf der Anwendung angezeigt
    wird.
*   Es soll ein Menüpunkt existieren, der nach Aufruf die Liste aller Bücher
    anzeigt.
*   Es soll möglich sein, aus der Listenansicht zur Ansicht mit detaillierten
    Informationen zu einem speziellen Buc zu wechseln.
*   Jede einzelne Ansicht wird durch eine eindeutige URL repräsentiert.

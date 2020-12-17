- Erstellen Sie ein Eingabefeld (in App-Komponente) mit einem Change-Listener, der die Länge des eingegebenen Textes darunter ausgibt (z.B. in einem Absatz).
- Erstellen Sie eine neue Komponente (=> ValidationComponent), die die Textlänge als Prop erhält.
- Geben Sie innerhalb der ValidationComponent je nach Textlänge entweder "Text zu kurz" oder "Text lang genug" aus (nehmen Sie z.B. 5 als Mindestlänge)
- Erstellen Sie eine weitere Komponente (=> CharComponent) und gestalten Sie diese als Inline-Box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
- Rendern Sie eine Liste von CharComponents, wobei jede CharComponent einen anderen Buchstaben des eingegebenen Textes (im anfänglichen Eingabefeld) als Requisite erhält.
- Wenn Sie eine CharComponent anklicken, soll sie aus dem eingegebenen Text entfernt werden.

Tipp: Beachten Sie, dass JavaScript-Strings im Grunde Arrays sind!

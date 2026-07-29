# Documents « sur demande » (ODT) — PDF privés

Déposer ici les PDF servis par `/api/ressources/download/[key]`, uniquement
après validation du propriétaire (lien e-mail sécurisé, expirant 7 jours).
Les noms doivent correspondre au champ `file` de `src/content/ressources.ts` :

- `note-presentation-odt.pdf` — Note de présentation ODT
- `fiches-references-gequips.pdf` — Fiches de références GEQUIPS
- `dossier-institutionnel.pdf` — Documents institutionnels (RCCM, NIU, statuts)

Ces fichiers ne sont JAMAIS exposés en statique. Pour un document à mettre en
téléchargement public direct, utiliser plutôt `mode: "download"` + un PDF dans
`public/ressources/`.

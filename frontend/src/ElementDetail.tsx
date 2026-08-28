import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ElementDetail.css';
import { getElement, CATEGORY_LABELS, MOLECULE_NAMES } from './elements';

function ElementDetail() {
  const { number } = useParams<{ number: string }>();
  const navigate = useNavigate();
  const current = Number(number);
  const el = getElement(current);

  const hasPrev = getElement(current - 1) !== undefined;
  const hasNext = getElement(current + 1) !== undefined;

  if (!el) {
    return (
      <div className="ElementDetail">
        <button type="button" className="detail__back" onClick={() => navigate('/sites')}>
          ← Retour au tableau
        </button>
        <p className="detail__notfound">Élément introuvable.</p>
      </div>
    );
  }

  const rows: { label: string; value: React.ReactNode }[] = [
    { label: 'Numéro atomique', value: el.number },
    { label: 'Symbole', value: el.symbol },
    { label: 'Nom', value: el.name },
    { label: 'Masse atomique', value: el.mass },
    { label: 'Catégorie', value: CATEGORY_LABELS[el.category] },
    { label: 'Groupe (colonne)', value: el.col },
    { label: 'Période (rangée)', value: el.row <= 7 ? el.row : '—' },
    {
      label: 'Abondance sur Terre',
      value: el.abundance ?? 'Non disponible',
    },
    {
      label: 'Molécules courantes',
      value:
        el.molecules === undefined ? (
          'Non disponible'
        ) : el.molecules.length === 0 ? (
          'Aucune notable'
        ) : (
          <ul className="detail__molecules">
            {el.molecules.map((formula) => {
              const common = MOLECULE_NAMES[formula];
              return (
                <li key={formula}>
                  {formula}
                  {common ? ` (${common})` : ''}
                </li>
              );
            })}
          </ul>
        ),
    },
    ...(el.applications
      ? [{ label: 'Applications humaines', value: el.applications }]
      : []),
  ];

  const wikiUrl = `https://fr.wikipedia.org/wiki/${encodeURIComponent(el.name)}`;

  return (
    <div className="ElementDetail">
      <button type="button" className="detail__back" onClick={() => navigate('/sites')}>
        ← Retour au tableau
      </button>

      <div className="detail__nav">
        <button
          type="button"
          className="detail__arrow"
          onClick={() => navigate(`/sites/${current - 1}`)}
          disabled={!hasPrev}
          aria-label="Élément précédent"
        >
          ‹
        </button>

        <div className={`detail__card element--${el.category}`}>
          <span className="detail__number">{el.number}</span>
          <span className="detail__symbol">{el.symbol}</span>
          <span className="detail__name">{el.name}</span>
          <span className="detail__mass">{el.mass}</span>
        </div>

        <button
          type="button"
          className="detail__arrow"
          onClick={() => navigate(`/sites/${current + 1}`)}
          disabled={!hasNext}
          aria-label="Élément suivant"
        >
          ›
        </button>
      </div>

      <table className="detail__table">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th>{row.label}</th>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <a
        className="detail__wiki"
        href={wikiUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir sur Wikipédia ↗
      </a>
    </div>
  );
}

export default ElementDetail;

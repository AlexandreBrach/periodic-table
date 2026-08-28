import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sites.css';
import { ELEMENTS, CATEGORY_LABELS, Category } from './elements';

type SortBy = 'number' | 'mass' | null;
type SortDir = 'asc' | 'desc';
type OpenMenu = 'sort' | 'dir' | null;

function Sites() {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<SortBy>(null);
  const [sortDir, setSortDir] = useState<SortDir>('asc');
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);

  const sortLabel =
    sortBy === 'number' ? 'Par numéro atomique' : sortBy === 'mass' ? 'Par masse' : 'Filtre';
  const dirLabel = sortDir === 'asc' ? 'Croissant' : 'Décroissant';

  // Sans critère, on garde la disposition classique du tableau.
  // Avec un critère, on passe en liste triée à plat.
  const displayed = sortBy
    ? [...ELEMENTS].sort((a, b) => {
        const va = sortBy === 'mass' ? parseFloat(a.mass) : a.number;
        const vb = sortBy === 'mass' ? parseFloat(b.mass) : b.number;
        return sortDir === 'asc' ? va - vb : vb - va;
      })
    : ELEMENTS;

  const toggle = (menu: OpenMenu) => setOpenMenu((cur) => (cur === menu ? null : menu));

  return (
    <div className="Sites">
      <h1>Tableau périodique des éléments</h1>

      <div className={`ptable${sortBy ? ' ptable--flat' : ''}`}>
        {displayed.map((el) => (
          <button
            key={el.number}
            type="button"
            className={`element element--${el.category}`}
            style={sortBy ? undefined : { gridColumn: el.col, gridRow: el.row }}
            title={`${el.name} — ${el.mass}`}
            onClick={() => navigate(`/sites/${el.number}`)}
          >
            <span className="element__number">{el.number}</span>
            <span className="element__symbol">{el.symbol}</span>
            <span className="element__name">{el.name}</span>
            <span className="element__mass">{el.mass}</span>
          </button>
        ))}
      </div>

      <div className="legend">
        {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => (
          <div key={cat} className="legend__item">
            <span className={`legend__swatch element--${cat}`} />
            {CATEGORY_LABELS[cat]}
          </div>
        ))}
      </div>

      <div className="filters">
        <div className="dropdown">
          <button
            type="button"
            className={`dropdown__btn${sortBy ? ' dropdown__btn--active' : ''}`}
            onClick={() => toggle('sort')}
          >
            {sortLabel} <span className="dropdown__caret">▾</span>
          </button>
          {openMenu === 'sort' && (
            <div className="dropdown__menu">
              <button
                type="button"
                className="dropdown__item"
                onClick={() => {
                  setSortBy('number');
                  setOpenMenu(null);
                }}
              >
                Par numéro atomique
              </button>
              <button
                type="button"
                className="dropdown__item"
                onClick={() => {
                  setSortBy('mass');
                  setOpenMenu(null);
                }}
              >
                Par masse
              </button>
              <button
                type="button"
                className="dropdown__item"
                onClick={() => {
                  setSortBy(null);
                  setOpenMenu(null);
                }}
              >
                Aucun (tableau)
              </button>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button
            type="button"
            className="dropdown__btn"
            onClick={() => toggle('dir')}
          >
            {dirLabel} <span className="dropdown__caret">▾</span>
          </button>
          {openMenu === 'dir' && (
            <div className="dropdown__menu">
              <button
                type="button"
                className="dropdown__item"
                onClick={() => {
                  setSortDir('asc');
                  setOpenMenu(null);
                }}
              >
                Croissant
              </button>
              <button
                type="button"
                className="dropdown__item"
                onClick={() => {
                  setSortDir('desc');
                  setOpenMenu(null);
                }}
              >
                Décroissant
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sites;

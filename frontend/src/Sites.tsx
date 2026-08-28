import React from 'react';
import './Sites.css';

type Category =
  | 'alkali'
  | 'alkaline'
  | 'transition'
  | 'post-transition'
  | 'metalloid'
  | 'nonmetal'
  | 'halogen'
  | 'noble'
  | 'lanthanide'
  | 'actinide'
  | 'unknown';

interface Element {
  number: number;
  symbol: string;
  name: string;
  mass: string;
  category: Category;
  col: number;
  row: number;
}

const ELEMENTS: Element[] = [
  { number: 1, symbol: 'H', name: 'Hydrogène', mass: '1.008', category: 'nonmetal', col: 1, row: 1 },
  { number: 2, symbol: 'He', name: 'Hélium', mass: '4.003', category: 'noble', col: 18, row: 1 },
  { number: 3, symbol: 'Li', name: 'Lithium', mass: '6.94', category: 'alkali', col: 1, row: 2 },
  { number: 4, symbol: 'Be', name: 'Béryllium', mass: '9.012', category: 'alkaline', col: 2, row: 2 },
  { number: 5, symbol: 'B', name: 'Bore', mass: '10.81', category: 'metalloid', col: 13, row: 2 },
  { number: 6, symbol: 'C', name: 'Carbone', mass: '12.011', category: 'nonmetal', col: 14, row: 2 },
  { number: 7, symbol: 'N', name: 'Azote', mass: '14.007', category: 'nonmetal', col: 15, row: 2 },
  { number: 8, symbol: 'O', name: 'Oxygène', mass: '15.999', category: 'nonmetal', col: 16, row: 2 },
  { number: 9, symbol: 'F', name: 'Fluor', mass: '18.998', category: 'halogen', col: 17, row: 2 },
  { number: 10, symbol: 'Ne', name: 'Néon', mass: '20.180', category: 'noble', col: 18, row: 2 },
  { number: 11, symbol: 'Na', name: 'Sodium', mass: '22.990', category: 'alkali', col: 1, row: 3 },
  { number: 12, symbol: 'Mg', name: 'Magnésium', mass: '24.305', category: 'alkaline', col: 2, row: 3 },
  { number: 13, symbol: 'Al', name: 'Aluminium', mass: '26.982', category: 'post-transition', col: 13, row: 3 },
  { number: 14, symbol: 'Si', name: 'Silicium', mass: '28.085', category: 'metalloid', col: 14, row: 3 },
  { number: 15, symbol: 'P', name: 'Phosphore', mass: '30.974', category: 'nonmetal', col: 15, row: 3 },
  { number: 16, symbol: 'S', name: 'Soufre', mass: '32.06', category: 'nonmetal', col: 16, row: 3 },
  { number: 17, symbol: 'Cl', name: 'Chlore', mass: '35.45', category: 'halogen', col: 17, row: 3 },
  { number: 18, symbol: 'Ar', name: 'Argon', mass: '39.948', category: 'noble', col: 18, row: 3 },
  { number: 19, symbol: 'K', name: 'Potassium', mass: '39.098', category: 'alkali', col: 1, row: 4 },
  { number: 20, symbol: 'Ca', name: 'Calcium', mass: '40.078', category: 'alkaline', col: 2, row: 4 },
  { number: 21, symbol: 'Sc', name: 'Scandium', mass: '44.956', category: 'transition', col: 3, row: 4 },
  { number: 22, symbol: 'Ti', name: 'Titane', mass: '47.867', category: 'transition', col: 4, row: 4 },
  { number: 23, symbol: 'V', name: 'Vanadium', mass: '50.942', category: 'transition', col: 5, row: 4 },
  { number: 24, symbol: 'Cr', name: 'Chrome', mass: '51.996', category: 'transition', col: 6, row: 4 },
  { number: 25, symbol: 'Mn', name: 'Manganèse', mass: '54.938', category: 'transition', col: 7, row: 4 },
  { number: 26, symbol: 'Fe', name: 'Fer', mass: '55.845', category: 'transition', col: 8, row: 4 },
  { number: 27, symbol: 'Co', name: 'Cobalt', mass: '58.933', category: 'transition', col: 9, row: 4 },
  { number: 28, symbol: 'Ni', name: 'Nickel', mass: '58.693', category: 'transition', col: 10, row: 4 },
  { number: 29, symbol: 'Cu', name: 'Cuivre', mass: '63.546', category: 'transition', col: 11, row: 4 },
  { number: 30, symbol: 'Zn', name: 'Zinc', mass: '65.38', category: 'transition', col: 12, row: 4 },
  { number: 31, symbol: 'Ga', name: 'Gallium', mass: '69.723', category: 'post-transition', col: 13, row: 4 },
  { number: 32, symbol: 'Ge', name: 'Germanium', mass: '72.630', category: 'metalloid', col: 14, row: 4 },
  { number: 33, symbol: 'As', name: 'Arsenic', mass: '74.922', category: 'metalloid', col: 15, row: 4 },
  { number: 34, symbol: 'Se', name: 'Sélénium', mass: '78.971', category: 'nonmetal', col: 16, row: 4 },
  { number: 35, symbol: 'Br', name: 'Brome', mass: '79.904', category: 'halogen', col: 17, row: 4 },
  { number: 36, symbol: 'Kr', name: 'Krypton', mass: '83.798', category: 'noble', col: 18, row: 4 },
  { number: 37, symbol: 'Rb', name: 'Rubidium', mass: '85.468', category: 'alkali', col: 1, row: 5 },
  { number: 38, symbol: 'Sr', name: 'Strontium', mass: '87.62', category: 'alkaline', col: 2, row: 5 },
  { number: 39, symbol: 'Y', name: 'Yttrium', mass: '88.906', category: 'transition', col: 3, row: 5 },
  { number: 40, symbol: 'Zr', name: 'Zirconium', mass: '91.224', category: 'transition', col: 4, row: 5 },
  { number: 41, symbol: 'Nb', name: 'Niobium', mass: '92.906', category: 'transition', col: 5, row: 5 },
  { number: 42, symbol: 'Mo', name: 'Molybdène', mass: '95.95', category: 'transition', col: 6, row: 5 },
  { number: 43, symbol: 'Tc', name: 'Technétium', mass: '98', category: 'transition', col: 7, row: 5 },
  { number: 44, symbol: 'Ru', name: 'Ruthénium', mass: '101.07', category: 'transition', col: 8, row: 5 },
  { number: 45, symbol: 'Rh', name: 'Rhodium', mass: '102.91', category: 'transition', col: 9, row: 5 },
  { number: 46, symbol: 'Pd', name: 'Palladium', mass: '106.42', category: 'transition', col: 10, row: 5 },
  { number: 47, symbol: 'Ag', name: 'Argent', mass: '107.87', category: 'transition', col: 11, row: 5 },
  { number: 48, symbol: 'Cd', name: 'Cadmium', mass: '112.41', category: 'transition', col: 12, row: 5 },
  { number: 49, symbol: 'In', name: 'Indium', mass: '114.82', category: 'post-transition', col: 13, row: 5 },
  { number: 50, symbol: 'Sn', name: 'Étain', mass: '118.71', category: 'post-transition', col: 14, row: 5 },
  { number: 51, symbol: 'Sb', name: 'Antimoine', mass: '121.76', category: 'metalloid', col: 15, row: 5 },
  { number: 52, symbol: 'Te', name: 'Tellure', mass: '127.60', category: 'metalloid', col: 16, row: 5 },
  { number: 53, symbol: 'I', name: 'Iode', mass: '126.90', category: 'halogen', col: 17, row: 5 },
  { number: 54, symbol: 'Xe', name: 'Xénon', mass: '131.29', category: 'noble', col: 18, row: 5 },
  { number: 55, symbol: 'Cs', name: 'Césium', mass: '132.91', category: 'alkali', col: 1, row: 6 },
  { number: 56, symbol: 'Ba', name: 'Baryum', mass: '137.33', category: 'alkaline', col: 2, row: 6 },
  { number: 57, symbol: 'La', name: 'Lanthane', mass: '138.91', category: 'lanthanide', col: 3, row: 6 },
  { number: 72, symbol: 'Hf', name: 'Hafnium', mass: '178.49', category: 'transition', col: 4, row: 6 },
  { number: 73, symbol: 'Ta', name: 'Tantale', mass: '180.95', category: 'transition', col: 5, row: 6 },
  { number: 74, symbol: 'W', name: 'Tungstène', mass: '183.84', category: 'transition', col: 6, row: 6 },
  { number: 75, symbol: 'Re', name: 'Rhénium', mass: '186.21', category: 'transition', col: 7, row: 6 },
  { number: 76, symbol: 'Os', name: 'Osmium', mass: '190.23', category: 'transition', col: 8, row: 6 },
  { number: 77, symbol: 'Ir', name: 'Iridium', mass: '192.22', category: 'transition', col: 9, row: 6 },
  { number: 78, symbol: 'Pt', name: 'Platine', mass: '195.08', category: 'transition', col: 10, row: 6 },
  { number: 79, symbol: 'Au', name: 'Or', mass: '196.97', category: 'transition', col: 11, row: 6 },
  { number: 80, symbol: 'Hg', name: 'Mercure', mass: '200.59', category: 'transition', col: 12, row: 6 },
  { number: 81, symbol: 'Tl', name: 'Thallium', mass: '204.38', category: 'post-transition', col: 13, row: 6 },
  { number: 82, symbol: 'Pb', name: 'Plomb', mass: '207.2', category: 'post-transition', col: 14, row: 6 },
  { number: 83, symbol: 'Bi', name: 'Bismuth', mass: '208.98', category: 'post-transition', col: 15, row: 6 },
  { number: 84, symbol: 'Po', name: 'Polonium', mass: '209', category: 'post-transition', col: 16, row: 6 },
  { number: 85, symbol: 'At', name: 'Astate', mass: '210', category: 'halogen', col: 17, row: 6 },
  { number: 86, symbol: 'Rn', name: 'Radon', mass: '222', category: 'noble', col: 18, row: 6 },
  { number: 87, symbol: 'Fr', name: 'Francium', mass: '223', category: 'alkali', col: 1, row: 7 },
  { number: 88, symbol: 'Ra', name: 'Radium', mass: '226', category: 'alkaline', col: 2, row: 7 },
  { number: 89, symbol: 'Ac', name: 'Actinium', mass: '227', category: 'actinide', col: 3, row: 7 },
  { number: 104, symbol: 'Rf', name: 'Rutherfordium', mass: '267', category: 'transition', col: 4, row: 7 },
  { number: 105, symbol: 'Db', name: 'Dubnium', mass: '268', category: 'transition', col: 5, row: 7 },
  { number: 106, symbol: 'Sg', name: 'Seaborgium', mass: '269', category: 'transition', col: 6, row: 7 },
  { number: 107, symbol: 'Bh', name: 'Bohrium', mass: '270', category: 'transition', col: 7, row: 7 },
  { number: 108, symbol: 'Hs', name: 'Hassium', mass: '269', category: 'transition', col: 8, row: 7 },
  { number: 109, symbol: 'Mt', name: 'Meitnerium', mass: '278', category: 'unknown', col: 9, row: 7 },
  { number: 110, symbol: 'Ds', name: 'Darmstadtium', mass: '281', category: 'unknown', col: 10, row: 7 },
  { number: 111, symbol: 'Rg', name: 'Roentgenium', mass: '282', category: 'unknown', col: 11, row: 7 },
  { number: 112, symbol: 'Cn', name: 'Copernicium', mass: '285', category: 'transition', col: 12, row: 7 },
  { number: 113, symbol: 'Nh', name: 'Nihonium', mass: '286', category: 'unknown', col: 13, row: 7 },
  { number: 114, symbol: 'Fl', name: 'Flérovium', mass: '289', category: 'unknown', col: 14, row: 7 },
  { number: 115, symbol: 'Mc', name: 'Moscovium', mass: '290', category: 'unknown', col: 15, row: 7 },
  { number: 116, symbol: 'Lv', name: 'Livermorium', mass: '293', category: 'unknown', col: 16, row: 7 },
  { number: 117, symbol: 'Ts', name: 'Tennesse', mass: '294', category: 'unknown', col: 17, row: 7 },
  { number: 118, symbol: 'Og', name: 'Oganesson', mass: '294', category: 'unknown', col: 18, row: 7 },
  // Lanthanides (rangée détachée)
  { number: 58, symbol: 'Ce', name: 'Cérium', mass: '140.12', category: 'lanthanide', col: 4, row: 9 },
  { number: 59, symbol: 'Pr', name: 'Praséodyme', mass: '140.91', category: 'lanthanide', col: 5, row: 9 },
  { number: 60, symbol: 'Nd', name: 'Néodyme', mass: '144.24', category: 'lanthanide', col: 6, row: 9 },
  { number: 61, symbol: 'Pm', name: 'Prométhium', mass: '145', category: 'lanthanide', col: 7, row: 9 },
  { number: 62, symbol: 'Sm', name: 'Samarium', mass: '150.36', category: 'lanthanide', col: 8, row: 9 },
  { number: 63, symbol: 'Eu', name: 'Europium', mass: '151.96', category: 'lanthanide', col: 9, row: 9 },
  { number: 64, symbol: 'Gd', name: 'Gadolinium', mass: '157.25', category: 'lanthanide', col: 10, row: 9 },
  { number: 65, symbol: 'Tb', name: 'Terbium', mass: '158.93', category: 'lanthanide', col: 11, row: 9 },
  { number: 66, symbol: 'Dy', name: 'Dysprosium', mass: '162.50', category: 'lanthanide', col: 12, row: 9 },
  { number: 67, symbol: 'Ho', name: 'Holmium', mass: '164.93', category: 'lanthanide', col: 13, row: 9 },
  { number: 68, symbol: 'Er', name: 'Erbium', mass: '167.26', category: 'lanthanide', col: 14, row: 9 },
  { number: 69, symbol: 'Tm', name: 'Thulium', mass: '168.93', category: 'lanthanide', col: 15, row: 9 },
  { number: 70, symbol: 'Yb', name: 'Ytterbium', mass: '173.05', category: 'lanthanide', col: 16, row: 9 },
  { number: 71, symbol: 'Lu', name: 'Lutécium', mass: '174.97', category: 'lanthanide', col: 17, row: 9 },
  // Actinides (rangée détachée)
  { number: 90, symbol: 'Th', name: 'Thorium', mass: '232.04', category: 'actinide', col: 4, row: 10 },
  { number: 91, symbol: 'Pa', name: 'Protactinium', mass: '231.04', category: 'actinide', col: 5, row: 10 },
  { number: 92, symbol: 'U', name: 'Uranium', mass: '238.03', category: 'actinide', col: 6, row: 10 },
  { number: 93, symbol: 'Np', name: 'Neptunium', mass: '237', category: 'actinide', col: 7, row: 10 },
  { number: 94, symbol: 'Pu', name: 'Plutonium', mass: '244', category: 'actinide', col: 8, row: 10 },
  { number: 95, symbol: 'Am', name: 'Américium', mass: '243', category: 'actinide', col: 9, row: 10 },
  { number: 96, symbol: 'Cm', name: 'Curium', mass: '247', category: 'actinide', col: 10, row: 10 },
  { number: 97, symbol: 'Bk', name: 'Berkélium', mass: '247', category: 'actinide', col: 11, row: 10 },
  { number: 98, symbol: 'Cf', name: 'Californium', mass: '251', category: 'actinide', col: 12, row: 10 },
  { number: 99, symbol: 'Es', name: 'Einsteinium', mass: '252', category: 'actinide', col: 13, row: 10 },
  { number: 100, symbol: 'Fm', name: 'Fermium', mass: '257', category: 'actinide', col: 14, row: 10 },
  { number: 101, symbol: 'Md', name: 'Mendélévium', mass: '258', category: 'actinide', col: 15, row: 10 },
  { number: 102, symbol: 'No', name: 'Nobélium', mass: '259', category: 'actinide', col: 16, row: 10 },
  { number: 103, symbol: 'Lr', name: 'Lawrencium', mass: '266', category: 'actinide', col: 17, row: 10 },
];

const CATEGORY_LABELS: Record<Category, string> = {
  alkali: 'Métaux alcalins',
  alkaline: 'Métaux alcalino-terreux',
  transition: 'Métaux de transition',
  'post-transition': 'Métaux pauvres',
  metalloid: 'Métalloïdes',
  nonmetal: 'Non-métaux',
  halogen: 'Halogènes',
  noble: 'Gaz nobles',
  lanthanide: 'Lanthanides',
  actinide: 'Actinides',
  unknown: 'Inconnus',
};

function Sites() {
  return (
    <div className="Sites">
      <h1>Tableau périodique des éléments</h1>

      <div className="ptable">
        {ELEMENTS.map((el) => (
          <div
            key={el.number}
            className={`element element--${el.category}`}
            style={{ gridColumn: el.col, gridRow: el.row }}
            title={`${el.name} — ${el.mass}`}
          >
            <span className="element__number">{el.number}</span>
            <span className="element__symbol">{el.symbol}</span>
            <span className="element__name">{el.name}</span>
            <span className="element__mass">{el.mass}</span>
          </div>
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
    </div>
  );
}

export default Sites;

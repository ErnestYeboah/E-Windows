/* eslint-disable react/prop-types */
export default function NavigationButton({ onClick }) {
  return (
    <div className="nav__btn">
      <button onClick={onClick} className="close__btn">
        X
      </button>
    </div>
  );
}

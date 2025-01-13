export default function Button(props) {
  const { onClick, text, SVG, isOpen } = props;
  return (
    <button onClick={onClick}
    className={`p-2 inline-flex gap-2 bg-gray-100 text-black fill-black hover:bg-black hover:text-gray-100 hover:fill-white font-bold rounded-md transition`}>
      {text}
      {(isOpen!==undefined) ? SVG(isOpen) : SVG}
    </button>
  );
}
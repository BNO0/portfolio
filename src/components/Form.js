
export default function Form(props) {
  const { Component, data, bgColor, textColor } = props;
  return (
    <div className={`p-10 min-h-[500px] place-items-center ${bgColor} ${textColor}`}>
      <div className={`max-w-screen-2xl w-screen`}><Component data={data}></Component></div>
    </div>
  );
}
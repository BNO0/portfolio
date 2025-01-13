
/**
 * @param {*} props { Component=reactComponent, data, colors{bgColor:..., textColor:...}, css }
 * @returns 
 */
export default function Form(props) {
  const { Component, data, colors, css } = props;
  return (
    <div className={`p-10 pb-[1px] place-items-center ${colors.bgColor} ${colors.textColor} ${css}`}>
      <div className={`max-w-screen-2xl w-screen`}><Component data={data} css={`m-10`}></Component></div>
    </div>
  );
}
import './index.css'
const Box = (props:any) => {
  return (
    <div onClick={props.onClick} className='box'>
      {props.value}
    </div>
  )
}

export default Box

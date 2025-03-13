interface Props {
  onUpdate: ()=>void;
}

const UpdateButton = ({onUpdate}: Props) => {
  return (
    <button onClick={onUpdate}>Update</button>
  )
}

export default UpdateButton
